import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, ShieldCheck, Eye, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { motion } from "framer-motion";
import {
  HandDrawnCircle,
  HandDrawnUnderline,
  HandDrawnDoubleStrike,
} from "@/components/site/HandDrawnHighlights";
import { RetroStar, SparkleDeco, CurlyArrow } from "@/components/site/RetroDecorations";
import { StickerBoard } from "@/components/site/StickerBoard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GLAD studio" },
      {
        name: "description",
        content:
          "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life.",
      },
      { property: "og:title", content: "About — GLAD studio" },
      {
        property: "og:description",
        content:
          "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We pick technology that compounds — modern stacks, AI where it matters.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    body: "We ship on time and stand behind what we build.",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "You see the work as it happens. No black boxes, ever.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    body: "Type-safe, tested, observable. Boring code so your product can be exciting.",
  },
];

import arjunImg from "./images/arjun.jpg";
import jatinImg from "./images/jatin.jpg";
import parthImg from "./images/parth.jpg";
import someshImg from "./images/somesh.jpeg";

const team = [
  {
    name: "Arjun Singh Rajput",
    role: "Founder & CEO",
    bio: "Driving the vision, strategy, and execution.",
    image: arjunImg,
  },
  {
    name: "Jatin Khetan",
    role: "Co-founder & CTO",
    bio: "Architecting scalable systems and leading technical innovation.",
    image: jatinImg,
    imageClass: "object-[center_20%]",
  },
  {
    name: "Parth Garg",
    role: "CFO & Head of Product & Design",
    bio: "Managing financials and crafting seamless user experiences.",
    image: parthImg,
    imageClass: "object-[center_35%]",
  },
  {
    name: "Somesh Rajput",
    role: "Founding Product Engineer & Developer",
    bio: "Building robust, user-centric core product features.",
    image: someshImg,
  },
];

const valueColors = [
  { shadow: "var(--brand-pink)", iconBg: "rgba(255, 0, 127, 0.15)", iconText: "text-brand-pink" },
  { shadow: "var(--brand-blue)", iconBg: "rgba(0, 240, 255, 0.15)", iconText: "text-brand-blue" },
  {
    shadow: "var(--brand-purple)",
    iconBg: "rgba(159, 50, 255, 0.15)",
    iconText: "text-brand-purple",
  },
  { shadow: "var(--brand-2)", iconBg: "rgba(250, 204, 21, 0.2)", iconText: "text-brand-2" },
];

const teamColors = [
  { shadow: "var(--brand-pink)" },
  { shadow: "var(--brand-blue)" },
  { shadow: "var(--brand-purple)" },
  { shadow: "var(--team-calm)" },
];

function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 overflow-hidden">
        <HeroBackground />

        {/* Floating decorations */}
        <RetroStar
          className="left-10 top-36 hidden xl:block animate-float-sticker"
          size={48}
          color="var(--brand-pink)"
          rotation={25}
        />
        <SparkleDeco
          className="left-1/4 bottom-8 hidden md:block"
          size={24}
          color="var(--brand-purple)"
        />

        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-block w-6 h-px bg-brand-gradient" />
              About
            </div>
            <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.05]">
              We build <HandDrawnCircle color="var(--brand-pink)">products</HandDrawnCircle>,<br />
              not just{" "}
              <HandDrawnDoubleStrike color="var(--brand-purple)">software.</HandDrawnDoubleStrike>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              GLAD studio is a dedicated team of passionate builders. We help startups and growing
              businesses turn ideas into shipped products — web, mobile and AI — with the rigor of a
              great in-house team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20 section-divider">
        <div className="mx-auto max-w-5xl px-6 grid gap-12 md:grid-cols-2 items-start">
          <Reveal direction="left">
            <h2 className="text-3xl font-semibold tracking-tight">Our story</h2>
          </Reveal>
          <Reveal direction="right" delay={0.08}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We started GLAD studio because we kept seeing the same thing: founders spending
                months on agencies that overpromised, underdelivered, and left them with code they
                couldn't maintain.
              </p>
              <p>
                So we built something different — a tiny, senior team that works on a small number
                of projects at a time, ships every week, and treats your product like our own.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 section-divider noise-bg">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="What drives us" title="Values." />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {values.map((v, i) => {
              const colors = valueColors[i % valueColors.length];
              return (
                <RevealItem key={v.title}>
                  <div
                    className="surface-card interactive-card p-7 h-full calm-card-custom"
                    style={
                      {
                        // @ts-expect-error: custom CSS property shadow-card-hover
                        "--shadow-card-hover": `8px 8px 0px 0px ${colors.shadow}`,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className={`size-10 rounded-lg grid place-items-center ${colors.iconText}`}
                      style={{ backgroundColor: colors.iconBg }}
                    >
                      <v.icon className="size-5" />
                    </div>
                    <h3 className="mt-5 font-semibold tracking-tight">{v.title}</h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 section-divider">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="The people" title="The team." />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {team.map((m, i) => {
              const colors = teamColors[i % teamColors.length];
              return (
                <RevealItem key={m.name} direction="scale" className="h-full">
                  <div
                    className="surface-card interactive-card overflow-hidden group h-full flex flex-col calm-card-custom"
                    style={
                      {
                        // @ts-expect-error: custom CSS property shadow-card-hover
                        "--shadow-card-hover": `8px 8px 0px 0px ${colors.shadow}`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="aspect-square bg-brand-gradient relative overflow-hidden shrink-0">
                      {m.image ? (
                        <img
                          src={m.image}
                          alt={m.name}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${m.imageClass || ""}`}
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 grid-bg opacity-25" />
                          <div className="absolute inset-0 grid place-items-center text-5xl font-display font-semibold text-white/90 drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
                            {m.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="p-6 relative bg-inherit z-10 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold tracking-tight">{m.name}</h3>
                      <div className="text-xs text-muted-foreground mt-1">{m.role}</div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <Footer />
      <StickerBoard />
    </div>
  );
}
