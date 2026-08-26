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
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=82',
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
        className="relative w-full h-auto min-[1200px]:h-[433px] mt-[82px] pt-[24px] md:pt-[36px] min-[1200px]:pt-0 px-[20px] md:px-[24px] pb-8 min-[1200px]:pb-0 bg-bg select-none"
      >
        {/* Headline — top edge sits 44px below the nav hairline on desktop */}
        <h1
          className="text-fg font-normal select-none relative z-10 min-[1200px]:absolute min-[1200px]:top-[44px] min-[1200px]:left-[24px] text-[32px] sm:text-[42px] min-[1200px]:text-[52px]"
          style={{
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
            maxWidth: '560px',
          }}
        >
          Building Web, Mobile
          <br className="hidden min-[810px]:inline" />
          and AI Products that
          <br className="hidden min-[810px]:inline" />
          Ship Fast and Scale
          <br className="hidden min-[810px]:inline" />
          With{' '}
          <span
            lang="hi"
            className="tracking-[0.02em] text-[1.05em]"
            style={{ fontFamily: "'Noto Sans Devanagari', 'Noto Sans JP', sans-serif" }}
          >
            इरादा
          </span>
          .
        </h1>

        {/* Video Card: width: 398px, height: 390px, top: 22px, right: 24px, radius: 14px, z: 20 */}
        <div
          ref={videoCardRef}
          data-cursor="view"
          className="mt-8 min-[1200px]:mt-0 w-full aspect-[16/11] max-w-[500px] min-[1200px]:w-[398px] min-[1200px]:h-[390px] min-[1200px]:aspect-auto min-[1200px]:absolute min-[1200px]:top-[22px] min-[1200px]:right-[24px] rounded-[14px] overflow-hidden z-20 will-change-transform bg-surface border border-line-solid shadow-none"
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

        {/* Word Rail: top: 312px, height: 27px, z: 5, crossing behind the video card */}
        <div className="mt-8 min-[1200px]:mt-0 min-[1200px]:absolute min-[1200px]:top-[312px] min-[1200px]:left-0 w-full z-[5] pointer-events-none">
          <WordRail
            items={['MVP Development', 'Web Apps', 'Mobile Apps', 'AI Solutions']}
          />
        </div>
      </section>

      {/* Divider below the hero container (21px below card bottom edge, at 433px) */}
      <Divider />
    </>
  );
}

