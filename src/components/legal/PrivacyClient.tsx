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

          {/* Right Column: Expanded Policy Body */}
          <div className="space-y-12 md:space-y-16 text-[14.5px] sm:text-[15px] text-fg/80 leading-[1.68]">
            
            {/* 1. Overview & Data Controller Identification */}
            <section id="section-1" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                1. Overview &amp; Data Controller Identification
              </h2>
              <p>
                This Comprehensive Privacy Policy (&quot;Policy&quot;, &quot;Data Governance Charter&quot;) defines the rigorous protocols, architectural data collection mechanics, transmission frameworks, storage infrastructure, and statutory user rights administered by <strong className="font-semibold text-fg">GLAD Studio</strong> (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;) in connection with your browsing, access, and interactive engagement with gladstudio.net (the &quot;Site&quot;), our custom software engineering services, proprietary client portals, staging preview deployments, API proxies, and associated digital systems (collectively, the &quot;Services&quot;).
              </p>
              <p>
                GLAD Studio functions in dual regulatory capacities under international data protection jurisprudence:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">As a Data Controller:</strong> With respect to direct website visitors, prospective client leads, billing and administrative contacts, and communication telemetry gathered via discovery forms, contact endpoints, and scheduling integrations.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">As a Data Processor / Sub-processor:</strong> With respect to staging data, mock datasets, or test user records provided or hosted on behalf of enterprise clients during active software development, QA testing, and systems integration sprints.
                </li>
              </ul>
              <p>
                We adhere strictly to global data protection regimes, including the European Union General Data Protection Regulation (Regulation (EU) 2016/679) (&quot;GDPR&quot;), the United Kingdom Data Protection Act 2018 (&quot;UK GDPR&quot;), the California Consumer Privacy Act as amended by the California Privacy Rights Act (&quot;CCPA/CPRA&quot;), the Indian Digital Personal Data Protection Act 2023 (&quot;DPDP&quot;), and all other applicable regional privacy statutes.
              </p>
            </section>

            {/* 2. Categories of Information Collected */}
            <section id="section-2" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                2. Categories of Information Collected
              </h2>
              <p>
                We collect information through direct user submission, automated system and network telemetry, server middleware logs, and integrated third-party analytical pipelines. The explicit categories of data processed include:
              </p>
              <ul className="space-y-4 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Identity &amp; Contact Telemetry:</strong> Full personal names, corporate email addresses, direct telephone numbers, company or startup legal names, operational roles, job titles, geographical location (country and city), LinkedIn or GitHub profiles, and preferred communication channels submitted via proposal discovery forms, calendar scheduling widgets, or direct email inquiries.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Project, Architecture &amp; Technical Artifacts:</strong> Product requirements documents (PRDs), database entity relationship diagrams (ERDs), API endpoint schemas, repository access tokens, Figma design files, brand identity guidelines, staging environment SSH keys, test database seed dumps, and proprietary software architecture logic provided during scoping and development sprints.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Artificial Intelligence &amp; Model Interaction Logs:</strong> Prompts, contextual embeddings, retrieval queries, system prompt parameters, model evaluation logs, and structured JSON output payloads submitted to or generated within client-commissioned AI workflow features, agentic pipelines, or custom RAG vector architectures.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Automated System, Network &amp; Diagnostic Data:</strong> Internet Protocol (IPv4/IPv6) addresses, browser user-agent signatures, device hardware specifications, operating system versions, HTTP request headers, referrer URLs, session durations, screen resolutions, clickstream event paths, edge latency measurements, and runtime JavaScript error stack traces captured by edge middleware.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Billing &amp; Transactional Metadata:</strong> Corporate tax identification numbers (GSTIN/VAT/EIN), billing entity addresses, transaction identifiers, payment gateway invoice reference tokens, and milestone settlement records. All payment card information is tokenized and processed securely via PCI-DSS Level 1 certified payment gateways (Stripe, Razorpay); zero raw credit card or banking credentials touch or reside on our application servers.
                </li>
              </ul>
            </section>

            {/* 3. Legal Basis for Processing */}
            <section id="section-3" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                3. Legal Basis for Processing
              </h2>
              <p>
                In compliance with Article 6 of the GDPR and comparable global standards, GLAD Studio processes personal and client telemetry exclusively where an established legal foundation exists:
              </p>
              <ul className="space-y-4 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Contractual Necessity (Art. 6(1)(b) GDPR):</strong> Processing essential to draft project proposals, execute bilateral Non-Disclosure Agreements (NDAs), establish staging development environments, provision private code repositories, fulfill sprint milestones, and complete deliverable handovers under signed Statements of Work (SOWs).
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Legitimate Business Interests (Art. 6(1)(f) GDPR):</strong> Processing necessary to maintain edge infrastructure availability, optimize web platform latency, prevent malicious DDoS vectors, investigate runtime exceptions, prevent fraudulent inquiries, enforce intellectual property protections, and ensure high-integrity communications.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Statutory Legal Compliance (Art. 6(1)(c) GDPR):</strong> Processing mandated by corporate tax accounting regulations, statutory financial audit obligations, international commercial trade laws, anti-fraud compliance, or formal court subpoenas.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Explicit &amp; Unambiguous Consent (Art. 6(1)(a) GDPR):</strong> Where you have granted affirmative, opt-in consent for non-essential analytical cookies, studio newsletters, marketing case study features, or voluntary research feedback questionnaires. Consent may be revoked at any time.
                </li>
              </ul>
            </section>

            {/* 4. How We Use Collected Information */}
            <section id="section-4" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                4. How We Use Collected Information
              </h2>
              <p>
                We enforce strict data minimization principles across our engineering practices. Information collected is used strictly for legitimate technical, operational, and contractual purposes, including:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  Architecting, prototyping, engineering, testing, and deploying custom MVP platforms, web applications, mobile apps, and business automations.
                </li>
                <li className="list-disc">
                  Provisioning isolated staging servers, configuring automated CI/CD deployment pipelines, and managing team access to private git repositories.
                </li>
                <li className="list-disc">
                  Monitoring runtime system health, analyzing edge server exceptions, conducting load tests, and patching cybersecurity vulnerabilities.
                </li>
                <li className="list-disc">
                  Facilitating direct founder-to-client sprint reviews, milestone sign-offs, technical advisory sessions, and code handoff walkthroughs.
                </li>
                <li className="list-disc">
                  Generating milestone tax invoices, processing milestone payments, and maintaining compliance with corporate financial audit standards.
                </li>
              </ul>

              {/* Strict AI Exclusion Notice Box */}
              <div className="mt-6 p-5 rounded-[16px] border-2 border-fg bg-surface text-[13.5px] sm:text-[14px] text-fg leading-relaxed shadow-[4px_4px_0px_0px_rgba(10,10,11,1)] space-y-2">
                <div className="font-mono font-semibold text-[13px] tracking-wider text-fg uppercase">
                  STRICT AI MODEL EXCLUSION GUARANTEE
                </div>
                <p className="text-fg/90">
                  <strong className="font-semibold text-fg">Zero Third-Party Training:</strong> GLAD Studio explicitly guarantees that we DO NOT sell, lease, license, or utilize client proprietary source code, internal data models, database dumps, confidential project briefs, or private vector embeddings to train public foundational AI models, third-party Large Language Models (LLMs), or public commercial datasets.
                </p>
              </div>
            </section>

            {/* 5. Third-Party Sub-processors & Service Providers */}
            <section id="section-5" className="scroll-mt-[110px] space-y-5">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                5. Third-Party Sub-processors &amp; Service Providers
              </h2>
              <p>
                To provide high-availability edge hosting, secure database management, automated build pipelines, and reliable communication channels, GLAD Studio engages vetted third-party cloud infrastructure vendors. All sub-processors are bound by executed Data Processing Agreements (DPAs) with strict security, confidentiality, and data handling standards:
              </p>

              <div className="grid grid-cols-1 gap-4 pt-1">
                {/* Card 1 */}
                <div className="p-4 sm:p-5 rounded-[16px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)]">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-fg leading-snug">
                    Cloud Infrastructure &amp; Hosting
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-fg-muted mt-1 leading-relaxed">
                    Amazon Web Services (AWS), Vercel Inc. (Edge serverless runtime and SSR caching), Cloudflare Inc. (WAF, DDoS mitigation, and SSL termination), Supabase Inc. (PostgreSQL and Auth).
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-4 sm:p-5 rounded-[16px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)]">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-fg leading-snug">
                    AI &amp; Machine Learning APIs
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-fg-muted mt-1 leading-relaxed">
                    OpenAI LLC (Enterprise API with Zero-Data Retention policy compliance), Anthropic PBC (Claude API enterprise privacy tier), HuggingFace Inc. (Dedicated inference endpoints).
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-4 sm:p-5 rounded-[16px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)]">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-fg leading-snug">
                    Communication &amp; Scheduling
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-fg-muted mt-1 leading-relaxed">
                    Cal.com Inc. (SOC2 compliant calendar scheduling), Resend Inc. (Transactional email delivery), Slack Technologies / Salesforce (Private sprint channels).
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-4 sm:p-5 rounded-[16px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)]">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-fg leading-snug">
                    Payment Gateways
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-fg-muted mt-1 leading-relaxed">
                    Stripe Inc. (PCI-DSS Level 1 global card &amp; ACH processing), Razorpay Software Pvt. Ltd. (Domestic INR payment rails &amp; GST invoicing).
                  </p>
                </div>
              </div>
              <p>
                We conduct periodic technical reviews of all sub-processors to verify ongoing compliance with SOC 2 Type II, ISO/IEC 27001, and GDPR Article 28 data protection requirements.
              </p>
            </section>

            {/* 6. Cross-Border Data Transfers */}
            <section id="section-6" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                6. Cross-Border Data Transfers
              </h2>
              <p>
                As a global product engineering studio serving startups and enterprises across the United States, European Union, United Kingdom, and Asia-Pacific, telemetry and project artifacts may be processed, transferred, and stored on encrypted servers located in the United States, European Union, and India.
              </p>
              <p>
                <strong className="font-semibold text-fg">Standard Contractual Clauses (SCCs):</strong> For all cross-border data transfers originating from the European Economic Area (EEA) or the United Kingdom, GLAD Studio executes European Commission-approved Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914) with all relevant data partners and sub-processors.
              </p>
              <p>
                <strong className="font-semibold text-fg">Supplemental Technical Safeguards:</strong> Transfers are reinforced by end-to-end encryption in transit (TLS 1.3), AES-256 bit encryption at rest, strict credential tokenization, and strict Role-Based Access Controls (RBAC) to ensure that personal and proprietary information receives an equivalent level of protection regardless of geographic processing location.
              </p>
            </section>

            {/* 7. Data Retention & Automatic Destruction Schedules */}
            <section id="section-7" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                7. Data Retention &amp; Automatic Destruction Schedules
              </h2>
              <p>
                GLAD Studio maintains disciplined data retention schedules designed to ensure personal and project data is preserved only for the duration strictly necessary to fulfill contractual obligations, provide post-launch support, and satisfy statutory tax requirements:
              </p>
              <ul className="space-y-4 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Active Project Repositories, Staging Environments &amp; Sandbox Keys:</strong> Retained during the active software development lifecycle and for a mandatory ninety (90) calendar-day post-handover warranty window. Upon expiration of the warranty period, staging database instances are destroyed, temporary server credentials are revoked, and local developer build caches are securely erased.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Financial, Invoicing &amp; Transactional Records:</strong> Retained for seven (7) statutory fiscal years following transaction completion in immutable encrypted cloud storage to fulfill Indian Income Tax Act requirements, GST audit obligations, and international accounting standards.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Inquiry Telemetry, Discovery Decks &amp; Diagnostic Logs:</strong> Retained for a rolling period of twenty-four (24) months from the last documented communication or interaction, after which records are automatically purged via scheduled cron jobs unless an explicit erasure request is received sooner.
                </li>
              </ul>
            </section>

            {/* 8. Security Architecture & Encryption Standards */}
            <section id="section-8" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                8. Security Architecture &amp; Encryption Standards
              </h2>
              <p>
                GLAD Studio implements defense-in-depth cybersecurity protocols, modern cryptographic standards, and infrastructure controls across all operational layers:
              </p>
              <ul className="space-y-4 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Cryptographic Encryption in Transit:</strong> Mandatory TLS 1.3 protocol enforcement with modern cipher suites and HTTP Strict Transport Security (HSTS) headers (1-year preload directive) across all public web endpoints, API proxies, and staging environments.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Military-Grade Encryption at Rest:</strong> AES-256 bit symmetric key encryption applied across all persistent database clusters, cloud object storage buckets, backup archives, and environment secret managers (AWS KMS / Doppler).
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Access Governance &amp; Multi-Factor Authentication (MFA):</strong> Strict enforcement of the Principle of Least Privilege (PoLP), hardware security key or time-based one-time password (TOTP) MFA on all code repositories, cloud consoles, and administrative dashboards, with automated session expiration.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Automated Code Security &amp; SAST Audits:</strong> Continuous Static Application Security Testing (SAST), automated container dependency vulnerability scanning (Dependabot/Snyk), and pre-commit secret-scanning hooks integrated into our CI/CD pipelines to prevent credential leakage.
                </li>
              </ul>
            </section>

            {/* 9. Cookie & Tracking Policy */}
            <section id="section-9" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                9. Cookie &amp; Tracking Policy
              </h2>
              <p>
                Our website utilizes privacy-respecting cookies, local browser storage tokens, and lightweight edge telemetry to maintain active user sessions, remember UI theme preferences, and analyze aggregate traffic patterns without compromising personal anonymity:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Strictly Necessary Cookies:</strong> Essential for core site navigation, CSRF token validation, and secure form submissions. These cannot be disabled.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Functional &amp; Preference Cookies:</strong> Preserve UI state, reduced-motion preferences, and temporary form field inputs across browser sessions.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Aggregate Analytical Telemetry:</strong> Anonymized traffic metrics (pageviews, referrers, bounce rates) processed without cross-site tracking cookies, device fingerprinting, or personal profiling.
                </li>
              </ul>
              <p>
                You may configure your web browser (Chrome, Safari, Firefox, Edge) to block, reject, or alert you about cookies. Please note that disabling essential cookies may impact certain interactive form functionalities on our website.
              </p>
            </section>

            {/* 10. Client Confidentiality & Intellectual Property */}
            <section id="section-10" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                10. Client Confidentiality &amp; Intellectual Property
              </h2>
              <p>
                GLAD Studio recognizes that during engineering engagements, clients disclose confidential business strategies, unreleased software logic, proprietary algorithms, and trade secrets. All client proprietary assets are governed under strict mutual Non-Disclosure Agreements (NDAs) and clean-room development protocols.
              </p>
              <p>
                <strong className="font-semibold text-fg">Absolute IP Sovereignty:</strong> Upon milestone invoice settlement, full ownership of all custom source code, design artifacts, database architectures, and digital build assets transfers 100% to the Client. GLAD Studio will never repurpose, sublicense, or expose client-specific proprietary code bases to any other client or external organization.
              </p>
            </section>

            {/* 11. Your Data Protection Rights */}
            <section id="section-11" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                11. Your Data Protection Rights
              </h2>
              <p>
                Depending on your country, state, or regional jurisdiction (including the EEA, UK, California, and India), you hold statutory rights regarding the personal information we process:
              </p>
              <ul className="space-y-4 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Right of Access &amp; Data Portability (Art. 15/20 GDPR):</strong> Request a complete, structured, machine-readable (JSON/CSV) copy of all personal records and telemetry held by GLAD Studio.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Right to Rectification (Art. 16 GDPR):</strong> Request the immediate correction, modification, or completion of inaccurate or outdated personal telemetry.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Right to Erasure / &quot;Right to be Forgotten&quot; (Art. 17 GDPR):</strong> Request the permanent deletion and purging of your personal records from all active databases, subject to statutory tax record retention requirements.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Right to Restrict or Object to Processing (Art. 18/21 GDPR):</strong> Limit or object to specific processing activities, automated profiling, or marketing communications.
                </li>
              </ul>
              <p className="pt-2">
                To exercise any of these statutory rights, please submit a formal request to our compliance team at{' '}
                <a href="mailto:contact@gladstudio.net" className="font-semibold text-accent underline hover:opacity-80 transition-opacity">
                  contact@gladstudio.net
                </a>
                . We will verify your identity and process your request within thirty (30) calendar days without fee.
              </p>
            </section>

            {/* 12. Breach Notification Protocols (72-Hour SLA) */}
            <section id="section-12" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                12. Breach Notification Protocols (72-Hour SLA)
              </h2>
              <p>
                In the event of a confirmed cybersecurity incident, unauthorized data access, or infrastructure breach impacting personal data or client project assets, GLAD Studio adheres to strict incident response protocols aligned with GDPR Articles 33 and 34 and international standards:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">72-Hour Controller Notification:</strong> We will formally notify affected client data controllers and relevant data protection supervisory authorities within seventy-two (72) hours of incident confirmation.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Forensic Remediation Report:</strong> Notifications will include an actionable forensic assessment detailing the nature of the breach, categories of affected records, estimated impact, and immediate containment measures taken.
                </li>
              </ul>
            </section>

            {/* 13. Children's Privacy Prohibition */}
            <section id="section-13" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                13. Children&apos;s Privacy Prohibition
              </h2>
              <p>
                GLAD Studio&apos;s digital services, engineering consultations, and SaaS products are designed strictly for enterprise clients, commercial founders, and adults aged eighteen (18) and older. We do not knowingly solicit, collect, or process personal data from children under the age of sixteen (16) pursuant to the Children&apos;s Online Privacy Protection Act (COPPA) and Article 8 of the GDPR.
              </p>
              <p>
                If we discover that personal data of a minor has been inadvertently submitted through our discovery forms, we will immediately initiate secure data purging protocols to delete the records permanently from all servers.
              </p>
            </section>

            {/* 14. Amendments to this Policy */}
            <section id="section-14" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                14. Amendments to this Policy
              </h2>
              <p>
                GLAD Studio reserves the right to revise and update this Privacy Policy periodically to reflect technological evolutions, infrastructure migrations, emerging statutory requirements, or studio service expansions.
              </p>
              <p>
                Any material revisions will be reflected with an updated &quot;Last Updated&quot; timestamp and version increment at the top of this document. We encourage clients and website visitors to review this page periodically to remain informed of our ongoing data protection standards.
              </p>
            </section>

            {/* Divider preceding Contact section */}
            <div className="border-t border-line my-10" />

            {/* 15. Contact Information & Legal Inquiries */}
            <section id="section-15" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                15. Contact Information &amp; Legal Inquiries
              </h2>
              <p>
                For any privacy inquiries, Data Protection Officer (DPO) requests, sub-processor audits, or formal legal notices, please contact our dedicated compliance team:
              </p>

              <div className="p-6 rounded-[20px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)] font-mono text-[13px] sm:text-[14px] space-y-2 text-fg">
                <div className="font-semibold text-[14.5px] sm:text-[15.5px] mb-3 text-fg">
                  GLAD Studio Legal &amp; Compliance
                </div>
                <div>
                  <span className="text-fg-muted">Email:</span>{' '}
                  <a href="mailto:contact@gladstudio.net" className="text-fg underline hover:text-accent transition-colors">
                    contact@gladstudio.net
                  </a>
                </div>
                <div>
                  <span className="text-fg-muted">Inquiries:</span>{' '}
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
