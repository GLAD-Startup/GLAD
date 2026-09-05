'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type Lenis from 'lenis';

interface PageTransitionContextType {
  isTransitioning: boolean;
  navigateTo: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  navigateTo: () => {},
});

export const usePageTransition = () => useContext(PageTransitionContext);

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentPathnameRef = useRef(pathname);
  const isFirstMountRef = useRef(true);

  // Programmatic navigation helper with prefetching
  const navigateTo = useCallback(
    (href: string) => {
      // Ignore if currently transitioning
      if (isTransitioning) return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      // Extract target path without query / hash
      const targetPath = href.split('?')[0].split('#')[0];
      const currentPath = window.location.pathname;

      // If clicking current page link, just scroll to top smoothly
      if (targetPath === currentPath) {
        const lenis = (window as unknown as { lenis?: Lenis }).lenis;
        if (lenis) {
          lenis.scrollTo(0, { duration: 1 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      // Prefetch target route immediately
      router.prefetch(href);

      // If reduced motion is preferred, navigate immediately
      if (prefersReducedMotion) {
        router.push(href);
        return;
      }

      setIsTransitioning(true);

      // Slide down and fade out current page content
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          y: 35,
          opacity: 0,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => {
            router.push(href);
          },
        });
      } else {
        router.push(href);
      }
    },
    [isTransitioning, router]
  );

  // Entrance animation whenever pathname changes
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Skip entrance animation on initial mount to allow initial SSR hydration / intro
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      currentPathnameRef.current = pathname;
      return;
    }

    if (currentPathnameRef.current !== pathname) {
      currentPathnameRef.current = pathname;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      // Instantly reset scroll to top
      window.scrollTo(0, 0);
      const lenis = (window as unknown as { lenis?: Lenis }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }

      if (prefersReducedMotion || !containerRef.current) {
        setIsTransitioning(false);
        ScrollTrigger.refresh();
        return;
      }

      // Animate new page in: sliding down from above (-45px) with fade-in
      gsap.fromTo(
        containerRef.current,
        {
          y: -45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.46,
          ease: 'power3.out',
          clearProps: 'all',
          onComplete: () => {
            setIsTransitioning(false);
            if (containerRef.current) {
              containerRef.current.style.willChange = 'auto';
            }
            // Refresh all GSAP triggers on the new page
            ScrollTrigger.refresh();
          },
        }
      );
    }
  }, [pathname]);

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, navigateTo }}>
      <div
        ref={containerRef}
        className="w-full relative min-h-screen"
      >
        {children}
      </div>
    </PageTransitionContext.Provider>
  );
}
