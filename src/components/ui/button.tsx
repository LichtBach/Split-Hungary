import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-shimmer bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 text-gray-900 border-2 border-yellow-300 shadow-[0_4px_20px_rgba(251,191,36,0.25)] hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-300 hover:border-yellow-200 hover:text-gray-900 hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)] hover:-translate-y-0.5 active:scale-[0.97] active:shadow-md rounded-xl",
        pill: "btn-shimmer bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 text-gray-900 border-2 border-yellow-300 shadow-[0_4px_20px_rgba(251,191,36,0.25)] hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-300 hover:border-yellow-200 hover:text-gray-900 hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)] hover:-translate-y-0.5 active:scale-[0.97] active:shadow-md rounded-full font-medium",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground rounded-full",
        outline: "border-2 border-border bg-transparent text-foreground hover:bg-black hover:text-white rounded-full",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
