import React from 'react';
import type { Metadata } from 'next';
import { projectsData } from '@/data/work';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Portfolio — Selected Work — GLAD Studio',
  description: "A small sample of what we've shipped — from MVPs to AI products and internal platforms.",
};

export default function PortfolioPage() {
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
          Selected Work
          <sup
            className="font-normal tracking-normal ml-1"
            style={{ fontSize: '0.23em', verticalAlign: 'super' }}
          >
            ({projectsData.length})
          </sup>
        </h1>
        <p className="t-body text-fg-muted mt-4 max-w-[620px]">
          A small sample of what we&apos;ve shipped — from MVPs to AI products and internal platforms.
        </p>
      </div>

      {/* 2. Scattered Project Cards (3050px container height) */}
      <div className="relative w-full h-auto xl:h-[3050px] mt-[48px] xl:mt-[60px] px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-[72px] xl:gap-0 pb-16 xl:pb-0">
        {projectsData.map((proj) => (
          <ProjectCard
            key={proj.id}
            {...proj}
            href={`/portfolio/${proj.slug}`}
          />
        ))}
      </div>

      {/* 3. Section Eyebrow preceding FAQ */}
      <div className="mt-[48px] xl:mt-[90px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* 4. FAQ Section */}
      <Faq />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
