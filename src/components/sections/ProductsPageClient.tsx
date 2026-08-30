'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productsData } from '@/data/products';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import WordRail from '@/components/ui/WordRail';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export default function ProductsPageClient() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Staggered Character Slide-Up Animation on Mount
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll('.products-char');
        tl.fromTo(
          chars,
          { yPercent: 105, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.04,
            ease: 'power3.out',
          }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          '-=0.5'
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.45'
        );
      }

      // 2. Parallax: Frame moves down, Image moves up inside frame on scroll
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        const cards = containerRef.current?.querySelectorAll<HTMLElement>('.product-card-container');
        cards?.forEach((card) => {
          const frame = card.querySelector<HTMLElement>('.product-frame');
          const innerImage = card.querySelector<HTMLElement>('.product-image-inner');

          if (frame) {
            gsap.fromTo(
              frame,
              { y: -45 },
              {
                y: 45,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
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
              { yPercent: 38 },
              {
                yPercent: -38,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.5,
                },
              }
            );
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-bg select-none pt-[82px] overflow-x-clip text-fg"
    >
      {/* Hero Headline Block */}
      <div className="pt-[32px] md:pt-[48px] xl:pt-[64px] px-[20px] md:px-[28px] xl:px-[40px]">
        <div className="overflow-hidden pb-[0.2em] -mb-[0.2em]">
          <h1
            ref={headlineRef}
            className="t-display-sm text-fg whitespace-nowrap ml-[-4px] inline-block will-change-transform"
            style={{
              fontSize: 'clamp(0px, 9.5vw, 150px)',
              lineHeight: 0.90,
              letterSpacing: '-0.035em',
            }}
          >
            {'Products'.split('').map((char, index) => (
              <span
                key={index}
                className="products-char inline-block will-change-transform pb-[0.1em]"
              >
                {char}
              </span>
            ))}
            <sup
              className="products-char inline-block font-normal tracking-normal ml-1 will-change-transform"
              style={{ fontSize: '0.23em', verticalAlign: 'super' }}
            >
              (2)
            </sup>
          </h1>
        </div>

        <h2
          ref={subtitleRef}
          className="t-heading-sm text-fg mt-4 max-w-[800px] leading-[1.15] will-change-transform"
        >
          Software platforms built to scale.
        </h2>
        <p
          ref={descRef}
          className="t-body text-fg-muted mt-3 max-w-[680px] leading-relaxed will-change-transform"
        >
          Proprietary SaaS systems designed, engineered, and operated by GLAD studio to validate database architectures and solve real-world enterprise operations.
        </p>
      </div>

      {/* Word Rail */}
      <div className="mt-[48px] xl:mt-[72px]">
        <WordRail
          items={[
            'Multi-Tenant',
            'Real-Time',
            'Modular',
            'Production-Ready',
          ]}
        />
      </div>

      {/* Two Product Showcase Blocks */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px] flex flex-col gap-16 xl:gap-24 max-w-7xl mx-auto">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="product-card-container bg-surface border border-line-solid rounded-[16px] p-8 xl:p-12 grid grid-cols-1 xl:grid-cols-[1fr_440px] gap-10 items-center shadow-[0_20px_50px_-24px_rgba(10,10,11,0.15)]"
          >
            {/* Left Content Column */}
            <div className="space-y-6">
              {/* Status Chip */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-accent/15 text-accent font-mono">
                  {product.statusChip}
                </span>
                <span className="text-fg-dim font-mono text-[12px]">0{product.id}</span>
              </div>

              {/* Product Name at .t-display-sm & Tagline */}
              <div>
                <h3
                  className="text-fg font-normal leading-[0.92] tracking-[-0.035em]"
                  style={{ fontSize: 'clamp(44px, 6vw, 76px)' }}
                >
                  {product.name}
                </h3>
                <p className="text-[15px] font-medium text-fg-muted mt-2">
                  {product.tagline}
                </p>
              </div>

              {/* Description Paragraph */}
              <p className="t-body text-fg-muted max-w-[560px] leading-relaxed">
                {product.description}
              </p>

              {/* Four Feature Lines in Services Row Rhythm */}
              <div className="border-t border-line divide-y divide-line pt-2">
                {product.overviewFeatures.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[13px]"
                  >
                    <span className="font-medium text-fg shrink-0 sm:w-[170px]">
                      {feat.title}
                    </span>
                    <span className="text-fg-muted font-normal leading-snug">
                      {feat.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Three-Stat Strip */}
              <div className="pt-3 border-t border-line grid grid-cols-3 gap-3 [font-variant-numeric:tabular-nums]">
                {product.threeStatStrip.map((stat, sIdx) => (
                  <div key={sIdx} className="space-y-0.5">
                    <div className="text-[18px] md:text-[22px] font-medium text-fg leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-fg-muted leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* PillButton to Detail Page */}
              <div className="pt-2">
                <PillButton href={`/products/${product.slug}`}>
                  Explore {product.name} →
                </PillButton>
              </div>
            </div>

            {/* Right Visual Column (Parallax Frame & Parallax Image) */}
            <div className="product-frame relative aspect-[4/3] rounded-[12px] overflow-hidden bg-bg border border-line-solid flex items-center justify-center p-4 shadow-inner will-change-transform">
              <div className="product-image-inner relative w-full h-[155%] flex items-center justify-center will-change-transform">
                <Image
                  src={product.overviewGraphic}
                  alt={`${product.name} visual preview`}
                  fill
                  unoptimized
                  className="object-contain p-4 block"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section with GLD 11 & GLD 12 Eyebrows */}
      <div className="mt-[100px] xl:mt-[140px]">
        <SectionEyebrow
          left={<>FREQUENTLY ASKED <span lang="hi">प्रश्नावली</span></>}
          index="(GLD® — 11)"
          right="QUESTIONS & ANSWERS"
        />
      </div>

      <Faq />

      {/* Footer */}
      <Footer />
    </main>
  );
}
