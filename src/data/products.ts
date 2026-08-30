export interface ProductStat {
  value: string;
  label: string;
}

export interface ProductThreeTierItem {
  role: string;
  title: string;
  description: string;
  bullets: string[];
  mockType?: 'grid' | 'housekeeping' | 'finance' | 'agent' | 'admin' | 'ledger';
}

export interface ProductFeatureDeepDive {
  eyebrow: string;
  title: string;
  description: string;
  routePath: string;
  videoSrc?: string;
  imageSrc?: string;
  mockVariant?: string;
}

export interface ProductSecurityPillar {
  title: string;
  description: string;
  iconType?: 'lock' | 'shield' | 'database' | 'audit';
}

export interface ProductOperationalPhase {
  phase: string;
  timingChip: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface ProductBelief {
  title: string;
  description: string;
}

export interface ProductStory {
  eyebrow: string;
  title: string;
  body1: string;
  body2: string;
  beliefs: ProductBelief[];
}

export interface ProductPricingTier {
  name: string;
  tagline: string;
  featured?: boolean;
  features: string[];
  activeFeaturesCount: number;
  ctaText: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductGalleryCard {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  statusChip: string;
  heroPositioning: string;
  headline: string;
  description: string;
  heroStats: ProductStat[];
  threeStatStrip: ProductStat[];
  overviewFeatures: { title: string; description: string }[];
  overviewGraphic: string;
  threeTier: ProductThreeTierItem[];
  features: ProductFeatureDeepDive[];
  securityPillars: ProductSecurityPillar[];
  operationalPhases: ProductOperationalPhase[];
  aboutStory: ProductStory;
  pricingTiers: ProductPricingTier[];
  faqs: ProductFaq[];
  crossSell: {
    badge: string;
    headline: string;
    description: string;
    targetSlug: string;
    targetName: string;
    metric?: string;
    graphic: string;
  };
  closingCta: {
    heading: string;
    subline: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };
  galleryItems?: ProductGalleryCard[];
}

export const gladHmsProduct: ProductItem = {
  id: '01',
  slug: 'glad-hms',
  name: 'GLAD HMS',
  tagline: 'Modular Hospitality Operating System',
  category: 'Hospitality SaaS',
  statusChip: 'Hospitality SaaS · Live',
  heroPositioning: 'Modular Hospitality Operating System',
  headline: 'Enterprise-Grade Hotel Operations. Built Module by Module for Your Property.',
  description:
    'GLAD HMS is a modular multi-tenant hotel management platform covering reservations, front desk workflows, housekeeping task boards, stay folio billing with GST compliance, and USALI revenue analytics — with zero forced software bundles.',
  heroStats: [
    { value: '100%', label: 'Modular Architecture' },
    { value: 'Row-Level', label: 'Pessimistic Inventory Locks' },
    { value: 'Multi-Tenant', label: 'Tenant-Scoped Isolation' },
    { value: 'Fixed-Point', label: 'Decimal Financial Precision' },
  ],
  threeStatStrip: [
    { value: '100%', label: 'Modular Architecture' },
    { value: 'Row-Level', label: 'Inventory Locks' },
    { value: 'Multi-Property', label: 'Scoped RBAC' },
  ],
  overviewFeatures: [
    {
      title: 'Pessimistic Row Locks',
      description: 'PostgreSQL row locks prevent simultaneous room double-booking during peak check-ins.',
    },
    {
      title: 'Instant Guest Folios',
      description: 'Full lifecycle check-in, identity verification, and multi-split invoice generation.',
    },
    {
      title: 'Real-Time Housekeeping',
      description: 'Mobile cleaning task board coordinated live with front-desk room status state machines.',
    },
    {
      title: 'GST & USALI Analytics',
      description: 'Automated 0%/12%/18% tax slabs alongside real-time Occupancy, ADR, and RevPAR metrics.',
    },
  ],
  overviewGraphic: '/products/hotel-building-transparent.png',
  threeTier: [
    {
      role: 'For Front Desk & Reservations',
      title: 'Reservation & Front Desk Console',
      description:
        'Manage room inventory, process rapid guest check-ins with ID verification, handle walk-ins, and view live room status transitions in real time.',
      bullets: [
        'Pessimistic PostgreSQL row locks preventing double-booking',
        'Instant check-in/check-out lifecycle and room folios',
        'Same-day turnover handling with live status updates',
      ],
      mockType: 'grid',
    },
    {
      role: 'For Housekeeping Staff',
      title: 'Mobile Housekeeping Task Board',
      description:
        'Mobile-optimized task board with automatic room dirty state transitions upon check-out and priority sorting for urgent same-day arrivals.',
      bullets: [
        'Priority-sorted cleaning tasks (urgent same-day arrivals first)',
        'Room status state machine (dirty → clean → inspected → occupied)',
        'One-tap maintenance flagging with issue notes',
      ],
      mockType: 'housekeeping',
    },
    {
      role: 'For Owners & General Managers',
      title: 'USALI Revenue Analytics & Tax Invoicing',
      description:
        'Track property performance with real-time USALI KPIs, multi-folio stay billing, and automated Indian GST slab calculation.',
      bullets: [
        'Real-time USALI KPIs: Occupancy %, Net ADR, Net RevPAR',
        'Multi-folio billing (Master, Room, Incidentals) & split payments',
        'Role-Based Access Control (RBAC) and immutable audit trails',
      ],
      mockType: 'finance',
    },
  ],
  features: [
    {
      eyebrow: 'Reservation & Inventory Grid',
      title: 'Pessimistic Concurrency Row Locks. Zero Double Bookings.',
      description:
        'Mathematically sound reservation overlap checking backed by PostgreSQL row locks (SELECT ... FOR UPDATE) to prevent double-booking during high concurrent traffic.',
      routePath: 'gladstudio.net/products/glad-hms/reservations',
      mockVariant: 'hms-grid',
    },
    {
      eyebrow: 'Front Desk Operations Console',
      title: 'Instant Guest Folios & Rapid Check-In.',
      description:
        'Process guest check-ins, verify identification, handle walk-in reservations, and manage stay folios seamlessly with real-time room status updates.',
      routePath: 'gladstudio.net/products/glad-hms/front-desk',
      mockVariant: 'hms-checkin',
    },
    {
      eyebrow: 'Mobile Housekeeping Task Board',
      title: 'Real-Time Room Turnover. Coordinated with Front Desk.',
      description:
        'Housekeeping staff receive priority-sorted room cleaning rosters. Marking a room inspected updates front desk availability immediately.',
      routePath: 'gladstudio.net/products/glad-hms/housekeeping',
      mockVariant: 'hms-housekeeping',
    },
    {
      eyebrow: 'Financial & Tax Invoicing',
      title: 'Multi-Folio Accounting & Indian GST Compliance.',
      description:
        'Automated tax calculation across GST slabs (0%, 12%, 18%) with multi-folio support, split payments between company and guest, and strict NUMERIC(12,2) decimal precision.',
      routePath: 'gladstudio.net/products/glad-hms/billing',
      mockVariant: 'hms-billing',
    },
  ],
  securityPillars: [
    {
      title: 'Tenant-Scoped Query Isolation',
      description:
        'Mandatory tenant_id scoping across every database query guarantees that hotel properties never cross-access competitor data.',
      iconType: 'lock',
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      description:
        'Granular system roles (Owner, Manager, Front Desk, Housekeeping) restrict permissions to property-level authorized workflows.',
      iconType: 'shield',
    },
    {
      title: 'Append-Only Audit Logging',
      description:
        'Every sensitive operation — check-in, check-out, room reassignment, manual payment, and rate adjustment — is logged in an immutable audit ledger.',
      iconType: 'database',
    },
  ],
  operationalPhases: [
    {
      phase: 'Phase 01',
      timingChip: 'Instant',
      title: 'Tenant Provisioning',
      description: 'Register your hotel workspace and receive a 15-day trial with core modules pre-enabled.',
      bullets: [
        'Create isolated tenant workspace',
        'Configure default property & room counts',
        'Assign initial Owner & Manager roles',
      ],
    },
    {
      phase: 'Phase 02',
      timingChip: 'Flexible',
      title: 'Rooms & Rate Plans',
      description: 'Define room types, set base occupancy and extra bed rules, and create custom rate plans.',
      bullets: [
        'Configure room types and physical room numbers',
        'Define base rate plans and seasonal pricing',
        'Set up regional tax slabs & GST rules',
      ],
    },
    {
      phase: 'Phase 03',
      timingChip: 'Real-Time',
      title: 'Front Desk & Housekeeping',
      description: 'Front desk manages reservations while housekeeping receives live prioritized cleaning tasks.',
      bullets: [
        'Real-time reservation booking & walk-in capture',
        'Automated room status state transitions',
        'Mobile housekeeping task dispatch',
      ],
    },
    {
      phase: 'Phase 04',
      timingChip: 'Automated',
      title: 'Folios & Revenue Analytics',
      description: 'Generate tax-compliant guest invoices and monitor daily USALI performance metrics.',
      bullets: [
        'Multi-folio billing & split payment capture',
        'Print GST tax invoices upon check-out',
        'Track live Occupancy, ADR, and RevPAR',
      ],
    },
  ],
  aboutStory: {
    eyebrow: 'Our Story',
    title: 'Why We Built a Modular Hotel Management System',
    body1:
      'Independent hotels and boutique properties are often forced to choose between rigid, multi-million dollar legacy PMS suites or generic cloud tools that force them into paying for expensive bundled features they never use.',
    body2:
      'We engineered GLAD HMS from the ground up to be modular by design. Every core operational capability — from reservation calendars to mobile housekeeping and USALI revenue analytics — operates with rock-solid database isolation, type-safety, and predictable scalability.',
    beliefs: [
      {
        title: 'Modular by design.',
        description: 'Hotels choose and pay for what they need — avoiding bloated all-in-one software suites.',
      },
      {
        title: 'Zero concurrency errors.',
        description: 'Database-level pessimistic row locking ensures room inventory is always 100% accurate.',
      },
      {
        title: 'Multi-tenant data safety.',
        description: 'Strict tenant scoping guarantees complete privacy and isolation between properties.',
      },
      {
        title: 'Real-time synchronization.',
        description: 'Front desk, housekeeping, and management dashboards update instantly upon any state change.',
      },
    ],
  },
  pricingTiers: [
    {
      name: 'Starter',
      tagline: 'For independent boutique hotels & properties (Up to 25 rooms)',
      featured: false,
      activeFeaturesCount: 3,
      features: [
        'Core Reservation & Inventory Grid',
        'Front Desk & Walk-In Operations',
        'Mobile Housekeeping Task Board',
        'Standard Tax Invoicing (GST/VAT)',
        'USALI Revenue Analytics (ADR/RevPAR)',
        'Multi-Folio Split Billing',
      ],
      ctaText: 'Start Free Trial',
    },
    {
      name: 'Growth',
      tagline: 'For busy hotels with multi-department operations (Up to 100 rooms)',
      featured: true,
      activeFeaturesCount: 5,
      features: [
        'Core Reservation & Inventory Grid',
        'Front Desk & Walk-In Operations',
        'Mobile Housekeeping Task Board',
        'Standard Tax Invoicing (GST/VAT)',
        'USALI Revenue Analytics (ADR/RevPAR)',
        'Multi-Folio Split Billing Engine',
      ],
      ctaText: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      tagline: 'For hotel chains, groups & multi-branch operators (Unlimited rooms)',
      featured: false,
      activeFeaturesCount: 6,
      features: [
        'Unlimited Rooms & Properties',
        'Centralized Multi-Property Reporting',
        'Custom Rate Parity & OTA Connectors',
        'Dedicated Database Migration & SLA',
        'Granular Role-Based Access Control',
        '24/7 Dedicated Account Support',
      ],
      ctaText: 'Start Free Trial',
    },
  ],
  faqs: [
    {
      question: 'What is GLAD HMS?',
      answer:
        'GLAD HMS is an enterprise-grade, modular Hotel Management System (HMS) developed by GLAD Studio. It covers the full operational lifecycle — reservations, front desk, housekeeping, multi-folio stay billing, and USALI revenue analytics — on a single multi-tenant SaaS platform.',
    },
    {
      question: 'How does GLAD HMS prevent double-booking?',
      answer:
        'GLAD HMS uses PostgreSQL row-level pessimistic locking (SELECT ... FOR UPDATE) alongside strict date overlap validation during reservation confirmation, ensuring two guests or front-desk clerks cannot allocate the last available room simultaneously.',
    },
    {
      question: 'Does GLAD HMS support multi-property hotel groups?',
      answer:
        'Yes. GLAD HMS includes a multi-property architecture where tenant accounts can manage multiple distinct physical properties with property-scoped user roles and consolidated owner-level reporting.',
    },
    {
      question: 'How does GLAD HMS handle billing and taxes?',
      answer:
        'GLAD HMS supports multi-folio accounting (Master folios, split room folios, incidental charges), split payment recording, and automated Indian GST tax slab calculations (0%, 12%, 18%) with fixed-point decimal precision.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, newly registered hotels receive a 15-day self-serve trial with core modules pre-provisioned, allowing immediate room inventory configuration and front-desk testing.',
    },
  ],
  crossSell: {
    badge: 'Real Estate SaaS',
    headline: 'Run Your Entire Brokerage. On One Platform.',
    description:
      'Explore SettleDesk — GLAD Studio’s proprietary SaaS unifying property management, agent operations, lead tracking, and commission payouts in real time.',
    targetSlug: 'settledesk',
    targetName: 'SettleDesk',
    metric: '500+ Brokers Onboarded',
    graphic: '/products/building.png',
  },
  closingCta: {
    heading: 'Ready to Modernize Your Hotel Operations?',
    subline:
      'See how GLAD HMS unifies your room reservations, front desk, mobile housekeeping, and revenue analytics on one modular platform.',
    primaryButtonText: 'Talk About Your Hotel',
    secondaryButtonText: 'Book a Discovery Call',
  },
};

export const settledeskProduct: ProductItem = {
  id: '02',
  slug: 'settledesk',
  name: 'SettleDesk',
  tagline: 'Premium Brokerage Operations',
  category: 'Real Estate SaaS',
  statusChip: 'Real Estate SaaS · Live',
  heroPositioning: 'Premium Brokerage Operations',
  headline: 'Run Your Entire Brokerage. On One Platform.',
  description:
    'SettleDesk unifies property management, agent operations, lead tracking, and commission payouts into one secure, real-time system — built for brokerages that are ready to scale.',
  heroStats: [
    { value: '500+', label: 'Brokers Onboarded' },
    { value: '10,000+', label: 'Units Managed' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: 'Bank-Grade', label: 'Data Security' },
  ],
  threeStatStrip: [
    { value: '500+', label: 'Brokers Onboarded' },
    { value: '10,000+', label: 'Units Managed' },
    { value: '99.9%', label: 'Uptime SLA' },
  ],
  overviewFeatures: [
    {
      title: 'Property Portfolios',
      description: 'Real-time spatial inventory status updating across Draft, Active, and Sold states instantly.',
    },
    {
      title: 'Commission Engine',
      description: 'Version-controlled 70/30, 80/20, and 90/10 split matrices with desk fees and office royalty caps.',
    },
    {
      title: 'One-Click Approvals',
      description: 'Admins review signed digital closing binders and automatically queue bank payout transfers.',
    },
    {
      title: 'Multi-Device Sync',
      description: 'React Native mobile app for agents synchronized with web admin consoles with sub-200ms latency.',
    },
  ],
  overviewGraphic: '/products/building.png',
  threeTier: [
    {
      role: 'For Platform Operators',
      title: 'Super Admin Portal',
      description:
        'Manage every brokerage on SettleDesk from a single command center — subscriptions, billing, onboarding, and platform-wide analytics.',
      bullets: [
        'Subscription & billing management',
        'Client onboarding & lifecycle tracking',
        'Platform-wide audit logs',
      ],
      mockType: 'admin',
    },
    {
      role: 'For Brokerage Owners & Managers',
      title: 'Client Admin Dashboard',
      description:
        "Take full control of your brokerage's operations — from listing properties to approving deals and structuring commissions your way.",
      bullets: [
        'Property & portfolio management',
        'Version-controlled commission plans',
        'Deal & payout approvals',
      ],
      mockType: 'ledger',
    },
    {
      role: 'For Agents on the Go',
      title: 'Broker Mobile App',
      description:
        'Everything your agents need to close deals right from their phones — live listings, lead tracking, and real-time commission visibility.',
      bullets: [
        'Real-time property browsing',
        'Lead & deal management',
        'Live commission tracking',
      ],
      mockType: 'agent',
    },
  ],
  features: [
    {
      eyebrow: 'Property & Portfolio Management',
      title: 'Every Property. Always Up to Date.',
      description:
        'Create, manage, and track your entire property portfolio in real time. Update unit statuses — Draft, Active, Sold — and keep every agent working from the same live data.',
      routePath: 'settledesk.io/property-management',
      videoSrc: '/products/video/every-property-always-up-to-date.mp4',
      imageSrc: '/products/luxury-villa.png',
    },
    {
      eyebrow: 'Commission Structure Engine',
      title: 'Commission Plans, Built Your Way.',
      description:
        'Design version-controlled commission structures and assign them precisely — by broker, by property, by deal. No spreadsheets, no guesswork.',
      routePath: 'settledesk.io/commission-engine',
      videoSrc: '/products/video/commission-plans-built-your-way.mp4',
      imageSrc: '/products/real-estate-contract.png',
    },
    {
      eyebrow: 'Deal & Payout Approvals',
      title: 'From Submitted to Sold, Automatically.',
      description:
        'When a broker closes a deal, admins review and approve it in one click — instantly updating unit status and queuing the commission payout.',
      routePath: 'settledesk.io/deal-approvals',
      videoSrc: '/products/video/from-submitted-to-sold-automatically.mp4',
      imageSrc: '/products/real-estate-app.png',
    },
    {
      eyebrow: 'Real-Time Sync Across Devices',
      title: 'One Source of Truth. Every Device.',
      description:
        'Whether it is the mobile app or the web dashboard, everyone sees the same data, the same moment it changes — no fragmentation, no delays.',
      routePath: 'settledesk.io/real-time-sync',
      videoSrc: '/products/video/one-source-of-truth-every-device.mp4',
      imageSrc: '/products/broker-office.png',
    },
  ],
  securityPillars: [
    {
      title: 'Row-Level Security (RLS)',
      description:
        'Database-enforced isolation ensures one brokerage can never access another brokerage’s listings or financials.',
      iconType: 'lock',
    },
    {
      title: 'Immutable Audit Trails',
      description:
        'Every critical action is automatically logged for full compliance and operational traceability.',
      iconType: 'audit',
    },
    {
      title: 'Enterprise Data Isolation',
      description:
        'A single unified database architected for multi-tenant safety and instant query performance at scale.',
      iconType: 'database',
    },
  ],
  operationalPhases: [
    {
      phase: 'Phase 01',
      timingChip: 'Under 5m',
      title: 'Onboard',
      description: 'Your brokerage gets provisioned and configured in minutes.',
      bullets: [
        'Create dedicated tenant DB',
        'Configure custom subdomain',
        'Invite initial Super Admin',
      ],
    },
    {
      phase: 'Phase 02',
      timingChip: 'Versioned',
      title: 'Configure',
      description: 'Admins set up properties, teams, and commission structures.',
      bullets: [
        'Upload properties catalog',
        'Define agent split tiers',
        'Set office caps & royalty fee',
      ],
    },
    {
      phase: 'Phase 03',
      timingChip: 'Real-Time',
      title: 'Sell',
      description: 'Brokers manage leads and close deals from the mobile app.',
      bullets: [
        'Browse active property list',
        'Log client offer & contract',
        'Upload closing signatures',
      ],
    },
    {
      phase: 'Phase 04',
      timingChip: 'Instant',
      title: 'Get Paid',
      description: 'Deals get approved, and commissions are calculated automatically.',
      bullets: [
        'One-click admin approval',
        'Calculate split & split caps',
        'Queue bank payout transfer',
      ],
    },
  ],
  aboutStory: {
    eyebrow: 'Our Story',
    title: 'Built by People Who Understand Real Estate',
    body1:
      'Real estate brokerages sit at the center of a lot of moving parts — properties, agents, leads, deals, and payouts — but most software built for the industry only solves one piece of that puzzle at a time. Teams end up stitching together a CRM, a spreadsheet for commissions, a separate tool for property listings, and group chats for approvals.',
    body2:
      'We built SettleDesk to be the operational backbone brokerages actually need: one platform, one source of truth, built for every role in the business — from platform operators to brokerage owners to field agents closing deals.',
    beliefs: [
      {
        title: 'Clean business rules.',
        description:
          'Admins control properties and commission structures. Brokers sell. The platform enforces this so nothing gets messy.',
      },
      {
        title: 'Real-time, always.',
        description: 'Every device — mobile or web — reflects the same live data, the moment it changes.',
      },
      {
        title: 'Security isn’t optional.',
        description: 'Multi-tenant systems demand strict data isolation. We built that in from day one.',
      },
      {
        title: 'Built for scale.',
        description: 'From a single-office brokerage to a multi-branch enterprise operation, the platform grows with you.',
      },
    ],
  },
  pricingTiers: [
    {
      name: 'Starter',
      tagline: 'For boutique brokerages getting started (Up to 10 agents)',
      featured: false,
      activeFeaturesCount: 3,
      features: [
        'Core Property & Lead Management',
        'Standard Commission Plans',
        'Web Admin Dashboard',
        'Email & Helpdesk Support',
        'Deal Approval Workflows',
        'Native Broker Mobile App',
      ],
      ctaText: 'Start Free Trial',
    },
    {
      name: 'Professional',
      tagline: 'For growing brokerages that need more control (Up to 50 agents)',
      featured: true,
      activeFeaturesCount: 5,
      features: [
        'Core Property & Lead Management',
        'Standard Commission Plans',
        'Advanced Commission Matrix Engine',
        'Deal Approval Workflows',
        'Native Broker Mobile App (iOS & Android)',
        'Priority Support & Dedicated Onboarding',
      ],
      ctaText: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      tagline: 'For large brokerage networks & multi-branch operations (Unlimited agents)',
      featured: false,
      activeFeaturesCount: 6,
      features: [
        'Unlimited Agents & Multi-Office Routing',
        'Custom CRM & Accounting Integrations',
        'Dedicated Database Instance & Custom SLAs',
        'Advanced Audit & Compliance Ledger',
        'Custom Split Overrides & Desk Caps',
        '24/7 Dedicated Account Engineering',
      ],
      ctaText: 'Start Free Trial',
    },
  ],
  faqs: [
    {
      question: 'How fast can our brokerage get set up on SettleDesk?',
      answer:
        'Provisioning a new company workspace takes under 5 minutes. Admins can instantly start uploading property catalogs and inviting team members.',
    },
    {
      question: 'Is our brokerage’s data isolated from other companies?',
      answer:
        'Yes. SettleDesk utilizes PostgreSQL Row-Level Security (RLS) policies at the database layer. One tenant can never access or query another brokerage’s data under any circumstances.',
    },
    {
      question: 'Can we customize our commission split structures?',
      answer:
        'Absolutely. SettleDesk features a version-controlled commission matrix engine allowing custom agent split tiers, office caps, franchise fees, and royalty subtractions.',
    },
    {
      question: 'Does SettleDesk support field agents on mobile?',
      answer:
        'Yes, SettleDesk includes a native iOS & Android mobile application built with React Native and Expo, keeping agents connected to live listings and deal submissions in real time.',
    },
    {
      question: 'Is there a free trial period?',
      answer:
        'We offer a 30-day full-featured free trial for new brokerages with zero setup fees and no credit card required upfront.',
    },
  ],
  galleryItems: [
    {
      id: 'identity',
      number: '// 01',
      tag: 'IDENTITY',
      title: 'Dedicated Tenant Isolation',
      subtitle: 'End-to-End Encryption',
      description:
        'Enterprise multi-tenant architecture with isolated database schemas, row-level security, and cryptographic tenant separation.',
      image: '/products/corporate-server.png',
    },
    {
      id: 'prestige',
      number: '// 02',
      tag: 'PRESTIGE',
      title: 'Luxury Branding Hub',
      subtitle: 'Private Office Spaces',
      description:
        'Custom domain mapping, white-label agent portals, and customized high-converting client presentation decks.',
      image: '/products/modern-office-facade.png',
    },
    {
      id: 'pipeline',
      number: '// 03',
      tag: 'PIPELINE',
      title: 'Instant Client Routing',
      subtitle: 'Smart Lead Distribution',
      description:
        'Automated round-robin lead allocation matching high-net-worth clients directly to top-producing brokerage agents.',
      image: '/products/broker-deal.png',
    },
    {
      id: 'portfolio',
      number: '// 04',
      tag: 'PORTFOLIO',
      title: 'High-Value Property Catalog',
      subtitle: 'Real-Time Inventory',
      description:
        'Live spatial property catalog with instant status updates, automated price adjustments, and virtual tour embeds.',
      image: '/products/luxury-villa.png',
    },
    {
      id: 'financials',
      number: '// 05',
      tag: 'FINANCIALS',
      title: 'Automated Commission Splits',
      subtitle: 'Tiered Splits & Royalty Caps',
      description:
        'Instant GCI calculation engine supporting custom 80/20, 70/30, or 90/10 split tiers, desk fees, and office royalty caps.',
      image: '/products/commission-3d.png',
    },
    {
      id: 'governance',
      number: '// 06',
      tag: 'GOVERNANCE',
      title: 'One-Click Deal Approvals',
      subtitle: 'Audit-Ready Legal Vault',
      description:
        'Digital closing binder checks, e-signature validation, and immutable real-time payout audit logs for compliance.',
      image: '/products/real-estate-contract.png',
    },
    {
      id: 'analytics',
      number: '// 07',
      tag: 'ANALYTICS',
      title: 'Brokerage Growth Engine',
      subtitle: 'Executive BI Dashboard',
      description:
        'Real-time revenue projections, agent performance leaderboards, and predictive quarterly volume forecasting.',
      image: '/products/skyscraper-sunset.png',
    },
    {
      id: 'mobility',
      number: '// 08',
      tag: 'MOBILITY',
      title: 'On-the-Go Agent Workflows',
      subtitle: 'iOS & Android Native App',
      description:
        'Full operational suite on mobile — capture client signatures, view real-time commission splits, and submit deals directly from the field.',
      image: '/products/hero-3d.png',
    },
    {
      id: 'properties',
      number: '// 09',
      tag: 'PROPERTIES',
      title: 'Spatial Unit Inventory',
      subtitle: 'Interactive 3D Floorplans',
      description:
        'Interactive architectural views with real-time unit availability, holding deposit reservations, and multi-currency pricing calculators.',
      image: '/products/properties-3d.png',
    },
    {
      id: 'appsuite',
      number: '// 10',
      tag: 'APP SUITE',
      title: 'Cross-Platform Broker Hub',
      subtitle: 'Native Mobile Sync',
      description:
        'Instant push alerts when offers are placed, real-time client chat history, and biometric auth for contract signing.',
      image: '/products/phone-3d.png',
    },
    {
      id: 'intelligence',
      number: '// 11',
      tag: 'COLLAB',
      title: 'Brokerage Collaboration Suite',
      subtitle: 'Internal Deal Channels',
      description:
        'Threaded deal discussions, shared client notes between co-listing agents, and administrative broadcast announcements.',
      image: '/products/broker-office.png',
    },
    {
      id: 'compliance',
      number: '// 12',
      tag: 'ESCROW',
      title: 'Automated Earnest Money Ledger',
      subtitle: 'Bank-Grade Reconciliation',
      description:
        'Integrated trust accounting, automated receipt generation, and real-time bank ledger matching for earnest deposit compliance.',
      image: '/products/real-estate-app.png',
    },
  ],
  crossSell: {
    badge: 'Hospitality SaaS',
    headline: 'Enterprise-Grade Hotel Operations. Built Module by Module.',
    description:
      'Explore GLAD HMS — GLAD Studio’s modular hotel operating system unifying reservations, housekeeping task boards, and USALI revenue analytics.',
    targetSlug: 'glad-hms',
    targetName: 'GLAD HMS',
    metric: '100% Modular PMS',
    graphic: '/products/hotel-building-transparent.png',
  },
  closingCta: {
    heading: 'Run Your Brokerage with Precision.',
    subline:
      'Unify your property management, mobile agent workflows, and real-time commission split payouts on one secure system.',
    primaryButtonText: 'Start 30-day Free Trial',
    secondaryButtonText: 'Book a Discovery Call',
  },
};

export const productsData: ProductItem[] = [gladHmsProduct, settledeskProduct];

export const productsOverviewFaqs: ProductFaq[] = [
  {
    question: 'How are GLAD Studio SaaS platforms built and hosted?',
    answer:
      'All our proprietary SaaS platforms (GLAD HMS and SettleDesk) are engineered on type-safe Next.js, React, Node.js, PostgreSQL with strict Row-Level Security, and deployed on cloud-native infrastructure with 99.9% uptime SLAs.',
  },
  {
    question: 'Can these platforms be custom-extended or self-hosted for our enterprise?',
    answer:
      'Yes. Enterprise tiers support custom dedicated database instances, custom ERP/CRM integrations, on-premise or private VPC deployments, and white-label branding options.',
  },
  {
    question: 'How do you handle multi-tenant data privacy and security?',
    answer:
      'Every query is scoped by tenant identifier with database-level isolation (PostgreSQL RLS) and append-only audit logging to guarantee zero cross-tenant data leaks.',
  },
  {
    question: 'Do you offer live onboarding and migration support?',
    answer:
      'Yes, our senior engineering team provides hands-on data migration from legacy spreadsheets or databases, role configuration, and live team onboarding.',
  },
];
