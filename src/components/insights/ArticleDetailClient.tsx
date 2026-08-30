'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import type { ArticleItem } from '@/data/insights';
import { articlesData } from '@/data/insights';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';
import InsightPipelineCard from '@/components/insights/InsightPipelineCard';
import PillButton from '@/components/ui/PillButton';

export interface ArticleDetailClientProps {
  article: ArticleItem;
}

export default function ArticleDetailClient({ article }: ArticleDetailClientProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  // 2 related articles
  const otherArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-bg select-none pt-[84px]">
      {/* 1. Title Marquee Header */}
      <Divider />
      <div className="py-4 md:py-6 overflow-hidden bg-bg">
        <Marquee speed={26}>
          <span
            className="t-marquee text-fg pr-[80px] whitespace-nowrap block pb-[0.22em] pt-[0.06em]"
            style={{
              fontSize: 'clamp(0px, 11vw, 175px)',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            {article.title} /
          </span>
        </Marquee>
      </div>
      <Divider />

      {/* 2. Breadcrumb & Meta Bar */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[36px] xl:mt-[48px] max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12.5px] font-mono text-fg-muted">
          <Link href="/" className="hover:text-fg transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-fg transition-colors">
            Insights
          </Link>
          <span>/</span>
          <span className="text-fg truncate max-w-[240px] sm:max-w-md font-medium">
            {article.title}
          </span>
        </nav>

        {/* Category & Read Time */}
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-accent/10 text-accent font-mono">
            {article.category}
          </span>
          <span className="text-[13px] text-fg-muted font-mono">
            {article.readTime}
          </span>
        </div>
      </div>

      {/* 3. Hero Cover Image */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[24px] xl:mt-[36px] max-w-7xl mx-auto">
        <div
          data-cursor="view"
          className="w-full aspect-[16/10] xl:aspect-[21/9] rounded-[14px] overflow-hidden relative bg-surface border border-line-solid shadow-2xl"
        >
          <Image
            src={article.coverSrc}
            alt={`${article.title} cover composition`}
            fill
            unoptimized
            className="object-cover block"
          />
        </div>
      </div>

      {/* 4. Editorial Body Content */}
      <article className="mt-[48px] xl:mt-[70px] max-w-4xl mx-auto px-[20px] md:px-[28px] flex flex-col gap-8 text-left">
        {/* Author Byline Box */}
        <div className="flex items-center gap-4 py-4 border-b border-line">
          <div className="w-[48px] h-[48px] rounded-full overflow-hidden relative bg-surface border border-line shrink-0">
            <Image
              src={article.portraitSrc}
              alt={article.author}
              fill
              unoptimized
              className="object-cover block"
            />
          </div>
          <div>
            <div className="text-[15px] font-medium text-fg">
              {article.author}
            </div>
            <div className="text-[12.5px] text-fg-muted font-mono">
              {article.authorRole} · Published {article.date}
            </div>
          </div>
        </div>

        {/* Structured Sections Loop */}
        {article.sections && article.sections.length > 0 ? (
          article.sections.map((sec, sIdx) => {
            if (sec.type === 'blockquote') {
              return (
                <div
                  key={sIdx}
                  className="my-2 p-6 xl:p-8 rounded-[12px] bg-surface border-l-4 border-accent border-line-solid text-fg text-[17px] xl:text-[19px] leading-[1.6] font-normal"
                >
                  {sec.text}
                </div>
              );
            }

            if (sec.type === 'heading') {
              return (
                <h2
                  key={sIdx}
                  className="t-heading-sm text-fg font-normal pt-6 border-t border-line first:border-0 first:pt-0"
                >
                  {sec.text}
                </h2>
              );
            }

            if (sec.type === 'subheading') {
              return (
                <h3
                  key={sIdx}
                  className="text-[19px] font-medium text-fg pt-3"
                >
                  {sec.text}
                </h3>
              );
            }

            if (sec.type === 'paragraph') {
              return (
                <p key={sIdx} className="t-body text-fg-muted leading-[1.65]">
                  {sec.text}
                </p>
              );
            }

            if (sec.type === 'pipeline' && sec.pipelineData) {
              return (
                <InsightPipelineCard
                  key={sIdx}
                  title={sec.pipelineData.title}
                  badge={sec.pipelineData.badge}
                  steps={sec.pipelineData.steps}
                />
              );
            }

            if (sec.type === 'table' && sec.tableData) {
              return (
                <div
                  key={sIdx}
                  className="my-4 overflow-x-auto rounded-[12px] border border-line-solid bg-surface"
                >
                  <table className="w-full text-left text-[13.5px] divide-y divide-line">
                    <thead className="bg-surface-2/70 text-fg font-medium font-mono text-[12px] uppercase tracking-wider">
                      <tr>
                        <th className="p-4">{sec.tableData.col1Header}</th>
                        <th className="p-4">{sec.tableData.col2Header}</th>
                        {sec.tableData.col3Header && (
                          <th className="p-4">{sec.tableData.col3Header}</th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {sec.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-surface-2/40 transition-colors">
                          <td className="p-4 font-medium text-fg">
                            {row.col1}
                          </td>
                          <td className="p-4 text-fg-muted">{row.col2}</td>
                          {row.col3 && (
                            <td className="p-4 text-fg-muted">{row.col3}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            if (sec.type === 'list' && sec.items) {
              return (
                <div key={sIdx} className="space-y-2.5 my-2">
                  {sec.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-3 text-[14.5px] text-fg-muted leading-relaxed">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              );
            }

            if (sec.type === 'orderedList' && sec.items) {
              return (
                <div key={sIdx} className="space-y-3 my-2 border-t border-line pt-4">
                  {sec.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="grid grid-cols-[40px_1fr] gap-3 text-[14.5px] text-fg-muted leading-relaxed pb-3 border-b border-line/60 last:border-0"
                    >
                      <span className="font-mono text-[13px] font-semibold text-accent">
                        {String(iIdx + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              );
            }

            return null;
          })
        ) : (
          /* Fallback simple paragraphs */
          <>
            <p className="t-body text-fg-muted leading-[1.55]">
              {article.paragraphs[0]}
            </p>
            <p className="t-body text-fg-muted leading-[1.55]">
              {article.paragraphs[1]}
            </p>
            <div className="my-2 xl:my-4 py-6 xl:py-8 border-t border-b border-line text-center">
              <blockquote className="t-heading-sm text-fg leading-[1.15] tracking-[-0.02em]">
                &ldquo;{article.quote}&rdquo;
              </blockquote>
            </div>
            {article.paragraphs[2] && (
              <p className="t-body text-fg-muted leading-[1.55]">
                {article.paragraphs[2]}
              </p>
            )}
          </>
        )}

        {/* 5. Article-Specific FAQs */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-line space-y-6">
            <h3 className="t-heading-sm text-fg font-normal">
              Technical Q&A
            </h3>
            <div className="border-t border-line divide-y divide-line">
              {article.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIdx === fIdx;
                return (
                  <div key={fIdx} className="py-4">
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    >
                      <span className="font-mono text-[12px] text-fg-muted">
                        0{fIdx + 1}
                      </span>
                      <span className="flex-1 text-[15.5px] font-medium text-fg group-hover:text-accent transition-colors">
                        {faq.question}
                      </span>
                      <span className="font-mono text-fg-muted text-[16px]">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className={clsx(
                        'overflow-hidden transition-all duration-300',
                        isOpen ? 'max-h-[300px] opacity-100 pt-3 pl-8' : 'max-h-0 opacity-0'
                      )}
                    >
                      <p className="t-body-sm text-fg-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </article>

      {/* 6. Related Reading Cards */}
      <section className="mt-[80px] xl:mt-[120px] px-[20px] md:px-[28px] xl:px-[40px] max-w-7xl mx-auto">
        <SectionEyebrow
          left={<>CONTINUE READING <span lang="hi">अध्ययन</span></>}
          index="(GLD® — 10)"
          right="RELATED INSIGHTS"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherArticles.map((rel) => (
            <Link
              key={rel.slug}
              href={`/insights/${rel.slug}`}
              className="bg-surface border border-line-solid rounded-[14px] p-6 group hover:bg-surface-2 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent font-mono">
                  {rel.category}
                </span>
                <h4 className="text-[18px] font-medium text-fg group-hover:text-accent transition-colors mt-2">
                  {rel.title}
                </h4>
                <p className="mt-2 text-[13px] text-fg-muted line-clamp-2 leading-relaxed">
                  {rel.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-[12px] font-mono text-fg-muted">
                <span>{rel.readTime}</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Section Eyebrow preceding FAQ */}
      <div className="mt-[70px] xl:mt-[110px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* 8. Shared Editorial FAQ */}
      <Faq />

      {/* 9. Footer */}
      <Footer isWorkDetail />
    </main>
  );
}
