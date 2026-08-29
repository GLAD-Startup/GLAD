import React from 'react';
import type { Metadata } from 'next';
import { projectsData } from '@/data/work';
import WorkCard from '@/components/ui/WorkCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'All Works — GLAD Studio',
  description:
    'A curated archive of web applications, mobile platforms, and autonomous AI systems engineered by GLAD studio.',
  alternates: {
    canonical: 'https://gladstudio.net/work',
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg select-none pt-[84px]">
      {/* 1. Sticky Two-Column Editorial Works Section with Vertical Divider */}
      <div className="w-full border-b border-line">
        <div className="px-[20px] md:px-[28px] xl:px-[40px]">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] xl:grid-cols-[40%_60%]">
            
            {/* Left Column: Stationary / Sticky Header Vertically Centered */}
            <div className="py-[36px] md:py-[54px] xl:py-[72px] lg:pr-[36px] xl:pr-[48px]">
              <div className="lg:sticky lg:top-[calc(50vh-130px)] xl:top-[calc(50vh-140px)] self-start">
                <h1
                  className="text-fg font-normal leading-[0.88] tracking-[-0.04em] select-none"
                  style={{
                    fontSize: 'clamp(60px, 10.5vw, 155px)',
                  }}
                >
                  All
                  <br />
                  Works
                  <sup
                    className="font-normal tracking-normal ml-2 xl:ml-3 text-[0.24em] align-super"
                    style={{ verticalAlign: 'super' }}
                  >
                    ({projectsData.length})
                  </sup>
                </h1>
              </div>
            </div>

            {/* Right Column: Vertically Stacked Dual-Layer Project Cards with Vertical Divider Line */}
            <div className="lg:border-l lg:border-line pt-[36px] md:pt-[54px] xl:pt-[72px] pb-[60px] md:pb-[80px] xl:pb-[110px] lg:pl-[36px] xl:pl-[48px] flex flex-col gap-[52px] sm:gap-[68px] xl:gap-[88px] w-full">
              {projectsData.map((proj, idx) => (
                <WorkCard
                  key={proj.id}
                  project={proj}
                  priority={idx === 0}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 2. Section Eyebrow preceding FAQ pushed lower */}
      <div className="mt-[70px] md:mt-[100px] xl:mt-[140px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* 3. FAQ Section */}
      <Faq />

      {/* 4. Footer with Filmstrip Continuous Carousel */}
      <Footer />
    </main>
  );
}
