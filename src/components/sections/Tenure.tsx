'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { processRows } from '@/data/process';

export default function Tenure() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!headlineRef.current) return;
      const chars = headlineRef.current.querySelectorAll('.process-char');

      gsap.fromTo(
        chars,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          ease: 'none',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const headlineLetters = 'Process.'.split('');

  return (
    <>
      <section
        ref={containerRef}
        id="process"
        className="relative w-full bg-bg select-none"
      >
        {/* Top Area with Headline & Corner Image */}
        <div className="relative pt-[70px] xl:pt-[92px] px-[20px] md:px-[28px] xl:px-[40px] flex flex-col md:flex-row justify-between items-start">
          {/* Headline with Staggered Character Spans */}
          <h2
            ref={headlineRef}
            className="t-display-sm text-fg inline-flex overflow-hidden ml-[-4px]"
            style={{
              fontSize: 'clamp(0px, 10vw, 175px)',
              lineHeight: 0.90,
              letterSpacing: '-0.035em',
            }}
          >
            {headlineLetters.map((char, index) => (
              <span
                key={index}
                className="process-char inline-block will-change-transform opacity-0"
              >
                {char}
              </span>
            ))}
          </h2>

          {/* Corner Image + Signature Scribble */}
          <div className="mt-8 md:mt-0 xl:absolute xl:right-[44px] xl:top-[195px] flex flex-col items-center z-10 self-end md:self-auto">
            <div
              data-cursor="view"
              className="w-[110px] md:w-[136px] h-[150px] md:h-[185px] rounded-[8px] overflow-hidden bg-surface border border-line-solid relative shadow-md"
            >
              <Image
                src="/team/parth.jpeg"
                alt="Parth Garg — COO & Head of Operations"
                fill
                unoptimized
                className="object-cover block"
              />
            </div>

            {/* Handwritten Signature Scribble */}
            <svg
              width="110"
              height="40"
              viewBox="0 0 110 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-3 opacity-85 text-fg"
            >
              <path
                d="M6 28C18 24 35 12 48 10C61 8 32 32 42 32C52 32 85 14 96 12C102 11 82 28 88 26C94 24 104 18 106 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Word Rail */}
        <div className="mt-[40px] xl:mt-[58px]">
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
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[82px]">
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

      {/* Section Eyebrow */}
      <div className="mt-[70px] xl:mt-[90px]">
        <SectionEyebrow
          left={<>CLIENT FEEDBACK <span lang="hi">समीक्षा</span></>}
          index="(GLD® — 06)"
          right="VERIFIED CLIENTS"
        />
      </div>
    </>
  );
}
