import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { ReactLenis, useLenis } from "lenis/react";

const lenisOptions = {
  lerp: 0.1,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  smoothTouch: false,
  syncTouch: false,
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,
  infinite: false,
  autoRaf: true,
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
        lenis.scrollTo(targetElement as HTMLElement, { offset: -80, immediate: false });
        return;
      }
    }

    // Reset scroll position on route transitions
    lenis.scrollTo(0, { immediate: true });
  }, [location.pathname, location.hash, lenis]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // Disable Lenis entirely if user prefers reduced motion or is on a touch device
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const checkDisabled = () => {
      setDisabled(mediaQuery.matches || isTouch);
    };

    checkDisabled();
    mediaQuery.addEventListener("change", checkDisabled);
    return () => mediaQuery.removeEventListener("change", checkDisabled);
  }, []);

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <RouteScrollHandler />
      {children}
    </ReactLenis>
  );
}
