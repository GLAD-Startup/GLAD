import React from 'react';
import type { Metadata } from 'next';
import ContactPageClient from '@/components/sections/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us — Discuss Your Software Project',
  description:
    "Tell us what you're building. We'll reply within one business day with next steps — or honest feedback if we're not the right fit.",
  alternates: {
    canonical: 'https://gladstudio.net/contact',
  },
  openGraph: {
    title: 'Contact Us — Discuss Your Software Project | GLAD Studio',
    description:
      "Tell us what you're building. We'll reply within one business day with next steps — or honest feedback if we're not the right fit.",
    url: 'https://gladstudio.net/contact',
    type: 'website',
    images: ['https://gladstudio.net/og-image.png'],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
