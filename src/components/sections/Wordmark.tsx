'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Wordmark() {
  const containerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!wordmarkRef.current || !containerRef.current) return;

      gsap.fromTo(
        wordmarkRef.current,
        { xPercent: -3 },
        {
          xPercent: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full overflow-visible pt-[18px] md:pt-[24px] px-[20px] md:px-[28px] xl:px-[40px] pb-[36px] md:pb-[56px] bg-[#0A0A0B] text-[#FBFBF9] flex justify-center items-center select-none"
    >
      <div
        ref={wordmarkRef}
        data-intro="wordmark"
        className="t-wordmark font-normal text-[#FBFBF9] text-center whitespace-nowrap"
        style={{
          fontSize: 'clamp(0px, 13.5vw, 250px)',
          lineHeight: 0.80,
          letterSpacing: '-0.045em',
          transformOrigin: 'center center',
        }}
      >
        <span>GLAD</span>{' '}
        <span className="relative inline-block">
          {/* Base dim layer during drop and hold */}
          <span
            aria-hidden="true"
            className="inline-block select-none text-[#6B6B70]"
            style={{
              paddingTop: '0.10em',
              paddingBottom: '0.28em',
              marginTop: '-0.10em',
              marginBottom: '-0.28em',
              paddingRight: '0.04em',
              paddingLeft: '0.02em',
            }}
          >
            Studio
          </span>
          {/* Dynamic gradient fill layer that wipes from bottom to top */}
          <span
            data-intro="studio-gradient"
            className="studio-gradient-text absolute inset-0 select-none will-change-[clip-path]"
          >
            Studio
          </span>
        </span>
        <sup
          className="tracking-normal font-normal ml-0.5 text-[#FBFBF9]"
          style={{ fontSize: '0.30em', verticalAlign: 'super' }}
        >
          ®
        </sup>
      </div>
    </section>
  );
}
