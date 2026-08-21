import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { SectionRail } from "@/components/site/SectionRail";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import arjunImg from "./images/arjun.jpg";
import jatinImg from "./images/jatin.jpg";
import parthImg from "./images/parth.jpeg";
import someshImg from "./images/somesh.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — GLAD studio" },
      {
        name: "description",
        content:
          "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life.",
      },
      { property: "og:title", content: "About Us — GLAD studio" },
      {
        property: "og:description",
        content:
          "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life.",
      },
      { property: "og:url", content: "https://gladstudio.net/about" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": "https://gladstudio.net/about/#webpage",
              url: "https://gladstudio.net/about",
              name: "About Us — GLAD studio",
              description:
                "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/about/#breadcrumb",
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
                  name: "About",
                  item: "https://gladstudio.net/about",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    num: "01",
    title: "Innovation",
    body: "We pick technology that compounds — modern stacks, AI where it matters.",
  },
  {
    num: "02",
    title: "Reliability",
    body: "We ship on time and stand behind what we build.",
  },
  {
    num: "03",
    title: "Transparency",
    body: "You see the work as it happens. No black boxes, ever.",
  },
  {
    num: "04",
    title: "Quality",
    body: "Type-safe, tested, observable. Boring code so your product can be exciting.",
  },
];

const team = [
  {
    num: "01",
    name: "Arjun Singh Rajput",
    role: "CEO & Head of Strategy",
    bio: "Driving overarching vision, strategic growth, and execution.",
    image: arjunImg,
  },
  {
    num: "02",
    name: "Jatin Khetan",
    role: "CFO & Head of Product & Design",
    bio: "Managing financial strategy and crafting intuitive, user-centric product experiences.",
    image: jatinImg,
    imageClass: "object-[center_20%]",
  },
  {
    num: "03",
    name: "Parth Garg",
    role: "COO & Head of Operations",
    bio: "Streamlining cross-functional execution and scaling operational excellence.",
    image: parthImg,
  },
  {
    num: "04",
    name: "Somesh Rajput",
    role: "CTO & Head of Engineering",
    bio: "Architecting scalable systems and driving core technical innovation.",
    image: someshImg,
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-live)] selection:text-[var(--color-card)]">
      <Header />

      <main>
        {/* 1. Hero — tone="paper" size="hero" divider={false} */}
        <Section size="hero" tone="paper" divider={false}>
          <SectionRail label="ABOUT" />

          <div className="max-w-[720px] flex flex-col items-start text-left">
            <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.04] tracking-tight font-display font-medium text-[var(--color-ink)]">
              We build products,
              <br />
              not just software.
            </h1>
            <p className="mt-6 text-[17px] text-[var(--color-ink-2)] leading-relaxed max-w-[52ch]">
              GLAD studio is a dedicated team of passionate builders. We help startups and growing
              businesses turn ideas into shipped products — web, mobile and AI — with the rigor of a
              great in-house team.
            </p>
          </div>
        </Section>

        {/* 2. Story — tone="card" */}
        <Section size="default" tone="card">
          <SectionRail label="OUR STORY" />

          <div className="grid grid-cols-1 min-[901px]:grid-cols-12 gap-8 min-[901px]:gap-12 items-start">
            <div className="min-[901px]:col-span-4">
              <h2 className="text-[clamp(32px,3.8vw,44px)] font-display font-medium text-[var(--color-ink)] leading-tight">
                Our story.
              </h2>
            </div>
            <div className="min-[901px]:col-start-6 min-[901px]:col-span-7 space-y-5 text-[17px] text-[var(--color-ink-2)] leading-relaxed max-w-[62ch]">
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
          </div>
        </Section>

        {/* 3. Values — tone="deep" */}
        <Section size="default" tone="deep">
          <SectionRail label="WHAT DRIVES US" />

          <div className="max-w-xl mb-12">
            <h2 className="text-[clamp(36px,4.5vw,52px)] font-display font-medium text-[var(--color-deep-ink)] leading-tight">
              What drives us.
            </h2>
          </div>

          <div className="border border-[var(--color-deep-rule)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-deep-rule)]">
            {values.map((v) => (
              <div key={v.num} className="p-7 flex flex-col justify-between">
                <div className="font-mono text-[13px] text-[var(--color-brass)] mb-6">
                  {v.num}
                </div>
                <div>
                  <h3 className="font-display text-[19px] font-medium text-[var(--color-deep-ink)] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-deep-ink)] opacity-80 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. Team — tone="paper" */}
        <Section size="default" tone="paper">
          <SectionRail label="THE TEAM" />

          <div className="max-w-xl mb-12">
            <h2 className="text-[clamp(36px,4.5vw,52px)] font-display font-medium text-[var(--color-ink)] leading-tight">
              The team.
            </h2>
          </div>

          <div className="grid grid-cols-1 min-[641px]:grid-cols-4 gap-6 items-start">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col items-start text-left group">
                <div className="w-full aspect-square rounded-[var(--radius-md,8px)] border border-[var(--color-rule)] bg-[var(--color-sunk)] overflow-hidden mb-4 relative">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover transition-transform duration-[var(--duration-2,300ms)] ease-[var(--ease-move,cubic-bezier(0.4,0,0.2,1))] group-hover:scale-[1.02] ${m.imageClass || ""}`}
                  />
                </div>
                <div className="font-mono text-[13px] text-[var(--color-brass)] mb-1.5">
                  {m.num}
                </div>
                <h3 className="font-display text-[17px] min-[901px]:text-[19px] font-medium text-[var(--color-ink)]">
                  {m.name}
                </h3>
                <div className="font-mono text-[12px] min-[901px]:text-[13px] text-[var(--color-ink-3)] mt-1 mb-2.5">
                  {m.role}
                </div>
                <p className="text-[13px] min-[901px]:text-[14px] text-[var(--color-ink-2)] leading-relaxed">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. ClosingCTA */}
        <Section size="default" tone="paper" divider={false}>
          <ClosingCTA />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
