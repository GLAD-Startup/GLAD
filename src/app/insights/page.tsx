import React from 'react';
import type { Metadata } from 'next';
import Journal from '@/components/sections/Journal';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Engineering Insights — GLAD Studio',
  description:
    'Technical deep-dives on AI agent architectures, RAG systems, LLM fine-tuning, and scalable product engineering.',
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-bg select-none pt-[84px]">
      <Journal />
      <Faq />
      <Footer />
    </main>
  );
}
