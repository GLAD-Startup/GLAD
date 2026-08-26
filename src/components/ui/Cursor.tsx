'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';

type CursorMode = 'default' | 'link' | 'view';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkEnabled = () => {
      return (
        window.innerWidth >= 810 &&
        !window.matchMedia('(hover: none) and (pointer: coarse)').matches
      );
    };

    if (!checkEnabled()) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center offset anchor
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      if (!checkEnabled()) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]');
      const cursorType = cursorTarget?.getAttribute('data-cursor');

      if (cursorType === 'link') {
        setMode('link');
      } else if (cursorType === 'view') {
        setMode('view');
      } else {
        setMode('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      if (checkEnabled()) {
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={clsx(
        'fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform select-none hidden min-[810px]:block',
        !isVisible && 'opacity-0'
      )}
      style={{
        transition: 'opacity 200ms ease',
      }}
    >
      <div
        className={clsx(
          'flex items-center justify-center rounded-[999px] transition-all duration-[250ms] ease-out overflow-hidden',
          mode === 'default' && 'w-[14px] h-[14px] bg-fg scale-100',
          mode === 'link' && 'w-[14px] h-[14px] bg-fg scale-[2.2] opacity-60',
          mode === 'view' && 'w-[72px] h-[34px] bg-fg text-bg scale-100 shadow-md'
        )}
      >
        {mode === 'view' && (
          <span className="text-[12px] font-semibold text-bg uppercase tracking-wider select-none">
            VIEW
          </span>
        )}
      </div>
    </div>
  );
}
