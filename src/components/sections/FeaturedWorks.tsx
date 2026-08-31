'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import PillButton from '@/components/ui/PillButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData } from '@/data/work';

export default function FeaturedWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!marqueeContentRef.current || !sectionRef.current) return;

      gsap.fromTo(
        marqueeContentRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative w-full bg-bg select-none">
      {/* 1. Marquee Band */}
      <div className="relative w-full overflow-hidden py-3 bg-bg">
        <div ref={marqueeContentRef} className="will-change-transform">
          <Marquee speed={20}>
            <span className="t-marquee text-fg pr-[80px] whitespace-nowrap inline-flex items-center">
              Selected Works
              <span className="inline-flex items-center ml-[0.06em] -translate-y-[0.14em]">
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
            </span>
          </Marquee>
        </div>
      </div>
      <Divider />

      {/* 2. Copy Block */}
      <div className="px-[20px] md:px-[28px] xl:px-0 xl:ml-[40px] mt-[56px] max-w-[520px] space-y-[34px]">
        <p className="t-body text-fg-muted">
          Every project is a chance to blend design and engineering, turning ambitious ideas into{' '}
          <strong className="text-fg font-semibold">
            shipped products — built with
          </strong>{' '}
          type-safe architecture, predictable milestones, and source code you fully own.
        </p>

        <div>
          <PillButton href="/work">See Works</PillButton>
        </div>
      </div>

      {/* 3. Project Cards Container (3000px on >=1200px) */}
      <div className="relative w-full h-auto xl:h-[3000px] mt-[60px] px-[20px] md:px-[28px] xl:px-0 flex flex-col xl:block gap-[72px] xl:gap-0 pb-16 xl:pb-0">
        {projectsData.map((proj) => (
          <ProjectCard
            key={proj.id}
            index={proj.index}
            title={proj.title}
            category={proj.category}
            subtitle={proj.subtitle}
            href={`/work/${proj.slug}`}
            x={proj.x}
            y={proj.y}
            w={proj.w}
            h={proj.h}
            innerX={proj.innerX}
            innerY={proj.innerY}
            innerW={proj.innerW}
            innerH={proj.innerH}
            outerSrc={proj.outerSrc}
            innerSrc={proj.innerSrc}
          />
        ))}
      </div>

      {/* 4. Concluding Section Eyebrow */}
      <SectionEyebrow
        left={<>CAPABILITIES <span lang="hi">सेवाएँ</span></>}
        index="(GLD® — 03)"
        right="ENGINEERING SERVICES"
      />
    </section>
  );
}
