'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import type { ArticleItem } from '@/data/insights';
import { articlesData } from '@/data/insights';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/work';
import Divider from '@/components/ui/Divider';
import Marquee from '@/components/ui/Marquee';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';
import InsightPipelineCard from '@/components/insights/InsightPipelineCard';

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
      {/* 1. Article Editorial Header */}
      <header className="px-[20px] md:px-[28px] xl:px-[40px] pt-6 sm:pt-8 md:pt-12 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] sm:text-[12.5px] font-mono text-fg-muted mb-4 sm:mb-6 flex-wrap">
          <Link href="/" className="hover:text-fg transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-fg transition-colors">
            Insights
          </Link>
          <span>/</span>
          <span className="text-fg truncate max-w-[200px] sm:max-w-md font-medium">
            {article.title}
          </span>
        </nav>

        {/* Category & Read Time Pill Row */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-accent/10 text-accent font-mono border border-accent/20">
            {article.category}
          </span>
          <span className="text-[12.5px] text-fg-muted font-mono">
            {article.readTime}
          </span>
        </div>

        {/* Real Static Editorial H1 */}
        <h1 className="text-[26px] sm:text-[36px] md:text-[44px] xl:text-[50px] font-normal text-fg leading-[1.14] sm:leading-[1.15] tracking-[-0.025em]">
          {article.title}
        </h1>

        {/* Subtitle / Excerpt */}
        <p className="t-body text-fg-muted mt-3 sm:mt-4 leading-relaxed max-w-2xl font-normal">
          {article.excerpt}
        </p>

        {/* Author Byline Row */}
        <div className="flex items-center gap-3.5 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-line">
          <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full overflow-hidden relative bg-surface border border-line shrink-0">
            <Image
              src={article.portraitSrc}
              alt={article.author}
              fill
              sizes="48px"
              className="object-cover block"
            />
          </div>
          <div>
            <div className="text-[14px] sm:text-[15px] font-medium text-fg">
              {article.author}
            </div>
            <div className="text-[12px] text-fg-muted font-mono">
              {article.authorRole} · Published {article.date}
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero Cover Image */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-6 sm:mt-8 max-w-4xl mx-auto">
        <div
          data-cursor="view"
          className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-[12px] sm:rounded-[14px] overflow-hidden relative bg-surface border border-line-solid shadow-xl"
        >
          <Image
            src={article.coverSrc}
            alt={`${article.title} cover composition`}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover block"
          />
        </div>
      </div>

      {/* 3. Editorial Body Content */}
      <article className="mt-[36px] sm:mt-[48px] xl:mt-[60px] max-w-4xl mx-auto px-[20px] md:px-[28px] flex flex-col gap-6 sm:gap-8 text-left">

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
                  className="my-4 sm:my-6 overflow-x-auto rounded-[12px] border border-line-solid bg-surface shadow-2xs -mx-1 sm:mx-0"
                >
                  <table className="w-full min-w-[540px] text-left text-[13px] sm:text-[13.5px] divide-y divide-line">
                    <thead className="bg-surface-2/70 text-fg font-medium font-mono text-[11.5px] sm:text-[12px] uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-3.5 sm:p-4">{sec.tableData.col1Header}</th>
                        <th className="py-3 px-3.5 sm:p-4">{sec.tableData.col2Header}</th>
                        {sec.tableData.col3Header && (
                          <th className="py-3 px-3.5 sm:p-4">{sec.tableData.col3Header}</th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {sec.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-surface-2/40 transition-colors">
                          <td className="py-3.5 px-3.5 sm:p-4 font-medium text-fg whitespace-nowrap">
                            {row.col1}
                          </td>
                          <td className="py-3.5 px-3.5 sm:p-4 text-fg-muted whitespace-nowrap">
                            {row.col2}
                          </td>
                          {row.col3 && (
                            <td className="py-3.5 px-3.5 sm:p-4 text-fg-muted leading-relaxed">
                              {row.col3}
                            </td>
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
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-line space-y-5 sm:space-y-6">
            <h3 className="t-heading-sm text-fg font-normal">
              Technical Q&A
            </h3>
            <div className="border-t border-line divide-y divide-line">
              {article.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIdx === fIdx;
                return (
                  <div key={fIdx} className="py-3.5 sm:py-4">
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    >
                      <span className="font-mono text-[12px] text-fg-muted">
                        0{fIdx + 1}
                      </span>
                      <span className="flex-1 text-[15px] sm:text-[15.5px] font-medium text-fg group-hover:text-accent transition-colors">
                        {faq.question}
                      </span>
                      <span className="font-mono text-fg-muted text-[16px]">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className={clsx(
                        'overflow-hidden transition-all duration-300',
                        isOpen ? 'max-h-[300px] opacity-100 pt-3 pl-6 sm:pl-8' : 'max-h-0 opacity-0'
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

        {/* Applied Engineering Practice & Production Proof (Data-Driven) */}
        {((article.relatedServiceSlugs && article.relatedServiceSlugs.length > 0) ||
          (article.relatedWorkSlugs && article.relatedWorkSlugs.length > 0)) && (
          <div className="mt-8 sm:mt-12 p-5 sm:p-7 md:p-9 rounded-[14px] sm:rounded-[16px] bg-surface border border-line-solid">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
              <div className="max-w-xl">
                <span className="text-[11px] sm:text-[11.5px] font-mono font-semibold uppercase tracking-wider text-accent block mb-2">
                  Applied Engineering Practice
                </span>
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-fg leading-snug">
                  Building production systems with this architecture?
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-fg-muted mt-2 leading-relaxed">
                  GLAD Studio builds and ships custom AI solutions and automated workflows with senior engineers, deterministic guardrails, and fixed delivery cadences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 sm:gap-3 shrink-0">
                {article.relatedServiceSlugs?.map((slug) => {
                  const s = servicesData.find((svc) => svc.slug === slug);
                  if (!s) return null;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[10px] bg-bg border border-line-solid text-[12.5px] sm:text-[13px] font-medium text-fg hover:border-fg/40 hover:text-accent transition-all"
                    >
                      <span>Explore {s.title}</span>
                      <span>→</span>
                    </Link>
                  );
                })}

                {article.relatedWorkSlugs?.map((slug) => {
                  const w = projectsData.find((proj) => proj.slug === slug);
                  if (!w) return null;
                  return (
                    <Link
                      key={w.slug}
                      href={`/work/${w.slug}`}
                      className="inline-flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[10px] bg-surface-2 border border-line text-[12.5px] sm:text-[13px] font-medium text-fg hover:border-fg/40 transition-all"
                    >
                      <span>Case Study: {w.title}</span>
                      <span>→</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </article>

      {/* 6. Related Reading Cards */}
      <section className="mt-[60px] sm:mt-[80px] xl:mt-[120px] px-[20px] md:px-[28px] xl:px-[40px] max-w-7xl mx-auto">
        <SectionEyebrow
          left={<><span className="hidden sm:inline">CONTINUE READING <span lang="hi">अध्ययन</span></span><span className="sm:hidden">CONTINUE READING</span></>}
          index="(GLD® — 10)"
          right={<span className="hidden sm:inline">RELATED INSIGHTS</span>}
        />

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {otherArticles.map((rel) => (
            <Link
              key={rel.slug}
              href={`/insights/${rel.slug}`}
              className="bg-surface border border-line-solid rounded-[14px] p-5 sm:p-6 group hover:bg-surface-2 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent font-mono">
                  {rel.category}
                </span>
                <h4 className="text-[17px] sm:text-[18px] font-medium text-fg group-hover:text-accent transition-colors mt-2">
                  {rel.title}
                </h4>
                <p className="mt-2 text-[13px] text-fg-muted line-clamp-2 leading-relaxed">
                  {rel.excerpt}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-line flex items-center justify-between text-[11.5px] sm:text-[12px] font-mono text-fg-muted">
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
      <div className="mt-[50px] sm:mt-[70px] xl:mt-[110px]">
        <SectionEyebrow
          left={<><span className="hidden sm:inline">COMMON QUESTIONS <span lang="hi">सहायता</span></span><span className="sm:hidden">COMMON QUESTIONS</span></>}
          index="(GLD® — 11)"
          right={<span className="hidden sm:inline">CLARIFICATIONS</span>}
        />
      </div>

      {/* 8. Shared Editorial FAQ */}
      <Faq />

      {/* 9. Footer */}
      <Footer isWorkDetail />
    </main>
  );
}
