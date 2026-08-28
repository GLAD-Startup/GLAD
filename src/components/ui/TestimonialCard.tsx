'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

export interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  outcome?: string;
  clientName?: string;
  avatarSrc: string;
  x: number;
  y: number;
  parallaxY: number;
  containerRef?: React.RefObject<HTMLElement | null>;
  className?: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  outcome,
  clientName,
  avatarSrc,
  x,
  y,
  parallaxY,
  containerRef,
  className,
}: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const card = cardRef.current;
    if (!card) return;

    // Use gsap.matchMedia so desktop parallax triggers reliably across viewport sizes
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1200px)', () => {
      gsap.fromTo(
        card,
        { y: -parallaxY * 0.4 },
        {
          y: parallaxY * 1.2,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef?.current || card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, [parallaxY, containerRef]);

  return (
    <div
      ref={cardRef}
      className={clsx(
        'z-20 w-full max-w-[390px] mx-auto xl:mx-0 xl:absolute xl:[left:var(--card-x)] xl:[top:var(--card-y)] xl:w-[390px] bg-[#0A0A0B] border border-white/10 rounded-[14px] p-[22px] will-change-transform select-none shadow-[0_24px_60px_-16px_rgba(0,0,0,0.65)] transition-colors duration-200 hover:bg-[#141416]',
        className
      )}
      style={
        {
          '--card-x': `${x}px`,
          '--card-y': `${y}px`,
        } as React.CSSProperties
      }
    >
      {/* Quote */}
      <p className="t-body text-[#FBFBF9] text-[15px] xl:text-[15.5px] leading-[1.62] font-normal">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Outcome line below quote and above divider */}
      {outcome && (
        <div className="mt-3.5 text-[13px] font-medium text-accent-bright tracking-[0.02em]">
          Outcome: <span className="font-semibold">{outcome}</span>
        </div>
      )}

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 mt-[16px] mb-[14px]" />

      {/* Footer Row */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-[44px] h-[44px] rounded-[8px] overflow-hidden relative shrink-0 bg-white/5 border border-white/10">
          <Image
            src={avatarSrc}
            alt={name}
            fill
            unoptimized
            className="object-cover block"
          />
        </div>

        {/* Name + Role */}
        <div className="flex flex-col justify-center min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[14.5px] font-medium text-[#FBFBF9] truncate">
              {name}
            </span>
            {/* Blue Verified Badge */}
            <svg
              className="w-4 h-4 text-[#1D9BF0] shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.3 12l1.41-1.41 2.83 2.83 6.36-6.36 1.41 1.41-7.77 7.73z" />
            </svg>
          </div>
          <span className="text-[12.5px] text-[#A8A8AD] font-normal truncate">
            {role}
          </span>
        </div>

        {/* Client wordmark on right edge in weight 600 */}
        {clientName && (
          <div className="ml-auto shrink-0 select-none text-right">
            <span className="text-[14px] font-semibold text-white/40 tracking-tight uppercase">
              {clientName}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
