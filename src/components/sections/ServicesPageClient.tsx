'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';
import { servicesData } from '@/data/services';

const servicesWithImages = [
  {
    ...servicesData[0],
    image: '/services/service-mvp.jpg',
  },
  {
    ...servicesData[1],
    image: '/services/service-web.jpg',
  },
  {
    ...servicesData[2],
    image: '/services/service-mobile.jpg',
  },
  {
    ...servicesData[3],
    image: '/services/service-ai.jpg',
  },
  {
    ...servicesData[4],
    image: '/services/service-automation.jpg',
  },
];

export default function ServicesPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // 1. Hero Reveal Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.45'
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.4'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // 2. Cursor-Following Floating Preview Image
  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    gsap.set(preview, { xPercent: 0, yPercent: 0 });

    const xTo = gsap.quickTo(preview, 'x', { duration: 0.55, ease: 'power3.out' });
    const yTo = gsap.quickTo(preview, 'y', { duration: 0.55, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-bg select-none pt-[84px] relative">
      {/* 1. Hero Block */}
      <div
        ref={heroRef}
        className="pt-[48px] xl:pt-[80px] px-[20px] md:px-[28px] xl:px-[40px] overflow-hidden"
      >
        <h1
          ref={headlineRef}
          className="t-display-sm text-fg whitespace-nowrap will-change-transform"
          style={{
            fontSize: 'clamp(0px, 10vw, 150px)',
            lineHeight: 0.90,
            letterSpacing: '-0.035em',
          }}
        >
          Services
          <sup
            className="font-normal tracking-normal ml-1"
            style={{ fontSize: '0.23em', verticalAlign: 'super' }}
          >
            ({servicesData.length})
          </sup>
        </h1>
        <h2
          ref={subtitleRef}
          className="t-heading-sm text-fg mt-4 max-w-[800px] leading-[1.15] will-change-transform"
        >
          Built for ambitious teams.
        </h2>
        <p
          ref={descRef}
          className="t-body text-fg-muted mt-3 max-w-[680px] will-change-transform"
        >
          From rapid MVP validation to multi-tenant SaaS platforms and autonomous AI agent architectures.
        </p>
      </div>

      {/* 2. Word Rail */}
      <div className="mt-[40px] xl:mt-[60px]">
        <WordRail
          items={[
            'Senior Engineers',
            'Fixed Scope',
            'Weekly Demos',
            'You Own the Code',
            'Rapid MVP',
            'AI Native',
          ]}
        />
      </div>

      {/* 3. Expanded 5 Services List with Floating Preview on Hover */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[72px]">
        <div className="border-t border-line">
          {servicesWithImages.map((service, idx) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              data-cursor="pointer"
              onMouseEnter={() => {
                setActiveServiceIndex(idx);
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
              className="group py-[36px] xl:py-[48px] border-b border-line grid grid-cols-1 xl:grid-cols-[100px_320px_1fr_260px] gap-6 xl:gap-8 items-start transition-colors duration-300 hover:bg-surface/80 rounded-[8px] px-2 relative block cursor-pointer"
            >
              {/* Number */}
              <div className="text-[17px] font-semibold text-accent pt-1 transition-transform duration-300 group-hover:translate-x-1">
                {service.index}
              </div>

              {/* Title & Timeline with Rolling Text Hover Effect */}
              <div>
                <div className="inline-block relative overflow-hidden">
                  <span className="relative inline-flex overflow-hidden text-[20px] xl:text-[22px] font-semibold text-fg">
                    <span className="block transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform text-fg">
                      {service.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 block translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 will-change-transform text-accent"
                    >
                      {service.title}
                    </span>
                  </span>
                </div>
                <span className="text-[13.5px] text-fg-muted font-normal mt-1 block">
                  Timeline: {service.timeline}
                </span>
              </div>

              {/* Description & Deliverables */}
              <div className="flex flex-col gap-4">
                <p className="t-body-sm text-fg-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables (3-item list) */}
                <div>
                  <span className="text-[11.5px] font-semibold text-fg uppercase tracking-wider block mb-2">
                    Key Deliverables
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2 text-[13.5px] text-fg-muted transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        <span className="text-accent font-bold text-[12px] mt-0.5">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Technologies as Pill Tags & Action */}
              <div className="flex flex-col gap-4 xl:items-end">
                <div className="flex flex-wrap gap-1.5 xl:justify-end">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[12px] font-medium bg-surface border border-line-solid text-fg transition-all duration-200 group-hover:border-fg/30 group-hover:scale-[1.03]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-[13px] font-semibold text-fg group-hover:text-accent transition-all duration-200 mt-2 flex items-center gap-1">
                  <span>Explore Service Specification</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Cursor-Following Image Preview Frame (Minimal Editorial Scale) */}
      <div
        ref={previewRef}
        className={clsx(
          'fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[135px] h-[180px] xl:w-[150px] xl:h-[200px] rounded-[10px] overflow-hidden z-50 pointer-events-none shadow-[0_16px_36px_rgba(0,0,0,0.35)] border border-white/15 bg-surface will-change-transform hidden min-[1024px]:block ring-1 ring-black/20',
          isHovering && activeServiceIndex !== null
            ? 'opacity-100 scale-100 transition-[opacity,transform] duration-500 ease-out'
            : 'opacity-0 scale-75 transition-[opacity,transform] duration-350 ease-in'
        )}
      >
        {/* Sliding Images Stack (Slide Up / Down animation inside same frame) */}
        <div
          className="w-full h-full flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{
            transform: `translate3d(0, -${(activeServiceIndex ?? 0) * 100}%, 0)`,
          }}
        >
          {servicesWithImages.map((service, idx) => (
            <div key={service.id} className="w-full h-full relative shrink-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1280px) 135px, 150px"
                className="object-cover block"
                priority={idx === 0}
                quality={95}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Section Eyebrow preceding FAQ */}
      <div className="mt-[80px] xl:mt-[120px]">
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
