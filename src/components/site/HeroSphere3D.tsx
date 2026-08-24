import React, { useState, useEffect, Suspense } from "react";

// Lazy-load the WebGL R3F canvas (client-only, no SSR)
const HeroSphereCanvas = React.lazy(() => import("./HeroSphereCanvas"));

/* ── Static Blueprint SVG Stand-in Fallback (Zero Layout Shift) ─ */

export function HeroSphereFallback() {
  return (
    <div
      className="relative rounded-full flex items-center justify-center select-none pointer-events-none"
      style={{ width: "270px", height: "270px" }}
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 270 270"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sphereCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0F6E4C" stopOpacity="0.18" />
            <stop offset="45%" stopColor="#7C3AED" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Core Radial Sheen */}
        <circle cx="135" cy="135" r="110" fill="url(#sphereCoreGlow)" />

        {/* Outer dashed guide */}
        <circle
          cx="135"
          cy="135"
          r="100"
          fill="none"
          stroke="var(--color-rule-hi)"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.4"
        />

        {/* Inner concentric ring */}
        <circle
          cx="135"
          cy="135"
          r="70"
          fill="none"
          stroke="var(--color-rule-hi)"
          strokeWidth="0.8"
          strokeDasharray="3 5"
          opacity="0.35"
        />

        {/* Precision Crosshairs */}
        <line
          x1="135"
          y1="30"
          x2="135"
          y2="240"
          stroke="var(--color-rule-hi)"
          strokeWidth="0.7"
          strokeDasharray="2 4"
          opacity="0.3"
        />
        <line
          x1="30"
          y1="135"
          x2="240"
          y2="135"
          stroke="var(--color-rule-hi)"
          strokeWidth="0.7"
          strokeDasharray="2 4"
          opacity="0.3"
        />

        {/* Center Node Points */}
        <circle cx="135" cy="135" r="3.5" fill="#0F6E4C" opacity="0.8" />
        <circle cx="100" cy="110" r="2.2" fill="#0F6E4C" opacity="0.6" />
        <circle cx="170" cy="110" r="2.2" fill="#7C3AED" opacity="0.6" />
        <circle cx="110" cy="160" r="2.2" fill="#7C3AED" opacity="0.6" />
        <circle cx="160" cy="160" r="2.2" fill="#0F6E4C" opacity="0.6" />
      </svg>
    </div>
  );
}

/* ── Error boundary wrapper ─────────────────────────────── */

class SphereErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[HeroSphere3D] WebGL render error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <HeroSphereFallback />;
    }
    return this.props.children;
  }
}

/* ── Client-Only Wrapper Component ──────────────────────── */

export function HeroSphere3D() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    console.log("[HeroSphere3D] Client hydration complete, initializing 3D sphere component");
    setMounted(true);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const mqHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", mqHandler);

    return () => mq.removeEventListener("change", mqHandler);
  }, []);

  if (!mounted) {
    return <HeroSphereFallback />;
  }

  return (
    <div
      className="relative pointer-events-auto"
      style={{ width: "270px", height: "270px" }}
    >
      <SphereErrorBoundary>
        <Suspense fallback={<HeroSphereFallback />}>
          <HeroSphereCanvas reducedMotion={reducedMotion} />
        </Suspense>
      </SphereErrorBoundary>
    </div>
  );
}
