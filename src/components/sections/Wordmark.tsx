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
        { xPercent: -2 },
        {
          xPercent: 2,
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
        className="relative w-full overflow-hidden pt-[17px] pb-[28px] bg-bg flex justify-center items-center select-none"
      >
        <div
          ref={wordmarkRef}
          className="font-normal text-fg text-center whitespace-nowrap will-change-transform select-none tracking-[-0.045em] leading-[0.78]"
          style={{
            fontSize: 'clamp(0px, 29vw, 470px)',
          }}
        >
          GLAD
          <sup
            className="tracking-normal font-normal ml-1"
            style={{ fontSize: '0.30em', verticalAlign: 'super' }}
          >
            ®
          </sup>
        </div>
      </section>

      <Divider />

      <SectionEyebrow
        left={<>STUDIO OVERVIEW <span lang="hi" className="text-[1.05em]">स्टूडियो</span></>}
        index="(GLD® — 02)"
        right="PRODUCT ENGINEERING"
      />
    </>
  );
}

