import { useEffect, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { ReactLenis, useLenis } from "lenis/react";

// Limiter configuration for smooth scrolling with per-scroll distance cap
const MAX_DELTA = 100; // Maximum scroll delta (px) allowed per wheel tick/event

const lenisOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,
  smoothWheel: true,
  wheelMultiplier: 0.85,
  touchMultiplier: 1.5,
  infinite: false,
  autoRaf: true,
  // Virtual scroll callback to clamp/limit scroll per scroll action
  virtualScroll: (data: { deltaX: number; deltaY: number; event: WheelEvent | TouchEvent }) => {
    // Clamp Y-axis scroll delta to prevent erratic jumps on aggressive flick/wheel spins
    if (Math.abs(data.deltaY) > MAX_DELTA) {
      data.deltaY = Math.sign(data.deltaY) * MAX_DELTA;
    }
    // Clamp X-axis scroll delta
    if (Math.abs(data.deltaX) > MAX_DELTA) {
      data.deltaX = Math.sign(data.deltaX) * MAX_DELTA;
    }
    return true;
  },
};

function RouteScrollHandler() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (location.hash) {
      const targetId = location.hash.replace(/^#/, "");
      const targetElement =
        document.getElementById(targetId) || document.querySelector(location.hash);
      if (targetElement) {
        lenis.scrollTo(targetElement as HTMLElement, { offset: -80, duration: 1.2 });
        return;
      }
    }

    // Reset scroll position on route transitions
    lenis.scrollTo(0, { immediate: true });
  }, [location.pathname, location.hash, lenis]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      <RouteScrollHandler />
      {children}
    </ReactLenis>
  );
}
