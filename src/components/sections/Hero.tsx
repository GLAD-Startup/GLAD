'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WordRail from '@/components/ui/WordRail';
import Divider from '@/components/ui/Divider';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Only parallax when desktop video card is active
      if (!videoCardRef.current || !containerRef.current) return;
      if (window.innerWidth < 1200) return;

      gsap.to(videoCardRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=84',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full h-auto xl:h-[600px] mt-[84px] pt-[48px] md:pt-[68px] px-[20px] md:px-[28px] xl:px-[40px] pb-8 xl:pb-0 bg-bg select-none flex flex-col justify-between"
      >
        {/* Headline — hard 4 lines on desktop/tablet, natural wrapping on mobile */}
        <h1 className="t-heading max-w-[520px] text-fg relative z-10">
          Building Web, Mobile
          <br className="hidden min-[810px]:inline" />
          and AI Products that
          <br className="hidden min-[810px]:inline" />
          Ship Fast and Scale
          <br className="hidden min-[810px]:inline" />
          With{' '}
          <span
            lang="hi"
            className="tracking-[0.02em]"
            style={{ fontFamily: "'Noto Sans Devanagari', 'Noto Sans JP', sans-serif" }}
          >
            इरादा
          </span>
          .
        </h1>

        {/* Video Card: Desktop absolute right-bleed / Mobile full-width 16/11 aspect */}
        <div
          ref={videoCardRef}
          data-cursor="view"
          className="mt-8 xl:mt-0 w-full aspect-[16/11] max-w-[640px] xl:w-[392px] xl:h-[372px] xl:aspect-auto xl:absolute xl:top-[30px] xl:-right-[32px] rounded-[14px] overflow-hidden z-20 will-change-transform bg-surface border border-line-solid shadow-2xl"
        >
          {/* TODO: Replace with GLAD studio product demo video when available */}
          <video
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Word Rail positioned at top: 396px on desktop, or normal flow in mobile/tablet */}
        <div className="mt-8 xl:mt-0 xl:absolute xl:top-[396px] xl:left-0 w-full z-[5] pointer-events-none">
          <WordRail
            items={['MVP Development', 'Web Apps', 'Mobile Apps', 'AI Solutions']}
          />
        </div>
      </section>

      {/* Divider below the hero container */}
      <Divider />
    </>
  );
}
