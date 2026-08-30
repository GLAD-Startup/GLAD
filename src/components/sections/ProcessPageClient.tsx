'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processRows } from '@/data/process';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import PillButton from '@/components/ui/PillButton';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export default function ProcessPageClient() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero headline character slide-up reveal
      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll('.process-char');
        const sup = headlineRef.current.querySelector('.process-sup');

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
          chars,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.04,
            ease: 'power3.out',
          }
        );

        if (sup) {
          tl.fromTo(
            sup,
            { yPercent: 50, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
            '-=0.4'
          );
        }

        if (subtitleRef.current) {
          tl.fromTo(
            subtitleRef.current,
            { y: 25, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
            '-=0.45'
          );
        }

        if (descRef.current) {
          tl.fromTo(
            descRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' },
            '-=0.45'
          );
        }
      }

      // 2. Process cards staggered scroll reveal
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.process-step-card');
        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-bg select-none pt-[84px]">
      {/* 1. Hero Block with Masked Staggered Character Slide-Up Animation */}
      <div className="pt-[48px] xl:pt-[80px] px-[20px] md:px-[28px] xl:px-[40px]">
        <h1
          ref={headlineRef}
          className="t-display-sm text-fg whitespace-nowrap overflow-hidden pb-1"
          style={{
            fontSize: 'clamp(0px, 10vw, 150px)',
            lineHeight: 0.9,
            letterSpacing: '-0.035em',
          }}
        >
          <span className="inline-block">
            {'Process'.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block process-char will-change-transform"
              >
                {char}
              </span>
            ))}
            <sup
              className="font-normal tracking-normal ml-1 process-sup inline-block will-change-transform"
              style={{ fontSize: '0.23em', verticalAlign: 'super' }}
            >
              (8)
            </sup>
          </span>
        </h1>
        <h2
          ref={subtitleRef}
          className="t-heading-sm text-fg mt-4 max-w-[800px] leading-[1.15] will-change-transform"
        >
          How we ship.
        </h2>
        <p
          ref={descRef}
          className="t-body text-fg-muted mt-3 max-w-[680px] will-change-transform"
        >
          Eight steps from first call to a live, supported product. No mystery, no scope creep, no rebuilds.
        </p>
      </div>

      {/* 2. Eight Process Steps as Full Expanded Blocks */}
      <div
        ref={cardsRef}
        className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px] grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8"
      >
        {processRows.map((step) => (
          <div
            key={step.step}
            className="process-step-card bg-surface border border-line-solid rounded-[14px] p-8 xl:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-surface-2 will-change-transform"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[18px] font-semibold text-accent">
                  {step.step}
                </span>
                <span className="text-[13px] font-semibold text-fg uppercase tracking-wider bg-bg px-3 py-1 rounded-full border border-line-solid">
                  {step.when}
                </span>
              </div>

              <h3 className="text-[22px] xl:text-[24px] font-medium text-fg mt-6">
                {step.stage}
              </h3>

              <p className="t-body text-fg-muted mt-3 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-line flex items-center justify-between text-[13px] text-fg-muted">
              <span>Phase Checkpoint</span>
              <span className="text-fg font-medium">Guaranteed Milestone</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Action CTA */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px] text-center">
        <PillButton href="/contact">Book a Discovery Call</PillButton>
      </div>

      {/* 4. Section Eyebrow preceding FAQ */}
      <div className="mt-[80px] xl:mt-[110px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* 5. FAQ */}
      <Faq />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
