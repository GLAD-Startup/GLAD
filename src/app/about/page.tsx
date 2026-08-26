import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { coreValues, leadershipTeam } from '@/data/values';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import PillButton from '@/components/ui/PillButton';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'About the Studio — GLAD Studio',
  description:
    'A senior team of four turning ambitious ideas into shipped web, mobile, and AI products in weeks, not quarters.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg select-none pt-[84px]">
      {/* 1. Hero Block */}
      <div className="pt-[48px] xl:pt-[80px] px-[20px] md:px-[28px] xl:px-[40px]">
        <span className="text-[13px] font-semibold text-accent uppercase tracking-wider block mb-3">
          About GLAD Studio
        </span>
        <h1 className="t-heading-sm text-fg max-w-[960px] leading-[1.12]">
          We build products, not just software.
        </h1>
        <p className="t-body text-fg-muted max-w-[760px] mt-4 leading-relaxed">
          A senior team of four turning ideas into shipped web, mobile, and AI products — in weeks, not quarters.
        </p>
      </div>

      {/* 2. Our Story Prose Block */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px]">
        <div className="bg-surface border border-line-solid rounded-[16px] p-8 xl:p-12 max-w-[1000px]">
          <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-3">
            Our Story
          </span>
          <h2 className="text-[26px] xl:text-[32px] font-medium text-fg leading-tight">
            Why we started GLAD Studio.
          </h2>
          <div className="mt-6 flex flex-col gap-4 t-body text-fg-muted leading-relaxed">
            <p>
              We started GLAD studio because founders kept losing months to agencies that overpromised, staffed projects with junior contractors learning on client budgets, and left founders with fragile codebases they couldn&apos;t maintain.
            </p>
            <p>
              So we built something different — a tiny, senior team that works on a small number of projects at a time and ships every week. We operate as a Dual-Engine Studio: designing and operating our own enterprise SaaS platforms (GLAD HMS and SettleDesk) while engineering client systems with working software by Week 3.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Core Values as Four Blocks */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px]">
        <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-6">
          Core Studio Principles
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {coreValues.map((val) => (
            <div
              key={val.id}
              className="bg-surface border border-line-solid rounded-[14px] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[16px] font-semibold text-accent block mb-3">
                  0{val.id}
                </span>
                <h3 className="text-[18px] font-semibold text-fg">
                  {val.title}
                </h3>
                <p className="t-body-sm text-fg-muted mt-2 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Leadership Team as Four-Card Grid */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[100px]">
        <span className="text-[12px] font-semibold text-accent uppercase tracking-wider block mb-6">
          The Leadership Team
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="bg-surface border border-line-solid rounded-[14px] overflow-hidden flex flex-col"
            >
              {/* Photo */}
              <div className="w-full aspect-[4/5] relative bg-surface-2 border-b border-line-solid">
                <Image
                  src={member.photoSrc}
                  alt={member.name}
                  fill
                  unoptimized
                  className="object-cover block"
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-[17px] font-semibold text-fg">
                    {member.name}
                  </h3>
                  <span className="text-[12.5px] font-medium text-accent block mt-0.5">
                    {member.role}
                  </span>
                  <p className="text-[13.5px] text-fg-muted mt-3 leading-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CTA Block */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[64px] xl:mt-[96px] text-center">
        <PillButton href="/contact">Book a Discovery Call</PillButton>
      </div>

      {/* 6. Section Eyebrow preceding FAQ */}
      <div className="mt-[80px] xl:mt-[110px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* 7. FAQ */}
      <Faq />

      {/* 8. Footer */}
      <Footer isWorkDetail />
    </main>
  );
}
