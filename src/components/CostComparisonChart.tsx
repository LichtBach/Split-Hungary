import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Ian", withAI: 11, withoutAI: 11 },
  { month: "Feb", withAI: 12, withoutAI: 12 },
  { month: "Mar", withAI: 10, withoutAI: 10 },
  { month: "Apr", withAI: 25, withoutAI: 25 },
  { month: "Mai", withAI: 48, withoutAI: 30 },
  { month: "Iun", withAI: 56, withoutAI: 8 },
  { month: "Iul", withAI: 60, withoutAI: 60 },
  { month: "Aug", withAI: 62, withoutAI: 30 },
  { month: "Sep", withAI: 62, withoutAI: 18 },
  { month: "Oct", withAI: 68, withoutAI: 15 },
  { month: "Nov", withAI: 76, withoutAI: 12 },
  { month: "Dec", withAI: 80, withoutAI: 8 },
];

export const CostComparisonChart = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <Card className="bg-transparent border-border p-8 md:p-12 lg:p-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Raport creștere venit vs
              <br />
              anul trecut
            </h2>
          </div>

          <div className="h-[400px] md:h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <XAxis
                  dataKey="month"
                  stroke="rgba(255, 255, 255, 0.8)"
                  tick={{ fill: "rgba(255, 255, 255, 0.9)", fontSize: 14 }}
                  style={{ 
                    filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))"
                  }}
                />
                <YAxis
                  stroke="rgba(255, 255, 255, 0.8)"
                  tick={{ fill: "rgba(255, 255, 255, 0.9)", fontSize: 14 }}
                  tickFormatter={(value) => `${value}%`}
                  style={{ 
                    filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))"
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "8px",
                    color: "white",
                    backdropFilter: "blur(10px)",
                  }}
                  formatter={(value: number) => [`${value}%`, ""]}
                  labelStyle={{ color: "white" }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  formatter={(value) => (
                    <span style={{ color: "white", fontSize: "14px" }}>
                      {value}
                    </span>
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="withAI"
                  name="Afacerea ta cu automatizări AI"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={{ fill: "#22c55e", r: 5 }}
                  activeDot={{ r: 7 }}
                  style={{ 
                    filter: "drop-shadow(0 0 12px rgba(34, 197, 94, 0.8))"
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="withoutAI"
                  name="Afacerea ta FĂRĂ automatizări AI"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={{ fill: "#ef4444", r: 5 }}
                  activeDot={{ r: 7 }}
                  style={{ 
                    filter: "drop-shadow(0 0 12px rgba(239, 68, 68, 0.8))"
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="text-center space-y-6 pt-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ești gata să reduci costurile operaționale cu cel puțin{" "}
              <span className="text-[#22c55e]" style={{ filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.6))" }}>
                50%
              </span>?
            </h3>
            <Button
              variant="pill"
              size="lg"
              className="text-base md:text-lg font-semibold bg-white hover:bg-white/90 text-black px-8 py-6"
              style={{ 
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))"
              }}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              VREAU SĂ SCAD COSTURILE
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};
