import type { ProductPageData } from "@/types/product-page";

export const gladHmsData: ProductPageData = {
  slug: "glad-hms",
  title: "GLAD HMS — Modular Hotel Management System | Glad Studio",
  metaDescription:
    "GLAD HMS is a modular, multi-tenant Hotel Management System engineered by Glad Studio. Unify room reservations, front desk operations, housekeeping task boards, stay folios, and USALI revenue analytics.",
  hero: {
    eyebrow: "Modular Hospitality Operating System",
    title: "Enterprise-Grade Hotel Operations.",
    titleGradient: "Built Module by Module for Your Property.",
    description:
      "GLAD HMS is a modular multi-tenant hotel management platform covering reservations, front desk workflows, housekeeping task boards, stay folio billing with GST compliance, and USALI revenue analytics — with zero forced software bundles.",
    primaryCtaText: "Start Free Trial",
    secondaryCtaText: "Book a Discovery Call",
    stats: [
      { value: "100%", label: "Modular Architecture" },
      { value: "Row-Level", label: "Pessimistic Inventory Locks" },
      { value: "Multi-Tenant", label: "Tenant-Scoped Isolation" },
      { value: "Fixed-Point", label: "Decimal Financial Precision" },
    ],
  },
  threeTier: [
    {
      role: "For Front Desk & Reservations",
      title: "Reservation & Front Desk Console",
      description:
        "Manage room inventory, process rapid guest check-ins with ID verification, handle walk-ins, and view live room status transitions in real time.",
      bullets: [
        "Pessimistic PostgreSQL row locks preventing double-booking",
        "Instant check-in/check-out lifecycle and room folios",
        "Same-day turnover handling with live status updates",
      ],
    },
    {
      role: "For Housekeeping Staff",
      title: "Mobile Housekeeping Task Board",
      description:
        "Mobile-optimized task board with automatic room dirty state transitions upon check-out and priority sorting for urgent same-day arrivals.",
      bullets: [
        "Priority-sorted cleaning tasks (urgent same-day arrivals first)",
        "Room status state machine (dirty → clean → inspected → occupied)",
        "One-tap maintenance flagging with issue notes",
      ],
    },
    {
      role: "For Owners & General Managers",
      title: "USALI Revenue Analytics & Tax Invoicing",
      description:
        "Track property performance with real-time USALI KPIs, multi-folio stay billing, and automated Indian GST slab calculation.",
      bullets: [
        "Real-time USALI KPIs: Occupancy %, Net ADR, Net RevPAR",
        "Multi-folio billing (Master, Room, Incidentals) & split payments",
        "Role-Based Access Control (RBAC) and immutable audit trails",
      ],
    },
  ],
  features: [
    {
      eyebrow: "Reservation & Inventory Grid",
      title: "Pessimistic Concurrency Row Locks. Zero Double Bookings.",
      description:
        "Mathematically sound reservation overlap checking backed by PostgreSQL row locks to prevent double-booking during high concurrent traffic.",
      routePath: "gladstudio.net/products/glad-hms/reservations",
    },
    {
      eyebrow: "Front Desk Operations Console",
      title: "Instant Guest Folios & Rapid Check-In.",
      description:
        "Process guest check-ins, verify identification, handle walk-in reservations, and manage stay folios seamlessly with real-time room status updates.",
      routePath: "gladstudio.net/products/glad-hms/front-desk",
    },
    {
      eyebrow: "Mobile Housekeeping Task Board",
      title: "Real-Time Room Turnover. Coordinated with Front Desk.",
      description:
        "Housekeeping staff receive priority-sorted room cleaning rosters. Marking a room inspected updates front desk availability immediately.",
      routePath: "gladstudio.net/products/glad-hms/housekeeping",
    },
    {
      eyebrow: "Financial & Tax Invoicing",
      title: "Multi-Folio Accounting & Indian GST Compliance.",
      description:
        "Automated tax calculation across GST slabs (0%, 12%, 18%) with multi-folio support, split payments between company and guest, and strict NUMERIC(12,2) decimal precision.",
      routePath: "gladstudio.net/products/glad-hms/billing",
    },
  ],
  securityPillars: [
    {
      title: "Tenant-Scoped Query Isolation",
      description:
        "Mandatory tenant_id scoping across every database query guarantees that hotel properties never cross-access competitor data.",
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description:
        "Granular system roles (Owner, Manager, Front Desk, Housekeeping) restrict permissions to property-level authorized workflows.",
    },
    {
      title: "Append-Only Audit Logging",
      description:
        "Every sensitive operation — check-in, check-out, room reassignment, manual payment, and rate adjustment — is logged in an immutable audit ledger.",
    },
  ],
  steps: [
    {
      phase: "Phase 1: Setup",
      metric: "Instant",
      title: "Tenant Provisioning",
      description: "Register your hotel workspace and receive a 15-day trial with core modules pre-enabled.",
      checklist: [
        "Create isolated tenant workspace",
        "Configure default property & room counts",
        "Assign initial Owner & Manager roles",
      ],
    },
    {
      phase: "Phase 2: Configuration",
      metric: "Flexible",
      title: "Rooms & Rate Plans",
      description: "Define room types, set base occupancy and extra bed rules, and create custom rate plans.",
      checklist: [
        "Configure room types and physical room numbers",
        "Define base rate plans and seasonal pricing",
        "Set up regional tax slabs & GST rules",
      ],
    },
    {
      phase: "Phase 3: Operations",
      metric: "Real-Time",
      title: "Front Desk & Housekeeping",
      description: "Front desk manages reservations while housekeeping receives live prioritized cleaning tasks.",
      checklist: [
        "Real-time reservation booking & walk-in capture",
        "Automated room status state transitions",
        "Mobile housekeeping task dispatch",
      ],
    },
    {
      phase: "Phase 4: Finance",
      metric: "Automated",
      title: "Folios & Revenue Analytics",
      description: "Generate tax-compliant guest invoices and monitor daily USALI performance metrics.",
      checklist: [
        "Multi-folio billing & split payment capture",
        "Print GST tax invoices upon check-out",
        "Track live Occupancy, ADR, and RevPAR",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "The modular architecture means we only pay for the front desk and housekeeping tools our 35-room property actually uses, without paying for bloated legacy PMS add-ons.",
      author: "Boutique Resort General Manager",
      role: "Independent Property Operator",
    },
    {
      quote:
        "The pessimistic row-locking on room inventory eliminated the double-booking issues we previously experienced during peak seasonal walk-in rushes.",
      author: "Front Office Manager",
      role: "Regional Leisure Hotel",
    },
    {
      quote:
        "Having automated Indian GST slab calculation built directly into multi-split folios cut our checkout invoice reconciliation time in half.",
      author: "Finance & Operations Lead",
      role: "Independent Hotel Group",
    },
  ],
  pricing: [
    {
      name: "Starter",
      tagline: "For independent boutique hotels & properties",
      featured: false,
      features: [
        "Up to 25 rooms",
        "Core Reservation & Inventory Grid",
        "Front Desk & Walk-In Operations",
        "Mobile Housekeeping Task Board",
        "Standard Tax Invoicing (GST/VAT)",
        "Email Support",
      ],
      ctaText: "Start Free Trial",
    },
    {
      name: "Growth",
      tagline: "For busy hotels with multi-department operations",
      featured: true,
      features: [
        "Up to 100 rooms",
        "Everything in Starter",
        "USALI Revenue Analytics (ADR/RevPAR)",
        "Multi-Folio Split Billing",
        "Role-Based Access Control (RBAC)",
        "Priority Support",
      ],
      ctaText: "Start Free Trial",
    },
    {
      name: "Enterprise / Multi-Property",
      tagline: "For hotel chains, groups & multi-branch operators",
      featured: false,
      features: [
        "Unlimited rooms & properties",
        "Centralized multi-property reporting",
        "Custom rate parity & module entitlement",
        "Dedicated database migration & SLA",
        "24/7 Dedicated Support",
      ],
      ctaText: "Contact Sales",
    },
  ],
  faqs: [
    {
      question: "What is GLAD HMS?",
      answer:
        "GLAD HMS is an enterprise-grade, modular Hotel Management System (HMS) developed by GLAD Studio. It covers the full operational lifecycle — reservations, front desk, housekeeping, multi-folio stay billing, and USALI revenue analytics — on a single multi-tenant SaaS platform.",
    },
    {
      question: "How does GLAD HMS prevent double-booking?",
      answer:
        "GLAD HMS uses PostgreSQL row-level pessimistic locking (SELECT ... FOR UPDATE) alongside strict date overlap validation during reservation confirmation, ensuring two guests or front-desk clerks cannot allocate the last available room simultaneously.",
    },
    {
      question: "Does GLAD HMS support multi-property hotel groups?",
      answer:
        "Yes. GLAD HMS includes a multi-property architecture where tenant accounts can manage multiple distinct physical properties with property-scoped user roles and consolidated owner-level reporting.",
    },
    {
      question: "How does GLAD HMS handle billing and taxes?",
      answer:
        "GLAD HMS supports multi-folio accounting (Master folios, split room folios, incidental charges), split payment recording, and automated Indian GST tax slab calculations (0%, 12%, 18%) with fixed-point decimal precision.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, newly registered hotels receive a 15-day self-serve trial with core modules pre-provisioned, allowing immediate room inventory configuration and front-desk testing.",
    },
  ],
  aboutStory: {
    eyebrow: "Our Story",
    title: "Why We Built a Modular Hotel Management System",
    body1:
      "Independent hotels and boutique properties are often forced to choose between rigid, multi-million dollar legacy PMS suites or generic cloud tools that force them into paying for expensive bundled features they never use.",
    body2:
      "We engineered GLAD HMS from the ground up to be modular by design. Every core operational capability — from reservation calendars to mobile housekeeping and USALI revenue analytics — operates with rock-solid database isolation, type-safety, and predictable scalability.",
    beliefs: [
      {
        title: "Modular by design.",
        desc: "Hotels choose and pay for what they need — avoiding bloated all-in-one software suites.",
      },
      {
        title: "Zero concurrency errors.",
        desc: "Database-level pessimistic row locking ensures room inventory is always 100% accurate.",
      },
      {
        title: "Multi-tenant data safety.",
        desc: "Strict tenant scoping guarantees complete privacy and isolation between properties.",
      },
      {
        title: "Real-time synchronization.",
        desc: "Front desk, housekeeping, and management dashboards update instantly upon any state change.",
      },
    ],
  },
};
