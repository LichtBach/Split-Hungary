import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DemoForm } from "@/components/DemoForm";
import { WinWinSection } from "@/components/WinWinSection";
import { CaseStudyProof } from "@/components/CaseStudyProof";
import { useSectionVisibility } from "@/hooks/use-section-visibility";
import "@/i18n/config";
import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  Globe,
  Zap,
  TrendingUp,
  CheckCircle2,
  Bot,
  Mail,
  ChevronDown,
  Star,
  AlertCircle,
  TrendingDown,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const AgentAI = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  // Calculator state
  const [numAgents, setNumAgents] = useState<number>(3);
  const [avgSalary, setAvgSalary] = useState<number>(3000);
  const agentsField1Changed = useRef<boolean>(false);
  const agentsField2Changed = useRef<boolean>(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const openDemoForm = () => setIsDemoFormOpen(true);
  const closeDemoForm = () => setIsDemoFormOpen(false);

  // Track section visibility for analytics
  useSectionVisibility();

  // Countdown timer state for promotional section
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to (7 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 7);
    const targetTime = countDownDate.getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to Calendly section
  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('contact-form');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Initialize Calendly widget with priority loading
  useEffect(() => {
    window.scrollTo(0, 0);

    const initCalendly = () => {
      if (window.Calendly) {
        const widgets = document.querySelectorAll('.calendly-inline-widget');
        widgets.forEach((widget) => {
          const url = widget.getAttribute('data-url');
          if (url) {
            window.Calendly.initInlineWidget({
              url: url,
              parentElement: widget,
            });
          }
        });
      }
    };

    const existingScript = document.querySelector('script[src*="calendly"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      // Remove async for priority loading
      script.async = false;
      script.onload = initCalendly;
      document.head.appendChild(script);

      // Preload for faster loading
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'script';
      preloadLink.href = 'https://assets.calendly.com/assets/external/widget.js';
      document.head.appendChild(preloadLink);
    } else {
      initCalendly();
    }
  }, []);

  // Benefits data
  const benefits = [
    {
      icon: Clock,
      titleKey: "available247",
      descKey: "available247Desc",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Globe,
      titleKey: "romanian",
      descKey: "romanianDesc",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      titleKey: "instant",
      descKey: "instantDesc",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      titleKey: "scalable",
      descKey: "scalableDesc",
      color: "from-orange-500 to-orange-600",
    },
  ];



  // Calculator logic
  const totalMonthlyCost = numAgents * avgSalary * 3; // x3 for 24/7 coverage (3 shifts)
  const savings = totalMonthlyCost * 0.75; // 75% reduction with AI

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Function to track calculator usage
  const trackCalculatorUsage = (category: string, field1Value: number, field2Value: number) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cost_calculated',
        parameter1: category,
        parameter2: field1Value.toString(),
        parameter3: field2Value.toString()
      });

      console.log(`[Cost Calculator] Tracked: ${category} | Field1: ${field1Value} | Field2: ${field2Value}`);
    }
  };

  // Debounced tracking - fires 5 seconds after last change
  const scheduleTracking = (category: string, field1Value: number, field2Value: number) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      trackCalculatorUsage(category, field1Value, field2Value);
    }, 5000);
  };

  // Handle calculator field changes
  const handleNumAgentsChange = (value: number) => {
    setNumAgents(value);
    agentsField1Changed.current = true;
    scheduleTracking("Costuri Agenti Vocali", value, avgSalary);
  };

  const handleAvgSalaryChange = (value: number) => {
    setAvgSalary(value);
    agentsField2Changed.current = true;
    scheduleTracking("Costuri Agenti Vocali", numAgents, value);
  };

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <html lang={currentLang} />
        <title>{currentLang === 'ro'
          ? 'Split Agency - Agent Vocal AI România'
          : 'Split Agency - AI Voice Agent Romania'
        }</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={currentLang === 'ro'
          ? 'Split Agency - Agent Vocal AI România'
          : 'Split Agency - AI Voice Agent Romania'
        } />
        <meta property="og:description" content={currentLang === 'ro'
          ? 'Agent vocal AI disponibil 24/7 în limba română. Automatizare completă pentru suport clienți și vânzări.'
          : 'AI voice agent available 24/7 in Romanian. Complete automation for customer support and sales.'
        } />
        <meta property="og:image" content="https://res.cloudinary.com/dmxicwsh7/image/upload/w_1200,h_630,c_pad,b_rgb:1a1a1a/v1763209088/Asset_2_bxzp2u.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={currentLang === 'ro'
          ? 'Split Agency - Agent Vocal AI România'
          : 'Split Agency - AI Voice Agent Romania'
        } />
        <meta property="twitter:description" content={currentLang === 'ro'
          ? 'Agent vocal AI disponibil 24/7 în limba română. Automatizare completă pentru suport clienți și vânzări.'
          : 'AI voice agent available 24/7 in Romanian. Complete automation for customer support and sales.'
        } />
        <meta property="twitter:image" content="https://res.cloudinary.com/dmxicwsh7/image/upload/w_1200,h_630,c_pad,b_rgb:1a1a1a/v1763209088/Asset_2_bxzp2u.png" />
      </Helmet>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
        {/* Removed gradients and grid for pure white look */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-medium">
              <Phone className="w-4 h-4" />
              {t('voiceAgent.hero.badge')}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-black">
              {t('voiceAgent.hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 max-w-3xl mx-auto leading-relaxed">
              {t('voiceAgent.hero.subtitle')}
            </p>

            {/* YouTube Video Embed */}
            <div className="w-full max-w-4xl mx-auto pt-8">
              <div className="relative w-full rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/L2ZfeGdPBhA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Real-time note */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-black text-sm text-black font-bold mt-6">
              <Bot className="w-4 h-4 text-black" />
              <span className="font-medium">{t('voiceAgent.hero.realTime')}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 w-full sm:w-auto text-xs md:text-sm lg:text-base px-4 md:px-6 py-4 md:py-5 lg:py-6 font-bold shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all bg-black text-white hover:bg-transparent hover:text-black border-2 border-black rounded-xl [animation:scale-pulse_2s_ease-in-out_infinite] hover:[animation:none]"
                onClick={scrollToCalendly}
                style={{
                  animationName: 'scalePulse'
                }}
              >
                {t('voiceAgent.hero.getStarted')}
              </Button>
              <style>{`
                @keyframes scalePulse {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.05); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section id="contact-form" className="container mx-auto px-6 md:px-4 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              {t('newHomepage.calendly.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('newHomepage.calendly.description')}
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-xl border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hunor-splitagency/automatizare-ai?hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '1000px', width: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-6 md:px-4 py-12 md:py-16 lg:py-20 bg-white">
          <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {t('voiceAgent.benefits.title')}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('voiceAgent.benefits.subtitle')}
            </p>
          </div>

          {/* 2-Column Layout: Benefits + Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left: Benefits Content */}
            <div className="space-y-6 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="border-2 border-black bg-white shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group rounded-xl overflow-hidden">
                      <CardContent className="p-5 md:p-6 lg:p-8 space-y-3 md:space-y-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-black break-words">
                          {t(`voiceAgent.benefits.${benefit.titleKey}`)}
                        </h3>
                        <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium break-words">
                          {t(`voiceAgent.benefits.${benefit.descKey}`)}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Right: Calculator */}
            <div className="lg:sticky lg:top-24">
              <Card className="p-5 md:p-6 lg:p-8 bg-white border-2 border-black shadow-lg md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                <div className="space-y-6 md:space-y-8">
                  {/* Calculator Header */}
                  <div className="text-center space-y-3 md:space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider border border-black">
                      <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      <span className="break-words">{t('voiceAgent.calculator.badge')}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black break-words px-2">
                      {t('voiceAgent.calculator.title')}
                    </h3>
                    <p className="text-sm md:text-base text-gray-800 font-medium break-words px-2">
                      {t('voiceAgent.calculator.subtitle')}
                    </p>
                  </div>

                  {/* Calculator Inputs */}
                  <div className="space-y-5 md:space-y-6 bg-white p-4 md:p-6 rounded-xl border-2 border-black">
                    <div className="space-y-2 md:space-y-3">
                      <Label htmlFor="numAgents" className="text-sm md:text-base font-bold text-black break-words">
                        {t('voiceAgent.calculator.numAgents')}
                      </Label>
                      <Input
                        id="numAgents"
                        type="number"
                        min="1"
                        value={numAgents}
                        onChange={(e) => handleNumAgentsChange(Number(e.target.value))}
                        className="text-base md:text-lg h-11 md:h-12 bg-white border-2 border-black focus:ring-0 focus:border-black rounded-lg text-black"
                      />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <Label htmlFor="avgSalary" className="text-sm md:text-base font-bold text-black break-words">{t('voiceAgent.calculator.avgSalary')}</Label>
                      <Input
                        id="avgSalary"
                        type="number"
                        min="0"
                        step="100"
                        value={avgSalary}
                        onChange={(e) => handleAvgSalaryChange(Number(e.target.value))}
                        className="text-base md:text-lg h-11 md:h-12 bg-white border-2 border-black focus:ring-0 focus:border-black rounded-lg text-black"
                      />
                    </div>
                  </div>

                  {/* Calculator Results */}
                  <div className="grid gap-3 md:gap-4">
                    {/* Losses */}
                    <Card className="p-4 md:p-5 bg-white border-2 border-black relative overflow-hidden shadow-none rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-xs font-bold text-black uppercase tracking-wider break-words pr-2">{t('voiceAgent.calculator.totalCost')}</p>
                        <TrendingUp className="w-4 h-4 text-black flex-shrink-0" />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-black break-all">{formatCurrency(totalMonthlyCost)}</p>
                      <p className="text-xs text-gray-600 mt-1 break-words">{t('voiceAgent.calculator.perMonth')}</p>
                    </Card>

                    {/* Savings */}
                    <Card className="p-5 md:p-6 bg-black text-white border-2 border-black relative overflow-hidden shadow-sm rounded-lg">
                      <div className="absolute top-2 right-2 md:top-0 md:right-0 md:p-3">
                        <div className="bg-white text-black text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-md flex items-center gap-0.5 md:gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3" />
                          -75%
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs md:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 break-words pr-14 md:pr-12">
                          <TrendingDown className="w-4 h-4 text-white flex-shrink-0" />
                          <span className="break-words">{t('voiceAgent.calculator.saveWithAI')}</span>
                        </p>
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight break-all">
                          {formatCurrency(savings)}
                        </p>
                        <p className="text-xs md:text-sm text-gray-300 font-medium break-words">
                          {t('voiceAgent.calculator.reduction')}
                        </p>
                      </div>
                    </Card>
                  </div>

                  {/* Yearly Estimate */}
                  <div className="text-center py-2">
                    <p className="text-xs md:text-sm text-gray-600 font-medium break-words px-2">
                      {t('voiceAgent.calculator.yearlyEstimate')}: <span className="text-base md:text-lg font-bold text-black break-all">{formatCurrency(savings * 12)}</span>
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 w-full md:w-auto text-xs md:text-sm lg:text-base px-4 md:px-6 py-4 md:py-5 lg:py-6 font-bold shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all bg-black text-white hover:bg-transparent hover:text-black border-2 border-black rounded-xl [animation:scale-pulse_2s_ease-in-out_infinite] hover:[animation:none]"
                      onClick={scrollToCalendly}
                      style={{
                        animationName: 'scalePulse'
                      }}
                    >
                      {t('voiceAgent.cta.button')}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
      </section>

      {/* Proof of Concept / Case Study Section */}
      <CaseStudyProof id="results" onCtaClick={scrollToCalendly} theme="blackwhite" />

      {/* Win-Win Section */}
      <WinWinSection showCta={true} onCtaClick={scrollToCalendly} theme="blackwhite" />

      {/* Promotional Section */}
      <section id="promotional" className="container mx-auto px-6 md:px-4 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-black shadow-lg md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 lg:p-10 bg-white rounded-xl">
            <div className="text-center space-y-4 mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
                Alakítsd át vállalkozásodat 7 nap alatt AI-val
              </h2>
            </div>

            {/* Countdown Timer */}
            <div className="mb-6 md:mb-8">
              <p className="text-center text-lg font-bold mb-4 text-black">Az ajánlat lejár:</p>
              <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-xl mx-auto">
                <div className="bg-white border-2 border-black rounded-xl p-3 md:p-4 text-center shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-bold">Nap</div>
                </div>
                <div className="bg-white border-2 border-black rounded-xl p-3 md:p-4 text-center shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-bold">Óra</div>
                </div>
                <div className="bg-white border-2 border-black rounded-xl p-3 md:p-4 text-center shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-bold">Perc</div>
                </div>
                <div className="bg-white border-2 border-black rounded-xl p-3 md:p-4 text-center shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-bold">Mp</div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="text-center space-y-3 mb-8">
              <p className="text-base md:text-lg font-medium text-gray-900 mb-4">
                Kapj INGYENES konzultációt szakértőinktől<br className="hidden md:block" />
                akik segítenek a vállalkozásoknak legalább 45%-kal növekedni!
              </p>
              <div className="flex flex-col gap-3 max-w-md mx-auto">
                <div className="flex items-center gap-3 text-sm md:text-base text-black font-medium text-left">
                  <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                  <span>Garantált átalakítási rendszer 7 nap alatt!</span>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base text-black font-medium text-left">
                  <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                  <span>Teljesen INGYENES konzultáció</span>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base text-black font-medium text-left">
                  <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                  <span>Szakértői támogatás tőlünk</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 w-full md:w-auto text-xs md:text-sm lg:text-base px-4 md:px-6 py-4 md:py-5 lg:py-6 font-bold shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all bg-black text-white hover:bg-transparent hover:text-black border-2 border-black rounded-xl [animation:scale-pulse_2s_ease-in-out_infinite] hover:[animation:none]"
                onClick={scrollToCalendly}
                style={{
                  animationName: 'scalePulse'
                }}
              >
                SZERETNÉM ÁTALAKÍTANI A VÁLLALKOZÁSOMAT
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-6 md:px-4 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {t('voiceAgent.faq.title')}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              {t('voiceAgent.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {(t('voiceAgent.faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>).map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base md:text-lg font-bold pr-4 text-black">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-black transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base text-gray-800 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-6 md:px-4 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Mit Mondanak Ügyfeleink
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Valós sikertörténetek vállalkozásoktól, amelyek az AI automatizálást választották
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 - Alexandra */}
            <Card className="border-2 border-black bg-white shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-xl">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed italic font-medium">
                  "Egy 100%-ban elkötelezett csapat. A velük való együttműködés révén valójában új csapattagokat nyertünk! Szívből ajánlom őket, ha fejlődni szeretnének a digitális marketingben!"
                </p>
                <div className="pt-6 border-t-2 border-black flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">A</div>
                  <div>
                    <p className="font-bold text-black">Alexandra</p>
                    <p className="text-sm text-gray-600">Sales Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 - Kristof */}
            <Card className="border-2 border-black bg-white shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-xl">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed italic font-medium">
                  "Onnan jutottam el, hogy fogalmam sem volt hogyan működik az E-commerce-em, odáig, hogy éves adatvezérelt stratégiáim vannak"
                </p>
                <div className="pt-6 border-t-2 border-black flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">K</div>
                  <div>
                    <p className="font-bold text-black">Kristof</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 - Norbert */}
            <Card className="border-2 border-black bg-white shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-xl">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed italic font-medium">
                  "Egy csodálatos csapattal dolgoztam és nagyon elégedett voltam a végeredménnyel. Egy online boltot hoztak létre, amely kiválóan néz ki és tökéletesen működik, pontosan ahogy szerettem volna."
                </p>
                <div className="pt-6 border-t-2 border-black flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">N</div>
                  <div>
                    <p className="font-bold text-black">Norbert</p>
                    <p className="text-sm text-gray-600">Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Founders Section */}
      <section id="founders" className="container mx-auto px-6 md:px-4 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {t('founders.title')}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              {t('founders.subtitle')}
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {(t('founders.profiles', { returnObjects: true }) as Array<{
              name: string;
              role: string;
              bio: string;
            }>).map((founder, index) => {
              const contacts = [
                { phone: "+40770355391", email: "hunor@splitagency.eu" },
                { phone: "+40771781080", email: "zoli@splitagency.eu" }
              ];

              return (
                <Card
                  key={index}
                  className="border-2 border-black bg-white shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group rounded-xl overflow-hidden"
                >
                  <CardContent className="p-8 flex flex-col">
                    {/* Image */}
                    <div className="w-48 h-48 mx-auto rounded-full mb-8 overflow-hidden border-4 border-black shadow-none">
                      <img
                        src={index === 0
                          ? "https://res.cloudinary.com/dmxicwsh7/image/upload/v1762811705/GR4jlsbt9bHJzYO6BvXn3zQ0DnQ_qlo59w.avif"
                          : "https://res.cloudinary.com/dmxicwsh7/image/upload/v1762811044/unnamed_u7gctc.jpg"
                        }
                        alt={founder.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-4 flex-1 flex flex-col text-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-black">
                          {founder.name}
                        </h3>
                        <p className="text-base text-gray-600 font-bold uppercase tracking-wider">
                          {founder.role}
                        </p>
                      </div>

                      <p className="text-base text-gray-800 leading-relaxed flex-1 font-medium">
                        {founder.bio}
                      </p>

                      {/* Contact Buttons */}
                      <div className="flex gap-4 pt-6 mt-auto justify-center">
                        <a
                          href={`tel:${contacts[index].phone}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-black rounded-lg font-bold hover:bg-black hover:text-white border-2 border-black transition-all text-sm shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          aria-label={`${t('founders.callButton')} ${founder.name}`}
                        >
                          <Phone className="w-4 h-4" />
                          <span>{t('founders.callButton')}</span>
                        </a>
                        <a
                          href={`mailto:${contacts[index].email}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-black text-black rounded-lg font-bold hover:bg-black hover:text-white transition-all text-sm shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          aria-label={`${t('founders.emailButton')} ${founder.name}`}
                        >
                          <Mail className="w-4 h-4" />
                          <span>{t('founders.emailButton')}</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 md:mt-10 pt-8 md:pt-10 border-t-2 border-gray-200">
            <p className="text-sm md:text-base text-gray-600 mb-4">
              {t('founders.workWithFounders')}
            </p>
            <Button
              size="lg"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 w-full sm:w-auto text-xs md:text-sm lg:text-base px-4 md:px-6 py-4 md:py-5 lg:py-6 font-bold shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all bg-black text-white hover:bg-transparent hover:text-black border-2 border-black rounded-xl [animation:scale-pulse_2s_ease-in-out_infinite] hover:[animation:none]"
              onClick={scrollToCalendly}
              style={{
                animationName: 'scalePulse'
              }}
            >
              {t('founders.scheduleCall')}
            </Button>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer id="footer" className="border-t border-gray-200 bg-white mt-24" >
        <div className="container mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 lg:gap-32 mb-12">
            <div className="min-w-[180px]">
              <h3 className="font-semibold text-base mb-6 text-gray-900">{t('newHomepage.footer.legal.title')}</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {(t('newHomepage.footer.legal.items', { returnObjects: true }) as string[]).map((item, index) => {
                  const links = ['/terms', '/privacy'];
                  return (
                    <li key={index}>
                      <Link
                        to={links[index]}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="hover:text-gray-900 transition-smooth cursor-pointer block"
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="min-w-[200px]">
              <h3 className="font-semibold text-base mb-6 text-gray-900">Contact</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="font-medium">Email</span>
                  </div>
                  <a href="mailto:hello@splitagency.eu" className="hover:text-gray-900 transition-smooth block">
                    hello@splitagency.eu
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">Phone</span>
                  </div>
                  <a href="tel:+40771781080" className="hover:text-gray-900 transition-smooth block mb-1">
                    +40 771 781 080
                  </a>
                  <a href="tel:+40770355391" className="hover:text-gray-900 transition-smooth block">
                    +40 770 355 391
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>{t('newHomepage.footer.copyright')}</p>
          </div>
        </div>
      </footer >

      {/* Demo Form Modal */}
      <DemoForm isOpen={isDemoFormOpen} onClose={closeDemoForm} />
    </div>
  );
};

export default AgentAI;
