'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WordRail from '@/components/ui/WordRail';
import Divider from '@/components/ui/Divider';
import CyclingWord from '@/components/hero/CyclingWord';

const TOTAL_FRAMES = 3;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);
  const [activeFrame, setActiveFrame] = useState<number>(0);

  // Auto-cycle through Laptop -> Mobile -> Desktop every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % TOTAL_FRAMES);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
        className="relative w-full h-auto xl:h-[460px] pt-[24px] md:pt-[32px] xl:pt-[36px] px-[20px] md:px-[28px] xl:px-[40px] pb-8 xl:pb-0 bg-bg select-none flex flex-col justify-between"
      >
        {/* Headline — hard 4 lines on desktop/tablet, natural wrapping on mobile with line masks */}
        <h1 className="t-heading max-w-[580px] text-fg relative z-10">
          <span className="block overflow-hidden">
            <span data-intro="headline-line" className="block will-change-transform pb-1">
              Building Web, Mobile
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-intro="headline-line" className="block will-change-transform pb-1">
              and AI Products that
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-intro="headline-line" className="block will-change-transform pb-1">
              Ship Fast and Scale
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-intro="headline-line" className="block will-change-transform pb-1">
              With <CyclingWord />.
            </span>
          </span>
        </h1>

        {/* Video Card: Dynamic Multi-Device Frame Showcase (Laptop -> Phone -> Desktop) */}
        <div
          ref={videoCardRef}
          data-intro="video-card"
          data-cursor="view"
          data-cursor-text="GLAD Studio"
          data-cursor-pill="white"
          className="mt-10 xl:mt-0 w-full aspect-[16/9] max-w-[640px] xl:w-[min(620px,40vw)] xl:h-[352px] xl:aspect-auto xl:absolute xl:top-[48px] xl:right-[40px] z-20 will-change-transform bg-transparent border-0 shadow-none flex items-center justify-center p-0 select-none overflow-hidden"
        >
          {/* Frame 0: Laptop Frame */}
          <div
            className={clsx(
              'absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]',
              activeFrame === 0
                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto z-10'
                : 'opacity-0 scale-[0.95] translate-y-2 pointer-events-none z-0'
            )}
          >
            <div className="relative w-full h-full max-h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.18)] select-none flex items-center justify-center">
              <div className="relative w-full aspect-[1920/1080] max-h-full flex items-center justify-center">
                {/* Video Screen inside MacBook Frame */}
                <div
                  className="absolute overflow-hidden bg-black rounded-[4px] sm:rounded-[8px] md:rounded-[10px]"
                  style={{
                    left: '14.06%',
                    top: '6.67%',
                    width: '72.6%',
                    height: '77.04%',
                  }}
                >
                  <video
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover block"
                  />
                </div>

                {/* Mac Frame Overlay */}
                <Image
                  src="/frames/mac-frame.png"
                  alt="MacBook Laptop frame"
                  fill
                  priority
                  unoptimized
                  className="object-contain pointer-events-none block z-10"
                />
              </div>
            </div>
          </div>

          {/* Frame 1: Dynamic Phone Frame with Hero Video */}
          <div
            className={clsx(
              'absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]',
              activeFrame === 1
                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto z-10'
                : 'opacity-0 scale-[0.95] translate-y-2 pointer-events-none z-0'
            )}
          >
            <div className="relative w-full h-full max-h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.18)] select-none flex items-center justify-center">
              <div className="relative w-full aspect-[1920/1080] max-h-full flex items-center justify-center">
                {/* Video Screen inside Dynamic Phone Frame */}
                <div
                  className="absolute overflow-hidden bg-black rounded-[20px] sm:rounded-[28px] md:rounded-[36px]"
                  style={{
                    left: '2.34%',
                    top: '5.09%',
                    width: '95.31%',
                    height: '86.11%',
                  }}
                >
                  <video
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover block"
                  />
                </div>

                {/* Dynamic Phone Frame Overlay */}
                <Image
                  src="/frames/dynamic-phone-frame.png"
                  alt="Smartphone frame"
                  fill
                  priority
                  unoptimized
                  className="object-contain pointer-events-none block z-10"
                />
              </div>
            </div>
          </div>

          {/* Frame 2: Desktop Studio Monitor Frame */}
          <div
            className={clsx(
              'absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]',
              activeFrame === 2
                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto z-10'
                : 'opacity-0 scale-[0.95] translate-y-2 pointer-events-none z-0'
            )}
          >
            <div className="relative w-full h-full max-h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.18)] select-none flex items-center justify-center">
              <div className="relative w-full aspect-[1920/1080] max-h-full flex items-center justify-center">
                {/* Video Screen inside Studio Monitor Frame */}
                <div
                  className="absolute overflow-hidden bg-black rounded-[3px] sm:rounded-[6px]"
                  style={{
                    left: '17.92%',
                    top: '5.83%',
                    width: '64.06%',
                    height: '64.07%',
                  }}
                >
                  <video
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover block"
                  />
                </div>

                {/* Monitor Frame Overlay */}
                <Image
                  src="/frames/monitor-frame.png"
                  alt="Desktop Studio Monitor frame"
                  fill
                  priority
                  unoptimized
                  className="object-contain pointer-events-none block z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Word Rail positioned at top: 320px on desktop crossing behind video card, with texts clear of video card */}
        <div
          data-intro="word-rail"
          className="mt-8 xl:mt-0 xl:absolute xl:top-[320px] xl:left-0 w-full z-[5] pointer-events-none will-change-transform"
        >
          <WordRail
            items={['MVP Development', 'Web Apps', 'Mobile Apps', 'AI Solutions']}
            contentClassName="xl:w-[calc(100%-min(620px,40vw)-60px)] xl:justify-between px-[20px] md:px-[28px] xl:px-[40px]"
          />
        </div>
      </section>

      {/* Divider below the hero container */}
      <Divider data-intro="wordmark-divider" className="origin-center will-change-transform" />
    </>
  );
}
