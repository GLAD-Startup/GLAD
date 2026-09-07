'use client';

import React, { useState } from 'react';
import type { ProductFaq as ProductFaqType } from '@/data/products';

export interface ProductFaqProps {
  faqs: ProductFaqType[];
  isHms?: boolean;
}

export default function ProductFaq({ faqs, isHms = false }: ProductFaqProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-bg select-none pt-[70px] xl:pt-[90px] pb-12 xl:pb-16"
    >
      <div className="px-[20px] md:px-[28px] xl:px-[40px] grid grid-cols-1 xl:grid-cols-[500px_1fr] gap-[48px] xl:gap-[72px] items-start">
        {/* Left Column: FAQ Headline & Dedicated Subheading */}
        <div className="flex flex-col">
          <div className="overflow-hidden pb-[0.3em] -mb-[0.3em]">
            <h2
              className="t-display-sm text-fg inline-block will-change-transform"
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

          <div className="mt-[24px] xl:mt-[36px] max-w-[460px]">
            {isHms ? (
              <h3 className="text-[24px] sm:text-[28px] xl:text-[32px] font-normal text-fg leading-[1.18] tracking-[-0.02em]">
                Direct Answers on
                <br />
                Room Inventory,
                <br />
                Folios and Operations
                <br />
                Before You Deploy <span lang="hi" className="tracking-[0.02em]">जवाब</span>.
              </h3>
            ) : (
              <h3 className="text-[24px] sm:text-[28px] xl:text-[32px] font-normal text-fg leading-[1.18] tracking-[-0.02em]">
                Direct Answers on
                <br />
                Commission Splits,
                <br />
                Isolation and Workflows
                <br />
                Before You Deploy <span lang="hi" className="tracking-[0.02em]">जवाब</span>.
              </h3>
            )}
          </div>
        </div>

        {/* Right Column: Product Specific FAQs */}
        <div className="flex flex-col xl:pt-[10px]">
          <div className="border-t border-line">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              const panelId = `product-faq-panel-${idx}`;
              const buttonId = `product-faq-btn-${idx}`;
              const numStr = (idx + 1).toString().padStart(2, '0');

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
                      {numStr}
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
                        ? 'max-h-[600px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-[14px] xl:pt-[16px] pl-[32px] sm:pl-[45px] xl:pl-[70px]">
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
  );
}
