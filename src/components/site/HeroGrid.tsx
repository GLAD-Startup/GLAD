import { useEffect, useRef } from "react";

export function HeroGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroEl =
      (containerRef.current?.closest("#hero") as HTMLElement | null) ||
      containerRef.current?.parentElement;
    if (!heroEl) return;

    // Check prefers-reduced-motion or coarse pointer
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    if (isReducedMotion || isCoarse) {
      return;
    }

    let rafId: number | null = null;
    let latestX = -9999;
    let latestY = -9999;
    let isInside = false;

    // Initial custom properties on hero element
    heroEl.style.setProperty("--mx", "-9999px");
    heroEl.style.setProperty("--my", "-9999px");
    heroEl.style.setProperty("--hero-mask-radius", "0px");

    const updatePosition = () => {
      rafId = null;
      if (isInside) {
        heroEl.style.setProperty("--mx", `${latestX}px`);
        heroEl.style.setProperty("--my", `${latestY}px`);
        heroEl.style.setProperty("--hero-mask-radius", "320px");
      } else {
        heroEl.style.setProperty("--hero-mask-radius", "0px");
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = heroEl.getBoundingClientRect();
      latestX = e.clientX - rect.left;
      latestY = e.clientY - rect.top;
      isInside = true;

      if (rafId === null) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const handlePointerLeave = () => {
      isInside = false;
      if (rafId === null) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    heroEl.addEventListener("pointermove", handlePointerMove as EventListener, { passive: true });
    heroEl.addEventListener("pointerleave", handlePointerLeave as EventListener, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      heroEl.removeEventListener("pointermove", handlePointerMove as EventListener);
      heroEl.removeEventListener("pointerleave", handlePointerLeave as EventListener);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hero-grid-container"
    >
      {/* Base Grid Layer: 64px square grid */}
      <div className="hero-grid-base" />

      {/* Precision Blueprint Laser Beams (Top-to-Bottom and Left-to-Right) */}
      <div className="hero-laser-top-to-bottom" />
      <div className="hero-laser-left-to-right" />

      {/* Pointer-Reactive Grid Spotlight */}
      <div className="hero-grid-reactive" />

      {/* Precision Blueprint Calibration Crosses */}
      <span className="pointer-events-none absolute top-4 left-6 text-[10px] font-mono text-[var(--color-ink-3)]/40 select-none">+</span>
      <span className="pointer-events-none absolute top-4 right-6 text-[10px] font-mono text-[var(--color-ink-3)]/40 select-none">+</span>
      <span className="pointer-events-none absolute bottom-8 left-6 text-[10px] font-mono text-[var(--color-ink-3)]/40 select-none">+</span>
      <span className="pointer-events-none absolute bottom-8 right-6 text-[10px] font-mono text-[var(--color-ink-3)]/40 select-none">+</span>
    </div>
  );
}
