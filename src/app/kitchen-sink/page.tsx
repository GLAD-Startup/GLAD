import React from 'react';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import WordRail from '@/components/ui/WordRail';
import PillButton from '@/components/ui/PillButton';
import Marquee from '@/components/ui/Marquee';
import Divider from '@/components/ui/Divider';
import Media from '@/components/ui/Media';

export default function KitchenSinkPage() {
  return (
    <main className="min-h-screen bg-bg text-fg pt-[116px] pb-24 px-10 space-y-16">
      <div className="space-y-4">
        <h1 className="t-heading text-fg">Component Kitchen Sink</h1>
        <p className="t-body text-fg-muted">
          Validation page for core reusable components, custom cursor modes, and persistent navigation.
        </p>
      </div>

      {/* Cursor Interactive States Demo */}
      <section className="p-6 border border-line-solid rounded-[14px] bg-surface space-y-4">
        <span className="t-eyebrow text-accent block">Interactive Cursor Testing</span>
        <div className="flex flex-wrap items-center gap-6">
          <div
            data-cursor="link"
            className="px-5 py-3 border border-line rounded-[10px] text-fg t-label font-semibold select-none bg-surface-2"
          >
            Hover me: data-cursor=&quot;link&quot; (2.2× scale)
          </div>
          <div
            data-cursor="view"
            className="px-5 py-3 border border-line rounded-[10px] text-fg t-label font-semibold select-none bg-surface-2"
          >
            Hover me: data-cursor=&quot;view&quot; (Pill &apos;VIEW&apos;)
          </div>
        </div>
      </section>

      {/* 1. SectionEyebrow */}
      <section className="space-y-4">
        <span className="t-eyebrow text-accent block">01 / Section Eyebrow</span>
        <SectionEyebrow
          left="2026"
          index="01"
          right="SERVICES & CAPABILITIES"
        />
      </section>

      {/* 2. WordRail with Overlapping Media Demonstration */}
      <section className="space-y-4">
        <span className="t-eyebrow text-accent block">02 / Word Rail & Media Overlap (with data-cursor=&quot;view&quot;)</span>
        <div className="relative pt-6 pb-12">
          {/* WordRail sits at z-0 */}
          <WordRail items={['ENGINEERING', 'AI SYSTEMS', 'SAAS PLATFORMS', 'AUTOMATION']} />
          
          {/* Overlapping Media card at z-10 */}
          <div className="relative z-10 -mt-4 flex gap-6 justify-center">
            <Media
              data-cursor="view"
              src="https://picsum.photos/seed/glad-demo-1/600/380"
              alt="Editorial sample photo"
              w={420}
              h={260}
              radius={12}
            />
            <Media
              data-cursor="view"
              src="https://picsum.photos/seed/glad-demo-2/600/380"
              alt="Editorial sample photo 2"
              w={420}
              h={260}
              radius={10}
            />
          </div>
        </div>
      </section>

      {/* 3. Marquee */}
      <section className="space-y-4">
        <span className="t-eyebrow text-accent block">03 / GSAP Infinite Marquee</span>
        <div className="border-y border-line py-4">
          <Marquee speed={24}>
            <span className="t-marquee text-fg px-8">
              FEATURED WORKS — SELECTED PROJECTS —&nbsp;
            </span>
          </Marquee>
        </div>
      </section>

      {/* 4. PillButton */}
      <section className="space-y-4">
        <span className="t-eyebrow text-accent block">04 / Pill Button</span>
        <div className="flex gap-4 items-center">
          <PillButton href="/contact">
            Get In Touch
          </PillButton>
          <PillButton href="https://fontshare.com">
            External Link
          </PillButton>
        </div>
      </section>

      {/* 5. Divider */}
      <section className="space-y-4">
        <span className="t-eyebrow text-accent block">05 / Divider</span>
        <Divider />
      </section>

      {/* 6. Media Component (Video & Image) */}
      <section className="space-y-4">
        <span className="t-eyebrow text-accent block">06 / Media (Image & Video)</span>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="t-label text-fg-muted block mb-2">Image (14px radius with data-cursor=&quot;view&quot;)</span>
            <Media
              data-cursor="view"
              src="https://picsum.photos/seed/glad-demo-3/800/600"
              alt="Editorial Photography"
              w="100%"
              h={340}
              radius={14}
            />
          </div>
          <div>
            <span className="t-label text-fg-muted block mb-2">Video (12px radius with data-cursor=&quot;view&quot;)</span>
            <Media
              data-cursor="view"
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              video
              w="100%"
              h={340}
              radius={12}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
