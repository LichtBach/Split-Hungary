import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Clock, TrendingDown } from "lucide-react";

export const CostCalculator = () => {
  const [numEmployees, setNumEmployees] = useState<number>(3);
  const [avgSalary, setAvgSalary] = useState<number>(3000);
  const [hoursWasted, setHoursWasted] = useState<number>(20);
  const [costPerHour, setCostPerHour] = useState<number>(50);

  const totalMonthlyCost = numEmployees * avgSalary * 3; // x3 for 24/7 coverage (3 shifts)
  const savings = totalMonthlyCost * 0.6;

  const monthlyTimeCost = hoursWasted * costPerHour * 4; // 4 weeks
  const timeSavings = monthlyTimeCost * 0.6;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Számold Ki a Megtakarításodat AI-val
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fedezd fel, mennyit takaríthatsz meg mesterséges intelligencia alapú automatizálással
          </p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <Tabs defaultValue="employees" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="employees" className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Alkalmazotti Költségek
              </TabsTrigger>
              <TabsTrigger value="time" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Megtakarított Idő
              </TabsTrigger>
            </TabsList>

            <TabsContent value="employees" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="numEmployees">
                    Alkalmazottak Száma (Értékesítő/Recepciós)
                  </Label>
                  <Input
                    id="numEmployees"
                    type="number"
                    min="1"
                    value={numEmployees}
                    onChange={(e) => setNumEmployees(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="avgSalary">Havi Bruttó Fizetés (EUR)</Label>
                  <Input
                    id="avgSalary"
                    type="number"
                    min="0"
                    step="100"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <Card className="p-8 bg-card/30 border-border">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Jelenlegi Összköltség</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold break-words">{formatCurrency(totalMonthlyCost)}</p>
                    <p className="text-sm text-muted-foreground">havonta 24/7 lefedettséghez (3 műszak)</p>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 border-primary/40 animate-scale-in hover-scale relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-pulse" />
                  <div className="relative space-y-3 flex flex-col items-center justify-center h-full text-center">
                    <TrendingDown className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 animate-fade-in" />
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Megtakarítás</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary animate-scale-in break-words">
                      {formatCurrency(savings)}
                    </p>
                    <div className="flex items-center gap-2 text-primary/80">
                      <div className="h-px w-6 md:w-8 bg-primary/40" />
                      <p className="text-base md:text-lg font-semibold">60% csökkentés</p>
                      <div className="h-px w-6 md:w-8 bg-primary/40" />
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-8 text-center">
                <p className="text-sm md:text-base text-muted-foreground">
                  Becsült éves megtakarítás: <span className="text-lg md:text-xl font-bold text-primary break-words">{formatCurrency(savings * 12)}</span>
                </p>
              </div>
            </TabsContent>

            <TabsContent value="time" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="hoursWasted">Elvesztegetett Órák Hetente</Label>
                  <Input
                    id="hoursWasted"
                    type="number"
                    min="1"
                    value={hoursWasted}
                    onChange={(e) => setHoursWasted(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="costPerHour">Becsült Óradíj (EUR)</Label>
                  <Input
                    id="costPerHour"
                    type="number"
                    min="0"
                    step="5"
                    value={costPerHour}
                    onChange={(e) => setCostPerHour(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <Card className="p-8 bg-card/30 border-border">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Elvesztegetett Idő Költsége</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold break-words">{formatCurrency(monthlyTimeCost)}</p>
                    <p className="text-sm text-muted-foreground">havonta manuális folyamatokkal</p>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 border-primary/40 animate-scale-in hover-scale relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-pulse" />
                  <div className="relative space-y-3 flex flex-col items-center justify-center h-full text-center">
                    <TrendingDown className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 animate-fade-in" />
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Megtakarítás</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary animate-scale-in break-words">
                      {formatCurrency(timeSavings)}
                    </p>
                    <div className="flex items-center gap-2 text-primary/80">
                      <div className="h-px w-6 md:w-8 bg-primary/40" />
                      <p className="text-base md:text-lg font-semibold">60% csökkentés</p>
                      <div className="h-px w-6 md:w-8 bg-primary/40" />
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-8 text-center">
                <p className="text-sm md:text-base text-muted-foreground">
                  Becsült éves megtakarítás: <span className="text-lg md:text-xl font-bold text-primary break-words">{formatCurrency(timeSavings * 12)}</span>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};
