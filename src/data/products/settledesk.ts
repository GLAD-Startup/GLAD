import type { ProductPageData } from "@/types/product-page";

export const settledeskData: ProductPageData = {
  slug: "settledesk",
  title: "SettleDesk — Run Your Entire Brokerage on One Platform",
  metaDescription:
    "SettleDesk unifies property management, agent operations, lead tracking, and commission payouts into one secure, real-time SaaS platform for real estate brokerages.",
  hero: {
    eyebrow: "Premium Brokerage Operations",
    title: "Run Your Entire Brokerage.",
    titleGradient: "On One Platform.",
    description:
      "SettleDesk unifies property management, agent operations, lead tracking, and commission payouts into one secure, real-time system — built for brokerages that are ready to scale.",
    primaryCtaText: "Start Free Trial",
    secondaryCtaText: "Book a Discovery Call",
    stats: [
      { value: "500+", label: "Brokers Onboarded" },
      { value: "10,000+", label: "Units Managed" },
      { value: "99.9%", label: "Platform Uptime" },
      { value: "Bank-Grade", label: "Data Security" },
    ],
  },
  threeTier: [
    {
      role: "For Platform Operators",
      title: "Super Admin Portal",
      description:
        "Manage every brokerage on SettleDesk from a single command center — subscriptions, billing, onboarding, and platform-wide analytics.",
      bullets: [
        "Subscription & billing management",
        "Client onboarding & lifecycle tracking",
        "Platform-wide audit logs",
      ],
    },
    {
      role: "For Brokerage Owners & Managers",
      title: "Client Admin Dashboard",
      description:
        "Take full control of your brokerage's operations — from listing properties to approving deals and structuring commissions your way.",
      bullets: [
        "Property & portfolio management",
        "Version-controlled commission plans",
        "Deal & payout approvals",
      ],
    },
    {
      role: "For Agents on the Go",
      title: "Broker Mobile App",
      description:
        "Everything your agents need to close deals right from their phones — live listings, lead tracking, and real-time commission visibility.",
      bullets: [
        "Real-time property browsing",
        "Lead & deal management",
        "Live commission tracking",
      ],
    },
  ],
  features: [
    {
      eyebrow: "Property & Portfolio Management",
      title: "Every Property. Always Up to Date.",
      description:
        "Create, manage, and track your entire property portfolio in real time. Update unit statuses — Draft, Active, Sold — and keep every agent working from the same live data.",
      routePath: "settledesk.io/property-management",
    },
    {
      eyebrow: "Commission Structure Engine",
      title: "Commission Plans, Built Your Way.",
      description:
        "Design version-controlled commission structures and assign them precisely — by broker, by property, by deal. No spreadsheets, no guesswork.",
      routePath: "settledesk.io/commission-engine",
    },
    {
      eyebrow: "Deal & Payout Approvals",
      title: "From Submitted to Sold, Automatically.",
      description:
        "When a broker closes a deal, admins review and approve it in one click — instantly updating unit status and queuing the commission payout.",
      routePath: "settledesk.io/deal-approvals",
    },
    {
      eyebrow: "Real-Time Sync Across Devices",
      title: "One Source of Truth. Every Device.",
      description:
        "Whether it's the mobile app or the web dashboard, everyone sees the same data, the same moment it changes — no fragmentation, no delays.",
      routePath: "settledesk.io/real-time-sync",
    },
  ],
  securityPillars: [
    {
      title: "Row-Level Security",
      description:
        "Database-enforced isolation ensures one brokerage can never access another's data.",
    },
    {
      title: "Immutable Audit Trails",
      description:
        "Every critical action is automatically logged for full compliance and traceability.",
    },
    {
      title: "Enterprise Data Isolation",
      description:
        "A single unified database architected for multi-tenant safety at scale.",
    },
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
        "Invite initial Super Admin",
      ],
    },
    {
      phase: "Phase 2: Rules",
      metric: "Versioned",
      title: "Configure",
      description: "Admins set up properties, teams, and commission structures.",
      checklist: [
        "Upload properties catalog",
        "Define agent split tiers",
        "Set office caps & royalty fee",
      ],
    },
    {
      phase: "Phase 3: Sales",
      metric: "Real-time",
      title: "Sell",
      description: "Brokers manage leads and close deals from the mobile app.",
      checklist: [
        "Browse active property list",
        "Log client offer & contract",
        "Upload closing signatures",
      ],
    },
    {
      phase: "Phase 4: Finance",
      metric: "Instant",
      title: "Get Paid",
      description: "Deals get approved, and commissions are calculated automatically.",
      checklist: [
        "One-click admin approval",
        "Calculate split & split caps",
        "Queue bank payout transfer",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "SettleDesk replaced three different tools we were using to manage listings, agents, and payouts. Now it's all in one place, and my team actually uses it.",
      author: "Operations Director",
      role: "Mid-Size Brokerage",
    },
    {
      quote:
        "The commission engine alone saved us hours every month. No more manual calculations or disputes with agents.",
      author: "Managing Broker",
      role: "Regional Real Estate Firm",
    },
    {
      quote:
        "Our agents love the mobile app. They can close deals without ever touching a desktop.",
      author: "Founder",
      role: "Boutique Brokerage",
    },
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
        "Email support",
      ],
      ctaText: "Start Free Trial",
    },
    {
      name: "Professional",
      tagline: "For growing brokerages that need more control",
      featured: true,
      features: [
        "Up to 50 agents",
        "Advanced commission engine",
        "Deal approval workflows",
        "Priority support",
      ],
      ctaText: "Start Free Trial",
    },
    {
      name: "Enterprise",
      tagline: "For large, multi-branch operations",
      featured: false,
      features: [
        "Unlimited agents",
        "Custom integrations & SLAs",
        "Dedicated onboarding & support",
        "Advanced audit & compliance tools",
      ],
      ctaText: "Contact Sales",
    },
  ],
  faqs: [
    {
      question: "How fast can our brokerage get set up on SettleDesk?",
      answer:
        "Provisioning a new company workspace takes under 5 minutes. Admins can instantly start uploading property catalogs and inviting team members.",
    },
    {
      question: "Is our brokerage's data isolated from other companies?",
      answer:
        "Yes. SettleDesk utilizes PostgreSQL Row-Level Security (RLS) policies at the database layer. One tenant can never access or query another brokerage's data under any circumstances.",
    },
    {
      question: "Can we customize our commission split structures?",
      answer:
        "Absolutely. SettleDesk features a version-controlled commission matrix engine allowing custom agent split tiers, office caps, franchise fees, and royalty subtractions.",
    },
    {
      question: "Does SettleDesk support field agents on mobile?",
      answer:
        "Yes, SettleDesk includes a native iOS & Android mobile application built with React Native and Expo, keeping agents connected to live listings and deal submissions in real time.",
    },
    {
      question: "Is there a free trial period?",
      answer:
        "We offer a 30-day full-featured free trial for new brokerages with zero setup fees and no credit card required upfront.",
    },
  ],
  aboutStory: {
    eyebrow: "Our Story",
    title: "Built by People Who Understand Real Estate",
    body1:
      "Real estate brokerages sit at the center of a lot of moving parts — properties, agents, leads, deals, and payouts — but most software built for the industry only solves one piece of that puzzle at a time. Teams end up stitching together a CRM, a spreadsheet for commissions, a separate tool for property listings, and group chats for approvals.",
    body2:
      "We built SettleDesk to be the operational backbone brokerages actually need: one platform, one source of truth, built for every role in the business — from platform operators to brokerage owners to field agents closing deals.",
    beliefs: [
      {
        title: "Clean business rules.",
        desc: "Admins control properties and commission structures. Brokers sell. The platform enforces this so nothing gets messy.",
      },
      {
        title: "Real-time, always.",
        desc: "Every device — mobile or web — reflects the same live data, the moment it changes.",
      },
      {
        title: "Security isn't optional.",
        desc: "Multi-tenant systems demand strict data isolation. We built that in from day one.",
      },
      {
        title: "Built for scale.",
        desc: "From a single-office brokerage to a multi-branch enterprise operation, the platform grows with you.",
      },
    ],
  },
};
