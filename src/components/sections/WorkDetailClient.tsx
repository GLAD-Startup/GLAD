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
import ProjectCard from '@/components/ui/ProjectCard';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';
import type { ProjectItem } from '@/data/work';

interface WorkDetailClientProps {
  project: ProjectItem;
  nextProject1: ProjectItem;
  nextProject2: ProjectItem;
}

export default function WorkDetailClient({
  project,
  nextProject1,
  nextProject2,
}: WorkDetailClientProps) {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const innerMediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Headline reveal animation
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }
        );
      }

      // 2. Parallax on inner floating hero card
      if (mediaRef.current && innerMediaRef.current) {
        gsap.fromTo(
          innerMediaRef.current,
          { y: 20 },
          {
            y: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: mediaRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Smooth scroll to screenshots gallery section
  const scrollToScreenshots = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const lenis = (
      window as unknown as {
        lenis?: {
          scrollTo: (
            target: number | string | HTMLElement,
            opts?: { offset?: number; duration?: number; easing?: (t: number) => number }
          ) => void;
        };
      }
    ).lenis;

    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      if (lenis) {
        lenis.scrollTo(galleryEl, {
          offset: -84,
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const top = galleryEl.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-bg select-none pt-[48px]">
      {/* 1. Marquee Header */}
      <div className="overflow-hidden bg-bg">
        <Divider />
        <div className="py-4 md:py-6 overflow-hidden bg-bg">
          <Marquee speed={28}>
            <span
              className="t-marquee text-fg pr-[80px] whitespace-nowrap block pb-[0.22em] pt-[0.06em]"
              style={{
                fontSize: 'clamp(64px, 10.5vw, 160px)',
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
              }}
            >
              {project.title} / {project.category} / GLAD STUDIO® /&nbsp;
            </span>
          </Marquee>
        </div>
        <Divider />
      </div>

      {/* 2. Sub-Nav & Breadcrumb Row */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[32px] xl:mt-[44px] flex items-center justify-between">
        <Link
          href="/work"
          data-cursor="pointer"
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-fg-muted hover:text-fg transition-colors"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
          <span className="relative inline-flex overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              All Works
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-fg"
            >
              All Works
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3 text-[13.5px]">
          <span className="font-semibold text-accent uppercase tracking-wider">
            (GLD® — {project.index})
          </span>
          <span className="text-fg-muted hidden sm:inline">•</span>
          <span className="text-fg-muted font-normal hidden sm:inline">
            Timeline: {project.duration}
          </span>
        </div>
      </div>

      {/* 3. Hero Section: 2-Column Editorial Grid */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[24px] xl:mt-[36px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-14 items-center">
        {/* Left Column: Headline, Summary, Metric & Tech Stack */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-[12px] font-semibold text-accent uppercase tracking-widest">
              {project.category}
            </span>
            <span className="text-fg-dim">•</span>
            <span className="text-[12px] font-medium text-fg-muted">
              {project.date}
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="t-heading-sm text-fg leading-[1.08] tracking-[-0.025em] will-change-transform"
            style={{ fontSize: 'clamp(32px, 4.2vw, 54px)' }}
          >
            {project.summary}
          </h1>

          <p className="t-body text-fg-muted mt-5 leading-relaxed max-w-[640px]">
            {project.subtitle}
          </p>

          {/* Metric Highlight Badge */}
          {project.metric && (
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-[12px] bg-surface border border-line-solid">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <div className="flex items-center gap-2 text-[13.5px]">
                <span className="text-fg-muted font-medium">Key Metric:</span>
                <span className="font-semibold text-fg">{project.metric}</span>
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="mt-7 flex flex-col gap-2.5">
            <span className="text-[11.5px] font-semibold text-fg uppercase tracking-wider">
              Core Technologies & Architecture
            </span>
            <div className="flex flex-wrap gap-2">
              {(project.techStack || project.stack || []).map((tech) => (
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
            <PillButton calLink="arjun-rajput-2mdsis">Book Discovery Call</PillButton>
            <button
              type="button"
              onClick={scrollToScreenshots}
              data-cursor="pointer"
              className="group text-[14px] font-medium text-fg-muted hover:text-fg transition-colors inline-flex items-center gap-1.5 py-2 px-3 cursor-pointer"
            >
              <span>Explore Screenshots</span>
              <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
            </button>
          </div>
        </div>

        {/* Right Column: Signature Parallax Card */}
        <div
          ref={mediaRef}
          className="relative w-full aspect-[16/11] rounded-[16px] overflow-hidden bg-surface border border-line-solid group shadow-sm"
        >
          {/* Outer Visual */}
          <div className="w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03] group-hover:opacity-85">
            <Image
              src={project.outerSrc}
              alt={`${project.title} overview visual`}
              fill
              priority
              unoptimized
              className="object-cover block"
            />
          </div>

          {/* Inner Floating Detail Card */}
          <div
            ref={innerMediaRef}
            className="absolute inset-0 m-auto w-[52%] h-[56%] max-w-[360px] rounded-[12px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-line-solid bg-surface z-10 will-change-transform pointer-events-none"
          >
            <div className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.10]">
              <Image
                src={project.innerSrc}
                alt={`${project.title} interface detail`}
                fill
                unoptimized
                className="object-cover block"
              />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20 bg-bg/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-line-solid text-[12px] font-medium text-fg shadow-sm">
            {project.category}
          </div>

          {/* Client Badge */}
          <div className="absolute bottom-4 right-4 z-20 bg-bg/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-line-solid text-[12px] font-medium text-accent shadow-sm">
            {project.client}
          </div>
        </div>
      </div>

      {/* 4. Meta Specifications Hairline Row */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[50px] xl:mt-[70px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] border-t border-b border-line py-[24px]">
          {/* Client */}
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-medium text-fg-muted uppercase tracking-wider">
              Client / Organization
            </span>
            <span className="text-[15px] font-medium text-fg">
              {project.client}
            </span>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-medium text-fg-muted uppercase tracking-wider">
              Engagement Category
            </span>
            <span className="text-[15px] font-medium text-fg">
              {project.category}
            </span>
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-medium text-fg-muted uppercase tracking-wider">
              Delivery Timeline
            </span>
            <span className="text-[15px] font-medium text-fg">
              {project.duration}
            </span>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-medium text-fg-muted uppercase tracking-wider">
              Deployment Location
            </span>
            <span className="text-[15px] font-medium text-fg">
              {project.location}
            </span>
          </div>
        </div>
      </div>

      {/* 5. Section Eyebrow (Challenge & Engineering Solution) */}
      <div className="mt-[70px] xl:mt-[100px]">
        <SectionEyebrow
          left={<>CHALLENGE & ARCHITECTURAL SOLUTION <span lang="hi">विवरण</span></>}
          index={`(GLD® — ${project.index}A)`}
          right="ENGINEERING METHODOLOGY"
        />
      </div>

      {/* 6. Problem & Solution 2-Column Grid */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[64px] grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
        {/* Left Card: The Operational Challenge */}
        <div className="bg-surface border border-line-solid rounded-[16px] p-7 xl:p-9 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-line">
              <span className="text-[12.5px] font-semibold text-accent uppercase tracking-wider">
                The Operational Challenge
              </span>
              <span className="text-[11.5px] px-2.5 py-0.5 rounded-full bg-bg border border-line-solid text-fg-muted font-medium">
                Problem Definition
              </span>
            </div>

            <p className="text-[15px] text-fg leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="mt-8 pt-5 border-t border-line flex items-center gap-2.5 text-[13px] text-fg-muted">
            <span className="w-2 h-2 rounded-full bg-fg-dim" />
            <span>Target: Eliminate friction, latency, and operational bottlenecks.</span>
          </div>
        </div>

        {/* Right Card: The Engineering Solution & Key Deliverables */}
        <div className="bg-surface border border-line-solid rounded-[16px] p-7 xl:p-9 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-line">
              <span className="text-[12.5px] font-semibold text-accent uppercase tracking-wider">
                Architectural Solution
              </span>
              <span className="text-[11.5px] px-2.5 py-0.5 rounded-full bg-bg border border-line-solid text-fg-muted font-medium">
                Engineered Delivery
              </span>
            </div>

            <p className="text-[15px] text-fg leading-relaxed mb-6">
              {project.solution}
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-col gap-3.5">
              {project.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3 text-[14.5px] text-fg">
                  <div className="w-5 h-5 rounded-full bg-bg border border-line-solid flex items-center justify-center shrink-0 mt-0.5 text-accent font-bold text-[11px]">
                    ✓
                  </div>
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-line flex items-center gap-2.5 text-[13px] text-accent font-medium">
            <span>Outcome: {project.outcome}</span>
          </div>
        </div>
      </div>

      {/* 7. Section Eyebrow (Visual Interface & Production Screens) */}
      <div id="gallery" className="mt-[80px] xl:mt-[120px] scroll-mt-24">
        <SectionEyebrow
          left={<>PRODUCTION INTERFACE & ARTIFACTS <span lang="hi">चित्र</span></>}
          index={`(GLD® — ${project.index}B)`}
          right="SYSTEM SCREENS"
        />
      </div>

      {/* 8. Screenshot Showcase inside macOS Window Frames with Rich Captions */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[64px] flex flex-col gap-12 xl:gap-18">
        {project.galleryImages.map((imgSrc, idx) => (
          <div
            key={idx}
            className="w-full rounded-[18px] overflow-hidden bg-surface border border-line-solid shadow-xl flex flex-col transition-all duration-300 hover:border-line"
          >
            {/* macOS Browser Mock Header Bar */}
            <div className="w-full bg-[#F2F2EE] border-b border-line-solid px-4 py-3 flex items-center justify-between select-none">
              {/* Traffic light dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E5E5E0] border border-line-solid" />
                <span className="w-3 h-3 rounded-full bg-[#E5E5E0] border border-line-solid" />
                <span className="w-3 h-3 rounded-full bg-[#E5E5E0] border border-line-solid" />
              </div>

              {/* URL Capsule */}
              <div className="hidden sm:flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#FBFBF9] border border-line-solid text-[11px] font-mono text-fg-muted">
                <span className="text-accent font-bold">🔒</span>
                <span>gladstudio.net/work/{project.slug}/view-0{idx + 1}</span>
              </div>

              {/* Slide Counter */}
              <div className="text-[11.5px] font-mono font-semibold text-fg-muted">
                0{idx + 1} / 0{project.galleryImages.length}
              </div>
            </div>

            {/* Screen Image Display Area */}
            <div
              data-cursor="view"
              className="relative w-full min-h-[380px] sm:min-h-[500px] md:min-h-[620px] xl:min-h-[760px] bg-[#0A0A0B]/[0.02] flex items-center justify-center p-3 sm:p-6 md:p-8"
            >
              <div className="relative w-full h-full min-h-[360px] sm:min-h-[480px] md:min-h-[600px] xl:min-h-[720px] rounded-[10px] overflow-hidden shadow-sm">
                <Image
                  src={imgSrc}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  unoptimized
                  className="object-contain block transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 9. Measured Impact & IP Transfer Banner */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[80px] xl:mt-[120px]">
        <div className="w-full bg-[#0A0A0B] text-[#FBFBF9] rounded-[20px] p-8 md:p-14 xl:p-18 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="text-[12px] font-semibold text-[#C6F000] uppercase tracking-widest mb-3">
            Ready to Build?
          </div>
          <h3
            className="font-normal leading-[1.05] tracking-[-0.03em] max-w-[800px] text-[#FBFBF9]"
            style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
          >
            Start your {project.title} sprint this month.
          </h3>
          <p className="text-[#A8A8AD] text-[15px] md:text-[17px] max-w-[580px] mt-4 leading-relaxed">
            Direct communication with senior engineers. Fixed weekly cadence, continuous staging demos, and complete IP transfer.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PillButton calLink="arjun-rajput-2mdsis" variant="inverted">
              Book a Discovery Call
            </PillButton>
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

      {/* 10. More Works Section Eyebrow */}
      <div className="mt-[90px] xl:mt-[130px]">
        <SectionEyebrow
          left={<>MORE SELECTED WORK <span lang="hi">परियोजनाएँ</span></>}
          index="(GLD® — 03C)"
          right="SHIPPED PROJECTS"
        />
      </div>

      {/* 11. More Works Marquee */}
      <Divider />
      <div className="py-4 md:py-6 overflow-hidden bg-bg">
        <Marquee speed={30}>
          <span
            className="t-marquee text-fg pr-[80px] whitespace-nowrap block pb-[0.22em] pt-[0.06em]"
            style={{
              fontSize: 'clamp(0px, 14vw, 220px)',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            More Works© /
          </span>
        </Marquee>
      </div>
      <Divider />

      {/* 12. Next Two Projects as ProjectCards */}
      <div className="relative w-full h-auto xl:h-[720px] mt-[48px] xl:mt-[60px] px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-[72px] xl:gap-0 pb-16 xl:pb-0">
        <ProjectCard
          index={nextProject1.index}
          title={nextProject1.title}
          category={nextProject1.category}
          subtitle={nextProject1.subtitle}
          href={`/work/${nextProject1.slug}`}
          x={60}
          y={0}
          w={650}
          h={410}
          innerX={150}
          innerY={150}
          innerW={320}
          innerH={220}
          outerSrc={nextProject1.outerSrc}
          innerSrc={nextProject1.innerSrc}
        />

        <ProjectCard
          index={nextProject2.index}
          title={nextProject2.title}
          category={nextProject2.category}
          subtitle={nextProject2.subtitle}
          href={`/work/${nextProject2.slug}`}
          x={780}
          y={80}
          w={650}
          h={410}
          innerX={150}
          innerY={150}
          innerW={320}
          innerH={220}
          outerSrc={nextProject2.outerSrc}
          innerSrc={nextProject2.innerSrc}
        />
      </div>

      {/* 13. FAQ Section */}
      <div className="mt-[70px] md:mt-[100px] xl:mt-[140px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>
      <Faq />

      {/* 14. Footer */}
      <Footer isWorkDetail />
    </main>
  );
}
