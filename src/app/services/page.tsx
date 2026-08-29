import React from 'react';
import type { Metadata } from 'next';
import ServicesPageClient from '@/components/sections/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Engineering Services — GLAD Studio',
  description:
    'From rapid MVP validation to multi-tenant SaaS platforms and autonomous AI agent architectures.',
};

export default function ServicesOverviewPage() {
  return <ServicesPageClient />;
}
