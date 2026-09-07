import React from 'react';
import type { Metadata } from 'next';
import WorkPageClient from '@/components/sections/WorkPageClient';

export const metadata: Metadata = {
  title: 'Client Work & Case Studies',
  description:
    'A curated archive of web applications, mobile platforms, and autonomous AI systems engineered by GLAD Studio.',
  alternates: {
    canonical: 'https://gladstudio.net/work',
  },
  openGraph: {
    title: 'Client Work & Case Studies | GLAD Studio',
    description:
      'A curated archive of web applications, mobile platforms, and autonomous AI systems engineered by GLAD Studio.',
    url: 'https://gladstudio.net/work',
    type: 'website',
    images: ['https://gladstudio.net/og-image.png'],
  },
};

export default function WorkPage() {
  return <WorkPageClient />;
}
