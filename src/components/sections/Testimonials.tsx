'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonialsData } from '@/data/testimonials';

const cardPositions = [
  { x: 218, y: 110, parallaxY: -160 },
  { x: 1010, y: 250, parallaxY: -80 },
  { x: 560, y: 640, parallaxY: -200 },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = marqueeTrackRef.current;
    if (!track) return;

    let tween: gsap.core.Tween;

    const ctx = gsap.context(() => {
      tween = gsap.fromTo(
        track,
        { xPercent: 0 },
        {
          xPercent: -33.333333333333336,
          duration: 38,
          ease: 'none',
          repeat: -1,
        }
      );

      ScrollTrigger.create({
        trigger: containerRef.current || document.body,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const v = Math.abs(self.getVelocity ? self.getVelocity() : 0);
          const boost = Math.min(v / 350, 1.5);
          const targetScale = 1 + boost;

          gsap.to(tween, {
            timeScale: targetScale,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        id="testimonials"
        className="relative w-full h-auto xl:h-[1180px] overflow-hidden bg-bg select-none py-16 xl:py-0 px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-[72px] xl:gap-0"
      >
        <h2 className="sr-only">Client Feedback</h2>

        {/* 1. Background Giant Marquee */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full z-[1] overflow-hidden pointer-events-none opacity-20 select-none whitespace-nowrap">
          <div
            ref={marqueeTrackRef}
            className="flex flex-row w-max will-change-transform"
          >
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center shrink-0 pr-[60px] xl:pr-[100px]">
                <span
                  className="t-marquee text-fg"
                  style={{
                    fontSize: 'clamp(0px, 15vw, 260px)',
                    lineHeight: 0.90,
                    letterSpacing: '-0.035em',
                  }}
                >
                  Client Work© - Reviews
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CTA Button Top */}
        <div className="xl:absolute xl:top-[460px] xl:left-1/2 xl:-translate-x-1/2 z-30 mx-auto">
          <PillButton href="/contact">Get in touch</PillButton>
        </div>

        {/* 3. Three Floating Testimonial Cards */}
        {testimonialsData.slice(0, 3).map((t, idx) => {
          const pos = cardPositions[idx];
          return (
            <TestimonialCard
              key={t.id}
              name={t.name}
              role={t.role}
              clientName={t.clientName}
              quote={t.quote}
              outcome={t.outcome}
              avatarSrc={t.avatarSrc}
              x={pos.x}
              y={pos.y}
              parallaxY={pos.parallaxY}
              containerRef={containerRef}
            />
          );
        })}

        {/* 4. CTA Button Bottom (moved to top: 860px) */}
        <div className="xl:absolute xl:top-[860px] xl:left-1/2 xl:-translate-x-1/2 z-30 mx-auto">
          <PillButton href="/contact">Get in touch</PillButton>
        </div>
      </section>

      {/* 5. Section Eyebrow */}
      <SectionEyebrow
        left={<>WHY TEAMS CHOOSE US <span lang="hi">भरोसा</span></>}
        index="(GLD® — 07)"
        right="HOW WE WORK"
      />
    </>
  );
}
