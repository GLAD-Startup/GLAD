import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { productsData } from '@/data/products';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Proprietary SaaS Platforms — GLAD Studio',
  description:
    'Explore GLAD HMS and SettleDesk — enterprise SaaS platforms designed, engineered, and operated by GLAD studio.',
};

export default function ProductsOverviewPage() {
  return (
    <main className="min-h-screen bg-bg select-none pt-[84px]">
      {/* 1. Hero Block */}
      <div className="pt-[48px] xl:pt-[80px] px-[20px] md:px-[28px] xl:px-[40px]">
        <h1
          className="t-display-sm text-fg whitespace-nowrap"
          style={{
            fontSize: 'clamp(0px, 10vw, 150px)',
            lineHeight: 0.90,
            letterSpacing: '-0.035em',
          }}
        >
          Products
          <sup
            className="font-normal tracking-normal ml-1"
            style={{ fontSize: '0.23em', verticalAlign: 'super' }}
          >
            ({productsData.length})
          </sup>
        </h1>
        <h2 className="t-heading-sm text-fg mt-4 max-w-[800px] leading-[1.15]">
          Software platforms built to scale.
        </h2>
        <p className="t-body text-fg-muted mt-3 max-w-[680px]">
          Proprietary SaaS systems designed, engineered, and operated by GLAD studio to validate database architectures and solve real-world enterprise operations.
        </p>
      </div>

      {/* 2. Two Distinct Product Showcase Blocks */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px] flex flex-col gap-16 xl:gap-24">
        {productsData.map((product, idx) => (
          <div
            key={product.id}
            className="bg-surface border border-line-solid rounded-[16px] p-8 xl:p-12 grid grid-cols-1 xl:grid-cols-[1fr_480px] gap-10 items-center"
          >
            {/* Left Content Column */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-semibold text-accent uppercase tracking-wider">
                  0{idx + 1} · {product.category}
                </span>
                <span className="text-fg-muted text-[13px]">·</span>
                <span className="text-[13px] text-fg-muted font-medium">
                  {product.tagline}
                </span>
              </div>

              <h3 className="text-[32px] xl:text-[40px] font-semibold text-fg mt-3 tracking-tight">
                {product.name}
              </h3>

              <p className="t-body text-fg-muted mt-4 leading-relaxed max-w-[580px]">
                {product.description}
              </p>

              {/* 4 Feature Bullets */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.capabilities.slice(0, 4).map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-[14px] text-fg">
                    <span className="text-accent font-bold text-[13px] mt-0.5">✓</span>
                    <span className="font-medium">{cap.title}</span>
                  </div>
                ))}
              </div>

              {/* 3 Stats */}
              <div className="mt-8 pt-6 border-t border-line grid grid-cols-3 gap-4">
                {product.stats.slice(0, 3).map((stat, sIdx) => (
                  <div key={sIdx}>
                    <div className="text-[20px] xl:text-[24px] font-bold text-fg">
                      {stat.value}
                    </div>
                    <div className="text-[11.5px] text-fg-muted uppercase tracking-wider font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8 flex items-center gap-4">
                <PillButton href={`/products/${product.slug}`}>
                  Explore {product.name}
                </PillButton>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-bg border border-line-solid relative shadow-xl">
              <Image
                src={
                  product.slug === 'glad-hms'
                    ? '/products/hotel-building.png'
                    : '/products/building.png'
                }
                alt={`${product.name} visual showcase`}
                fill
                unoptimized
                className="object-cover block"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Section Eyebrow preceding FAQ */}
      <div className="mt-[80px] xl:mt-[110px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* 4. FAQ */}
      <Faq />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
