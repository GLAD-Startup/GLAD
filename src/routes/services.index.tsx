import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Rocket, Layout, Smartphone, Sparkles, Workflow } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/components/site/data";
import { motion } from "framer-motion";
import { useRef } from "react";
import { StickerBoard } from "@/components/site/StickerBoard";
import { HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";

const serviceRoutes: Record<string, string> = {
  mvp: "/services/mvp-development",
  web: "/services/web-application-development",
  mobile: "/services/mobile-app-development",
  ai: "/services/ai-solutions",
  automation: "/services/business-automation",
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Software Engineering & AI Product Services — GLAD Studio" },
      {
        name: "description",
        content:
          "Explore custom software engineering services by GLAD Studio: MVP development, custom web applications, cross-platform mobile apps, AI solutions, and business automation.",
      },
      { property: "og:title", content: "Software Engineering & AI Product Services — GLAD Studio" },
      {
        property: "og:description",
        content:
          "MVP development, web and mobile applications, AI solutions and business automation — built by a senior engineering team.",
      },
      { property: "og:url", content: "https://gladstudio.net/services" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Software Engineering & AI Product Services — GLAD Studio" },
      {
        name: "twitter:description",
        content:
          "Custom MVP development, full-stack web apps, Flutter mobile apps, AI systems, and workflow automation.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/#webpage",
              url: "https://gladstudio.net/services",
              name: "Software Engineering & AI Product Services — GLAD Studio",
              description:
                "MVP development, web and mobile applications, AI solutions and business automation — built by a senior engineering team.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/#breadcrumb",
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
                  name: "Services",
                  item: "https://gladstudio.net/services",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesIndexPage,
});

const serviceIcons: Record<string, typeof Rocket> = {
  mvp: Rocket,
  web: Layout,
  mobile: Smartphone,
  ai: Sparkles,
  automation: Workflow,
};

const serviceCardColors = {
  mvp: {
    shadow: "var(--brand-pink)",
    iconBg: "linear-gradient(135deg, var(--brand-pink) 0%, #FF66B2 100%)",
    iconText: "text-white",
  },
  web: {
    shadow: "var(--brand-blue)",
    iconBg: "linear-gradient(135deg, var(--brand-blue) 0%, #66F5FF 100%)",
    iconText: "text-black",
  },
  mobile: {
    shadow: "var(--brand-purple)",
    iconBg: "linear-gradient(135deg, var(--brand-purple) 0%, #C994FF 100%)",
    iconText: "text-white",
  },
  ai: {
    shadow: "var(--brand-2)",
    iconBg: "linear-gradient(135deg, var(--brand-2) 0%, #FFE680 100%)",
    iconText: "text-black",
  },
  automation: {
    shadow: "var(--team-calm)",
    iconBg: "linear-gradient(135deg, var(--brand) 0%, #86EFAC 100%)",
    iconText: "text-white",
  },
} as const;

function ServicesIndexPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen relative bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-block w-6 h-px bg-brand-gradient" />
              Engineering Services
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground">
              Built for{" "}
              <HandDrawnUnderline color="var(--brand-pink)">ambitious teams.</HandDrawnUnderline>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Five dedicated engineering services — each delivered by senior developers, with clean
              architecture, predictable milestones, and source code you fully own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list centered */}
      <section ref={sectionRef} className="relative pb-28 overflow-visible">
        <div className="mx-auto max-w-5xl px-6 space-y-8 relative z-20">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.slug];
            const colors = serviceCardColors[s.slug as keyof typeof serviceCardColors];
            const serviceUrl = serviceRoutes[s.slug] || "/services";

            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <article
                  id={`service-${s.slug}`}
                  className="surface-card interactive-card shine-on-hover p-8 md:p-12 grid gap-10 lg:grid-cols-3 relative z-20 calm-card-custom"
                  style={
                    {
                      // @ts-ignore
                      "--shadow-card-hover": `8px 8px 0px 0px ${colors.shadow}`,
                    } as React.CSSProperties
                  }
                >
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      {Icon && (
                        <div
                          className={`size-10 rounded-lg grid place-items-center shadow-lg ${colors.iconText}`}
                          style={{ background: colors.iconBg }}
                        >
                          <Icon className="size-4" />
                        </div>
                      )}
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                        {String(i + 1).padStart(2, "0")} — {s.slug.toUpperCase()}
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                      {s.description}
                    </p>

                    <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Key Deliverables
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm">
                          <div
                            className="size-5 rounded-full grid place-items-center mt-0.5 shrink-0 text-white"
                            style={{ background: colors.iconBg }}
                          >
                            <Check className="size-3" />
                          </div>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Core Technologies
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Typical Scope Timeline
                        </h3>
                        <p className="mt-2 text-xl font-semibold text-gradient">{s.timeline}</p>
                      </div>
                    </div>

                    <div className="pt-2 space-y-3">
                      <Link
                        to={serviceUrl}
                        className="btn-primary text-sm w-full justify-center group"
                      >
                        <span>Explore {s.title}</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/contact"
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground text-center block transition-colors"
                      >
                        Have questions? Book a call →
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Footer />
      <StickerBoard />
    </div>
  );
}
