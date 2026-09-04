'use client';

import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArticleCard from '@/components/ui/ArticleCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Marquee from '@/components/ui/Marquee';
import PillButton from '@/components/ui/PillButton';
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

export interface JournalProps {
  isListingPage?: boolean;
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Journal({ isListingPage = false }: JournalProps) {
  const containerRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const displayedArticles = isListingPage ? articlesData : articlesData.slice(0, 3);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Entrance slide-up animation for Marquee Header on scroll
      if (marqueeContentRef.current) {
        gsap.fromTo(
          marqueeContentRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

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
  }, [displayedArticles.length]);

  return (
    <>
      <section
        ref={containerRef}
        id="journal"
        className="relative w-full bg-bg select-none"
      >
        <h2 className="sr-only">Engineering Insights</h2>

        {/* 1. Top Section Marquee Carousel Header */}
        <div className="relative w-full overflow-hidden py-5 xl:py-7 bg-surface/30 border-b border-line">
          <div ref={marqueeContentRef} className="will-change-transform">
            <Marquee speed={24}>
              <div className="flex items-center gap-6 md:gap-10 pr-[60px] md:pr-[90px] whitespace-nowrap py-3">
                <span
                  className="text-fg font-normal tracking-tight inline-flex items-center pb-[0.24em] pt-[0.10em]"
                  style={{
                    fontSize: 'clamp(44px, 6.5vw, 96px)',
                    lineHeight: 1.18,
                    letterSpacing: '-0.035em',
                  }}
                >
                  Engineering Insights
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-accent text-white shadow-sm">
                  Technical Notes
                </span>
              <span className="text-fg-dim font-light text-[28px] select-none">/</span>
              <span
                className="text-fg-muted font-normal tracking-tight inline-flex items-center pb-[0.24em] pt-[0.10em]"
                style={{
                  fontSize: 'clamp(44px, 6.5vw, 96px)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.035em',
                }}
              >
                Article Features
              </span>
              <span className="text-fg-dim font-light text-[28px] select-none">/</span>
              <span className="text-fg-muted font-medium text-[13.5px] uppercase tracking-widest">
                GLAD STUDIO®
              </span>
              <span className="text-fg-dim font-light text-[28px] select-none">/</span>
            </div>
          </Marquee>
          </div>
        </div>

        {/* 2. Top Copy Block */}
        <div className="px-[20px] md:px-[28px] xl:px-0 ml-auto mr-[20px] md:mr-[28px] xl:mr-[40px] mt-[48px] max-w-[520px] space-y-[24px]">
          <p className="t-body text-fg-muted">
            {isListingPage
              ? 'Our complete library of engineering essays, system design teardowns, and autonomous AI architectures.'
              : 'Practitioner guides on autonomous agent loops, production RAG pipelines, fine-tuning tradeoffs, and scalable product engineering.'}
          </p>
          {!isListingPage && (
            <div>
              <PillButton href="/insights">See All Insights</PillButton>
            </div>
          )}
        </div>

        {/* 3. Scattered Overlapping Article Cards */}
        <div
          ref={cardsContainerRef}
          className={`relative w-full py-10 md:py-16 xl:py-0 px-[20px] md:px-[28px] xl:px-[40px] flex flex-col xl:block gap-8 sm:gap-12 md:gap-16 xl:gap-0 ${
            isListingPage
              ? 'h-auto xl:h-[3620px]'
              : 'h-auto xl:h-[2240px]'
          }`}
        >
          {displayedArticles.map((article, idx) => {
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
