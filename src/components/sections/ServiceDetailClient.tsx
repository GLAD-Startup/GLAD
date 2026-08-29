'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from '@/components/ui/Marquee';
import Divider from '@/components/ui/Divider';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';
import type { ServiceItem } from '@/data/services';

interface ServiceDetailClientProps {
  service: ServiceItem;
}

const serviceVisuals: Record<string, { outer: string; inner: string; caseStudySlug: string; caseStudyTitle: string }> = {
  'mvp-development': {
    outer: '/work/fluxor/corporate-server.png',
    inner: '/work/fluxor/real-estate-contract.png',
    caseStudySlug: 'fluxor',
    caseStudyTitle: 'Fluxor Enterprise CRM',
  },
  'web-application-development': {
    outer: '/work/lead-enrichment/modern-office-facade.png',
    inner: '/work/lead-enrichment/skyscraper-sunset.png',
    caseStudySlug: 'stock-management',
    caseStudyTitle: 'Stock Management Platform',
  },
  'mobile-app-development': {
    outer: '/work/prayas-app/phone-3d.png',
    inner: '/work/prayas-app/real-estate-app.png',
    caseStudySlug: 'prayas-app',
    caseStudyTitle: 'Prayas Social Impact Mobile App',
  },
  'ai-solutions': {
    outer: '/work/ai-mock-interview/hero-3d.png',
    inner: '/work/ai-mock-interview/broker-deal.png',
    caseStudySlug: 'fluxor',
    caseStudyTitle: 'AI Mock Interview Simulator',
  },
  'cloud-devops': {
    outer: '/work/stock-management/properties-3d.png',
    inner: '/work/stock-management/commission-3d.png',
    caseStudySlug: 'stock-management',
    caseStudyTitle: 'High-Throughput Cloud Backend',
  },
};

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const innerMediaRef = useRef<HTMLDivElement>(null);

  const visuals = serviceVisuals[service.slug] || {
    outer: '/work/fluxor/corporate-server.png',
    inner: '/work/fluxor/real-estate-contract.png',
    caseStudySlug: 'fluxor',
    caseStudyTitle: 'Fluxor Enterprise CRM',
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Headline reveal animation
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }
        );
      }

      // 2. Parallax on inner floating card
      if (mediaRef.current && innerMediaRef.current) {
        gsap.fromTo(
          innerMediaRef.current,
          { y: -18 },
          {
            y: 18,
            ease: 'none',
            scrollTrigger: {
              trigger: mediaRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-bg select-none pt-[84px]">
      {/* 1. Marquee Header (Spaced comfortably beneath nav with full descender clearance) */}
      <div className="pt-4 overflow-hidden bg-bg">
        <Divider />
        <div className="py-4 md:py-6 overflow-hidden bg-bg">
          <Marquee speed={32}>
            <span
              className="t-marquee text-fg pr-[80px] whitespace-nowrap block pb-[0.22em] pt-[0.06em]"
              style={{
                fontSize: 'clamp(64px, 10.5vw, 160px)',
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
              }}
            >
              {service.title} / {service.category} / GLAD STUDIO® /&nbsp;
            </span>
          </Marquee>
        </div>
        <Divider />
      </div>

      {/* 2. Sub-Nav & Eyebrow Row */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[32px] xl:mt-[44px] flex items-center justify-between">
        <Link
          href="/services"
          data-cursor="pointer"
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-fg-muted hover:text-fg transition-colors"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
          <span className="relative inline-flex overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              All Services
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-fg"
            >
              All Services
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3 text-[13.5px]">
          <span className="font-semibold text-accent uppercase tracking-wider">
            (GLD® — {service.index})
          </span>
          <span className="text-fg-muted hidden sm:inline">•</span>
          <span className="text-fg-muted font-normal hidden sm:inline">
            Scope: {service.timeline}
          </span>
        </div>
      </div>

      {/* 3. Hero Section: 2-Column Editorial Grid */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[24px] xl:mt-[36px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-14 items-center">
        {/* Left Column: Headline, Description & Tech Stack */}
        <div>
          <div className="text-[12px] font-semibold text-accent uppercase tracking-widest mb-3">
            {service.category}
          </div>
          <h1
            ref={headlineRef}
            className="t-heading-sm text-fg leading-[1.08] tracking-[-0.025em] will-change-transform"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            {service.title} for High-Growth Teams
          </h1>

          <p className="t-body text-fg-muted mt-5 leading-relaxed max-w-[640px]">
            {service.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-7 flex flex-col gap-2.5">
            <span className="text-[11.5px] font-semibold text-fg uppercase tracking-wider">
              Core Technologies & Architecture
            </span>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-[12.5px] font-medium bg-surface border border-line-solid text-fg transition-all duration-200 hover:border-fg/40 hover:scale-[1.03]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PillButton href="/contact">Book a Discovery Call</PillButton>
            <Link
              href={`/work/${visuals.caseStudySlug}`}
              data-cursor="pointer"
              className="text-[14px] font-medium text-fg-muted hover:text-fg transition-colors flex items-center gap-1.5 py-2 px-3"
            >
              <span>View Case Study</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Dual-Layer Parallax Showcase Card */}
        <div ref={mediaRef} className="relative w-full aspect-[16/11] rounded-[16px] overflow-hidden bg-surface border border-line-solid group shadow-sm">
          {/* Outer Visual */}
          <div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03] group-hover:opacity-85">
            <Image
              src={visuals.outer}
              alt={`${service.title} architectural visualization`}
              fill
              priority
              unoptimized
              className="object-cover block"
            />
          </div>

          {/* Inner Floating Detail Card with Parallax */}
          <div
            ref={innerMediaRef}
            className="absolute inset-0 m-auto w-[52%] h-[56%] max-w-[360px] rounded-[12px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-line-solid bg-surface z-10 will-change-transform pointer-events-none"
          >
            <div className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.10]">
              <Image
                src={visuals.inner}
                alt={`${service.title} interface detail`}
                fill
                unoptimized
                className="object-cover block"
              />
            </div>
          </div>

          {/* Floating Category Badge */}
          <div className="absolute top-4 left-4 z-20 bg-bg/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-line-solid text-[12px] font-medium text-fg shadow-sm">
            {service.category}
          </div>

          {/* Floating Timeline Badge */}
          <div className="absolute bottom-4 right-4 z-20 bg-bg/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-line-solid text-[12px] font-medium text-accent shadow-sm">
            {service.timeline}
          </div>
        </div>
      </div>

      {/* 4. Section Divider */}
      <div className="mt-[70px] xl:mt-[100px]">
        <SectionEyebrow
          left={<>SPECIFICATION DETAILS <span lang="hi">विवरण</span></>}
          index={`(GLD® — ${service.index}A)`}
          right="DELIVERABLES & CAPABILITIES"
        />
      </div>

      {/* 5. Key Deliverables & Core Capabilities Side-by-Side Cards */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[64px] grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
        {/* Left Card: Guaranteed Deliverables */}
        <div className="bg-surface border border-line-solid rounded-[16px] p-7 xl:p-9 shadow-sm transition-all duration-300 hover:border-line hover:shadow-md">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
            <span className="text-[12.5px] font-semibold text-accent uppercase tracking-wider">
              Guaranteed Deliverables
            </span>
            <span className="text-[11.5px] px-2.5 py-0.5 rounded-full bg-bg border border-line-solid text-fg-muted font-medium">
              100% IP Transfer
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 text-[15px] text-fg transition-transform duration-200 hover:translate-x-1"
              >
                <div className="w-5 h-5 rounded-full bg-bg border border-line-solid flex items-center justify-center shrink-0 mt-0.5 text-accent font-bold text-[12px]">
                  ✓
                </div>
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Core Capabilities Breakdown */}
        <div className="bg-surface border border-line-solid rounded-[16px] p-7 xl:p-9 shadow-sm transition-all duration-300 hover:border-line hover:shadow-md">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
            <span className="text-[12.5px] font-semibold text-accent uppercase tracking-wider">
              Core Engineering Capabilities
            </span>
            <span className="text-[11.5px] px-2.5 py-0.5 rounded-full bg-bg border border-line-solid text-fg-muted font-medium">
              Production Standard
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="border-b border-line pb-4 last:border-b-0 last:pb-0 group"
              >
                <h3 className="text-[16px] font-semibold text-fg group-hover:text-accent transition-colors">
                  {cap.title}
                </h3>
                <p className="text-[14px] text-fg-muted mt-1.5 leading-relaxed">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Section Divider for Roadmap */}
      <div className="mt-[80px] xl:mt-[110px]">
        <SectionEyebrow
          left={<>EXECUTION ROADMAP <span lang="hi">प्रक्रिया</span></>}
          index={`(GLD® — ${service.index}B)`}
          right="SPRINT BY SPRINT"
        />
      </div>

      {/* 7. Phased Delivery Roadmap Table */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[64px]">
        <div className="border-t border-line">
          {service.phases.map((phase, idx) => (
            <div
              key={idx}
              className="group py-[28px] md:py-[36px] px-3 border-b border-line grid grid-cols-1 md:grid-cols-[90px_160px_1.1fr_1.5fr] gap-4 md:gap-6 items-start transition-colors duration-200 hover:bg-surface/80 rounded-[8px]"
            >
              {/* Step number */}
              <span className="text-[14px] font-semibold text-accent pt-0.5">
                0{idx + 1}
              </span>

              {/* Timeline badge */}
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-surface border border-line-solid text-fg uppercase tracking-wider">
                  {phase.meta}
                </span>
              </div>

              {/* Phase Title */}
              <h4 className="text-[17px] font-semibold text-fg group-hover:text-accent transition-colors">
                {phase.title}
              </h4>

              {/* Phase Description */}
              <p className="text-[14.5px] text-fg-muted leading-relaxed">
                {phase.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Call to Action Banner */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[80px] xl:mt-[120px]">
        <div className="w-full bg-[#0A0A0B] text-[#FBFBF9] rounded-[20px] p-8 md:p-14 xl:p-18 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="text-[12px] font-semibold text-[#C6F000] uppercase tracking-widest mb-3">
            Ready to Build?
          </div>
          <h3
            className="font-normal leading-[1.05] tracking-[-0.03em] max-w-[800px] text-[#FBFBF9]"
            style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
          >
            Start your {service.title} sprint this month.
          </h3>
          <p className="text-[#A8A8AD] text-[15px] md:text-[17px] max-w-[580px] mt-4 leading-relaxed">
            Direct communication with senior engineers. Fixed weekly cadence, continuous staging demos, and complete IP transfer.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PillButton href="/contact">Book a Discovery Call</PillButton>
            <Link
              href="/work"
              data-cursor="pointer"
              className="text-[14.5px] font-medium text-[#FBFBF9] hover:text-[#C6F000] transition-colors py-2 px-4"
            >
              Explore All Works →
            </Link>
          </div>
        </div>
      </div>

      {/* 9. FAQ Section */}
      <div className="mt-[90px] xl:mt-[130px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>
      <Faq />

      {/* 10. Footer with Filmstrip Carousel */}
      <Footer isWorkDetail />
    </main>
  );
}
