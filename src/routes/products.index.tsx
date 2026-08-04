import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, CheckCircle2, Building2, Utensils } from "lucide-react";
import buildingImg from "@/routes/images/settledesk/building.png";
import luxuryVillaImg from "@/routes/images/settledesk/luxury-villa.png";

export interface AgencyProduct {
  readonly slug: string;
  readonly name: string;
  readonly category: string;
  readonly tagline: string;
  readonly description: string;
  readonly route: string;
  readonly status: "Live" | "Coming Soon";
  readonly badgeText: string;
  readonly heroImage: string;
  readonly icon: typeof Building2;
  readonly metrics: readonly { readonly value: string; readonly label: string }[];
  readonly keyFeatures: readonly string[];
}

export const productsData: readonly AgencyProduct[] = [
  {
    slug: "settledesk",
    name: "SettleDesk",
    category: "Real Estate SaaS",
    tagline: "Run Your Entire Brokerage on One Platform",
    description:
      "All-in-one multi-tenant real estate operating system. Connects field agents on mobile, brokerage managers on web, and immutable audit ledgers in real time.",
    route: "/products/settledesk",
    status: "Live",
    badgeText: "Real Estate Operating System",
    heroImage: buildingImg,
    icon: Building2,
    metrics: [
      { value: "500+", label: "Brokers Onboarded" },
      { value: "10,000+", label: "Units Managed" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    keyFeatures: [
      "PostgreSQL Row-Level Security (RLS) isolation",
      "Interactive 3-tier deal cascade & split engine",
      "Field agent mobile contract submission",
      "Version-controlled commission structure rules",
    ],
  },
  {
    slug: "restoos",
    name: "RESTOOS",
    category: "Hospitality & Restaurant SaaS",
    tagline: "Restaurant Operating System & POS Matrix",
    description:
      "Unified hospitality operating platform connecting front-of-house POS systems, kitchen execution displays, inventory, and online ordering.",
    route: "/products",
    status: "Coming Soon",
    badgeText: "Hospitality Operating System",
    heroImage: luxuryVillaImg,
    icon: Utensils,
    metrics: [
      { value: "Q3 2026", label: "Target Launch" },
      { value: "POS + KDS", label: "Unified Stack" },
      { value: "Multi-Unit", label: "Franchise Ready" },
    ],
    keyFeatures: [
      "Real-time kitchen execution display system (KDS)",
      "Multi-branch ingredient inventory tracking",
      "Tableside QR ordering & mobile checkout",
    ],
  },
];

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products & SaaS Platforms — Glad Studio" },
      {
        name: "description",
        content:
          "Explore proprietary software applications engineered and operated by Glad Studio, including SettleDesk for real estate brokerages and RESTOOS for hospitality.",
      },
      { property: "og:title", content: "Products & SaaS Platforms — Glad Studio" },
      {
        property: "og:description",
        content:
          "Explore proprietary SaaS applications engineered and operated by Glad Studio, including SettleDesk for real estate brokerages.",
      },
      { property: "og:url", content: "https://gladstudio.net/products" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Products & SaaS Platforms — Glad Studio" },
      {
        name: "twitter:description",
        content: "Explore proprietary SaaS platforms engineered and operated by Glad Studio.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://gladstudio.net/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Software Products by Glad Studio",
          description: "Proprietary SaaS platforms engineered by Glad Studio.",
          url: "https://gladstudio.net/products",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "SettleDesk",
              url: "https://gladstudio.net/products/settledesk",
            },
          ],
        }),
      },
    ],
  }),
  component: ProductsIndexPage,
});

function ProductsIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-36 pb-24 md:pt-44 md:pb-32 relative">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <SectionHeading
            eyebrow="Our Products"
            title="Software Platforms Built to Scale"
            sub="Proprietary SaaS systems designed, engineered, and operated by Glad Studio."
            center
          />

          {/* Product Listing Grid */}
          <div className="mt-16 space-y-12">
            {productsData.map((product) => {
              const Icon = product.icon;
              const isLive = product.status === "Live";

              return (
                <Reveal key={product.slug} direction="up">
                  <div className="surface-card p-6 md:p-10 rounded-3xl border-2 border-border hover:border-foreground/40 transition-all duration-300 shadow-xl overflow-hidden group">
                    <div className="grid gap-10 lg:grid-cols-12 items-center">
                      {/* Left Details */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface text-xs font-bold uppercase tracking-wider text-[#e5b84c]">
                            <Icon className="size-3.5" />
                            {product.category}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                              isLive
                                ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30"
                                : "bg-muted text-muted-foreground border border-border"
                            }`}
                          >
                            {product.status}
                          </span>
                        </div>

                        <div>
                          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
                            {product.name}
                          </h2>
                          <p className="mt-2 text-base md:text-lg font-semibold text-[#e5b84c]">
                            {product.tagline}
                          </p>
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                          {product.description}
                        </p>

                        {/* Feature Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {product.keyFeatures.map((feat) => (
                            <div key={feat} className="flex items-start gap-2 text-xs font-medium">
                              <CheckCircle2 className="size-4 text-[#e5b84c] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="pt-4 flex flex-wrap items-center gap-4">
                          {isLive ? (
                            <Link to={product.route} className="btn-primary">
                              <span>Explore {product.name}</span>
                              <ArrowRight className="size-4" />
                            </Link>
                          ) : (
                            <span className="btn-secondary opacity-60 cursor-not-allowed">
                              In Active Development
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right Visual Stage */}
                      <div className="lg:col-span-5">
                        <div className="relative aspect-[4/3] rounded-2xl border border-border bg-background/60 p-4 overflow-hidden flex items-center justify-center">
                          <img
                            src={product.heroImage}
                            alt={`${product.name} Showcase Graphic`}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            width={450}
                            height={340}
                          />

                          {/* Quick Metrics Bar */}
                          <div className="absolute bottom-3 inset-x-3 grid grid-cols-3 gap-2 bg-surface/90 backdrop-blur-md p-2.5 rounded-xl border border-border">
                            {product.metrics.map((m) => (
                              <div key={m.label} className="text-center">
                                <div className="font-mono text-xs font-bold text-foreground">
                                  {m.value}
                                </div>
                                <div className="text-[9px] text-muted-foreground uppercase font-medium">
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
