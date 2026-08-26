'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { faqsData } from '@/data/faq';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <section id="faq" className="relative w-full bg-bg select-none pt-[70px] xl:pt-[90px]">
        <div className="px-[20px] md:px-[28px] xl:px-[40px] grid grid-cols-1 xl:grid-cols-[540px_1fr] gap-[48px] xl:gap-[80px] items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2
              className="t-display-sm text-fg"
              style={{
                fontSize: 'clamp(0px, 9vw, 150px)',
                lineHeight: 0.90,
                letterSpacing: '-0.035em',
              }}
            >
              FAQ.
            </h2>

            <div className="mt-[20px] xl:mt-[30px] w-[180px] xl:w-[240px] h-[180px] xl:h-[240px] rounded-[12px] overflow-hidden bg-surface border border-line-solid relative shrink-0">
              <Image
                src="/team/arjun.jpg"
                alt="GLAD Studio leadership"
                fill
                unoptimized
                className="object-cover block"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <h3 className="t-heading-sm text-fg max-w-[680px]">
              Clear Answers on Scope,
              <br />
              Timelines and Cost
              <br />
              Before Any Work
              <br />
              Begins <span lang="hi" className="tracking-[0.02em]">जवाब</span>.
            </h3>

            {/* Accordion List with 8 Rows */}
            <div className="mt-[36px] xl:mt-[56px] border-t border-line">
              {faqsData.map((item, idx) => {
                const isOpen = openIdx === idx;
                const panelId = `faq-panel-${idx}`;
                const buttonId = `faq-btn-${idx}`;

                return (
                  <div
                    key={idx}
                    className="border-b border-line py-[22px] xl:py-[26px] transition-colors duration-200"
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
                      <span className="w-[45px] xl:w-[70px] shrink-0 text-[13px] font-medium text-fg-muted">
                        {item.number}
                      </span>

                      {/* Question */}
                      <span className="flex-1 text-[16px] xl:text-[18px] font-medium text-fg transition-colors duration-200 group-hover:text-accent pr-2 leading-snug">
                        {item.question}
                      </span>

                      {/* + / - Rotating Glyph */}
                      <div className="ml-auto shrink-0 w-6 h-6 flex items-center justify-center text-fg">
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
                        <p className="t-body-sm text-fg-muted max-w-[620px] leading-[1.55]">
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
      <div className="mt-[70px] xl:mt-[90px]">
        <SectionEyebrow
          left={<>GET IN TOUCH <span lang="hi">समापन</span></>}
          index="(GLD® — 12)"
          right="STUDIO WRAP"
        />
      </div>
    </>
  );
}
