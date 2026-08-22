import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { Row } from "@/components/site/Row";
import { Ledger } from "@/components/site/Ledger";
import { ClosingCTA } from "@/components/site/ClosingCTA";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — GLAD studio" },
      {
        name: "description",
        content:
          "Our development workflow, from discovery call to post-launch support — predictable, transparent, and built to ship.",
      },
      { property: "og:title", content: "Our Process — GLAD studio" },
      {
        property: "og:description",
        content: "Our development workflow, from discovery call to post-launch support.",
      },
      { property: "og:url", content: "https://gladstudio.net/process" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/process" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/process/#webpage",
              url: "https://gladstudio.net/process",
              name: "Our Process — GLAD studio",
              description:
                "Our development workflow, from discovery call to post-launch support — predictable, transparent, and built to ship.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/process/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gladstudio.net",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Process",
                  item: "https://gladstudio.net/process",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    title: "Discovery Call",
    body: "A 30-minute conversation to understand your idea, users and constraints. We'll tell you honestly whether we're the right team.",
    duration: "DAY 0",
  },
  {
    title: "Requirements Analysis",
    body: "We translate your vision into a written brief — scope, success metrics, risks and unknowns surfaced early.",
    duration: "WEEK 1",
  },
  {
    title: "Planning",
    body: "Fixed-scope proposal with timeline, milestones, and a clear pricing structure. No surprises later.",
    duration: "WEEK 1",
  },
  {
    title: "UI/UX Design",
    body: "Wireframes evolve into a polished interactive prototype in Figma. You sign off before a line of code is written.",
    duration: "WEEKS 2 – 3",
  },
  {
    title: "Development",
    body: "Weekly sprints, weekly demos. You have access to staging, a Slack channel, and the codebase from day one.",
    duration: "WEEKS 3 – N",
  },
  {
    title: "Testing",
    body: "Automated tests, manual QA, accessibility checks and performance budgets — every release passes the same bar.",
    duration: "CONTINUOUS",
  },
  {
    title: "Deployment",
    body: "We ship to production behind feature flags, monitor closely, and roll out to your users with zero downtime.",
    duration: "LAUNCH WEEK",
  },
  {
    title: "Post-Launch Support",
    body: "Bug fixes, performance work, and new features on a retainer — or a clean handoff to your in-house team. Your call.",
    duration: "ONGOING",
  },
];

const termsLedgerRows = [
  {
    key: "IP Transfer",
    value: "100%",
    accent: "Upon full settlement, GLAD Studio assigns all IP, code repositories, schemas, and assets.",
  },
  {
    key: "Payment Terms",
    value: "Milestones",
    accent: "Strictly fixed-scope, fixed-price milestone billing tied to signed-off deliverables.",
  },
  {
    key: "Bug Guarantee",
    value: "30 Days",
    accent: "Post-launch warranty resolving critical bugs or SOW specification deviations free of charge.",
  },
];

function ProcessPage() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* 1. Hero — tone="paper" size="hero" divider={false} */}
        <Section size="hero" tone="paper" divider={false}>
          <SectionRail label="PROCESS" />

          <div className="max-w-[720px] flex flex-col items-start text-left">
            <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.04] tracking-tight font-display font-medium text-[var(--color-ink)]">
              How we ship.
            </h1>
            <p className="mt-6 text-[17px] text-[var(--color-ink-2)] leading-relaxed max-w-[52ch]">
              Eight steps from first call to a live, supported product. No mystery, no scope creep,
              no rebuilds.
            </p>
          </div>
        </Section>

        {/* 2. Steps — tone="deep" */}
        <Section size="default" tone="deep">
          <SectionRail label="HOW WE SHIP" />

          <div className="max-w-xl mb-12">
            <h2 className="text-[clamp(36px,4.5vw,52px)] font-display font-medium text-[var(--color-deep-ink)] leading-tight">
              Predictable engineering sprints.
            </h2>
          </div>

          <div className="border border-[var(--color-deep-rule)] rounded-[var(--radius-lg,14px)] bg-[var(--color-deep)] p-2 sm:p-4">
            {steps.map((step, idx) => (
              <Row
                key={step.title}
                index={idx + 1}
                title={step.title}
                description={step.body}
                meta={step.duration}
              />
            ))}
          </div>
        </Section>

        {/* 3. What you get — tone="paper" */}
        <Section size="default" tone="paper">
          <SectionRail label="WHAT YOU GET" />

          <div className="grid grid-cols-1 min-[901px]:grid-cols-12 gap-10 min-[901px]:gap-12 items-start">
            <div className="min-[901px]:col-span-5">
              <h2 className="text-[clamp(32px,3.8vw,44px)] font-display font-medium text-[var(--color-ink)] leading-tight">
                Clear commercial terms from day one.
              </h2>
              <p className="mt-5 text-[16px] text-[var(--color-ink-2)] leading-relaxed">
                We believe in total transparency and client code sovereignty. Every engagement is
                backed by clear intellectual property assignments, predictable milestone schedules,
                and dedicated post-launch warranty guarantees.
              </p>
            </div>

            <div className="min-[901px]:col-span-7">
              <Ledger rows={termsLedgerRows} />
            </div>
          </div>
        </Section>

        {/* 4. ClosingCTA */}
        <Section size="default" tone="paper" divider={false}>
          <ClosingCTA />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
