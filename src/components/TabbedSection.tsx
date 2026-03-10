import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabbedSectionProps {
  tabs: Tab[];
  className?: string;
}

export const TabbedSection = ({ tabs, className }: TabbedSectionProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Navigation - Pill Style */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-smooth text-sm",
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
            )}
          >
            {tab.icon && <span className="w-5 h-5">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px]">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeTab === tab.id ? 1 : 0,
              y: activeTab === tab.id ? 0 : 20,
              display: activeTab === tab.id ? "block" : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
