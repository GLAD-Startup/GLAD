import { motion, useScroll, useTransform } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 noise-bg">
      {/* Gradient fade to background at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

/** Lighter variant for inner-page sections (no orbs, just texture) */
export function SectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 noise-bg">
    </div>
  );
}
