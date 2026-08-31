import React from 'react';
import type { Metadata } from 'next';
import TermsClient from '@/components/legal/TermsClient';

export const metadata: Metadata = {
  title: 'Terms of Service — GLAD Studio',
  description:
    'Master terms of service, fixed-milestone billing protocols, 100% IP transfer guarantees, and 30-day bug warranties for GLAD Studio software engineering engagements.',
  alternates: {
    canonical: 'https://gladstudio.net/terms',
  },
  openGraph: {
    title: 'Terms of Service — GLAD Studio',
    description:
      'Master terms of service, fixed-milestone billing protocols, 100% IP transfer guarantees, and 30-day bug warranties for GLAD Studio software engineering engagements.',
    url: 'https://gladstudio.net/terms',
    type: 'website',
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
