'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { faqsData } from '@/data/faq';

const rotatingTeam = [
  {
    src: '/team/arjun.jpg',
    name: 'Arjun Singh Rajput',
    role: 'CEO & Head of Strategy',
  },
  {
    src: '/team/jatin.jpg',
    name: 'Jatin Khetan',
    role: 'CFO & Head of Product & Design',
  },
  {
    src: '/team/somesh.jpeg',
    name: 'Somesh Rajput',
    role: 'CTO & Head of Engineering',
  },
  {
    src: '/team/parth.jpeg',
    name: 'Parth Garg',
    role: 'COO & Head of Operations',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [currentTeamIdx, setCurrentTeamIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Rotating Team Photo (1.8s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTeamIdx((prev) => (prev + 1) % rotatingTeam.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  // Slide-up entrance animation for FAQ text on scroll
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!headlineRef.current || !sectionRef.current) return;
      const chars = headlineRef.current.querySelectorAll('.faq-char');

      gsap.fromTo(
        chars,
        { yPercent: 105, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="faq"
        className="relative w-full bg-[#0A0A0B] text-[#FBFBF9] select-none pt-[70px] xl:pt-[90px]"
      >
        <div className="px-[20px] md:px-[28px] xl:px-[40px] grid grid-cols-1 xl:grid-cols-[500px_1fr] gap-[48px] xl:gap-[72px] items-start">
          {/* Left Column: FAQ Display, Rotating Leadership Photo, and Statement overlapping underneath */}
          <div className="flex flex-col">
            <div className="overflow-hidden pb-[0.3em] -mb-[0.3em]">
              <h2
                ref={headlineRef}
                className="t-display-sm text-[#FBFBF9] inline-block will-change-transform"
                style={{
                  fontSize: 'clamp(0px, 9vw, 150px)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.035em',
                }}
              >
                {'FAQ.'.split('').map((char, index) => (
                  <span
                    key={index}
                    className="faq-char inline-block will-change-transform pb-[0.15em]"
                  >
                    {char}
                  </span>
                ))}
              </h2>
            </div>

            {/* Rotating Leadership Photo */}
            <div
              data-cursor="view"
              data-cursor-text={rotatingTeam[currentTeamIdx].name}
              data-cursor-subtext={rotatingTeam[currentTeamIdx].role}
              className="mt-[28px] xl:mt-[42px] w-[180px] xl:w-[240px] h-[180px] xl:h-[240px] rounded-[12px] overflow-hidden bg-[#141416] border border-white/[0.12] relative shrink-0 z-[1] shadow-2xl shadow-black/80"
            >
              {rotatingTeam.map((member, idx) => (
                <Image
                  key={member.src}
                  src={member.src}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  unoptimized
                  className={`object-cover block transition-opacity duration-500 ease-in-out ${
                    idx === currentTeamIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>

            {/* "Clear Answers..." text placed under the photo, overlapping with difference blending */}
            <div
              className="-mt-[22px] xl:-mt-[32px] relative z-[2] max-w-[460px] pointer-events-none"
              style={{
                mixBlendMode: 'difference',
              }}
            >
              <h3 className="text-[24px] sm:text-[30px] xl:text-[34px] font-normal text-white leading-[1.18] tracking-[-0.02em]">
                Clear Answers on Scope,
                <br />
                Timelines and Cost
                <br />
                Before Any Work
                <br />
                Begins <span lang="hi" className="tracking-[0.02em]">जवाब</span>.
              </h3>
            </div>
          </div>

          {/* Right Column: FAQ Questions brought up to the top */}
          <div className="flex flex-col xl:pt-[10px]">
            {/* Accordion List with 8 Rows */}
            <div className="border-t border-white/[0.10]">
              {faqsData.map((item, idx) => {
                const isOpen = openIdx === idx;
                const panelId = `faq-panel-${idx}`;
                const buttonId = `faq-btn-${idx}`;

                return (
                  <div
                    key={idx}
                    className="border-b border-white/[0.10] py-[22px] xl:py-[26px] transition-colors duration-200"
                  >
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      data-cursor="link"
                      className="w-full flex items-center text-left focus:outline-none group cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      {/* Number */}
                      <span className="w-[45px] xl:w-[70px] shrink-0 text-[13px] font-medium text-[#A8A8AD]">
                        {item.number}
                      </span>

                      {/* Question */}
                      <span className="flex-1 text-[16px] xl:text-[18px] font-medium text-[#FBFBF9] transition-colors duration-200 group-hover:text-accent-bright pr-2 leading-snug">
                        {item.question}
                      </span>

                      {/* + / - Rotating Glyph */}
                      <div className="ml-auto shrink-0 w-6 h-6 flex items-center justify-center text-[#FBFBF9]">
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            isOpen ? 'rotate-45' : 'rotate-0'
                          }`}
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        >
                          <line x1="8" y1="2" x2="8" y2="14" />
                          <line x1="2" y1="8" x2="14" y2="8" />
                        </svg>
                      </div>
                    </button>

                    {/* Answer Panel */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen
                          ? 'max-h-[260px] opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-[14px] xl:pt-[16px] pl-[45px] xl:pl-[70px]">
                        <p className="t-body-sm text-[#A8A8AD] max-w-[620px] leading-[1.55]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section Eyebrow */}
      <div className="mt-[120px] xl:mt-[160px]">
        <SectionEyebrow
          className="mt-0 border-t border-line"
          left={<>GET IN TOUCH <span lang="hi">समापन</span></>}
          index="(GLD® — 12)"
          right="STUDIO WRAP"
        />
      </div>
    </>
  );
}
