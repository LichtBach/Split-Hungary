import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface MetricsCardProps {
  title: string;
  metrics: Metric[];
  className?: string;
}

export const MetricsCard = ({ title, metrics, className }: MetricsCardProps) => {
  return (
    <Card className={cn("border-border bg-card/50 backdrop-blur-sm", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-4 space-y-2">
              <div className="text-sm text-muted-foreground">{metric.label}</div>
              <div className="text-3xl font-bold text-primary">{metric.value}</div>
              <div
                className={cn(
                  "text-sm flex items-center gap-1",
                  metric.isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                {metric.isPositive ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
