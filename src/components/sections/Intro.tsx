import React from 'react';
import Image from 'next/image';
import Media from '@/components/ui/Media';
import PillButton from '@/components/ui/PillButton';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

export default function Intro() {
  return (
    <>
      <section className="relative w-full h-auto xl:h-[1240px] bg-bg select-none px-[20px] md:px-[28px] xl:px-0 py-12 xl:py-0 flex flex-col xl:block gap-8 xl:gap-0">
        {/* Portrait — Full width above statement on <1200px, Bleeding left on >=1200px */}
        <div
          className="w-full max-w-[500px] h-[500px] md:h-[640px] mx-auto xl:mx-0 xl:w-[476px] xl:h-[806px] xl:absolute xl:-left-[16px] xl:top-[56px] rounded-[12px] overflow-hidden z-20 bg-surface border border-line-solid shadow-2xl relative shrink-0"
          data-cursor="view"
        >
          <Media
            src="/team/arjun.jpg"
            alt="Studio engineering craft"
            w={476}
            h={806}
            radius={12}
          />
        </div>

        {/* Statement — Senior team of four statement */}
        <div className="xl:absolute xl:left-[530px] xl:top-[96px] w-full max-w-[950px] z-10">
          <p className="t-heading-sm text-fg">
            A senior team of four
            <sup
              style={{ fontSize: '0.42em', verticalAlign: 'super' }}
              className="font-normal tracking-normal ml-0.5"
            >
              ™
            </sup>{' '}
            turning ideas into shipped web, mobile and AI products — in weeks, not quarters.
          </p>
        </div>

        {/* Contact PillButton */}
        <div className="xl:absolute xl:left-[530px] xl:top-[250px] z-10">
          <PillButton href="/contact">Book a Call</PillButton>
        </div>

        {/* Word Rail positioned at top: 438px on desktop, or normal flow in mobile/tablet */}
        <div className="xl:absolute xl:top-[438px] xl:left-0 w-full z-[5] pointer-events-none my-4 xl:my-0">
          <WordRail
            items={['Independent', 'Senior Team', 'Product Studio', 'India-Based']}
          />
        </div>

        {/* Core Tech Stack Logo Grid — 5 cols × 2 rows on >=1200px, 2-column on <1200px */}
        <div className="w-full max-w-[500px] xl:max-w-none xl:absolute xl:left-[530px] xl:top-[558px] z-10">
          <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block mb-3">
            Core Production Stack
          </span>

          {/* Mobile & Tablet 2-Column Grid (<1200px) */}
          <div className="grid grid-cols-2 gap-3 xl:hidden w-full">
            <div className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center border border-line-solid">
              <span className="text-[18px] font-semibold text-fg">Supabase</span>
            </div>
            <div className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center border border-line-solid">
              <span className="text-[18px] font-semibold text-fg">Vercel</span>
            </div>
            <div className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center border border-line-solid">
              <span className="text-[18px] font-semibold text-fg">OpenAI</span>
            </div>
            <div className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center border border-line-solid">
              <span className="text-[18px] font-semibold text-fg">React 19</span>
            </div>
            <div className="col-span-2 h-[80px] bg-surface rounded-[12px] flex items-center justify-center border border-line-solid">
              <span className="text-[18px] font-semibold text-fg">Flutter</span>
            </div>
          </div>

          {/* Desktop 5×2 Checkerboard Grid (>=1200px) */}
          <div
            className="hidden xl:grid w-[925px]"
            style={{
              gridTemplateColumns: 'repeat(5, 185px)',
              gridTemplateRows: '130px 140px',
            }}
          >
            {/* Row 1, Col 1: Supabase */}
            <div
              data-cursor="link"
              className="col-start-1 row-start-1 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex items-center justify-center select-none"
            >
              <span className="text-[20px] font-semibold text-fg">Supabase</span>
            </div>

            {/* Row 1, Col 3: Vercel */}
            <div
              data-cursor="link"
              className="col-start-3 row-start-1 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex items-center justify-center select-none"
            >
              <span className="text-[20px] font-semibold text-fg">Vercel</span>
            </div>

            {/* Row 1, Col 5: OpenAI */}
            <div
              data-cursor="link"
              className="col-start-5 row-start-1 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex items-center justify-center select-none"
            >
              <span className="text-[20px] font-semibold text-fg">OpenAI</span>
            </div>

            {/* Row 2, Col 2: React 19 */}
            <div
              data-cursor="link"
              className="col-start-2 row-start-2 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex items-center justify-center select-none"
            >
              <span className="text-[20px] font-semibold text-fg">React 19</span>
            </div>

            {/* Row 2, Col 4: Flutter */}
            <div
              data-cursor="link"
              className="col-start-4 row-start-2 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex items-center justify-center select-none"
            >
              <span className="text-[20px] font-semibold text-fg">Flutter</span>
            </div>
          </div>

          {/* Second Grid: Client Partners */}
          <div className="mt-8 xl:mt-10">
            <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block mb-3">
              Verified Client Partners
            </span>

            {/* Mobile & Tablet Client Grid (<1200px) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xl:hidden w-full">
              <div className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center gap-3 px-4 border border-line-solid">
                <img src="/clients/prayas.jpg" alt="Prayas NGO" className="w-8 h-8 rounded-full object-cover" />
                <span className="text-[15px] font-semibold text-fg">Prayas NGO</span>
              </div>
              <div className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center gap-3 px-4 border border-line-solid">
                <img src="/clients/gla-canteen.png" alt="GLA Canteen" className="w-8 h-8 rounded-full object-contain" />
                <span className="text-[15px] font-semibold text-fg">GLA Canteen</span>
              </div>
              <div className="h-[90px] bg-surface rounded-[12px] flex items-center justify-center gap-3 px-4 border border-line-solid">
                <img src="/clients/earth-travels.png" alt="Earth Travels India" className="w-8 h-8 rounded-full object-contain" />
                <span className="text-[15px] font-semibold text-fg">Earth Travels</span>
              </div>
            </div>

            {/* Desktop 5×2 Client Checkerboard Grid (>=1200px) */}
            <div
              className="hidden xl:grid w-[925px]"
              style={{
                gridTemplateColumns: 'repeat(5, 185px)',
                gridTemplateRows: '130px 140px',
              }}
            >
              {/* Row 1, Col 1: Prayas NGO */}
              <div
                data-cursor="link"
                className="col-start-1 row-start-1 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center gap-2 p-3 select-none"
              >
                <img src="/clients/prayas.jpg" alt="Prayas NGO" className="w-9 h-9 rounded-full object-cover" />
                <span className="text-[15px] font-semibold text-fg text-center leading-tight">Prayas NGO</span>
              </div>

              {/* Row 1, Col 3: GLA Canteen */}
              <div
                data-cursor="link"
                className="col-start-3 row-start-1 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center gap-2 p-3 select-none"
              >
                <img src="/clients/gla-canteen.png" alt="GLA Canteen" className="w-9 h-9 rounded-full object-contain" />
                <span className="text-[15px] font-semibold text-fg text-center leading-tight">GLA Canteen</span>
              </div>

              {/* Row 1, Col 5: Earth Travels India */}
              <div
                data-cursor="link"
                className="col-start-5 row-start-1 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center gap-2 p-3 select-none"
              >
                <img src="/clients/earth-travels.png" alt="Earth Travels India" className="w-9 h-9 rounded-full object-contain" />
                <span className="text-[14px] font-semibold text-fg text-center leading-tight">Earth Travels</span>
              </div>

              {/* Row 2, Col 2: 10,000+ Reach */}
              <div
                data-cursor="link"
                className="col-start-2 row-start-2 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center p-3 select-none text-center"
              >
                <span className="text-[17px] font-bold text-accent">10,000+</span>
                <span className="text-[12px] text-fg-muted font-medium">Community Reach</span>
              </div>

              {/* Row 2, Col 4: Zero Discrepancies */}
              <div
                data-cursor="link"
                className="col-start-4 row-start-2 bg-surface border border-line-solid hover:bg-surface-2 transition-colors duration-200 rounded-[12px] flex flex-col items-center justify-center p-3 select-none text-center"
              >
                <span className="text-[17px] font-bold text-accent">Zero</span>
                <span className="text-[12px] text-fg-muted font-medium">Stock Discrepancies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Eyebrow following Intro */}
      <SectionEyebrow
        left={<>SELECTED WORK <span lang="hi">परियोजनाएँ</span></>}
        index="(GLD® — 02)"
        right="SHIPPED PROJECTS"
      />
    </>
  );
}
