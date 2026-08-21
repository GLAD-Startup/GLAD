import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";

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
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* Hero */}
        <Section size="hero" tone="paper" divider={false}>
          <SectionRail label="LEGAL" />

          <div className="max-w-[720px] flex flex-col items-start text-left">
            <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.04] tracking-tight font-display font-medium text-[var(--color-ink)]">
              Privacy Policy
            </h1>
            <div className="mt-4 font-mono text-[12px] text-[var(--color-ink-3)]">
              Last Updated: {lastUpdated} | Version 2.4
            </div>
          </div>
        </Section>

        {/* Body */}
        <Section size="compact" tone="paper" divider={false}>
          <div className="prose text-left">
            <h2>1. Overview & Data Controller Identification</h2>
            <p>
              This Privacy Policy ("Policy") sets forth the explicit protocols, data collection
              mechanics, storage infrastructure, and user rights governed by{" "}
              <strong>GLAD Studio</strong> ("Company", "We", "Us", or "Our") in connection with your
              access to and use of <code>gladstudio.net</code> (the "Site"), our product engineering
              services, proprietary client portals, API endpoints, and associated digital products
              (collectively, the "Services").
            </p>
            <p>
              GLAD Studio operates as both a Data Controller and Data Processor under applicable global
              data protection legislation, including but not limited to the General Data Protection
              Regulation (EU 2016/679) ("GDPR"), the California Consumer Privacy Act ("CCPA/CPRA"), the
              UK Data Protection Act 2018, and the Digital Personal Data Protection Act ("DPDP").
            </p>

            <h2>2. Categories of Information Collected</h2>
            <p>
              We collect information through direct submission, automated system telemetry, and
              integrated third-party analytical pipelines. The specific categories of data processed
              include:
            </p>
            <ul>
              <li>
                <strong>Identity & Contact Telemetry:</strong> Full names, business email addresses,
                telephone numbers, organizational affiliations, job titles, and preferred
                communication channels provided via discovery forms, scheduling calendars, or inquiry
                interfaces.
              </li>
              <li>
                <strong>Project & Technical Artifacts:</strong> Product specifications, architecture
                blueprints, database schemas, repository keys, API credentials, wireframes, brand
                assets, and proprietary code bases shared during client engagements.
              </li>
              <li>
                <strong>Artificial Intelligence & Model Interaction Logs:</strong> Prompts, contextual
                embeddings, model evaluation logs, and structured inputs submitted to AI workflow
                features integrated into our platform or client custom solutions.
              </li>
              <li>
                <strong>Automated System & Diagnostic Data:</strong> Internet Protocol (IP) addresses,
                browser fingerprinting metrics, device OS profiles, HTTP headers, referrer URIs,
                session duration, clickstream pathways, and time-stamped interaction metrics.
              </li>
              <li>
                <strong>Billing & Transactional Metadata:</strong> Invoice records, transaction
                identifiers, payment gateway tokens, tax identification metrics, and payment
                milestone logs (handled securely via PCI-DSS compliant third-party gateways).
              </li>
            </ul>

            <h2>3. Legal Basis for Processing</h2>
            <p>
              We process personal and client data under the following established legal grounds:
            </p>
            <ul>
              <li>
                <strong>Contractual Necessity:</strong> Processing required to execute non-disclosure
                agreements, project proposals, master service agreements, and software delivery
                milestones.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> Processing necessary to secure infrastructure,
                optimize platform latency, prevent fraud, run internal diagnostic checks, and
                maintain service availability.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Processing mandated by statutory audit
                obligations, tax laws, court orders, or law enforcement inquiries.
              </li>
              <li>
                <strong>Explicit Consent:</strong> Where you have provided unambiguous affirmative
                consent for marketing communications or optional analytics tracking.
              </li>
            </ul>

            <h2>4. How We Use Collected Information</h2>
            <p>
              We explicitly enforce strict data minimization principles. Your data is used strictly
              for:
            </p>
            <ul>
              <li>
                Architecting, prototyping, building, testing, and deploying custom MVP software, web
                applications, mobile apps, and business automations.
              </li>
              <li>
                Provisioning client staging environments, secure repository access, and automated
                CI/CD pipeline notifications.
              </li>
              <li>
                Monitoring system performance, resolving runtime exceptions, and preventing security
                breaches or DDoS vectors.
              </li>
              <li>
                Conducting direct project communications, sprint check-ins, milestone sign-offs, and
                technical support.
              </li>
              <li>Complying with legal obligations, tax filings, and anti-fraud protocols.</li>
            </ul>
            <blockquote>
              <strong>Strict AI Exclusion Notice:</strong> We DO NOT sell, lease, or use client
              proprietary source code, internal data assets, or confidential project briefs to train
              public third-party LLMs or foundational AI models.
            </blockquote>

            <h2>5. Third-Party Sub-processors & Service Providers</h2>
            <p>
              To maintain infrastructure reliability, GLAD Studio engages vetted third-party
              sub-processors subject to strict Data Processing Agreements (DPAs) and confidentiality
              obligations:
            </p>
            <ul>
              <li>
                <strong>Cloud Infrastructure & Hosting:</strong> Amazon Web Services (AWS), Vercel
                Inc., Cloudflare Inc., Supabase Inc.
              </li>
              <li>
                <strong>AI & Machine Learning APIs:</strong> OpenAI LLC (API Zero-Data Retention),
                Anthropic PBC, HuggingFace Inc.
              </li>
              <li>
                <strong>Communication & Scheduling:</strong> Cal.com Inc., Resend Inc., Slack
                Technologies / Salesforce.
              </li>
              <li>
                <strong>Payment Gateways:</strong> Stripe Inc., Razorpay Software Pvt. Ltd.
              </li>
            </ul>

            <h2>6. Cross-Border Data Transfers</h2>
            <p>
              As a global digital product studio serving international clients, information collected
              by GLAD Studio may be stored, processed, or transferred across servers located in the
              United States, European Union, and India. All cross-border data transfers are executed
              under Standard Contractual Clauses (SCCs) approved by the European Commission, ensuring
              equivalent data protection safeguards regardless of physical server location.
            </p>

            <h2>7. Data Retention & Automatic Destruction Schedules</h2>
            <p>
              We retain personal data and project telemetry only for the period necessary to fulfill
              contractual obligations and statutory compliance requirements.
            </p>
            <ul>
              <li>
                <strong>Active Client Project Repositories & Credentials:</strong> Retained during
                active development and 90 days post-delivery to assist with warranty support, after
                which staging access is revoked and local build caches are securely wiped.
              </li>
              <li>
                <strong>Financial & Invoice Records:</strong> Retained for 7 years to satisfy statutory
                tax and financial audit mandates.
              </li>
              <li>
                <strong>Contact Inquiries & Analytics Logs:</strong> Retained for 24 months from last
                interaction unless erasure is requested.
              </li>
            </ul>

            <h2>8. Security Architecture & Encryption Standards</h2>
            <p>GLAD Studio enforces defense-in-depth cybersecurity measures:</p>
            <ul>
              <li>
                <strong>Encryption in Transit:</strong> TLS 1.3 protocol enforcement with HSTS headers
                across all public endpoints and API interfaces.
              </li>
              <li>
                <strong>Encryption at Rest:</strong> AES-256 encryption applied to static database
                storage, environment variables, and encrypted key vaults.
              </li>
              <li>
                <strong>Access Controls:</strong> Strict Role-Based Access Control (RBAC), multi-factor
                authentication (MFA), and zero-trust administrative policies.
              </li>
              <li>
                <strong>Code Vulnerability Audits:</strong> Automated static application security
                testing (SAST) integrated into internal build pipelines.
              </li>
            </ul>

            <h2>9. Cookie & Tracking Policy</h2>
            <p>
              Our Site uses essential cookies, functional cookies, and privacy-focused telemetry to
              maintain active user sessions, remember theme preferences, and analyze aggregate traffic
              patterns.
            </p>
            <p>
              Upon your first visit, a cookie consent interface allows you to select preferences or
              opt out of non-essential analytical cookies. You may also clear or block cookies
              directly via your browser settings at any time.
            </p>

            <h2>10. Client Confidentiality & Intellectual Property</h2>
            <p>
              GLAD Studio acknowledges that during client engagements, proprietary trade secrets,
              unreleased software logic, and strategic assets may be shared. All such assets are
              protected under signed Non-Disclosure Agreements (NDAs) and strict internal
              compartmentalization controls. Client source code and intellectual property remain 100%
              owned by the client upon milestone payment settlement.
            </p>

            <h2>11. Your Data Protection Rights</h2>
            <p>
              Depending on your jurisdiction, you possess the following statutory rights regarding
              your personal information:
            </p>
            <ul>
              <li>
                <strong>Right of Access & Data Portability:</strong> Request a structured,
                machine-readable copy of your personal data held by us.
              </li>
              <li>
                <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete
                personal metrics.
              </li>
              <li>
                <strong>Right to Erasure ("Right to be Forgotten"):</strong> Request permanent deletion
                of your personal records, subject to statutory tax or legal exceptions.
              </li>
              <li>
                <strong>Right to Restrict or Object to Processing:</strong> Limit or object to automated
                profiling or marketing communications.
              </li>
            </ul>
            <p>
              To exercise any of these rights, submit a formal request to{" "}
              <a href="mailto:contact@gladstudio.net">contact@gladstudio.net</a>. We process verified
              privacy requests within 30 calendar days.
            </p>

            <h2>12. Breach Notification Protocols (72-Hour SLA)</h2>
            <p>
              In the event of a confirmed cybersecurity incident impacting personal or client data,
              GLAD Studio will notify affected data controllers and regulatory authorities within 72
              hours of incident confirmation, accompanied by an actionable remediation report detailing
              scope and containment measures.
            </p>

            <h2>13. Children's Privacy Prohibition</h2>
            <p>
              GLAD Studio's services are tailored strictly for enterprise clients, founders, and
              individuals aged 18 and older. We do not knowingly collect or solicit personal data from
              children under the age of 16. If we become aware of accidental collection, records are
              purged immediately.
            </p>

            <h2>14. Amendments to this Policy</h2>
            <p>
              We reserve the right to modify this Policy periodically to reflect technological shifts,
              statutory updates, or service expansions. The updated version will be posted with a
              revised "Last Updated" timestamp at the top of this page.
            </p>

            <h2>15. Contact Information & Legal Inquiries</h2>
            <p>
              For any privacy inquiries, Data Protection Officer (DPO) requests, or legal notices,
              contact our compliance team:
            </p>
            <p>
              <strong>GLAD Studio Legal & Compliance</strong>
              <br />
              Email: <a href="mailto:contact@gladstudio.net">contact@gladstudio.net</a>
              <br />
              General Contact: <a href="mailto:hello@gladstudio.net">hello@gladstudio.net</a>
              <br />
              Website: <a href="https://gladstudio.net">https://gladstudio.net</a>
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
