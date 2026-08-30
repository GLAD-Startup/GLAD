'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';
import {
  Check,
  ArrowRight,
  Phone,
  Bed,
  Building2,
  Lock,
  ShieldCheck,
  Database,
  FileCheck,
  CheckCircle2,
  CalendarCheck,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import WordRail from '@/components/ui/WordRail';
import PillButton from '@/components/ui/PillButton';
import Footer from '@/components/layout/Footer';
import MockUiPanel from '@/components/products/MockUiPanel';
import ProductGallery3D from '@/components/products/ProductGallery3D';
import type { ProductItem } from '@/data/products';

export interface ProductDetailClientProps {
  product: ProductItem;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHms = product.slug === 'glad-hms';
  const [activeCascadeTab, setActiveCascadeTab] = useState<string>(isHms ? 'frontdesk' : 'agent');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        // 1. Cross-sell card counter-parallax: frame moves down, image moves up
        const crossSellCard = containerRef.current?.querySelector<HTMLElement>('.cross-sell-card-container');
        if (crossSellCard) {
          const frame = crossSellCard.querySelector<HTMLElement>('.cross-sell-frame');
          const innerImage = crossSellCard.querySelector<HTMLElement>('.cross-sell-image-inner');

          if (frame) {
            gsap.fromTo(
              frame,
              { y: -45 },
              {
                y: 45,
                ease: 'none',
                scrollTrigger: {
                  trigger: crossSellCard,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.6,
                },
              }
            );
          }

          if (innerImage) {
            gsap.fromTo(
              innerImage,
              { yPercent: 20 },
              {
                yPercent: -20,
                ease: 'none',
                scrollTrigger: {
                  trigger: crossSellCard,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.6,
                },
              }
            );
          }
        }

        // 2. Feature deep-dive image frames
        const featureFrames = containerRef.current?.querySelectorAll<HTMLElement>('.feature-parallax-frame');
        featureFrames?.forEach((frame) => {
          const inner = frame.querySelector<HTMLElement>('.feature-image-inner');
          if (frame) {
            gsap.fromTo(
              frame,
              { y: -25 },
              {
                y: 25,
                ease: 'none',
                scrollTrigger: {
                  trigger: frame,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.6,
                },
              }
            );
          }
          if (inner) {
            gsap.fromTo(
              inner,
              { yPercent: 15 },
              {
                yPercent: -15,
                ease: 'none',
                scrollTrigger: {
                  trigger: frame,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.6,
                },
              }
            );
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  const getPillarIcon = (iconType?: string, idx?: number) => {
    if (iconType === 'lock' || idx === 0) return Lock;
    if (iconType === 'shield' || iconType === 'audit' || idx === 1) {
      return isHms ? ShieldCheck : FileCheck;
    }
    return Database;
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-bg text-fg select-none overflow-x-clip">
      {/* 1. HERO SECTION */}
      <section className="pt-[110px] md:pt-[130px] xl:pt-[150px] px-[20px] md:px-[28px] xl:px-[40px] pb-[48px] xl:pb-[64px]">
        {/* Positioning Pill */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-line-solid bg-surface text-[12px] font-medium text-fg">
            {isHms ? (
              <span className="flex items-center gap-1.5 font-semibold text-accent">
                <Bed className="w-3.5 h-3.5" />
                GLAD HMS
              </span>
            ) : (
              <span className="flex items-center gap-1.5 font-semibold text-accent">
                <Building2 className="w-3.5 h-3.5" />
                SettleDesk
              </span>
            )}
            <span className="text-fg-dim">|</span>
            <span className="text-fg-muted">{product.heroPositioning}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Thesis & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="t-heading text-fg font-normal leading-[1.04]">
              {product.headline}
            </h1>

            <p className="t-body text-fg-muted max-w-[560px] leading-[1.58]">
              {product.description}
            </p>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <PillButton href="/contact">
                {product.closingCta.primaryButtonText || 'Start Free Trial'}
              </PillButton>
              <Link
                href="/contact"
                data-cursor="link"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line-solid text-[13px] font-medium text-fg hover:bg-surface transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Book a Discovery Call</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Interactive Preview Card */}
          <div className="lg:col-span-6">
            <div className="bg-surface border border-line-solid rounded-[14px] p-5 md:p-6 shadow-[0_20px_50px_-24px_rgba(10,10,11,0.2)]">
              {/* Tab Bar Header */}
              <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                <span className="text-[11.5px] font-semibold uppercase tracking-wider text-fg-muted">
                  {isHms ? 'Live Operations Cascade' : 'Live Deal Cascade'}
                </span>
                <div className="flex items-center gap-1 bg-bg p-1 rounded-md border border-line text-[11px]">
                  {isHms ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setActiveCascadeTab('frontdesk')}
                        className={clsx(
                          'px-2.5 py-1 rounded-[4px] font-medium transition-colors cursor-pointer',
                          activeCascadeTab === 'frontdesk'
                            ? 'bg-accent/15 text-accent font-semibold'
                            : 'text-fg-muted hover:text-fg'
                        )}
                      >
                        1. Front Desk
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCascadeTab('housekeeping')}
                        className={clsx(
                          'px-2.5 py-1 rounded-[4px] font-medium transition-colors cursor-pointer',
                          activeCascadeTab === 'housekeeping'
                            ? 'bg-accent/15 text-accent font-semibold'
                            : 'text-fg-muted hover:text-fg'
                        )}
                      >
                        2. Housekeeping
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCascadeTab('finance')}
                        className={clsx(
                          'px-2.5 py-1 rounded-[4px] font-medium transition-colors cursor-pointer',
                          activeCascadeTab === 'finance'
                            ? 'bg-accent/15 text-accent font-semibold'
                            : 'text-fg-muted hover:text-fg'
                        )}
                      >
                        3. Folios & USALI
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setActiveCascadeTab('agent')}
                        className={clsx(
                          'px-2.5 py-1 rounded-[4px] font-medium transition-colors cursor-pointer',
                          activeCascadeTab === 'agent'
                            ? 'bg-accent/15 text-accent font-semibold'
                            : 'text-fg-muted hover:text-fg'
                        )}
                      >
                        1. Field Agent
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCascadeTab('admin')}
                        className={clsx(
                          'px-2.5 py-1 rounded-[4px] font-medium transition-colors cursor-pointer',
                          activeCascadeTab === 'admin'
                            ? 'bg-accent/15 text-accent font-semibold'
                            : 'text-fg-muted hover:text-fg'
                        )}
                      >
                        2. Admin Review
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCascadeTab('simulator')}
                        className={clsx(
                          'px-2.5 py-1 rounded-[4px] font-medium transition-colors cursor-pointer',
                          activeCascadeTab === 'simulator'
                            ? 'bg-accent/15 text-accent font-semibold'
                            : 'text-fg-muted hover:text-fg'
                        )}
                      >
                        3. Calculator
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Tab Display Panel */}
              <div>
                {isHms && activeCascadeTab === 'frontdesk' && (
                  <MockUiPanel variant="hms-checkin" />
                )}
                {isHms && activeCascadeTab === 'housekeeping' && (
                  <MockUiPanel variant="hms-housekeeping" />
                )}
                {isHms && activeCascadeTab === 'finance' && (
                  <MockUiPanel variant="hms-billing" />
                )}

                {!isHms && activeCascadeTab === 'agent' && (
                  <MockUiPanel variant="settledesk-agent" />
                )}
                {!isHms && activeCascadeTab === 'admin' && (
                  <MockUiPanel variant="settledesk-ledger" />
                )}
                {!isHms && activeCascadeTab === 'simulator' && (
                  <MockUiPanel variant="settledesk-simulator" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STAT BAR (4-Column Grid, Hairline Top and Bottom) */}
      <section className="border-y border-line py-8 px-[20px] md:px-[28px] xl:px-[40px] bg-surface/30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-7xl mx-auto [font-variant-numeric:tabular-nums]">
          {product.heroStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[28px] md:text-[34px] xl:text-[40px] font-medium text-fg leading-none tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-[12.5px] md:text-[13px] text-fg-muted font-normal">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION EYEBROW */}
      <div className="mt-[70px] xl:mt-[90px]">
        <SectionEyebrow
          left={<>DEDICATED ROLES <span lang="hi">भूमिका</span></>}
          index="(GLD® — 02)"
          right="THREE-TIER CONSOLES"
        />
      </div>

      {/* 4. THREE-TIER CONSOLES (Role Sections: 3 blocks) */}
      <section className="mt-[48px] xl:mt-[72px] px-[20px] md:px-[28px] xl:px-[40px] space-y-12 xl:space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="t-heading-sm text-fg font-normal">
            Every Department Gets the Right Operational Tools
          </h2>
          <p className="t-body-sm text-fg-muted mt-2">
            Tailored consoles engineered for dedicated operational workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
          {product.threeTier.map((tier, idx) => (
            <div
              key={tier.title}
              className="bg-surface border border-line-solid rounded-[14px] p-6 flex flex-col justify-between transition-colors hover:bg-surface-2"
            >
              <div className="space-y-4">
                {/* Role Chip */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider bg-accent/10 text-accent font-mono">
                    {tier.role}
                  </span>
                  <span className="text-fg-dim font-mono text-[12px]">0{idx + 1}</span>
                </div>

                <h3 className="text-[20px] font-medium text-fg leading-snug">
                  {tier.title}
                </h3>

                <p className="t-body-sm text-fg-muted leading-relaxed">
                  {tier.description}
                </p>

                {/* Mock UI Preview */}
                <div className="pt-2">
                  {tier.mockType === 'grid' && <MockUiPanel variant="hms-grid" />}
                  {tier.mockType === 'housekeeping' && <MockUiPanel variant="hms-housekeeping" />}
                  {tier.mockType === 'finance' && <MockUiPanel variant="hms-billing" />}
                  {tier.mockType === 'admin' && <MockUiPanel variant="settledesk-admin" />}
                  {tier.mockType === 'ledger' && <MockUiPanel variant="settledesk-ledger" />}
                  {tier.mockType === 'agent' && <MockUiPanel variant="settledesk-agent" />}
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-6 pt-5 border-t border-line space-y-2">
                {tier.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-[12.5px] text-fg">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span className="leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SETTLEDESK 3D GALLERY (If SettleDesk) */}
      {!isHms && product.galleryItems && (
        <div className="mt-[80px] xl:mt-[110px]">
          <ProductGallery3D items={product.galleryItems} />
        </div>
      )}

      {/* 6. SECTION EYEBROW */}
      <div className="mt-[80px] xl:mt-[110px]">
        <SectionEyebrow
          left={<>CORE ARCHITECTURE <span lang="hi">सुविधाएँ</span></>}
          index="(GLD® — 03)"
          right="FEATURE DEEP-DIVES"
        />
      </div>

      {/* 7. FEATURE DEEP-DIVES (4 Alternating Blocks) */}
      <section className="mt-[48px] xl:mt-[80px] px-[20px] md:px-[28px] xl:px-[40px] space-y-16 xl:space-y-24">
        {product.features.map((feature, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={feature.title}
              className={clsx(
                'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center',
                isEven && 'lg:grid-flow-dense'
              )}
            >
              {/* Text Side */}
              <div
                className={clsx(
                  'lg:col-span-5 space-y-4',
                  isEven ? 'lg:col-start-8' : 'lg:col-start-1'
                )}
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {feature.eyebrow}
                </div>
                <h3 className="t-heading-sm text-fg font-normal leading-tight">
                  {feature.title}
                </h3>
                <p className="t-body text-fg-muted leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-2 font-mono text-[11.5px] text-fg-muted bg-surface px-3 py-1.5 rounded-full border border-line inline-block">
                  {feature.routePath}
                </div>
              </div>

              {/* Media / Mock UI Side */}
              <div
                className={clsx(
                  'lg:col-span-7',
                  isEven ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-6'
                )}
              >
                {feature.videoSrc ? (
                  <div className="rounded-[14px] overflow-hidden border border-line-solid bg-surface aspect-video relative shadow-lg">
                    <video
                      src={feature.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover block"
                    />
                  </div>
                ) : feature.imageSrc ? (
                  <div className="feature-parallax-frame rounded-[14px] overflow-hidden border border-line-solid bg-surface aspect-video relative shadow-lg will-change-transform">
                    <div className="feature-image-inner relative w-full h-[125%] -top-[12.5%] will-change-transform">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.title}
                        fill
                        unoptimized
                        className="object-cover block"
                      />
                    </div>
                  </div>
                ) : feature.mockVariant === 'hms-grid' ? (
                  <MockUiPanel variant="hms-grid" />
                ) : feature.mockVariant === 'hms-checkin' ? (
                  <MockUiPanel variant="hms-checkin" />
                ) : feature.mockVariant === 'hms-housekeeping' ? (
                  <MockUiPanel variant="hms-housekeeping" />
                ) : feature.mockVariant === 'hms-billing' ? (
                  <MockUiPanel variant="hms-billing" />
                ) : (
                  <MockUiPanel variant="settledesk-simulator" />
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* 8. ARCHITECTURE & SECURITY PILLARS (Heading + 3 Arrow Cards) */}
      <section className="mt-[90px] xl:mt-[130px] border-t border-line pt-[70px] xl:pt-[90px] px-[20px] md:px-[28px] xl:px-[40px] bg-surface/20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SectionEyebrow
              left={<>ARCHITECTURAL INTEGRITY <span lang="hi">सुरक्षा</span></>}
              index="(GLD® — 04)"
              right="SECURITY PILLARS"
            />
            <h2 className="t-heading text-fg font-normal pt-4">
              {isHms ? 'Multi-Tenant Safety. Zero Collisions.' : 'Bank-Grade Security. Zero Leaks.'}
            </h2>
            <p className="t-body-sm text-fg-muted">
              {isHms
                ? 'Engineered with tenant-scoped query filters and database-level pessimistic row locks.'
                : 'Built on strict database-level isolation so every brokerage data remains 100% private.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {product.securityPillars.map((pillar, idx) => {
              const PillarIcon = getPillarIcon(pillar.iconType, idx);

              return (
                <div
                  key={pillar.title}
                  className="bg-surface border border-line-solid rounded-[14px] p-6 relative group transition-all duration-300 hover:bg-surface-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[10px] bg-bg border border-line flex items-center justify-center text-accent">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <span className="text-fg-muted text-[16px] font-mono group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                  <h3 className="text-[17px] font-medium text-fg">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 t-body-sm text-fg-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. OPERATIONAL FLOW (4 Numbered Phases) */}
      <section className="mt-[90px] xl:mt-[130px] px-[20px] md:px-[28px] xl:px-[40px]">
        <div className="max-w-7xl mx-auto space-y-10">
          <SectionEyebrow
            left={<>OPERATIONAL FLOW <span lang="hi">प्रक्रिया</span></>}
            index="(GLD® — 05)"
            right="4-PHASE SEQUENCE"
          />

          <div className="border-t border-line divide-y divide-line">
            {product.operationalPhases.map((phase) => (
              <div
                key={phase.phase}
                className="py-8 xl:py-10 grid grid-cols-1 lg:grid-cols-[160px_240px_1fr_300px] gap-6 items-start"
              >
                {/* Phase Number & Timing Chip */}
                <div className="flex lg:flex-col items-center lg:items-start gap-2">
                  <span className="text-[13px] font-mono text-fg-muted">
                    {phase.phase}
                  </span>
                  <span className="inline-block px-2 py-0.5 rounded-[4px] text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent font-mono">
                    {phase.timingChip}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-medium text-fg">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="t-body-sm text-fg-muted leading-relaxed">
                  {phase.description}
                </p>

                {/* Checklist Bullets */}
                <div className="space-y-1.5">
                  {phase.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-[12px] text-fg">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. OUR STORY & BELIEFS (2 Prose Paragraphs + 4 Arrow Cards) */}
      <section className="mt-[90px] xl:mt-[130px] border-t border-line pt-[70px] xl:pt-[90px] px-[20px] md:px-[28px] xl:px-[40px] bg-surface/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionEyebrow
            left={<>STUDIO ORIGIN <span lang="hi">कहानी</span></>}
            index="(GLD® — 06)"
            right="OUR BELIEFS"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Story Prose */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                {product.aboutStory.eyebrow}
              </span>
              <h2 className="t-heading-sm text-fg font-normal">
                {product.aboutStory.title}
              </h2>
              <p className="t-body text-fg-muted leading-relaxed">
                {product.aboutStory.body1}
              </p>
              <p className="t-body text-fg-muted leading-relaxed">
                {product.aboutStory.body2}
              </p>
            </div>

            {/* Right Column: 4 Belief Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.aboutStory.beliefs.map((belief) => (
                <div
                  key={belief.title}
                  className="bg-surface border border-line-solid rounded-[14px] p-5 relative group transition-colors hover:bg-surface-2"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[15px] font-medium text-fg">
                      {belief.title}
                    </h3>
                    <span className="text-fg-muted text-[14px] font-mono group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                  <p className="text-[12.5px] text-fg-muted leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. PRICING MATRIX (3 Tiers with Opacity Ladder) */}
      <section className="mt-[90px] xl:mt-[130px] px-[20px] md:px-[28px] xl:px-[40px]">
        <div className="max-w-7xl mx-auto space-y-10">
          <SectionEyebrow
            left={<>TRANSPARENT PLANS <span lang="hi">मूल्य</span></>}
            index="(GLD® — 07)"
            right="PLANS & TIERS"
          />

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="t-heading text-fg font-normal">
              Simple Plans. Built to Scale.
            </h2>
            <p className="t-body-sm text-fg-muted mt-2">
              Transparent terms with zero hidden fees. 15-day free trial on all plans.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {product.pricingTiers.map((plan) => (
              <div
                key={plan.name}
                className={clsx(
                  'bg-surface border rounded-[14px] p-6 xl:p-8 flex flex-col justify-between transition-colors',
                  plan.featured
                    ? 'border-accent/50 shadow-md bg-surface-2/60'
                    : 'border-line-solid hover:bg-surface-2'
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[20px] font-medium text-fg">
                      {plan.name}
                    </span>
                    {plan.featured && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-accent/15 text-accent font-mono">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-[13px] text-fg-muted min-h-[38px] leading-snug">
                    {plan.tagline}
                  </p>

                  <div className="my-6 h-[1px] bg-line" />

                  {/* Feature Rows with Exact Opacity Ladder */}
                  <div className="space-y-3">
                    {plan.features.map((feature, fIdx) => {
                      const isActive = fIdx < plan.activeFeaturesCount;

                      return (
                        <div
                          key={fIdx}
                          className={clsx(
                            'flex items-start gap-2.5 text-[13px] transition-opacity',
                            isActive ? 'opacity-100' : 'opacity-35'
                          )}
                        >
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-fg leading-snug">{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-line flex justify-center">
                  <PillButton href="/contact">{plan.ctaText}</PillButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS (5 Hairline Accordion Items) */}
      <section className="mt-[90px] xl:mt-[130px] border-t border-line pt-[70px] xl:pt-[90px] px-[20px] md:px-[28px] xl:px-[40px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 items-start">
          <div className="space-y-4">
            <SectionEyebrow
              left={<>FAQ <span lang="hi">प्रश्न</span></>}
              index="(GLD® — 08)"
              right="COMMON QUESTIONS"
            />
            <h2 className="t-heading-sm text-fg font-normal pt-4">
              Everything You Need to Know
            </h2>
            <p className="t-body-sm text-fg-muted">
              Direct technical answers to standard integration, security, and setup inquiries.
            </p>
          </div>

          {/* Accordions */}
          <div className="border-t border-line">
            {product.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              const panelId = `product-faq-${idx}`;

              return (
                <div key={idx} className="border-b border-line py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    data-cursor="link"
                    className="w-full flex items-center text-left justify-between gap-4 group cursor-pointer"
                  >
                    <span className="text-[13px] font-mono text-fg-muted w-8 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="flex-1 text-[16px] font-medium text-fg group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-[18px] text-fg-muted font-mono shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    id={panelId}
                    className={clsx(
                      'overflow-hidden transition-all duration-300',
                      isOpen ? 'max-h-[200px] opacity-100 pt-3 pl-8' : 'max-h-0 opacity-0'
                    )}
                  >
                    <p className="t-body-sm text-fg-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. CROSS-SELL CARD (Pointing to Sister Product) */}
      <section className="mt-[90px] xl:mt-[130px] px-[20px] md:px-[28px] xl:px-[40px]">
        <div className="cross-sell-card-container max-w-7xl mx-auto bg-surface border border-line-solid rounded-[18px] p-8 xl:p-12 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-center shadow-[0_20px_50px_-24px_rgba(10,10,11,0.15)]">
          <div className="space-y-4">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider bg-accent/10 text-accent font-mono">
              {product.crossSell.badge}
            </span>
            <h3 className="t-heading-sm text-fg font-normal">
              {product.crossSell.headline}
            </h3>
            <p className="t-body text-fg-muted max-w-xl">
              {product.crossSell.description}
            </p>
            <div className="pt-2">
              <PillButton href={`/products/${product.crossSell.targetSlug}`}>
                Explore {product.crossSell.targetName} →
              </PillButton>
            </div>
          </div>

          <div className="cross-sell-frame relative aspect-[4/3] rounded-[12px] overflow-hidden bg-bg border border-line flex items-center justify-center p-4 shadow-inner will-change-transform">
            <div className="cross-sell-image-inner relative w-full h-[130%] flex items-center justify-center will-change-transform">
              <Image
                src={product.crossSell.graphic}
                alt={product.crossSell.targetName}
                fill
                unoptimized
                className="object-contain p-4 block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 14. CLOSING CTA */}
      <section className="mt-[90px] xl:mt-[130px] border-t border-line pt-[80px] pb-[80px] px-[20px] md:px-[28px] xl:px-[40px] text-center bg-surface/30">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="t-heading text-fg font-normal">
            {product.closingCta.heading}
          </h2>
          <p className="t-body text-fg-muted max-w-xl mx-auto">
            {product.closingCta.subline}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <PillButton href="/contact">
              {product.closingCta.primaryButtonText}
            </PillButton>
            <Link
              href="/contact"
              data-cursor="link"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line-solid text-[13px] font-medium text-fg hover:bg-surface transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>{product.closingCta.secondaryButtonText}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 15. FOOTER */}
      <Footer />
    </div>
  );
}
