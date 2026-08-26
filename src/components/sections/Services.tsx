import React from 'react';
import Link from 'next/link';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { servicesData } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-bg select-none">
      {/* 1. Headline */}
      <div className="pt-[70px] xl:pt-[90px] px-[20px] md:px-[28px] xl:px-[40px]">
        <h2
          className="t-display text-fg whitespace-nowrap"
          style={{
            fontSize: 'clamp(0px, 12.6vw, 220px)',
            lineHeight: 0.88,
            letterSpacing: '-0.035em',
          }}
        >
          Services
          <sup
            className="font-normal tracking-normal ml-1"
            style={{ fontSize: '0.23em', verticalAlign: 'super' }}
          >
            (5)
          </sup>
        </h2>
      </div>

      {/* 2. Word Rail */}
      <div className="mt-[40px] xl:mt-[60px]">
        <WordRail
          items={[
            'Senior Engineers',
            'Fixed Scope',
            'Weekly Demos',
            'You Own the Code',
          ]}
        />
      </div>

      {/* 3. List Block with 4-Column Grid [92px 1fr 340px 140px] */}
      <div className="mx-[20px] md:mx-[28px] xl:mx-[40px] mt-[48px] xl:mt-[72px] border-t border-line">
        {servicesData.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            data-cursor="link"
            className="group block py-[28px] md:py-[36px] xl:py-[42px] px-2 xl:px-3 border-b border-line transition-colors duration-300 hover:bg-surface"
          >
            {/* Desktop 4-Column Grid (>=1200px): [92px 1fr 340px 140px] */}
            <div className="hidden xl:grid grid-cols-[92px_1fr_340px_140px] items-start gap-6">
              <span className="t-label text-fg pt-0.5">{service.index}</span>
              <h3 className="t-title-lg text-fg font-medium transition-transform duration-300 ease-out group-hover:translate-x-[8px]">
                {service.title}
              </h3>
              <p className="t-body-sm text-fg-muted max-w-[340px]">
                {service.description}
              </p>
              <div className="t-body-sm text-fg-muted text-right whitespace-nowrap pt-0.5">
                {service.timeline}
              </div>
            </div>

            {/* Tablet 3-Column Grid (810px - 1199px) */}
            <div className="hidden min-[810px]:grid xl:hidden grid-cols-[80px_1fr_120px] gap-4 items-start">
              <span className="t-label text-fg-muted">{service.index}</span>
              <div>
                <h3 className="t-title-lg text-fg font-medium">{service.title}</h3>
                <p className="t-body-sm text-fg-muted mt-2">{service.description}</p>
              </div>
              <span className="t-body-sm text-fg-muted text-right">{service.timeline}</span>
            </div>

            {/* Mobile Stacked Block (<=809px) */}
            <div className="flex flex-col gap-2 min-[810px]:hidden">
              <div className="flex items-center justify-between">
                <h3 className="t-title-lg text-fg font-medium">{service.title}</h3>
                <span className="t-label text-fg-muted">{service.index}</span>
              </div>
              <span className="text-[12px] text-accent font-medium">
                {service.timeline}
              </span>
              <p className="t-body-sm text-fg-muted mt-1">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* 4. Concluding Section Eyebrow */}
      <div className="mt-[70px] xl:mt-[100px]">
        <SectionEyebrow
          left={<>STUDIO PROFILE <span lang="hi">परिचय</span></>}
          index="(GLD® — 04)"
          right="HOW WE THINK"
        />
      </div>
    </section>
  );
}
