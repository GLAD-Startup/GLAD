import React from 'react';
import Image from 'next/image';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

export default function Profile() {
  return (
    <>
      <section id="profile" className="relative w-full h-auto xl:h-[1560px] bg-bg select-none py-12 xl:py-0 px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-12 xl:gap-0">
        <h2 className="sr-only">Studio Profile</h2>

        {/* Media Item A: Team Photo 1 (Arjun) */}
        <div
          data-cursor="view"
          className="w-full max-w-[380px] h-[440px] mx-auto xl:mx-0 xl:w-[326px] xl:h-[480px] xl:absolute xl:left-[105px] xl:top-[155px] rounded-[12px] overflow-hidden z-[1] bg-surface border border-line-solid shadow-2xl relative shrink-0"
        >
          <Image
            src="/team/arjun.jpg"
            alt="Arjun Singh Rajput — CEO & Head of Strategy"
            fill
            unoptimized
            className="object-cover block"
          />
        </div>

        {/* Statement Text with mix-blend-mode: difference (White text inverts over #FBFBF9 to #040406, and inverts over photos) */}
        <div
          className="-mt-[160px] xl:mt-0 xl:absolute xl:left-[232px] xl:top-[400px] w-full max-w-[950px] z-10 pointer-events-none relative px-2 xl:px-0"
          style={{ mixBlendMode: 'difference' }}
        >
          <p className="t-statement text-white">
            We build products, not just
            <br />
            software. A small senior team
            <br />
            that ships every week, works
            <br />
            on few projects at a time, and
            <br />
            treats your product like our own.
          </p>
        </div>

        {/* Media Item B: Team Photo 2 (Jatin) */}
        <div
          data-cursor="view"
          className="w-full max-w-[440px] h-[520px] mx-auto xl:mx-0 xl:w-[452px] xl:h-[660px] xl:absolute xl:right-[68px] xl:top-[380px] rounded-[12px] overflow-hidden z-[1] bg-surface border border-line-solid shadow-2xl relative shrink-0"
        >
          <Image
            src="/team/jatin.jpg"
            alt="Jatin Khetan — CFO & Head of Product & Design"
            fill
            unoptimized
            className="object-cover block"
          />
        </div>

        {/* Media Item C: Team Photo 3 / Culture Video (Somesh) */}
        <div
          data-cursor="view"
          className="w-full max-w-[380px] h-[440px] mx-auto xl:mx-0 xl:w-[326px] xl:h-[480px] xl:absolute xl:left-[40px] xl:top-[842px] rounded-[12px] overflow-hidden z-[1] bg-surface border border-line-solid shadow-2xl relative shrink-0"
        >
          {/* TODO: Replace with studio culture/working video when available */}
          <Image
            src="/team/somesh.jpeg"
            alt="Somesh Rajput — CTO & Head of Engineering"
            fill
            unoptimized
            className="object-cover block"
          />
        </div>

        {/* Closing Block */}
        <div className="w-full max-w-[480px] mx-auto xl:mx-0 xl:absolute xl:left-[575px] xl:top-[1240px] z-10">
          <p className="t-body text-fg-muted">
            We started GLAD studio because founders kept losing months to agencies that overpromised and left them with code they couldn&apos;t maintain. So we built something different —{' '}
            <strong className="text-fg font-semibold">
              a tiny, senior team
            </strong>{' '}
            that works on a small number of projects at a time and ships every week.
          </p>
          <div className="mt-[30px]">
            <PillButton href="/about">About the Studio</PillButton>
          </div>
        </div>
      </section>

      {/* Section Eyebrow (GLD® — 05 duplicate intentional) */}
      <SectionEyebrow
        left={<>HOW WE SHIP <span lang="hi">प्रक्रिया</span></>}
        index="(GLD® — 05)"
        right="PREDICTABLE PROCESS"
      />
    </>
  );
}
