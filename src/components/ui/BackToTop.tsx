'use client';

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          setIsVisible(scrollY > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = (
      window as unknown as {
        lenis?: {
          scrollTo: (
            target: number | string | HTMLElement,
            opts?: { duration?: number }
          ) => void;
        };
      }
    ).lenis;

    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      data-cursor="pointer"
      aria-label="Back to top"
      className={clsx(
        'group fixed bottom-6 right-6 md:bottom-8 md:right-8 xl:bottom-10 xl:right-10 z-40',
        'w-[46px] h-[46px] md:w-[50px] md:h-[50px] rounded-full',
        'flex items-center justify-center',
        'bg-surface/90 backdrop-blur-md border border-line-solid',
        'text-fg shadow-sm cursor-pointer select-none isolate overflow-hidden',
        'transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]',
        'hover:border-fg hover:shadow-md active:scale-95',
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      )}
    >
      {/* Background slide-up fill on hover (matching PillButton aesthetic) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 rounded-full bg-fg translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
      />

      {/* Upward Arrow Icon with rolling transition */}
      <span className="relative z-10 block overflow-hidden w-[18px] h-[18px]">
        {/* Primary arrow: translates from 0% to -100% on hover */}
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full will-change-transform text-fg">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </span>

        {/* Duplicate arrow: arrives from +100% to 0% in inverted color (--bg) */}
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 will-change-transform text-bg"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </span>
      </span>
    </button>
  );
}
