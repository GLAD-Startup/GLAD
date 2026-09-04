'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import PillButton from '@/components/ui/PillButton';
import { engagementTiers } from '@/data/engagement';

const ENGAGEMENT_SYNONYMS = [
  'Tailored Scope.',
  'Scope & Fit.',
  'Your Terms.',
  'Fair & Lean.',
  'Value First.',
  'Engagement.',
];

export default function Pricing() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(ENGAGEMENT_SYNONYMS[0]);
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
            const next = (prev + 1) % ENGAGEMENT_SYNONYMS.length;
            setDisplayedWord(ENGAGEMENT_SYNONYMS[next]);
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
              fontSize: 'clamp(0px, 9vw, 150px)',
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
              'Need-Based',
              'Zero Agency Bloat',
              'Transparent Scope',
              'You Own 100%',
              'Direct Partner Access',
            ]}
          />
        </div>

        {/* Calming Philosophy Statement */}
        <div className="mt-8 xl:mt-12 px-[20px] md:px-[28px] xl:px-[40px] max-w-[820px]">
          <p className="t-body text-fg-muted leading-relaxed">
            We believe engineering should be strictly calibrated to satisfy your business goals—not to inflate agency hours or bill arbitrary figures. Every collaboration is tailored around the exact deliverables you need to succeed.
          </p>
        </div>

        {/* Engagement Grid (3 cols on desktop, 1 col on tablet/mobile) */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px] xl:mt-[60px] grid grid-cols-1 xl:grid-cols-3 gap-[24px] xl:gap-[28px] max-w-[500px] xl:max-w-none mx-auto">
          {engagementTiers.map((plan) => {
            const isFeatured = plan.id === '02';

            return (
              <div
                key={plan.id}
                data-cursor="link"
                className={`border rounded-[14px] pt-[28px] px-[20px] sm:px-[24px] pb-[30px] flex flex-col justify-between transition-colors duration-200 relative ${
                  isFeatured
                    ? 'bg-surface-2 border-line-solid shadow-md'
                    : 'bg-surface border-line-solid hover:bg-surface-2'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 right-6 bg-accent text-white text-[10.5px] font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}
                <div>
                  {/* Tier Name & Timeline Row */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <h3
                        className="text-fg font-medium tracking-tight"
                        style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', lineHeight: 1.1 }}
                      >
                        {plan.name}
                      </h3>
                      <span className="text-[12.5px] xl:text-[13.5px] text-fg-muted font-normal">
                        {plan.timeline}
                      </span>
                    </div>
                    <div className="text-[11.5px] uppercase tracking-wider font-semibold text-accent mt-0.5">
                      {plan.phase}
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="mt-[14px] text-[13.5px] text-fg font-medium leading-snug">
                    {plan.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-[8px] t-body-sm text-fg-muted min-h-[48px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div className="mt-[22px] w-full h-[1px] bg-line" />

                  {/* Feature Rows with Opacity Ladder */}
                  <div className="mt-[22px] flex flex-col gap-[13px]">
                    {plan.features.map((feature, fIdx) => {
                      const isActive = fIdx < plan.activeFeaturesCount;
                      return (
                        <div
                          key={fIdx}
                          className={`flex items-start gap-2.5 transition-opacity duration-200 ${
                            isActive ? 'opacity-100' : 'opacity-[0.35]'
                          }`}
                        >
                          <svg
                            className="w-[14px] h-[14px] text-accent shrink-0 mt-1"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="2.5 7.5 5.5 10.5 11.5 3.5" />
                          </svg>
                          <span className="text-[14px] font-medium text-fg leading-snug">
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-[32px] pt-4 border-t border-line flex justify-center">
                  <PillButton href="/contact">Discuss Scope</PillButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassuring Commitment Note */}
        <div className="mt-10 xl:mt-12 px-[20px] text-center">
          <p className="t-body-sm text-fg-muted max-w-[680px] mx-auto leading-relaxed">
            Every engagement starts with a zero-obligation discovery session. We define a lean, fixed-scope proposal matched directly to your timeline and goals—no inflated estimates, no surprises.
          </p>
        </div>
      </section>

      {/* Section Eyebrow */}
      <div className="mt-[95px] xl:mt-[120px]">
        <SectionEyebrow
          left={<>ENGINEERING INSIGHTS <span lang="hi">लेख</span></>}
          index="(GLD® — 10)"
          right="TECHNICAL GUIDES"
        />
      </div>
    </>
  );
}
