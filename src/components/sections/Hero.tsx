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
          start: 'top top',
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
        className="relative w-full h-auto xl:h-[544px] mt-0 pt-[124px] md:pt-[138px] px-[20px] md:px-[28px] xl:px-[40px] pb-8 xl:pb-0 bg-[#0A0A0B] text-[#FBFBF9] select-none flex flex-col justify-between"
      >
        {/* Headline — hard 4 lines on desktop/tablet, natural wrapping on mobile with line masks */}
        <h1 className="t-heading max-w-[520px] text-[#FBFBF9] relative z-10">
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

        {/* Video Card: 16:9 widescreen hero video card */}
        <div
          ref={videoCardRef}
          data-intro="video-card"
          data-cursor="view"
          data-cursor-text="GLAD Studio"
          data-cursor-pill="white"
          className="mt-8 xl:mt-0 w-full aspect-[16/9] max-w-[640px] xl:w-[620px] xl:h-[352px] xl:aspect-auto xl:absolute xl:top-[108px] xl:-right-[24px] rounded-[14px] overflow-hidden z-20 will-change-transform bg-[#141416] border border-white/[0.12] shadow-2xl shadow-black/80"
        >
          <video
            src="/videos/hacker%20mod.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Word Rail positioned at top: 404px on desktop crossing behind video card, with texts clear of video card */}
        <div
          data-intro="word-rail"
          className="mt-8 xl:mt-0 xl:absolute xl:top-[404px] xl:left-0 w-full z-[5] pointer-events-none will-change-transform"
        >
          <WordRail
            items={['MVP Development', 'Web Apps', 'Mobile Apps', 'AI Solutions']}
            className="bg-[#141416]/90 backdrop-blur-sm border-y border-white/[0.10]"
            contentClassName="xl:w-[calc(100%-630px)] xl:justify-between px-[20px] md:px-[28px] xl:px-[40px]"
          />
        </div>
      </section>

      {/* Divider below the hero container */}
      <Divider data-intro="wordmark-divider" className="origin-center will-change-transform border-t border-white/[0.12]" />
    </>
  );
}
