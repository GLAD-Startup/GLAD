import React from 'react';
import type { Metadata } from 'next';
import Journal from '@/components/sections/Journal';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Engineering Insights & Technical Guides',
  description:
    'Technical deep-dives on AI agent architectures, RAG systems, LLM fine-tuning, and scalable product engineering.',
  alternates: {
    canonical: 'https://gladstudio.net/insights',
  },
  openGraph: {
    title: 'Engineering Insights & Technical Guides | GLAD Studio',
    description:
      'Technical deep-dives on AI agent architectures, RAG systems, LLM fine-tuning, and scalable product engineering.',
    url: 'https://gladstudio.net/insights',
    type: 'website',
    images: ['https://gladstudio.net/og-image.png'],
  },
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-bg select-none pt-[84px]">
      <Journal isListingPage />
      <Faq />
      <Footer />
    </main>
  );
}
