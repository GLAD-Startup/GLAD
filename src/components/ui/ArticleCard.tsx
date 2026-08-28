'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import clsx from 'clsx';
import { ArticleItem } from '@/data/insights';

export interface ArticleCardProps {
  id: number;
  article: ArticleItem;
  coverW: number;
  coverH: number;
  x: number;
  y: number;
  isDimmed: boolean;
  onHover: (id: number | null) => void;
  href?: string;
  className?: string;
}

export function formatDateNoWeekday(dateStr: string): string {
  return dateStr.replace(/^[A-Za-z]+,\s*/, '');
}

export default function ArticleCard({
  id,
  article,
  coverW,
  coverH,
  x,
  y,
  isDimmed,
  onHover,
  href,
  className,
}: ArticleCardProps) {
  const targetHref = href || `/insights/${article.slug}`;
  const cardRef = useRef<HTMLDivElement>(null);
  const categoryBandRef = useRef<HTMLDivElement>(null);
  const categoryTextRef = useRef<HTMLSpanElement>(null);
  const portraitImgRef = useRef<HTMLDivElement>(null);

  const formattedCategoryRead = `${article.category.toUpperCase()} · ${article.readTime.toUpperCase().replace(' READ', '')}`;
  const formattedDate = formatDateNoWeekday(article.date);

  const handleMouseEnter = () => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 1024) return;

    // Constraint: Hover effects only fire on cards whose scroll opacity > 0.5
    const scrollOpacityStr = cardRef.current?.style.getPropertyValue('--scroll-opacity');
    const scrollOpacity = scrollOpacityStr ? parseFloat(scrollOpacityStr) : 1;
    if (scrollOpacity <= 0.5) return;

    // 1. Sibling dimming
    onHover(id);

    // 2. Category band: opens from middle and expands vertically slowly (scaleY: 0 -> 1, 0.65s, power3.out) with transform-origin: 50% 50%
    // Text inside gets opacity 0 -> 1 starting 0.22s in
    if (categoryBandRef.current && categoryTextRef.current) {
      categoryBandRef.current.style.willChange = 'transform';
      gsap.killTweensOf([categoryBandRef.current, categoryTextRef.current]);

      gsap.to(categoryBandRef.current, {
        scaleY: 1,
        duration: 0.65,
        ease: 'power3.out',
        overwrite: 'auto',
      });

      gsap.to(categoryTextRef.current, {
        opacity: 1,
        duration: 0.4,
        delay: 0.22,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }

    // 3. Portrait zoom: img inside portrait frame scale 1 -> 1.12 over 0.7s, power3.out
    if (portraitImgRef.current) {
      gsap.killTweensOf(portraitImgRef.current);
      gsap.to(portraitImgRef.current, {
        scale: 1.12,
        duration: 0.7,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    }
  };

  const handleMouseLeave = () => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 1024) return;

    // Clear sibling dimming
    onHover(null);

    // Category band reverse: collapses vertically back into middle slit (0.45s, power3.in)
    if (categoryBandRef.current && categoryTextRef.current) {
      gsap.killTweensOf([categoryBandRef.current, categoryTextRef.current]);

      gsap.to(categoryTextRef.current, {
        opacity: 0,
        duration: 0.16,
        ease: 'power2.in',
        overwrite: 'auto',
      });

      gsap.to(categoryBandRef.current, {
        scaleY: 0,
        duration: 0.45,
        ease: 'power3.in',
        overwrite: 'auto',
        onComplete: () => {
          if (categoryBandRef.current) {
            categoryBandRef.current.style.willChange = 'auto';
          }
        },
      });
    }

    // Portrait reverse: 0.5s, power2.out
    if (portraitImgRef.current) {
      gsap.killTweensOf(portraitImgRef.current);
      gsap.to(portraitImgRef.current, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className={clsx(
        'card-wrapper w-full select-none xl:w-auto xl:absolute xl:[left:var(--card-x)] xl:[top:var(--card-y)]',
        className
      )}
      style={
        {
          '--card-x': `${x}px`,
          '--card-y': `${y}px`,
          '--dim-factor': isDimmed ? 0.35 : 1,
          opacity: 'calc(var(--scroll-opacity, 1) * var(--dim-factor, 1))',
          transition: 'opacity 400ms ease',
        } as React.CSSProperties
      }
    >
      {/* Desktop Single .card-group Element for scaling */}
      <div
        className="card-group relative hidden xl:block will-change-transform"
        style={{
          width: `${coverW}px`,
          height: `${coverH}px`,
          transformOrigin: `${coverW}px ${Math.round(coverH / 2)}px`,
        }}
      >
        <Link href={targetHref} className="block relative w-full h-full">
          {/* 1. Cover Image Container (100% trigger area) */}
          <div
            data-cursor="view"
            className="relative rounded-[12px] overflow-hidden bg-surface border border-line-solid shadow-sm cursor-pointer w-full h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-full relative">
              <Image
                src={article.coverSrc}
                alt={`${article.title} article cover`}
                fill
                unoptimized
                className="object-cover block"
              />
            </div>

            {/* Category Band: opens from the middle and expands vertically like opening a box */}
            <div
              ref={categoryBandRef}
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[4] h-[32px] bg-[#FFFFFF] flex items-center justify-center pointer-events-none select-none overflow-hidden"
              style={{
                transform: 'translateY(-50%) scaleY(0)',
                transformOrigin: '50% 50%',
              }}
            >
              <span
                ref={categoryTextRef}
                className="text-[13px] font-medium text-[#0A0A0B] uppercase tracking-wider whitespace-nowrap opacity-0"
              >
                {article.category}
              </span>
            </div>
          </div>

          {/* 2. Title: left: +960, top: +32, width: 400px (explicit), font-size: 30px, line-height: 1.18, letter-spacing: -0.01em, color: var(--fg), z-index: 5 */}
          <div
            className="absolute z-[5] pointer-events-none"
            style={{
              left: '960px',
              top: '32px',
              width: '400px',
            }}
          >
            <h3
              className="text-[30px] font-normal text-fg leading-[1.18] tracking-[-0.01em]"
            >
              {article.title}
            </h3>
          </div>

          {/* 3. Portrait: left: +960, top: +170, 216 × 234, border-radius: 10px, overflow: hidden, z-index: 1 */}
          <div
            className="absolute z-[1] rounded-[10px] overflow-hidden bg-surface border border-line-solid shadow-2xl"
            style={{
              left: '960px',
              top: '170px',
              width: '216px',
              height: '234px',
            }}
          >
            <div
              ref={portraitImgRef}
              className="w-full h-full relative will-change-transform"
            >
              <Image
                src={article.portraitSrc}
                alt={article.author}
                fill
                unoptimized
                className="object-cover block"
              />
            </div>
          </div>

          {/* 4. Meta block: left: +736, top: +450, width: 320px (explicit), z-index: 2 */}
          <div
            className="absolute z-[2]"
            style={{
              left: '736px',
              top: '450px',
              width: '320px',
            }}
          >
            {/* Category and read time: 11px uppercase, --fg-muted, letter-spacing: 0.04em, line-height: 1.4 */}
            <div className="text-[11px] font-medium uppercase text-fg-muted tracking-[0.04em] leading-[1.4]">
              {formattedCategoryRead}
            </div>

            {/* Date at 15px --fg, margin-top: 10px, weight 400 (weekday dropped) */}
            <div className="text-[15px] font-normal text-fg mt-[10px]">
              {formattedDate}
            </div>

            {/* Excerpt: margin-top: 8px, 13.5px --fg-muted, line-height: 1.5, truncated to 3 lines */}
            <p
              className="mt-[8px] text-[13.5px] font-normal text-fg-muted leading-[1.5] line-clamp-3"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {article.excerpt}
            </p>
          </div>
        </Link>
      </div>

      {/* Mobile & Tablet Flow (<1024px): Stack in normal flow at full opacity and scale, static category label */}
      <div className="block xl:hidden w-full max-w-[640px] mx-auto bg-surface border border-line-solid rounded-[14px] p-5 sm:p-6 shadow-md">
        <Link href={targetHref} className="block">
          <div className="relative w-full aspect-[16/10] rounded-[10px] overflow-hidden bg-surface-2 border border-line-solid">
            <Image
              src={article.coverSrc}
              alt={`${article.title} cover`}
              fill
              unoptimized
              className="object-cover block"
            />
          </div>

          <div className="mt-4">
            <span className="text-[11px] font-semibold uppercase text-accent tracking-wider block">
              {formattedCategoryRead}
            </span>
            <h3 className="text-[20px] sm:text-[24px] font-normal text-fg leading-[1.25] tracking-tight mt-2">
              {article.title}
            </h3>
            <p className="mt-2 text-[13.5px] text-fg-muted leading-[1.5] line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-line flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-[8px] overflow-hidden relative shrink-0 bg-surface-2 border border-line-solid">
              <Image
                src={article.portraitSrc}
                alt={article.author}
                fill
                unoptimized
                className="object-cover block"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[13.5px] font-medium text-fg">
                {article.author}
              </span>
              <span className="text-[12px] text-fg-muted">
                {formattedDate}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
