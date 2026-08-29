'use client';

import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { cyclingWords } from '@/data/site';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function CyclingWord() {
  const [reducedMotion, setReducedMotion] = useState(false);

  const wrapperRef = useRef<HTMLSpanElement>(null);
  const maskRef = useRef<HTMLSpanElement>(null);
  const currentWordRef = useRef<HTMLSpanElement>(null);
  const nextWordRef = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const offscreenContainerRef = useRef<HTMLSpanElement>(null);

  const wordIndexRef = useRef<number>(0);
  const measuredWidthsRef = useRef<number[]>([]);
  const isPausedRef = useRef<boolean>(false);
  const isStartedRef = useRef<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Measure rendered subpixel widths of all words in offscreen clone
  const measureAllWidths = useCallback(() => {
    if (!offscreenContainerRef.current) return;
    const nodes = offscreenContainerRef.current.querySelectorAll<HTMLSpanElement>('[data-measure-idx]');
    if (!nodes || nodes.length === 0) return;

    const widths: number[] = [];
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      // Use exact rendered width
      widths.push(Math.max(20, Math.round(rect.width * 100) / 100));
    });

    if (widths.length === cyclingWords.length) {
      measuredWidthsRef.current = widths;

      // Apply current word width immediately to wrapper and underline
      const currentWidth = widths[wordIndexRef.current] || widths[0];
      if (currentWidth && wrapperRef.current) {
        wrapperRef.current.style.width = `${currentWidth}px`;
      }
      if (currentWidth && underlineRef.current) {
        underlineRef.current.style.width = `${currentWidth}px`;
      }
    }
  }, []);

  const transitionRef = useRef<() => void>(() => {});

  // Transition sequence: outgoing rolls up, incoming rolls in, wrapper and underline glide width
  const transitionToNextWord = useCallback(() => {
    // If browser tab is hidden, pause and wait for visibility change
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
      isPausedRef.current = true;
      return;
    }

    if (isPausedRef.current) return;

    const currentIdx = wordIndexRef.current;
    const nextIdx = (currentIdx + 1) % cyclingWords.length;

    // Ensure we have measured widths
    if (!measuredWidthsRef.current || measuredWidthsRef.current.length < cyclingWords.length) {
      measureAllWidths();
    }

    const currentEl = currentWordRef.current;
    const nextEl = nextWordRef.current;
    const wrapperEl = wrapperRef.current;
    const underlineEl = underlineRef.current;

    if (!currentEl || !nextEl || !wrapperEl || !underlineEl) {
      timeoutRef.current = setTimeout(() => transitionRef.current(), 2200);
      return;
    }

    // Target width for the incoming word
    const targetWidth =
      measuredWidthsRef.current[nextIdx] ||
      currentEl.getBoundingClientRect().width ||
      120;

    // Prepare next word DOM text & starting transform
    nextEl.textContent = cyclingWords[nextIdx];
    gsap.set(nextEl, { yPercent: 100, opacity: 0 });

    // Kill any existing timeline
    if (tlRef.current) {
      tlRef.current.kill();
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Swap DOM content so current becomes next and state is clean
        currentEl.textContent = cyclingWords[nextIdx];
        gsap.set(currentEl, { yPercent: 0, opacity: 1 });
        gsap.set(nextEl, { yPercent: 100, opacity: 0 });
        wordIndexRef.current = nextIdx;

        // Hold current word for 2.2s before next transition
        if (!isPausedRef.current) {
          timeoutRef.current = setTimeout(() => transitionRef.current(), 2200);
        }
      },
    });

    // 1. Wrapper & Underline width animation (0.45s, power3.inOut) - glides the period smoothly
    tl.to(
      [wrapperEl, underlineEl],
      {
        width: targetWidth,
        duration: 0.45,
        ease: 'power3.inOut',
      },
      0
    );

    // 2. Outgoing word: y: 0 -> -100%, opacity: 1 -> 0 (0.42s, power3.in)
    tl.to(
      currentEl,
      {
        yPercent: -100,
        opacity: 0,
        duration: 0.42,
        ease: 'power3.in',
      },
      0
    );

    // 3. Incoming word: y: 100% -> 0, opacity: 0 -> 1 (0.48s, power3.out, starting 0.12s after outgoing)
    tl.to(
      nextEl,
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.48,
        ease: 'power3.out',
      },
      0.12
    );

    tlRef.current = tl;
  }, [measureAllWidths]);

  useEffect(() => {
    transitionRef.current = transitionToNextWord;
  }, [transitionToNextWord]);

  useIsomorphicLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    // Initial measurement pass
    measureAllWidths();

    // Re-measure when font resolves
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        measureAllWidths();
      });
    }

    // Re-measure on resize (debounced 150ms)
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measureAllWidths();
      }, 150);
    };
    window.addEventListener('resize', handleResize);

    const startCycle = () => {
      if (isStartedRef.current) return;
      isStartedRef.current = true;
      isPausedRef.current = false;
      measureAllWidths();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(transitionToNextWord, 2200);
    };

    // Listen for completion of HeroIntro sequence
    const handleIntroComplete = () => {
      isPausedRef.current = false;
      setTimeout(startCycle, 600);
    };
    window.addEventListener('glad-intro-complete', handleIntroComplete);

    // Fallback: If intro is already played or skipped, start after 600ms from mount
    const isArmed = document.documentElement.classList.contains('intro-armed');
    if (!isArmed) {
      setTimeout(startCycle, 600);
    }

    // Safety fallback: Always ensure cycle starts after intro max expected duration (4.5s)
    const safetyTimer = setTimeout(() => {
      startCycle();
    }, 4500);

    // Pause when hero section leaves viewport
    let observer: IntersectionObserver | null = null;
    const heroSection = wrapperRef.current?.closest('section') || wrapperRef.current;
    if (heroSection) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (isPausedRef.current) {
                isPausedRef.current = false;
                if (isStartedRef.current && !timeoutRef.current && (!tlRef.current || !tlRef.current.isActive())) {
                  timeoutRef.current = setTimeout(transitionToNextWord, 1000);
                }
              }
            } else {
              // Only pause once cycling has actually started and section is scrolled away
              if (isStartedRef.current) {
                isPausedRef.current = true;
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
              }
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(heroSection);
    }

    // Pause when document is hidden (tab switch)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        isPausedRef.current = true;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      } else {
        isPausedRef.current = false;
        if (isStartedRef.current && !timeoutRef.current && (!tlRef.current || !tlRef.current.isActive())) {
          timeoutRef.current = setTimeout(transitionToNextWord, 1000);
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(resizeTimer);
      clearTimeout(safetyTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('glad-intro-complete', handleIntroComplete);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (observer) observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (tlRef.current) tlRef.current.kill();
    };
  }, [measureAllWidths, transitionToNextWord]);

  // Reduced motion: static first word with underline rule
  if (reducedMotion) {
    return (
      <span className="relative inline-block align-baseline mr-[0.02em]">
        <span
          lang="hi"
          className="inline-block tracking-[0.02em]"
          style={{
            fontFamily: "'Noto Sans Devanagari', 'Noto Sans JP', sans-serif",
            fontSize: '1.05em',
          }}
        >
          {cyclingWords[0]}
        </span>
        <span
          className="absolute left-0 bottom-[-12px] w-full h-[3px] bg-fg rounded-[1px] pointer-events-none"
          aria-hidden="true"
        />
      </span>
    );
  }

  return (
    <>
      <span className="sr-only">इरादा</span>
      <span
        ref={wrapperRef}
        aria-live="off"
        aria-hidden="true"
        className="relative inline-block align-baseline will-change-[width]"
        style={{ verticalAlign: 'baseline' }}
      >
        {/* Overflow hidden mask holding the word stack */}
        <span
          ref={maskRef}
          className="relative inline-block overflow-hidden w-full align-baseline"
          style={{ verticalAlign: 'baseline' }}
        >
          {/* Active / Current Word */}
          <span
            ref={currentWordRef}
            lang="hi"
            className="inline-block tracking-[0.02em] whitespace-nowrap will-change-transform"
            style={{
              fontFamily: "'Noto Sans Devanagari', 'Noto Sans JP', sans-serif",
              fontSize: '1.05em',
            }}
          >
            {cyclingWords[0]}
          </span>

          {/* Incoming Word (positioned absolute within mask) */}
          <span
            ref={nextWordRef}
            lang="hi"
            className="absolute left-0 top-0 inline-block tracking-[0.02em] whitespace-nowrap will-change-transform opacity-0"
            style={{
              fontFamily: "'Noto Sans Devanagari', 'Noto Sans JP', sans-serif",
              fontSize: '1.05em',
            }}
          >
            {cyclingWords[1]}
          </span>
        </span>

        {/* Drawn Underline Rule: height 3px, bg var(--fg), border-radius 1px, 12px below baseline to clear below-baseline matras */}
        <span
          ref={underlineRef}
          data-intro="cycling-underline"
          aria-hidden="true"
          className="absolute left-0 bottom-[-12px] h-[3px] bg-fg rounded-[1px] pointer-events-none will-change-[width]"
        />
      </span>

      {/* Offscreen hidden measurement container */}
      <span
        ref={offscreenContainerRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          top: -9999,
          left: -9999,
          whiteSpace: 'nowrap',
        }}
      >
        {cyclingWords.map((word, idx) => (
          <span
            key={idx}
            data-measure-idx={idx}
            lang="hi"
            className="inline-block tracking-[0.02em]"
            style={{
              fontFamily: "'Noto Sans Devanagari', 'Noto Sans JP', sans-serif",
              fontSize: '1.05em',
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </>
  );
}
