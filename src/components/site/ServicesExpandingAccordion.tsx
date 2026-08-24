import * as React from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface ServiceItem {
  index: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  meta: string;
  href: string;
  tags: string[];
}

const servicesData: ServiceItem[] = [
  {
    index: "01",
    title: "MVP Development",
    shortTitle: "MVP DEV",
    subtitle: "Rapid high-fidelity execution",
    description:
      "Ship a credible v1 in weeks, not quarters. Fixed scope, senior developers, and working staging builds from week three.",
    meta: "4 – 8 WEEKS",
    href: "/services/mvp-development",
    tags: ["Fixed Scope", "Weekly Demos", "Full IP Transfer"],
  },
  {
    index: "02",
    title: "Web Applications",
    shortTitle: "WEB APPS",
    subtitle: "High-throughput cloud platforms",
    description:
      "Custom dashboards, SaaS, CRM and internal platforms with clean architecture, robust security, and type-safe frontends.",
    meta: "6 – 16 WEEKS",
    href: "/services/web-application-development",
    tags: ["React 19 / Vite", "FastAPI / Node", "PostgreSQL"],
  },
  {
    index: "03",
    title: "Mobile Apps",
    shortTitle: "MOBILE",
    subtitle: "Native iOS & Android",
    description:
      "Cross-platform iOS and Android applications with native feel, offline-first sync, and store submissions handled end-to-end.",
    meta: "8 – 14 WEEKS",
    href: "/services/mobile-app-development",
    tags: ["React Native / Expo", "Offline-First", "Store Handover"],
  },
  {
    index: "04",
    title: "AI Solutions",
    shortTitle: "AI SYSTEMS",
    subtitle: "Autonomous agent architectures",
    description:
      "Custom LLM integrations, document intelligence, RAG pipelines, and automated agent workflows embedded into your product.",
    meta: "4 – 12 WEEKS",
    href: "/services/ai-solutions",
    tags: ["Multi-Agent Systems", "Vector RAG", "Eval Benchmarks"],
  },
  {
    index: "05",
    title: "Business Automation",
    shortTitle: "AUTOMATION",
    subtitle: "Operational pipelines",
    description:
      "Eliminate manual workflows, sync disparate systems, and build automated operational pipelines that save hundreds of hours.",
    meta: "3 – 8 WEEKS",
    href: "/services/business-automation",
    tags: ["Event Webhooks", "ERP / CRM Sync", "Zero Overhead"],
  },
];

export function ServicesExpandingAccordion() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <div className="w-full">
      {/* Desktop & Tablet: Direct Horizontal Cards without outer box */}
      <div
        onMouseLeave={() => setActiveIdx(0)}
        className="hidden md:flex w-full h-[460px] lg:h-[480px] gap-3 select-none"
      >
        {servicesData.map((item, idx) => {
          const isExpanded = activeIdx === idx;

          return (
            <Link
              key={item.index}
              to={item.href}
              onMouseEnter={() => setActiveIdx(idx)}
              className={cn(
                "relative h-full rounded-[16px] overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group",
                isExpanded
                  ? "flex-[4.5] lg:flex-[5] bg-gradient-to-br from-[#EEF8F3] via-[#F4FAF6] to-[#E8F5EF] text-[var(--color-ink)] p-7 border-2 border-[#0F6E4C]/50 shadow-[0_16px_36px_-8px_rgba(15,110,76,0.18)] ring-1 ring-[#0F6E4C]/20"
                  : "flex-1 bg-[var(--color-card)] hover:bg-[#F0F7F3] border border-[var(--color-rule)] hover:border-[#0F6E4C]/30 p-4 shadow-sm"
              )}
            >
              {/* Subtle background blueprint grid on active card */}
              {isExpanded && (
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, #0F6E4C 1px, transparent 1px), linear-gradient(to bottom, #0F6E4C 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                  }}
                />
              )}

              {/* ── Collapsed Vertical Slat View ── */}
              <div
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-between py-5 px-1 transition-all duration-300 pointer-events-none",
                  isExpanded ? "opacity-0 invisible" : "opacity-100 visible"
                )}
              >
                {/* Index Pill */}
                <span className="font-mono text-[12px] font-semibold text-[var(--color-brass)] px-2.5 py-0.5 rounded-md bg-[var(--color-sunk)] border border-[var(--color-rule)]">
                  {item.index}
                </span>

                {/* Vertical Text */}
                <div className="flex-1 flex items-center justify-center py-2">
                  <span className="font-display text-[15px] lg:text-[16px] font-semibold tracking-widest text-[var(--color-ink)] uppercase -rotate-90 whitespace-nowrap group-hover:text-[#0F6E4C] transition-colors duration-200">
                    {item.shortTitle}
                  </span>
                </div>

                {/* Duration Badge (Horizontal Pill, No overflow) */}
                <span className="font-mono text-[10px] text-[var(--color-ink-3)] bg-[var(--color-sunk)] px-2 py-0.5 rounded border border-[var(--color-rule)] whitespace-nowrap">
                  {item.meta}
                </span>
              </div>

              {/* ── Expanded Full Card View (Greenish Light) ── */}
              <div
                className={cn(
                  "relative z-10 h-full flex flex-col justify-between transition-all duration-500 delay-75",
                  isExpanded
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-4 invisible pointer-events-none"
                )}
              >
                {/* Top Row: Index + Duration Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[12px] font-semibold text-white px-2.5 py-1 rounded-md bg-[#0F6E4C] shadow-xs">
                        {item.index}
                      </span>
                      <span className="font-mono text-[11px] text-[#0F6E4C] tracking-wide uppercase font-semibold">
                        {item.subtitle}
                      </span>
                    </div>

                    <span className="font-mono text-[11px] font-semibold text-[#0F6E4C] bg-white/95 px-3 py-1 rounded-full border border-[#0F6E4C]/25 shadow-xs">
                      {item.meta}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-display text-[26px] lg:text-[30px] font-semibold text-[var(--color-ink)] leading-tight tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] lg:text-[15px] text-[var(--color-ink-2)] leading-relaxed mb-6 max-w-[480px]">
                    {item.description}
                  </p>

                  {/* Key Capabilities / Feature Matrix */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-[var(--color-ink)] bg-white/90 px-3 py-1.5 rounded-lg border border-[#0F6E4C]/20 shadow-xs"
                      >
                        <span className="text-[#0F6E4C] font-bold text-[12px]">✓</span>
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-[#0F6E4C]/15 flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-[var(--color-ink)] group-hover:text-[#0F6E4C] transition-colors duration-200">
                    Explore deliverables & scope
                  </span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0F6E4C] text-white shadow-sm transition-all duration-200 group-hover:translate-x-1 group-hover:bg-[#0B5339]">
                    →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile: Vertical Expanding Stack */}
      <div className="md:hidden flex flex-col gap-3 w-full">
        {servicesData.map((item, idx) => {
          const isExpanded = activeIdx === idx;

          return (
            <div
              key={item.index}
              onClick={() => setActiveIdx(isExpanded ? null : idx)}
              className={cn(
                "rounded-[14px] border transition-all duration-300 overflow-hidden",
                isExpanded
                  ? "bg-gradient-to-br from-[#EEF8F3] to-[#E8F5EF] text-[var(--color-ink)] border-[#0F6E4C]/50 shadow-md ring-1 ring-[#0F6E4C]/20"
                  : "bg-[var(--color-card)] text-[var(--color-ink)] border-[var(--color-rule)] shadow-xs"
              )}
            >
              <div className="p-4 flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-mono text-[12px] font-semibold px-2 py-0.5 rounded",
                      isExpanded
                        ? "text-white bg-[#0F6E4C]"
                        : "text-[var(--color-brass)] bg-[var(--color-sunk)] border border-[var(--color-rule)]"
                    )}
                  >
                    {item.index}
                  </span>
                  <span className="font-display text-[17px] font-semibold">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "font-mono text-[11px] font-medium",
                      isExpanded ? "text-[#0F6E4C]" : "text-[var(--color-ink-3)]"
                    )}
                  >
                    {item.meta}
                  </span>
                  <span
                    className={cn(
                      "text-[12px] transition-transform duration-200",
                      isExpanded ? "rotate-90 text-[#0F6E4C]" : "rotate-0 text-[var(--color-ink-3)]"
                    )}
                  >
                    →
                  </span>
                </div>
              </div>

              {isExpanded && (
                <div className="px-4 pb-5 pt-1 border-t border-[#0F6E4C]/15">
                  <p className="text-[13px] text-[var(--color-ink-2)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--color-ink)] bg-white/90 px-2.5 py-1 rounded-md border border-[#0F6E4C]/20 shadow-xs"
                      >
                        <span className="text-[#0F6E4C] font-bold">✓</span>
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0F6E4C] hover:underline"
                  >
                    <span>View deliverables & scope</span>
                    <span>→</span>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
