import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export const AnimatedSection = ({
  children,
  className = "",
}: AnimatedSectionProps) => {
  // Animations disabled for better mobile performance
  return (
    <div className={className}>
      {children}
    </div>
  );
};
