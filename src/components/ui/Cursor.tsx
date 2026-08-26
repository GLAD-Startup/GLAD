'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';
import { POINTER_HAND_PATH, POINTER_VIEWBOX } from './cursorPath';

type CursorMode = 'default' | 'pointer' | 'view';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<CursorMode>('default');
  const isWhiteRef = useRef<boolean>(false);
  const [mode, setMode] = useState<CursorMode>('default');
  const [isWhite, setIsWhite] = useState<boolean>(false);
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

    gsap.set(cursor, { xPercent: 0, yPercent: 0 });

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      if (!checkEnabled()) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as Element | null;
      if (!target) return;

      const isView = target.closest('[data-cursor="view"]') !== null;
      const isWhitePointer = target.closest('[data-cursor="pointer-white"], [data-cursor-white="true"]') !== null;
      const isClickable = isWhitePointer || target.closest(
        'a, button, [role="button"], [data-cursor="link"], [data-cursor="pointer"], .cursor-pointer, input, select, textarea, label, summary'
      ) !== null;

      let nextMode: CursorMode = 'default';
      if (isView) {
        nextMode = 'view';
      } else if (isClickable) {
        nextMode = 'pointer';
      }

      if (modeRef.current !== nextMode) {
        modeRef.current = nextMode;
        setMode(nextMode);
      }

      if (isWhiteRef.current !== isWhitePointer) {
        isWhiteRef.current = isWhitePointer;
        setIsWhite(isWhitePointer);
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
        transition: 'opacity 180ms ease',
      }}
    >
      {/* 1. Default State: 10px solid black dot centered at mouse with spring animation */}
      <div
        className={clsx(
          'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-fg will-change-transform',
          mode === 'default'
            ? 'scale-100 opacity-100 transition-all duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)]'
            : 'scale-0 opacity-0 transition-all duration-180 ease-in pointer-events-none'
        )}
      />

      {/* 2. Pointer Hand State: Exact vector from brand black-finger-cursor */}
      <div
        className={clsx(
          'absolute top-0 left-0 will-change-transform origin-[3.2px_0px]',
          isWhite
            ? 'filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
            : 'filter drop-shadow-[0_1.5px_2.5px_rgba(0,0,0,0.18)]',
          mode === 'pointer'
            ? 'scale-100 opacity-100 rotate-0 -translate-x-[3.2px] -translate-y-0 transition-all duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)]'
            : 'scale-0 opacity-0 -rotate-12 -translate-x-[3.2px] -translate-y-0 transition-all duration-180 ease-in pointer-events-none'
        )}
      >
        <svg
          width="18"
          height="20"
          viewBox={POINTER_VIEWBOX}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block pointer-events-none select-none"
        >
          <path
            d={POINTER_HAND_PATH}
            fill={isWhite ? '#FBFBF9' : '#0A0A0B'}
            className="transition-colors duration-200"
          />
        </svg>
      </div>

      {/* 3. View State: 'VIEW' pill centered at mouse */}
      <div
        className={clsx(
          'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[34px] rounded-[999px] bg-fg text-bg shadow-lg flex items-center justify-center transition-all duration-250 ease-out overflow-hidden will-change-transform',
          mode === 'view'
            ? 'scale-100 opacity-100'
            : 'scale-0 opacity-0 pointer-events-none'
        )}
      >
        <span className="text-[12px] font-semibold text-bg uppercase tracking-wider select-none">
          VIEW
        </span>
      </div>
    </div>
  );
}
