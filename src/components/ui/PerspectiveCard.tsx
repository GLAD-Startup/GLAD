'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

export interface PerspectiveCardProps {
  src: string;
  video?: boolean;
  label: string;
  subtitle?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotY: number;
  z: number;
  speed: number;
  className?: string;
}

export default function PerspectiveCard({
  src,
  video = false,
  label,
  subtitle,
  x,
  y,
  w,
  h,
  rotY,
  z,
  speed,
  className,
}: PerspectiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const card = cardRef.current;
    if (!card) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1200px)', () => {
      // Set initial 3D transform on desktop
      gsap.set(card, {
        transformPerspective: 1400,
        z: z,
        rotateY: rotY,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.fromTo(
        card,
        {
          y: 0,
          rotateY: rotY,
        },
        {
          y: -speed * 150,
          rotateY: 0,
          ease: 'power1.out',
          duration: 0.5,
        }
      ).to(card, {
        y: -speed * 300,
        rotateY: -rotY * 0.6,
        ease: 'power1.in',
        duration: 0.5,
      });
    });

    return () => mm.revert();
  }, [rotY, z, speed]);

  const fontSize = Math.max(16, Math.round(w / 10));

  return (
    <div
      ref={cardRef}
      data-cursor="view"
      className={clsx(
        'group rounded-[12px] overflow-hidden bg-surface border border-line-solid select-none shadow-[0_18px_40px_-24px_rgba(10,10,11,0.28)] transition-all duration-300 w-full max-w-[500px] h-[300px] sm:h-[340px] mx-auto xl:mx-0 xl:absolute xl:[left:var(--card-x)] xl:[top:var(--card-y)] xl:[width:var(--card-w)] xl:[height:var(--card-h)] will-change-transform',
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
      {/* Background Media */}
      {video ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Image
          src={src}
          alt={`${label} product platform visual`}
          fill
          unoptimized
          className="object-cover block transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Client / Product Wordmark on Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none p-3 text-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
        <span
          className="text-white font-semibold leading-tight select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          style={{
            fontSize: `${fontSize}px`,
          }}
        >
          {label}
        </span>

        {/* Hover Subtitle */}
        {subtitle && (
          <span className="mt-2 text-[11px] md:text-[12px] text-white/90 font-normal px-2.5 py-1 rounded bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[90%] leading-snug">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
