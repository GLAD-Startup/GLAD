'use client';

import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export interface Card3DTransform {
  xVw: number;
  yVh: number;
  zPx: number;
  rotateY: number;
  rotateX: number;
  scale: number;
  opacity: number;
  zIndex: number;
  shadowAlpha: number;
}

interface PathWaypoint {
  s: number;
  x: number;
  y: number;
  z: number;
  rotY: number;
  rotX: number;
  scale: number;
  opacity: number;
}

/**
 * Full-Viewport Serpentine 3D Waypoints:
 * 1. Offscreen Lower-Right (s: 0.00 -> 0.16)
 * 2. Bottom Middle Waypoint (s: 0.36) -> Curves and turns UP
 * 3. Center Page Focus (s: 0.52) -> Flat facing camera, z: 0, scale: 1.02
 * 4. Top Middle Waypoint (s: 0.68) -> Curves and turns LEFT
 * 5. Top Left Exit & Fade (s: 0.84 -> 1.00)
 */
const WAYPOINTS: PathWaypoint[] = [
  { s: 0.00, x: 46,  y: 62,  z: -280, rotY: -38, rotX: 6, scale: 0.74, opacity: 0 },
  { s: 0.16, x: 38,  y: 38,  z: -180, rotY: -34, rotX: 5, scale: 0.82, opacity: 1 },
  { s: 0.36, x: 0,   y: 22,  z: -60,  rotY: -4,  rotX: 2, scale: 0.96, opacity: 1 },
  { s: 0.52, x: 0,   y: 0,   z: 0,    rotY: 0,   rotX: 0, scale: 1.02, opacity: 1 },
  { s: 0.68, x: 0,   y: -22, z: -60,  rotY: 4,   rotX: -2, scale: 0.96, opacity: 1 },
  { s: 0.84, x: -38, y: -38, z: -180, rotY: 34,  rotX: -5, scale: 0.82, opacity: 1 },
  { s: 1.00, x: -46, y: -62, z: -280, rotY: 38,  rotX: -6, scale: 0.74, opacity: 0 },
];

export function evaluateCardPath(s: number): Card3DTransform {
  if (s <= WAYPOINTS[0].s) {
    const w = WAYPOINTS[0];
    return {
      xVw: w.x,
      yVh: w.y,
      zPx: w.z,
      rotateY: w.rotY,
      rotateX: w.rotX,
      scale: w.scale,
      opacity: 0,
      zIndex: 1,
      shadowAlpha: 0,
    };
  }

  if (s >= WAYPOINTS[WAYPOINTS.length - 1].s) {
    const w = WAYPOINTS[WAYPOINTS.length - 1];
    return {
      xVw: w.x,
      yVh: w.y,
      zPx: w.z,
      rotateY: w.rotY,
      rotateX: w.rotX,
      scale: w.scale,
      opacity: 0,
      zIndex: 1,
      shadowAlpha: 0,
    };
  }

  let idx = 0;
  for (let i = 0; i < WAYPOINTS.length - 1; i++) {
    if (s >= WAYPOINTS[i].s && s <= WAYPOINTS[i + 1].s) {
      idx = i;
      break;
    }
  }

  const p0 = WAYPOINTS[idx];
  const p1 = WAYPOINTS[idx + 1];
  const segProgress = (s - p0.s) / (p1.s - p0.s);

  // Smoothstep interpolation
  const t = segProgress * segProgress * (3 - 2 * segProgress);

  const xVw = p0.x + (p1.x - p0.x) * t;
  const yVh = p0.y + (p1.y - p0.y) * t;
  const zPx = p0.z + (p1.z - p0.z) * t;
  const rotateY = p0.rotY + (p1.rotY - p0.rotY) * t;
  const rotateX = p0.rotX + (p1.rotX - p0.rotX) * t;
  const scale = p0.scale + (p1.scale - p0.scale) * t;
  const opacity = p0.opacity + (p1.opacity - p0.opacity) * t;

  const centerDist = Math.abs(s - 0.52);
  const zIndex = Math.max(1, Math.round(25 - centerDist * 20));
  const shadowAlpha = opacity * 0.35 * Math.max(0, 1 - centerDist * 1.5);

  return {
    xVw,
    yVh,
    zPx,
    rotateY,
    rotateX,
    scale,
    opacity,
    zIndex,
    shadowAlpha,
  };
}

const productCards = [
  {
    id: 1,
    num: '01',
    label: 'GLAD HMS',
    tagline: 'Modular Hotel Management & Operations Platform',
    desc: 'Full-stack enterprise hospitality OS with real-time room inventory, folio management, and multi-property RBAC.',
    stats: '100% MODULAR · ROW-LEVEL LOCKS · SCOPED RBAC',
    href: '/products/glad-hms',
    src: '/products/hotel-building.png',
  },
  {
    id: 2,
    num: '02',
    label: 'SettleDesk',
    tagline: 'Enterprise Brokerage Operating System',
    desc: 'Unified transaction management platform connecting 500+ commercial brokers with automated settlement pipelines.',
    stats: '500+ BROKERS · 10,000+ UNITS · 99.9% UPTIME',
    href: '/products/settledesk',
    src: '/products/building.png',
  },
  {
    id: 3,
    num: '03',
    label: 'Prayas App',
    tagline: 'Mobile Health Logistics & Donor Platform',
    desc: 'Cross-platform mobile application for real-time equipment lending workflows, donor-recipient matching, and blood drives.',
    stats: 'REACT NATIVE · 10,000+ REACH · REAL-TIME SYNC',
    href: '/work/prayas-app',
    src: '/work/prayas-app/phone-3d.png',
  },
  {
    id: 4,
    num: '04',
    label: 'Stock Manager',
    tagline: 'Automated Commission & Inventory Engine',
    desc: 'Real-time multi-warehouse inventory tracker with automated ledger reconciliation and multi-division management.',
    stats: 'REAL-TIME LEDGER · MULTI-TENANT · AUDIT READY',
    href: '/work/stock-management',
    src: '/work/stock-management/properties-3d.png',
  },
  {
    id: 5,
    num: '05',
    label: 'AI Interviewer',
    tagline: 'GenAI Voice & Simulation Assessment',
    desc: 'Autonomous multimodal interviewer simulating realistic technical and executive assessments with instant rubric scoring.',
    stats: 'LLM VOICE PIPELINE · ADAPTIVE RUBRICS · REAL-TIME STT',
    href: '/work/ai-mock-interview',
    src: '/work/ai-mock-interview/hero-3d.png',
  },
  {
    id: 6,
    num: '06',
    label: 'Lead Intelligence',
    tagline: 'High-Throughput Lead Discovery Pipeline',
    desc: 'Automated lead sourcing platform validating decision-makers, verifying websites, and generating personalized AI outreach.',
    stats: '1,000s LEADS/DAY · AI ENRICHMENT · ASYNC PIPELINES',
    href: '/work/lead-enrichment',
    src: '/work/lead-enrichment/modern-office-facade.png',
  },
];

function PerspectiveCardContent({
  src,
  video = false,
  label,
  subtitle,
  w,
}: {
  src: string;
  video?: boolean;
  label: string;
  subtitle?: string;
  w: number;
}) {
  return (
    <div className="w-full h-full relative group bg-surface overflow-hidden select-none">
      {/* Media with smooth scale and dimming matching Section 2 */}
      {video ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover block transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:opacity-75"
        />
      ) : (
        <Image
          src={src}
          alt={`${label} platform visual`}
          fill
          unoptimized
          className="object-cover block transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:opacity-75"
        />
      )}

      {/* Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/15 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

      {/* Product Wordmark Overlay on Center (fades on hover as ribbon expands) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none p-4 text-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
        <span
          className="text-white font-semibold leading-tight select-none drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] tracking-[-0.02em]"
          style={{
            fontSize: `clamp(20px, ${Math.round(w * 0.075)}px, 34px)`,
          }}
        >
          {label}
        </span>
      </div>

      {/* White Ribbon Opening & Expanding Vertically on Hover (Exact Match to Section 2 Selected Works) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
        <div className="w-full h-[32px] md:h-[36px] bg-[#FBFBF9] border-y border-line-solid flex items-center justify-center px-4 origin-center scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm">
          <span className="text-[12px] md:text-[13px] font-medium tracking-[-0.01em] text-fg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {subtitle || label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeCard = productCards[activeIdx] || productCards[0];

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const bottomLeftEl = bottomLeftRef.current;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop:
            '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
          isReduced: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop } = context.conditions as {
            isDesktop: boolean;
            isReduced: boolean;
          };

          if (isDesktop && cards.length > 0) {
            let lastActiveIndex = 0;
            let lastSwitchTime = 0;
            const totalCards = productCards.length;
            const stagger = 0.34;
            const totalSpan = 1 + (totalCards - 1) * stagger;

            // Render all cards along the full-stage S-curve
            const renderField = (progress: number) => {
              const currentT = progress * totalSpan;
              let minCenterDist = Infinity;
              let closestIndex = 0;

              cards.forEach((cardEl, idx) => {
                if (!cardEl) return;
                const s = currentT - idx * stagger;
                const {
                  xVw,
                  yVh,
                  zPx,
                  rotateY,
                  rotateX,
                  scale,
                  opacity,
                  zIndex,
                  shadowAlpha,
                } = evaluateCardPath(s);

                cardEl.style.transform = `translate3d(${xVw}vw, ${yVh}vh, ${zPx}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`;
                cardEl.style.boxShadow = `0 24px 60px -20px rgba(10, 10, 11, ${shadowAlpha.toFixed(3)})`;
                cardEl.style.opacity = opacity.toFixed(3);
                cardEl.style.zIndex = `${zIndex}`;
                cardEl.style.pointerEvents = opacity > 0.4 ? 'auto' : 'none';

                if (s >= 0 && s <= 1) {
                  const dist = Math.abs(s - 0.52);
                  if (dist < minCenterDist) {
                    minCenterDist = dist;
                    closestIndex = idx;
                  }
                }
              });

              // Slide-up animation for Bottom-Left info panel as animation starts
              if (progress > 0.02) {
                const introFactor = Math.min(1, (progress - 0.02) / 0.10);
                const ease = introFactor * (2 - introFactor);
                if (bottomLeftEl) {
                  bottomLeftEl.style.opacity = `${ease}`;
                  bottomLeftEl.style.transform = `translate3d(0, ${(1 - ease) * 24}px, 0)`;
                }
              } else {
                if (bottomLeftEl) {
                  bottomLeftEl.style.opacity = '0';
                  bottomLeftEl.style.transform = 'translate3d(0, 24px, 0)';
                }
              }

              // Debounce active card index switch
              const now = performance.now();
              if (
                closestIndex !== lastActiveIndex &&
                now - lastSwitchTime > 280
              ) {
                lastActiveIndex = closestIndex;
                lastSwitchTime = now;
                setActiveIdx(closestIndex);
              }
            };

            const setWillChange = (active: boolean) => {
              cards.forEach((cardEl) => {
                if (cardEl) {
                  cardEl.style.willChange = active
                    ? 'transform, opacity'
                    : 'auto';
                }
              });
            };

            // Set initial state (all offscreen in lower right, panel hidden)
            renderField(0);

            // Drive continuous 3D scroll scrub
            ScrollTrigger.create({
              trigger: section,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.2,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                renderField(self.progress);
              },
              onEnter: () => {
                setWillChange(true);
                renderField(0);
              },
              onEnterBack: () => {
                setWillChange(true);
              },
              onLeave: () => {
                setWillChange(false);
              },
              onLeaveBack: () => {
                setWillChange(false);
                renderField(0);
              },
            });
          }
        }
      );

      // Refresh ScrollTrigger once fonts are ready
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="products"
        className="relative w-full h-auto min-[1024px]:h-[800vh] bg-bg select-none"
      >
        {/* Sticky Stage on Desktop */}
        <div className="stage min-[1024px]:sticky min-[1024px]:top-0 min-[1024px]:h-screen w-full overflow-hidden min-[1024px]:[perspective:1400px] min-[1024px]:[perspective-origin:50%_50%] [isolation:isolate] flex flex-col justify-center relative">
          
          {/* 1. Extreme Top Right: Main Headline & Section Identifier */}
          <div className="hidden min-[1024px]:flex absolute top-[90px] xl:top-[120px] right-[20px] md:right-[28px] xl:right-[40px] max-w-[440px] z-30 pointer-events-auto flex-col items-start text-left">
            <div className="text-[11px] font-medium tracking-[0.045em] uppercase text-accent mb-2">
              PROPRIETARY SYSTEMS (GLD® — 08)
            </div>
            <h3 className="t-heading-sm text-fg leading-[1.12]">
              Software platforms<br />built to scale.
            </h3>
            <p className="t-body-sm text-fg-muted mt-2 max-w-[340px]">
              Proprietary SaaS systems designed, engineered, and operated by GLAD studio.
            </p>
          </div>

          {/* 2. Extreme Bottom Left: Combined Project Name, Tagline, Specs & Link (Slides up as scroll starts) */}
          <div
            ref={bottomLeftRef}
            className="hidden min-[1024px]:flex absolute bottom-[90px] xl:bottom-[120px] left-[20px] md:left-[28px] xl:left-[40px] max-w-[460px] z-30 pointer-events-auto flex-col items-start text-left transition-all duration-300 will-change-transform opacity-0 translate-y-6"
          >
            <div className="text-[11px] font-semibold tracking-[0.045em] uppercase text-accent mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              ACTIVE PLATFORM ({activeCard.num} / 06)
            </div>
            <h4 className="text-[26px] xl:text-[32px] font-medium text-fg tracking-[-0.02em] leading-tight">
              {activeCard.label}
            </h4>
            <p className="text-[13.5px] text-fg font-normal mt-1 max-w-[400px] leading-snug">
              {activeCard.tagline}
            </p>
            <p className="text-[13px] text-fg-muted mt-2 max-w-[420px] leading-relaxed">
              {activeCard.desc}
            </p>
            <div className="mt-3.5 flex items-center gap-3 flex-wrap">
              <span className="text-[10.5px] uppercase tracking-[0.04em] text-fg-dim font-medium border border-line-solid px-2.5 py-1 rounded-full bg-surface">
                {activeCard.stats}
              </span>
              <Link
                href={activeCard.href}
                data-cursor="link"
                className="text-[13px] font-medium text-fg hover:text-accent transition-colors duration-200 inline-flex items-center gap-0.5"
              >
                Explore Platform ↗
              </Link>
            </div>
          </div>

          {/* 3. Full-Screen 3D Visual Stage */}
          <div className="field w-full h-full absolute inset-0 min-[1024px]:[transform-style:preserve-3d] min-[1024px]:block hidden pointer-events-none">
            {productCards.map((card, idx) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                data-cursor="view"
                className="perspective-card absolute [backface-visibility:hidden] [transform-style:preserve-3d] [transform-origin:50%_50%] rounded-[16px] overflow-hidden bg-surface border border-line-solid transition-[box-shadow] duration-200"
                style={{
                  width: '500px',
                  height: '320px',
                  marginLeft: '-250px',
                  marginTop: '-160px',
                  left: '50%',
                  top: '50%',
                }}
              >
                <PerspectiveCardContent
                  src={card.src}
                  label={card.label}
                  subtitle={card.tagline}
                  w={500}
                />
              </div>
            ))}
          </div>

          {/* Mobile Fallback Layout (< 1024px) */}
          <div className="min-[1024px]:hidden px-5 md:px-7 pt-12 pb-16 flex flex-col gap-6">
            <div className="text-left">
              <div className="text-[11px] font-medium tracking-[0.045em] uppercase text-accent mb-2">
                PROPRIETARY SYSTEMS (GLD® — 08)
              </div>
              <h3 className="t-heading-sm text-fg leading-[1.12]">
                Software platforms built to scale.
              </h3>
              <p className="t-body-sm text-fg-muted mt-2">
                Proprietary SaaS systems designed, engineered, and operated by GLAD studio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
              {productCards.map((card) => (
                <Link
                  key={card.id}
                  href={card.href}
                  data-cursor="link"
                  className="rounded-[16px] overflow-hidden bg-surface border border-line-solid relative flex flex-col group transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden">
                    <PerspectiveCardContent
                      src={card.src}
                      label={card.label}
                      subtitle={card.tagline}
                      w={480}
                    />
                  </div>
                  <div className="p-4 sm:p-5 bg-surface flex flex-col gap-2 flex-1 justify-between border-t border-line">
                    <div>
                      <div className="text-[10px] font-semibold tracking-wider text-accent uppercase">
                        {card.stats}
                      </div>
                      <p className="text-[13px] text-fg-muted mt-1 leading-snug">
                        {card.desc}
                      </p>
                    </div>
                    <div className="pt-2 text-[12.5px] font-medium text-fg group-hover:text-accent transition-colors duration-200 flex items-center gap-1">
                      <span>Explore Platform</span>
                      <span>↗</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Eyebrow (GLD® — 09 leading into Pricing) */}
      <SectionEyebrow
        left={<>ENGAGEMENT MODELS <span lang="hi">योजनाएँ</span></>}
        index="(GLD® — 09)"
        right="SCOPE & BUDGET"
      />
    </>
  );
}
