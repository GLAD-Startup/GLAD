import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: string; // Kept for backward-compatibility, ignored in favor of standard 16px translateY
  once?: boolean;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // var(--duration-3) = 600ms
      ease: [0.16, 1, 0.3, 1], // var(--ease-out)
    },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={revealVariants}
      transition={{
        delay: Math.min(delay, 0.25),
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container — children should use RevealItem */
export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.05, // 50ms per child
            delayChildren: 0,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Individual child inside a RevealGroup */
export function RevealItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: string;
  delay?: number;
  index?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Hard cap at 6 children: delay capped at index 5 * 0.05 = 0.25s
  const cappedDelay = Math.min(index, 5) * 0.05;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: cappedDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
