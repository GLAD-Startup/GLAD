'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

const staggerOffsets = [
  'translate-y-0',
  '-translate-y-[14px]',
  'translate-y-0',
  '-translate-y-[8px]',
];

const whyUsRows = [
  {
    // Source: MVP Development service timeline (4 – 8 weeks) from GLAD site
    metric: '4 – 8 wks',
    value: 'Fast Development',
    desc: 'Weeks, not quarters. Senior team, focused scope, no agency overhead.',
    thumbnails: [
      '/work/prayas-app/phone-3d.png',
      '/work/stock-management/properties-3d.png',
      '/work/ai-mock-interview/hero-3d.png',
      '/work/lead-enrichment/modern-office-facade.png',
    ],
  },
  {
    // Source: Contact page SLA response time (< 24h) from GLAD site
    metric: '< 24h',
    value: 'Transparent Communication',
    desc: 'Async updates, weekly demos, and a Slack channel you actually use.',
    thumbnails: [
      '/work/lead-enrichment/modern-office-facade.png',
      '/work/stock-management/commission-3d.png',
      '/work/prayas-app/real-estate-app.png',
      '/work/ai-mock-interview/broker-deal.png',
    ],
  },
  {
    // Source: 100% source code ownership & IP transfer guarantee from GLAD site
    metric: '100%',
    value: 'Modern Technologies',
    desc: 'TypeScript, React 19, Flutter, Postgres, and AI built into your product, not bolted on.',
    thumbnails: [
      '/work/stock-management/commission-3d.png',
      '/work/ai-mock-interview/broker-deal.png',
      '/work/lead-enrichment/skyscraper-sunset.png',
      '/work/prayas-app/phone-3d.png',
    ],
  },
  {
    // Source: SettleDesk & GLAD HMS 99.9% uptime SLA from GLAD site
    metric: '99.9%',
    value: 'Scalable Architecture',
    desc: 'Production-ready from day one — type-safe, tested, observable.',
    thumbnails: [
      '/products/hotel-building.png',
      '/products/building.png',
      '/work/lead-enrichment/modern-office-facade.png',
      '/work/stock-management/properties-3d.png',
    ],
  },
];

export default function Awards() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!headlineRef.current || !sectionRef.current) return;

      gsap.fromTo(
        headlineRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="why-us"
        className="relative w-full bg-bg select-none"
      >
        {/* 1. Headline */}
        <div className="w-full flex justify-center pt-[70px] xl:pt-[100px] pb-[32px] -mb-[32px] px-[20px] md:px-[28px] xl:px-0 overflow-hidden">
          <h2
            ref={headlineRef}
            className="t-display text-fg whitespace-nowrap xl:translate-x-[120px] will-change-transform pb-[0.2em]"
            style={{
              fontSize: 'clamp(0px, 12.6vw, 220px)',
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
            }}
          >
            Why Us
            <sup
              className="font-normal tracking-normal ml-1 inline-block"
              style={{ fontSize: '0.23em', verticalAlign: 'super' }}
            >
              (4)
            </sup>
          </h2>
        </div>

        {/* 2. Word Rail */}
        <div className="mt-[40px] xl:mt-[70px]">
          <WordRail items={['Fast', 'Transparent', 'Modern', 'Scalable']} />
        </div>

        {/* 3. Why Us Rows Table */}
        <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[88px]">
          <div className="border-t border-line">
            {whyUsRows.map((row, idx) => (
              <div
                key={idx}
                data-cursor="link"
                className="group py-[28px] md:py-[36px] xl:py-[44px] px-2 border-b border-line transition-colors duration-200 hover:bg-surface"
              >
                {/* Desktop 4-Column Grid (>=1200px) */}
                <div className="hidden xl:grid grid-cols-[200px_300px_1fr_420px] items-start gap-4">
                  <div className="text-[17px] font-semibold text-accent pt-1">
                    {row.metric}
                  </div>
                  <div className="text-[16px] font-medium text-fg pt-1">
                    {row.value}
                  </div>
                  <p className="t-body-sm text-fg-muted max-w-[340px]">
                    {row.desc}
                  </p>
                  <div className="flex items-center gap-[10px] justify-end">
                    {row.thumbnails.map((src, sIdx) => (
                      <div
                        key={sIdx}
                        className={`w-[86px] h-[122px] rounded-[6px] overflow-hidden bg-surface border border-line-solid relative shrink-0 transition-all duration-300 ease-out opacity-85 group-hover:opacity-100 group-hover:scale-[1.04] ${staggerOffsets[sIdx % staggerOffsets.length]}`}
                      >
                        <Image
                          src={src}
                          alt={`${row.value} visual showcase ${sIdx + 1}`}
                          fill
                          unoptimized
                          className="object-cover block"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tablet 2-Column Grid (810px - 1199px) */}
                <div className="hidden min-[810px]:grid xl:hidden grid-cols-2 gap-4 items-center">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[16px] font-semibold text-accent">{row.metric}</span>
                      <span className="text-[16px] font-medium text-fg">{row.value}</span>
                    </div>
                    <p className="t-body-sm text-fg-muted max-w-[320px]">{row.desc}</p>
                  </div>
                  <div className="flex items-center gap-[8px] justify-end overflow-hidden">
                    {row.thumbnails.map((src, sIdx) => (
                      <div
                        key={sIdx}
                        className="w-[72px] h-[100px] rounded-[6px] overflow-hidden bg-surface border border-line-solid relative shrink-0"
                      >
                        <Image
                          src={src}
                          alt={`${row.value} visual showcase ${sIdx + 1}`}
                          fill
                          unoptimized
                          className="object-cover block"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Stacked Block (<=809px) */}
                <div className="flex flex-col gap-3 min-[810px]:hidden">
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-medium text-fg">{row.value}</span>
                    <span className="text-[15px] text-accent font-semibold">{row.metric}</span>
                  </div>
                  <p className="t-body-sm text-fg-muted">{row.desc}</p>
                  <div className="flex items-center gap-[8px] overflow-x-auto no-scrollbar py-2">
                    {row.thumbnails.map((src, sIdx) => (
                      <div
                        key={sIdx}
                        className="w-[72px] h-[100px] rounded-[6px] overflow-hidden bg-surface border border-line-solid relative shrink-0"
                      >
                        <Image
                          src={src}
                          alt={`${row.value} visual showcase ${sIdx + 1}`}
                          fill
                          unoptimized
                          className="object-cover block"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Eyebrow */}
      <div className="mt-[70px] xl:mt-[90px]">
        <SectionEyebrow
          left={<>OUR PRODUCTS <span lang="hi">उत्पाद</span></>}
          index="(GLD® — 08)"
          right="SAAS PLATFORMS"
        />
      </div>
    </>
  );
}
