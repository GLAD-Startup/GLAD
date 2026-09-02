'use client';

import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArticleCard from '@/components/ui/ArticleCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Marquee from '@/components/ui/Marquee';
import { articlesData } from '@/data/insights';

export const RECEDE_CONSTANTS = {
  scaleEnd: 0.58,
  opacityCutoff: 0.92,
  start: 'top 18%',
  end: 'top -50%',
  scrub: 0.6,
} as const;

export interface ArticleCardConfig {
  id: number;
  coverW: number;
  coverH: number;
  x: number;
  y: number;
}

export const articleConfigs: ArticleCardConfig[] = [
  { id: 1, coverW: 712, coverH: 597, x: 44, y: 60 },
  { id: 2, coverW: 728, coverH: 610, x: 28, y: 760 },
  { id: 3, coverW: 660, coverH: 550, x: 96, y: 1470 },
  { id: 4, coverW: 728, coverH: 600, x: 28, y: 2130 },
  { id: 5, coverW: 690, coverH: 578, x: 66, y: 2820 },
];

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Journal() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Responsive matchMedia for Desktop (>=1024px)
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (isDesktop && !reduceMotion) {
            const cardWrappers = container.querySelectorAll<HTMLElement>('.card-wrapper');

            cardWrappers.forEach((cardEl, idx) => {
              const cardGroup = cardEl.querySelector<HTMLElement>('.card-group');
              if (!cardGroup) return;

              const config = articleConfigs[idx];
              if (!config) return;

              // transform-origin: cover's right edge vertical center
              cardGroup.style.transformOrigin = `${config.coverW}px ${Math.round(config.coverH / 2)}px`;

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: cardEl,
                  start: RECEDE_CONSTANTS.start,
                  end: RECEDE_CONSTANTS.end,
                  scrub: RECEDE_CONSTANTS.scrub,
                  onUpdate: (self) => {
                    const rawProgress = self.progress;
                    // Opacity reaches 0 at 82% of the range (0.82)
                    const scrollOpacity = Math.max(
                      0,
                      Math.min(1, 1 - rawProgress / RECEDE_CONSTANTS.opacityCutoff)
                    );

                    cardEl.style.setProperty(
                      '--scroll-opacity',
                      scrollOpacity.toFixed(4)
                    );

                    // Constraint: Hover effects only fire on cards whose scroll opacity > 0.5
                    if (scrollOpacity <= 0.5) {
                      cardEl.style.pointerEvents = 'none';
                    } else {
                      cardEl.style.pointerEvents = 'auto';
                    }
                  },
                },
              });

              // Scale: 1 -> 0.58 across full range (linear)
              tl.to(
                cardGroup,
                {
                  scale: RECEDE_CONSTANTS.scaleEnd,
                  ease: 'none',
                  duration: 1,
                },
                0
              );
            });
          }
        }
      );

      // ScrollTrigger refresh after document.fonts.ready
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        id="journal"
        className="relative w-full bg-bg select-none"
      >
        <h2 className="sr-only">Engineering Insights</h2>

        {/* 1. Top Section Marquee Carousel Header */}
        <div className="relative w-full overflow-hidden py-3 xl:py-6 bg-bg border-b border-line">
          <Marquee speed={26}>
            <span className="t-marquee text-fg pr-[60px] xl:pr-[100px] whitespace-nowrap inline-flex items-center">
              Article
              <span className="inline-flex items-center mx-[0.06em] -translate-y-[0.10em]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[0.40em] h-[0.40em] inline-block"
                  aria-label="Copyright"
                >
                  <circle cx="12" cy="12" r="9.5" />
                  <path d="M14.5 9.2a3.6 3.6 0 0 0-5 0 3.6 3.6 0 0 0 0 5.6 3.6 3.6 0 0 0 5 0" />
                </svg>
              </span>
              Feature
            </span>
          </Marquee>
        </div>

        {/* 2. 5 Scattered Overlapping Article Cards */}
        <div
          ref={cardsContainerRef}
          className="relative w-full h-auto xl:h-[3620px] py-10 md:py-16 xl:py-0 px-[20px] md:px-[28px] xl:px-[40px] flex flex-col xl:block gap-8 sm:gap-12 md:gap-16 xl:gap-0"
        >
          {articlesData.slice(0, 5).map((article, idx) => {
            const config = articleConfigs[idx];
            return (
              <ArticleCard
                key={article.id}
                id={idx + 1}
                article={article}
                coverW={config.coverW}
                coverH={config.coverH}
                x={config.x}
                y={config.y}
                isDimmed={hoveredCard !== null && hoveredCard !== idx + 1}
                onHover={setHoveredCard}
              />
            );
          })}
        </div>
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
