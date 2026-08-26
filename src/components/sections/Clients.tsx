'use client';

import React from 'react';
import PerspectiveCard from '@/components/ui/PerspectiveCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import PillButton from '@/components/ui/PillButton';

const productCards = [
  {
    id: 1,
    x: 498,
    y: 120,
    w: 500,
    h: 340,
    rotY: -8,
    z: 0,
    speed: 1.0,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/products/hotel-building.png',
  },
  {
    id: 2,
    x: 1046,
    y: 300,
    w: 205,
    h: 330,
    rotY: -34,
    z: -180,
    speed: 1.4,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/products/building.png',
  },
  {
    id: 3,
    x: 1128,
    y: 385,
    w: 122,
    h: 175,
    rotY: -28,
    z: -260,
    speed: 0.7,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/products/hotel-building-transparent.png',
  },
  {
    id: 4,
    x: 890,
    y: 560,
    w: 215,
    h: 205,
    rotY: 22,
    z: -140,
    speed: 1.2,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/products/settledesk-logo.png',
  },
  {
    id: 5,
    x: 630,
    y: 660,
    w: 235,
    h: 165,
    rotY: 6,
    z: -60,
    speed: 0.9,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/work/fluxor/corporate-server.png',
  },
  {
    id: 6,
    x: 96,
    y: 1010,
    w: 155,
    h: 340,
    rotY: 30,
    z: -220,
    speed: 1.3,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/work/stock-management/properties-3d.png',
  },
  {
    id: 7,
    x: 292,
    y: 1030,
    w: 495,
    h: 335,
    rotY: -4,
    z: 40,
    speed: 0.8,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/products/hotel-building.png',
  },
  {
    id: 8,
    x: 840,
    y: 1180,
    w: 250,
    h: 300,
    rotY: -30,
    z: -200,
    speed: 1.5,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/products/graphic-design-building-architecture-creative-city-building-vector.png',
  },
  {
    id: 9,
    x: 768,
    y: 1450,
    w: 240,
    h: 220,
    rotY: 14,
    z: -120,
    speed: 1.0,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/work/ai-mock-interview/hero-3d.png',
  },
  {
    id: 10,
    x: 305,
    y: 1780,
    w: 500,
    h: 335,
    rotY: -6,
    z: 0,
    speed: 1.1,
    label: 'SettleDesk',
    subtitle: 'SettleDesk — Run Your Entire Brokerage on One Platform',
    src: '/work/stock-management/commission-3d.png',
  },
  {
    id: 11,
    x: 852,
    y: 1900,
    w: 212,
    h: 340,
    rotY: -26,
    z: -170,
    speed: 0.75,
    label: 'GLAD HMS',
    subtitle: 'GLAD HMS — Modular Hotel Management & Operations Platform',
    src: '/work/q-safe/building.png',
  },
];

export default function Clients() {
  return (
    <>
      <section
        id="products"
        className="relative w-full h-auto xl:h-[2600px] bg-bg select-none py-16 xl:py-0 px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-[72px] xl:gap-0 xl:[perspective:1400px] xl:[perspective-origin:50%_50%]"
      >
        {/* Floating Center Block that cards float around */}
        <div className="z-40 xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 text-center max-w-[560px] mx-auto px-4 pointer-events-auto bg-bg/85 backdrop-blur-md p-8 rounded-[16px] border border-line shadow-2xl">
          <h3 className="t-heading-sm text-fg leading-[1.15]">
            Software platforms built to scale.
          </h3>
          <p className="t-body text-fg-muted mt-3">
            Proprietary SaaS systems designed, engineered, and operated by GLAD studio.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <PillButton href="/products/glad-hms">Explore GLAD HMS</PillButton>
            <PillButton href="/products/settledesk">Explore SettleDesk</PillButton>
          </div>
        </div>

        {/* 3D Stage on Desktop / Normal Flow on Mobile */}
        <div className="w-full h-full relative flex flex-col xl:block gap-[72px] xl:gap-0 xl:[transform-style:preserve-3d]">
          {productCards.map((card) => (
            <PerspectiveCard
              key={card.id}
              src={card.src}
              label={card.label}
              subtitle={card.subtitle}
              x={card.x}
              y={card.y}
              w={card.w}
              h={card.h}
              rotY={card.rotY}
              z={card.z}
              speed={card.speed}
            />
          ))}
        </div>
      </section>

      {/* Section Eyebrow */}
      <SectionEyebrow
        left={<>ENGAGEMENT MODELS <span lang="hi">योजनाएँ</span></>}
        index="(GLD® — 09)"
        right="SCOPE & BUDGET"
      />
    </>
  );
}
