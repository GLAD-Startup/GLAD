'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';
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

  // Categorize screenshots into desktop vs mobile
  const isMobileImage = (src: string) =>
    (src.includes('app-') || src.includes('mobile')) && !src.includes('cover');
  const desktopScreens = project.galleryImages.filter((src) => !isMobileImage(src));
  const mobileScreens = project.galleryImages.filter((src) => isMobileImage(src));

  // Zoom modal state for centered mobile screenshot animation
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [isZoomVisible, setIsZoomVisible] = useState(false);

  const openZoom = (idx: number) => {
    setZoomIndex(idx);
    setTimeout(() => {
      setIsZoomVisible(true);
    }, 20);
  };

  const closeZoom = () => {
    setIsZoomVisible(false);
    setTimeout(() => {
      setZoomIndex(null);
    }, 450);
  };

  const prevZoom = () => {
    setZoomIndex((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : mobileScreens.length - 1) : 0
    );
  };

  const nextZoom = () => {
    setZoomIndex((prev) =>
      prev !== null ? (prev < mobileScreens.length - 1 ? prev + 1 : 0) : 0
    );
  };

  useEffect(() => {
    if (zoomIndex !== null) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeZoom();
        } else if (e.key === 'ArrowLeft') {
          prevZoom();
        } else if (e.key === 'ArrowRight') {
          nextZoom();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [zoomIndex, mobileScreens.length]);

  // Interactive carousel indices
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const prevDesktop = () =>
    setDesktopIndex((prev) => (prev > 0 ? prev - 1 : desktopScreens.length - 1));
  const nextDesktop = () =>
    setDesktopIndex((prev) => (prev < desktopScreens.length - 1 ? prev + 1 : 0));

  const prevMobile = () =>
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : mobileScreens.length - 1));
  const nextMobile = () =>
    setMobileIndex((prev) => (prev < mobileScreens.length - 1 ? prev + 1 : 0));

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

      // 2. Upward scroll parallax on hero monitor frame
      if (mediaRef.current) {
        gsap.fromTo(
          mediaRef.current,
          { y: 0 },
          {
            y: -90,
            ease: 'none',
            scrollTrigger: {
              trigger: mediaRef.current,
              start: 'top 80%',
              end: 'bottom top',
              scrub: 1.2,
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

        {/* Right Column: Hero Device Frame (Phone for Canteen App, Monitor for SaaS/Web) */}
        {project.slug === 'stock-management' ? (
          <div
            ref={mediaRef}
            className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[546/1080] mx-auto drop-shadow-2xl will-change-transform group select-none overflow-hidden rounded-[38px] sm:rounded-[42px]"
          >
            {/* Screenshot Image inside Phone Frame */}
            <div
              className="absolute overflow-hidden bg-white rounded-[32px] sm:rounded-[36px]"
              style={{
                left: '7.14%',
                top: '6.39%',
                width: '85.71%',
                height: '89.5%',
              }}
            >
              <Image
                src={project.outerSrc || project.galleryImages[0]}
                alt={`${project.title} mobile showcase`}
                fill
                priority
                unoptimized
                className="object-cover object-top block transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
              />
            </div>

            {/* Mobile Frame Overlay */}
            <Image
              src="/frames/mobile-frame.png"
              alt="Mobile device frame"
              fill
              priority
              unoptimized
              className="object-contain pointer-events-none block z-10"
            />
          </div>
        ) : (
          <div
            ref={mediaRef}
            className="relative w-full aspect-[1920/1080] max-w-[680px] lg:max-w-none mx-auto drop-shadow-2xl will-change-transform group select-none"
          >
            {/* Screenshot Image Screen inside Monitor Frame */}
            <div
              className="absolute overflow-hidden bg-white rounded-[3px] sm:rounded-[6px]"
              style={{
                left: '17.92%',
                top: '5.83%',
                width: '64.06%',
                height: '64.07%',
              }}
            >
              <Image
                src={project.outerSrc || project.galleryImages[0]}
                alt={`${project.title} monitor overview`}
                fill
                priority
                unoptimized
                className="object-contain block transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.015]"
              />
            </div>

            {/* Studio Monitor Frame Overlay */}
            <Image
              src="/frames/monitor-frame.png"
              alt="Desktop monitor frame"
              fill
              priority
              unoptimized
              className="object-contain pointer-events-none block z-10"
            />
          </div>
        )}
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

      {/* 8. Screenshot Showcase inside macOS Window Frames and Native Mobile Mockup Rows */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[64px] flex flex-col gap-16 xl:gap-24">
        {/* 1. Desktop Web Screens inside a Single Interactive MacBook Frame */}
        {desktopScreens.length > 0 && (
          <div className="flex flex-col items-center gap-6">
            {mobileScreens.length > 0 && (
              <div className="w-full flex items-center justify-between pb-3 border-b border-line">
                <span className="text-[12px] font-semibold text-accent uppercase tracking-widest">
                  Web & Desktop Platform · macOS & Windows
                </span>
                <span className="text-[12px] font-mono text-fg-dim">
                  {String(desktopIndex + 1).padStart(2, '0')} / {String(desktopScreens.length).padStart(2, '0')} Screens
                </span>
              </div>
            )}

            {/* Laptop Frame with Left & Right Arrow Controls */}
            <div className="relative w-full max-w-[1240px] mx-auto flex items-center justify-center">
              {/* Left Arrow */}
              {desktopScreens.length > 1 && (
                <button
                  type="button"
                  onClick={prevDesktop}
                  aria-label="Previous screenshot"
                  data-cursor="pointer"
                  className="absolute left-2 sm:-left-5 lg:-left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-line bg-surface/90 hover:bg-surface-2 backdrop-blur-md flex items-center justify-center text-fg transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl group cursor-pointer"
                >
                  <span className="text-[18px] sm:text-[20px] transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                </button>
              )}

              {/* MacBook Mockup Frame */}
              <div className="relative w-full aspect-[1920/1080] drop-shadow-2xl select-none">
                {/* Stack of Screenshot Images with Smooth & Slow Slide/Fade Transitions */}
                <div
                  className="absolute overflow-hidden bg-white rounded-[14px] sm:rounded-[18px] md:rounded-[22px]"
                  style={{
                    left: '14.06%',
                    top: '6.67%',
                    width: '72.6%',
                    height: '77.04%',
                  }}
                >
                  {desktopScreens.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        'absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        idx === desktopIndex
                          ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto z-10'
                          : idx < desktopIndex
                          ? 'opacity-0 scale-[0.97] -translate-x-6 pointer-events-none z-0'
                          : 'opacity-0 scale-[0.97] translate-x-6 pointer-events-none z-0'
                      )}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} dashboard screen ${idx + 1}`}
                        fill
                        priority={idx === 0}
                        unoptimized
                        className="object-contain block"
                      />
                    </div>
                  ))}
                </div>

                {/* Mac Laptop Frame Overlay */}
                <Image
                  src="/frames/mac-frame.png"
                  alt="MacBook device frame"
                  fill
                  priority
                  unoptimized
                  className="object-contain pointer-events-none block z-10"
                />
              </div>

              {/* Right Arrow */}
              {desktopScreens.length > 1 && (
                <button
                  type="button"
                  onClick={nextDesktop}
                  aria-label="Next screenshot"
                  data-cursor="pointer"
                  className="absolute right-2 sm:-right-5 lg:-right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-line bg-surface/90 hover:bg-surface-2 backdrop-blur-md flex items-center justify-center text-fg transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl group cursor-pointer"
                >
                  <span className="text-[18px] sm:text-[20px] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </button>
              )}
            </div>

            {/* Pagination Dots & Navigation Indicators */}
            {desktopScreens.length > 1 && (
              <div className="flex items-center gap-2 mt-2">
                {desktopScreens.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setDesktopIndex(idx)}
                    aria-label={`Go to screenshot ${idx + 1}`}
                    className={clsx(
                      'h-2 rounded-full transition-all duration-500 cursor-pointer',
                      idx === desktopIndex ? 'w-8 bg-fg' : 'w-2 bg-fg-dim/40 hover:bg-fg-dim'
                    )}
                  />
                ))}
                <span className="ml-3 text-[12px] font-mono text-fg-muted">
                  {String(desktopIndex + 1).padStart(2, '0')} / {String(desktopScreens.length).padStart(2, '0')}
                </span>
              </div>
            )}
          </div>
        )}

        {/* 2. Mobile Application Screens inside a Single Interactive Phone Frame */}
        {mobileScreens.length > 0 && (
          <div className="flex flex-col items-center gap-6 pt-2">
            {desktopScreens.length > 0 && (
              <div className="w-full flex items-center justify-between pb-3 border-b border-line">
                <span className="text-[12px] font-semibold text-accent uppercase tracking-widest">
                  Mobile Application Interfaces · iOS & Android
                </span>
                <span className="text-[12px] font-mono text-fg-dim">
                  {String(mobileIndex + 1).padStart(2, '0')} / {String(mobileScreens.length).padStart(2, '0')} Screens
                </span>
              </div>
            )}

            {/* Phone Frame with Left & Right Arrow Controls */}
            <div className="relative w-full max-w-[480px] mx-auto flex items-center justify-center">
              {/* Left Arrow */}
              {mobileScreens.length > 1 && (
                <button
                  type="button"
                  onClick={prevMobile}
                  aria-label="Previous mobile screen"
                  data-cursor="pointer"
                  className="absolute left-0 sm:-left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-line bg-surface/90 hover:bg-surface-2 backdrop-blur-md flex items-center justify-center text-fg transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl group cursor-pointer"
                >
                  <span className="text-[18px] sm:text-[20px] transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                </button>
              )}

              {/* Phone Mockup Frame with Click-to-Zoom */}
              <div
                data-cursor="view"
                onClick={() => openZoom(mobileIndex)}
                className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[546/1080] group transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.02] cursor-pointer drop-shadow-2xl overflow-hidden rounded-[38px] sm:rounded-[42px]"
              >
                {/* Stack of Screenshot Images with Smooth & Slow Slide/Fade Transitions */}
                <div
                  className="absolute overflow-hidden bg-white rounded-[32px] sm:rounded-[36px]"
                  style={{
                    left: '7.14%',
                    top: '6.39%',
                    width: '85.71%',
                    height: '89.5%',
                  }}
                >
                  {mobileScreens.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        'absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        idx === mobileIndex
                          ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto z-10'
                          : idx < mobileIndex
                          ? 'opacity-0 scale-[0.97] -translate-x-6 pointer-events-none z-0'
                          : 'opacity-0 scale-[0.97] translate-x-6 pointer-events-none z-0'
                      )}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} mobile screen ${idx + 1}`}
                        fill
                        priority={idx === 0}
                        unoptimized
                        className="object-cover object-top block"
                      />
                    </div>
                  ))}
                </div>

                {/* Mobile Frame Overlay */}
                <Image
                  src="/frames/mobile-frame.png"
                  alt="Mobile device frame"
                  fill
                  unoptimized
                  className="object-contain pointer-events-none block z-10"
                />
              </div>

              {/* Right Arrow */}
              {mobileScreens.length > 1 && (
                <button
                  type="button"
                  onClick={nextMobile}
                  aria-label="Next mobile screen"
                  data-cursor="pointer"
                  className="absolute right-0 sm:-right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-line bg-surface/90 hover:bg-surface-2 backdrop-blur-md flex items-center justify-center text-fg transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl group cursor-pointer"
                >
                  <span className="text-[18px] sm:text-[20px] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </button>
              )}
            </div>

            {/* Pagination Dots & Navigation Indicators */}
            {mobileScreens.length > 1 && (
              <div className="flex items-center gap-2 mt-2">
                {mobileScreens.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setMobileIndex(idx)}
                    aria-label={`Go to mobile screen ${idx + 1}`}
                    className={clsx(
                      'h-2 rounded-full transition-all duration-500 cursor-pointer',
                      idx === mobileIndex ? 'w-8 bg-fg' : 'w-2 bg-fg-dim/40 hover:bg-fg-dim'
                    )}
                  />
                ))}
                <span className="ml-3 text-[12px] font-mono text-fg-muted">
                  {String(mobileIndex + 1).padStart(2, '0')} / {String(mobileScreens.length).padStart(2, '0')}
                </span>
              </div>
            )}
          </div>
        )}
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

      {/* 15. Smooth Centered Zoom Lightbox Modal in Phone Frame */}
      {zoomIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Zoomed Screenshot View"
          onClick={closeZoom}
          className={clsx(
            'fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-zoom-out',
            isZoomVisible
              ? 'bg-[#0A0A0B]/85 backdrop-blur-md opacity-100'
              : 'bg-[#0A0A0B]/0 backdrop-blur-none opacity-0 pointer-events-none'
          )}
        >
          {/* Close Pill Button (Top-Right) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeZoom();
            }}
            data-cursor="pointer"
            aria-label="Close zoom view"
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-[130] flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1E]/90 border border-white/20 text-[#FBFBF9] hover:bg-[#2A2A2E] hover:border-white/40 transition-all text-[12px] font-mono shadow-2xl cursor-pointer"
          >
            <span>✕</span>
            <span>CLOSE (ESC)</span>
          </button>

          {/* Centered Content: Left Arrow + Phone Frame + Right Arrow */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              'relative max-h-[90vh] flex items-center justify-center gap-3 sm:gap-6 md:gap-8 cursor-default transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform',
              isZoomVisible
                ? 'scale-100 opacity-100 translate-y-0'
                : 'scale-[0.82] opacity-0 translate-y-8'
            )}
          >
            {/* Left Navigation Arrow (Closer to phone) */}
            {mobileScreens.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevZoom();
                }}
                data-cursor="pointer"
                aria-label="Previous mobile screen"
                className="z-[120] w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/20 bg-[#1A1A1E]/90 hover:bg-[#2A2A2E] hover:border-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl group cursor-pointer shrink-0"
              >
                <span className="text-[18px] sm:text-[22px] transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
              </button>
            )}

            {/* Centered Phone Mockup Frame */}
            <div className="relative w-[80vw] max-w-[340px] sm:max-w-[380px] aspect-[546/1080] drop-shadow-[0_35px_100px_rgba(0,0,0,0.9)] overflow-hidden rounded-[42px] sm:rounded-[46px] shrink-0">
              {/* Stack of Screenshots inside Phone Screen with Smooth Slide Transitions */}
              <div
                className="absolute overflow-hidden bg-white rounded-[34px] md:rounded-[38px]"
                style={{
                  left: '7.14%',
                  top: '6.39%',
                  width: '85.71%',
                  height: '89.5%',
                }}
              >
                {mobileScreens.map((src, idx) => (
                  <div
                    key={idx}
                    className={clsx(
                      'absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                      idx === zoomIndex
                        ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto z-10'
                        : idx < zoomIndex
                        ? 'opacity-0 scale-[0.97] -translate-x-6 pointer-events-none z-0'
                        : 'opacity-0 scale-[0.97] translate-x-6 pointer-events-none z-0'
                    )}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} zoomed mobile screen ${idx + 1}`}
                      fill
                      priority
                      unoptimized
                      className="object-cover object-top block"
                    />
                  </div>
                ))}
              </div>

              {/* Mobile Frame Overlay */}
              <Image
                src="/frames/mobile-frame.png"
                alt="Mobile device frame"
                fill
                unoptimized
                className="object-contain pointer-events-none block z-10"
              />
            </div>

            {/* Right Navigation Arrow (Closer to phone) */}
            {mobileScreens.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextZoom();
                }}
                data-cursor="pointer"
                aria-label="Next mobile screen"
                className="z-[120] w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-white/20 bg-[#1A1A1E]/90 hover:bg-[#2A2A2E] hover:border-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl group cursor-pointer shrink-0"
              >
                <span className="text-[18px] sm:text-[22px] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </button>
            )}
          </div>

          {/* Bottom Counter Pill in Zoom View */}
          {mobileScreens.length > 1 && (
            <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-[120] flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1E]/90 border border-white/20 text-[#FBFBF9] font-mono text-[12px] shadow-2xl">
              <span>{String((zoomIndex ?? 0) + 1).padStart(2, '0')} / {String(mobileScreens.length).padStart(2, '0')}</span>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
