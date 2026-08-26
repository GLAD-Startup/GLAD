import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import WordRail from '@/components/ui/WordRail';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: "Let's Discuss Your Project — Contact — GLAD Studio",
  description:
    "Tell us what you're building. We'll reply within one business day with next steps — or honest feedback if we're not the right fit.",
};

const directChannels = [
  {
    label: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
  },
  {
    label: 'Mathura, Uttar Pradesh, India',
    href: 'https://maps.google.com/?q=Mathura,Uttar+Pradesh,India',
    external: true,
  },
  {
    label: 'Follow on LinkedIn',
    href: siteConfig.socials.linkedin,
    external: true,
  },
  {
    label: 'Follow on Instagram',
    href: siteConfig.socials.instagram,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg select-none pt-[84px] md:pt-[90px]">
      {/* 1. Word Rail */}
      <div className="mt-[20px]">
        <WordRail
          items={['Free Consultation', 'Reply < 24h', 'No Obligation', 'Remote']}
        />
      </div>

      {/* 2. Hero Headline Block */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[72px]">
        <h1 className="t-heading-sm text-fg leading-[1.12] max-w-[800px]">
          Let&apos;s discuss your project.
        </h1>
        <p className="t-body text-fg-muted mt-3 max-w-[680px]">
          Tell us what you&apos;re building. We&apos;ll reply within one business day with next steps — or honest feedback if we&apos;re not the right fit.
        </p>
      </div>

      {/* 3. Main Contact & Enquiry Section */}
      <div className="px-[20px] md:px-[28px] xl:px-[40px] mt-[48px] xl:mt-[72px] grid grid-cols-1 xl:grid-cols-[520px_1fr] gap-[48px] xl:gap-[96px] items-start">
        {/* Left Column: Image + Direct Channels */}
        <div className="flex flex-col gap-8 w-full max-w-[520px] mx-auto xl:mx-0">
          {/* Large Image Slot */}
          <div
            data-cursor="view"
            className="w-full aspect-[4/3] sm:aspect-[16/11] xl:aspect-[4/3] rounded-[12px] overflow-hidden bg-surface border border-line-solid relative shrink-0 shadow-2xl"
          >
            <Image
              src="/team/somesh.jpeg"
              alt="GLAD Studio Engineering Team"
              fill
              unoptimized
              className="object-cover block"
            />
          </div>

          {/* Stacked Link Rows (26px + ↗) */}
          <div className="border-t border-line w-full">
            {directChannels.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                data-cursor="link"
                className="group flex items-center justify-between py-[20px] xl:py-[24px] border-b border-line text-fg transition-colors duration-200 hover:text-accent"
              >
                <span className="text-[17px] md:text-[22px] xl:text-[24px] font-normal leading-tight">
                  {item.label}
                </span>

                <span className="text-[20px] md:text-[22px] text-fg group-hover:text-accent transform transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 inline-block">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Ruled Paper Enquiry Form */}
        <div className="w-full max-w-[680px] mx-auto xl:mx-0">
          <ContactForm />
        </div>
      </div>

      {/* 4. Section Eyebrow preceding FAQ */}
      <div className="mt-[80px] xl:mt-[120px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* 5. FAQ */}
      <Faq />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
