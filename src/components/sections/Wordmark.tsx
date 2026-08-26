'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Divider from '@/components/ui/Divider';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

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
    <>
      <section
        ref={containerRef}
        className="relative z-20 w-full overflow-visible pt-[18px] md:pt-[24px] px-[20px] md:px-[28px] xl:px-[40px] pb-[20px] md:pb-[30px] bg-transparent flex justify-center items-center select-none"
      >
        <div
          ref={wordmarkRef}
          data-intro="wordmark"
          className="t-wordmark font-normal text-fg text-center whitespace-nowrap"
          style={{
            fontSize: 'clamp(0px, 13.5vw, 250px)',
            lineHeight: 0.80,
            letterSpacing: '-0.045em',
            transformOrigin: 'center center',
          }}
        >
          GLAD Studio
          <sup
            className="tracking-normal font-normal ml-0.5"
            style={{ fontSize: '0.30em', verticalAlign: 'super' }}
          >
            ®
          </sup>
        </div>
      </section>

      <Divider data-intro="wordmark-divider" className="origin-center will-change-transform" />

      <SectionEyebrow
        data-intro="eyebrow"
        left={<>STUDIO OVERVIEW <span lang="hi">स्टूडियो</span></>}
        index="(GLD® — 01)"
        right="PRODUCT ENGINEERING"
      />
    </>
  );
}
