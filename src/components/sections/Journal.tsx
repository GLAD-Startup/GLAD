'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArticleCard from '@/components/ui/ArticleCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { articlesData } from '@/data/insights';

const articleConfigs = [
  { x: 85, y: 60, coverW: 686, coverH: 570, side: 'left' as const },
  { x: 322, y: 730, coverW: 450, coverH: 370, side: 'right' as const },
  { x: 57, y: 1390, coverW: 715, coverH: 600, side: 'left' as const },
  { x: 470, y: 2080, coverW: 520, coverH: 430, side: 'right' as const },
  { x: 120, y: 2700, coverW: 600, coverH: 480, side: 'left' as const },
];

export default function Journal() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = marqueeTrackRef.current;
    if (!track) return;

    let tween: gsap.core.Tween;

    const ctx = gsap.context(() => {
      tween = gsap.fromTo(
        track,
        { xPercent: 0 },
        {
          xPercent: -33.333333333333336,
          duration: 34,
          ease: 'none',
          repeat: -1,
        }
      );

      ScrollTrigger.create({
        trigger: containerRef.current || document.body,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const v = Math.abs(self.getVelocity ? self.getVelocity() : 0);
          const boost = Math.min(v / 350, 1.5);
          const targetScale = 1 + boost;

          gsap.to(tween, {
            timeScale: targetScale,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        id="journal"
        className="relative w-full h-auto xl:h-[3320px] bg-bg select-none py-16 xl:py-0 px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-[72px] xl:gap-0"
      >
        <h2 className="sr-only">Engineering Insights</h2>

        {/* 1. Background Giant Marquee */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full z-[1] overflow-hidden pointer-events-none opacity-20 select-none whitespace-nowrap">
          <div
            ref={marqueeTrackRef}
            className="flex flex-row w-max will-change-transform"
          >
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center shrink-0 pr-[60px] xl:pr-[100px]">
                <span
                  className="t-marquee text-fg"
                  style={{
                    fontSize: 'clamp(0px, 15vw, 260px)',
                    lineHeight: 0.90,
                    letterSpacing: '-0.035em',
                  }}
                >
                  Engineering Insights©
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 5 Scattered Overlapping Article Cards */}
        {articlesData.slice(0, 5).map((article, idx) => {
          const config = articleConfigs[idx];
          return (
            <ArticleCard
              key={article.id}
              id={idx + 1}
              title={article.title}
              coverSrc={article.coverSrc}
              portraitSrc={article.portraitSrc}
              author={article.author}
              readTime={article.readTime}
              excerpt={article.excerpt}
              category={article.category}
              href={`/article/${article.slug}`}
              x={config.x}
              y={config.y}
              coverW={config.coverW}
              coverH={config.coverH}
              side={config.side}
              isDimmed={hoveredCard !== null && hoveredCard !== idx + 1}
              onHover={setHoveredCard}
            />
          );
        })}
      </section>

      {/* Section Eyebrow */}
      <SectionEyebrow
        left={<>FREQUENTLY ASKED <span lang="hi">प्रश्नावली</span></>}
        index="(GLD® — 11)"
        right="QUESTIONS & ANSWERS"
      />
    </>
  );
}
