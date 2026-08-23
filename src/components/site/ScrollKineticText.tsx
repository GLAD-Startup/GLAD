import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";

interface ScrollKineticWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  tone?: "paper" | "deep" | "card";
  highlight?: boolean;
}

function KineticWord({ word, progress, range, tone = "paper", highlight = false }: ScrollKineticWordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [4, 0]);

  // Color configurations based on section tone
  const activeColor = highlight
    ? "var(--color-brass, #8A6D0B)"
    : tone === "deep"
    ? "var(--color-deep-ink, #FFFFFF)"
    : "var(--color-ink, #1A1713)";

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0">
      {/* Ghost Background Word for solid contrast structure */}
      <span
        aria-hidden="true"
        className="opacity-[0.12] select-none"
        style={{
          color:
            tone === "deep"
              ? "rgba(255, 255, 255, 0.4)"
              : "var(--color-ink-3, #A8A196)",
        }}
      >
        {word}
      </span>

      {/* Animated Foreground Word revealing on Scroll */}
      <motion.span
        aria-hidden="true"
        style={{ opacity, y, color: activeColor }}
        className="absolute inset-0 select-none font-inherit"
      >
        {word}
      </motion.span>
    </span>
  );
}

export interface ScrollKineticTextProps {
  text: string;
  className?: string;
  tone?: "paper" | "deep" | "card";
  highlightWords?: string[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  offset?: [
    `${"start" | "end" | "center"} ${number | `${number}%` | `${number}px`}`,
    `${"start" | "end" | "center"} ${number | `${number}%` | `${number}px`}`
  ];
}

export function ScrollKineticText({
  text,
  className = "",
  tone = "paper",
  highlightWords = [],
  as: Component = "p",
  offset = ["start 0.9", "start 0.3"],
}: ScrollKineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const words = text.split(" ");
  const totalWords = words.length;

  if (shouldReduceMotion) {
    return (
      <Component className={className}>
        {text}
      </Component>
    );
  }

  // Normalizer for highlighting
  const normalize = (w: string) => w.toLowerCase().replace(/[^a-z0-9]/g, "");
  const normalizedHighlights = highlightWords.map(normalize);

  return (
    <div ref={containerRef} className="relative inline-block">
      <Component className={className} aria-label={text}>
        {words.map((word, i) => {
          // Calculate linear or slightly overlapping step range for smooth progressive reveal
          const start = i / totalWords;
          const end = Math.min(1, start + 1.4 / totalWords);
          const isHighlight = normalizedHighlights.includes(normalize(word));

          return (
            <KineticWord
              key={`${word}-${i}`}
              word={word}
              progress={scrollYProgress}
              range={[start, end]}
              tone={tone}
              highlight={isHighlight}
            />
          );
        })}
      </Component>
    </div>
  );
}

/**
 * Editorial Kinetic Manifesto Callout Section Component
 */
export function EditorialScrollManifesto({
  tagline = "THE GLAD STANDARD",
  statement = "We engineer production software with senior developers only. Zero junior handoffs, no bloated management layers, and working staging builds delivered from week three.",
  highlightWords = ["senior", "developers", "zero", "staging", "three"],
  tone = "paper",
}: {
  tagline?: string;
  statement?: string;
  highlightWords?: string[];
  tone?: "paper" | "deep" | "card";
}) {
  return (
    <div className="py-12 sm:py-20 md:py-28 max-w-4xl mx-auto px-4 text-left">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <span className="size-2 rounded-full bg-[var(--color-brass)] animate-pulse" />
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[var(--color-brass)] font-semibold">
          {tagline}
        </span>
      </div>

      <ScrollKineticText
        text={statement}
        tone={tone}
        highlightWords={highlightWords}
        as="h2"
        offset={["start 0.85", "start 0.25"]}
        className="text-2xl sm:text-3xl md:text-5xl font-display font-medium leading-[1.2] sm:leading-[1.18] tracking-tight"
      />
    </div>
  );
}
