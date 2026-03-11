import { AnimatedSection } from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Heart,
  Shield,
  Zap,
  Target,
  Award,
  Clock,
  DollarSign,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface WinWinSectionProps {
  showCta?: boolean;
  onCtaClick?: () => void;
  theme?: 'default' | 'blackwhite' | 'dark';
}

export const WinWinSection = ({ showCta = false, onCtaClick, theme = 'default' }: WinWinSectionProps) => {
  const { t } = useTranslation();
  const isBW = theme === 'blackwhite';
  const isDark = theme === 'dark';

  // Helper classes
  const sectionBg = isDark ? "bg-transparent" : (isBW ? "bg-white" : "bg-gradient-to-br from-background via-primary/5 to-background");
  const sectionStyle = isBW ? {} : {};

  const headerBadgeClass = isDark ? "bg-white/10 backdrop-blur-md border border-white/20 text-white" : (isBW ? "bg-black text-white border-2 border-black" : "bg-green-500/20 border-2 border-green-500/50 text-green-500");
  const headerIconClass = isDark ? "text-white" : (isBW ? "text-white" : "");
  const headerTitleClass = isDark ? "text-white" : (isBW ? "text-black" : "");
  const headerDescClass = isDark ? "text-gray-300" : (isBW ? "text-gray-800 font-medium" : "text-muted-foreground");

  // Your Win Card
  const yourWinCardClass = isDark ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl" : (isBW ? "bg-black border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-gradient-to-br from-green-500/10 via-background/50 to-background/80 backdrop-blur-[24px] border-2 border-green-500/40");
  const yourWinIconBg = isDark ? "bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg" : (isBW ? "bg-white border-2 border-white" : "bg-gradient-to-br from-green-500/30 to-green-500/10 backdrop-blur-md border border-green-500/30");
  const yourWinIconColor = isDark ? "text-white" : (isBW ? "text-black" : "text-green-500");
  const yourWinTitleColor = isDark ? "text-green-400" : (isBW ? "text-white" : "text-green-500");
  const yourWinTextColor = isDark ? "text-white" : (isBW ? "text-white" : "");
  const yourWinDescColor = isDark ? "text-gray-300" : (isBW ? "text-gray-300" : "text-muted-foreground");

  // Our Win Card
  const ourWinCardClass = isDark ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl" : (isBW ? "bg-black border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-gradient-to-br from-primary/10 via-background/50 to-background/80 backdrop-blur-[24px] border-2 border-primary/40");
  const ourWinIconBg = isDark ? "bg-white shadow-lg" : (isBW ? "bg-white border-2 border-white" : "bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-md border border-primary/30");
  const ourWinIconColor = isDark ? "text-black" : (isBW ? "text-black" : "text-primary");
  const ourWinTitleColor = isDark ? "text-white" : (isBW ? "text-white" : "text-primary");
  const ourWinTextColor = isDark ? "text-gray-300" : (isBW ? "text-gray-300" : "text-muted-foreground");

  // Comparison - Old Way
  const oldWayCardClass = isDark ? "bg-red-500/10 backdrop-blur-lg border border-red-500/30" : (isBW ? "bg-white border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "border-2 border-destructive/30 bg-destructive/5");
  const oldWayBadgeClass = isDark ? "bg-red-500/30 text-red-200 border border-red-500/50" : (isBW ? "bg-black text-white border-2 border-black" : "bg-destructive/30 text-destructive");
  const oldWayIconColor = isDark ? "text-red-400" : (isBW ? "text-black" : "text-destructive");
  const oldWayTitleColor = isDark ? "text-red-300" : (isBW ? "text-black" : "text-destructive");
  const oldWayTextColor = isDark ? "text-gray-200" : (isBW ? "text-gray-800 font-medium" : "text-muted-foreground");
  const oldWayResultBorder = isDark ? "border-red-500/20" : (isBW ? "border-black" : "border-destructive/20");

  // Comparison - New Way
  const newWayCardClass = isDark ? "bg-green-500/10 backdrop-blur-lg border border-green-500/30" : (isBW ? "bg-black border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "border-2 border-green-500/50 bg-gradient-to-br from-green-500/10 to-green-500/5");
  const newWayBadgeClass = isDark ? "bg-green-500/30 text-green-200 border border-green-500/50" : (isBW ? "bg-white text-black border-2 border-white" : "bg-green-500/30 text-green-500");
  const newWayIconColor = isDark ? "text-green-400" : (isBW ? "text-white" : "text-green-500");
  const newWayTitleColor = isDark ? "text-green-300" : (isBW ? "text-white" : "text-green-500");
  const newWayTextColor = isDark ? "text-gray-200" : (isBW ? "text-gray-300" : "text-muted-foreground");
  const newWayResultBorder = isDark ? "border-green-500/20" : (isBW ? "border-white/20" : "border-green-500/30");

  // Guarantee
  const guaranteeCardClass = isDark ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl" : (isBW ? "bg-white border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "border-2 border-primary/50 bg-gradient-to-br from-card to-primary/5");
  const guaranteeIconBg = isDark ? "bg-gradient-to-br from-green-500 to-emerald-500 shadow-xl" : (isBW ? "bg-black border-2 border-black" : "bg-green-500/20 border-2 border-green-500");
  const guaranteeIconColor = isDark ? "text-white" : (isBW ? "text-white" : "text-green-500");
  const guaranteeStatBg = isDark ? "bg-white/5 backdrop-blur-sm border border-white/10" : (isBW ? "bg-white border-2 border-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "");
  const guaranteeStatValue = isDark ? "text-white" : (isBW ? "text-black" : "text-green-500");
  const guaranteeStatLabelColor = isDark ? "text-gray-300" : (isBW ? "text-gray-600 font-medium" : "text-muted-foreground");
  const guaranteeFooterBg = isDark ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white" : (isBW ? "bg-white border-2 border-black text-black shadow-lg md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-background/50 text-muted-foreground");
  const guaranteeFooterIcon = isDark ? "text-white" : (isBW ? "text-black" : "text-primary");

  const youWinItems = t('newHomepage.winWin.you.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const weWinItems = t('newHomepage.winWin.we.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const oldPricingItems = t('newHomepage.winWin.comparison.old.items', { returnObjects: true }) as string[];
  const newPricingItems = t('newHomepage.winWin.comparison.new.items', { returnObjects: true }) as string[];
  const guaranteeStats = t('newHomepage.winWin.guarantee.stats', { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <section id="guarantee" className={`container mx-auto px-6 md:px-4 py-2 md:py-3 ${sectionBg}`} style={sectionStyle}>
      {/* Header */}
      <AnimatedSection className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide mb-2 md:mb-4 ${headerBadgeClass}`}>
          <Heart className={`w-4 h-4 md:w-5 md:h-5 ${headerIconClass}`} />
          {t('newHomepage.winWin.title')}
        </div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-5xl mx-auto px-4 ${headerTitleClass}`}>
          {t('newHomepage.winWin.subtitle')}
        </h2>
        <p className={`text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto px-4 ${headerDescClass}`}>
          {t('newHomepage.winWin.description')}
        </p>
      </AnimatedSection>

      {/* Visual WIN-WIN Cards */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Your WIN */}
          <Card className={`h-full relative overflow-hidden ${yourWinCardClass}`}>
            {!isBW && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/8 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
                <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-green-500 to-green-400 shadow-[0_0_20px_rgba(34,197,94,0.4)]" />
              </>
            )}
            <CardContent className="relative p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 ${yourWinIconBg}`}>
                  <TrendingUp className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${yourWinIconColor}`} />
                </div>
                <div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold ${yourWinTitleColor}`}>{t('newHomepage.winWin.you.title')}</h3>
                  <p className={`text-xs md:text-sm ${yourWinDescColor}`}>{t('newHomepage.winWin.you.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                {youWinItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle2 className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 md:mt-1 ${yourWinIconColor}`} />
                    <div>
                      <p className={`font-semibold text-base md:text-lg ${yourWinTextColor}`}>{item.title}</p>
                      <p className={`text-sm ${yourWinDescColor}`}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Our WIN */}
          <Card className={`h-full relative overflow-hidden ${ourWinCardClass}`}>
            {!isBW && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
                <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-primary to-primary/60 shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]" />
              </>
            )}
            <CardContent className="relative p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 ${ourWinIconBg}`}>
                  <Award className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${ourWinIconColor}`} />
                </div>
                <div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold ${ourWinTitleColor}`}>{t('newHomepage.winWin.we.title')}</h3>
                  <p className={`text-xs md:text-sm ${ourWinTextColor}`}>{t('newHomepage.winWin.we.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                {weWinItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle2 className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 md:mt-1 ${ourWinIconColor}`} />
                    <div>
                      <p className={`font-semibold text-base md:text-lg ${ourWinTitleColor}`}>{item.title}</p>
                      <p className={`text-sm ${ourWinTextColor}`}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Button after WIN-WIN cards */}
      {showCta && (
        <div className="text-center mb-12 md:mb-16">
          <Button
            size="lg"
            className="btn-shimmer inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 w-full sm:w-auto text-xs md:text-sm lg:text-base px-4 md:px-6 py-4 md:py-5 lg:py-6 font-bold rounded-xl transition-all duration-200 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 text-gray-900 border-2 border-yellow-300 shadow-[0_4px_20px_rgba(251,191,36,0.25)] hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-300 hover:border-yellow-200 hover:text-gray-900 hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)] hover:-translate-y-0.5 active:scale-[0.97] active:shadow-md"
            onClick={onCtaClick}
          >
            {t('voiceAgent.cta.button')}
          </Button>
        </div>
      )}

      {/* Pricing Model Comparison */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-16">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-8 md:mb-10 px-4">
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : (isBW ? 'text-black' : '')}`}>
              {t('newHomepage.winWin.comparison.title')}
            </h3>
            <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : (isBW ? 'text-gray-800 font-medium' : 'text-muted-foreground')}`}>
              {t('newHomepage.winWin.comparison.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Old Way - Hourly */}
            <Card className={`relative overflow-hidden ${oldWayCardClass}`}>
              {!isBW && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-destructive/8 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
                </>
              )}
              <div className={`absolute top-3 right-3 md:top-4 md:right-4 text-xs font-bold px-2 py-1 md:px-3 rounded-full flex items-center gap-1 ${oldWayBadgeClass}`}>
                <XCircle className="w-3 h-3" />
                {t('newHomepage.winWin.comparison.old.title')}
              </div>
              <CardContent className="relative p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <Clock className={`w-8 h-8 md:w-10 md:h-10 ${oldWayIconColor}`} />
                  <h4 className={`text-xl md:text-2xl font-bold ${oldWayTitleColor}`}>{t('newHomepage.winWin.comparison.old.subtitle')}</h4>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {oldPricingItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3">
                      <XCircle className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 ${oldWayIconColor}`} />
                      <p className={`text-sm md:text-base ${oldWayTextColor}`}>{item}</p>
                    </div>
                  ))}
                </div>

                <div className={`pt-3 md:pt-4 border-t ${oldWayResultBorder}`}>
                  <p className={`text-base md:text-lg font-bold ${oldWayTitleColor}`}>{t('newHomepage.winWin.comparison.old.result')}</p>
                </div>
              </CardContent>
            </Card>

            {/* New Way - Value-Based */}
            <Card className={`relative overflow-hidden ${newWayCardClass}`}>
              {!isBW && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-70" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-400/15 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
                </>
              )}
              <div className={`absolute top-3 right-3 md:top-4 md:right-4 text-xs font-bold px-2 py-1 md:px-3 rounded-full flex items-center gap-1 ${newWayBadgeClass}`}>
                <Sparkles className="w-3 h-3" />
                {t('newHomepage.winWin.comparison.new.title')}
              </div>
              <CardContent className="relative p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <Target className={`w-8 h-8 md:w-10 md:h-10 ${newWayIconColor}`} />
                  <h4 className={`text-xl md:text-2xl font-bold ${newWayTitleColor}`}>{t('newHomepage.winWin.comparison.new.subtitle')}</h4>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {newPricingItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 ${newWayIconColor}`} />
                      <p className={`text-sm md:text-base ${newWayTextColor}`}>{item}</p>
                    </div>
                  ))}
                </div>

                <div className={`pt-3 md:pt-4 border-t ${newWayResultBorder}`}>
                  <p className={`text-base md:text-lg font-bold ${newWayTitleColor}`}>{t('newHomepage.winWin.comparison.new.result')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>

      {/* ROI Guarantee Visual */}
      <AnimatedSection delay={0.3}>
        <div className="max-w-4xl mx-auto px-4">
          <Card className={`p-6 md:p-8 lg:p-12 text-center relative overflow-hidden ${guaranteeCardClass}`}>
            {!isBW && (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-green-500/5 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/8 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
              </>
            )}

            <div className="relative z-10 space-y-4 md:space-y-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-2 md:mb-4 ${guaranteeIconBg}`}>
                <Shield className={`w-8 h-8 md:w-10 md:h-10 ${guaranteeIconColor} ${!isBW && !isDark && 'drop-shadow-[0_2px_10px_rgba(34,197,94,0.5)]'}`} />
              </div>

              <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold px-2 ${isDark ? 'text-white' : (isBW ? 'text-black' : '')}`}>
                {t('newHomepage.winWin.guarantee.title')}
              </h3>

              <p className={`text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-2 ${isDark ? 'text-gray-300' : (isBW ? 'text-gray-800 font-medium' : 'text-muted-foreground')}`}>
                {t('newHomepage.winWin.guarantee.description')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
                {guaranteeStats.map((stat, index) => (
                  <div key={index} className={`space-y-1 md:space-y-2 p-4 md:p-5 rounded-xl ${guaranteeStatBg}`}>
                    <div className={`text-3xl md:text-4xl font-bold ${guaranteeStatValue} ${!isBW && 'drop-shadow-[0_2px_8px_rgba(34,197,94,0.3)]'}`}>{stat.value}</div>
                    <p className={`text-xs md:text-sm ${guaranteeStatLabelColor}`}>{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 md:pt-8">
                <div className={`inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 rounded-full ${guaranteeFooterBg}`}>
                  <Zap className={`w-3 h-3 md:w-4 md:h-4 ${guaranteeFooterIcon} ${!isBW && 'drop-shadow-[0_2px_4px_rgba(var(--primary-rgb),0.3)]'}`} />
                  {t('newHomepage.winWin.guarantee.footer')}
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </section>
  );
};
