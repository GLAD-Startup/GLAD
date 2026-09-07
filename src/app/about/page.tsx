import React from 'react';
import type { Metadata } from 'next';
import AboutPageClient from '@/components/sections/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us — Product Engineering Studio',
  description:
    'A senior team of four turning ambitious ideas into shipped web, mobile, and AI products in weeks, not quarters.',
  alternates: {
    canonical: 'https://gladstudio.net/about',
  },
  openGraph: {
    title: 'About Us — Product Engineering Studio | GLAD Studio',
    description:
      'A senior team of four turning ambitious ideas into shipped web, mobile, and AI products in weeks, not quarters.',
    url: 'https://gladstudio.net/about',
    type: 'website',
    images: ['https://gladstudio.net/og-image.png'],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
