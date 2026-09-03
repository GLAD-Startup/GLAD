'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { servicesData } from '@/data/services';

const servicesWithImages = [
  {
    ...servicesData[0],
    image: '/products/glad-hms/glad-hms-1.png',
  },
  {
    ...servicesData[1],
    image: '/products/settledesk/settledesk-1.png',
  },
  {
    ...servicesData[2],
    image: '/work/prayas-app/prayas-app-1.png',
  },
  {
    ...servicesData[3],
    image: '/work/ai-mock-interview/mock-interview-1.png',
  },
  {
    ...servicesData[4],
    image: '/work/lead-enrichment/lead-enrichment-1.png',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleContentRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!titleContentRef.current || !sectionRef.current) return;

      gsap.fromTo(
        titleContentRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
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

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    gsap.set(preview, { xPercent: 0, yPercent: 0 });

    const xTo = gsap.quickTo(preview, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(preview, 'y', { duration: 0.6, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative w-full bg-bg select-none">
      {/* 1. Headline */}
      <div className="pt-[24px] md:pt-[30px] xl:pt-[36px] px-[20px] md:px-[28px] xl:px-[40px] overflow-hidden">
        <div ref={titleContentRef} className="will-change-transform">
          <h2
            className="t-display text-fg whitespace-nowrap"
            style={{
              fontSize: 'clamp(0px, 12.6vw, 220px)',
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
            }}
          >
            Services
            <sup
              className="font-normal tracking-normal ml-1"
              style={{ fontSize: '0.23em', verticalAlign: 'super' }}
            >
              (5)
            </sup>
          </h2>
        </div>
      </div>

      {/* 2. Word Rail */}
      <div className="mt-[40px] xl:mt-[60px]">
        <WordRail
          items={[
            'Senior Engineers',
            'Fixed Scope',
            'Weekly Demos',
            'You Own the Code',
          ]}
        />
      </div>

      {/* 3. Services Content: Left Video Card & Right Interactive Services List */}
      <div className="mx-[20px] md:mx-[28px] xl:mx-[40px] mt-[48px] xl:mt-[72px] flex flex-col xl:flex-row xl:items-start gap-10 xl:gap-14">
        {/* Left Column: Ambient Studio Loop Video (Sticky on desktop) */}
        <div className="w-full xl:w-[32%] xl:sticky xl:top-[120px] shrink-0">
          <div className="w-full aspect-[4/5] max-h-[560px] rounded-[12px] overflow-hidden bg-surface border border-line-solid shadow-xl relative select-none">
            <video
              src="/videos/low.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover block rounded-[12px]"
            />
          </div>
        </div>

        {/* Right Column: Interactive Services Rows */}
        <div
          onMouseLeave={() => setIsHovering(false)}
          className="w-full xl:w-[68%] border-t border-line"
        >
          {servicesWithImages.map((service, idx) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              data-cursor="link"
              onMouseEnter={() => {
                setActiveServiceIndex(idx);
                setIsHovering(true);
              }}
              className="group block py-[28px] md:py-[36px] xl:py-[42px] px-2 xl:px-4 border-b border-line transition-colors duration-300 hover:bg-surface"
            >
              {/* Desktop 3-Column Grid (>=1200px): [80px 240px 1fr] */}
              <div className="hidden xl:grid grid-cols-[60px_240px_1fr] items-start gap-6 2xl:gap-8">
                <div className="t-label text-fg pt-0.5 flex items-center">
                  <span>{service.index}</span>
                </div>
                <h3 className="t-title-lg text-fg font-medium transition-transform duration-300 ease-out group-hover:translate-x-[6px]">
                  {service.title}
                </h3>
                <p className="t-body-sm text-fg-muted leading-relaxed max-w-[500px]">
                  {service.description}
                </p>
              </div>

              {/* Tablet / Mobile Grid (<1200px) */}
              <div className="grid xl:hidden grid-cols-[50px_1fr] md:grid-cols-[60px_200px_1fr] gap-3 md:gap-6 items-start">
                <div className="t-label text-fg-muted flex items-center">
                  <span>{service.index}</span>
                </div>
                <div>
                  <h3 className="t-title-lg text-fg font-medium">{service.title}</h3>
                  <p className="t-body-sm text-fg-muted mt-2 md:hidden">{service.description}</p>
                </div>
                <p className="t-body-sm text-fg-muted hidden md:block">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Cursor-Following Image Preview Frame (Compact scale) */}
      <div
        ref={previewRef}
        className={clsx(
          'fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[180px] xl:w-[155px] xl:h-[195px] rounded-[10px] overflow-hidden z-50 pointer-events-none shadow-xl border border-line-solid bg-surface will-change-transform hidden min-[1024px]:block',
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
                sizes="155px"
                className="object-cover block"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Concluding Section Eyebrow */}
      <div className="mt-[90px] xl:mt-[130px]">
        <SectionEyebrow
          left={<>STUDIO PROFILE <span lang="hi">परिचय</span></>}
          index="(GLD® — 04)"
          right="HOW WE THINK"
        />
      </div>
    </section>
  );
}
