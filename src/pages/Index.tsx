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
      label: "AI-Alapú Intelligencia",
      icon: <Bot className="w-5 h-5" />,
      content: (
        <FeatureShowcase
          title="Intelligens AI Hangügynök"
          subtitle="Fejlett algoritmusok működésben"
          description="Tapasztald meg a dinamikus AI-t, amely alkalmazkodik az egyedi munkafolyamataidhoz, elemzi az adatmintákat, és intelligens javaslatokat ad tartalomgeneráláshoz és az ügyfélbeszélgetések automatizálásához."
          gridItems={[
            { icon: BarChart3, title: "Adatelemzés" },
            { icon: Network, title: "Mintafelismerés" },
            { icon: Zap, title: "Okos Javaslatok" },
            { icon: GitBranch, title: "Munkafolyamat Adaptáció" },
          ]}
          listItems={[
            { title: "Adaptív Tanulási Algoritmusok" },
            { title: "Valós Idejű Adatelemzés" },
            { title: "Okos Tartalomjavaslatok" },
            { title: "Munkafolyamat Testreszabás" },
          ]}
        />
      ),
    },
    {
      id: "automation",
      label: "Szakmai Közösség",
      icon: <Users className="w-5 h-5" />,
      content: (
        <FeatureShowcase
          title="Munkafolyamat Automatizálás"
          subtitle="Professzionális automatizálási közösség"
          description="Csatlakozz egy pezsgő szakmai hálózathoz, akik AI-t és automatizálást használnak vállalkozásaik átalakításához. Oszd meg tapasztalataidat, tanulj a legjobb gyakorlatokból, és fejlődj együtt a közösséggel."
          gridItems={[
            { icon: Workflow, title: "Vizuális Munkafolyamatok" },
            { icon: Code, title: "Kódmentes Integráció" },
            { icon: Database, title: "Adatszinkronizálás" },
            { icon: Cloud, title: "Felhő Telepítés" },
          ]}
          listItems={[
            { title: "Szakértői Hálózat Hozzáférés" },
            { title: "Együttműködési Projektek" },
            { title: "Tudásmegosztás" },
            { title: "Kiemelt Támogatás" },
          ]}
        />
      ),
    },
    {
      id: "innovation",
      label: "Innovatív Megoldások",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <FeatureShowcase
          title="Innovatív Megoldások"
          subtitle="Legmodernebb technológia"
          description="A legfejlettebb AI és felhőtechnológiákra épülő platform, maximális biztonsággal, GDPR megfelelőséggel és kivételes teljesítménnyel a magyarországi vállalkozásod számára."
          gridItems={[
            { icon: Shield, title: "GDPR Kompatibilis" },
            { icon: Lock, title: "Végponttól Végpontig Titkosítás" },
            { icon: Activity, title: "Valós Idejű Monitorozás" },
            { icon: TrendingUp, title: "Skálázható Infrastruktúra" },
          ]}
          listItems={[
            { title: "Vállalati Szintű Biztonság" },
            { title: "Magyarországi Adatközpontok" },
            { title: "ISO Tanúsítványok" },
            { title: "24/7 Monitorozás" },
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
          title="Fejlett AI Call Center"
          subtitle="Automatizáld az ügyfélinterakciókat és növeld az elégedettséget"
          benefits={[
            "Azonnali automatikus válaszok 24/7 az ügyfeleknek",
            "Természetes nyelvfeldolgozás gördülékeny beszélgetésekhez",
            "Teljes integráció a meglévő CRM rendszerrel",
            "Valós idejű monitorozás és fejlett riportálás",
          ]}
          metrics={{
            title: "Call Center Teljesítmény",
            data: [
              { label: "Válaszadási Arány", value: "98%", change: "↑ 3.2%", isPositive: true },
              { label: "Ügyfél Elégedettség", value: "4.8★", change: "↑ 0.6", isPositive: true },
              { label: "Megoldási Idő", value: "45mp", change: "↓ 15mp", isPositive: true },
              { label: "Költség/Hívás", value: "€0,12", change: "↓ €0,45", isPositive: true },
            ],
          }}
          ctaTitle="Készen Állsz az Ügyfélszolgálat Fejlesztésére?"
          ctaDescription="Alakítsd a call centert vállalkozásod versenyelőnyévé"
          ctaButtonText="Ingyenes Bemutató Indítása"
        />
      ),
    },
    {
      id: "sales-agent",
      label: "AI Értékesítési Ügynök",
      icon: <ShoppingCart className="w-5 h-5" />,
      content: (
        <SolutionShowcase
          title="AI Értékesítési Ügynök"
          subtitle="Maximalizáld a konverziókat és növeld a bevételt automatikusan"
          benefits={[
            "Automatikus leadminősítés fejlett AI-val",
            "Személyre szabott utánkövetés minden érdeklődőnek",
            "Intelligens előrejelzések értékesítési lehetőségekhez",
            "Az értékesítési folyamat teljes automatizálása",
          ]}
          metrics={{
            title: "Értékesítési Eredmények",
            data: [
              { label: "Konverziós Arány", value: "12,3%", change: "↑ 4,8%", isPositive: true },
              { label: "Minősített Leadek", value: "385", change: "↑ 142", isPositive: true },
              { label: "Kampány ROI", value: "8,5x", change: "↑ 3,2x", isPositive: true },
              { label: "Átlagos Bevétel", value: "€2 840", change: "↑ €890", isPositive: true },
            ],
          }}
          ctaTitle="Készen Állsz 10x-esére Növelni az Értékesítést?"
          ctaDescription="Csatlakozz a több száz vállalathoz, amelyek AI értékesítésünkkel növekednek"
          ctaButtonText="Ingyenes Konzultáció Kérése"
        />
      ),
    },
    {
      id: "workflow-automation",
      label: "Munkafolyamat Automatizálás",
      icon: <Cog className="w-5 h-5" />,
      content: (
        <SolutionShowcase
          title="Teljes Munkafolyamat Automatizálás"
          subtitle="Szüntesd meg az ismétlődő feladatokat és növeld a csapat termelékenységét"
          benefits={[
            "Kódmentes automatizálás bármely üzleti folyamathoz",
            "Automatikus szinkronizálás minden rendszered között",
            "Intelligens értesítések és feladatkezelés",
            "Központi vezérlőpult minden munkafolyamathoz",
          ]}
          metrics={{
            title: "Az Automatizálás Hatása",
            data: [
              { label: "Megtakarított Idő", value: "847ó", change: "↑ 312ó", isPositive: true },
              { label: "Automatizált Folyamatok", value: "156", change: "↑ 89", isPositive: true },
              { label: "Hibacsökkentés", value: "94%", change: "↑ 37%", isPositive: true },
              { label: "Termelékenység", value: "+185%", change: "↑ 62%", isPositive: true },
            ],
          }}
          ctaTitle="Automatizáld Vállalkozásodat Ma"
          ctaDescription="Kezdj el időt és pénzt megtakarítani intelligens munkafolyamatokkal"
          ctaButtonText="Fedezd Fel az Automatizálásokat"
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
              Emeld Magasabb Szintre
              <br />
              Vállalkozásodat AI-val
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Képzeld el, hogy van egy digitális partnered, amely fejlődik az igényeiddel együtt,
              zökkenőmentes segítséget nyújtva az ügyfélkezelésben, értékesítésben és tartalomgenerálásban.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="pill" size="lg" className="text-base font-semibold">
                Kezdd El az AI Utazást
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Fedezd Fel az Automatizálásokat
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
            Sajátítsd El a Növekedést Generáló Fejlett Funkciókat
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aktiváld a hatékony AI és automatizálási eszközöket, amelyeket a legtöbb vállalkozás figyelmen kívül hagy
          </p>
        </div>
        <TabbedSection tabs={solutionTabs} />
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold">500+</div>
            <div className="text-muted-foreground">Magyar Vállalkozás</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold">250%</div>
            <div className="text-muted-foreground">Konverziós Növekedés</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold">100%</div>
            <div className="text-muted-foreground">Ügyfél Elégedettség</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-border p-12 md:p-20 text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Készen Állsz
              <br />
              Automatizálni a Vállalkozásodat?
            </h2>
            <p className="text-lg text-muted-foreground">
              Kezdd egy ingyenes bemutatóval, és fedezd fel, hogyan tudja az AI hangtechnológia
              és az automatizálás átalakítani üzleti eredményeidet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button variant="pill" size="lg" className="font-semibold">
                Ingyenes Bemutató Foglalása
              </Button>
              <Button variant="outline" size="lg">
                Kapcsolatfelvétel a Csapattal
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
              <h3 className="font-semibold text-base mb-4">Termék</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  AI Hangügynök
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Munkafolyamat Automatizálás
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Integrációk
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">Árazás</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-4">Források</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Dokumentáció
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Videó Oktatóanyagok
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">Blog</li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Esettanulmányok
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-4">Cég</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Rólunk
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">Karrier</li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">Kapcsolat</li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Partnerek
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-4">Jogi</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Általános Szerződési Feltételek
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  GDPR Szabályzat
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Adatvédelmi Szabályzat
                </li>
                <li className="hover:text-foreground transition-smooth cursor-pointer">
                  Biztonság
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 VoiceAI Magyarország. Minden jog fenntartva. | Budapest, Magyarország</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
