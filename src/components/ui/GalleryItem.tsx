'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

export interface GalleryItemProps {
  src: string;
  video?: boolean;
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
  alt?: string;
  className?: string;
}

export default function GalleryItem({
  src,
  video = false,
  x,
  y,
  w,
  h,
  speed,
  alt = 'Gallery visual',
  className,
}: GalleryItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const item = itemRef.current;
    if (!item) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1200px)', () => {
      gsap.to(item, {
        y: -speed * 240,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => mm.revert();
  }, [speed]);

  return (
    <div
      ref={itemRef}
      data-cursor="view"
      className={clsx(
        'rounded-[12px] overflow-hidden bg-surface border border-line-solid shadow-2xl transition-transform duration-500 hover:scale-[1.02] w-full max-w-[680px] h-[320px] sm:h-[420px] mx-auto xl:mx-0 xl:absolute xl:[left:var(--item-x)] xl:[top:var(--item-y)] xl:[width:var(--item-w)] xl:[height:var(--item-h)] will-change-transform',
        className
      )}
      style={
        {
          '--item-x': `${x}px`,
          '--item-y': `${y}px`,
          '--item-w': `${w}px`,
          '--item-h': `${h}px`,
        } as React.CSSProperties
      }
    >
      {video ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover block"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          className="object-cover block"
        />
      )}
    </div>
  );
}
