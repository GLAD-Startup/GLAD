'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WordRail from '@/components/ui/WordRail';
import { processRows } from '@/data/process';

const processVisuals = [
  {
    src: '/process/process-1.jpg',
    word: 'Process.',
    title: 'Technical Blueprint',
    subtitle: 'System Architecture & Schema',
  },
  {
    src: '/process/process-2.jpg',
    word: 'Practice.',
    title: 'UI/UX Design Systems',
    subtitle: 'High-Fidelity Interactive Prototype',
  },
  {
    src: '/process/process-3.jpg',
    word: 'Method.',
    title: 'Senior Code Craft',
    subtitle: 'Production TypeScript & React Core',
  },
  {
    src: '/process/process-4.jpg',
    word: 'Craft.',
    title: 'Automated Test Suites',
    subtitle: 'Continuous QA & Quality Verification',
  },
  {
    src: '/process/process-5.jpg',
    word: 'System.',
    title: 'Zero-Downtime Pipeline',
    subtitle: 'Continuous Staging & Cloud Deploy',
  },
  {
    src: '/process/process-6.jpg',
    word: 'Ritual.',
    title: 'Sprint Ritual',
    subtitle: 'Weekly Demos, Retro & Handoff',
  },
];

const PROCESS_SYNONYMS = [
  'Process.',
  'Practice.',
  'Method.',
  'Craft.',
  'System.',
  'Ritual.',
];

export default function Tenure() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(PROCESS_SYNONYMS[0]);
  const isFirstMount = useRef(true);

  // 2. Initial entrance scroll animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!headlineRef.current) return;
      const chars = headlineRef.current.querySelectorAll('.process-char');

      gsap.fromTo(
        chars,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.025,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 96%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // 3. Staggered letter-by-letter slide up replacement cycling
  useEffect(() => {
    let isCancelled = false;

    const interval = setInterval(() => {
      if (!headlineRef.current) return;
      const chars = headlineRef.current.querySelectorAll('.process-char');

      // Slide out current letters UP one by one
      gsap.to(chars, {
        yPercent: -105,
        opacity: 0,
        stagger: 0.025,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => {
          if (isCancelled) return;
          setWordIdx((prev) => {
            const next = (prev + 1) % PROCESS_SYNONYMS.length;
            setDisplayedWord(PROCESS_SYNONYMS[next]);
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

  // When displayedWord updates, slide IN incoming letters one by one from below
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (!headlineRef.current) return;
    const chars = headlineRef.current.querySelectorAll('.process-char');

    gsap.fromTo(
      chars,
      { yPercent: 105, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.45,
        ease: 'power3.out',
      }
    );
  }, [displayedWord]);

  return (
    <>
      <section
        ref={containerRef}
        id="process"
        className="relative w-full bg-bg select-none"
      >
        {/* Top Area with Decoupled Headline & Corner Image */}
        <div className="relative pt-[16px] md:pt-[20px] xl:pt-[24px] px-[20px] md:px-[28px] xl:px-[40px] min-h-[160px] md:min-h-[220px] xl:min-h-[265px]">
          {/* Headline with Staggered Character Spans — Decoupled with full descender clearance */}
          <h2
            ref={headlineRef}
            className="t-display-sm text-fg inline-flex items-baseline ml-[-4px] -mt-[2px] md:-mt-[6px] xl:-mt-[8px]"
            style={{
              fontSize: 'clamp(0px, 10vw, 175px)',
              lineHeight: 0.90,
              letterSpacing: '-0.035em',
            }}
          >
            {displayedWord.split('').map((char, index) => (
              <span
                key={`${wordIdx}-${index}`}
                className="inline-block overflow-hidden h-[1.18em] leading-none align-baseline relative pb-[0.22em] -mb-[0.22em]"
              >
                <span className="process-char inline-block will-change-transform opacity-100">
                  {char}
                </span>
              </span>
            ))}
          </h2>

          {/* Corner Process Visual — Decoupled and strictly anchored on the right */}
          <div className="mt-4 md:mt-0 md:absolute md:right-[28px] xl:right-[40px] md:top-[12px] xl:top-[16px] z-10">
            <div
              data-cursor="view"
              data-cursor-text={processVisuals[wordIdx].title}
              data-cursor-subtext={processVisuals[wordIdx].subtitle}
              onClick={() => {
                setWordIdx((prev) => {
                  const next = (prev + 1) % PROCESS_SYNONYMS.length;
                  setDisplayedWord(PROCESS_SYNONYMS[next]);
                  return next;
                });
              }}
              className="w-[150px] md:w-[175px] xl:w-[200px] h-[195px] md:h-[225px] xl:h-[260px] rounded-[12px] overflow-hidden bg-surface border border-line-solid relative shadow-2xl group cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-fg/40"
            >
              {processVisuals.map((visual, idx) => (
                <Image
                  key={visual.src}
                  src={visual.src}
                  alt={`${visual.title} — ${visual.subtitle}`}
                  fill
                  unoptimized
                  priority={idx === 0}
                  className={`object-cover block transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    idx === wordIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Word Rail */}
        <div className="mt-[24px] xl:mt-[34px]">
          <WordRail
            items={[
              'Discovery',
              'Fixed Scope',
              'Weekly Demos',
              'Post-Launch',
            ]}
          />
        </div>

        {/* Table Block with 8 Process Rows */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px] xl:mt-[56px]">
          <div className="border-t border-line">
            {processRows.map((row) => (
              <div
                key={row.step}
                data-cursor="link"
                className="py-[18px] px-2 border-b border-line text-[15px] transition-colors duration-200 hover:bg-surface"
              >
                {/* Desktop 4-Column Grid (>=1200px) */}
                <div className="hidden xl:grid grid-cols-[80px_230px_1fr_140px] items-center gap-4">
                  <span className="text-left font-normal text-fg-muted text-[15px]">
                    {row.step}
                  </span>
                  <div className="text-left">
                    <span className="eyebrow-shimmer-accent font-medium text-[15px]">
                      {row.stage}
                    </span>
                  </div>
                  <p className="text-left font-normal text-fg-muted text-[14px] leading-normal max-w-[560px]">
                    {row.description}
                  </p>
                  <span className="text-right font-normal text-fg-muted text-[15px]">
                    {row.when}
                  </span>
                </div>

                {/* Tablet 3-Column Grid (810px - 1199px) */}
                <div className="hidden min-[810px]:grid xl:hidden grid-cols-[60px_1fr_120px] gap-4 items-center">
                  <span className="font-normal text-fg-muted text-[14px]">{row.step}</span>
                  <div className="flex flex-col gap-1">
                    <span className="eyebrow-shimmer-accent font-medium text-[15px]">
                      {row.stage}
                    </span>
                    <span className="text-fg-muted text-[13.5px] leading-normal">{row.description}</span>
                  </div>
                  <span className="text-right font-normal text-fg-muted text-[14px]">{row.when}</span>
                </div>

                {/* Mobile Stacked Block (<=809px) */}
                <div className="flex flex-col gap-1.5 min-[810px]:hidden">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                      <span className="text-fg-muted text-[13px]">{row.step}</span>
                      <span className="eyebrow-shimmer-accent font-medium text-[15px]">
                        {row.stage}
                      </span>
                    </div>
                    <span className="text-fg-muted text-[12.5px]">{row.when}</span>
                  </div>
                  <p className="text-fg-muted text-[13.5px] leading-normal">{row.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
