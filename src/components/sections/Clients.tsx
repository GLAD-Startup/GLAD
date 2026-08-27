'use client';

import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const CYCLE_ADVANCE = 1.0;

export function calculateCylindricalCarousel(index: number, progress: number) {
  const TOTAL_CARDS = 11;
  const TURNS = 1.0;

  // Base angle evenly spaced around the 3D cylinder
  const baseAngle = (index / TOTAL_CARDS) * 360;

  // Total current angle wrapped to [0, 360)
  const thetaDeg = gsap.utils.wrap(0, 360, baseAngle + progress * 360 * TURNS);
  const rad = (thetaDeg * Math.PI) / 180;

  const sinT = Math.sin(rad);
  const cosT = Math.cos(rad);

  // Cylinder radius in vw / px
  const R_x = 23; // vw
  const R_z = 520; // px

  // X coordinate along cylinder circumference
  const xVw = sinT * R_x - 4; // -4vw center bias to frame with right column

  // Y coordinate: Top-to-bottom helical progression
  // Front half (0 -> 180 deg): descends from top (-18vh) to bottom (+36vh)
  // Back half (180 -> 360 deg): ascends from bottom (+36vh) back to top (-18vh)
  let yVh: number;
  if (thetaDeg <= 180) {
    yVh = -18 + (thetaDeg / 180) * 54;
  } else {
    yVh = 36 - ((thetaDeg - 180) / 180) * 54;
  }

  // Z coordinate: front apex at 0px, back of cylinder at -1040px
  const z = (cosT - 1) * R_z;

  // Tangential 3D rotation around the cylinder
  const rotateY = -thetaDeg;

  // Atmospheric opacity: front hemisphere is crisp (1.0), back hemisphere fades
  let opacity = 1.0;
  if (cosT < -0.1) {
    opacity = Math.max(0, (cosT + 0.85) / 0.75);
  }

  // Shadow: full at front apex, fades as card turns away
  const shadowAlpha = Math.max(
    0,
    0.32 *
      Math.max(0, cosT * 0.75 + 0.25) *
      Math.max(0, 1 - Math.abs(sinT) * 0.35)
  );

  return {
    xVw,
    yVh,
    z,
    rotateY,
    shadowAlpha,
    opacity: Math.max(0, Math.min(1, opacity)),
    thetaDeg,
  };
}

const productCards = [
  {
    id: 1,
    w: 480,
    h: 320,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/products/hotel-building.png',
  },
  {
    id: 2,
    w: 220,
    h: 340,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/products/building.png',
  },
  {
    id: 3,
    w: 260,
    h: 180,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/products/hotel-building-transparent.png',
  },
  {
    id: 4,
    w: 200,
    h: 260,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/products/settledesk-logo.png',
  },
  {
    id: 5,
    w: 230,
    h: 160,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/work/fluxor/corporate-server.png',
  },
  {
    id: 6,
    w: 200,
    h: 320,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/work/stock-management/properties-3d.png',
  },
  {
    id: 7,
    w: 480,
    h: 320,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/products/hotel-building.png',
  },
  {
    id: 8,
    w: 240,
    h: 280,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/products/graphic-design-building-architecture-creative-city-building-vector.png',
  },
  {
    id: 9,
    w: 230,
    h: 210,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/work/ai-mock-interview/hero-3d.png',
  },
  {
    id: 10,
    w: 480,
    h: 320,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/work/stock-management/commission-3d.png',
  },
  {
    id: 11,
    w: 220,
    h: 340,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/work/q-safe/building.png',
  },
];

const productsData = [
  {
    id: 'glad-hms',
    name: 'GLAD HMS',
    href: '/products/glad-hms',
    oneliner: 'Modular hotel management and operations platform',
    // Source: internal product architecture metrics
    stats: '100% MODULAR · ROW-LEVEL LOCKS · SCOPED RBAC',
  },
  {
    id: 'settledesk',
    name: 'SettleDesk',
    href: '/products/settledesk',
    oneliner: 'Run your entire brokerage on one platform',
    // Source: internal product architecture metrics
    stats: '500+ BROKERS · 10,000+ UNITS · 99.9% UPTIME',
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
    <div className="w-full h-full relative group bg-bg">
      {/* Media */}
      {video ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover block"
        />
      ) : (
        <Image
          src={src}
          alt={`${label} product platform visual`}
          fill
          unoptimized
          className="object-cover block"
        />
      )}

      {/* Product Wordmark Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none p-3 text-center bg-black/20 group-hover:bg-black/35 transition-colors duration-300">
        <span
          className="text-white font-semibold leading-tight select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          style={{
            fontSize: `clamp(13px, ${Math.round(w * 0.075)}px, 26px)`,
          }}
        >
          {label}
        </span>

        {/* Hover Subtitle */}
        {subtitle && (
          <span className="mt-2 text-[11px] md:text-[12px] text-white/90 font-normal px-2.5 py-1 rounded bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[90%] leading-snug">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const copyColRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState<string>('GLAD HMS');

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const copyCol = copyColRef.current;

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
            let lastProduct = 'GLAD HMS';
            let lastSwitchTime = 0;

            // Function to render the 3D field at any given scroll progress
            const renderField = (progress: number, isInViewport: boolean) => {
              let minDistanceToApex = Infinity;
              let closestProduct = 'GLAD HMS';

              cards.forEach((cardEl, idx) => {
                if (!cardEl) return;
                const cardConfig = productCards[idx];
                const { xVw, yVh, z, rotateY, shadowAlpha, opacity, thetaDeg } =
                  calculateCylindricalCarousel(idx, progress);

                cardEl.style.transform = `translate3d(${xVw}vw, ${yVh}vh, ${z}px) rotateY(${rotateY}deg)`;
                cardEl.style.boxShadow = `0 24px 60px -32px rgba(10, 10, 11, ${shadowAlpha.toFixed(3)})`;
                cardEl.style.opacity = opacity.toFixed(3);

                // Find card nearest to theta = 0 deg (front apex)
                const distToApex = Math.min(thetaDeg, 360 - thetaDeg);
                if (distToApex < minDistanceToApex) {
                  minDistanceToApex = distToApex;
                  closestProduct = cardConfig.label.includes('GLAD')
                    ? 'GLAD HMS'
                    : 'SettleDesk';
                }

                // Video gating: play when card is in front sector (theta < 90 or theta > 270) and section is in viewport
                const videoEl = cardEl.querySelector('video');
                if (videoEl) {
                  if (
                    isInViewport &&
                    (thetaDeg <= 75 || thetaDeg >= 285)
                  ) {
                    videoEl.play().catch(() => {});
                  } else {
                    videoEl.pause();
                  }
                }
              });

              // Debounce product sync switch to 400ms minimum
              const now = performance.now();
              if (
                closestProduct !== lastProduct &&
                now - lastSwitchTime > 400
              ) {
                lastProduct = closestProduct;
                lastSwitchTime = now;
                setActiveProduct(closestProduct);
              }
            };

            const setWillChange = (active: boolean) => {
              cards.forEach((cardEl) => {
                if (cardEl) {
                  cardEl.style.willChange = active ? 'transform' : 'auto';
                }
              });
            };

            const pauseAllVideos = () => {
              cards.forEach((cardEl) => {
                const videoEl = cardEl?.querySelector('video');
                if (videoEl) videoEl.pause();
              });
            };

            // 1. Synchronously apply the rest preset (progress = 0) on mount
            renderField(0, false);

            // 2. Drive cyclic motion via ScrollTrigger onUpdate
            ScrollTrigger.create({
              trigger: section,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.8,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                renderField(self.progress, true);
              },
              onEnter: () => {
                setWillChange(true);
                renderField(0, true);
              },
              onEnterBack: () => {
                setWillChange(true);
              },
              onLeave: () => {
                setWillChange(false);
                pauseAllVideos();
              },
              onLeaveBack: () => {
                setWillChange(false);
                pauseAllVideos();
              },
            });

            // 3. Column entrance animation (scroll-triggered once, start: 'top 70%')
            if (copyCol) {
              const tlCol = gsap.timeline({
                scrollTrigger: {
                  trigger: section,
                  start: 'top 70%',
                  toggleActions: 'play none none none',
                },
              });

              const eyebrow = copyCol.querySelector('.col-eyebrow');
              const headingLines =
                copyCol.querySelectorAll('.col-heading-line');
              const subline = copyCol.querySelector('.col-subline');
              const rows = copyCol.querySelectorAll('.product-row');
              const hairlines = copyCol.querySelectorAll('.col-hairline');

              if (eyebrow) {
                tlCol.fromTo(
                  eyebrow,
                  { opacity: 0, y: 12 },
                  { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                );
              }
              if (headingLines.length > 0) {
                tlCol.fromTo(
                  headingLines,
                  { yPercent: 100 },
                  {
                    yPercent: 0,
                    duration: 0.7,
                    stagger: 0.08,
                    ease: 'power3.out',
                  },
                  '-=0.3'
                );
              }
              if (subline) {
                tlCol.fromTo(
                  subline,
                  { opacity: 0, y: 14 },
                  { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
                  '-=0.35'
                );
              }
              if (hairlines.length > 0) {
                tlCol.fromTo(
                  hairlines,
                  { scaleX: 0 },
                  {
                    scaleX: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    transformOrigin: 'left center',
                  },
                  '-=0.3'
                );
              }
              if (rows.length > 0) {
                tlCol.fromTo(
                  rows,
                  { opacity: 0, y: 18 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.1,
                    ease: 'power2.out',
                  },
                  '-=0.45'
                );
              }
            }
          }
        }
      );

      // Refresh ScrollTrigger once fonts are fully loaded
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
        className="relative w-full h-auto min-[1024px]:h-[340vh] bg-bg select-none"
      >
        {/* Sticky Stage on Desktop */}
        <div className="stage min-[1024px]:sticky min-[1024px]:top-0 min-[1024px]:h-screen w-full overflow-hidden min-[1024px]:[perspective:1500px] min-[1024px]:[perspective-origin:38%_45%] [isolation:isolate] flex flex-col justify-center">
          {/* Field: 0% to 62% */}
          <div className="field w-full min-[1024px]:w-[62%] h-full absolute inset-y-0 left-0 min-[1024px]:[transform-style:preserve-3d] min-[1024px]:block hidden pointer-events-none">
            {productCards.map((card, idx) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="perspective-card absolute [backface-visibility:visible] [transform-origin:50%_50%] rounded-[14px] overflow-hidden bg-bg border border-line-solid pointer-events-auto shadow-[0_20px_50px_-24px_rgba(10,10,11,0.28)]"
                style={{
                  width: `${card.w}px`,
                  height: `${card.h}px`,
                  marginLeft: `${-card.w / 2}px`,
                  marginTop: `${-card.h / 2}px`,
                  left: '50%',
                  top: '50%',
                }}
              >
                <PerspectiveCardContent
                  src={card.src}
                  label={card.label}
                  subtitle={card.subtitle}
                  w={card.w}
                />
              </div>
            ))}
          </div>

          {/* Copy Column: 66% to 100% (Top-aligned at 26% stage height, flush left) */}
          <div
            ref={copyColRef}
            className="z-30 min-[1024px]:absolute min-[1024px]:top-[26%] min-[1024px]:left-[66%] min-[1024px]:right-[40px] max-w-[440px] px-5 min-[1024px]:px-0 pointer-events-auto my-8 min-[1024px]:my-0 flex flex-col items-start text-left"
          >
            <div className="col-eyebrow text-[11px] font-medium tracking-[0.045em] uppercase text-accent mb-2.5">
              PROPRIETARY SYSTEMS
            </div>
            <div className="overflow-hidden">
              <h3 className="col-heading-line t-heading-sm text-fg leading-[1.15]">
                Software platforms
              </h3>
            </div>
            <div className="overflow-hidden">
              <h3 className="col-heading-line t-heading-sm text-fg leading-[1.15]">
                built to scale.
              </h3>
            </div>
            <p className="col-subline t-body-sm text-fg-muted mt-3 max-w-[360px]">
              Proprietary SaaS systems designed, engineered, and operated by
              GLAD studio.
            </p>

            {/* Product Rows Table */}
            <div className="product-rows-container mt-7 w-full">
              <div className="col-hairline w-full h-[1px] bg-line" />
              {productsData.map((prod) => {
                const isActive = activeProduct === prod.name;
                return (
                  <React.Fragment key={prod.id}>
                    <Link
                      href={prod.href}
                      data-cursor="link"
                      className="product-row group relative block py-[22px] transition-colors duration-300 hover:bg-[rgba(10,10,11,0.02)] pr-4 pl-3.5"
                    >
                      {/* 3px Accent Bar */}
                      <div
                        className={clsx(
                          'absolute left-0 top-0 bottom-0 w-[3px] bg-accent transition-transform duration-300 origin-center',
                          isActive ? 'scale-y-100' : 'scale-y-0'
                        )}
                      />

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4
                            className={clsx(
                              'text-[19px] font-medium transition-all duration-300 group-hover:translate-x-1.5',
                              isActive ? 'text-fg' : 'text-fg-muted'
                            )}
                          >
                            {prod.name}
                          </h4>
                          <p className="text-[13.5px] text-fg-muted mt-1 leading-snug">
                            {prod.oneliner}
                          </p>
                          <div className="text-[11px] uppercase tracking-[0.04em] text-fg-muted mt-2 font-medium">
                            {prod.stats}
                          </div>
                        </div>
                        <span className="text-fg-muted text-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 select-none">
                          ↗
                        </span>
                      </div>
                    </Link>
                    <div className="col-hairline w-full h-[1px] bg-line" />
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Mobile Fallback Grid (< 1024px) */}
          <div className="min-[1024px]:hidden px-5 md:px-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-16">
            {productCards.map((card) => (
              <div
                key={card.id}
                className="rounded-[14px] overflow-hidden bg-bg border border-line-solid relative h-[260px] sm:h-[300px]"
              >
                <PerspectiveCardContent
                  src={card.src}
                  label={card.label}
                  subtitle={card.subtitle}
                  w={card.w}
                />
              </div>
            ))}
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
