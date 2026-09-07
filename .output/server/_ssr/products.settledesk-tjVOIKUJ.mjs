import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer, E as EmailModal } from "./Footer-Ddl7K2mX.mjs";
import { R as Reveal } from "./Reveal-D3D4kp9B.mjs";
import { S as SectionHeading } from "./SectionHeading-D_TkcIwC.mjs";
import { P as ProductHero, a as ProductThreeTier, b as ProductFeatureSplit, c as ProductWorkflowSequence, d as ProductPricingTable, e as ProductFAQAccordion, f as ProductCTA, l as luxuryVilla, g as commission3d, r as realEstateContract } from "./ProductWorkflowSequence-Cwd7gVqp.mjs";
import "../_libs/seroval.mjs";
import { v as Lock, O as FileCheck, D as Database, V as ChevronLeft, Y as MoveHorizontal, j as ChevronRight, X, f as Sparkles } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-CJ551Cx9.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/calcom__embed-react.mjs";
import "./server-BPMMSW8U.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const settledeskData = {
  hero: {
    eyebrow: "Premium Brokerage Operations",
    title: "Run Your Entire Brokerage.",
    titleGradient: "On One Platform.",
    description: "SettleDesk unifies property management, agent operations, lead tracking, and commission payouts into one secure, real-time system — built for brokerages that are ready to scale.",
    primaryCtaText: "Start Free Trial",
    secondaryCtaText: "Book a Discovery Call",
    stats: [
      { value: "500+", label: "Brokers Onboarded" },
      { value: "10,000+", label: "Units Managed" },
      { value: "99.9%", label: "Platform Uptime" },
      { value: "Bank-Grade", label: "Data Security" }
    ]
  },
  threeTier: [
    {
      role: "For Platform Operators",
      title: "Super Admin Portal",
      description: "Manage every brokerage on SettleDesk from a single command center — subscriptions, billing, onboarding, and platform-wide analytics.",
      bullets: [
        "Subscription & billing management",
        "Client onboarding & lifecycle tracking",
        "Platform-wide audit logs"
      ]
    },
    {
      role: "For Brokerage Owners & Managers",
      title: "Client Admin Dashboard",
      description: "Take full control of your brokerage's operations — from listing properties to approving deals and structuring commissions your way.",
      bullets: [
        "Property & portfolio management",
        "Version-controlled commission plans",
        "Deal & payout approvals"
      ]
    },
    {
      role: "For Agents on the Go",
      title: "Broker Mobile App",
      description: "Everything your agents need to close deals right from their phones — live listings, lead tracking, and real-time commission visibility.",
      bullets: [
        "Real-time property browsing",
        "Lead & deal management",
        "Live commission tracking"
      ]
    }
  ],
  features: [
    {
      eyebrow: "Property & Portfolio Management",
      title: "Every Property. Always Up to Date.",
      description: "Create, manage, and track your entire property portfolio in real time. Update unit statuses — Draft, Active, Sold — and keep every agent working from the same live data.",
      routePath: "settledesk.io/property-management"
    },
    {
      eyebrow: "Commission Structure Engine",
      title: "Commission Plans, Built Your Way.",
      description: "Design version-controlled commission structures and assign them precisely — by broker, by property, by deal. No spreadsheets, no guesswork.",
      routePath: "settledesk.io/commission-engine"
    },
    {
      eyebrow: "Deal & Payout Approvals",
      title: "From Submitted to Sold, Automatically.",
      description: "When a broker closes a deal, admins review and approve it in one click — instantly updating unit status and queuing the commission payout.",
      routePath: "settledesk.io/deal-approvals"
    },
    {
      eyebrow: "Real-Time Sync Across Devices",
      title: "One Source of Truth. Every Device.",
      description: "Whether it's the mobile app or the web dashboard, everyone sees the same data, the same moment it changes — no fragmentation, no delays.",
      routePath: "settledesk.io/real-time-sync"
    }
  ],
  securityPillars: [
    {
      title: "Row-Level Security",
      description: "Database-enforced isolation ensures one brokerage can never access another's data."
    },
    {
      title: "Immutable Audit Trails",
      description: "Every critical action is automatically logged for full compliance and traceability."
    },
    {
      title: "Enterprise Data Isolation",
      description: "A single unified database architected for multi-tenant safety at scale."
    }
  ],
  steps: [
    {
      phase: "Phase 1: Setup",
      metric: "Under 5m",
      title: "Onboard",
      description: "Your brokerage gets provisioned and configured in minutes.",
      checklist: [
        "Create dedicated tenant DB",
        "Configure custom subdomain",
        "Invite initial Super Admin"
      ]
    },
    {
      phase: "Phase 2: Rules",
      metric: "Versioned",
      title: "Configure",
      description: "Admins set up properties, teams, and commission structures.",
      checklist: [
        "Upload properties catalog",
        "Define agent split tiers",
        "Set office caps & royalty fee"
      ]
    },
    {
      phase: "Phase 3: Sales",
      metric: "Real-time",
      title: "Sell",
      description: "Brokers manage leads and close deals from the mobile app.",
      checklist: [
        "Browse active property list",
        "Log client offer & contract",
        "Upload closing signatures"
      ]
    },
    {
      phase: "Phase 4: Finance",
      metric: "Instant",
      title: "Get Paid",
      description: "Deals get approved, and commissions are calculated automatically.",
      checklist: [
        "One-click admin approval",
        "Calculate split & split caps",
        "Queue bank payout transfer"
      ]
    }
  ],
  pricing: [
    {
      name: "Starter",
      tagline: "For small brokerages getting started",
      featured: false,
      features: [
        "Up to 10 agents",
        "Core property & lead management",
        "Standard commission plans",
        "Email support"
      ],
      ctaText: "Start Free Trial"
    },
    {
      name: "Professional",
      tagline: "For growing brokerages that need more control",
      featured: true,
      features: [
        "Up to 50 agents",
        "Advanced commission engine",
        "Deal approval workflows",
        "Priority support"
      ],
      ctaText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      tagline: "For large, multi-branch operations",
      featured: false,
      features: [
        "Unlimited agents",
        "Custom integrations & SLAs",
        "Dedicated onboarding & support",
        "Advanced audit & compliance tools"
      ],
      ctaText: "Contact Sales"
    }
  ],
  faqs: [
    {
      question: "How fast can our brokerage get set up on SettleDesk?",
      answer: "Provisioning a new company workspace takes under 5 minutes. Admins can instantly start uploading property catalogs and inviting team members."
    },
    {
      question: "Is our brokerage's data isolated from other companies?",
      answer: "Yes. SettleDesk utilizes PostgreSQL Row-Level Security (RLS) policies at the database layer. One tenant can never access or query another brokerage's data under any circumstances."
    },
    {
      question: "Can we customize our commission split structures?",
      answer: "Absolutely. SettleDesk features a version-controlled commission matrix engine allowing custom agent split tiers, office caps, franchise fees, and royalty subtractions."
    },
    {
      question: "Does SettleDesk support field agents on mobile?",
      answer: "Yes, SettleDesk includes a native iOS & Android mobile application built with React Native and Expo, keeping agents connected to live listings and deal submissions in real time."
    },
    {
      question: "Is there a free trial period?",
      answer: "We offer a 30-day full-featured free trial for new brokerages with zero setup fees and no credit card required upfront."
    }
  ],
  aboutStory: {
    eyebrow: "Our Story",
    title: "Built by People Who Understand Real Estate",
    body1: "Real estate brokerages sit at the center of a lot of moving parts — properties, agents, leads, deals, and payouts — but most software built for the industry only solves one piece of that puzzle at a time. Teams end up stitching together a CRM, a spreadsheet for commissions, a separate tool for property listings, and group chats for approvals.",
    body2: "We built SettleDesk to be the operational backbone brokerages actually need: one platform, one source of truth, built for every role in the business — from platform operators to brokerage owners to field agents closing deals.",
    beliefs: [
      {
        title: "Clean business rules.",
        desc: "Admins control properties and commission structures. Brokers sell. The platform enforces this so nothing gets messy."
      },
      {
        title: "Real-time, always.",
        desc: "Every device — mobile or web — reflects the same live data, the moment it changes."
      },
      {
        title: "Security isn't optional.",
        desc: "Multi-tenant systems demand strict data isolation. We built that in from day one."
      },
      {
        title: "Built for scale.",
        desc: "From a single-office brokerage to a multi-branch enterprise operation, the platform grows with you."
      }
    ]
  }
};
const corporateServer = "/assets/corporate-server-K2LnUUom.png";
const modernOfficeFacade = "/assets/modern-office-facade-D8XTQ7N3.png";
const brokerDeal = "/assets/broker-deal-DPRxkxSs.png";
const skyscraperSunset = "/assets/skyscraper-sunset-CrHOTkVq.png";
const hero3d = "/assets/hero-3d-BRE9eg6M.png";
const GALLERY_ITEMS = [
  {
    id: "identity",
    number: "// 01",
    tag: "IDENTITY",
    title: "Dedicated Tenant Isolation",
    subtitle: "End-to-End Encryption",
    description: "Enterprise multi-tenant architecture with isolated database schemas, row-level security, and cryptographic tenant separation.",
    image: corporateServer
  },
  {
    id: "prestige",
    number: "// 02",
    tag: "PRESTIGE",
    title: "Luxury Branding Hub",
    subtitle: "Private Office Spaces",
    description: "Custom domain mapping, white-label agent portals, and customized high-converting client presentation decks.",
    image: modernOfficeFacade
  },
  {
    id: "pipeline",
    number: "// 03",
    tag: "PIPELINE",
    title: "Instant Client Routing",
    subtitle: "Smart Lead Distribution",
    description: "Automated round-robin lead allocation matching high-net-worth clients directly to top-producing brokerage agents.",
    image: brokerDeal
  },
  {
    id: "portfolio",
    number: "// 04",
    tag: "PORTFOLIO",
    title: "High-Value Property Catalog",
    subtitle: "Real-Time Inventory",
    description: "Live spatial property catalog with instant status updates, automated price adjustments, and virtual tour embeds.",
    image: luxuryVilla
  },
  {
    id: "financials",
    number: "// 05",
    tag: "FINANCIALS",
    title: "Automated Commission Splits",
    subtitle: "Tiered Splits & Royalty Caps",
    description: "Instant GCI calculation engine supporting custom 80/20, 70/30, or 90/10 split tiers, desk fees, and office royalty caps.",
    image: commission3d
  },
  {
    id: "governance",
    number: "// 06",
    tag: "GOVERNANCE",
    title: "One-Click Deal Approvals",
    subtitle: "Audit-Ready Legal Vault",
    description: "Digital closing binder checks, e-signature validation, and immutable real-time payout audit logs for compliance.",
    image: realEstateContract
  },
  {
    id: "analytics",
    number: "// 07",
    tag: "ANALYTICS",
    title: "Brokerage Growth Engine",
    subtitle: "Executive BI Dashboard",
    description: "Real-time revenue projections, agent performance leaderboards, and predictive quarterly volume forecasting.",
    image: skyscraperSunset
  },
  {
    id: "mobility",
    number: "// 08",
    tag: "MOBILITY",
    title: "On-the-Go Agent Workflows",
    subtitle: "iOS & Android Native App",
    description: "Full operational suite on mobile — capture client signatures, view real-time commission splits, and submit deals directly from the field.",
    image: hero3d
  }
];
function ProductGalleryCarousel() {
  const [rotationY, setRotationY] = reactExports.useState(0);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [dragStartX, setDragStartX] = reactExports.useState(0);
  const [startRotation, setStartRotation] = reactExports.useState(0);
  const [selectedItem, setSelectedItem] = reactExports.useState(null);
  const containerRef = reactExports.useRef(null);
  const isDraggingRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);
  reactExports.useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      if (!isDraggingRef.current) {
        const frameSpeed = 0.14 * (delta / 16.6);
        setRotationY((prev) => prev - frameSpeed);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setStartRotation(rotationY);
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };
  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    setRotationY(startRotation + deltaX * 0.35);
  };
  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (containerRef.current) {
      try {
        containerRef.current.releasePointerCapture(e.pointerId);
      } catch {
      }
    }
  };
  const spinPrev = () => {
    const step = 360 / GALLERY_ITEMS.length;
    setRotationY((prev) => Math.round(prev / step) * step + step);
  };
  const spinNext = () => {
    const step = 360 / GALLERY_ITEMS.length;
    setRotationY((prev) => Math.round(prev / step) * step - step);
  };
  const totalItems = GALLERY_ITEMS.length;
  const angleStep = 360 / totalItems;
  const radius = 460;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "gallery",
      className: "py-20 md:py-28 relative overflow-hidden isolate border-t border-border/60 bg-background text-foreground select-none",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-12 md:top-16 -translate-x-1/2 -z-10 select-none font-serif italic text-[7rem] sm:text-[12rem] md:text-[17rem] leading-none text-foreground/15 dark:text-foreground/20 whitespace-nowrap", children: "gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center space-y-3 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs uppercase font-mono font-bold tracking-[0.3em] text-amber-500/90 dark:text-amber-400", children: "VISUAL PLATFORM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-foreground", children: [
            "The Operating System",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 dark:from-amber-300 dark:via-amber-400 dark:to-amber-500 bg-clip-text text-transparent", children: "for Modern Real Estate" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: containerRef,
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerCancel: handlePointerUp,
            className: "mt-12 md:mt-16 relative w-full h-[480px] sm:h-[520px] md:h-[560px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none overflow-visible",
            style: {
              perspective: "1300px",
              perspectiveOrigin: "50% 45%"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative w-[300px] sm:w-[340px] md:w-[380px] h-[220px] sm:h-[240px] md:h-[260px] transition-transform duration-75 ease-out",
                  style: {
                    transformStyle: "preserve-3d",
                    transform: `rotateX(13deg) rotateY(${rotationY}deg)`
                  },
                  children: GALLERY_ITEMS.map((item, index) => {
                    const itemAngle = index * angleStep + rotationY;
                    const normalizedAngle = (itemAngle % 360 + 540) % 360 - 180;
                    const cosVal = Math.cos(normalizedAngle * Math.PI / 180);
                    const isFront = cosVal > 0.1;
                    const opacity = isFront ? 0.95 + cosVal * 0.05 : Math.max(0.35, 0.65 + cosVal * 0.35);
                    const blurAmount = isFront ? 0 : Math.min(4, Math.abs(cosVal) * 3);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          if (Math.abs(normalizedAngle) < 35) {
                            setSelectedItem(item);
                          } else {
                            setRotationY((prev) => prev - normalizedAngle);
                          }
                        },
                        className: "absolute inset-0 rounded-2xl bg-[#141416] border border-zinc-700/80 shadow-2xl transition-all duration-300 group hover:border-amber-500/80 hover:shadow-amber-500/10 cursor-pointer overflow-hidden flex flex-col justify-between p-2.5 sm:p-3",
                        style: {
                          transformStyle: "preserve-3d",
                          transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px)`,
                          opacity,
                          filter: `blur(${blurAmount}px)`,
                          backfaceVisibility: "visible"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between px-1.5 py-1 bg-black/60 rounded-md border border-white/5", children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-3 sm:w-3.5 h-2 rounded-[2px] bg-zinc-400/40 dark:bg-zinc-300/30 border border-white/10"
                            },
                            `top-hole-${i}`
                          )) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative my-1.5 flex-1 rounded-lg overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-amber-500/40 transition-colors", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src: item.image,
                                alt: item.title,
                                className: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono tracking-wider font-bold", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded bg-black/70 text-amber-400 border border-amber-500/30 backdrop-blur-md", children: item.tag }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-400 font-mono", children: item.number })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2.5 left-3 right-3 space-y-0.5 text-left", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs sm:text-sm font-semibold font-sans text-white tracking-tight leading-snug line-clamp-1 group-hover:text-amber-300 transition-colors", children: item.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs text-zinc-300/80 font-mono tracking-normal line-clamp-1", children: item.subtitle })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between px-1.5 py-1 bg-black/60 rounded-md border border-white/5", children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-3 sm:w-3.5 h-2 rounded-[2px] bg-zinc-400/40 dark:bg-zinc-300/30 border border-white/10"
                            },
                            `bot-hole-${i}`
                          )) })
                        ]
                      },
                      item.id
                    );
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      spinPrev();
                    },
                    className: "size-9 sm:size-10 rounded-full border border-border bg-card/90 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg active:scale-95",
                    "aria-label": "Spin Left",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-4 sm:size-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 rounded-full border border-border/80 bg-card/90 backdrop-blur-md shadow-xl flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-muted-foreground uppercase", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MoveHorizontal, { className: "size-3.5 text-amber-500 animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "DRAG TO SPIN · CLICK TO INSPECT" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      spinNext();
                    },
                    className: "size-9 sm:size-10 rounded-full border border-border bg-card/90 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg active:scale-95",
                    "aria-label": "Spin Right",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 sm:size-5" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedItem && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.9, y: 20 },
            transition: { duration: 0.25, ease: "easeOut" },
            className: "relative w-full max-w-2xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSelectedItem(null),
                  className: "absolute top-4 right-4 size-9 rounded-full border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-amber-500 transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden border border-border aspect-video bg-black", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: selectedItem.image,
                    alt: selectedItem.title,
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 text-amber-400 border border-amber-500/40 backdrop-blur-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedItem.tag })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-mono font-extrabold text-amber-500 uppercase tracking-widest", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedItem.subtitle }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedItem.number })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-bold font-serif text-foreground", children: selectedItem.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-muted-foreground leading-relaxed", children: selectedItem.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSelectedItem(null),
                  className: "px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-md active:scale-95",
                  children: "Close Inspection"
                }
              ) })
            ]
          }
        ) }) })
      ]
    }
  );
}
const buildingVectorBg = "/assets/graphic-design-building-architecture-creative-city-building-vector%20copy-gJSqopFM.png";
function SettleDeskLandingPage() {
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHero, { config: settledeskData.hero, onPrimaryCtaClick: () => setIsModalOpen(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductThreeTier, { tiers: settledeskData.threeTier }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductGalleryCarousel, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFeatureSplit, { features: settledeskData.features }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative isolate overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30 dark:opacity-20 mix-blend-luminosity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: buildingVectorBg, alt: "", className: "w-full h-full object-cover object-center brightness-125 dark:brightness-130 contrast-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 relative border-t border-border bg-surface/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Enterprise-Grade Security", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Bank-Grade Security. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Zero Data Leaks Between Tenants." })
          ] }), sub: "SettleDesk is built on strict database-level isolation, so every brokerage's data stays completely private — even on a shared platform.", center: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: settledeskData.securityPillars.map((pillar, idx) => {
            const Icon = idx === 0 ? Lock : idx === 1 ? FileCheck : Database;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animated-corner-card surface-card p-6 rounded-2xl relative overflow-hidden group cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "go-corner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "go-arrow", children: "→" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-surface border border-border flex items-center justify-center text-[#10b981] mb-4 relative z-10 icon-box transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg font-display relative z-10 transition-colors duration-300", children: pillar.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed relative z-10 transition-colors duration-300", children: pillar.description })
            ] }, pillar.title);
          }) })
        ] }) }),
        settledeskData.steps && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductWorkflowSequence, { steps: settledeskData.steps }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 relative border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest font-bold text-[#e5b84c]", children: settledeskData.aboutStory.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-5xl font-bold font-display leading-tight", children: settledeskData.aboutStory.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: settledeskData.aboutStory.body1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: settledeskData.aboutStory.body2 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 grid gap-4 sm:grid-cols-2", children: settledeskData.aboutStory.beliefs.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animated-corner-card surface-card p-5 rounded-xl relative overflow-hidden group cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "go-corner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "go-arrow", children: "→" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm font-display text-foreground relative z-10 transition-colors duration-300", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed relative z-10 transition-colors duration-300", children: b.desc })
          ] }, b.title)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductPricingTable, { plans: settledeskData.pricing, onSelectPlan: () => setIsModalOpen(true) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFAQAccordion, { faqs: settledeskData.faqs }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCTA, { onPrimaryCtaClick: () => setIsModalOpen(true) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EmailModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  ] });
}
export {
  SettleDeskLandingPage as component
};
