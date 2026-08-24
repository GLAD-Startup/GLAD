import * as React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { SectionRail } from "./SectionRail";
import { ScrollKineticText } from "./ScrollKineticText";
import { Row } from "./Row";
import { Link } from "@tanstack/react-router";

/* ── 60/120 FPS Hardware-Accelerated Apple-Style Zoom Section ── */

export function ProcessCinematicZoom() {
  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Direct scroll timeline (1:1 with Lenis smooth scroll for zero lag)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  /* ── GPU-only Transforms (zero layout reflow, zero blur filters) ── */
  // 1. Scale: starts oversized (7.2x) filling viewport and zooms smoothly to 1.0
  const headingScale = useTransform(
    scrollYProgress,
    [0, 0.52],
    [7.2, 1.0],
    { clamp: true }
  );

  // 2. Y translation: starts centered in the screen, then settles into header position
  const headingY = useTransform(
    scrollYProgress,
    [0, 0.52],
    [135, 0],
    { clamp: true }
  );

  // 3. X translation: shifts slightly leftward during macro entrance and settles smoothly into 0
  const headingX = useTransform(
    scrollYProgress,
    [0, 0.52],
    [-95, 0],
    { clamp: true }
  );

  // 4. Opacity: starts visible with luminous presence
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0.75, 1.0],
    { clamp: true }
  );

  // 4. Content elements (rail, subtitle, cards) fade and glide in as heading settles
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.48, 0.64],
    [0, 1],
    { clamp: true }
  );

  const contentY = useTransform(
    scrollYProgress,
    [0.48, 0.64],
    [24, 0],
    { clamp: true }
  );

  const contentPointerEvents = useTransform(scrollYProgress, (p) =>
    p > 0.55 ? "auto" : "none"
  );

  if (shouldReduceMotion) {
    return (
      <section className="relative w-full bg-[var(--color-deep)] text-[var(--color-deep-ink)] py-20 px-8 border-t border-[var(--color-deep-rule)]">
        <div className="max-w-[1120px] mx-auto w-full">
          <SectionRail label="HOW WE WORK" />
          <div className="max-w-3xl mb-8 mt-4">
            <h2 className="text-[clamp(30px,3vw,38px)] font-display font-medium text-[var(--color-deep-ink)]">
              <span>Process</span>
              <span className="inline-block w-[0.45em]" />
              <span>with zero mystery.</span>
            </h2>
            <ScrollKineticText
              text="From initial architecture discovery to production DNS handover, every milestone is scoped, tracked, and delivered with weekly demo builds."
              highlightWords={["architecture", "discovery", "production", "weekly", "demo"]}
              tone="deep"
              className="text-[16px] sm:text-[17px] text-[var(--color-deep-ink-2,#A0AEC0)] mt-2 leading-relaxed"
            />
          </div>
          <ProcessRows />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={targetRef}
      id="process-cinematic"
      className="relative w-full bg-[var(--color-deep)] text-[var(--color-deep-ink)] h-[190vh] [--color-rule:var(--color-deep-rule)] [--color-rule-hi:var(--color-deep-rule)] [--color-ink:var(--color-deep-ink)] [--color-ink-2:color-mix(in_oklab,var(--color-deep-ink)_82%,transparent)] [--color-ink-3:color-mix(in_oklab,var(--color-deep-ink)_60%,transparent)] border-t border-[var(--color-deep-rule)]"
    >
      {/* Sticky Viewport Window */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Subtle Ambient Blueprint Grid overlay on deep background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-[1120px] mx-auto px-8 max-[720px]:px-5 w-full relative z-10 flex flex-col justify-center">
          {/* Section Rail Header */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="mb-3"
          >
            <SectionRail label="HOW WE WORK" />
          </motion.div>

          {/* ── GPU-Accelerated Zoom Typography ── */}
          <div className="relative overflow-visible py-1 mb-4">
            <motion.div
              style={{
                scale: headingScale,
                y: headingY,
                x: headingX,
                opacity: headingOpacity,
                transformOrigin: "left center",
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              className="inline-block whitespace-nowrap select-none"
            >
              <h2 className="text-[clamp(32px,4vw,52px)] font-display font-semibold leading-[1.08] tracking-tight bg-gradient-to-r from-white via-[#E2F7ED] to-[#CBD5E1] bg-clip-text text-transparent">
                <span>Process</span>
                <span className="inline-block w-[0.5em]" />
                <span>with zero mystery.</span>
              </h2>
            </motion.div>
          </div>

          {/* Subtitle with kinetic reveal */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="max-w-3xl mb-6"
          >
            <ScrollKineticText
              text="From initial architecture discovery to production DNS handover, every milestone is scoped, tracked, and delivered with weekly demo builds."
              highlightWords={["architecture", "discovery", "production", "weekly", "demo"]}
              tone="deep"
              className="text-[16px] sm:text-[17px] text-[var(--color-deep-ink-2,#A0AEC0)] leading-relaxed"
            />
          </motion.div>

          {/* Process Rows & Footer Link */}
          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
              pointerEvents: contentPointerEvents as any,
            }}
          >
            <ProcessRows />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Process Rows Subcomponent ──────────────────────────── */

function ProcessRows() {
  return (
    <>
      <div className="border border-[var(--color-deep-rule)] rounded-[var(--radius-lg,14px)] bg-[#171B20]/95 backdrop-blur-md p-2 sm:p-4 shadow-2xl">
        <Row
          index="01"
          title="Discovery"
          description="Technical audit, architecture roadmap, fixed-scope alignment, and sprint backlog."
          meta="WEEK 01"
        />
        <Row
          index="02"
          title="Requirements"
          description="Schema definition, API contracts, UI wireframes, and milestone sign-off."
          meta="WEEK 01"
        />
        <Row
          index="03"
          title="Planning"
          description="Repository setup, CI/CD pipeline, staging environment, and initial core scaffolds."
          meta="WEEK 02"
        />
        <Row
          index="04"
          title="Design"
          description="Interactive prototypes, typography system, responsive components, and user flows."
          meta="WEEK 02 – 03"
        />
        <Row
          index="05"
          title="Development"
          description="Weekly sprint iterations, continuous staging deployments, and automated testing."
          meta="WEEK 03 – ONWARD"
        />
        <Row
          index="06"
          title="Launch"
          description="Production deployment, DNS/SSL handover, full IP transfer, and ongoing maintenance."
          meta="FINAL WEEK"
        />
      </div>

      <div className="mt-6">
        <Link
          to="/process"
          className="inline-flex items-center gap-1.5 text-[14px] text-[var(--color-deep-ink)] font-medium hover:underline group"
        >
          <span>Explore our full engineering process</span>
          <span className="inline-block transition-transform duration-[var(--duration-1)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] group-hover:translate-x-[3px]">
            →
          </span>
        </Link>
      </div>
    </>
  );
}
