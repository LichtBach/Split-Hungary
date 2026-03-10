import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoForm = ({ isOpen, onClose }: DemoFormProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track which steps have been triggered to avoid duplicate events
  const triggeredSteps = useRef<Set<string>>(new Set());

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    companyName: "",
    industry: "",
    phone: "",
    specialRequests: "",
  });

  // Helper function to track form step progression
  const trackFormStep = (step: string) => {
    // Only track each step once
    if (!triggeredSteps.current.has(step)) {
      triggeredSteps.current.add(step);

      // Push event to dataLayer
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'demo_form_step',
          step: step
        });

        console.log(`[Demo Form Step] Step ${step} completed`);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Track step based on field name (only when user starts typing)
    if (value.length > 0) {
      const stepMap: { [key: string]: string } = {
        email: '1',
        firstName: '2',
        companyName: '3',
        phone: '6',
        specialRequests: '7'
      };

      if (stepMap[name]) {
        trackFormStep(stepMap[name]);
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    // Track step 5 for industry selection
    if (name === 'industry' && value) {
      trackFormStep('5');
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://splitagency23.app.n8n.cloud/webhook/form_submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          companyName: formData.companyName,
          industry: formData.industry,
          phone: formData.phone,
          specialRequests: formData.specialRequests,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Push demo_lead event to dataLayer with enhanced conversion data
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'demo_lead',
            form_name: 'demo_request',
            industry: formData.industry,
            company_name: formData.companyName,
            name: formData.firstName,
            email: formData.email,
            phone_number: formData.phone
          });

          console.log(`[Demo Lead] Submitted | Industry: ${formData.industry} | Company: ${formData.companyName} | Name: ${formData.firstName} | Email: ${formData.email}`);
        }

        toast({
          title: t('demoForm.successTitle'),
          description: t('demoForm.successMessage'),
        });

        // Reset form
        setFormData({
          email: "",
          firstName: "",
          companyName: "",
          industry: "",
          phone: "",
          specialRequests: "",
        });

        // Reset triggered steps for next time
        triggeredSteps.current.clear();

        onClose();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: t('demoForm.errorTitle'),
        description: t('demoForm.errorMessage'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle dialog close - reset triggered steps
  const handleClose = () => {
    triggeredSteps.current.clear();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold !text-black">
            {t('demoForm.title')}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {t('demoForm.description')}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-1.5">
              <Label className="!text-black" htmlFor="firstName">
                {t('demoForm.firstName')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder={t('demoForm.firstNamePlaceholder')}
                className="bg-transparent border-2 border-black focus:ring-2 focus:ring-black !text-black placeholder:text-gray-500 h-10"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label className="!text-black" htmlFor="email">
                {t('demoForm.email')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="bg-transparent border-2 border-black focus:ring-2 focus:ring-black !text-black placeholder:text-gray-500 h-10"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <Label className="!text-black" htmlFor="phone">
                {t('demoForm.phone')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t('demoForm.phonePlaceholder')}
                className="bg-transparent border-2 border-black focus:ring-2 focus:ring-black !text-black placeholder:text-gray-500 h-10"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <Label className="!text-black" htmlFor="companyName">
                {t('demoForm.companyName')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder={t('demoForm.companyNamePlaceholder')}
                className="bg-transparent border-2 border-black focus:ring-2 focus:ring-black !text-black placeholder:text-gray-500 h-10"
              />
            </div>
          </div>

          {/* Industry */}
          <div className="space-y-1.5">
            <Label className="!text-black" htmlFor="industry">
              {t('demoForm.industry')} <span className="text-destructive">*</span>
            </Label>
            <Select
              required
              value={formData.industry}
              onValueChange={(value) => handleSelectChange("industry", value)}
            >
              <SelectTrigger className="bg-transparent border-2 border-black focus:ring-2 focus:ring-black !text-black h-10">
                <SelectValue placeholder={t('demoForm.industryPlaceholder')} />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="ecommerce">{t('demoForm.industries.ecommerce')}</SelectItem>
                <SelectItem value="healthcare">{t('demoForm.industries.healthcare')}</SelectItem>
                <SelectItem value="education">{t('demoForm.industries.education')}</SelectItem>
                <SelectItem value="realestate">{t('demoForm.industries.realestate')}</SelectItem>
                <SelectItem value="hospitality">{t('demoForm.industries.hospitality')}</SelectItem>
                <SelectItem value="finance">{t('demoForm.industries.finance')}</SelectItem>
                <SelectItem value="technology">{t('demoForm.industries.technology')}</SelectItem>
                <SelectItem value="retail">{t('demoForm.industries.retail')}</SelectItem>
                <SelectItem value="other">{t('demoForm.industries.other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Special Requests */}
          <div className="space-y-1.5">
            <Label className="!text-black" htmlFor="specialRequests">
              {t('demoForm.specialRequests')}
            </Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder={t('demoForm.specialRequestsPlaceholder')}
              rows={3}
              className="bg-transparent border-2 border-black focus:ring-2 focus:ring-black !text-black placeholder:text-gray-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="flex-1 h-12 text-base font-bold bg-black text-white hover:bg-gray-800 border-2 border-black transition-all hover:scale-[1.01]"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('demoForm.submitting') : t('demoForm.submit')}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="h-12 border-2 border-black text-black hover:bg-gray-100"
              disabled={isSubmitting}
            >
              {t('demoForm.cancel')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
