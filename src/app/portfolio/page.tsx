import React from 'react';
import type { Metadata } from 'next';
import WorkPageClient from '@/components/sections/WorkPageClient';

export const metadata: Metadata = {
  title: 'Portfolio — Selected Works — GLAD Studio',
  description:
    'A curated archive of web applications, mobile platforms, and autonomous AI systems engineered by GLAD studio.',
  alternates: {
    canonical: 'https://gladstudio.net/portfolio',
  },
};

export default function PortfolioPage() {
  return <WorkPageClient />;
}

