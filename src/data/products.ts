export interface ProductCapability {
  title: string;
  role: string;
  description: string;
  bullets: string[];
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  headline: string;
  description: string;
  stats: { value: string; label: string }[];
  capabilities: ProductCapability[];
  features: ProductFeature[];
  securityPillars: { title: string; description: string }[];
  setupPhases: { phase: string; title: string; description: string }[];
  pricingTiers: { name: string; target: string; features: string[]; featured?: boolean }[];
  faqs: { q: string; a: string }[];
  gallerySeeds: string[];
}

export const productsData: ProductItem[] = [
  {
    id: '01',
    slug: 'glad-hms',
    name: 'GLAD HMS',
    tagline: 'Modular Hospitality Operating System',
    category: 'Enterprise Hospitality SaaS',
    headline: 'Enterprise-Grade Hotel Operations. Built Module by Module for Your Property.',
    description:
      'GLAD HMS is a modular multi-tenant hotel management platform covering reservations, front desk workflows, housekeeping task boards, stay folio billing with GST compliance, and USALI revenue analytics — with zero forced software bundles.',
    stats: [
      { value: '100%', label: 'Modular Architecture' },
      { value: 'Row-Level', label: 'Pessimistic Inventory Locks' },
      { value: 'Multi-Tenant', label: 'Tenant-Scoped Isolation' },
      { value: 'Fixed-Point', label: 'Decimal Financial Precision' },
    ],
    capabilities: [
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
      },
    ],
    features: [
      {
        title: 'Pessimistic Concurrency Row Locks. Zero Double Bookings',
        description:
          'Mathematically sound reservation overlap checking backed by PostgreSQL row locks (SELECT ... FOR UPDATE) to prevent double-booking during high concurrent traffic.',
      },
      {
        title: 'Instant Guest Folios & Rapid Check-In',
        description:
          'Process guest check-ins, verify identification, handle walk-in reservations, and manage stay folios seamlessly with real-time room status updates.',
      },
      {
        title: 'Real-Time Room Turnover. Coordinated with Front Desk',
        description:
          'Housekeeping staff receive priority-sorted room cleaning rosters. Marking a room inspected updates front desk availability immediately.',
      },
      {
        title: 'Multi-Folio Accounting & Indian GST Compliance',
        description:
          'Automated tax calculation across GST slabs (0%, 12%, 18%) with multi-folio support, split payments between company and guest, and strict NUMERIC(12,2) decimal precision.',
      },
    ],
    securityPillars: [
      {
        title: 'Tenant-Scoped Query Isolation',
        description:
          'Mandatory tenant_id scoping across every database query guarantees that hotel properties never cross-access competitor data.',
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        description:
          'Granular system roles (Owner, Manager, Front Desk, Housekeeping) restrict permissions to property-level authorized workflows.',
      },
      {
        title: 'Append-Only Audit Logging',
        description:
          'Every sensitive operation — check-in, check-out, room reassignment, manual payment, and rate adjustment — is logged in an immutable audit ledger.',
      },
    ],
    setupPhases: [
      {
        phase: 'Phase 01',
        title: 'Setup (Instant) — Tenant Provisioning',
        description: 'Register your hotel workspace and receive a 15-day trial with core modules pre-enabled.',
      },
      {
        phase: 'Phase 02',
        title: 'Configuration (Flexible) — Rooms & Rate Plans',
        description: 'Configure room types, rate plans, seasonal pricing, and regional tax slabs & GST rules.',
      },
      {
        phase: 'Phase 03',
        title: 'Operations (Real-Time) — Front Desk & Housekeeping',
        description: 'Real-time reservation booking, automated status state transitions, and mobile housekeeping dispatch.',
      },
      {
        phase: 'Phase 04',
        title: 'Finance (Automated) — Folios & Revenue Analytics',
        description: 'Multi-folio billing, GST tax invoice generation, and live Occupancy, ADR, and RevPAR metrics.',
      },
    ],
    pricingTiers: [
      {
        name: 'Starter',
        target: 'For boutique hotels & properties (Up to 25 rooms)',
        features: [
          'Core Reservation & Inventory Grid',
          'Front Desk Operations & Check-in',
          'Mobile Housekeeping Task Board',
          'Standard GST Tax Invoicing',
          'Email & Discord Support',
        ],
      },
      {
        name: 'Growth',
        featured: true,
        target: 'For busy hotels with multi-department teams (Up to 100 rooms)',
        features: [
          'Everything in Starter',
          'USALI Revenue Analytics (ADR/RevPAR)',
          'Multi-Folio Split Billing Engine',
          'Granular Role-Based Access Control',
          'Priority WhatsApp & Phone Support',
        ],
      },
      {
        name: 'Enterprise',
        target: 'For hotel chains & multi-property groups (Unlimited rooms)',
        features: [
          'Consolidated Multi-Property Reporting',
          'Custom Rate Parity & OTA Connectors',
          'Dedicated Database Instance & SLA',
          'Custom Feature Engineering & 24/7 Support',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is GLAD HMS?',
        a: 'GLAD HMS is an enterprise-grade, modular Hotel Management System covering reservations, front desk, housekeeping, stay billing, and USALI revenue analytics on a multi-tenant SaaS platform.',
      },
      {
        q: 'How does GLAD HMS prevent double-booking?',
        a: 'We use PostgreSQL row-level pessimistic locking (SELECT ... FOR UPDATE) alongside strict date overlap validation during reservation confirmation.',
      },
      {
        q: 'Does GLAD HMS support multi-property groups?',
        a: 'Yes, our multi-property architecture allows group management accounts to supervise multiple distinct physical properties with consolidated reporting.',
      },
    ],
    gallerySeeds: ['glad-hms-1', 'glad-hms-2', 'glad-hms-3', 'glad-hms-4'],
  },
  {
    id: '02',
    slug: 'settledesk',
    name: 'SettleDesk',
    tagline: 'Premium Brokerage Operations',
    category: 'Real Estate Brokerage SaaS',
    headline: 'Run Your Entire Brokerage. On One Platform.',
    description:
      'SettleDesk unifies property management, agent operations, lead tracking, and commission payouts into one secure, real-time system — built for brokerages that are ready to scale.',
    stats: [
      { value: '500+', label: 'Brokers Onboarded' },
      { value: '10,000+', label: 'Units Managed' },
      { value: '99.9%', label: 'Platform Uptime' },
      { value: 'Bank-Grade', label: 'Data Security' },
    ],
    capabilities: [
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
      },
    ],
    features: [
      {
        title: 'Every Property. Always Up to Date',
        description:
          'Create, manage, and track your entire property portfolio in real time. Update unit statuses — Draft, Active, Sold — and keep every agent working from the same live data.',
      },
      {
        title: 'Commission Plans, Built Your Way',
        description:
          'Design version-controlled commission structures and assign them precisely — by broker, by property, by deal. No spreadsheets, no guesswork.',
      },
      {
        title: 'From Submitted to Sold, Automatically',
        description:
          'When a broker closes a deal, admins review and approve it in one click — instantly updating unit status and queuing the commission payout.',
      },
      {
        title: 'One Source of Truth. Every Device',
        description:
          'Whether it is the mobile app or the web dashboard, everyone sees the same data, the same moment it changes — no fragmentation, no delays.',
      },
    ],
    securityPillars: [
      {
        title: 'Row-Level Security (RLS)',
        description: 'Database-enforced isolation ensures one brokerage can never access another brokerage’s listings or financials.',
      },
      {
        title: 'Immutable Audit Trails',
        description: 'Every critical action is automatically logged for full compliance and operational traceability.',
      },
      {
        title: 'Enterprise Data Isolation',
        description: 'A single unified database architected for multi-tenant safety and instant query performance.',
      },
    ],
    setupPhases: [
      {
        phase: 'Phase 01',
        title: 'Setup (Under 5m) — Onboard',
        description: 'Dedicated tenant DB created, custom subdomain configured, initial Super Admin invited.',
      },
      {
        phase: 'Phase 02',
        title: 'Rules (Versioned) — Configure',
        description: 'Upload property catalog, define agent split tiers, set office caps and royalty structures.',
      },
      {
        phase: 'Phase 03',
        title: 'Sales (Real-Time) — Sell',
        description: 'Browse active property list, log client offers and contracts, upload closing signatures.',
      },
      {
        phase: 'Phase 04',
        title: 'Finance (Instant) — Get Paid',
        description: 'One-click admin approval, calculate split & caps, and queue bank payout transfers.',
      },
    ],
    pricingTiers: [
      {
        name: 'Starter',
        target: 'For boutique brokerages (Up to 10 agents)',
        features: [
          'Core Property & Lead Management',
          'Standard Commission Plans',
          'Web Admin Dashboard',
          'Email & Helpdesk Support',
        ],
      },
      {
        name: 'Professional',
        featured: true,
        target: 'For scaling brokerages (Up to 50 agents)',
        features: [
          'Advanced Commission Matrix Engine',
          'Deal Approval Workflows',
          'Native Broker Mobile App (iOS & Android)',
          'Priority Support & Dedicated Onboarding',
        ],
      },
      {
        name: 'Enterprise',
        target: 'For large brokerage networks (Unlimited agents)',
        features: [
          'Custom CRM & Accounting Integrations',
          'Dedicated Database Instance & Custom SLAs',
          'Advanced Audit & Compliance Ledger',
          '24/7 Dedicated Account Engineering',
        ],
      },
    ],
    faqs: [
      {
        q: 'How fast can our brokerage get set up?',
        a: 'Under 5 minutes with immediate self-serve onboarding and bulk property CSV uploads.',
      },
      {
        q: 'Is brokerage data isolated?',
        a: 'Yes, PostgreSQL Row-Level Security (RLS) policies enforce zero cross-tenant access.',
      },
      {
        q: 'Can we customize commission splits?',
        a: 'Yes, our version-controlled commission matrix engine supports custom agent tiers, office caps, and royalty subtractions.',
      },
    ],
    gallerySeeds: ['settledesk-1', 'settledesk-2', 'settledesk-3', 'settledesk-4'],
  },
];
