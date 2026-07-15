import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { services } from "@/components/site/data";
import { motion } from "framer-motion";
import { useRef } from "react";
import { StickerBoard } from "@/components/site/StickerBoard";
import { HandDrawnCircle, HandDrawnUnderline } from "@/components/site/HandDrawnHighlights";
import { Rocket, Layout, Smartphone, Sparkles, Workflow } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GLAD studio" },
      {
        name: "description",
        content:
          "MVP development, web and mobile applications, AI solutions and business automation — built by a senior team.",
      },
      { property: "og:title", content: "Services — GLAD studio" },
      {
        property: "og:description",
        content:
          "MVP development, web and mobile applications, AI solutions and business automation — built by a senior team.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
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

function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen relative">
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
              Services
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground">
              Built for{" "}
              <HandDrawnUnderline color="var(--brand-pink)">ambitious teams.</HandDrawnUnderline>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Five focused services — each delivered by senior engineers, with clear timelines,
              fixed scope, and code you fully own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list centered */}
      <section ref={sectionRef} className="relative pb-28 overflow-visible">
        <div className="mx-auto max-w-5xl px-6 space-y-8 relative z-20">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.slug];
            const colors = serviceCardColors[s.slug];
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
                      Benefits
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
                  <div className="space-y-7">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Technologies
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
                        Estimated timeline
                      </h3>
                      <p className="mt-2 text-xl font-semibold text-gradient">{s.timeline}</p>
                    </div>
                    <Link to="/contact" className="btn-primary text-sm">
                      Start a project <ArrowRight className="size-4" />
                    </Link>
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
