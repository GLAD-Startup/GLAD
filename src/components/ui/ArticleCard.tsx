'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export interface ArticleCardProps {
  id: number;
  title: string;
  coverSrc: string;
  portraitSrc: string;
  author: string;
  readTime: string;
  excerpt: string;
  category: string;
  href?: string;
  x: number;
  y: number;
  coverW: number;
  coverH: number;
  side: 'left' | 'right';
  isDimmed?: boolean;
  onHover?: (id: number | null) => void;
  className?: string;
}

export default function ArticleCard({
  id,
  title,
  coverSrc,
  portraitSrc,
  author,
  readTime,
  excerpt,
  category,
  href = '/article',
  x,
  y,
  coverW,
  coverH,
  side = 'left',
  isDimmed = false,
  onHover,
  className,
}: ArticleCardProps) {
  // Desktop Overlapping calculations
  const portraitTop = Math.round(coverH / 2 - 90);
  const titleTop = portraitTop + 20;

  const sideIsLeft = side === 'left';
  const portraitLeft = sideIsLeft ? coverW + 36 : -248;
  const titleLeft = sideIsLeft ? coverW - 90 : -220;

  return (
    <div
      className={clsx(
        'group select-none transition-opacity duration-400 ease-out relative w-full max-w-[686px] mx-auto xl:mx-0 xl:absolute xl:[left:var(--card-x)] xl:[top:var(--card-y)] pb-12 xl:pb-0',
        isDimmed ? 'opacity-35' : 'opacity-100',
        className
      )}
      style={
        {
          '--card-x': `${x}px`,
          '--card-y': `${y}px`,
          '--cover-w': `${coverW}px`,
          '--cover-h': `${coverH}px`,
          '--portrait-left': `${portraitLeft}px`,
          '--portrait-top': `${portraitTop}px`,
          '--title-left': `${titleLeft}px`,
          '--title-top': `${titleTop}px`,
          '--meta-top': `${portraitTop + 212 + 24}px`,
        } as React.CSSProperties
      }
      onMouseEnter={() => onHover?.(id)}
      onMouseLeave={() => onHover?.(null)}
    >
      <Link href={href} className="block relative">
        {/* Cover Image */}
        <div
          data-cursor="view"
          className="relative rounded-[12px] overflow-hidden bg-surface border border-line-solid w-full aspect-[4/3] sm:aspect-[16/11] xl:aspect-auto xl:[width:var(--cover-w)] xl:[height:var(--cover-h)]"
        >
          <div className="w-full h-full relative transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <Image
              src={coverSrc}
              alt={`${title} article cover`}
              fill
              unoptimized
              className="object-cover block"
            />
          </div>

          {/* Centered Category Slide Band on Hover */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[4] bg-black/75 py-2.5 px-4 text-center text-[13px] font-medium text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none">
            {category}
          </div>
        </div>

        {/* Small Square Portrait Overlapping (Somesh Rajput) */}
        <div className="rounded-[10px] overflow-hidden z-[1] bg-surface border border-line-solid shadow-2xl absolute right-4 -bottom-8 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] xl:w-[212px] xl:h-[212px] xl:right-auto xl:-bottom-auto xl:[left:var(--portrait-left)] xl:[top:var(--portrait-top)]">
          <Image
            src={portraitSrc}
            alt={author}
            fill
            unoptimized
            className="object-cover block"
          />
        </div>

        {/* Large Article Title with mix-blend-mode: difference crossing the portrait (MUST STAY text-white) */}
        <div
          className="absolute z-[5] pointer-events-none right-4 bottom-8 xl:right-auto xl:bottom-auto xl:[left:var(--title-left)] xl:[top:var(--title-top)] max-w-[320px] sm:max-w-[380px] xl:max-w-[420px]"
          style={{
            mixBlendMode: 'difference',
          }}
        >
          <h3 className="text-[20px] sm:text-[24px] xl:text-[26px] font-normal text-white leading-[1.22] tracking-[-0.015em]">
            {title}
          </h3>
        </div>

        {/* Metadata Block below (Author & Read Time) */}
        <div className="mt-14 xl:mt-0 xl:absolute z-[2] max-w-[300px] xl:[left:var(--portrait-left)] xl:[top:var(--meta-top)]">
          <div className="text-[13.5px] font-medium text-fg leading-tight">
            {author} · <span className="text-fg-muted font-normal">{readTime}</span>
          </div>
          <p className="mt-[8px] t-body-sm text-fg-muted leading-[1.45] line-clamp-3">
            {excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}
