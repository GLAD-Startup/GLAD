import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SlotNumberRoller } from "@/components/site/SlotNumberRoller";

export interface LedgerRow {
  key: string;
  value: string;
  accent?: string;
}

export interface LedgerProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: LedgerRow[];
  hover?: boolean;
  header?: React.ReactNode;
  className?: string;
}

export function Ledger({ rows, hover = false, header, className, ...props }: LedgerProps) {
  const shouldReduceMotion = useReducedMotion();

  // Continuous window scroll parallax for the Hero
  const { scrollY } = useScroll();

  const cardY = useTransform(scrollY, [0, 600], [0, 45]);
  const cardRotateX = useTransform(scrollY, [0, 600], [0, 3]);
  const cardRotateY = useTransform(scrollY, [0, 600], [0, -2]);
  const cardScale = useTransform(scrollY, [0, 600], [1, 0.985]);

  return (
    <div style={{ perspective: "1000px" }} className="w-full h-auto">
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : cardY,
          rotateX: shouldReduceMotion ? 0 : cardRotateX,
          rotateY: shouldReduceMotion ? 0 : cardRotateY,
          scale: shouldReduceMotion ? 1 : cardScale,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "bg-[var(--color-card)] border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] p-0 overflow-hidden w-full divide-y divide-[var(--color-rule)] shadow-[0_1px_2px_rgba(25,28,33,0.04),0_4px_14px_rgba(25,28,33,0.045)] transition-colors duration-300",
          className
        )}
        {...props}
      >
        {header && <div className="relative z-10">{header}</div>}
        {rows.map((r, i) => {
          const isPercent = r.accent?.startsWith("%");
          const hasDigits = /\d/.test(r.value);

          return (
            <div
              key={`${r.key}-${i}`}
              className="hero-ledger-row flex justify-between items-baseline gap-5 px-[22px] py-[15px] transition-colors duration-200 hover:bg-[var(--color-sunk)]/40"
            >
              {/* Monospace Key */}
              <span className="font-mono text-[12px] tracking-[0.06em] uppercase text-[var(--color-ink-3)] shrink-0 select-none">
                {r.key}
              </span>

              {/* Monospace Value + Accent (% is rendered flush, others with 1 space) */}
              <div className="font-mono text-[15px] text-[var(--color-ink)] text-right flex items-baseline flex-wrap justify-end">
                <span className="font-semibold">
                  {hasDigits ? (
                    <SlotNumberRoller value={r.value} delay={i * 0.12} />
                  ) : (
                    r.value
                  )}
                </span>
                {r.accent && (
                  <span
                    className={cn(
                      "text-[var(--color-brass)] font-mono text-[15px] font-medium",
                      !isPercent && "ml-1.5"
                    )}
                  >
                    {r.accent}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
