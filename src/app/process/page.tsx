import React from 'react';
import type { Metadata } from 'next';
import { processRows } from '@/data/process';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import PillButton from '@/components/ui/PillButton';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'How We Ship — Engineering Process — GLAD Studio',
  description:
    'Eight steps from first call to a live, supported product. No mystery, no scope creep, no rebuilds.',
};

export default function ProcessPage() {
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
          Process
          <sup
            className="font-normal tracking-normal ml-1"
            style={{ fontSize: '0.23em', verticalAlign: 'super' }}
          >
            (8)
          </sup>
        </h1>
        <h2 className="t-heading-sm text-fg mt-4 max-w-[800px] leading-[1.15]">
          How we ship.
        </h2>
        <p className="t-body text-fg-muted mt-3 max-w-[680px]">
          Eight steps from first call to a live, supported product. No mystery, no scope creep, no rebuilds.
        </p>
      </div>

      {/* 2. Eight Process Steps as Full Expanded Blocks */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px] grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
        {processRows.map((step) => (
          <div
            key={step.step}
            className="bg-surface border border-line-solid rounded-[14px] p-8 xl:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-surface-2"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[18px] font-semibold text-accent">
                  {step.step}
                </span>
                <span className="text-[13px] font-semibold text-fg uppercase tracking-wider bg-bg px-3 py-1 rounded-full border border-line-solid">
                  {step.when}
                </span>
              </div>

              <h3 className="text-[22px] xl:text-[24px] font-medium text-fg mt-6">
                {step.stage}
              </h3>

              <p className="t-body text-fg-muted mt-3 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-line flex items-center justify-between text-[13px] text-fg-muted">
              <span>Phase Checkpoint</span>
              <span className="text-fg font-medium">Guaranteed Milestone</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Action CTA */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px] text-center">
        <PillButton href="/contact">Book a Discovery Call</PillButton>
      </div>

      {/* 4. Section Eyebrow preceding FAQ */}
      <div className="mt-[80px] xl:mt-[110px]">
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
