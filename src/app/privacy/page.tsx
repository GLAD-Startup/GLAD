import React from 'react';
import type { Metadata } from 'next';
import PrivacyClient from '@/components/legal/PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy — GLAD Studio',
  description:
    'Comprehensive privacy policy, data controller identification, sub-processor protocols, and GDPR/CCPA/DPDP compliance standards of GLAD Studio.',
  alternates: {
    canonical: 'https://gladstudio.net/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — GLAD Studio',
    description:
      'Comprehensive privacy policy, data controller identification, sub-processor protocols, and GDPR/CCPA/DPDP compliance standards of GLAD Studio.',
    url: 'https://gladstudio.net/privacy',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
