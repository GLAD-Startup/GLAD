'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '@/data/work';
import WorkCard from '@/components/ui/WorkCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export default function WorkPageClient() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll('.work-char');
        const sup = headlineRef.current.querySelector('.work-sup');

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-bg select-none pt-[84px]">
      {/* 1. Sticky Two-Column Editorial Works Section with Vertical Divider */}
      <div className="w-full border-b border-line">
        <div className="px-[20px] md:px-[28px] xl:px-[40px]">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] xl:grid-cols-[40%_60%]">
            {/* Left Column: Stationary / Sticky Header Vertically Centered */}
            <div className="py-[36px] md:py-[54px] xl:py-[72px] lg:pr-[36px] xl:pr-[48px]">
              <div className="lg:sticky lg:top-[calc(50vh-130px)] xl:top-[calc(50vh-140px)] self-start">
                <h1
                  ref={headlineRef}
                  className="text-fg font-normal leading-[0.88] tracking-[-0.04em] select-none"
                  style={{
                    fontSize: 'clamp(60px, 10.5vw, 155px)',
                  }}
                >
                  <span className="block overflow-hidden pb-1">
                    <span className="inline-block">
                      {'All'.split('').map((ch, idx) => (
                        <span key={idx} className="inline-block work-char will-change-transform">
                          {ch}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="block overflow-hidden pt-1">
                    <span className="inline-block">
                      {'Works'.split('').map((ch, idx) => (
                        <span key={idx} className="inline-block work-char will-change-transform">
                          {ch}
                        </span>
                      ))}
                      <sup
                        className="font-normal tracking-normal ml-2 xl:ml-3 text-[0.24em] align-super work-sup inline-block will-change-transform"
                        style={{ verticalAlign: 'super' }}
                      >
                        ({projectsData.length})
                      </sup>
                    </span>
                  </span>
                </h1>
              </div>
            </div>

            {/* Right Column: Vertically Stacked Dual-Layer Project Cards with Vertical Divider Line */}
            <div className="lg:border-l lg:border-line pt-[36px] md:pt-[54px] xl:pt-[72px] pb-[60px] md:pb-[80px] xl:pb-[110px] lg:pl-[36px] xl:pl-[48px] flex flex-col gap-[52px] sm:gap-[68px] xl:gap-[88px] w-full">
              {projectsData.map((proj, idx) => (
                <WorkCard key={proj.id} project={proj} priority={idx === 0} />
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
