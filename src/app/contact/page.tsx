import React from 'react';
import type { Metadata } from 'next';
import ContactPageClient from '@/components/sections/ContactPageClient';

export const metadata: Metadata = {
  title: "Let's Discuss Your Project — Contact — GLAD Studio",
  description:
    "Tell us what you're building. We'll reply within one business day with next steps — or honest feedback if we're not the right fit.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
