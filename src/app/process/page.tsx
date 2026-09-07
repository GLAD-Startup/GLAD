import React from 'react';
import type { Metadata } from 'next';
import ProcessPageClient from '@/components/sections/ProcessPageClient';

export const metadata: Metadata = {
  title: 'Engineering Process — How We Build & Ship Products',
  description:
    'Eight steps from first call to a live, supported product. No mystery, no scope creep, no rebuilds.',
  alternates: {
    canonical: 'https://gladstudio.net/process',
  },
  openGraph: {
    title: 'Engineering Process — How We Build & Ship Products | GLAD Studio',
    description:
      'Eight steps from first call to a live, supported product. No mystery, no scope creep, no rebuilds.',
    url: 'https://gladstudio.net/process',
    type: 'website',
    images: ['https://gladstudio.net/og-image.png'],
  },
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
