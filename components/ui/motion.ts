import type { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1], // ✅ easeOut "premium"
    },
  },
};

// Pour whileHover (pas besoin de Variants)
export const hoverLift = {
  y: -6,
  transition: {
    duration: 0.25,
    ease: [0.16, 1, 0.3, 1],
  },
} as const;
