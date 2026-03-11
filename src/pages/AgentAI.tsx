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
import {
  Phone,
  Clock,
  ShoppingCart,
  Zap,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Bot,
  Mail,
  ChevronDown,
  Star,
  AlertCircle,
  TrendingDown,
  AlertTriangle,
  ArrowDown,
  Flame,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Premium CTA button classes - golden gradient with shimmer
const CTA_CLASS = "btn-shimmer inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold rounded-xl transition-all duration-200 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 text-gray-900 border-2 border-yellow-300 shadow-[0_4px_20px_rgba(251,191,36,0.25)] hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-300 hover:border-yellow-200 hover:text-gray-900 hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)] hover:-translate-y-0.5 active:scale-[0.97] active:shadow-md";
const CTA_LG = `${CTA_CLASS} h-14 text-sm md:text-base lg:text-lg px-6 md:px-8 py-5 md:py-6`;
const CTA_MD = `${CTA_CLASS} h-12 text-xs md:text-sm lg:text-base px-4 md:px-6 py-4 md:py-5 lg:py-6`;

const AgentAI = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  // Calculator state
  const [numAgents, setNumAgents] = useState<number>(3);
  const [avgSalary, setAvgSalary] = useState<number>(3000);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const closeDemoForm = () => setIsDemoFormOpen(false);
  useSectionVisibility();

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
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

  const scrollToCalendly = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Calendly init
  useEffect(() => {
    window.scrollTo(0, 0);
    const initCalendly = () => {
      if (window.Calendly) {
        document.querySelectorAll('.calendly-inline-widget').forEach((widget) => {
          const url = widget.getAttribute('data-url');
          if (url) window.Calendly.initInlineWidget({ url, parentElement: widget });
        });
      }
    };
    const existing = document.querySelector('script[src*="calendly"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = false;
      script.onload = initCalendly;
      document.head.appendChild(script);
    } else {
      initCalendly();
    }
  }, []);

  // Benefits/Solutions data
  const benefits = [
    { icon: Clock, titleKey: "available247", painKey: "available247Pain", descKey: "available247Desc" },
    { icon: Zap, titleKey: "instant", painKey: "instantPain", descKey: "instantDesc" },
    { icon: TrendingDown, titleKey: "scalable", painKey: "scalablePain", descKey: "scalableDesc" },
  ];

  // Calculator
  const totalMonthlyCost = numAgents * avgSalary * 3;
  const savings = totalMonthlyCost * 0.75;
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);

  const scheduleTracking = (category: string, f1: number, f2: number) => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      if (window.dataLayer) window.dataLayer.push({ event: 'cost_calculated', parameter1: category, parameter2: f1.toString(), parameter3: f2.toString() });
    }, 5000);
  };
  const handleNumAgentsChange = (v: number) => { setNumAgents(v); scheduleTracking("E-commerce AI Calculator", v, avgSalary); };
  const handleAvgSalaryChange = (v: number) => { setAvgSalary(v); scheduleTracking("E-commerce AI Calculator", numAgents, v); };
  useEffect(() => () => { if (debounceTimer.current) clearTimeout(debounceTimer.current); }, []);

  const painPoints = t('voiceAgent.painPoints.items', { returnObjects: true }) as Array<{ stat: string; statLabel: string; title: string; description: string }>;
  const heroPainPoints = t('voiceAgent.hero.painPoints', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <html lang={currentLang} />
        <title>Split Agency - AI E-kereskedelmi Automatizálás | 30 Nap Ingyen</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Split Agency - AI E-kereskedelmi Automatizálás | 30 Nap Ingyen" />
        <meta property="og:description" content="Automatizáld webshopod ügyfélszolgálatát AI-val. 30 nap ingyenes próba! Rendeléskövetés, terméktanácsadás, elhagyott kosár visszaszerzés – 24/7, magyarul." />
        <meta property="og:image" content="https://res.cloudinary.com/dmxicwsh7/image/upload/w_1200,h_630,c_pad,b_rgb:1a1a1a/v1763209088/Asset_2_bxzp2u.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Split Agency - AI E-kereskedelmi Automatizálás | 30 Nap Ingyen" />
        <meta property="twitter:description" content="Automatizáld webshopod ügyfélszolgálatát AI-val. 30 nap ingyenes próba!" />
        <meta property="twitter:image" content="https://res.cloudinary.com/dmxicwsh7/image/upload/w_1200,h_630,c_pad,b_rgb:1a1a1a/v1763209088/Asset_2_bxzp2u.png" />
      </Helmet>

      {/* ============================================ */}
      {/* SCARCITY BANNER - Fixed top */}
      {/* ============================================ */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white text-center py-2.5 px-4 text-sm font-bold tracking-wide">
        <div className="flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 animate-pulse" />
          <span>Havonta csak 3 ingyenes helyet biztosítunk – 2 hely még elérhető!</span>
          <Flame className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section id="hero" className="relative bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-black text-white text-sm font-medium shadow-md">
              <ShoppingCart className="w-4 h-4" />
              {t('voiceAgent.hero.badge')}
            </div>

            {/* Pain Question */}
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 max-w-3xl mx-auto">
              {t('voiceAgent.hero.painQuestion')}
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black">
              {t('voiceAgent.hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('voiceAgent.hero.subtitle')}
            </p>

            {/* Pain Points */}
            <div className="flex flex-col gap-3 max-w-lg mx-auto text-left">
              {heroPainPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-sm md:text-base font-medium text-gray-800">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA + Scarcity */}
            <div className="flex flex-col items-center gap-3 pt-4">
              <Button size="lg" className={CTA_LG} onClick={scrollToCalendly}>
                {t('voiceAgent.hero.getStarted')}
              </Button>
              <div className="flex flex-col items-center gap-1">
                <p className="text-xs text-red-600 font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Limitált: havonta csak 3 ingyenes hely
                </p>
                <p className="text-xs text-gray-400 font-medium">
                  Nincs bankkártya szükséges &bull; Lemondható bármikor
                </p>
              </div>
            </div>

            {/* YouTube */}
            <div className="w-full max-w-4xl mx-auto pt-6">
              <div className="relative w-full rounded-xl overflow-hidden border-2 border-gray-200 shadow-xl" style={{ paddingBottom: '56.25%' }}>
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
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-700 font-bold mt-4 shadow-sm">
              <Bot className="w-4 h-4 text-gray-600" />
              <span className="font-medium">{t('voiceAgent.hero.realTime')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PAIN POINTS */}
      {/* ============================================ */}
      <section id="pain-points" className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm font-bold">
                <AlertTriangle className="w-4 h-4" />
                {t('voiceAgent.painPoints.badge')}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {t('voiceAgent.painPoints.title')}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                {t('voiceAgent.painPoints.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {painPoints.map((pain, i) => (
                <Card key={i} className="border border-red-100 bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-xl overflow-hidden group transition-all duration-300">
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <div className="text-center pb-4 border-b border-red-100">
                      <p className="text-4xl md:text-5xl font-bold text-red-600 mb-1">{pain.stat}</p>
                      <p className="text-sm text-red-500 font-medium uppercase tracking-wider">{pain.statLabel}</p>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{pain.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{pain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10 md:mt-14">
              <div className="inline-flex flex-col items-center gap-2">
                <p className="text-lg md:text-xl font-bold text-gray-900">De van megoldás...</p>
                <ArrowDown className="w-6 h-6 text-black animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SOLUTIONS + CALCULATOR */}
      {/* ============================================ */}
      <section id="benefits" className="container mx-auto px-6 md:px-4 py-12 md:py-16 lg:py-20 bg-white">
        <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {t('voiceAgent.benefits.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('voiceAgent.benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Left: Solution Cards */}
          <div className="space-y-5 md:space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group rounded-xl overflow-hidden">
                  {/* Pain strip */}
                  <div className="bg-red-50 border-b border-red-100 px-5 md:px-6 py-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-sm font-bold text-red-600">
                      {t(`voiceAgent.benefits.${benefit.painKey}`)}
                    </p>
                  </div>
                  {/* Solution */}
                  <CardContent className="p-5 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-gray-900 to-black flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-md">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <h3 className="text-lg md:text-xl font-bold text-gray-900">
                            {t(`voiceAgent.benefits.${benefit.titleKey}`)}
                          </h3>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {t(`voiceAgent.benefits.${benefit.descKey}`)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right: Calculator */}
          <div className="lg:sticky lg:top-24">
            <Card className="p-5 md:p-6 lg:p-8 bg-white border border-gray-200 shadow-xl rounded-xl">
              <div className="space-y-6 md:space-y-8">
                <div className="text-center space-y-3 md:space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-900 to-black text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                    <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{t('voiceAgent.calculator.badge')}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black px-2">
                    {t('voiceAgent.calculator.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium px-2">
                    {t('voiceAgent.calculator.subtitle')}
                  </p>
                </div>

                <div className="space-y-5 md:space-y-6 bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="numAgents" className="text-sm md:text-base font-bold text-black">
                      {t('voiceAgent.calculator.numAgents')}
                    </Label>
                    <Input id="numAgents" type="number" min="1" value={numAgents}
                      onChange={(e) => handleNumAgentsChange(Number(e.target.value))}
                      className="text-base md:text-lg h-11 md:h-12 bg-white border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 rounded-lg text-black"
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="avgSalary" className="text-sm md:text-base font-bold text-black">
                      {t('voiceAgent.calculator.avgSalary')}
                    </Label>
                    <Input id="avgSalary" type="number" min="0" step="100" value={avgSalary}
                      onChange={(e) => handleAvgSalaryChange(Number(e.target.value))}
                      className="text-base md:text-lg h-11 md:h-12 bg-white border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 rounded-lg text-black"
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:gap-4">
                  <Card className="p-4 md:p-5 bg-red-50 border border-red-200 relative overflow-hidden shadow-none rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wider pr-2">{t('voiceAgent.calculator.totalCost')}</p>
                      <TrendingUp className="w-4 h-4 text-red-500 flex-shrink-0" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-red-700 break-all">{formatCurrency(totalMonthlyCost)}</p>
                    <p className="text-xs text-red-500 mt-1">{t('voiceAgent.calculator.perMonth')}</p>
                  </Card>

                  <Card className="p-5 md:p-6 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-400 text-gray-900 border-2 border-yellow-300 relative overflow-hidden shadow-lg shadow-amber-200/40 rounded-lg">
                    <div className="absolute top-2 right-2 md:top-0 md:right-0 md:p-3">
                      <div className="bg-gray-900 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-md flex items-center gap-0.5 md:gap-1 shadow-sm">
                        <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3" />
                        -75%
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2 pr-14 md:pr-12">
                        <TrendingDown className="w-4 h-4 flex-shrink-0" />
                        <span>{t('voiceAgent.calculator.saveWithAI')}</span>
                      </p>
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight break-all">
                        {formatCurrency(savings)}
                      </p>
                      <p className="text-xs md:text-sm text-gray-700 font-medium">
                        {t('voiceAgent.calculator.reduction')}
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="text-center py-2">
                  <p className="text-xs md:text-sm text-gray-600 font-medium px-2">
                    {t('voiceAgent.calculator.yearlyEstimate')}: <span className="text-base md:text-lg font-bold text-black break-all">{formatCurrency(savings * 12)}</span>
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button size="lg" className={`${CTA_MD} w-full`} onClick={scrollToCalendly}>
                    {t('voiceAgent.cta.button')}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CASE STUDY */}
      {/* ============================================ */}
      <CaseStudyProof id="results" onCtaClick={scrollToCalendly} theme="blackwhite" />

      {/* ============================================ */}
      {/* TESTIMONIALS */}
      {/* ============================================ */}
      <section id="testimonials" className="container mx-auto px-6 md:px-4 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Mit Mondanak Webshop Tulajdonosaink
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Valós eredmények e-kereskedelmi vállalkozásoktól, akik 30 napig ingyen próbálták ki
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { text: "Az AI ügynök teljesen átalakította a webshopunk ügyfélszolgálatát. Éjjel is válaszol a vásárlóknak, és az elhagyott kosarak 30%-át sikerült visszaszereznünk. A 30 napos ingyenes próba után azonnal előfizettünk!", name: "Alexandra", role: "E-commerce Manager", initial: "A" },
              { text: "Korábban 2 ügyfélszolgálatost fizettem, most az AI kezeli a megkeresések 85%-át. A vásárlóim elégedettebbek, mert azonnal kapnak választ – még éjfélkor is.", name: "Kristof", role: "Webshop Tulajdonos", initial: "K" },
              { text: "A Black Friday-t stressz nélkül éltem túl először. Az AI ügynök 3000+ megkeresést kezelt egy hétvége alatt, és a konverziós arányunk 22%-kal nőtt az azonnali válaszoknak köszönhetően.", name: "Norbert", role: "E-commerce Alapító", initial: "N" },
            ].map((testimonial, i) => (
              <Card key={i} className="border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl">
                <CardContent className="p-6 md:p-8 space-y-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed italic font-medium">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-gray-200 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white font-bold shadow-sm">{testimonial.initial}</div>
                    <div>
                      <p className="font-bold text-black">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROMOTIONAL - 30 Day Free Trial + Scarcity */}
      {/* ============================================ */}
      <section id="promotional" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6 md:px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            {/* Scarcity warning */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-bold">
              <Flame className="w-4 h-4 animate-pulse" />
              Havonta csak 3 ingyenes hely – Ne maradj le!
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
              30 Nap Ingyenes Próba – Kockázat Nélkül
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Próbáld ki az AI ügyfélszolgálatot a webshopodban. Ha nem vagy elégedett, egyszerűen lemondod.
            </p>

            {/* Countdown */}
            <div>
              <p className="text-sm font-bold mb-4 text-gray-500 uppercase tracking-wider">Az ajánlat lejár:</p>
              <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-md mx-auto">
                {[
                  { value: timeLeft.days, label: "Nap" },
                  { value: timeLeft.hours, label: "Óra" },
                  { value: timeLeft.minutes, label: "Perc" },
                  { value: timeLeft.seconds, label: "Mp" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">{item.value}</div>
                    <div className="text-xs md:text-sm text-gray-500 font-bold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3 max-w-sm mx-auto text-left">
              {["30 nap teljes funkcionalitás – teljesen ingyen", "Shopify, WooCommerce integráció", "Nincs bankkártya, nincs kötelezettség"].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className={`${CTA_LG} w-full sm:w-auto`}
              onClick={scrollToCalendly}
            >
              INGYENES 30 NAPOS PRÓBA
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WIN-WIN */}
      {/* ============================================ */}
      <WinWinSection showCta={true} onCtaClick={scrollToCalendly} theme="blackwhite" />

      {/* ============================================ */}
      {/* FAQ */}
      {/* ============================================ */}
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
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base md:text-lg font-bold pr-4 text-black">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CALENDLY */}
      {/* ============================================ */}
      <section id="contact-form" className="bg-gray-50 px-6 md:px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-bold">
                <CheckCircle2 className="w-4 h-4" />
                Nincs bankkártya szükséges
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                {t('newHomepage.calendly.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                {t('newHomepage.calendly.description')}
              </p>
              <p className="text-sm text-red-600 font-bold flex items-center justify-center gap-1">
                <Flame className="w-4 h-4" />
                Havonta csak 3 ingyenes hely – foglalj most!
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-xl">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/hunor-splitagency/automatizare-ai?hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '1000px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOUNDERS */}
      {/* ============================================ */}
      <section id="founders" className="container mx-auto px-6 md:px-4 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {t('founders.title')}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              {t('founders.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {(t('founders.profiles', { returnObjects: true }) as Array<{ name: string; role: string; bio: string }>).map((founder, index) => {
              const contacts = [
                { phone: "+40770355391", email: "hunor@splitagency.eu" },
                { phone: "+40771781080", email: "zoli@splitagency.eu" }
              ];
              return (
                <Card key={index} className="border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group rounded-xl overflow-hidden">
                  <CardContent className="p-8 flex flex-col">
                    <div className="w-48 h-48 mx-auto rounded-full mb-8 overflow-hidden border-4 border-gray-200 shadow-lg">
                      <img
                        src={index === 0
                          ? "https://res.cloudinary.com/dmxicwsh7/image/upload/v1762811705/GR4jlsbt9bHJzYO6BvXn3zQ0DnQ_qlo59w.avif"
                          : "https://res.cloudinary.com/dmxicwsh7/image/upload/v1762811044/unnamed_u7gctc.jpg"
                        }
                        alt={founder.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-4 flex-1 flex flex-col text-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-black">{founder.name}</h3>
                        <p className="text-base text-gray-500 font-bold uppercase tracking-wider">{founder.role}</p>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed flex-1 font-medium">{founder.bio}</p>
                      <div className="flex gap-4 pt-6 mt-auto justify-center">
                        <a href={`tel:${contacts[index].phone}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm bg-white text-gray-800 border border-gray-300 hover:border-gray-900 hover:text-black hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200"
                          aria-label={`${t('founders.callButton')} ${founder.name}`}>
                          <Phone className="w-4 h-4" />
                          <span>{t('founders.callButton')}</span>
                        </a>
                        <a href={`mailto:${contacts[index].email}`}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm bg-white text-gray-800 border border-gray-300 hover:border-gray-900 hover:text-black hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200"
                          aria-label={`${t('founders.emailButton')} ${founder.name}`}>
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

          <div className="text-center mt-8 md:mt-10 pt-8 md:pt-10 border-t border-gray-200">
            <p className="text-sm md:text-base text-gray-600 mb-4">
              {t('founders.workWithFounders')}
            </p>
            <Button size="lg" className={`${CTA_MD} w-full sm:w-auto`} onClick={scrollToCalendly}>
              {t('founders.scheduleCall')}
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer id="footer" className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 lg:gap-32 mb-12">
            <div className="min-w-[180px]">
              <h3 className="font-semibold text-base mb-6 text-gray-900">{t('newHomepage.footer.legal.title')}</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {(t('newHomepage.footer.legal.items', { returnObjects: true }) as string[]).map((item, index) => {
                  const links = ['/terms', '/privacy'];
                  return (
                    <li key={index}>
                      <Link to={links[index]} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="hover:text-gray-900 transition-colors cursor-pointer block">
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="min-w-[200px]">
              <h3 className="font-semibold text-base mb-6 text-gray-900">Kapcsolat</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="font-medium">Email</span>
                  </div>
                  <a href="mailto:hello@splitagency.eu" className="hover:text-gray-900 transition-colors block">hello@splitagency.eu</a>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">Telefon</span>
                  </div>
                  <a href="tel:+40771781080" className="hover:text-gray-900 transition-colors block mb-1">+40 771 781 080</a>
                  <a href="tel:+40770355391" className="hover:text-gray-900 transition-colors block">+40 770 355 391</a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>{t('newHomepage.footer.copyright')}</p>
          </div>
        </div>
      </footer>

      <DemoForm isOpen={isDemoFormOpen} onClose={closeDemoForm} />
    </div>
  );
};

export default AgentAI;
