'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import WordRail from '@/components/ui/WordRail';
import Marquee from '@/components/ui/Marquee';
import PillButton from '@/components/ui/PillButton';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';
import { studioValues, leadershipTeam } from '@/data/values';
import { siteConfig } from '@/data/site';

const studioMetrics = [
  {
    value: '13+ Yrs',
    label: 'Combined Leadership',
    sublabel: 'Decades of hardened full-stack expertise',
  },
  {
    value: 'Wk 3',
    label: 'Working Software',
    sublabel: 'Live clickable staging deployments',
  },
  {
    value: '100%',
    label: 'IP & Code Ownership',
    sublabel: 'Type-safe TypeScript, strict SQL schemas',
  },
  {
    value: '0',
    label: 'Junior Contractors',
    sublabel: 'Direct access to senior founders only',
  },
];

const dualEngines = [
  {
    number: '01',
    badge: 'Proprietary Labs',
    title: 'Dual-Engine Architecture',
    subtitle: 'Internal Enterprise SaaS Engines',
    description:
      'We design, scale, and operate our own flagship products — including SettleDesk (real estate legal & dispute resolution) and GLAD HMS (hospitality resource management). We validate architectural patterns, relational database schemas, and AI agent workloads in our own production environments before bringing them to client systems.',
    tags: ['SettleDesk', 'GLAD HMS', 'Relational Schemas', 'AI Workflows'],
  },
  {
    number: '02',
    badge: 'Client Engineering',
    title: 'High-Velocity Sprints',
    subtitle: 'Working Staging in Weeks',
    description:
      'We bring hardened production blueprints directly into your codebase. No 8-week slide decks, no speculative mockups, and no communication silos. You talk directly with the founders writing your code and test interactive software within weeks.',
    tags: ['Weekly Demos', 'Zero Lock-in', 'Direct Access', 'Cloud Ready'],
  },
];

export default function AboutPageClient() {
  const containerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const thesisRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animations
      if (headlineRef.current) {
        const headlineLines = headlineRef.current.querySelectorAll('.hero-anim-line');
        gsap.fromTo(
          headlineLines,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: 'power3.out',
          }
        );
      }

      if (subheadRef.current) {
        gsap.fromTo(
          subheadRef.current,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            delay: 0.25,
          }
        );
      }

      // 2. Metrics Reveal
      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll('.stat-card');
        gsap.fromTo(
          statCards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Thesis / Story Block Reveal
      if (thesisRef.current) {
        const engineCards = thesisRef.current.querySelectorAll('.engine-card');
        gsap.fromTo(
          engineCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: thesisRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 4. Principles Cards Staggered Reveal
      if (principlesRef.current) {
        const principleCards = principlesRef.current.querySelectorAll('.principle-card');
        gsap.fromTo(
          principleCards,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: principlesRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 5. Team Cards Reveal
      if (teamRef.current) {
        const teamCards = teamRef.current.querySelectorAll('.team-card');
        gsap.fromTo(
          teamCards,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: teamRef.current,
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
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Large Display Headline & Studio Mission
         ───────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative w-full px-[20px] md:px-[28px] xl:px-[40px] pt-[32px] md:pt-[48px] xl:pt-[64px]">
        {/* Large Editorial Display Headline with full descender clearance */}
        <h1
          ref={headlineRef}
          className="text-fg font-normal leading-[1.02] tracking-[-0.04em] select-none max-w-[1300px]"
          style={{
            fontSize: 'clamp(48px, 8.2vw, 130px)',
          }}
        >
          <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
            <span className="hero-anim-line block will-change-transform pb-[0.06em]">
              We build products,
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
            <span className="hero-anim-line block text-fg-muted will-change-transform pb-[0.06em]">
              not just software.
            </span>
          </span>
        </h1>

        {/* Hero Narrative Paragraph */}
        <div className="mt-8 md:mt-10 xl:mt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-line">
          <p
            ref={subheadRef}
            className="t-statement text-fg-muted max-w-[820px] font-normal leading-[1.25]"
            style={{
              fontSize: 'clamp(20px, 2.6vw, 38px)',
            }}
          >
            A senior team of four turning ambitious ideas into shipped web, mobile, and AI products —{' '}
            <span className="text-fg font-medium">in weeks, not quarters.</span>
          </p>

          {/* Quick Studio Coordinates & Badge */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right shrink-0 gap-1.5">
            <span className="text-[13px] font-semibold text-fg">
              Based in {siteConfig.location.city}, {siteConfig.location.country}{' '}
              <span lang="hi">{siteConfig.location.countryHi}</span>
            </span>
            <span className="text-[12.5px] font-mono text-fg-muted">
              {siteConfig.location.coordinates}
            </span>
            <div className="inline-flex items-center gap-2 mt-1 px-3 py-1 rounded-full bg-surface border border-line-solid">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[12px] font-medium text-fg">
                Available for Select Q2/Q3 Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Word Rail Beneath Hero */}
      <div className="mt-4">
        <WordRail
          items={[
            'Independent Studio',
            'Senior Core of 4',
            'Dual-Engine Architecture',
            'Vrindavan, India',
          ]}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. STUDIO THESIS & THE "DUAL-ENGINE" MODEL
         ───────────────────────────────────────────────────────────── */}
      <SectionEyebrow
        left={<>STUDIO THESIS <span lang="hi">दृष्टिकोण</span></>}
        index="(GLD® — 01)"
        right="WHY WE STARTED"
      />

      <section ref={thesisRef} className="px-[20px] md:px-[28px] xl:px-[40px] mt-10 md:mt-14 xl:mt-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Left Column (5 cols): The Founding Story */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="t-eyebrow eyebrow-shimmer-accent block">
              OUR ORIGIN STORY
            </span>
            <h2 className="text-[28px] sm:text-[34px] xl:text-[42px] font-normal text-fg leading-[1.08] tracking-[-0.025em]">
              Traditional agencies are broken for founders.
            </h2>
            <div className="flex flex-col gap-4 t-body text-fg-muted leading-relaxed">
              <p>
                We started GLAD studio because founders kept losing months to agencies that overpromised, staffed projects with junior contractors learning on client budgets, and left founders with fragile codebases they couldn&apos;t maintain.
              </p>
              <p>
                So we built something different — a tiny, senior team that works on a small number of projects at a time and ships every week. We operate with zero account middlemen and zero telephone-game miscommunications.
              </p>
            </div>

            {/* Pull Quote Box */}
            <div className="mt-2 p-6 rounded-[14px] bg-surface border-l-4 border-accent border-t border-r border-b border-line-solid">
              <p className="text-[16px] xl:text-[18px] font-normal text-fg leading-snug">
                &ldquo;When you partner with GLAD studio, you talk directly with the senior engineers designing your database schemas, writing your types, and training your models.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): The Dual-Engine Model Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {dualEngines.map((engine) => (
              <div
                key={engine.number}
                data-cursor="pointer"
                className="engine-card bg-surface hover:bg-surface-2 border border-line-solid rounded-[16px] p-7 md:p-9 transition-all duration-300 will-change-transform group"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[13px] font-mono font-semibold text-accent tracking-wider">
                    ENGINE {engine.number}
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-[11.5px] font-medium bg-bg text-fg border border-line-solid uppercase tracking-wider">
                    {engine.badge}
                  </span>
                </div>
                <h3 className="text-[22px] md:text-[26px] font-semibold text-fg tracking-[-0.015em]">
                  {engine.title}
                </h3>
                <span className="text-[13.5px] font-medium text-accent block mt-1">
                  {engine.subtitle}
                </span>
                <p className="t-body text-fg-muted mt-4 leading-relaxed">
                  {engine.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-line">
                  {engine.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] font-mono px-2.5 py-1 rounded-[6px] bg-bg/70 text-fg-muted border border-line"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 4 Stat Metrics Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12 md:mt-16 pt-10 border-t border-line"
        >
          {studioMetrics.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card p-6 rounded-[14px] bg-surface border border-line-solid flex flex-col justify-between"
            >
              <div>
                <span className="t-price text-fg font-medium tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-[15px] font-semibold text-fg block mt-2">
                  {stat.label}
                </span>
              </div>
              <p className="text-[13px] text-fg-muted mt-3 leading-normal">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CORE STUDIO PRINCIPLES (01 — 04)
         ───────────────────────────────────────────────────────────── */}
      <SectionEyebrow
        left={<>OPERATING DOCTRINE <span lang="hi">सिद्धांत</span></>}
        index="(GLD® — 02)"
        right="FOUR CORE PRINCIPLES"
      />

      <section ref={principlesRef} className="px-[20px] md:px-[28px] xl:px-[40px] mt-10 md:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {studioValues.map((val) => (
            <div
              key={val.number}
              data-cursor="pointer"
              className="principle-card bg-surface hover:bg-surface-2 border border-line-solid hover:border-fg-dim rounded-[16px] p-7 md:p-8 flex flex-col justify-between transition-all duration-300 group will-change-transform shadow-sm hover:shadow-md"
            >
              <div>
                {/* Number with accent styling */}
                <div className="mb-4">
                  <span className="text-[28px] font-normal font-mono text-accent leading-none">
                    {val.number}
                  </span>
                </div>

                <h3 className="text-[20px] font-semibold text-fg tracking-[-0.01em]">
                  {val.title}
                </h3>
                <span className="text-[12.5px] font-medium text-accent block mt-1 uppercase tracking-wider">
                  {val.subtitle}
                </span>
                <p className="t-body-sm text-fg-muted mt-4 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-[12px] text-fg-dim font-mono">
                <span>[GLD-PRIN-{val.number}]</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-fg">
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. THE LEADERSHIP & ENGINEERING TEAM
         ───────────────────────────────────────────────────────────── */}
      <SectionEyebrow
        left={<>LEADERSHIP & ENGINEERING CORE <span lang="hi">नेतृत्व</span></>}
        index="(GLD® — 03)"
        right="FOUR SENIOR FOUNDERS"
      />

      <section ref={teamRef} className="px-[20px] md:px-[28px] xl:px-[40px] mt-10 md:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              data-cursor="view"
              data-cursor-text={member.name}
              data-cursor-subtext={member.role}
              className="team-card bg-surface border border-line-solid rounded-[16px] overflow-hidden flex flex-col will-change-transform group transition-all duration-300 hover:shadow-xl"
            >
              {/* Photo Frame with Hover Zoom */}
              <div className="w-full aspect-[4/4.8] relative bg-surface-2 border-b border-line-solid overflow-hidden">
                <Image
                  src={member.photoSrc}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  unoptimized
                  className="object-cover block scale-100 group-hover:scale-105 transition-transform duration-600 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-[12px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between">
                  <span>FOUNDING PARTNER</span>
                  <span>0{idx + 1}</span>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-surface group-hover:bg-surface-2 transition-colors duration-300">
                <div>
                  <h3 className="text-[19px] font-semibold text-fg tracking-[-0.01em]">
                    {member.name}
                  </h3>
                  <span className="text-[13px] font-medium text-accent block mt-1">
                    {member.role}
                  </span>
                  <p className="text-[13.5px] text-fg-muted mt-3.5 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-line flex items-center justify-between text-[11.5px] text-fg-dim font-mono">
                  <span>Direct Access</span>
                  <span className="text-accent font-semibold">Available</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CONTINUOUS SEAMLESS MARQUEE
         ───────────────────────────────────────────────────────────── */}
      <div className="mt-16 md:mt-24 py-5 border-y border-line bg-surface/50">
        <Marquee speed={24}>
          <div className="flex items-center gap-8 text-[15px] font-medium uppercase tracking-widest text-fg-muted px-4">
            <span className="text-fg font-semibold">INDEPENDENT PRODUCT STUDIO</span>
            <span className="text-accent">•</span>
            <span>SENIOR TEAM OF FOUR</span>
            <span className="text-accent">•</span>
            <span className="text-fg font-semibold">WEEK 3 WORKING SOFTWARE</span>
            <span className="text-accent">•</span>
            <span>100% CODE OWNERSHIP</span>
            <span className="text-accent">•</span>
            <span className="text-fg font-semibold">DUAL-ENGINE LABS</span>
            <span className="text-accent">•</span>
            <span>ZERO CONTRACTORS</span>
            <span className="text-accent">•</span>
            <span>VRINDAVAN, INDIA</span>
            <span className="text-accent">•</span>
          </div>
        </Marquee>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          6. FAQ SECTION
         ───────────────────────────────────────────────────────────── */}
      <SectionEyebrow
        left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
        index="(GLD® — 11)"
        right="CLARIFICATIONS"
      />

      <Faq />

      {/* ─────────────────────────────────────────────────────────────
          7. CALL TO ACTION SECTION
         ───────────────────────────────────────────────────────────── */}
      <section className="px-[20px] md:px-[28px] xl:px-[40px] mt-16 md:mt-24 mb-16 md:mb-24">
        <div className="bg-[#0A0A0B] text-[#FBFBF9] border border-[#222225] rounded-[20px] p-8 md:p-14 xl:p-18 text-center max-w-[1100px] mx-auto relative overflow-hidden shadow-2xl">
          <span className="text-[11px] font-semibold tracking-[0.045em] text-[#C6F000] uppercase mb-4 inline-block">
            DIRECT FOUNDER ENGAGEMENT
          </span>
          <h2 className="text-[32px] sm:text-[44px] xl:text-[56px] font-normal text-[#FBFBF9] leading-[1.05] tracking-[-0.03em] max-w-[800px] mx-auto">
            Ready to ship your product with a senior team?
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#A8A8AD] max-w-[620px] mx-auto mt-4 leading-relaxed">
            Tell us about your product roadmap. We will review your requirements and respond within 24 hours with architectural feedback and availability.
          </p>
          <div className="mt-8 flex justify-center">
            <PillButton calLink="arjun-rajput-2mdsis" variant="inverted">
              Book a Discovery Call
            </PillButton>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FOOTER
         ───────────────────────────────────────────────────────────── */}
      <Footer isWorkDetail />
    </main>
  );
}
