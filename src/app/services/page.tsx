import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesData } from '@/data/services';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Engineering Services — GLAD Studio',
  description:
    'From rapid MVP validation to multi-tenant SaaS platforms and autonomous AI agent architectures.',
};

export default function ServicesOverviewPage() {
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
          Services
          <sup
            className="font-normal tracking-normal ml-1"
            style={{ fontSize: '0.23em', verticalAlign: 'super' }}
          >
            ({servicesData.length})
          </sup>
        </h1>
        <h2 className="t-heading-sm text-fg mt-4 max-w-[800px] leading-[1.15]">
          Built for ambitious teams.
        </h2>
        <p className="t-body text-fg-muted mt-3 max-w-[680px]">
          From rapid MVP validation to multi-tenant SaaS platforms and autonomous AI agent architectures.
        </p>
      </div>

      {/* 2. Expanded 5 Services List using Awards Row Rhythm */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px]">
        <div className="border-t border-line">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="py-[36px] xl:py-[48px] border-b border-line grid grid-cols-1 xl:grid-cols-[100px_320px_1fr_260px] gap-6 xl:gap-8 items-start transition-colors duration-200 hover:bg-surface/60 rounded-[8px] px-2"
            >
              {/* Number */}
              <div className="text-[17px] font-semibold text-accent pt-1">
                {service.index}
              </div>

              {/* Title & Timeline */}
              <div>
                <Link
                  href={`/services/${service.slug}`}
                  data-cursor="link"
                  className="text-[20px] xl:text-[22px] font-medium text-fg hover:text-accent transition-colors block"
                >
                  {service.title}
                </Link>
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
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[13.5px] text-fg-muted">
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
                      className="px-2.5 py-1 rounded-full text-[12px] font-medium bg-surface border border-line-solid text-fg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  data-cursor="link"
                  className="text-[13px] font-semibold text-fg hover:text-accent transition-colors mt-2"
                >
                  Explore Service Specification →
                </Link>
              </div>
            </div>
          ))}
        </div>
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
