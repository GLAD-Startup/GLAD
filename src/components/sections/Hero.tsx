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

        {/* Video Card: Desktop absolute right-bleed / Mobile full-width 16/11 aspect */}
        <div
          ref={videoCardRef}
          data-intro="video-card"
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

        {/* Word Rail positioned at top: 320px on desktop crossing behind video card, with texts clear of video card */}
        <div
          data-intro="word-rail"
          className="mt-8 xl:mt-0 xl:absolute xl:top-[320px] xl:left-0 w-full z-[5] pointer-events-none will-change-transform"
        >
          <WordRail
            items={['MVP Development', 'Web Apps', 'Mobile Apps', 'AI Solutions']}
            contentClassName="xl:w-[calc(100%-420px)] xl:justify-between px-[20px] md:px-[28px] xl:px-[40px]"
          />
        </div>
      </section>

      {/* Divider below the hero container */}
      <Divider data-intro="wordmark-divider" className="origin-center will-change-transform" />
    </>
  );
}
