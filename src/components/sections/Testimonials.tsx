'use client';

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { testimonialsData, TestimonialItem } from '@/data/testimonials';

// Named constant for easy tuning of total pin scroll distance
const PIN_DISTANCE = '+=1800';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface CardConfig {
  item: TestimonialItem;
  x: number;
  fromY: string;
  toY: string;
  startProgress: number;
  endProgress: number;
}

const cardConfigs: CardConfig[] = [
  {
    item: testimonialsData[0], // Prayas NGO Team
    x: 218,
    fromY: '110vh',
    toY: '-100vh',
    startProgress: 0.08,
    endProgress: 0.76,
  },
  {
    item: testimonialsData[1], // Rakesh Khetan (GLA Canteen)
    x: 1010,
    fromY: '120vh',
    toY: '-105vh',
    startProgress: 0.24,
    endProgress: 0.94,
  },
  {
    item: testimonialsData[2], // Nitesh Khandelwal (Earth Travels)
    x: 600,
    fromY: '125vh',
    toY: '-100vh',
    startProgress: 0.4,
    endProgress: 1.0,
  },
];

function TestimonialCardBody({ item }: { item: TestimonialItem }) {
  return (
    <div className="w-full bg-bg border border-line-solid rounded-[14px] p-[24px] shadow-[0_24px_60px_-32px_rgba(10,10,11,0.35)] select-none">
      {/* Quote */}
      <p className="t-body text-fg text-[15px] xl:text-[15.5px] leading-[1.62] font-normal">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Outcome line in --accent */}
      {item.outcome && (
        <div className="mt-3.5 text-[13px] font-medium text-accent tracking-[0.02em]">
          Outcome: <span className="font-semibold">{item.outcome}</span>
        </div>
      )}

      {/* Divider */}
      <div className="w-full h-[1px] bg-line mt-[16px] mb-[14px]" />

      {/* Footer Row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-[44px] h-[44px] rounded-[8px] overflow-hidden relative shrink-0 bg-surface border border-line-solid">
            <Image
              src={item.avatarSrc}
              alt={item.name}
              fill
              unoptimized
              className="object-cover block"
            />
          </div>

          {/* Name & Role */}
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-fg text-[14.5px] leading-tight">
                {item.name}
              </span>
              {item.verified && (
                <svg
                  className="w-[14px] h-[14px] text-accent shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Verified Client"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="text-fg-muted text-[13px] leading-snug mt-0.5">
              {item.role}
            </p>
          </div>
        </div>

        {/* Client Name at right */}
        {item.clientName && (
          <span className="text-fg-dim text-[12px] font-medium uppercase tracking-wider shrink-0 hidden sm:inline-block">
            {item.clientName}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineGroupRef = useRef<HTMLDivElement>(null);
  const marqueeDriftRef = useRef<HTMLDivElement>(null);
  const marqueeLoopRef = useRef<HTMLDivElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const cardElements = [card1Ref.current, card2Ref.current, card3Ref.current];

    const ctx = gsap.context(() => {
      // 1. Infinite Base Marquee loop on inner track (.marquee-loop)
      if (marqueeLoopRef.current) {
        gsap.fromTo(
          marqueeLoopRef.current,
          { xPercent: 0 },
          {
            xPercent: -33.333333333333336,
            duration: 60,
            ease: 'none',
            repeat: -1,
          }
        );
      }

      // 2. Responsive matchMedia: Only pin on Desktop (min-width: 1024px)
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop:
            '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
          isReduced: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop } = context.conditions as {
            isDesktop: boolean;
            isReduced: boolean;
          };

          if (isDesktop) {
            // Helper to toggle will-change: transform strictly during the pin duration
            const setWillChange = (active: boolean) => {
              const elements = [
                headlineGroupRef.current,
                marqueeDriftRef.current,
                ...cardElements,
              ];
              elements.forEach((el) => {
                if (el) {
                  el.style.willChange = active ? 'transform' : 'auto';
                }
              });
            };

            // Main Pin Timeline
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: PIN_DISTANCE,
                pin: true,
                scrub: 0.8,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onEnter: () => setWillChange(true),
                onEnterBack: () => setWillChange(true),
                onLeave: () => setWillChange(false),
                onLeaveBack: () => setWillChange(false),
              },
            });

            // Cards travel upward across their shifted sub-ranges
            cardConfigs.forEach((config, idx) => {
              const el = cardElements[idx];
              if (!el) return;

              const duration = config.endProgress - config.startProgress;

              tl.fromTo(
                el,
                { y: config.fromY },
                {
                  y: config.toY,
                  ease: 'none',
                  duration,
                },
                config.startProgress
              );
            });
          }
        }
      );

      // Refresh ScrollTrigger once fonts are fully ready
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Section Eyebrow (GLD® — 06) — Normal-flow sibling immediately before the pinned section */}
      <div className="w-full relative bg-bg">
        <SectionEyebrow
          left={<>CLIENT FEEDBACK <span lang="hi">समीक्षा</span></>}
          index="(GLD® — 06)"
          right="VERIFIED CLIENTS"
        />
      </div>

      {/* Pinned Testimonials Section */}
      <section
        ref={containerRef}
        id="testimonials"
        className="relative w-full h-auto min-[1024px]:h-screen bg-bg select-none overflow-hidden"
      >
        <h2 className="sr-only">Client Feedback</h2>

        {/* -----------------------------------------------------------
            DESKTOP PINNED LAYOUT (>= 1024px)
            ----------------------------------------------------------- */}
        <div className="hidden min-[1024px]:block w-full h-full relative">
          {/* 1. Headline Group (vertical rise: 18vh -> -60vh) [z-index: 10] */}
          <div
            ref={headlineGroupRef}
            className="headline-group absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none flex flex-col items-center will-change-auto"
          >
            {/* Marquee Viewport: overflow-hidden, full bleed [no transform] */}
            <div className="marquee-viewport w-full overflow-hidden select-none">
              {/* Marquee Drift: horizontal drift (scrubbed xPercent: 0 -> -30) */}
              <div ref={marqueeDriftRef} className="marquee-drift w-full">
                {/* Marquee Loop: infinite continuous loop (duration: 60, repeat: -1) */}
                <div
                  ref={marqueeLoopRef}
                  className="marquee-loop flex flex-row w-max opacity-20"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center shrink-0 pr-[80px] xl:pr-[120px]"
                    >
                      <span
                        className="t-marquee text-fg"
                        style={{
                          fontSize: 'clamp(0px, 16vw, 270px)',
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
            </div>

            {/* CTA Button: 56px below marquee viewport, horizontally centered [z-index: 20] */}
            <div className="cta mt-[56px] flex justify-center z-20 pointer-events-auto">
              <PillButton href="/contact">Get in touch</PillButton>
            </div>
          </div>

          {/* 2. Testimonial Cards Layer [z-index: 30] */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {/* Card 1: Prayas NGO Team (x: 218px) */}
            <div
              ref={card1Ref}
              style={{ left: `${cardConfigs[0].x}px` }}
              className="absolute top-0 w-[390px] xl:w-[410px] pointer-events-auto"
            >
              <TestimonialCardBody item={cardConfigs[0].item} />
            </div>

            {/* Card 2: Rakesh Khetan — GLA Canteen (x: 1010px) */}
            <div
              ref={card2Ref}
              style={{ left: `${cardConfigs[1].x}px` }}
              className="absolute top-0 w-[390px] xl:w-[410px] pointer-events-auto"
            >
              <TestimonialCardBody item={cardConfigs[1].item} />
            </div>

            {/* Card 3: Nitesh Khandelwal — Earth Travels (x: 600px) */}
            <div
              ref={card3Ref}
              style={{ left: `${cardConfigs[2].x}px` }}
              className="absolute top-0 w-[390px] xl:w-[410px] pointer-events-auto"
            >
              <TestimonialCardBody item={cardConfigs[2].item} />
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------
            MOBILE & TABLET NON-PINNED FLOW (< 1024px)
            ----------------------------------------------------------- */}
        <div className="min-[1024px]:hidden w-full relative py-12 px-[20px] md:px-[28px] flex flex-col gap-[72px]">
          {/* Background Marquee */}
          <div className="w-full overflow-hidden opacity-20 select-none pointer-events-none -my-6">
            <div className="flex flex-row w-max animate-marquee">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center shrink-0 pr-[40px]">
                  <span className="text-[72px] md:text-[110px] font-normal leading-[0.9] tracking-tight text-fg">
                    Client Work© - Reviews
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stacked Cards with 72px gaps */}
          <div className="flex flex-col gap-[72px] w-full max-w-[480px] mx-auto">
            {testimonialsData.slice(0, 3).map((item) => (
              <TestimonialCardBody key={item.id} item={item} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-2">
            <PillButton href="/contact">Get in touch</PillButton>
          </div>
        </div>
      </section>

      {/* Section Eyebrow (GLD® — 07 leading into Awards) */}
      <SectionEyebrow
        left={<>WHY TEAMS CHOOSE US <span lang="hi">भरोसा</span></>}
        index="(GLD® — 07)"
        right="HOW WE WORK"
      />
    </>
  );
}
