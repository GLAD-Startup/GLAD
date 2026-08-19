import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import { articles } from "@/data/insights";
import {
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  User,
  BookOpen,
  BrainCircuit,
  Bot,
  Search,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "AI Engineering Insights & Technical Guides — GLAD Studio" },
      {
        name: "description",
        content:
          "Practical engineering guides on AI development, AI agents, RAG systems, LLM applications, and software architecture by GLAD Studio.",
      },
      {
        property: "og:title",
        content: "AI Engineering Insights & Technical Guides — GLAD Studio",
      },
      {
        property: "og:description",
        content:
          "Practical engineering guides on AI development, AI agents, RAG systems, LLM applications, and software architecture by GLAD Studio.",
      },
      { property: "og:url", content: "https://gladstudio.net/insights" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AI Engineering Insights & Technical Guides — GLAD Studio",
      },
      {
        name: "twitter:description",
        content:
          "Deep-dive technical guides on AI development, agent architectures, RAG vs fine-tuning, and production LLM engineering.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/insights" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://gladstudio.net/insights/#webpage",
              url: "https://gladstudio.net/insights",
              name: "AI Engineering Insights & Technical Guides — GLAD Studio",
              description:
                "Practical engineering guides on AI development, AI agents, RAG systems, LLM applications, and software architecture by GLAD Studio.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/insights/#breadcrumb",
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
                  name: "Insights",
                  item: "https://gladstudio.net/insights",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: InsightsIndexPage,
});

const categoryIcons: Record<string, typeof Sparkles> = {
  "AI Economics & Strategy": BrainCircuit,
  "AI Architecture": Bot,
  "Agentic Engineering": Cpu,
  "LLM Systems": Search,
  "Engineering Guide": Layers,
};

function InsightsIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-semibold" aria-current="page">
                Insights
              </li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c] mb-6">
              <Sparkles className="size-3.5" />
              <span>Engineering & AI Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1]">
              AI Engineering{" "}
              <HandDrawnUnderline color="var(--brand-2)">Insights</HandDrawnUnderline>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Practical software engineering guides, architectural blueprints, and cost breakdowns
              covering AI development, autonomous AI agents, retrieval-augmented generation (RAG),
              LLM applications, and production systems engineering.
            </p>
          </motion.div>

          {/* Commercial Pillar Callout */}
          <div className="mt-10 p-6 md:p-8 rounded-2xl border-2 border-border bg-surface/40 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#e5b84c]">
                Commercial Services
              </span>
              <h2 className="text-lg md:text-xl font-bold font-display text-foreground mt-1">
                Looking to Build Custom AI Solutions for Your Business?
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-2xl">
                GLAD Studio engineers production-ready LLM applications, RAG search pipelines, AI
                agents, and automated workflows for startups and enterprises.
              </p>
            </div>
            <Link
              to="/services/ai-solutions"
              className="btn-primary text-xs md:text-sm shrink-0 whitespace-nowrap shadow-[3px_3px_0px_0px_var(--border)]"
            >
              <span>Explore AI Solutions →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 border-t border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((art, idx) => {
              const Icon = categoryIcons[art.category] || Sparkles;
              return (
                <Reveal key={art.slug} delay={idx * 0.05}>
                  <article className="surface-card rounded-2xl border-2 border-border hover:border-foreground/50 transition-all duration-300 shadow-md p-6 md:p-8 h-full flex flex-col justify-between group hover:-translate-y-1">
                    <div>
                      {/* Category Badge & Read Time */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-[11px] font-bold uppercase tracking-wider text-[#e5b84c]">
                          <Icon className="size-3" />
                          {art.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground font-mono">
                          <Clock className="size-3" />
                          {art.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold font-display text-foreground leading-snug group-hover:text-[#e5b84c] transition-colors">
                        <Link to={`/insights/${art.slug}`}>{art.title}</Link>
                      </h2>

                      {/* Summary */}
                      <p className="mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {art.summary}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/70 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="size-8 rounded-full bg-surface border border-border flex items-center justify-center text-xs font-bold text-foreground font-mono">
                          {art.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-foreground">{art.author.name}</div>
                          <div className="text-[10px] text-muted-foreground">{art.author.role}</div>
                        </div>
                      </div>

                      <Link
                        to={`/insights/${art.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-foreground group-hover:text-[#e5b84c] transition-colors"
                        aria-label={`Read article: ${art.title}`}
                      >
                        <span>Read</span>
                        <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cluster Authority Footer Box */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#e5b84c]">
            GLAD Engineering Knowledge
          </span>
          <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
            Architecture-Driven AI Engineering
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our insights reflect our real-world engineering work. We build software systems with
            type-safe backends, isolated multi-tenant databases, resilient API integrations, and
            transparent evaluation metrics.
          </p>
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <Link to="/services" className="btn-secondary text-xs md:text-sm">
              Explore All Engineering Services
            </Link>
            <Link to="/portfolio" className="btn-primary text-xs md:text-sm">
              View Shipped Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
