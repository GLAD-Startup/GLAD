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

  // Global link interception handler
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Only handle primary left clicks without modifier keys
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a');
      if (!anchor) return;

      // Ignore Cal modal triggers
      if (
        anchor.hasAttribute('data-cal-link') ||
        anchor.closest('[data-cal-link]') ||
        target.closest('[data-cal-link]')
      ) {
        return;
      }

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Ignore external links, downloads, new tabs, and special protocols
      if (
        anchor.target === '_blank' ||
        anchor.hasAttribute('download') ||
        anchor.getAttribute('data-no-transition') === 'true' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      ) {
        return;
      }

      // If it's a hash jump on the same page
      if (href.startsWith('#')) {
        return;
      }

      // Prevent default instant navigation and run smooth exit transition
      e.preventDefault();
      navigateTo(href);
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [navigateTo]);

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
