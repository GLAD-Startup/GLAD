'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WordRail from '@/components/ui/WordRail';
import Divider from '@/components/ui/Divider';
import CyclingWord from '@/components/hero/CyclingWord';

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
        className="relative w-full h-auto xl:h-[460px] mt-[84px] pt-[40px] md:pt-[54px] px-[20px] md:px-[28px] xl:px-[40px] pb-8 xl:pb-0 bg-bg select-none flex flex-col justify-between"
      >
        {/* Headline — hard 4 lines on desktop/tablet, natural wrapping on mobile with line masks */}
        <h1 className="t-heading max-w-[520px] text-fg relative z-10">
          <span className="block overflow-hidden">
            <span data-intro="headline-line" className="block will-change-transform">
              Building Web, Mobile
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-intro="headline-line" className="block will-change-transform">
              and AI Products that
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-intro="headline-line" className="block will-change-transform">
              Ship Fast and Scale
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-intro="headline-line" className="block will-change-transform pb-3.5">
              With <CyclingWord />.
            </span>
          </span>
        </h1>

        {/* Video Card: 9:16 portrait full-scale video card matching native dimensions */}
        <div
          ref={videoCardRef}
          data-intro="video-card"
          data-cursor="view"
          data-cursor-text="GLAD Studio"
          data-cursor-pill="white"
          className="mt-8 xl:mt-0 w-full max-w-[300px] sm:max-w-[320px] aspect-[9/16] mx-auto xl:mx-0 xl:w-[260px] xl:h-[462px] xl:aspect-auto xl:absolute xl:top-[24px] xl:right-[8px] rounded-[14px] overflow-hidden z-20 will-change-transform bg-surface border border-line-solid shadow-2xl"
        >
          <video
            src="/videos/hero%20section.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Word Rail positioned at top: 320px on desktop crossing behind video card, with texts clear of video card */}
        <div
          data-intro="word-rail"
          className="mt-8 xl:mt-0 xl:absolute xl:top-[320px] xl:left-0 w-full z-[5] pointer-events-none will-change-transform"
        >
          <WordRail
            items={['MVP Development', 'Web Apps', 'Mobile Apps', 'AI Solutions']}
            contentClassName="xl:w-[calc(100%-300px)] xl:justify-between px-[20px] md:px-[28px] xl:px-[40px]"
          />
        </div>
      </section>

      {/* Divider below the hero container */}
      <Divider data-intro="wordmark-divider" className="origin-center will-change-transform" />
    </>
  );
}
