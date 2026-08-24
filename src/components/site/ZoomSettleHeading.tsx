import * as React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export interface ZoomSettleHeadingProps {
  text: string;
  className?: string;
  tone?: "paper" | "deep" | "card";
  initialScale?: number;
  as?: "h1" | "h2" | "h3";
}

export function ZoomSettleHeading({
  text,
  className = "",
  tone = "deep",
  initialScale = 1.85,
  as: Tag = "h2",
}: ZoomSettleHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress as this heading enters and settles into reading position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 45%"],
  });

  // Inertial spring for Apple-like buttery kinetic motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.6,
  });

  // Scale: zooms out from oversized initialScale down to 1.0
  const scale = useTransform(smoothProgress, [0, 1], [initialScale, 1.0]);

  // Opacity: fades in from 0.25 to 1.0
  const opacity = useTransform(smoothProgress, [0, 0.8, 1], [0.25, 0.95, 1.0]);

  // Vertical drift: eases up into resting position
  const y = useTransform(smoothProgress, [0, 1], [36, 0]);

  // Optical blur: sharpens from subtle blur to crystal clear
  const blurVal = useTransform(smoothProgress, [0, 0.8, 1], [5, 0.5, 0]);
  const filter = useTransform(blurVal, (v) => (v > 0.05 ? `blur(${v.toFixed(1)}px)` : "none"));

  // Text color based on tone
  const textColor =
    tone === "deep"
      ? "var(--color-deep-ink, #FFFFFF)"
      : "var(--color-ink, #1A1713)";

  if (shouldReduceMotion) {
    return (
      <Tag
        className={className}
        style={{ color: textColor }}
      >
        {text}
      </Tag>
    );
  }

  const MotionTag = motion[Tag];

  return (
    <div
      ref={containerRef}
      className="relative overflow-visible py-1 select-none will-change-transform"
    >
      <MotionTag
        className={className}
        style={{
          scale,
          opacity,
          y,
          filter,
          transformOrigin: "left center",
          color: textColor,
        }}
      >
        {text}
      </MotionTag>
    </div>
  );
}
