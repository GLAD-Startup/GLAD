'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Disable smooth scroll and refresh ScrollTrigger directly
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
      }
      return;
    }

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      autoRaf: false,
    });

    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after fonts & window assets load
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleWindowLoad);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1200);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('load', handleWindowLoad);
      delete (window as unknown as { lenis?: Lenis }).lenis;
      gsap.ticker.remove(update);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
