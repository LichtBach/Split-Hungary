import { AnimatedSection } from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Bot,
  TrendingDown,
  Calendar,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface CaseStudyProofProps {
  onCtaClick?: () => void;
  id?: string;
  theme?: 'default' | 'blackwhite' | 'dark';
}

export const CaseStudyProof = ({ onCtaClick, id = "case-study", theme = 'default' }: CaseStudyProofProps) => {
  const { t } = useTranslation();
  const isBW = theme === 'blackwhite';
  const isDark = theme === 'dark';

  // Helper classes
  const badgeClass = isDark ? "bg-white/10 backdrop-blur-md border border-white/20 text-white" : (isBW ? "bg-black text-white border-2 border-black" : "bg-primary/10 text-primary");
  const mainCardClass = isDark ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl" : (isBW ? "bg-white border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-gradient-to-br from-card via-card to-secondary/20 border-2 border-border");
  const headingColor = isDark ? "text-white" : (isBW ? "text-black" : "");
  const subtitleColor = isDark ? "text-gray-300" : (isBW ? "text-gray-800" : "text-muted-foreground");
  const companyTitle = isDark ? "text-white" : (isBW ? "text-black" : "");
  const companySubtitle = isDark ? "text-gray-300" : (isBW ? "text-gray-600" : "text-muted-foreground");

  // Before Card
  const beforeCardClass = isDark ? "border border-red-500/30 bg-red-500/10 backdrop-blur-lg" : (isBW ? "border-2 border-black bg-white shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "border-2 border-destructive/30 bg-destructive/5");
  const beforeIconBg = isDark ? "bg-gradient-to-br from-red-500 to-orange-500" : (isBW ? "bg-black" : "bg-destructive/20");
  const beforeIconColor = isDark ? "text-white" : (isBW ? "text-white" : "text-destructive");
  const beforeTitleColor = isDark ? "text-red-300" : (isBW ? "text-black" : "text-destructive");
  const beforeSubtitle = isDark ? "text-gray-300" : (isBW ? "text-gray-600" : "text-muted-foreground");
  const beforeTextColor = isDark ? "text-white" : (isBW ? "text-black" : "");
  const beforeMutedText = isDark ? "text-gray-300" : (isBW ? "text-gray-600" : "text-muted-foreground");
  const beforeIconMuted = isDark ? "text-gray-300" : (isBW ? "text-gray-600" : "text-muted-foreground");
  const beforeCostBg = isDark ? "bg-white/5 backdrop-blur-sm border border-white/10" : (isBW ? "bg-white border-2 border-black" : "bg-background/50");

  // After Card
  const afterCardClass = isDark ? "border border-green-500/30 bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-lg text-white" : (isBW ? "border-2 border-black bg-black text-white shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "border-2 border-primary/50 bg-primary/5");
  const afterBadgeClass = isDark ? "bg-green-500/30 text-green-100 border border-green-500/50" : (isBW ? "bg-white text-black border-2 border-white" : "bg-primary text-primary-foreground");
  const afterIconBg = isDark ? "bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg" : (isBW ? "bg-white" : "bg-primary/20");
  const afterIconColor = isDark ? "text-white" : (isBW ? "text-black" : "text-primary");
  const afterTextColor = isDark ? "text-green-300" : (isBW ? "text-white" : "text-primary");
  const afterMutedText = isDark ? "text-gray-200" : (isBW ? "text-gray-300" : "text-muted-foreground");
  const afterCostBg = isDark ? "bg-white/10 backdrop-blur-sm" : (isBW ? "bg-white/10" : "bg-background/50");

  // Savings
  const savingsClass = isDark ? "bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-md border border-green-500/30 text-white shadow-xl" : (isBW ? "bg-black border-2 border-black text-white shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 border-2 border-primary/30");
  const savingsText = isDark ? "text-white" : (isBW ? "text-white" : "text-primary");

  // Problem & Solution
  const problemClass = isDark ? "bg-red-500/10 backdrop-blur-lg border border-red-500/30" : (isBW ? "bg-white border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-destructive/5 border-2 border-destructive/30");
  const problemTitle = isDark ? "text-red-300" : (isBW ? "text-black" : "text-destructive");
  const problemText = isDark ? "text-gray-200" : (isBW ? "text-black" : "text-muted-foreground");
  const solutionClass = isDark ? "bg-green-500/10 backdrop-blur-lg border border-green-500/30" : (isBW ? "bg-black border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-green-500/5 border-2 border-green-500/30");
  const solutionTitle = isDark ? "text-green-300" : (isBW ? "text-white" : "text-green-500");
  const solutionText = isDark ? "text-gray-200" : (isBW ? "text-gray-300" : "text-muted-foreground");

  // CTA Buttons
  const primaryButtonClass = isDark ? "bg-white text-black border border-white/20 hover:bg-black hover:text-white shadow-lg transition-all" : (isBW ? "bg-black text-white border-2 border-black hover:bg-white hover:text-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" : "");
  const secondaryButtonClass = isDark ? "bg-black text-white border border-white/30 hover:bg-white hover:text-black transition-all shadow-lg" : (isBW ? "bg-white text-black border-2 border-black hover:bg-black hover:text-white shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" : "");
  const ctaFooterText = isDark ? "text-gray-300" : (isBW ? "text-gray-600" : "text-muted-foreground");
  return (
    <section id={id} className="container mx-auto px-6 md:px-4 py-8 md:py-12 lg:py-16">
      {/* Header */}
      <AnimatedSection className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-3 ${badgeClass}`}>
          <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
          {t('newHomepage.caseStudy.badge')}
        </div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 ${headingColor}`}>
          {t('newHomepage.caseStudy.title')}
        </h2>
        <p className={`text-sm md:text-base max-w-2xl mx-auto px-2 ${subtitleColor}`}>
          {t('newHomepage.caseStudy.subtitle')}
        </p>
      </AnimatedSection>

      {/* Case Study Card */}
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className={`${mainCardClass} rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8`}>
            {/* Company Info */}
            <div className={`mb-4 md:mb-6 pb-3 md:pb-4 border-b ${isDark ? 'border-white/20' : 'border-border'}`}>
              <h3 className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 ${companyTitle}`}>{t('newHomepage.caseStudy.company')}</h3>
              <p className={`text-sm md:text-base ${companySubtitle}`}>{t('newHomepage.caseStudy.industry')}</p>
            </div>

            {/* Before & After Comparison */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {/* BEFORE */}
              <Card className={beforeCardClass}>
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${beforeIconBg}`}>
                      <XCircle className={`w-5 h-5 md:w-6 md:h-6 ${beforeIconColor}`} />
                    </div>
                    <div>
                      <h4 className={`text-lg md:text-xl font-bold ${beforeTitleColor}`}>{t('newHomepage.caseStudy.before.title')}</h4>
                      <p className={`text-xs md:text-sm ${beforeSubtitle}`}>{t('newHomepage.caseStudy.before.subtitle')}</p>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <Users className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 md:mt-1 flex-shrink-0 ${beforeIconMuted}`} />
                      <div>
                        <p className={`font-semibold text-sm md:text-base ${beforeTextColor}`}>{t('newHomepage.caseStudy.before.staff')}</p>
                        <p className={`text-xs md:text-sm ${beforeMutedText}`}>{t('newHomepage.caseStudy.before.coverage')}</p>
                      </div>
                    </div>

                    <div className={`rounded-lg p-3 md:p-4 space-y-1.5 md:space-y-2 ${beforeCostBg}`}>
                      <div className={`flex justify-between text-sm ${beforeTextColor}`}>
                        <span>{t('newHomepage.caseStudy.before.operator1')}</span>
                        <span className="font-semibold">{t('newHomepage.caseStudy.before.cost1')}</span>
                      </div>
                      <div className={`flex justify-between text-sm ${beforeTextColor}`}>
                        <span>{t('newHomepage.caseStudy.before.operator2')}</span>
                        <span className="font-semibold">{t('newHomepage.caseStudy.before.cost2')}</span>
                      </div>
                      <div className={`flex justify-between text-sm ${beforeTextColor}`}>
                        <span>{t('newHomepage.caseStudy.before.operator3')}</span>
                        <span className="font-semibold">{t('newHomepage.caseStudy.before.cost3')}</span>
                      </div>
                      <div className={`text-xs mt-1 ${beforeMutedText}`}>
                        {t('newHomepage.caseStudy.before.coverageNote')}
                      </div>
                      <div className={`border-t pt-1.5 md:pt-2 flex justify-between ${isDark ? 'border-white/20' : 'border-border'}`}>
                        <span className={`font-bold text-sm md:text-base ${beforeTextColor}`}>{t('newHomepage.caseStudy.before.totalMonthly')}</span>
                        <span className={`font-bold text-base md:text-lg ${beforeTitleColor}`}>{t('newHomepage.caseStudy.before.totalCost')}</span>
                      </div>
                    </div>

                    <div className={`space-y-1.5 md:space-y-2 text-xs md:text-sm ${beforeMutedText}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${isBW ? 'bg-gray-600' : 'bg-destructive'}`}></div>
                        {t('newHomepage.caseStudy.before.limit1')}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${isBW ? 'bg-gray-600' : 'bg-destructive'}`}></div>
                        {t('newHomepage.caseStudy.before.limit2')}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${isBW ? 'bg-gray-600' : 'bg-destructive'}`}></div>
                        {t('newHomepage.caseStudy.before.limit3')}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AFTER */}
              <Card className={`${afterCardClass} relative overflow-hidden`}>
                <div className={`absolute top-3 right-3 md:top-4 md:right-4 text-xs font-bold px-2 py-1 md:px-3 rounded-full ${afterBadgeClass}`}>
                  {t('newHomepage.caseStudy.after.badge')}
                </div>
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${afterIconBg}`}>
                      <CheckCircle2 className={`w-5 h-5 md:w-6 md:h-6 ${afterIconColor}`} />
                    </div>
                    <div>
                      <h4 className={`text-lg md:text-xl font-bold ${afterTextColor}`}>{t('newHomepage.caseStudy.after.title')}</h4>
                      <p className={`text-xs md:text-sm ${afterMutedText}`}>{t('newHomepage.caseStudy.after.subtitle')}</p>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <Bot className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 md:mt-1 flex-shrink-0 ${isBW ? 'text-white' : 'text-primary'}`} />
                      <div>
                        <p className={`font-semibold text-sm md:text-base ${afterTextColor}`}>{t('newHomepage.caseStudy.after.system')}</p>
                        <p className={`text-xs md:text-sm ${afterMutedText}`}>{t('newHomepage.caseStudy.after.availability')}</p>
                      </div>
                    </div>

                    <div className={`rounded-lg p-3 md:p-4 space-y-1.5 md:space-y-2 ${afterCostBg}`}>
                      <div className={`flex justify-between text-sm ${isDark ? 'text-gray-200' : (isBW ? 'text-gray-200' : '')}`}>
                        <span>{t('newHomepage.caseStudy.after.subscription')}</span>
                        <span className="font-semibold">{t('newHomepage.caseStudy.after.subscriptionCost')}</span>
                      </div>
                      <div className={`border-t pt-1.5 md:pt-2 flex justify-between ${isDark ? 'border-white/20' : (isBW ? 'border-white/20' : 'border-border')}`}>
                        <span className={`font-bold text-sm md:text-base ${afterTextColor}`}>{t('newHomepage.caseStudy.after.totalMonthly')}</span>
                        <span className={`font-bold text-base md:text-lg ${afterTextColor}`}>{t('newHomepage.caseStudy.after.totalCost')}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                      <div className={`flex items-center gap-2 ${afterTextColor}`}>
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                        {t('newHomepage.caseStudy.after.benefit1')}
                      </div>
                      <div className={`flex items-center gap-2 ${afterTextColor}`}>
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                        {t('newHomepage.caseStudy.after.benefit2')}
                      </div>
                      <div className={`flex items-center gap-2 ${afterTextColor}`}>
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                        {t('newHomepage.caseStudy.after.benefit3')}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Savings Highlight */}
            <div className={`relative overflow-hidden rounded-xl p-4 md:p-6 ${savingsClass}`}>
              {!isBW && <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />}

              <div className="relative z-10 grid md:grid-cols-3 gap-6 md:gap-8 text-center">
                <div>
                  <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 ${savingsText}`}>{t('newHomepage.caseStudy.savings.monthly')}</div>
                  <div className={`text-xs md:text-sm uppercase tracking-wider ${isBW ? 'text-gray-400' : 'text-muted-foreground'}`}>{t('newHomepage.caseStudy.savings.monthlyLabel')}</div>
                </div>

                <div>
                  <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 ${savingsText}`}>{t('newHomepage.caseStudy.savings.reduction')}</div>
                  <div className={`text-xs md:text-sm uppercase tracking-wider ${isBW ? 'text-gray-400' : 'text-muted-foreground'}`}>{t('newHomepage.caseStudy.savings.reductionLabel')}</div>
                </div>

                <div>
                  <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 ${savingsText}`}>{t('newHomepage.caseStudy.savings.yearly')}</div>
                  <div className={`text-xs md:text-sm uppercase tracking-wider ${isBW ? 'text-gray-400' : 'text-muted-foreground'}`}>{t('newHomepage.caseStudy.savings.yearlyLabel')}</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Problem & Solution */}
        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Problem */}
            <div className={`rounded-xl p-4 md:p-6 ${problemClass}`}>
              <h4 className={`text-base md:text-lg font-bold mb-2 md:mb-3 flex items-center gap-2 ${problemTitle}`}>
                <XCircle className="w-4 h-4 md:w-5 md:h-5" />
                {t('newHomepage.caseStudy.problem.title')}
              </h4>
              <p className={`text-sm md:text-base leading-relaxed font-medium ${problemText}`}>
                {t('newHomepage.caseStudy.problem.description')}
              </p>
            </div>

            {/* Solution */}
            <div className={`rounded-xl p-4 md:p-6 ${solutionClass}`}>
              <h4 className={`text-base md:text-lg font-bold mb-2 md:mb-3 flex items-center gap-2 ${solutionTitle}`}>
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                {t('newHomepage.caseStudy.solution.title')}
              </h4>
              <p className={`text-sm md:text-base leading-relaxed ${solutionText}`}>
                {t('newHomepage.caseStudy.solution.description')}
              </p>
            </div>
          </div>
        </AnimatedSection>


      </div>
    </section>
  );
};
