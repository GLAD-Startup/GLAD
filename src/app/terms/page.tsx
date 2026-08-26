import React from 'react';
import type { Metadata } from 'next';
import Divider from '@/components/ui/Divider';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — GLAD Studio',
  description: 'GLAD Studio standard commercial terms and client SLA agreements.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg select-none pt-[84px]">
      <Divider />
      <div className="px-[20px] md:px-[28px] xl:px-[40px] py-16 max-w-[800px] mx-auto">
        <h1 className="t-heading-sm text-fg">Terms of Service</h1>
        <p className="t-body text-fg-muted mt-4">
          Last updated: January 2026
        </p>

        <div className="mt-8 flex flex-col gap-6 text-[15px] text-fg-muted leading-relaxed">
          <p>
            These Terms of Service govern engineering engagements, milestones, and deliverable handoffs executed by GLAD Studio.
          </p>
          <h2 className="text-[18px] font-semibold text-fg mt-4">1. Milestone & Scope SOW</h2>
          <p>
            All custom software engineering projects operate under mutually agreed fixed-scope or retainer statements of work (SOW). Scope additions outside initial agreements are evaluated under separate milestone amendments.
          </p>
          <h2 className="text-[18px] font-semibold text-fg mt-4">2. IP Transfer & Warranty</h2>
          <p>
            Upon milestone payment completion, full repository rights, intellectual property assignments, and deployment credentials transfer to the client. All fixed-scope builds include a standard 30-day post-launch warranty covering bug fixes and scope verifications.
          </p>
          <h2 className="text-[18px] font-semibold text-fg mt-4">3. Contact</h2>
          <p>
            For contractual inquiries, reach out to hello@gladstudio.net.
          </p>
        </div>
      </div>
      <Footer isWorkDetail />
    </main>
  );
}
