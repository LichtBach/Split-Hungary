import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollAnimationOptions {
  once?: boolean;
  margin?: string;
  amount?: number | "some" | "all";
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: options.margin ?? "-100px",
    amount: options.amount ?? 0.3,
  });

  return { ref, isInView };
};
