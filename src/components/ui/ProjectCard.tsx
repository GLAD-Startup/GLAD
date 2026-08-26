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
  href = '/portfolio',
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

  const hoverText = subtitle || category;

  return (
    <div
      ref={cardRef}
      className={clsx(
        'group select-none relative w-full max-w-[720px] mx-auto h-[380px] sm:h-[432px] xl:absolute xl:mx-0 xl:[left:var(--card-x)] xl:[top:var(--card-y)] xl:[width:var(--card-w)] xl:[height:var(--card-h)]',
        className
      )}
      style={
        {
          '--card-x': `${x}px`,
          '--card-y': `${y}px`,
          '--card-w': `${w}px`,
          '--card-h': `${h}px`,
        } as React.CSSProperties
      }
    >
      <Link
        href={href}
        data-cursor="link"
        className="block relative w-full h-full"
      >
        {/* Outer Image Box */}
        <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-surface border border-line-solid">
          <div className="w-full h-full relative transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            <Image
              src={outerSrc}
              alt={title}
              fill
              unoptimized
              className="object-cover block"
            />
          </div>

          {/* Centered Subtitle Band on Hover */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[4] bg-fg text-bg py-2.5 px-4 text-center text-[12px] md:text-[13px] font-medium tracking-[0.01em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none select-none max-w-[90%] mx-auto rounded-[6px]">
            {hoverText}
          </div>
        </div>

        {/* Inner Overlay Image with Parallax & Responsive Overlap */}
        <div
          ref={innerRef}
          className="absolute rounded-[10px] overflow-hidden z-[2] shadow-2xl border border-line-solid bg-surface will-change-transform right-4 bottom-4 w-[50%] h-[55%] xl:right-auto xl:bottom-auto xl:[left:var(--inner-x)] xl:[top:var(--inner-y)] xl:[width:var(--inner-w)] xl:[height:var(--inner-h)]"
          style={
            {
              '--inner-x': `${innerX}px`,
              '--inner-y': `${innerY}px`,
              '--inner-w': `${innerW}px`,
              '--inner-h': `${innerH}px`,
            } as React.CSSProperties
          }
        >
          <div className="w-full h-full relative transition-transform duration-500 ease-out group-hover:scale-[1.06]">
            <Image
              src={innerSrc}
              alt={`${title} detail`}
              fill
              unoptimized
              className="object-cover block"
            />
          </div>
        </div>

        {/* Caption Row beneath box */}
        <div className="absolute top-full mt-[16px] left-0 w-full flex justify-between items-center t-body text-fg">
          <span className="font-normal">{title}</span>
          <span className="font-normal">({index})</span>
        </div>
      </Link>
    </div>
  );
}
