import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/Button";
import { Surface } from "@/components/ui/Surface";
import { Chip } from "@/components/ui/Chip";
import { Field, SelectField, TextareaField } from "@/components/ui/Field";
import { Shot } from "@/components/ui/Shot";
import { SectionRail } from "@/components/site/SectionRail";
import { Section } from "@/components/site/Section";
import { Ledger } from "@/components/site/Ledger";
import { Row } from "@/components/site/Row";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/dev/primitives")({
  head: () => ({
    meta: [
      { title: "Primitive & Structural Layer Gallery — GLAD studio Dev" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PrimitivesGallery,
});

export function PrimitivesGallery() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-20">
        <div>
          <Chip live>Design System Primaries & Structural Layer</Chip>
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-[var(--color-ink)] mt-3">
            Component & Structural Layer
          </h1>
          <p className="text-[14px] text-[var(--color-ink-2)] mt-2 max-w-2xl leading-relaxed">
            Live visual inventory of all five foundational primitive components (<code>Button</code>,{" "}
            <code>Surface</code>, <code>Chip</code>, <code>Field</code>, <code>Shot</code>) and four
            structural components (<code>SectionRail</code>, <code>Section</code>, <code>Ledger</code>,{" "}
            <code>Row</code>).
          </p>
        </div>

        {/* 1. Button Gallery */}
        <section className="space-y-6">
          <SectionRail index="01" label="Primitives" meta="Button Component" />
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="md" arrow>
              Primary MD (With Arrow)
            </Button>
            <Button variant="primary" size="sm">
              Primary SM
            </Button>
            <Button variant="ghost" size="md" arrow>
              Ghost MD (With Arrow)
            </Button>
            <Button variant="ghost" size="sm">
              Ghost SM
            </Button>
            <Button variant="ghost" size="md" disabled>
              Disabled Ghost
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#surface-section">asChild Link Anchor</a>
            </Button>
          </div>
        </section>

        {/* 2. Surface Gallery */}
        <section id="surface-section" className="space-y-6">
          <SectionRail index="02" label="Primitives" meta="Surface Component" />
          <div className="grid sm:grid-cols-2 gap-6">
            <Surface hover={true} className="p-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-brass)]">
                hover = true (Default)
              </span>
              <h3 className="font-display text-lg font-medium text-[var(--color-ink)] mt-2">
                Interactive Surface
              </h3>
              <p className="text-[13px] text-[var(--color-ink-2)] mt-1.5 leading-relaxed">
                Subtle hover elevation with border tone transition and 1px upward translation.
              </p>
            </Surface>

            <Surface hover={false} className="p-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink-3)]">
                hover = false
              </span>
              <h3 className="font-display text-lg font-medium text-[var(--color-ink)] mt-2">
                Static Surface Container
              </h3>
              <p className="text-[13px] text-[var(--color-ink-2)] mt-1.5 leading-relaxed">
                Static card container without translateY or shadow changes on hover.
              </p>
            </Surface>
          </div>
        </section>

        {/* 3. Chip Gallery */}
        <section className="space-y-6">
          <SectionRail index="03" label="Primitives" meta="Chip Component" />
          <div className="flex flex-wrap items-center gap-3">
            <Chip live={true}>Accepting Projects Q3</Chip>
            <Chip live={true}>Live Deployment</Chip>
            <Chip live={false}>TypeScript 5.8</Chip>
            <Chip live={false}>TanStack Start</Chip>
            <Chip live={false}>Tailwind v4</Chip>
          </div>
        </section>

        {/* 4. Field Gallery */}
        <section className="space-y-6">
          <SectionRail index="04" label="Primitives" meta="Field & Form Components" />
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Full Name"
              placeholder="e.g. Satoshi Nakamoto"
              helperText="Enter your preferred contact name."
              required
            />

            <Field
              label="Work Email"
              type="email"
              placeholder="name@company.com"
              error="Please enter a valid business email address."
              defaultValue="invalid-email-address"
              required
            />

            <SelectField
              label="Service Required"
              options={[
                "MVP Development",
                "Web Application Development",
                "Mobile App Development",
                "Business Automation",
                "AI Solutions",
              ]}
              helperText="Select the primary scope for your enquiry."
            />

            <SelectField
              label="Budget Scope"
              options={["$15k – $40k", "$40k – $100k", "$100k+"]}
              error="Budget range is required for fixed-scope scoping."
            />

            <div className="sm:col-span-2">
              <TextareaField
                label="Project Overview"
                placeholder="Describe your technical requirements, goals, and target timeline..."
                helperText="Markdown or plain text accepted."
                rows={3}
              />
            </div>
          </div>
        </section>

        {/* 5. Shot Gallery - Cards don't stretch */}
        <section className="space-y-6">
          <SectionRail index="05" label="Primitives" meta="Shot Component" />
          <div className="grid sm:grid-cols-3 gap-6 items-start">
            <Shot
              category="Desktop Engine"
              title="Short Title"
              ratio="16/10"
            />
            <Shot
              category="Document Processing"
              title="Two-Line Extended Project Headline Showcase"
              ratio="16/10"
            />
            <Shot
              category="Square Format"
              title="Single-Line Title"
              ratio="1/1"
            />
          </div>
        </section>

        {/* 6. SectionRail Demo */}
        <section className="space-y-6">
          <SectionRail index="06" label="Structural" meta="SectionRail Component" />
          <p className="text-[14px] text-[var(--color-ink-2)]">
            Spec-document section eyebrow rail with monospace index, uppercase label, flex-1 1px rule,
            and optional end metadata:
          </p>
          <div className="space-y-4 surface p-6">
            <SectionRail index="01" label="Core Architectural Overview" />
            <SectionRail index="02" label="Engineering Milestones" meta="Sprint 01 – 04" />
            <SectionRail index="03" label="Performance & SLA Guarantees" meta="99.99% Uptime" />
          </div>
        </section>

        {/* 7. Section Container Demo */}
        <section className="space-y-6">
          <SectionRail index="07" label="Structural" meta="Section Component" />
          <p className="text-[14px] text-[var(--color-ink-2)]">
            Container component managing page rhythm with strict padding tokens (<code>compact: 96px</code>,{" "}
            <code>default: 128px</code>, <code>hero: 160px</code>, auto-dropping to <code>64px</code> below 720px):
          </p>
          <div className="surface overflow-hidden border divide-y divide-[var(--color-rule)]">
            <Section size="compact" divider={false} className="bg-[var(--color-card)]">
              <div className="font-mono text-xs uppercase text-[var(--color-ink-3)]">
                Section [size="compact", divider=false] (96px desktop / 64px mobile)
              </div>
            </Section>
            <Section size="default" divider={true} className="bg-[var(--color-sunk)]">
              <div className="font-mono text-xs uppercase text-[var(--color-ink-3)]">
                Section [size="default", divider=true] (128px desktop / 64px mobile)
              </div>
            </Section>
          </div>
        </section>

        {/* 8. Ledger Demo - Strict Brass Usage Rule */}
        <section className="space-y-6">
          <SectionRail index="08" label="Structural" meta="Ledger Component" />
          <p className="text-[14px] text-[var(--color-ink-2)]">
            Verifiable monospace fact rows with keys, values, and max 2-word brass accents:
          </p>
          <Ledger
            rows={[
              { key: "Target Delivery", value: "Week 03", accent: "staging" },
              { key: "Codebase Ownership", value: "100", accent: "% client" },
              { key: "Sprint Cadence", value: "1", accent: "week" },
              { key: "Deployment Latency", value: "< 24", accent: "hours" },
              { key: "Active Capacity", value: "2", accent: "projects" },
            ]}
          />
        </section>

        {/* 9. Row Demo */}
        <section className="space-y-6">
          <SectionRail index="09" label="Structural" meta="Row Component" />
          <p className="text-[14px] text-[var(--color-ink-2)]">
            Ordered list row pattern replacing card grids (64px / 1fr / auto with hover horizontal expansion):
          </p>
          <div className="surface p-4">
            <Row
              index={1}
              title="MVP Development"
              description="Ship a credible v1 in weeks, not quarters. Fixed scope, senior developers, and working staging builds from week three."
              meta="4 – 8 WEEKS"
              href="/services/mvp-development"
            />
            <Row
              index={2}
              title="Web Application Development"
              description="Custom dashboards, SaaS, CRM and internal platforms with clean architecture, robust security, and type-safe frontends."
              meta="6 – 16 WEEKS"
              href="/services/web-application-development"
            />
            <Row
              index={3}
              title="Mobile App Development"
              description="Cross-platform iOS and Android applications with native feel, offline-first sync, and store submissions handled end-to-end."
              meta="8 – 14 WEEKS"
              href="/services/mobile-app-development"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
