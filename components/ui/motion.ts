import type { Variants } from "framer-motion";
import { cubicBezier } from "framer-motion";

const ease = cubicBezier(0.16, 1, 0.3, 1);

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
      ease,
    },
  },
};

export const hoverLift = {
  y: -6,
  transition: {
    duration: 0.25,
    ease,
  },
} as const;
