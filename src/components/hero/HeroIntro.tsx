'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Set this constant to true to play the intro animation on every single page load / refresh.
 * When false, the intro runs once per session via sessionStorage('glad-intro-played').
 */
export const PLAY_INTRO_EVERY_LOAD = true;

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface HeroIntroProps {
  children: React.ReactNode;
}

export default function HeroIntro({ children }: HeroIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const hasPlayed =
      !PLAY_INTRO_EVERY_LOAD &&
      Boolean(sessionStorage.getItem('glad-intro-played'));

    // If reduced motion or already played, skip timeline, remove armed class, and leave scroll unlocked
    if (prefersReducedMotion || hasPlayed) {
      document.documentElement.classList.remove('intro-armed');
      const video = document.querySelector<HTMLVideoElement>(
        '[data-intro="video-card"] video'
      );
      if (video) {
        video.play().catch(() => {});
      }
      return;
    }

    let tl: gsap.core.Timeline | null = null;
    let ctx: gsap.Context | null = null;

    const runIntro = async () => {
      // 1. Wait for document.fonts.ready so General Sans font is loaded before animating wordmark width
      if ('fonts' in document) {
        await document.fonts.ready;
      }

      // 2. Lock scroll and scroll to top for the duration of the intro
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      const lenisInstance = (
        window as unknown as { lenis?: { stop: () => void; start: () => void } }
      ).lenis;
      if (lenisInstance) {
        lenisInstance.stop();
      }

      ctx = gsap.context(() => {
        // Query elements by data-intro attributes
        const wordmark = document.querySelector('[data-intro="wordmark"]');
        const wordmarkDividers = document.querySelectorAll(
          '[data-intro="wordmark-divider"]'
        );
        const videoCard = document.querySelector('[data-intro="video-card"]');
        const video = document.querySelector<HTMLVideoElement>(
          '[data-intro="video-card"] video'
        );
        const wordRail = document.querySelector('[data-intro="word-rail"]');
        const headlineLines = document.querySelectorAll(
          '[data-intro="headline-line"]'
        );
        const nav = document.querySelector('[data-intro="nav"]');
        const navHairline = document.querySelector(
          '[data-intro="nav-hairline"]'
        );
        const eyebrow = document.querySelector('[data-intro="eyebrow"]');

        // Add will-change for the duration only (removed in onComplete)
        if (wordmark instanceof HTMLElement) {
          wordmark.style.willChange = 'transform, color';
          wordmark.style.transformOrigin = 'center center';
        }

        // Pause video initially until beat 1.62s
        if (video) {
          video.pause();
          video.currentTime = 0;
        }

        // Set initial GSAP values matching the from states
        gsap.set(wordmark, {
          y: -500,
          opacity: 0,
          scale: 0.72,
          color: '#A8A8AD', // var(--fg-dim)
          transformOrigin: 'center center',
        });

        gsap.set(wordmarkDividers, {
          scaleX: 0,
          transformOrigin: 'center center',
        });

        gsap.set(videoCard, {
          y: 26,
          scale: 0.94,
          opacity: 0,
        });

        gsap.set(wordRail, {
          clipPath: 'inset(0 100% 0 0)',
        });

        gsap.set(headlineLines, {
          yPercent: 100,
        });

        gsap.set(nav, {
          y: -14,
          opacity: 0,
        });

        gsap.set(navHairline, {
          scaleX: 0,
          transformOrigin: 'left center',
        });

        gsap.set(eyebrow, {
          opacity: 0,
        });

        // Remove CSS armed class in the same frame GSAP timeline takes control
        document.documentElement.classList.remove('intro-armed');

        // Create the sequence timeline
        tl = gsap.timeline({
          onComplete: () => {
            // Unlock scroll immediately
            document.body.style.overflow = '';
            const activeLenis = (
              window as unknown as { lenis?: { start: () => void } }
            ).lenis;
            if (activeLenis) {
              activeLenis.start();
            }

            // Remove will-change compositor layer from wordmark
            // Clear residual GSAP inline styles on nav so Tailwind scroll classes (-translate-y-full) work
            gsap.set(nav, { clearProps: 'transform,opacity' });

            // Mark session as played
            sessionStorage.setItem('glad-intro-played', 'true');

            // Refresh ScrollTrigger calculations
            ScrollTrigger.refresh();

            // Notify components (like CyclingWord) that intro reveal is complete
            window.dispatchEvent(new CustomEvent('glad-intro-complete'));
          },
        });

        // 0.55s: Wordmark — drop from below header smoothly and slowly (duration: 1.30s)
        tl.to(
          wordmark,
          {
            y: 0,
            opacity: 1,
            duration: 1.30,
            ease: 'power3.out',
          },
          0.55
        );

        // 1.85s - 2.20s: hold in the faded, reduced state for 0.35s

        // 2.20s: Wordmark — zoom: scale: 0.72 -> 1, color: var(--fg-dim) -> var(--fg) (#0A0A0B)
        tl.to(
          wordmark,
          {
            scale: 1,
            color: '#0A0A0B',
            duration: 0.90,
            ease: 'expo.out',
          },
          2.20
        );

        // 2.20s: Wordmark dividers: scaleX: 0 -> 1 from center
        tl.to(
          wordmarkDividers,
          {
            scaleX: 1,
            duration: 0.90,
            ease: 'expo.out',
          },
          2.20
        );

        // 2.90s: Video card: y: 26px, scale: 0.94, opacity: 0 -> y: 0, scale: 1, opacity: 1
        tl.to(
          videoCard,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.60,
            ease: 'power3.out',
            onStart: () => {
              if (video) {
                video.play().catch(() => {});
              }
            },
          },
          2.90
        );

        // 3.04s: Word rail: clip-path: inset(0 100% 0 0) -> inset(0 0% 0 0)
        tl.to(
          wordRail,
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.55,
            ease: 'power3.inOut',
          },
          3.04
        );

        // 3.18s: Headline: per-line mask reveal y: 100% -> y: 0, stagger: 0.06s
        tl.to(
          headlineLines,
          {
            yPercent: 0,
            duration: 0.65,
            stagger: 0.06,
            ease: 'power3.out',
          },
          3.18
        );

        // 3.32s: Nav: y: -14px, opacity: 0 -> y: 0, opacity: 1
        tl.to(
          nav,
          {
            y: 0,
            opacity: 1,
            duration: 0.50,
            ease: 'power2.out',
            onComplete: () => {
              gsap.set(nav, { clearProps: 'transform,opacity' });
            },
          },
          3.32
        );

        // 3.48s: Nav hairline: scaleX: 0 -> 1 from left
        tl.to(
          navHairline,
          {
            scaleX: 1,
            duration: 0.50,
            ease: 'power2.out',
          },
          3.48
        );

        // 3.62s: Eyebrow row: opacity: 0 -> 1
        tl.to(
          eyebrow,
          {
            opacity: 1,
            duration: 0.40,
            ease: 'power1.out',
          },
          3.62
        );
      });
    };

    runIntro();

    return () => {
      if (tl) tl.kill();
      if (ctx) ctx.revert();
      document.body.style.overflow = '';
      document.documentElement.classList.remove('intro-armed');
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
