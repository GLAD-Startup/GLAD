'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // seconds per loop, default 28
  direction?: 'left' | 'right';
  className?: string;
  itemClassName?: string;
}

export default function Marquee({
  children,
  speed = 28,
  direction = 'left',
  className,
  itemClassName,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(track, { xPercent: 0 });
      return;
    }

    const isLeft = direction === 'left';
    const startX = isLeft ? 0 : -33.333333333333336;
    const endX = isLeft ? -33.333333333333336 : 0;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.fromTo(
        track,
        { xPercent: startX },
        {
          xPercent: endX,
          duration: speed,
          ease: 'none',
          repeat: -1,
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [speed, direction]);

  return (
    <div
      className={clsx(
        'relative w-full overflow-hidden select-none whitespace-nowrap',
        className
      )}
    >
      <div
        ref={trackRef}
        className="flex flex-row w-max will-change-transform"
      >
        {/* Render children 3 times for seamless infinite loop */}
        <div className={clsx('flex items-center shrink-0', itemClassName)}>
          {children}
        </div>
        <div className={clsx('flex items-center shrink-0', itemClassName)}>
          {children}
        </div>
        <div className={clsx('flex items-center shrink-0', itemClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
}
