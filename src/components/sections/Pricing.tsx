'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import PillButton from '@/components/ui/PillButton';
import { budgetBands } from '@/data/engagement';

const PRICING_SYNONYMS = [
  'Scope & Budget.',
  'Pick Plans.',
  'Plans & Rates.',
  'Fixed Scope.',
  'Investment.',
  'Engagement.',
];

export default function Pricing() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(PRICING_SYNONYMS[0]);
  const isFirstMount = useRef(true);

  // 1. Initial entrance scroll animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!headlineRef.current) return;
      const chars = headlineRef.current.querySelectorAll('.pricing-char');

      gsap.fromTo(
        chars,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.02,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 92%',
            end: 'top 58%',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // 2. Staggered letter-by-letter slide up replacement cycling
  useEffect(() => {
    let isCancelled = false;

    const interval = setInterval(() => {
      if (!headlineRef.current) return;
      const chars = headlineRef.current.querySelectorAll('.pricing-char');

      // Slide out current letters UP one by one
      gsap.to(chars, {
        yPercent: -105,
        opacity: 0,
        stagger: 0.02,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => {
          if (isCancelled) return;
          setWordIdx((prev) => {
            const next = (prev + 1) % PRICING_SYNONYMS.length;
            setDisplayedWord(PRICING_SYNONYMS[next]);
            return next;
          });
        },
      });
    }, 3200);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, []);

  // 3. When displayedWord updates, slide IN incoming letters one by one from below
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (!headlineRef.current) return;
    const chars = headlineRef.current.querySelectorAll('.pricing-char');

    gsap.fromTo(
      chars,
      { yPercent: 105, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.025,
        duration: 0.45,
        ease: 'power3.out',
      }
    );
  }, [displayedWord]);

  return (
    <>
      <section
        ref={containerRef}
        id="pricing"
        className="relative w-full bg-bg select-none"
      >
        {/* Headline with Staggered Letter Replacement */}
        <div className="pt-[70px] xl:pt-[96px] px-[20px] md:px-[28px] xl:px-[40px]">
          <h2
            ref={headlineRef}
            className="t-display-sm text-fg inline-flex items-baseline ml-[-4px]"
            style={{
              fontSize: 'clamp(0px, 9vw, 160px)',
              lineHeight: 0.90,
              letterSpacing: '-0.035em',
            }}
          >
            {displayedWord.split('').map((char, index) => (
              <span
                key={`${wordIdx}-${index}`}
                className="inline-block overflow-hidden h-[1.18em] leading-none align-baseline relative pb-[0.22em] -mb-[0.22em]"
              >
                <span className="pricing-char inline-block will-change-transform opacity-100">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* Word Rail */}
        <div className="mt-[40px] xl:mt-[74px]">
          <WordRail
            items={[
              'Fixed Scope',
              'Transparent',
              'Senior Team',
              'You Own It',
            ]}
          />
        </div>

        {/* Pricing Grid (3 cols on desktop, 1 col on tablet/mobile) */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[90px] grid grid-cols-1 xl:grid-cols-3 gap-[28px] max-w-[480px] xl:max-w-none mx-auto">
          {budgetBands.map((plan) => (
            <div
              key={plan.id}
              data-cursor="link"
              className="bg-surface border border-line-solid rounded-[14px] pt-[26px] px-[24px] pb-[30px] flex flex-col justify-between transition-colors duration-200 hover:bg-surface-2"
            >
              <div>
                {/* Budget Band & Timeline Row */}
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-fg font-medium tracking-tight"
                    style={{ fontSize: 'clamp(28px, 3.2vw, 46px)', lineHeight: 1.0 }}
                  >
                    {plan.budget}
                  </span>
                  <span className="text-[14px] xl:text-[15px] text-fg-muted font-normal">
                    · {plan.timeline}
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className="mt-[32px] text-[18px] font-medium text-fg">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="mt-[10px] t-body text-fg-muted min-h-[48px] leading-relaxed">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="mt-[24px] w-full h-[1px] bg-line" />

                {/* Feature Rows with Exact Opacity Ladder */}
                <div className="mt-[24px] flex flex-col gap-[14px]">
                  {plan.features.map((feature, fIdx) => {
                    const isActive = fIdx < plan.activeFeaturesCount;
                    return (
                      <div
                        key={fIdx}
                        className={`flex items-start gap-2.5 transition-opacity duration-200 ${
                          isActive ? 'opacity-100' : 'opacity-[0.32]'
                        }`}
                      >
                        <svg
                          className="w-[14px] h-[14px] text-fg shrink-0 mt-1"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="2.5 7.5 5.5 10.5 11.5 3.5" />
                        </svg>
                        <span className="text-[14.5px] font-medium text-fg leading-snug">
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card CTA */}
              <div className="mt-[32px] pt-4 border-t border-line flex justify-center">
                <PillButton href="/contact">Start a Conversation</PillButton>
              </div>
            </div>
          ))}
        </div>

        {/* Indicative Disclaimer Note */}
        <div className="mt-10 xl:mt-12 px-[20px] text-center">
          <p className="t-body-sm text-fg-muted max-w-[640px] mx-auto">
            Every project is quoted fixed-scope after a discovery call. These bands are indicative, not a price list.
          </p>
        </div>
      </section>

      {/* Section Eyebrow */}
      <div className="mt-[70px] xl:mt-[90px]">
        <SectionEyebrow
          left={<>ENGINEERING INSIGHTS <span lang="hi">लेख</span></>}
          index="(GLD® — 10)"
          right="TECHNICAL GUIDES"
        />
      </div>
    </>
  );
}
