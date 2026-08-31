'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';
import Divider from '@/components/ui/Divider';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

const sections = [
  { id: 'section-1', label: '1. Overview & Data Controller' },
  { id: 'section-2', label: '2. Categories of Data Collected' },
  { id: 'section-3', label: '3. Legal Basis for Processing' },
  { id: 'section-4', label: '4. How We Use Collected Data' },
  { id: 'section-5', label: '5. Third-Party Sub-processors' },
  { id: 'section-6', label: '6. Cross-Border Transfers' },
  { id: 'section-7', label: '7. Data Retention & Destruction' },
  { id: 'section-8', label: '8. Security & Encryption Standards' },
  { id: 'section-9', label: '9. Cookie & Tracking Policy' },
  { id: 'section-10', label: '10. Client Confidentiality & IP' },
  { id: 'section-11', label: '11. User Rights & Data Requests' },
  { id: 'section-12', label: '12. Breach Notification SLAs' },
  { id: 'section-13', label: "13. Children's Privacy" },
  { id: 'section-14', label: '14. Amendments & Policy Updates' },
  { id: 'section-15', label: '15. Contact Information' },
];

export default function PrivacyClient() {
  const [activeId, setActiveId] = useState<string>('section-1');
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      }

      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll('.legal-title-char');
        tl.fromTo(
          chars,
          { yPercent: 105, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.03,
            ease: 'power3.out',
          },
          '-=0.3'
        );
      }

      if (metaRef.current) {
        tl.fromTo(
          metaRef.current,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.4'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <main className="min-h-screen bg-bg select-none pt-[84px]">
      <Divider />

      <div className="px-[20px] md:px-[36px] xl:px-[50px] py-12 md:py-16 max-w-[1440px] mx-auto">
        {/* Header Badge & Title */}
        <div className="max-w-[900px] mb-8 md:mb-12">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/40 bg-accent/5 text-[12px] font-medium text-accent mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal & Compliance</span>
          </div>

          <h1
            ref={headlineRef}
            className="text-[38px] sm:text-[48px] md:text-[56px] xl:text-[62px] font-semibold text-fg tracking-[-0.03em] leading-tight overflow-hidden flex flex-wrap"
          >
            {'Privacy Policy'.split(' ').map((word, wIdx) => (
              <span key={wIdx} className="inline-flex overflow-hidden mr-[0.25em]">
                {word.split('').map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="legal-title-char inline-block will-change-transform"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p ref={metaRef} className="text-[14px] text-fg-muted mt-2">
            Last Updated: <span className="font-semibold text-fg">July 28, 2026</span> | Version 2.4
          </p>
        </div>

        {/* Top Horizontal Rule */}
        <div className="w-full border-b border-line mb-10 md:mb-14" />

        {/* Two-Column Grid: Sticky Contents Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[330px_1fr] gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Neo-brutalist Contents Card */}
          <aside className="lg:sticky lg:top-[110px] w-full">
            <div className="rounded-[22px] border-2 border-fg bg-surface p-6 shadow-[5px_5px_0px_0px_rgba(10,10,11,1)]">
              <h2 className="text-[12px] font-semibold tracking-[0.06em] text-fg uppercase mb-4">
                CONTENTS
              </h2>

              <nav className="flex flex-col gap-2.5 text-[13px] text-fg-muted">
                {sections.map((sec) => {
                  const isActive = activeId === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className={`transition-colors duration-150 leading-snug text-left ${
                        isActive
                          ? 'font-medium text-fg pl-1 border-l-2 border-accent'
                          : 'hover:text-fg'
                      }`}
                    >
                      {sec.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right Column: Policy Body */}
          <div className="space-y-12 md:space-y-14 text-[14.5px] sm:text-[15px] text-fg/80 leading-[1.65]">
            
            {/* 1. Overview & Data Controller Identification */}
            <section id="section-1" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                1. Overview & Data Controller Identification
              </h2>
              <p>
                This Privacy Policy (&quot;Policy&quot;) sets forth the explicit protocols, data collection mechanics, storage infrastructure, and user rights governed by <strong className="font-semibold text-fg">GLAD Studio</strong> (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;) in connection with your access to and use of gladstudio.net (the &quot;Site&quot;), our product engineering services, proprietary client portals, API endpoints, and associated digital products (collectively, the &quot;Services&quot;).
              </p>
              <p>
                GLAD Studio operates as both a Data Controller and Data Processor under applicable global data protection legislation, including but not limited to the General Data Protection Regulation (EU 2016/679) (&quot;GDPR&quot;), the California Consumer Privacy Act (&quot;CCPA/CPRA&quot;), the UK Data Protection Act 2018, and the Digital Personal Data Protection Act (&quot;DPDP&quot;).
              </p>
            </section>

            {/* 2. Categories of Information Collected */}
            <section id="section-2" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                2. Categories of Information Collected
              </h2>
              <p>
                We collect information through direct submission, automated system telemetry, and integrated third-party analytical pipelines. The specific categories of data processed include:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Identity & Contact Telemetry:</strong> Full names, business email addresses, telephone numbers, organizational affiliations, job titles, and preferred communication channels provided via discovery forms, scheduling calendars, or inquiry interfaces.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Project & Technical Artifacts:</strong> Product specifications, architecture blueprints, database schemas, repository keys, API credentials, wireframes, brand assets, and proprietary code bases shared during client engagements.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Artificial Intelligence & Model Interaction Logs:</strong> Prompts, contextual embeddings, model evaluation logs, and structured inputs submitted to AI workflow features integrated into our platform or client custom solutions.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Automated System & Diagnostic Data:</strong> Internet Protocol (IP) addresses, browser fingerprinting metrics, device OS profiles, HTTP headers, referrer URIs, session duration, clickstream pathways, and time-stamped interaction metrics.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Billing & Transactional Metadata:</strong> Invoice records, transaction identifiers, payment gateway tokens, tax identification metrics, and payment milestone logs (handled securely via PCI-DSS compliant third-party gateways).
                </li>
              </ul>
            </section>

            {/* 3. Legal Basis for Processing */}
            <section id="section-3" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                3. Legal Basis for Processing
              </h2>
              <p>
                We process personal and client data under the following established legal grounds:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Contractual Necessity:</strong> Processing required to execute non-disclosure agreements, project proposals, master service agreements, and software delivery milestones.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Legitimate Interests:</strong> Processing necessary to secure infrastructure, optimize platform latency, prevent fraud, run internal diagnostic checks, and maintain service availability.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Legal Compliance:</strong> Processing mandated by statutory audit obligations, tax laws, court orders, or law enforcement inquiries.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Explicit Consent:</strong> Where you have provided unambiguous affirmative consent for marketing communications or optional analytics tracking.
                </li>
              </ul>
            </section>

            {/* 4. How We Use Collected Information */}
            <section id="section-4" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                4. How We Use Collected Information
              </h2>
              <p>
                We explicitly enforce strict data minimization principles. Your data is used strictly for:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  Architecting, prototyping, building, testing, and deploying custom MVP software, web applications, mobile apps, and business automations.
                </li>
                <li className="list-disc">
                  Provisioning client staging environments, secure repository access, and automated CI/CD pipeline notifications.
                </li>
                <li className="list-disc">
                  Monitoring system performance, resolving runtime exceptions, and preventing security breaches or DDoS vectors.
                </li>
                <li className="list-disc">
                  Conducting direct project communications, sprint check-ins, milestone sign-offs, and technical support.
                </li>
                <li className="list-disc">
                  Complying with legal obligations, tax filings, and anti-fraud protocols.
                </li>
              </ul>

              {/* Strict AI Exclusion Notice Box */}
              <div className="mt-5 p-4 sm:p-5 rounded-[14px] border border-fg/40 bg-surface text-[13.5px] sm:text-[14px] text-fg leading-relaxed shadow-[3px_3px_0px_0px_rgba(10,10,11,0.85)]">
                <p>
                  <strong className="font-semibold text-fg">Strict AI Exclusion Notice:</strong> We DO NOT sell, lease, or use client proprietary source code, internal data assets, or confidential project briefs to train public third-party LLMs or foundational AI models.
                </p>
              </div>
            </section>

            {/* 5. Third-Party Sub-processors & Service Providers */}
            <section id="section-5" className="scroll-mt-[110px] space-y-5">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                5. Third-Party Sub-processors & Service Providers
              </h2>
              <p>
                To maintain infrastructure reliability, GLAD Studio engages vetted third-party sub-processors subject to strict Data Processing Agreements (DPAs) and confidentiality obligations:
              </p>

              <div className="grid grid-cols-1 gap-4 pt-1">
                {/* Card 1 */}
                <div className="p-4 sm:p-5 rounded-[16px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)]">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-fg leading-snug">
                    Cloud Infrastructure & Hosting
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-fg-muted mt-1 leading-relaxed">
                    Amazon Web Services (AWS), Vercel Inc., Cloudflare Inc., Supabase Inc.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-4 sm:p-5 rounded-[16px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)]">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-fg leading-snug">
                    AI & Machine Learning APIs
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-fg-muted mt-1 leading-relaxed">
                    OpenAI LLC (API Zero-Data Retention), Anthropic PBC, HuggingFace Inc.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-4 sm:p-5 rounded-[16px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)]">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-fg leading-snug">
                    Communication & Scheduling
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-fg-muted mt-1 leading-relaxed">
                    Cal.com Inc., Resend Inc., Slack Technologies / Salesforce.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-4 sm:p-5 rounded-[16px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)]">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-fg leading-snug">
                    Payment Gateways
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-fg-muted mt-1 leading-relaxed">
                    Stripe Inc., Razorpay Software Pvt. Ltd.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Cross-Border Data Transfers */}
            <section id="section-6" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                6. Cross-Border Data Transfers
              </h2>
              <p>
                As a global digital product studio serving international clients, information collected by GLAD Studio may be stored, processed, or transferred across servers located in the United States, European Union, and India. All cross-border data transfers are executed under Standard Contractual Clauses (SCCs) approved by the European Commission, ensuring equivalent data protection safeguards regardless of physical server location.
              </p>
            </section>

            {/* 7. Data Retention & Automatic Destruction Schedules */}
            <section id="section-7" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                7. Data Retention & Automatic Destruction Schedules
              </h2>
              <p>
                We retain personal data and project telemetry only for the period necessary to fulfill contractual obligations and statutory compliance requirements.
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Active Client Project Repositories & Credentials:</strong> Retained during active development and 90 days post-delivery to assist with warranty support, after which staging access is revoked and local build caches are securely wiped.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Financial & Invoice Records:</strong> Retained for 7 years to satisfy statutory tax and financial audit mandates.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Contact Inquiries & Analytics Logs:</strong> Retained for 24 months from last interaction unless erasure is requested.
                </li>
              </ul>
            </section>

            {/* 8. Security Architecture & Encryption Standards */}
            <section id="section-8" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                8. Security Architecture & Encryption Standards
              </h2>
              <p>
                GLAD Studio enforces defense-in-depth cybersecurity measures:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Encryption in Transit:</strong> TLS 1.3 protocol enforcement with HSTS headers across all public endpoints and API interfaces.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Encryption at Rest:</strong> AES-256 encryption applied to static database storage, environment variables, and encrypted key vaults.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Access Controls:</strong> Strict Role-Based Access Control (RBAC), multi-factor authentication (MFA), and zero-trust administrative policies.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Code Vulnerability Audits:</strong> Automated static application security testing (SAST) integrated into internal build pipelines.
                </li>
              </ul>
            </section>

            {/* 9. Cookie & Tracking Policy */}
            <section id="section-9" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                9. Cookie & Tracking Policy
              </h2>
              <p>
                Our Site uses essential cookies, functional cookies, and privacy-focused telemetry to maintain active user sessions, remember theme preferences, and analyze aggregate traffic patterns.
              </p>
              <p>
                Upon your first visit, a cookie consent interface allows you to select preferences or opt out of non-essential analytical cookies. You may also clear or block cookies directly via your browser settings at any time.
              </p>
            </section>

            {/* 10. Client Confidentiality & Intellectual Property */}
            <section id="section-10" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                10. Client Confidentiality & Intellectual Property
              </h2>
              <p>
                GLAD Studio acknowledges that during client engagements, proprietary trade secrets, unreleased software logic, and strategic assets may be shared. All such assets are protected under signed Non-Disclosure Agreements (NDAs) and strict internal compartmentalization controls. Client source code and intellectual property remain 100% owned by the client upon milestone payment settlement.
              </p>
            </section>

            {/* 11. Your Data Protection Rights */}
            <section id="section-11" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                11. Your Data Protection Rights
              </h2>
              <p>
                Depending on your jurisdiction, you possess the following statutory rights regarding your personal information:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Right of Access & Data Portability:</strong> Request a structured, machine-readable copy of your personal data held by us.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Right to Rectification:</strong> Request correction of inaccurate or incomplete personal metrics.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request permanent deletion of your personal records, subject to statutory tax or legal exceptions.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Right to Restrict or Object to Processing:</strong> Limit or object to automated profiling or marketing communications.
                </li>
              </ul>
              <p className="pt-2">
                To exercise any of these rights, submit a formal request to{' '}
                <a href="mailto:contact@gladstudio.net" className="font-semibold text-accent underline hover:opacity-80 transition-opacity">
                  contact@gladstudio.net
                </a>
                . We process verified privacy requests within 30 calendar days.
              </p>
            </section>

            {/* 12. Breach Notification Protocols (72-Hour SLA) */}
            <section id="section-12" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                12. Breach Notification Protocols (72-Hour SLA)
              </h2>
              <p>
                In the event of a confirmed cybersecurity incident impacting personal or client data, GLAD Studio will notify affected data controllers and regulatory authorities within 72 hours of incident confirmation, accompanied by an actionable remediation report detailing scope and containment measures.
              </p>
            </section>

            {/* 13. Children's Privacy Prohibition */}
            <section id="section-13" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                13. Children&apos;s Privacy Prohibition
              </h2>
              <p>
                GLAD Studio&apos;s services are tailored strictly for enterprise clients, founders, and individuals aged 18 and older. We do not knowingly collect or solicit personal data from children under the age of 16. If we become aware of accidental collection, records are purged immediately.
              </p>
            </section>

            {/* 14. Amendments to this Policy */}
            <section id="section-14" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                14. Amendments to this Policy
              </h2>
              <p>
                We reserve the right to modify this Policy periodically to reflect technological shifts, statutory updates, or service expansions. The updated version will be posted with a revised &quot;Last Updated&quot; timestamp at the top of this page.
              </p>
            </section>

            {/* Divider preceding Contact section */}
            <div className="border-t border-line my-10" />

            {/* 15. Contact Information & Legal Inquiries */}
            <section id="section-15" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                15. Contact Information & Legal Inquiries
              </h2>
              <p>
                For any privacy inquiries, Data Protection Officer (DPO) requests, or legal notices, contact our compliance team:
              </p>

              <div className="p-6 rounded-[20px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)] font-mono text-[13px] sm:text-[14px] space-y-2 text-fg">
                <div className="font-semibold text-[14.5px] sm:text-[15.5px] mb-3 text-fg">
                  GLAD Studio Legal & Compliance
                </div>
                <div>
                  <span className="text-fg-muted">Email:</span>{' '}
                  <a href="mailto:contact@gladstudio.net" className="text-fg underline hover:text-accent transition-colors">
                    contact@gladstudio.net
                  </a>
                </div>
                <div>
                  <span className="text-fg-muted">General Contact:</span>{' '}
                  <a href="mailto:contact@gladstudio.net" className="text-fg underline hover:text-accent transition-colors">
                    contact@gladstudio.net
                  </a>
                </div>
                <div>
                  <span className="text-fg-muted">Website:</span>{' '}
                  <a href="https://gladstudio.net" target="_blank" rel="noopener noreferrer" className="text-fg underline hover:text-accent transition-colors">
                    https://gladstudio.net
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Section Eyebrow (GLD® — 11) */}
      <div className="mt-[70px] md:mt-[100px] xl:mt-[140px]">
        <SectionEyebrow
          left={<>COMMON QUESTIONS <span lang="hi">सहायता</span></>}
          index="(GLD® — 11)"
          right="CLARIFICATIONS"
        />
      </div>

      {/* FAQ Section (includes GLD® — 12 Section Eyebrow at bottom) */}
      <Faq />

      {/* Footer with Filmstrip */}
      <Footer />
    </main>
  );
}
