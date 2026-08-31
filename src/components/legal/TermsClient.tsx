'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText } from 'lucide-react';
import Divider from '@/components/ui/Divider';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

const sections = [
  { id: 'section-1', label: '1. Acceptance of Terms' },
  { id: 'section-2', label: '2. Description of Services' },
  { id: 'section-3', label: '3. Proposals & Scope Statements' },
  { id: 'section-4', label: '4. Payment & Milestone Billing' },
  { id: 'section-5', label: '5. Intellectual Property Rights' },
  { id: 'section-6', label: '6. Client Responsibilities' },
  { id: 'section-7', label: '7. Confidentiality & Non-Disclosure' },
  { id: 'section-8', label: '8. Warranties & Bug Guarantee' },
  { id: 'section-9', label: '9. Limitation of Liability' },
  { id: 'section-10', label: '10. Scope Creep & Change Orders' },
  { id: 'section-11', label: '11. Third-Party Software & APIs' },
  { id: 'section-12', label: '12. Non-Solicitation Obligations' },
  { id: 'section-13', label: '13. Termination Protocols' },
  { id: 'section-14', label: '14. Governing Law & Arbitration' },
  { id: 'section-15', label: '15. Severability & Contact' },
];

export default function TermsClient() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Master Agreement</span>
          </div>

          <h1
            ref={headlineRef}
            className="text-[38px] sm:text-[48px] md:text-[56px] xl:text-[62px] font-semibold text-fg tracking-[-0.03em] leading-tight overflow-hidden flex flex-wrap"
          >
            {'Terms of Service'.split(' ').map((word, wIdx) => (
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
            Last Updated: <span className="font-semibold text-fg">July 28, 2026</span> | Version 3.1
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

          {/* Right Column: Expanded Terms Body */}
          <div className="space-y-12 md:space-y-16 text-[14.5px] sm:text-[15px] text-fg/80 leading-[1.68]">
            
            {/* 1. Acceptance of Terms & Binding Agreement */}
            <section id="section-1" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                1. Acceptance of Terms &amp; Binding Agreement
              </h2>
              <p>
                These Master Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (whether individually or on behalf of an enterprise entity, corporation, venture-backed startup, or legal organization, hereinafter &quot;Client&quot;, &quot;You&quot;) and <strong className="font-semibold text-fg">GLAD Studio</strong> (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;). By accessing gladstudio.net, executing a digital Statement of Work (&quot;SOW&quot;), authorizing a project proposal, remitting an initial invoice deposit, issuing a formal purchase order, or retaining our software engineering services, you explicitly confirm that you have read, understood, and agreed to be unconditionally bound by all provisions, warranties, covenants, and payment schedules set forth herein.
              </p>
              <p>
                If you are executing this Agreement on behalf of a company, partnership, or other corporate entity, you represent and warrant that you possess full legal authority to bind that entity to these Terms. All subsequent project orders, sprint cycles, feature addenda, and engineering retainers executed between GLAD Studio and the Client shall automatically incorporate and be governed by this Master Agreement, unless an express written amendment signed by authorized principals of both parties explicitly supersedes a specific clause herein.
              </p>
              <div className="p-4 rounded-[12px] border border-fg/20 bg-surface text-[13.5px] uppercase tracking-wide text-fg/90 font-medium">
                IF YOU DO NOT AGREE WITH ALL OF THESE MASTER TERMS, YOU ARE EXPRESSLY PROHIBITED FROM USING OUR SERVICES, ACCESSING OUR STAGING REPOSITORIES, OR ENGAGING OUR PRODUCT ENGINEERING TEAM, AND YOU MUST DISCONTINUE ENGAGEMENT IMMEDIATELY.
              </div>
            </section>

            {/* 2. Description of Engineering Services */}
            <section id="section-2" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                2. Description of Engineering Services
              </h2>
              <p>
                GLAD Studio is a specialized digital product engineering studio offering full-lifecycle software architecture, rapid MVP prototyping, enterprise web and mobile development, custom AI systems engineering, and technical advisory services. Our engagement models are structured to take technical initiatives from initial discovery through production deployment and handoff. Our core practice disciplines encompass:
              </p>
              <ul className="space-y-4 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">MVP Development &amp; Rapid Prototyping:</strong> End-to-end technical discovery, interactive high-fidelity wireframing, relational database schema architecture, infrastructure sizing, serverless versus compute tier evaluation, and core user-journey delivery engineered to launch robust v1 production software within disciplined 4–8 week sprint cycles.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Web Application Development:</strong> High-performance full-stack web platforms, multi-tenant SaaS portals, real-time administrative dashboards, and operational back-office suites engineered with modern component architectures (React, Next.js App Router, TanStack Query, Tailwind CSS, Node.js, PostgreSQL), edge runtime caching, and strict WCAG 2.1 AA accessibility standards.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Cross-Platform Mobile App Development:</strong> Native-compiled iOS and Android applications developed via Flutter and React Native. Engineering scope covers secure biometric authentication, offline-first local data synchronization (SQLite/WatermelonDB), background background-worker execution, push notification pipelines (APNs/FCM), and automated CI/CD App Store and Google Play distribution via Fastlane.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">AI Solutions, Agentic Workflows &amp; RAG Pipelines:</strong> Architecture and deployment of enterprise Retrieval-Augmented Generation (RAG) systems over proprietary vector databases (pgvector, Pinecone, Qdrant), contextual window optimization, structured JSON schema outputs, multi-agent reasoning graphs (LangGraph/LlamaIndex), autonomous web research agents, and deterministic guardrail evaluations.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Business Automation &amp; System Integration:</strong> Custom internal automation tools, bi-directional API orchestrations, event-driven message queuing (Redis BullMQ/Kafka), ERP and CRM database synchronization, idempotent webhook retry handlers, and automated financial reconciliation cron pipelines.
                </li>
              </ul>
              <p>
                All engineering deliverables are built using clean, modular code architectures, comprehensive inline documentation, declarative database migrations, and type-safe interfaces designed to facilitate friction-free onboarding for internal client engineering teams upon handover.
              </p>
            </section>

            {/* 3. Proposals, Scope Statements & Sprint Milestones */}
            <section id="section-3" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                3. Proposals, Scope Statements &amp; Sprint Milestones
              </h2>
              <p>
                Every client engagement undertaken by GLAD Studio is formalized under a mutually executed Statement of Work (&quot;SOW&quot;), Project Proposal, or Sprint Engagement Agreement. Each SOW functions as an authoritative scope contract detailing: (a) explicit business objectives and user personas, (b) enumerated functional requirements and technical deliverables, (c) milestone delivery phases and acceptance criteria, (d) fixed pricing schedules, and (e) client review turnaround commitments.
              </p>
              <p>
                <strong className="font-semibold text-fg">Good-Faith Estimates &amp; Commencement Triggers:</strong> Any project delivery timelines, milestone estimates, or launch windows discussed during preliminary exploratory consultations are good-faith engineering estimates based on initial parameters. Official project sprint timelines commence exclusively upon satisfaction of two mandatory prerequisites: (1) successful receipt and banking clearance of the initial milestone deposit invoice, and (2) complete provisioning of all required client onboarding assets, API credentials, domain access, and brand materials.
              </p>
              <p>
                <strong className="font-semibold text-fg">Dependency Adjustments:</strong> Where milestone completion depends on client-supplied data, third-party vendor approvals (e.g., Apple Developer Program verifications, Stripe merchant onboarding), or legacy database export dumps, sprint delivery dates shall automatically extend on a day-for-day basis corresponding to any client-side or third-party delay.
              </p>
            </section>

            {/* 4. Payment Terms, Milestone Billing & Invoicing */}
            <section id="section-4" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                4. Payment Terms, Milestone Billing &amp; Invoicing
              </h2>
              <p>
                To align incentives and provide complete fiscal predictability, GLAD Studio operates strictly on a fixed-scope, fixed-price milestone structure for all custom engineering builds. Hourly billing is reserved exclusively for post-launch fractional maintenance, ongoing technical support, or exploratory advisory retainers.
              </p>
              <ul className="space-y-4 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Standard Milestone Allocation:</strong> Unless customized in your specific SOW, standard project fees are divided across three verifiable milestone gates: (1) <span className="font-medium text-fg">30% Project Initiation Deposit</span> (due prior to sprint kickoff), (2) <span className="font-medium text-fg">40% Midpoint Staging Delivery</span> (due upon deployment of feature-complete test environment and database schema), and (3) <span className="font-medium text-fg">30% Final Delivery &amp; Handover</span> (due prior to production DNS migration, repository transfer, and credential handoff).
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Invoice Settlement &amp; Payment Rails:</strong> All invoices issued by GLAD Studio are denominated in USD or INR (as specified in SOW) and are payable within seven (7) calendar days of electronic issuance. Accepted payment rails include international SWIFT wire transfers, domestic NEFT/RTGS, ACH transfers, Stripe Invoicing, and direct corporate bank transfers. The Client shall bear all intermediary wire fees, currency conversion charges, and applicable withholding or local transaction taxes.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Late Settlement Charges:</strong> Unpaid balances past the 7-day maturity window shall accrue late interest at the rate of 1.5% per month (or the maximum statutory rate permitted by applicable law), calculated daily from the due date until paid in full.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Project Suspension &amp; Resumption Protocols:</strong> If any milestone invoice remains delinquent past fourteen (14) calendar days, GLAD Studio reserves the absolute right to suspend active development, lock staging environment access, pause upcoming sprint allocations, and reassign engineering resources. Resuming work on suspended projects may require a formal context-restoration fee and a renegotiated sprint timeline based on current engineering team availability.
                </li>
              </ul>
            </section>

            {/* 5. Intellectual Property Rights & Full Code Transfer */}
            <section id="section-5" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                5. Intellectual Property Rights &amp; Full Code Transfer
              </h2>
              <p>
                We believe in uncompromising client code sovereignty, transparent IP allocation, and zero vendor lock-in.
              </p>

              {/* 100% IP Transfer Guarantee Box */}
              <div className="p-4 sm:p-5 rounded-[14px] border-2 border-fg bg-surface text-[13.5px] sm:text-[14px] text-fg leading-relaxed shadow-[4px_4px_0px_0px_rgba(10,10,11,1)] my-4">
                <p>
                  <strong className="font-semibold text-fg">100% IP Transfer Guarantee:</strong> Upon full and final settlement of all agreed invoice milestones and contractual fees, GLAD Studio unconditionally assigns, transfers, and conveys 100% of all intellectual property rights, copyright ownership, source code repositories, design assets, database architectures, and digital build deliverables to the Client without recurring royalty claims or ongoing licensing constraints.
                </p>
              </div>

              <p>
                <strong className="font-semibold text-fg">Pre-Existing Developer Tooling &amp; Utilities:</strong> GLAD Studio retains ownership of its pre-existing internal scaffolding frameworks, shared utility scripts, generic UI helper functions, and open-source boilerplates (&quot;Studio Utilities&quot;) created independently of the project. To the extent Studio Utilities are compiled into the final deliverable, GLAD Studio grants the Client a perpetual, irrevocable, worldwide, royalty-free, non-exclusive license to use, modify, distribute, and compile such utilities solely as an integrated component of the delivered product.
              </p>
              <p>
                <strong className="font-semibold text-fg">Third-Party Libraries &amp; Commercial Fonts:</strong> Client acknowledges that software deliverables may incorporate open-source libraries governed by standard OSI-approved licenses (e.g., MIT, Apache 2.0, BSD). Commercial font licenses, proprietary third-party SDK subscriptions, and proprietary stock photography required for the project remain the procurement responsibility of the Client.
              </p>
              <p>
                <strong className="font-semibold text-fg">Portfolio &amp; Case Study Rights:</strong> Unless the Client executes an explicit White-Label Rider or restrictive Non-Disclosure Addendum prior to project initiation, GLAD Studio reserves the standard professional right to showcase non-confidential project summaries, architectural overviews, public brand logos, and visual screenshots in portfolio case studies, awards entries, and digital studio marketing channels.
              </p>
            </section>

            {/* 6. Client Responsibilities & Asset Provisioning */}
            <section id="section-6" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                6. Client Responsibilities &amp; Asset Provisioning
              </h2>
              <p>
                High-velocity software engineering requires active, organized collaboration between both teams. To maintain agreed milestone timelines and code quality standards, the Client agrees to:
              </p>
              <ul className="space-y-4 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Timely Asset Provisioning:</strong> Provide all requisite brand guidelines, high-resolution vector assets, copywriting copy decks, third-party API keys, payment gateway sandbox credentials, and database access tokens within five (5) business days of project kickoff.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Designated Primary Decision-Maker (SPOC):</strong> Appoint a single authorized Single Point of Contact (SPOC) empowered to consolidate stakeholder feedback, authorize sprint milestone sign-offs, and make binding technical and design decisions on behalf of the Client.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">3-Day Review &amp; Feedback SLA:</strong> Review staging builds, design prototypes, and sprint deliverables within three (3) business days of formal submission. Feedback must be consolidated, actionable, and delivered via designated project management channels (e.g., Linear, GitHub, Slack) to prevent contradictory engineering directives.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Asset Legality &amp; Warranty:</strong> Warrant that all logos, typography, data sets, proprietary algorithms, and media assets supplied to GLAD Studio are wholly owned by the Client or properly licensed, and do not infringe upon any third-party intellectual property, patent, trademark, or privacy rights.
                </li>
              </ul>
            </section>

            {/* 7. Confidentiality & Non-Disclosure Obligations */}
            <section id="section-7" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                7. Confidentiality &amp; Non-Disclosure Obligations
              </h2>
              <p>
                During the course of an engagement, both parties may share proprietary, confidential, or commercially sensitive information. &quot;Confidential Information&quot; includes, without limitation: source code, proprietary algorithms, database schemas, financial models, customer lists, user analytics, unreleased product features, patent applications, and business roadmaps.
              </p>
              <p>
                <strong className="font-semibold text-fg">Mutual Duty of Care:</strong> Each party agrees to hold the other party&apos;s Confidential Information in strict confidence using the same degree of care it uses to protect its own sensitive trade secrets (and in no event less than reasonable industry care). Confidential Information shall not be disclosed to any third party without prior written consent, except to authorized employees, contractors, legal advisors, or cloud sub-processors who require access to perform project duties and who are bound by confidentiality obligations at least as stringent as those contained herein.
              </p>
              <p>
                <strong className="font-semibold text-fg">Exclusions &amp; Duration:</strong> Confidentiality obligations do not apply to information that: (a) becomes publicly available through no breach of this Agreement, (b) was already rightfully known to the receiving party prior to disclosure, (c) is independently developed without reference to the disclosing party&apos;s data, or (d) is required to be disclosed by court order or statutory law (provided prompt written notice is given to permit protective orders). Confidentiality obligations shall persist for a period of three (3) years following contract termination, with proprietary source code and trade secrets remaining protected indefinitely.
              </p>
            </section>

            {/* 8. Warranties, Code Handoff & 30-Day Bug Guarantee */}
            <section id="section-8" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                8. Warranties, Code Handoff &amp; 30-Day Bug Guarantee
              </h2>
              <p>
                GLAD Studio warrants that all custom software, web applications, and mobile products engineered under this Agreement will be constructed in accordance with professional engineering standards, prevailing modern security best practices, and the agreed technical specifications defined in your SOW.
              </p>

              {/* 30-Day Bug Guarantee Box */}
              <div className="p-4 sm:p-5 rounded-[16px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)] space-y-2 my-4">
                <div className="text-[12.5px] font-mono font-semibold tracking-wider text-fg uppercase">
                  30-DAY POST-LAUNCH BUG GUARANTEE
                </div>
                <p className="text-[13.5px] sm:text-[14px] text-fg-muted leading-relaxed">
                  Upon final code handover and production launch, GLAD Studio provides an inclusive thirty (30) calendar-day warranty window during which our engineering team will triage, investigate, and remediate any reproducible functional defects, runtime errors, or deviations from the agreed SOW specifications entirely free of charge.
                </p>
              </div>

              <p>
                <strong className="font-semibold text-fg">Warranty Scope &amp; Exclusions:</strong> A covered defect is strictly defined as a reproducible software flaw that prevents the application from functioning according to the signed SOW specifications when operated in modern supported environments (evergreen versions of Chrome, Safari, Firefox, Edge, iOS, Android). The 30-Day Bug Guarantee specifically excludes: (a) new feature requests or architectural scope expansion, (b) code modifications executed by internal client staff or external third-party developers, (c) third-party API deprecations, server outages, or rate-limit throttle events, and (d) host infrastructure failures, domain configuration errors, or unauthorized environment alterations.
              </p>
              <p>
                <strong className="font-semibold text-fg">Post-Warranty Support:</strong> Following conclusion of the 30-day warranty window, ongoing maintenance, performance tuning, and feature development may be contracted under an ongoing monthly SLA retainer or on an agreed time-and-materials basis.
              </p>
            </section>

            {/* 9. Limitation of Liability & Exclusion of Damages */}
            <section id="section-9" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                9. Limitation of Liability &amp; Exclusion of Damages
              </h2>
              <p className="text-[13.5px] uppercase tracking-wide leading-relaxed text-fg/90">
                TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT SHALL GLAD STUDIO, ITS DIRECTORS, OFFICERS, EMPLOYEES, CONTRACTORS, OR AGENTS BE LIABLE TO THE CLIENT OR ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, EXEMPLARY, OR MULTIPLE DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, REVENUE LOSS, BUSINESS INTERRUPTION, LOSS OF GOODWILL, LOSS OF DATA OR PROPRIETARY EMBEDDINGS, SYSTEM DOWNTIME, OR REPUTATIONAL HARM) ARISING OUT OF OR IN CONNECTION WITH THE PERFORMANCE, DELIVERY, OR USE OF OUR SERVICES, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-[13.5px] uppercase tracking-wide leading-relaxed text-fg/90">
                OUR TOTAL CUMULATIVE LIABILITY ARISING FROM OR RELATED TO THIS AGREEMENT, THE SERVICES, OR ANY APPLICABLE SOW SHALL UNDER NO CIRCUMSTANCES EXCEED THE TOTAL AGGREGATE FEES ACTUALLY RECEIVED BY GLAD STUDIO FROM THE CLIENT UNDER THE SPECIFIC SOW GIVING RISE TO THE CLAIM IN THE SIX (6) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY.
              </p>
              <p>
                Both parties acknowledge and agree that these limitations of liability reflect an informed, equitable allocation of commercial risk and constitute an essential basis of the bargain between GLAD Studio and the Client.
              </p>
            </section>

            {/* 10. Scope Creep & Change Order Management */}
            <section id="section-10" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                10. Scope Creep &amp; Change Order Management
              </h2>
              <p>
                During the active lifecycle of a product build, evolving market dynamics or stakeholder discovery may prompt requests for features, database modifications, or workflow logic not contemplated in the original SOW. To prevent schedule slippage and protect engineering momentum, all scope alterations are governed by a formal Change Order protocol.
              </p>
              <p>
                <strong className="font-semibold text-fg">Change Request Protocol:</strong> When an out-of-scope feature is requested, GLAD Studio will evaluate the architectural implications and submit a written Change Order detailing: (a) description of requested changes, (b) additional engineering effort and fixed financial quote, and (c) impact on existing sprint milestones and ultimate delivery dates.
              </p>
              <p>
                Engineering work on out-of-scope items shall not begin until the Client authorizes the Change Order in writing and remits any required incremental deposit. Unapproved change requests shall have no bearing on the schedule or payment obligations of the underlying SOW.
              </p>
            </section>

            {/* 11. Third-Party Software, Open Source & API Dependencies */}
            <section id="section-11" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                11. Third-Party Software, Open Source &amp; API Dependencies
              </h2>
              <p>
                Modern software systems integrate third-party infrastructure platforms, open-source libraries, database drivers, and cloud APIs (e.g., Amazon Web Services, Vercel, Supabase, Cloudflare, OpenAI, Anthropic, Stripe, Resend, Firebase).
              </p>
              <p>
                <strong className="font-semibold text-fg">Service Continuity &amp; Model Drift:</strong> The Client acknowledges and agrees that GLAD Studio exercises no operational control over third-party API availability, foundational LLM latency variations, model deprecations, provider price increases, or external service downtime. GLAD Studio shall have no liability for interruptions or performance degradation caused directly by upstream service providers.
              </p>
              <p>
                <strong className="font-semibold text-fg">Direct Account Ownership:</strong> Where feasible, all third-party hosting, API access tokens, and cloud subscriptions will be provisioned directly under the Client&apos;s corporate accounts, ensuring the Client maintains direct commercial relationships and billing ownership with all upstream infrastructure providers.
              </p>
            </section>

            {/* 12. Non-Solicitation Covenant */}
            <section id="section-12" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                12. Non-Solicitation Covenant
              </h2>
              <p>
                Our core studio asset is our senior product engineering talent. During the term of any active engagement and for a period of twelve (12) consecutive months following the formal conclusion, termination, or final handover of the last active project, the Client covenants and agrees that it shall not, directly or indirectly, solicit, entice, recruit, hire, or engage as an employee, contractor, advisor, or consultant any engineer, UI/UX designer, software architect, or technical contractor employed or engaged by GLAD Studio who participated in the Client&apos;s project.
              </p>
              <p>
                <strong className="font-semibold text-fg">Liquidated Damages:</strong> In the event of a breach of this non-solicitation covenant, the Client agrees to pay GLAD Studio liquidated damages equal to fifty percent (50%) of the solicited individual&apos;s first-year gross annualized compensation or fees. Both parties agree that this figure represents a reasonable, non-punitive pre-estimate of GLAD Studio&apos;s talent acquisition, training, and operational replacement costs.
              </p>
            </section>

            {/* 13. Project Termination Protocols */}
            <section id="section-13" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                13. Project Termination Protocols
              </h2>
              <p>
                Either party may terminate an active project engagement or SOW under the following strictly defined conditions:
              </p>
              <ul className="space-y-4 pl-4">
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Termination for Convenience:</strong> Either party may terminate an SOW without cause upon providing fourteen (14) calendar days written notice to the other party. Upon notice of termination for convenience, Client shall remain obligated to pay for all completed milestones, approved change orders, and prorated hours worked by GLAD Studio up to the effective termination date.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Termination for Cause:</strong> Either party may terminate an SOW immediately if the other party commits a material breach of these Terms (including non-payment of invoices) and fails to cure such breach within seven (7) business days of receiving formal written notice detailing the breach.
                </li>
                <li className="list-disc">
                  <strong className="font-semibold text-fg">Deliverables Upon Termination:</strong> Subject to full payment of all outstanding invoices and prorated fees incurred up to the termination date, GLAD Studio will immediately package and deliver all current git commits, design files, database schemas, and documentation created for the Client up to the effective date of termination. Initial project deposits are strictly non-refundable once sprint kickoff has occurred.
                </li>
              </ul>
            </section>

            {/* 14. Governing Law & Dispute Resolution */}
            <section id="section-14" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                14. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Master Terms of Service, all Statements of Work, and any non-contractual obligations arising out of or in connection with them shall be governed by, construed, and enforced in accordance with the substantive laws of India, without giving effect to any principles of conflicts of law that would require the application of the laws of another jurisdiction.
              </p>
              <p>
                <strong className="font-semibold text-fg">Executive Negotiation:</strong> In the event of any controversy, claim, or dispute arising out of or relating to this Agreement, the designated principals of both parties shall first make good-faith efforts to resolve the dispute through direct executive negotiations within fourteen (14) business days of written notice.
              </p>
              <p>
                <strong className="font-semibold text-fg">Binding Arbitration:</strong> If the dispute cannot be amicably resolved through executive negotiation, it shall be referred to and finally resolved by binding arbitration conducted under the provisions of the Indian Arbitration and Conciliation Act, 1996 (as amended). The arbitration shall be conducted by a single mutually agreed sole arbitrator. The seat and legal venue of arbitration shall be Delhi NCR / Mathura jurisdiction, India, and the proceedings shall be conducted exclusively in the English language. The arbitral award shall be final, non-appealable, and enforceable in any court of competent jurisdiction globally.
              </p>
            </section>

            {/* Divider preceding Contact section */}
            <div className="border-t border-line my-10" />

            {/* 15. Severability & Contact Information */}
            <section id="section-15" className="scroll-mt-[110px] space-y-4">
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-fg tracking-[-0.02em] leading-snug">
                15. Severability &amp; Contact Information
              </h2>
              <p>
                <strong className="font-semibold text-fg">Severability:</strong> If any provision, clause, or covenant of these Terms is held by an arbitral tribunal or court of competent jurisdiction to be invalid, illegal, or unenforceable, such determination shall not affect the validity or enforceability of the remaining provisions, which shall remain in full force and effect. The invalid provision shall be deemed reformed to the minimum extent necessary to achieve the commercial intent of the parties.
              </p>
              <p>
                <strong className="font-semibold text-fg">Entire Agreement:</strong> These Master Terms of Service, together with any signed SOW, project proposal, or written addenda, constitute the entire and exclusive agreement between the parties regarding the subject matter hereof, superseding all prior oral discussions, informal email exchanges, pitch presentations, or representations.
              </p>

              {/* Legal & Contracts Card */}
              <div className="mt-5 p-6 rounded-[20px] border-2 border-fg bg-surface shadow-[4px_4px_0px_0px_rgba(10,10,11,1)] font-mono text-[13px] sm:text-[14px] space-y-2 text-fg">
                <div className="font-semibold text-[14.5px] sm:text-[15.5px] mb-3 text-fg">
                  GLAD Studio Legal &amp; Contracts
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
