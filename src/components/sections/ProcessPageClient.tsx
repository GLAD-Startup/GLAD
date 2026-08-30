'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processRows } from '@/data/process';
import ProcessCard from '@/components/ui/ProcessCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export default function ProcessPageClient() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Staggered character slide-up reveal on headline
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
      }

      // 2. Sequential cards entrance animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.process-step-card');
        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
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
      {/* 1. Sticky Two-Column Editorial Process Section with Vertical Divider (Matches Work Page) */}
      <div className="w-full border-b border-line">
        <div className="px-[20px] md:px-[28px] xl:px-[40px]">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] xl:grid-cols-[40%_60%]">
            {/* Left Column: Stationary / Sticky Header Vertically Centered */}
            <div className="py-[36px] md:py-[54px] xl:py-[72px] lg:pr-[36px] xl:pr-[48px]">
              <div className="lg:sticky lg:top-[calc(50vh-130px)] xl:top-[calc(50vh-140px)] self-start space-y-5">
                <h1
                  ref={headlineRef}
                  className="text-fg font-normal leading-[0.88] tracking-[-0.04em] select-none"
                  style={{
                    fontSize: 'clamp(50px, 8.2vw, 128px)',
                  }}
                >
                  <span className="block overflow-hidden pb-1">
                    <span className="inline-block">
                      {'Our'.split('').map((ch, idx) => (
                        <span key={idx} className="inline-block process-char will-change-transform">
                          {ch}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="block overflow-hidden pt-1">
                    <span className="inline-block whitespace-nowrap">
                      {'Process'.split('').map((ch, idx) => (
                        <span key={idx} className="inline-block process-char will-change-transform">
                          {ch}
                        </span>
                      ))}
                      <sup
                        className="font-normal tracking-normal ml-2 xl:ml-3 text-[0.24em] align-super process-sup inline-block will-change-transform"
                        style={{ verticalAlign: 'super' }}
                      >
                        ({processRows.length})
                      </sup>
                    </span>
                  </span>
                </h1>
                <p className="t-body text-fg-muted max-w-[360px] leading-relaxed">
                  Eight steps from first call to a live, supported product. No mystery, no scope creep, no rebuilds.
                </p>
              </div>
            </div>

            {/* Right Column: Vertically Stacked Process Step Cards with Vertical Divider Line */}
            <div
              ref={cardsRef}
              className="lg:border-l lg:border-line pt-[36px] md:pt-[54px] xl:pt-[72px] pb-[60px] md:pb-[80px] xl:pb-[110px] lg:pl-[36px] xl:pl-[48px] flex flex-col gap-[36px] sm:gap-[48px] xl:gap-[56px] w-full"
            >
              {processRows.map((step, idx) => (
                <ProcessCard key={step.step} step={step} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Section Eyebrow preceding FAQ pushed lower */}
      <div className="mt-[70px] md:mt-[100px] xl:mt-[140px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* 3. FAQ Section */}
      <Faq />

      {/* 4. Footer with Filmstrip Continuous Carousel */}
      <Footer />
    </main>
  );
}
