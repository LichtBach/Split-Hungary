import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { MetricsCard } from "./MetricsCard";
import { cn } from "@/lib/utils";

interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface SolutionShowcaseProps {
  title: string;
  subtitle: string;
  benefits: string[];
  metrics: {
    title: string;
    data: Metric[];
  };
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  className?: string;
}

export const SolutionShowcase = ({
  title,
  subtitle,
  benefits,
  metrics,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  className,
}: SolutionShowcaseProps) => {
  return (
    <div className={cn("space-y-12", className)}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </div>

      {/* Benefits and Metrics Grid */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Benefits Card */}
        <Card className="border-border bg-card/50 backdrop-blur-sm h-full">
          <CardContent className="p-8 space-y-6">
            <h3 className="text-2xl font-semibold">Beneficii Cheie</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Metrics Card */}
        <MetricsCard title={metrics.title} metrics={metrics.data} className="h-full" />
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 border border-primary/20 p-8 md:p-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold">{ctaTitle}</h3>
          <p className="text-lg text-muted-foreground">{ctaDescription}</p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all font-semibold"
          >
            {ctaButtonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
