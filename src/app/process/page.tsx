import React from 'react';
import type { Metadata } from 'next';
import ProcessPageClient from '@/components/sections/ProcessPageClient';

export const metadata: Metadata = {
  title: 'How We Ship — Engineering Process — GLAD Studio',
  description:
    'Eight steps from first call to a live, supported product. No mystery, no scope creep, no rebuilds.',
  alternates: {
    canonical: 'https://gladstudio.net/process',
  },
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
