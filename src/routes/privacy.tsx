import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, Lock, Eye, FileText, Server, Globe, Key, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — GLAD studio" },
      {
        name: "description",
        content:
          "Comprehensive Privacy Policy detailing how GLAD studio collects, protects, processes, and manages personal data, client project assets, and user privacy.",
      },
      { property: "og:title", content: "Privacy Policy — GLAD studio" },
      {
        property: "og:description",
        content:
          "Comprehensive Privacy Policy detailing how GLAD studio collects, protects, processes, and manages personal data.",
      },
      { property: "og:url", content: "https://gladstudio.net/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const lastUpdated = "July 28, 2026";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-brand selection:text-black">
      <Header />
      <HeroBackground />

      <main className="flex-1 relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20">
        <Reveal>
          <div className="border-b border-border pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold text-brand mb-4">
              <ShieldCheck className="size-3.5" />
              Legal & Compliance
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last Updated: <span className="font-semibold text-foreground">{lastUpdated}</span> | Version 2.4
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            {/* Table of Contents sidebar */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 p-5 surface-card rounded-2xl border border-border text-xs space-y-2">
                <p className="font-bold text-foreground uppercase tracking-wider mb-3">Contents</p>
                {[
                  "1. Overview & Data Controller",
                  "2. Categories of Data Collected",
                  "3. Legal Basis for Processing",
                  "4. How We Use Collected Data",
                  "5. Third-Party Sub-processors",
                  "6. Cross-Border Transfers",
                  "7. Data Retention & Destruction",
                  "8. Security & Encryption Standards",
                  "9. Cookie & Tracking Policy",
                  "10. Client Confidentiality & IP",
                  "11. User Rights & Data Requests",
                  "12. Breach Notification SLAs",
                  "13. Children's Privacy",
                  "14. Amendments & Policy Updates",
                  "15. Contact Information",
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx + 1}`}
                    className="block text-muted-foreground hover:text-brand transition-colors py-1 truncate"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </aside>

            {/* Comprehensive Legal Text */}
            <div className="lg:col-span-8 space-y-10 text-sm leading-relaxed text-muted-foreground font-normal">
              {/* Section 1 */}
              <section id="section-1" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  1. Overview & Data Controller Identification
                </h2>
                <p>
                  This Privacy Policy ("Policy") sets forth the explicit protocols, data collection mechanics, storage infrastructure, and user rights governed by <strong>GLAD Studio</strong> ("Company", "We", "Us", or "Our") in connection with your access to and use of <code>gladstudio.net</code> (the "Site"), our product engineering services, proprietary client portals, API endpoints, and associated digital products (collectively, the "Services").
                </p>
                <p>
                  GLAD Studio operates as both a Data Controller and Data Processor under applicable global data protection legislation, including but not limited to the General Data Protection Regulation (EU 2016/679) ("GDPR"), the California Consumer Privacy Act ("CCPA/CPRA"), the UK Data Protection Act 2018, and the Digital Personal Data Protection Act ("DPDP").
                </p>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  2. Categories of Information Collected
                </h2>
                <p>
                  We collect information through direct submission, automated system telemetry, and integrated third-party analytical pipelines. The specific categories of data processed include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">Identity & Contact Telemetry:</strong> Full names, business email addresses, telephone numbers, organizational affiliations, job titles, and preferred communication channels provided via discovery forms, scheduling calendars, or inquiry interfaces.
                  </li>
                  <li>
                    <strong className="text-foreground">Project & Technical Artifacts:</strong> Product specifications, architecture blueprints, database schemas, repository keys, API credentials, wireframes, brand assets, and proprietary code bases shared during client engagements.
                  </li>
                  <li>
                    <strong className="text-foreground">Artificial Intelligence & Model Interaction Logs:</strong> Prompts, contextual embeddings, model evaluation logs, and structured inputs submitted to AI workflow features integrated into our platform or client custom solutions.
                  </li>
                  <li>
                    <strong className="text-foreground">Automated System & Diagnostic Data:</strong> Internet Protocol (IP) addresses, browser fingerprinting metrics, device OS profiles, HTTP headers, referrer URIs, session duration, clickstream pathways, and time-stamped interaction metrics.
                  </li>
                  <li>
                    <strong className="text-foreground">Billing & Transactional Metadata:</strong> Invoice records, transaction identifiers, payment gateway tokens, tax identification metrics, and payment milestone logs (handled securely via PCI-DSS compliant third-party gateways).
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  3. Legal Basis for Processing
                </h2>
                <p>
                  We process personal and client data under the following established legal grounds:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Contractual Necessity:</strong> Processing required to execute non-disclosure agreements, project proposals, master service agreements, and software delivery milestones.</li>
                  <li><strong>Legitimate Interests:</strong> Processing necessary to secure infrastructure, optimize platform latency, prevent fraud, run internal diagnostic checks, and maintain service availability.</li>
                  <li><strong>Legal Compliance:</strong> Processing mandated by statutory audit obligations, tax laws, court orders, or law enforcement inquiries.</li>
                  <li><strong>Explicit Consent:</strong> Where you have provided unambiguous affirmative consent for marketing communications or optional analytics tracking.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  4. How We Use Collected Information
                </h2>
                <p>
                  We explicitly enforce strict data minimization principles. Your data is used strictly for:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Architecting, prototyping, building, testing, and deploying custom MVP software, web applications, mobile apps, and business automations.</li>
                  <li>Provisioning client staging environments, secure repository access, and automated CI/CD pipeline notifications.</li>
                  <li>Monitoring system performance, resolving runtime exceptions, and preventing security breaches or DDoS vectors.</li>
                  <li>Conducting direct project communications, sprint check-ins, milestone sign-offs, and technical support.</li>
                  <li>Complying with legal obligations, tax filings, and anti-fraud protocols.</li>
                </ul>
                <p className="bg-surface p-4 rounded-xl border border-border text-xs text-foreground font-medium">
                  <strong>Strict AI Exclusion Notice:</strong> We DO NOT sell, lease, or use client proprietary source code, internal data assets, or confidential project briefs to train public third-party LLMs or foundational AI models.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  5. Third-Party Sub-processors & Service Providers
                </h2>
                <p>
                  To maintain infrastructure reliability, GLAD Studio engages vetted third-party sub-processors subject to strict Data Processing Agreements (DPAs) and confidentiality obligations:
                </p>
                <div className="grid gap-3 pt-2">
                  <div className="p-3 surface-card rounded-xl border border-border">
                    <p className="font-bold text-foreground">Cloud Infrastructure & Hosting</p>
                    <p className="text-xs">Amazon Web Services (AWS), Vercel Inc., Cloudflare Inc., Supabase Inc.</p>
                  </div>
                  <div className="p-3 surface-card rounded-xl border border-border">
                    <p className="font-bold text-foreground">AI & Machine Learning APIs</p>
                    <p className="text-xs">OpenAI LLC (API Zero-Data Retention), Anthropic PBC, HuggingFace Inc.</p>
                  </div>
                  <div className="p-3 surface-card rounded-xl border border-border">
                    <p className="font-bold text-foreground">Communication & Scheduling</p>
                    <p className="text-xs">Cal.com Inc., Resend Inc., Slack Technologies / Salesforce.</p>
                  </div>
                  <div className="p-3 surface-card rounded-xl border border-border">
                    <p className="font-bold text-foreground">Payment Gateways</p>
                    <p className="text-xs">Stripe Inc., Razorpay Software Pvt. Ltd.</p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  6. Cross-Border Data Transfers
                </h2>
                <p>
                  As a global digital product studio serving international clients, information collected by GLAD Studio may be stored, processed, or transferred across servers located in the United States, European Union, and India. All cross-border data transfers are executed under Standard Contractual Clauses (SCCs) approved by the European Commission, ensuring equivalent data protection safeguards regardless of physical server location.
                </p>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  7. Data Retention & Automatic Destruction Schedules
                </h2>
                <p>
                  We retain personal data and project telemetry only for the period necessary to fulfill contractual obligations and statutory compliance requirements.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Active Client Project Repositories & Credentials:</strong> Retained during active development and 90 days post-delivery to assist with warranty support, after which staging access is revoked and local build caches are securely wiped.</li>
                  <li><strong>Financial & Invoice Records:</strong> Retained for 7 years to satisfy statutory tax and financial audit mandates.</li>
                  <li><strong>Contact Inquiries & Analytics Logs:</strong> Retained for 24 months from last interaction unless erasure is requested.</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  8. Security Architecture & Encryption Standards
                </h2>
                <p>
                  GLAD Studio enforces defense-in-depth cybersecurity measures:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Encryption in Transit:</strong> TLS 1.3 protocol enforcement with HSTS headers across all public endpoints and API interfaces.</li>
                  <li><strong>Encryption at Rest:</strong> AES-256 encryption applied to static database storage, environment variables, and encrypted key vaults.</li>
                  <li><strong>Access Controls:</strong> Strict Role-Based Access Control (RBAC), multi-factor authentication (MFA), and zero-trust administrative policies.</li>
                  <li><strong>Code Vulnerability Audits:</strong> Automated static application security testing (SAST) integrated into internal build pipelines.</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  9. Cookie & Tracking Policy
                </h2>
                <p>
                  Our Site uses essential cookies, functional cookies, and privacy-focused telemetry to maintain active user sessions, remember theme preferences, and analyze aggregate traffic patterns.
                </p>
                <p>
                  Upon your first visit, a cookie consent interface allows you to select preferences or opt out of non-essential analytical cookies. You may also clear or block cookies directly via your browser settings at any time.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  10. Client Confidentiality & Intellectual Property
                </h2>
                <p>
                  GLAD Studio acknowledges that during client engagements, proprietary trade secrets, unreleased software logic, and strategic assets may be shared. All such assets are protected under signed Non-Disclosure Agreements (NDAs) and strict internal compartmentalization controls. Client source code and intellectual property remain 100% owned by the client upon milestone payment settlement.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  11. Your Data Protection Rights
                </h2>
                <p>
                  Depending on your jurisdiction, you possess the following statutory rights regarding your personal information:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Right of Access & Data Portability:</strong> Request a structured, machine-readable copy of your personal data held by us.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal metrics.</li>
                  <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request permanent deletion of your personal records, subject to statutory tax or legal exceptions.</li>
                  <li><strong>Right to Restrict or Object to Processing:</strong> Limit or object to automated profiling or marketing communications.</li>
                </ul>
                <p>
                  To exercise any of these rights, submit a formal request to <a href="mailto:contact@gladstudio.net" className="text-brand underline font-semibold">contact@gladstudio.net</a>. We process verified privacy requests within 30 calendar days.
                </p>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  12. Breach Notification Protocols (72-Hour SLA)
                </h2>
                <p>
                  In the event of a confirmed cybersecurity incident impacting personal or client data, GLAD Studio will notify affected data controllers and regulatory authorities within 72 hours of incident confirmation, accompanied by an actionable remediation report detailing scope and containment measures.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  13. Children's Privacy Prohibition
                </h2>
                <p>
                  GLAD Studio's services are tailored strictly for enterprise clients, founders, and individuals aged 18 and older. We do not knowingly collect or solicit personal data from children under the age of 16. If we become aware of accidental collection, records are purged immediately.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="space-y-3">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  14. Amendments to this Policy
                </h2>
                <p>
                  We reserve the right to modify this Policy periodically to reflect technological shifts, statutory updates, or service expansions. The updated version will be posted with a revised "Last Updated" timestamp at the top of this page.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="space-y-3 border-t border-border pt-6">
                <h2 className="text-xl font-bold text-foreground tracking-tight">
                  15. Contact Information & Legal Inquiries
                </h2>
                <p>
                  For any privacy inquiries, Data Protection Officer (DPO) requests, or legal notices, contact our compliance team:
                </p>
                <div className="bg-surface p-5 rounded-2xl border border-border space-y-1 font-mono text-xs">
                  <p className="font-bold text-foreground text-sm">GLAD Studio Legal & Compliance</p>
                  <p>Email: <a href="mailto:contact@gladstudio.net" className="text-brand underline">contact@gladstudio.net</a></p>
                  <p>General Contact: <a href="mailto:hello@gladstudio.net" className="text-brand underline">hello@gladstudio.net</a></p>
                  <p>Website: <a href="https://gladstudio.net" className="text-brand underline">https://gladstudio.net</a></p>
                </div>
              </section>
            </div>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
