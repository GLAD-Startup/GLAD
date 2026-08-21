import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { Row } from "@/components/site/Row";
import { Ledger } from "@/components/site/Ledger";
import { Shot } from "@/components/ui/Shot";
import { Chip } from "@/components/ui/Chip";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { projects, type Project } from "@/components/site/data";

export function buildProjectHead(project: Project) {
  return {
    meta: [
      { title: project.seo.title },
      { name: "description", content: project.seo.description },
      { property: "og:title", content: project.seo.title },
      { property: "og:description", content: project.seo.description },
      { property: "og:url", content: project.seo.canonical },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: project.seo.title },
      { name: "twitter:description", content: project.seo.description },
    ],
    links: [{ rel: "canonical", href: project.seo.canonical }],
    scripts: project.seo.jsonLd.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  };
}

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) =>
    loaderData ? buildProjectHead(loaderData.project) : { meta: [] },
  notFoundComponent: () => (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] flex flex-col justify-between">
      <Header />
      <div className="max-w-xl mx-auto text-center py-32 px-6">
        <h1 className="text-3xl font-display font-medium text-[var(--color-ink)]">
          Project not found
        </h1>
        <p className="text-[15px] text-[var(--color-ink-2)] mt-3">
          The requested case study does not exist or has been relocated.
        </p>
        <Link
          to="/portfolio"
          className="mt-6 inline-block font-mono text-[13px] text-[var(--color-ink)] hover:underline"
        >
          ← Back to portfolio
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project: p } = Route.useLoaderData();
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = sortedProjects.findIndex((item) => item.slug === p.slug);
  const prevProject =
    sortedProjects[(currentIndex - 1 + sortedProjects.length) % sortedProjects.length];
  const nextProject = sortedProjects[(currentIndex + 1) % sortedProjects.length];

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* 1. Hero (tone="paper" size="hero" divider={false}) */}
        <Section size="hero" tone="paper" divider={false}>
          {/* Breadcrumb: Home / Work / {name} */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <div className="flex items-center gap-2 font-mono text-[12px] text-[var(--color-ink-3)] select-none">
              <Link to="/" className="hover:text-[var(--color-ink)] transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]">
                Home
              </Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-[var(--color-ink)] transition-colors duration-[var(--duration-1,150ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))]">
                Work
              </Link>
              <span>/</span>
              <span className="text-[var(--color-ink)] font-medium">{p.name}</span>
            </div>
          </nav>

          {p.ledger && p.ledger.length > 0 ? (
            <div className="grid grid-cols-1 min-[901px]:grid-cols-12 gap-10 min-[901px]:gap-8 items-center">
              {/* Left 7 cols */}
              <div className="min-[901px]:col-span-7 flex flex-col items-start text-left">
                <Chip live={false}>{p.category}</Chip>
                <h1 className="max-w-[15ch] text-[clamp(52px,7vw,88px)] leading-[1.02] tracking-tight font-display font-medium text-[var(--color-ink)] mt-5">
                  {p.name}
                </h1>
                <p className="max-w-[52ch] text-[17px] text-[var(--color-ink-2)] mt-5 leading-relaxed">
                  {p.summary}
                </p>
              </div>
              {/* Right 5 cols */}
              <div className="min-[901px]:col-span-5 flex items-center w-full">
                <Ledger className="w-full" rows={p.ledger} />
              </div>
            </div>
          ) : (
            <div className="max-w-[720px] flex flex-col items-start text-left">
              <Chip live={false}>{p.category}</Chip>
              <h1 className="max-w-[15ch] text-[clamp(52px,7vw,88px)] leading-[1.02] tracking-tight font-display font-medium text-[var(--color-ink)] mt-5">
                {p.name}
              </h1>
              <p className="max-w-[52ch] text-[17px] text-[var(--color-ink-2)] mt-5 leading-relaxed">
                {p.summary}
              </p>
            </div>
          )}
        </Section>

        {/* 2. Challenge and Solution (tone="card") */}
        <Section size="default" tone="card" index="01">
          <SectionRail label="THE PROBLEM" />

          <div className="space-y-12">
            <div className="grid grid-cols-1 min-[901px]:grid-cols-12 gap-6 min-[901px]:gap-8 items-start">
              <div className="min-[901px]:col-span-4">
                <h2 className="text-[clamp(24px,2.5vw,30px)] font-display font-medium text-[var(--color-ink)]">
                  The Challenge
                </h2>
              </div>
              <div className="min-[901px]:col-span-8">
                <p className="text-[16px] text-[var(--color-ink-2)] leading-relaxed max-w-[62ch]">
                  {p.challenge}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 min-[901px]:grid-cols-12 gap-6 min-[901px]:gap-8 items-start pt-10 border-t border-[var(--color-rule)]">
              <div className="min-[901px]:col-span-4">
                <h2 className="text-[clamp(24px,2.5vw,30px)] font-display font-medium text-[var(--color-ink)]">
                  The Solution
                </h2>
              </div>
              <div className="min-[901px]:col-span-8">
                <p className="text-[16px] text-[var(--color-ink-2)] leading-relaxed max-w-[62ch]">
                  {p.solution}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. Features (tone="deep") */}
        <Section size="default" tone="deep" index="02">
          <SectionRail label="WHAT WE BUILT" />

          <div className="border border-[var(--color-deep-rule)] rounded-[var(--radius-lg,14px)] bg-[#171B20] p-2 sm:p-4">
            {p.features.map((feature, idx) => (
              <Row key={feature} index={idx + 1} title={feature} />
            ))}
          </div>
        </Section>

        {/* 4. Gallery (tone="paper") */}
        <Section size="default" tone="paper" index="03">
          <SectionRail label="SCREENS" />

          <div className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-8 items-start">
            {p.shots.map((shot, idx) => (
              <div key={idx} className="flex flex-col">
                <Shot
                  src={shot.src}
                  category={p.name}
                  title={shot.caption}
                  ratio="16/10"
                />
                <div className="font-mono text-[13px] text-[var(--color-ink-3)] mt-2.5 px-0.5">
                  {shot.caption}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Outcome (tone="paper", rendered ONLY when project.outcome exists) */}
        {p.outcome && (
          <Section size="default" tone="paper" index="04">
            <SectionRail label="OUTCOME" />

            <div className="mx-auto max-w-[62ch] text-center">
              <p className="text-[20px] font-display font-medium text-[var(--color-ink)] leading-relaxed">
                {p.outcome}
              </p>
            </div>
          </Section>
        )}

        {/* 6. Next / previous (tone="paper" divider={false}) */}
        <Section size="default" tone="paper" divider={false}>
          <div className="border border-[var(--color-rule)] rounded-[var(--radius-lg,14px)] bg-[var(--color-card)] p-2 sm:p-4 grid grid-cols-1 min-[721px]:grid-cols-2 gap-4">
            <Row
              title={`← ${prevProject.name}`}
              description={prevProject.category}
              href={`/portfolio/${prevProject.slug}`}
            />
            <Row
              title={`${nextProject.name} →`}
              description={nextProject.category}
              href={`/portfolio/${nextProject.slug}`}
            />
          </div>
        </Section>

        {/* 7. Closing CTA (tone="paper" divider={false}) */}
        <Section size="default" tone="paper" divider={false}>
          <ClosingCTA />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
