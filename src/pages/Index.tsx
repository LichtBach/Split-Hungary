import { Button } from "@/components/ui/button";
import { TabbedSection } from "@/components/TabbedSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { SolutionShowcase } from "@/components/SolutionShowcase";
import { CostComparisonChart } from "@/components/CostComparisonChart";
import { CostCalculator } from "@/components/CostCalculator";
import {
  Bot,
  Workflow,
  GraduationCap,
  Users,
  Shield,
  BarChart3,
  Activity,
  Network,
  Code,
  Zap,
  TrendingUp,
  Target,
  GitBranch,
  Database,
  Cloud,
  Lock,
  Phone,
  ShoppingCart,
  Cog,
} from "lucide-react";

const Index = () => {
  const tabs = [
    {
      id: "voice-agent",
      label: "AI-Powered Intelligence",
      icon: <Bot className="w-5 h-5" />,
      content: (
        <FeatureShowcase
          title="Agent AI Vocal Inteligent"
          subtitle="Algoritmi avansați în acțiune"
          description="Experimentează AI dinamic care se adaptează la workflow-ul tău unic, analizează pattern-uri de date și oferă sugestii inteligente pentru generarea de conținut și automatizarea conversațiilor cu clienții."
          gridItems={[
            { icon: BarChart3, title: "Data Analysis" },
            { icon: Network, title: "Pattern Recognition" },
            { icon: Zap, title: "Smart Suggestions" },
            { icon: GitBranch, title: "Workflow Adaptation" },
          ]}
          listItems={[
            { title: "Adaptive Learning Algorithms" },
            { title: "Real-time Data Analysis" },
            { title: "Smart Content Suggestions" },
            { title: "Workflow Customization" },
          ]}
        />
      ),
    },
    {
      id: "automation",
      label: "Professional Community",
      icon: <Users className="w-5 h-5" />,
      content: (
        <FeatureShowcase
          title="Automatizare Workflow"
          subtitle="Comunitate profesională de automatizare"
          description="Conectează-te cu o rețea vibrantă de profesioniști care folosesc AI și automatizări pentru a-și transforma afacerile. Împărtășește experiențe, învață best practices și crește împreună cu comunitatea."
          gridItems={[
            { icon: Workflow, title: "Visual Workflows" },
            { icon: Code, title: "No-Code Integration" },
            { icon: Database, title: "Data Sync" },
            { icon: Cloud, title: "Cloud Deploy" },
          ]}
          listItems={[
            { title: "Expert Network Access" },
            { title: "Collaborative Projects" },
            { title: "Knowledge Sharing" },
            { title: "Priority Support" },
          ]}
        />
      ),
    },
    {
      id: "innovation",
      label: "Innovative Solutions",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <FeatureShowcase
          title="Soluții Inovatoare"
          subtitle="Tehnologie de ultimă generație"
          description="Platformă construită pe cele mai avansate tehnologii AI și cloud, oferind securitate maximă, conformitate GDPR și performanță excepțională pentru afacerea ta din România."
          gridItems={[
            { icon: Shield, title: "GDPR Compliant" },
            { icon: Lock, title: "End-to-End Encryption" },
            { icon: Activity, title: "Real-time Monitoring" },
            { icon: TrendingUp, title: "Scalable Infrastructure" },
          ]}
          listItems={[
            { title: "Enterprise-Grade Security" },
            { title: "Romanian Data Centers" },
            { title: "ISO Certifications" },
            { title: "24/7 Monitoring" },
          ]}
        />
      ),
    },
  ];

  const solutionTabs = [
    {
      id: "call-center",
      label: "AI Call Center",
      icon: <Phone className="w-5 h-5" />,
      content: (
        <SolutionShowcase
          title="Call Center AI Avansat"
          subtitle="Automatizează interacțiunile cu clienții și crește satisfacția"
          benefits={[
            "Răspunsuri automate instantanee 24/7 pentru clienți",
            "Procesare în limbaj natural pentru conversații fluide",
            "Integrare completă cu CRM-ul existent",
            "Monitorizare în timp real și raportare avansată",
          ]}
          metrics={{
            title: "Performanță Call Center",
            data: [
              { label: "Rata de Răspuns", value: "98%", change: "↑ 3.2%", isPositive: true },
              { label: "Satisfacție Clienți", value: "4.8★", change: "↑ 0.6", isPositive: true },
              { label: "Timp Rezolvare", value: "45s", change: "↓ 15s", isPositive: true },
              { label: "Costuri/Apel", value: "€0.12", change: "↓ €0.45", isPositive: true },
            ],
          }}
          ctaTitle="Gata să Îmbunătățești Serviciul pentru Clienți?"
          ctaDescription="Transformă call center-ul în avantajul competitiv al afacerii tale"
          ctaButtonText="Începe Demonstrația Gratuită"
        />
      ),
    },
    {
      id: "sales-agent",
      label: "AI Agent de Vânzări",
      icon: <ShoppingCart className="w-5 h-5" />,
      content: (
        <SolutionShowcase
          title="Agent AI pentru Vânzări"
          subtitle="Maximizează conversiile și crește veniturile automat"
          benefits={[
            "Calificare automată a lead-urilor cu AI avansat",
            "Follow-up personalizat pentru fiecare prospect",
            "Predicții inteligente pentru oportunități de vânzare",
            "Automatizare completă a procesului de vânzare",
          ]}
          metrics={{
            title: "Rezultate Vânzări",
            data: [
              { label: "Rata Conversie", value: "12.3%", change: "↑ 4.8%", isPositive: true },
              { label: "Lead-uri Calificate", value: "385", change: "↑ 142", isPositive: true },
              { label: "ROI Campanii", value: "8.5x", change: "↑ 3.2x", isPositive: true },
              { label: "Venit Mediu", value: "€2,840", change: "↑ €890", isPositive: true },
            ],
          }}
          ctaTitle="Pregătit să-ți 10x Vânzările?"
          ctaDescription="Alătură-te sute lor de companii care cresc cu AI-ul nostru de vânzări"
          ctaButtonText="Obține Consultație Gratuită"
        />
      ),
    },
    {
      id: "workflow-automation",
      label: "Automatizare Workflow",
      icon: <Cog className="w-5 h-5" />,
      content: (
        <SolutionShowcase
          title="Automatizare Workflow Completă"
          subtitle="Elimină task-urile repetitive și crește productivitatea echipei"
          benefits={[
            "Automatizare no-code pentru orice proces de business",
            "Sincronizare automată între toate sistemele tale",
            "Notificări inteligente și gestionare task-uri",
            "Dashboard centralizat pentru toate workflow-urile",
          ]}
          metrics={{
            title: "Impactul Automatizării",
            data: [
              { label: "Timp Economisit", value: "847h", change: "↑ 312h", isPositive: true },
              { label: "Procese Automate", value: "156", change: "↑ 89", isPositive: true },
              { label: "Reducere Erori", value: "94%", change: "↑ 37%", isPositive: true },
              { label: "Productivitate", value: "+185%", change: "↑ 62%", isPositive: true },
            ],
          }}
          ctaTitle="Automatizează-ți Afacerea Astăzi"
          ctaDescription="Începe să economisești timp și bani cu workflow-uri inteligente"
          ctaButtonText="Explorează Automatizările"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              Elevate Your Creative &
              <br />
              Professional Pursuits
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Imagine having a digital partner that evolves with your needs, providing seamless
              assistance in writing, ideation, and content generation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="pill" size="lg" className="text-base font-semibold">
                Începe Călătoria cu AI
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Explorează Automatizările
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Tabbed Sections */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <TabbedSection tabs={tabs} />
      </section>

      {/* Cost Comparison Chart */}
      <CostComparisonChart />

      {/* Interactive Cost Calculator */}
      <CostCalculator />

      {/* Solutions Section - New Tabbed Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            Stăpânește Funcționalitățile Avansate care Generează Creștere
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Activează instrumente puternice de AI și automatizare pe care majoritatea afacerilor le ignoră
          </p>
        </div>
        <TabbedSection tabs={solutionTabs} />
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold">500+</div>
            <div className="text-muted-foreground">Companii Românești</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold">250%</div>
            <div className="text-muted-foreground">Creștere în Conversii</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold">100%</div>
            <div className="text-muted-foreground">Satisfacție Clienți</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-border p-12 md:p-20 text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Gata să Automatizezi
              <br />
              Afacerea Ta?
            </h2>
            <p className="text-lg text-muted-foreground">
              Începe cu o demonstrație gratuită și descoperă cum AI vocală și automatizările pot
              transforma rezultatele tale de business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button variant="pill" size="lg" className="font-semibold">
                Programează Demo Gratuit
              </Button>
              <Button variant="outline" size="lg">
                Contactează Echipa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-base mb-4">Produs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Agent AI Vocal
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Automatizare Workflow
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Integrări
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">Prețuri</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-4">Resurse</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Documentație
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Tutoriale Video
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">Blog</li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Cazuri de Studiu
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-4">Companie</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Despre Noi
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">Cariere</li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">Contact</li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Parteneri
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Termeni și Condiții
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Politică GDPR
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Politică Confidențialitate
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Securitate
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 VoiceAI România. Toate drepturile rezervate. | București, România</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
