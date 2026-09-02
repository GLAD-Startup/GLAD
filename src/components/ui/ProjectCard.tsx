'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

export interface ProjectCardProps {
  outerSrc: string;
  innerSrc: string;
  title: string;
  index: string;
  category: string;
  subtitle?: string;
  href?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  innerX: number;
  innerY: number;
  innerW: number;
  innerH: number;
  className?: string;
}

export default function ProjectCard({
  outerSrc,
  innerSrc,
  title,
  index,
  category,
  subtitle,
  href = '/work',
  x,
  y,
  w,
  h,
  innerX,
  innerY,
  innerW,
  innerH,
  className,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const card = cardRef.current;
    const inner = innerRef.current;
    if (!inner || !card) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1200px)', () => {
      gsap.to(inner, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  const hoverCategoryText = category || subtitle || 'Selected Work';

  // Calculate proportional horizontal scatter ratio (0 = left gutter, 1 = right gutter)
  const ratio = Math.max(0, Math.min(1, (x - 42) / (1512 - w - 42)));

  return (
    <div
      ref={cardRef}
      className={clsx(
        'group select-none relative w-full max-w-[720px] mx-auto h-[320px] sm:h-[380px] md:h-[432px] pb-[34px] xl:pb-0 xl:absolute xl:mx-0 xl:[left:var(--card-left)] xl:[top:var(--card-y)] xl:[width:var(--card-w)] xl:[height:var(--card-h)] xl:max-w-none',
        className
      )}
      style={
        {
          '--card-left': `calc(40px + ${ratio} * (100% - ${w}px - 80px))`,
          '--card-x': `${x}px`,
          '--card-y': `${y}px`,
          '--card-w': `${w}px`,
          '--card-h': `${h}px`,
        } as React.CSSProperties
      }
    >
      <Link
        href={href}
        data-cursor="view"
        className="block relative w-full h-full outline-none"
        aria-label={`${title} — ${category}`}
      >
        {/* Outer Image Box */}
        <div className="relative w-full h-full rounded-[12px] sm:rounded-[14px] overflow-hidden bg-surface border border-line-solid">
          {/* Outer Image (Reduced dimming on hover) */}
          <div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:opacity-75">
            <Image
              src={outerSrc}
              alt={title}
              fill
              unoptimized
              className="object-cover block"
            />
          </div>

          {/* White Ribbon Opening & Expanding Vertically on Hover (Matches WorkCard) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
            <div className="w-full h-[28px] md:h-[32px] bg-[#FBFBF9] border-y border-line-solid flex items-center justify-center px-4 origin-center scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm">
              <span className="text-[12px] md:text-[13px] font-medium tracking-[-0.01em] text-fg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {hoverCategoryText}
              </span>
            </div>
          </div>
        </div>

        {/* Inner Overlay Image with Parallax & Responsive Overlap */}
        <div
          ref={innerRef}
          className="absolute rounded-[10px] sm:rounded-[12px] overflow-hidden z-10 shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-line-solid bg-surface will-change-transform right-3 bottom-10 sm:right-4 sm:bottom-11 w-[50%] h-[52%] max-w-[320px] xl:max-w-none xl:right-auto xl:bottom-auto xl:[left:var(--inner-x)] xl:[top:var(--inner-y)] xl:[width:var(--inner-w)] xl:[height:var(--inner-h)] pointer-events-none"
          style={
            {
              '--inner-x': `${innerX}px`,
              '--inner-y': `${innerY}px`,
              '--inner-w': `${innerW}px`,
              '--inner-h': `${innerH}px`,
            } as React.CSSProperties
          }
        >
          <div className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.12]">
            <Image
              src={innerSrc}
              alt={`${title} detail`}
              fill
              unoptimized
              className="object-cover block"
            />
          </div>
        </div>

        {/* Caption Row beneath box (Bold with Rolling Text Slide-Up Animation) */}
        <div className="absolute top-full mt-[12px] xl:mt-[16px] left-0 w-full flex justify-between items-center text-[14.5px] sm:text-[15px] xl:text-[16px] text-fg font-semibold px-0.5">
          {/* Project Title: Rolling text slide-up on card hover (all at once) */}
          <span className="relative inline-flex overflow-hidden font-semibold text-fg select-none">
            {/* Primary line: slides up to -100% on hover */}
            <span className="block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform text-fg font-semibold">
              {title}
            </span>

            {/* Duplicate line: slides in from +100% to 0% on hover */}
            <span
              aria-hidden="true"
              className="absolute inset-0 block translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 will-change-transform text-fg font-semibold"
            >
              {title}
            </span>
          </span>

          {/* Project Index */}
          <span className="font-semibold text-fg">
            ({index})
          </span>
        </div>
      </Link>
    </div>
  );
}
