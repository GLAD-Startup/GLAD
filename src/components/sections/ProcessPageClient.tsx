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
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stageContainerRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // 2. Scroll-Pinned Rotary Semi-Circular Arc (Desktop >= 1024px)
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const totalSteps = processRows.length;
        const stepSpread = 42; // Calibrated step distance so 3.5 cards fit gracefully

        // Update card positions along the trajectory (Bottom-Left -> Center -> Top-Right)
        const updateRotaryArc = (progress: number) => {
          // progress goes 0 -> 1
          const currentVirtualIndex = progress * (totalSteps - 1);

          cardElementsRef.current.forEach((el, i) => {
            if (!el) return;

            // Normalized distance: t = 0 at center, t < 0 when exiting top-right, t > 0 when entering bottom-left
            const angleDeg = (i - currentVirtualIndex) * stepSpread;
            const t = angleDeg / stepSpread;
            const absT = Math.abs(t);

            // Smooth C-Curve Trajectory with generous separation:
            // t > 0 (incoming card): enters from Bottom-Right (+X, +Y)
            // t = 0 (active card): centered focal spot (0, 0)
            // t < 0 (past card): exits toward Top-Right (+X, -Y)
            const y = t * 340;
            const x = (t * t) * 95 + (t > 0 ? t * 65 : -t * 60);

            // Opacity & scale: 1 active card + 1 clear adjacent card above & below
            let opacity = 0;
            let scale = 0.85;
            let zIndex = 10;

            if (absT <= 0.35) {
              opacity = 1;
              scale = 1;
              zIndex = 50;
            } else if (absT <= 1.0) {
              // Smooth transition for immediate adjacent cards
              const ratio = (absT - 0.35) / 0.65;
              opacity = 1 - ratio * 0.28; // 1.0 -> 0.72
              scale = 1 - ratio * 0.07;   // 1.0 -> 0.93
              zIndex = 35;
            } else if (absT <= 1.5) {
              // Gracefully fade out distant cards before they can overlap
              const ratio = (absT - 1.0) / 0.5;
              opacity = 0.72 - ratio * 0.72; // 0.72 -> 0.0
              scale = 0.93 - ratio * 0.08;   // 0.93 -> 0.85
              zIndex = 20;
            } else {
              opacity = 0;
              scale = 0.80;
              zIndex = 0;
            }

            // Apply transforms via GSAP for silky smooth 60fps rendering (kept perfectly straight)
            gsap.set(el, {
              x: x,
              y: y,
              rotation: 0,
              scale: scale,
              opacity: opacity,
              zIndex: zIndex,
              pointerEvents: opacity > 0.5 ? 'auto' : 'none',
              transformOrigin: '50% 50%',
            });
          });
        };

        // Initialize positions at progress = 0
        updateRotaryArc(0);

        // Pin the section and scrub the rotary arc
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top+=84',
          end: '+=3200',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self) => {
            updateRotaryArc(self.progress);
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-bg select-none pt-[84px]">
      {/* 1. Scroll-Pinned Rotary Process Section */}
      <div
        ref={sectionRef}
        className="w-full border-b border-line overflow-hidden relative min-h-[calc(100vh-84px)] flex flex-col justify-center"
      >
        <div className="px-[20px] md:px-[28px] xl:px-[40px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] xl:grid-cols-[38%_62%] items-center min-h-[calc(100vh-140px)]">
            
            {/* Left Column: Stationary Header */}
            <div className="py-[36px] md:py-[48px] xl:py-[60px] lg:pr-[36px] xl:pr-[48px] flex flex-col justify-center self-center">
              <div className="space-y-6">
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

            {/* Right Column: Arc Stage (Desktop >= 1024px) & Vertical Fallback (<1024px) */}
            <div className="relative w-full lg:border-l lg:border-line flex items-center justify-center min-h-[460px] lg:min-h-[700px] xl:min-h-[760px] overflow-visible">
              
              {/* Desktop Orbital Stage (>=1024px) */}
              <div
                ref={stageContainerRef}
                className="hidden lg:flex relative w-full h-[700px] xl:h-[760px] items-center justify-center overflow-visible"
              >
                {/* Dotted Arc Guide Rail SVG (Smooth C-Curve from Bottom-Right to Center to Top-Right) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                  viewBox="-400 -500 800 1000"
                  fill="none"
                >
                  <path
                    d="M 340 460 C 100 280 0 140 0 0 C 0 -140 100 -280 340 -460"
                    stroke="rgba(10,10,11,0.12)"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    className="opacity-75"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="4"
                    fill="var(--accent)"
                    className="opacity-40"
                  />
                </svg>

                {/* 8 Arc Cards */}
                {processRows.map((step, idx) => (
                  <div
                    key={step.step}
                    ref={(el) => {
                      cardElementsRef.current[idx] = el;
                    }}
                    className="absolute w-[360px] sm:w-[380px] xl:w-[410px] will-change-transform"
                    style={{
                      left: 'calc(50% - 190px)',
                      top: 'calc(50% - 130px)',
                    }}
                  >
                    <ProcessCard step={step} index={idx} />
                  </div>
                ))}
              </div>

              {/* Mobile Vertical Stack (<1024px) */}
              <div className="flex lg:hidden flex-col gap-8 sm:gap-10 w-full py-8">
                {processRows.map((step, idx) => (
                  <ProcessCard key={step.step} step={step} index={idx} />
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* 2. Section Eyebrow preceding FAQ */}
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
