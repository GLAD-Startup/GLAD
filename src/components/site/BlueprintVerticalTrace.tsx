import * as React from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";

export function BlueprintVerticalTrace() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Smooth out progress with a high-responsiveness spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  // Calculate height of active laser beam line
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  // Position of traveling laser bead
  const beadTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  if (shouldReduceMotion) return null;

  return (
    <aside
      aria-hidden="true"
      className="fixed left-3 xl:left-6 top-32 bottom-28 z-40 hidden 2xl:flex flex-col items-center select-none pointer-events-none w-6"
    >
      {/* Top Anchor Telemetry Node */}
      <div className="flex flex-col items-center gap-1 mb-2">
        <span className="font-mono text-[9px] font-bold tracking-widest text-[var(--color-brass)] uppercase [writing-mode:vertical-rl] rotate-180 opacity-70">
          BLUEPRINT
        </span>
        <span className="size-1.5 rounded-full bg-[var(--color-brass)] shadow-[0_0_6px_var(--color-brass)]" />
      </div>

      {/* The Vertical Laser Track Guideline */}
      <div className="relative flex-1 w-px bg-[var(--color-rule)]/60 overflow-visible">
        {/* Ambient background guide line */}
        <div className="absolute inset-y-0 left-0 w-px border-l border-dashed border-[var(--color-rule)]" />

        {/* Luminous Traveling Laser Beam */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute top-0 left-[-0.5px] w-[2px] bg-gradient-to-b from-[var(--color-brass)] via-[#E5B84C] to-[var(--color-live)] shadow-[0_0_8px_rgba(229,184,76,0.85)] rounded-full origin-top"
        />

        {/* Traveling Laser Spark Bead */}
        <motion.div
          style={{ top: beadTop }}
          className="absolute left-[-4px] -translate-y-1/2 flex items-center justify-center size-2.5"
        >
          {/* Radar Ripple Pulse */}
          <span className="animate-ping absolute inline-flex size-3.5 rounded-full bg-[var(--color-brass)] opacity-75" />
          {/* Central Glow Particle */}
          <span className="relative inline-flex size-2 rounded-full bg-[var(--color-brass)] shadow-[0_0_10px_#E5B84C] border border-white/60" />
        </motion.div>
      </div>

      {/* Bottom Termination Node */}
      <div className="flex flex-col items-center gap-1 mt-2">
        <span className="size-1.5 rounded-full bg-[var(--color-rule-hi,var(--color-brass))] opacity-50" />
        <span className="font-mono text-[8px] tracking-widest text-[var(--color-ink-3)] uppercase [writing-mode:vertical-rl] rotate-180">
          SYS.RUN
        </span>
      </div>
    </aside>
  );
}
