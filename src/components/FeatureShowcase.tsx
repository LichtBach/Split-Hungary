import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GridItem {
  icon: LucideIcon;
  title: string;
}

interface ListItem {
  title: string;
}

interface FeatureShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  gridItems: GridItem[];
  listItems: ListItem[];
  className?: string;
}

export const FeatureShowcase = ({
  title,
  subtitle,
  description,
  gridItems,
  listItems,
  className,
}: FeatureShowcaseProps) => {
  return (
    <div className={cn("grid lg:grid-cols-2 gap-8 lg:gap-12", className)}>
      {/* Left Side - Main Card with Grid */}
      <div className="space-y-6">
        <div className="bg-card border border-border rounded-3xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 border-2 border-primary-foreground rounded-full"></div>
                <div className="absolute inset-2 border-2 border-primary-foreground rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{subtitle}</p>
            </div>
          </div>

          {/* Grid of Items */}
          <div className="grid grid-cols-2 gap-3">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="bg-secondary/50 border border-border rounded-xl p-4 hover:bg-secondary transition-smooth group"
              >
                <item.icon className="w-5 h-5 mb-3 text-foreground/70 group-hover:text-foreground transition-smooth" />
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Description & List */}
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border border-border flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-foreground"></span>
            </span>
            {title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{description}</p>
        </div>

        {/* List Items */}
        <div className="space-y-3">
          {listItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border hover:bg-secondary/50 transition-smooth group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                <ArrowRight className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-medium">{item.title}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-smooth mt-6">
          <span className="w-5 h-5 flex items-center justify-center">▶</span>
          Experience This Pillar
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
