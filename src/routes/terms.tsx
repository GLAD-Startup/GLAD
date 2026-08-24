import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — GLAD studio" },
      {
        name: "description",
        content:
          "Master Terms of Service governing product development, custom software engineering, intellectual property transfer, and engagement terms with GLAD studio.",
      },
      { property: "og:title", content: "Terms of Service — GLAD studio" },
      {
        property: "og:description",
        content:
          "Master Terms of Service governing product development, custom software engineering, and IP transfer with GLAD studio.",
      },
      { property: "og:url", content: "https://gladstudio.net/terms" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
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
              Terms of Service
            </h1>
            <div className="mt-4 font-mono text-[12px] text-[var(--color-ink-3)]">
              Last Updated: {lastUpdated} | Version 3.1
            </div>
          </div>
        </Section>

        {/* Body */}
        <Section size="compact" tone="paper" divider={false}>
          <div className="prose text-left">
            <h2>1. Acceptance of Terms & Binding Agreement</h2>
            <p>
              These Master Terms of Service ("Terms", "Agreement") constitute a legally binding
              agreement between you (whether individually or on behalf of an entity, "Client", "You")
              and <strong>GLAD Studio</strong> ("Company", "We", "Us", or "Our"). By accessing{" "}
              <code>gladstudio.net</code>, executing a project proposal, issuing a purchase order, or
              engaging our software engineering services, you confirm that you have read, understood,
              and agreed to be bound by all provisions of this Agreement.
            </p>
            <p>
              IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, YOU ARE EXPRESSLY PROHIBITED FROM USING OUR
              SERVICES OR ENGAGING OUR ENGINEERING TEAM, AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>

            <h2>2. Description of Engineering Services</h2>
            <p>
              GLAD Studio is a specialized digital product studio offering senior-level engineering,
              software architecture, interactive design, and technical consultation. Our core
              practice areas include:
            </p>
            <ul>
              <li>
                <strong>MVP Development:</strong> Rapid prototyping, clickable wireframes, database
                architecture, and production v1 software deployments.
              </li>
              <li>
                <strong>Web Application Development:</strong> High-performance full-stack web
                platforms, SaaS portals, custom dashboards, and admin control suites built with React,
                Next.js, TanStack, and Node.js.
              </li>
              <li>
                <strong>Mobile App Development:</strong> Cross-platform native mobile applications
                developed via Flutter and React Native for Android and iOS devices.
              </li>
              <li>
                <strong>AI Solutions & RAG Pipelines:</strong> Integration of Large Language Models
                (LLMs), RAG over proprietary vector databases, AI agents, and intelligent workflow
                automation.
              </li>
              <li>
                <strong>Business Automation:</strong> Custom internal tools, API integrations, batch
                data pipelines, and workflow orchestration.
              </li>
            </ul>

            <h2>3. Proposals, Scope Statements & Sprint Milestones</h2>
            <p>
              All client engagements are governed by a mutually agreed Statement of Work ("SOW") or
              Project Proposal. Each SOW details: (a) project objectives, (b) technical deliverables,
              (c) milestone delivery schedules, (d) fixed pricing schedules, and (e) client sign-off
              criteria.
            </p>
            <p>
              Any timelines provided prior to formal SOW execution are good-faith estimates only.
              Official timelines commence upon receipt of the initial milestone deposit and required
              onboarding assets.
            </p>

            <h2>4. Payment Terms, Milestone Billing & Invoicing</h2>
            <p>
              We operate strictly on a fixed-scope, fixed-price milestone basis. Hourly billing is not
              used unless explicitly agreed upon in writing for post-launch fractional maintenance.
            </p>
            <ul>
              <li>
                <strong>Milestone Payments:</strong> Payments are tied to milestone sign-offs outlined
                in your SOW (e.g., Deposit 30%, Midpoint Staging Build 40%, Final Delivery & Handover
                30%).
              </li>
              <li>
                <strong>Invoice Settlement:</strong> Invoices are payable within 7 calendar days of
                issuance. Late payments incur a interest charge of 1.5% per month or the maximum rate
                permitted by law.
              </li>
              <li>
                <strong>Project Suspension:</strong> If an invoice remains unpaid past 14 calendar
                days, GLAD Studio reserves the right to suspend active development, revoke staging
                environment access, and pause sprint schedules.
              </li>
            </ul>

            <h2>5. Intellectual Property Rights & Full Code Transfer</h2>
            <p>We believe in total transparency and client code sovereignty.</p>
            <blockquote>
              <strong>100% IP Transfer Guarantee:</strong> Upon full and final settlement of all agreed
              invoice milestones, GLAD Studio assigns 100% of all intellectual property rights, source
              code repositories, design files, database schemas, and digital build assets to the
              Client.
            </blockquote>
            <p>
              GLAD Studio retains ownership only of general pre-existing developer tooling, open-source
              libraries, and reusable utility scripts utilized during development, granting the Client
              a perpetual, non-exclusive, royalty-free license to use such background utilities as part
              of the delivered product.
            </p>

            <h2>6. Client Responsibilities & Asset Provisioning</h2>
            <p>Successful product engineering requires timely client collaboration. You agree to:</p>
            <ul>
              <li>
                Provide required brand guidelines, API access keys, domain credentials, and content
                assets in a timely manner.
              </li>
              <li>
                Designate a primary decision-maker to review sprint builds and provide consolidated
                feedback within 3 business days of milestone submission.
              </li>
              <li>
                Ensure all assets, data, and content supplied to GLAD Studio do not infringe upon
                third-party copyrights or patents.
              </li>
            </ul>

            <h2>7. Confidentiality & Non-Disclosure Obligations</h2>
            <p>
              Both parties agree that all non-public technical specifications, source code, business
              logic, customer records, and strategic roadmaps shared during the engagement shall remain
              strictly confidential.
            </p>
            <p>
              GLAD Studio will not disclose client confidential information to third parties without
              prior written consent, except to authorized employees or sub-processors bound by
              equivalent non-disclosure obligations.
            </p>

            <h2>8. Warranties, Code Handoff & 30-Day Bug Guarantee</h2>
            <p>
              GLAD Studio warrants that all custom software will be delivered in accordance with agreed
              SOW specifications and industry engineering standards.
            </p>
            <blockquote>
              <strong>30-Day Post-Launch Bug Guarantee:</strong> Upon final code handover, GLAD Studio
              provides a 30-day warranty window during which we will resolve any reproducible critical
              software bugs or deviation from agreed SOW specifications free of charge. This guarantee
              does not cover feature additions, third-party API outages, or modifications made by
              external developers.
            </blockquote>

            <h2>9. Limitation of Liability & Exclusion of Damages</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL GLAD STUDIO, ITS
              DIRECTORS, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES (INCLUDING LOSS OF PROFITS, DATA
              LOSS, BUSINESS INTERRUPTION, OR REPUTATIONAL DAMAGE) ARISING OUT OF OR IN CONNECTION
              WITH OUR SERVICES.
            </p>
            <p>
              OUR TOTAL CUMULATIVE LIABILITY FOR ANY CLAIMS ARISING UNDER THIS AGREEMENT SHALL NOT
              EXCEED THE TOTAL FEES ACTUALLY PAID BY THE CLIENT TO GLAD STUDIO FOR THE SPECIFIC PROJECT
              GIVING RISE TO THE CLAIM IN THE SIX (6) MONTHS PRECEDING THE EVENT.
            </p>

            <h2>10. Scope Creep & Change Order Management</h2>
            <p>
              If you request additional features or architectural modifications outside the agreed SOW
              during active development, GLAD Studio will issue a formal Change Order detailing the
              extra scope, cost adjustments, and revised delivery timeline. Development on out-of-scope
              features will proceed only upon written authorization of the Change Order.
            </p>

            <h2>11. Third-Party Software, Open Source & API Dependencies</h2>
            <p>
              Delivered applications may utilize open-source software libraries (e.g., MIT, Apache 2.0,
              BSD) and third-party APIs (e.g., OpenAI, Stripe, Firebase). Client acknowledges that GLAD
              Studio is not responsible for outages, pricing adjustments, or service deprecations
              instituted by independent third-party API providers.
            </p>

            <h2>12. Non-Solicitation Covenant</h2>
            <p>
              During active engagements and for a period of twelve (12) months following contract
              completion, Client agrees not to directly solicit, recruit, or hire any engineer,
              designer, or contractor employed or contracted by GLAD Studio without prior written
              consent and an agreed placement fee.
            </p>

            <h2>13. Project Termination Protocols</h2>
            <p>
              Either party may terminate an active engagement for convenience upon 14 days written
              notice. In the event of early termination:
            </p>
            <ul>
              <li>
                Client shall pay for all completed milestones and prorated work performed up to the
                termination date.
              </li>
              <li>
                Upon payment of prorated work, GLAD Studio will hand over all completed codebase modules
                and design assets created up to that date.
              </li>
            </ul>

            <h2>14. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India,
              without regard to its conflict of law principles. Any dispute, controversy, or claim
              arising out of or relating to this contract shall be submitted to binding arbitration
              under the Indian Arbitration and Conciliation Act, with arbitration proceedings conducted
              in English.
            </p>

            <h2>15. Severability & Contact Information</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision
              shall be limited or eliminated to the minimum extent necessary so that these Terms shall
              otherwise remain in full force and effect.
            </p>
            <p>
              <strong>GLAD Studio Legal & Contracts</strong>
              <br />
              Email: <a href="mailto:contact@gladstudio.net">contact@gladstudio.net</a>
              <br />
              Inquiries: <a href="mailto:contact@gladstudio.net">contact@gladstudio.net</a>
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
