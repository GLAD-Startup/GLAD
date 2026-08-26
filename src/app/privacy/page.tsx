import React from 'react';
import type { Metadata } from 'next';
import Divider from '@/components/ui/Divider';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — GLAD Studio',
  description: 'GLAD Studio privacy policy and data governance practices.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg select-none pt-[84px]">
      <Divider />
      <div className="px-[20px] md:px-[28px] xl:px-[40px] py-16 max-w-[800px] mx-auto">
        <h1 className="t-heading-sm text-fg">Privacy Policy</h1>
        <p className="t-body text-fg-muted mt-4">
          Last updated: January 2026
        </p>

        <div className="mt-8 flex flex-col gap-6 text-[15px] text-fg-muted leading-relaxed">
          <p>
            At GLAD Studio, we take data privacy and intellectual property confidentiality seriously. This policy outlines our standards regarding data collection, client communications, and codebase isolation.
          </p>
          <h2 className="text-[18px] font-semibold text-fg mt-4">1. Confidentiality & Code Ownership</h2>
          <p>
            All code, product specifications, architecture designs, and client data remain 100% the property of the client. We do not use client source code or proprietary training sets for third-party model training without explicit written agreement.
          </p>
          <h2 className="text-[18px] font-semibold text-fg mt-4">2. Communications & Inquiries</h2>
          <p>
            Information submitted via our discovery forms or direct email channels is used exclusively to evaluate project scopes and communicate directly with your team. We never sell or distribute contact data.
          </p>
          <h2 className="text-[18px] font-semibold text-fg mt-4">3. Contact</h2>
          <p>
            For privacy inquiries or data governance questions, contact us at hello@gladstudio.net.
          </p>
        </div>
      </div>
      <Footer isWorkDetail />
    </main>
  );
}
