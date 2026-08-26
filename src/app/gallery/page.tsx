import React from 'react';
import type { Metadata } from 'next';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import GalleryItem from '@/components/ui/GalleryItem';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Gallery — GLAD Studio',
  description: 'Visual fragments, spatial experiments, and architectural digital systems.',
};

// TODO: Replace remaining picsum seeds with custom GLAD design systems & UI motion captures
const galleryItems = [
  {
    id: 1,
    x: 40,
    y: 50,
    w: 680,
    h: 460,
    speed: 0.9,
    src: 'https://picsum.photos/seed/glad-g1/680/460',
    video: false,
  },
  {
    id: 2,
    x: 880,
    y: 180,
    w: 560,
    h: 420,
    speed: 1.3,
    src: 'https://picsum.photos/seed/glad-g2/560/420',
    video: false,
  },
  {
    id: 3,
    x: 320,
    y: 680,
    w: 420,
    h: 540,
    speed: 0.7,
    src: 'https://picsum.photos/seed/glad-g3/420/540',
    video: false,
  },
  {
    id: 4,
    x: 840,
    y: 780,
    w: 620,
    h: 400,
    speed: 1.1,
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    video: true,
  },
  {
    id: 5,
    x: 60,
    y: 1380,
    w: 480,
    h: 620,
    speed: 1.4,
    src: 'https://picsum.photos/seed/glad-g5/480/620',
    video: false,
  },
  {
    id: 6,
    x: 660,
    y: 1450,
    w: 780,
    h: 460,
    speed: 0.8,
    src: 'https://picsum.photos/seed/glad-g6/780/460',
    video: false,
  },
  {
    id: 7,
    x: 180,
    y: 2180,
    w: 540,
    h: 430,
    speed: 1.2,
    src: 'https://picsum.photos/seed/glad-g7/540/430',
    video: false,
  },
  {
    id: 8,
    x: 820,
    y: 2260,
    w: 640,
    h: 470,
    speed: 1.0,
    src: 'https://picsum.photos/seed/glad-g8/640/470',
    video: false,
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-bg select-none">
      {/* 1. Hero Title */}
      <div className="pt-[110px] xl:pt-[150px] px-[20px] md:px-[28px] xl:px-[40px]">
        <h1
          className="t-display-sm text-fg whitespace-nowrap"
          style={{
            fontSize: 'clamp(0px, 10vw, 150px)',
            lineHeight: 0.90,
            letterSpacing: '-0.035em',
          }}
        >
          Gallery©
        </h1>
      </div>

      {/* 2. Three Stacked PillButtons at Staggered Horizontal Offsets */}
      <div className="relative w-full h-auto xl:h-[180px] mt-[30px] px-[20px] md:px-[28px] xl:px-0 flex flex-wrap gap-4 xl:block">
        <div className="xl:absolute xl:left-[40px] xl:top-0">
          <PillButton href="/contact">Contact Now</PillButton>
        </div>
        <div className="xl:absolute xl:left-[620px] xl:top-[50px]">
          <PillButton href="/contact">Contact Now</PillButton>
        </div>
        <div className="xl:absolute xl:left-[1180px] xl:top-[100px]">
          <PillButton href="/contact">Contact Now</PillButton>
        </div>
      </div>

      {/* 3. Scattered Gallery Container (3200px on desktop, 72px gap on tablet/mobile) */}
      <div className="relative w-full h-auto xl:h-[3200px] mt-[48px] xl:mt-[40px] px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-[72px] xl:gap-0 pb-16 xl:pb-0">
        {galleryItems.map((item) => (
          <GalleryItem
            key={item.id}
            src={item.src}
            video={item.video}
            x={item.x}
            y={item.y}
            w={item.w}
            h={item.h}
            speed={item.speed}
            alt={`Gallery composition ${item.id}`}
          />
        ))}
      </div>

      {/* 4. Section Eyebrow preceding FAQ */}
      <div className="mt-[48px] xl:mt-[90px]">
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
