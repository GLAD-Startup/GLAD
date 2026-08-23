import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { useSection } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export interface SectionRailProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: string | number;
  label: string;
  meta?: string;
  className?: string;
}

export function SectionRail({
  index: explicitIndex,
  label,
  meta,
  className,
  ...props
}: SectionRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const sectionContext = useSection();
  const isDeep = sectionContext?.tone === "deep";
  const shouldReduceMotion = useReducedMotion();

  // Active in-view state for real-time section highlight
  const isInView = useInView(railRef, {
    margin: "-15% 0px -50% 0px",
    amount: "some",
  });

  // Scroll progress for the horizontal laser rule fill
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.92", "start 0.35"],
  });

  const laserScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const laserOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.85]);

  // Derive from prop or parent Section
  const rawIndex =
    explicitIndex !== undefined
      ? typeof explicitIndex === "number"
        ? String(explicitIndex).padStart(2, "0")
        : explicitIndex
      : sectionContext?.index ?? "01";

  // Strip any § prefix if present
  const formattedIndex = rawIndex.replace(/^§\s*/, "");

  return (
    <div
      ref={railRef}
      className={cn(
        "flex items-center gap-2.5 sm:gap-[14px] mb-5 sm:mb-[28px] w-full min-w-0 overflow-hidden select-none group",
        className
      )}
      {...props}
    >
      {/* Index Node with Laser Blueprint Beacon */}
      <div className="flex items-center gap-1.5 shrink-0">
        {/* Pulsing Beacon Node */}
        {!shouldReduceMotion && (
          <span className="relative flex size-2 items-center justify-center">
            {isInView && (
              <span className="animate-ping absolute inline-flex size-3 rounded-full bg-[var(--color-brass)] opacity-60" />
            )}
            <span
              className={cn(
                "relative inline-flex rounded-full size-1.5 transition-all duration-500",
                isInView
                  ? "bg-[var(--color-brass)] shadow-[0_0_8px_var(--color-brass)] scale-125"
                  : isDeep
                  ? "bg-[var(--color-brass)]/40"
                  : "bg-[var(--color-ink-3)]/50"
              )}
            />
          </span>
        )}

        {/* Formatted Number */}
        <span
          className={cn(
            "font-mono text-[12px] tracking-[0.06em] shrink-0 font-medium transition-all duration-300",
            isInView
              ? "text-[var(--color-brass)] font-bold drop-shadow-[0_0_10px_rgba(138,109,11,0.3)]"
              : isDeep
              ? "text-[var(--color-brass)]/80"
              : "text-[var(--color-brass)]"
          )}
        >
          {formattedIndex}
        </span>
      </div>

      {/* Label: stays brass in deep tone, transitions dynamically */}
      <span
        className={cn(
          "font-mono text-[11px] sm:text-[12px] tracking-[0.12em] sm:tracking-[0.14em] uppercase shrink-0 font-medium truncate max-w-[220px] sm:max-w-none transition-colors duration-300",
          isInView
            ? isDeep
              ? "text-[var(--color-brass)] font-semibold"
              : "text-[var(--color-ink)] font-semibold"
            : isDeep
            ? "text-[var(--color-brass)]/80"
            : "text-[var(--color-ink-3)]"
        )}
      >
        {label}
      </span>

      {/* Laser-Traced 1px Horizontal Rule */}
      <div className="relative h-px flex-1 min-w-[16px] bg-[var(--color-rule)] rounded-full overflow-hidden">
        {!shouldReduceMotion && (
          <motion.div
            style={{
              scaleX: laserScaleX,
              opacity: laserOpacity,
              transformOrigin: "left",
            }}
            className={cn(
              "absolute inset-y-0 left-0 w-full h-full rounded-full",
              isDeep
                ? "bg-gradient-to-r from-[var(--color-brass)] via-[#E5B84C] to-[var(--color-live)] shadow-[0_0_8px_rgba(229,184,76,0.8)]"
                : "bg-gradient-to-r from-[var(--color-brass)] via-[#B38F14] to-[var(--color-live)] shadow-[0_0_6px_rgba(138,109,11,0.6)]"
            )}
          />
        )}
      </div>

      {/* Optional Meta - hidden on small mobile to prevent text blowout */}
      {meta && (
        <span
          className={cn(
            "font-mono text-[11px] sm:text-[12px] tracking-[0.14em] uppercase shrink-0 font-medium hidden sm:inline-block truncate max-w-[260px] md:max-w-none transition-colors duration-300",
            isInView
              ? isDeep
                ? "text-[var(--color-deep-ink)]"
                : "text-[var(--color-ink-2)]"
              : isDeep
              ? "text-[color-mix(in_oklab,var(--color-deep-ink)_60%,transparent)]"
              : "text-[var(--color-ink-3)]"
          )}
        >
          {meta}
        </span>
      )}
    </div>
  );
}
