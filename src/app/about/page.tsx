import React from 'react';
import type { Metadata } from 'next';
import AboutPageClient from '@/components/sections/AboutPageClient';

export const metadata: Metadata = {
  title: 'About the Studio — GLAD Studio',
  description:
    'A senior team of four turning ambitious ideas into shipped web, mobile, and AI products in weeks, not quarters.',
  alternates: {
    canonical: 'https://gladstudio.net/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
