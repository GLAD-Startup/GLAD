export interface ProjectShot {
  src: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  index: string;
  title: string;
  name: string;
  category: string;
  client: string;
  date: string;
  duration: string;
  location: string;
  summary: string;
  subtitle: string;
  challenge: string;
  solution: string;
  features: string[];
  outcome: string;
  stack: string[];
  techStack: string[];
  year: string;
  metric?: string;
  liveUrl?: string;
  shots: ProjectShot[];
  galleryImages: string[];
  // Scattered homepage layout coordinates
  x: number;
  y: number;
  w: number;
  h: number;
  innerX: number;
  innerY: number;
  innerW: number;
  innerH: number;
  outerSrc: string;
  innerSrc: string;
  outerMedia: { src: string };
  innerMedia: { src: string };
}

export const projectsData: ProjectItem[] = [
  {
    id: '01',
    slug: 'glad-hms',
    index: '01',
    title: 'GLAD HMS',
    name: 'GLAD HMS',
    category: 'Hospitality SaaS',
    client: 'GLAD Proprietary Platform',
    date: 'Monday, January 15, 2024',
    duration: '12 – 14 Weeks',
    location: 'Vrindavan & Delhi NCR, India',
    summary: 'Modular Enterprise Hospitality Operating System & Multi-Property Platform',
    subtitle: 'Modular Enterprise Hospitality Operating System & Multi-Property Platform',
    challenge:
      'Hotels and multi-property chains face severe revenue leakage and administrative bottlenecks caused by siloed legacy PMS tools, slow room turnover dispatch, and error-prone folio reconciliation.',
    solution:
      'Engineered a unified modular hospitality operating system with real-time room availability matrix, automated folio split calculation, multi-property scoped RBAC, and instant housekeeping dispatch.',
    features: [
      'Real-time room availability & rate matrix',
      'Automated folio & ledger reconciliation',
      'Multi-property scoped RBAC & audit logs',
      'Instant housekeeping turnover dispatch',
    ],
    outcome:
      'Standardized operations across multi-property hospitality networks with 99.9% uptime and zero double-booking discrepancies.',
    stack: ['Next.js', 'React.js', 'Node.js', 'PostgreSQL', 'Redis'],
    techStack: ['Next.js', 'React.js', 'Node.js', 'PostgreSQL', 'Redis'],
    year: '2024',
    metric: '99.9% Platform Uptime',
    liveUrl: 'https://gladstudio.net/products/glad-hms',
    shots: [
      { src: '/products/hotel-building.png', caption: 'Enterprise modular room inventory matrix and multi-property management console' },
      { src: '/products/luxury-villa.png', caption: 'Automated folio ledger and guest reservation dispatch interface' },
    ],
    galleryImages: [
      '/products/hotel-building.png',
      '/products/luxury-villa.png',
      '/products/building.png',
      '/work/prayas-app/phone-3d.png',
    ],
    x: 42,
    y: 0,
    w: 720,
    h: 432,
    innerX: 180,
    innerY: 176,
    innerW: 358,
    innerH: 252,
    outerSrc: '/products/hotel-building.png',
    innerSrc: '/products/luxury-villa.png',
    outerMedia: { src: '/products/hotel-building.png' },
    innerMedia: { src: '/products/luxury-villa.png' },
  },
  {
    id: '02',
    slug: 'settledesk',
    index: '02',
    title: 'SettleDesk',
    name: 'SettleDesk',
    category: 'Real Estate OS',
    client: 'Commercial Brokerage Networks',
    date: 'Wednesday, October 23, 2024',
    duration: '10 – 12 Weeks',
    location: 'Delhi NCR & Mumbai, India',
    summary: 'Unified Real Estate Brokerage Operating System & Commission Settlement Engine',
    subtitle: 'Unified Real Estate Brokerage Operating System & Commission Settlement Engine',
    challenge:
      'Commercial real estate brokerages struggle with high deal closing friction, untracked escrow pipelines, and tedious manual calculations for complex tiered agent commission splits.',
    solution:
      'Architected an enterprise transaction management operating system that unifies transaction workflows, automates custom tiered commission splits, reconciles earnest money ledgers, and secures contract closings.',
    features: [
      'Automated tiered commission splitting',
      'Multi-tenant agent workspaces & RBAC',
      'Earnest money escrow ledger reconciliation',
      'Real-time closing pipeline analytics',
    ],
    outcome:
      'Streamlined settlement operations for 500+ commercial brokers with 10,000+ units managed across national networks.',
    stack: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    year: '2024',
    metric: '500+ Brokers Onboarded',
    liveUrl: 'https://gladstudio.net/products/settledesk',
    shots: [
      { src: '/products/building.png', caption: 'Enterprise commercial brokerage dashboard and multi-tenant deal pipeline' },
      { src: '/products/broker-deal.png', caption: 'Automated commission ledger and transaction settlement engine' },
    ],
    galleryImages: [
      '/products/building.png',
      '/products/broker-deal.png',
      '/work/stock-management/properties-3d.png',
      '/work/lead-enrichment/modern-office-facade.png',
    ],
    x: 975,
    y: 112,
    w: 500,
    h: 352,
    innerX: 126,
    innerY: 82,
    innerW: 250,
    innerH: 180,
    outerSrc: '/products/building.png',
    innerSrc: '/products/broker-deal.png',
    outerMedia: { src: '/products/building.png' },
    innerMedia: { src: '/products/broker-deal.png' },
  },
  {
    id: '03',
    slug: 'prayas-app',
    index: '03',
    title: 'Prayas App',
    name: 'Prayas App',
    category: 'Mobile App',
    client: 'Prayas NGO',
    date: 'Tuesday, June 18, 2024',
    duration: '5 – 6 Weeks',
    location: 'Mathura & Agra, India',
    summary: 'Decentralized Medical Inventory Control & Resource Logistics Platform',
    subtitle: 'Decentralized Medical Inventory Control & Resource Logistics Platform',
    challenge:
      'Prayas NGO needed a streamlined way to manage health equipment lending and coordinate blood donation drives across their community network.',
    solution:
      'Developed a React Native Android application that connects donors with those in need, manages equipment inventory and lending workflows, and provides real-time coordination for blood donation campaigns.',
    features: [
      'Blood donation coordination',
      'Equipment lending management',
      'Donor-recipient matching',
      'Real-time availability tracking',
    ],
    outcome:
      'Enabled Prayas NGO to digitize their operations and serve over 10,000+ community members with real-time health logistics.',
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'],
    year: '2024',
    metric: '10,000+ Community Reach',
    liveUrl: 'https://gladstudio.net/portfolio/prayas-app',
    shots: [
      { src: '/work/prayas-app/phone-3d.png', caption: 'Blood donation coordination and donor-recipient matching interface' },
      { src: '/work/prayas-app/real-estate-app.png', caption: 'Equipment lending management and real-time availability tracking' },
    ],
    galleryImages: [
      '/work/prayas-app/phone-3d.png',
      '/work/prayas-app/real-estate-app.png',
      '/work/prayas-app/prayas.jpg',
      '/work/stock-management/properties-3d.png',
    ],
    x: 520,
    y: 690,
    w: 460,
    h: 546,
    innerX: 116,
    innerY: 140,
    innerW: 230,
    innerH: 274,
    outerSrc: '/work/prayas-app/phone-3d.png',
    innerSrc: '/work/prayas-app/real-estate-app.png',
    outerMedia: { src: '/work/prayas-app/phone-3d.png' },
    innerMedia: { src: '/work/prayas-app/real-estate-app.png' },
  },
  {
    id: '04',
    slug: 'stock-management',
    index: '04',
    title: 'Canteen Inventory & Customer Management',
    name: 'Canteen Inventory & Customer Management',
    category: 'Product · Mobile App',
    client: 'GLA Canteen',
    date: 'Monday, September 9, 2024',
    duration: '6 – 8 Weeks',
    location: 'Mathura, India',
    summary: 'GLAD Studio’s Canteen Inventory & Customer Management App — Deployed at GLA Canteen',
    subtitle: 'Proprietary Mobile-First Multi-Counter Inventory Tracking & Customer Management Ecosystem',
    challenge:
      'High-volume institutional canteens and multi-counter campus dining facilities struggle with ingredient wastage, unrecorded counter consumption, customer ledger tracking, manual paperwork, and stock-outs. GLA Canteen needed a robust real-time system to manage multi-counter inventory, customer billing accounts, and daily vendor procurement.',
    solution:
      'We designed and built Canteen Inventory & Customer Management — a dedicated mobile application for counter operators and kitchen staff, backed by a manager web console. Featuring rapid barcode scanning, customer account ledgers, live multi-counter stock auditing, automated low-stock reorder thresholds, and recipe-level consumption tracking.',
    features: [
      'Multi-counter real-time inventory sync & consumption logs',
      'Customer account balance management & rapid counter billing',
      'Instant barcode & QR scanning for ingredient check-in/out',
      'Automated low-stock procurement triggers & vendor manifests',
      'Role-based permissions for counter staff, chefs & management',
    ],
    outcome:
      'Successfully deployed across all GLA Canteen counters, eliminating stock discrepancies, automating daily purchase orders, and reducing raw material wastage by 32%.',
    stack: ['Flutter', 'React.js', 'Node.js', 'PostgreSQL'],
    techStack: ['Flutter', 'React.js', 'Node.js', 'PostgreSQL'],
    year: '2024',
    metric: 'Zero Stock Discrepancies · 32% Less Wastage',
    liveUrl: 'https://gladstudio.net/work/stock-management',
    shots: [
      { src: '/work/stock-management/canteen-app-1.png', caption: 'Real-time multi-counter stock sync and daily kitchen consumption tracking' },
      { src: '/work/stock-management/canteen-app-2.png', caption: 'Procurement manifest and automated low-stock alert dashboard' },
    ],
    galleryImages: [
      '/work/stock-management/canteen-app-1.png',
      '/work/stock-management/canteen-app-2.png',
      '/work/ai-mock-interview/hero-3d.png',
      '/work/lead-enrichment/modern-office-facade.png',
    ],
    x: 35,
    y: 1436,
    w: 480,
    h: 360,
    innerX: 160,
    innerY: 70,
    innerW: 210,
    innerH: 280,
    outerSrc: '/work/stock-management/canteen-app-2.png',
    innerSrc: '/work/stock-management/canteen-app-1.png',
    outerMedia: { src: '/work/stock-management/canteen-app-2.png' },
    innerMedia: { src: '/work/stock-management/canteen-app-1.png' },
  },
  {
    id: '05',
    slug: 'ai-mock-interview',
    index: '05',
    title: 'AI Mock Interview',
    name: 'AI Mock Interview',
    category: 'AI Product',
    client: 'TalentScale AI',
    date: 'Thursday, January 23, 2025',
    duration: '6 – 7 Weeks',
    location: 'Bangalore, India',
    summary: 'Low-Latency Conversational AI Technical Assessment Engine',
    subtitle: 'Low-Latency Conversational AI Technical Assessment Engine',
    challenge:
      'Job seekers lacked access to realistic, on-demand interview practice with meaningful feedback beyond generic question banks.',
    solution:
      'Built an AI-powered platform that generates role-specific questions using LLMs, evaluates candidate responses with semantic similarity analysis, and provides detailed scoring, confidence analysis, and improvement suggestions.',
    features: [
      'Role-specific question generation',
      'AI-based answer scoring & evaluation',
      'Confidence analysis & feedback',
      'Semantic similarity matching',
    ],
    outcome:
      'Enabled candidates to practice with realistic, AI-evaluated technical interviews with instant detailed grading.',
    stack: ['React.js', 'FastAPI', 'HuggingFace', 'MongoDB', 'Python'],
    techStack: ['React.js', 'FastAPI', 'HuggingFace', 'MongoDB', 'Python'],
    year: '2025',
    metric: 'Real-time Grading',
    liveUrl: 'https://gladstudio.net/portfolio/ai-mock-interview',
    shots: [
      { src: '/work/ai-mock-interview/hero-3d.png', caption: 'Role-specific question generation and live AI interview session' },
      { src: '/work/ai-mock-interview/broker-deal.png', caption: 'Confidence analysis, semantic similarity scoring, and evaluation feedback' },
    ],
    galleryImages: [
      '/work/ai-mock-interview/hero-3d.png',
      '/work/ai-mock-interview/broker-deal.png',
      '/work/lead-enrichment/skyscraper-sunset.png',
      '/work/stock-management/commission-3d.png',
    ],
    x: 1005,
    y: 1548,
    w: 460,
    h: 350,
    innerX: 116,
    innerY: 84,
    innerW: 230,
    innerH: 174,
    outerSrc: '/work/ai-mock-interview/hero-3d.png',
    innerSrc: '/work/ai-mock-interview/broker-deal.png',
    outerMedia: { src: '/work/ai-mock-interview/hero-3d.png' },
    innerMedia: { src: '/work/ai-mock-interview/broker-deal.png' },
  },
  {
    id: '06',
    slug: 'lead-enrichment',
    index: '06',
    title: 'Lead Enrichment',
    name: 'Lead Enrichment',
    category: 'Business Automation',
    client: 'ScaleReach Systems',
    date: 'Wednesday, March 12, 2025',
    duration: '4 – 5 Weeks',
    location: 'Delhi NCR, India',
    summary: 'High-Throughput Lead Sourcing & Automated Data Cleansing Pipeline',
    subtitle: 'High-Throughput Lead Sourcing & Automated Data Cleansing Pipeline',
    challenge:
      'Sales teams were manually researching leads, validating websites, and crafting outreach emails — a process that could not scale beyond a handful of prospects per day.',
    solution:
      'Developed an automated platform that collects and enriches lead data, identifies decision-makers, validates websites, deduplicates records, and generates personalized AI-powered outreach campaigns using batch jobs and async workflows.',
    features: [
      'Automated lead enrichment',
      'Website validation & deduplication',
      'AI-powered email generation',
      'Scalable batch processing',
    ],
    outcome:
      'Scaled outreach capacity from dozens to thousands of verified, personalized leads per day.',
    stack: ['Python', 'n8n', 'PostgreSQL', 'Docker', 'OpenAI'],
    techStack: ['Python', 'n8n', 'PostgreSQL', 'Docker', 'OpenAI'],
    year: '2025',
    metric: '1,000s Leads / Day',
    liveUrl: 'https://gladstudio.net/portfolio/lead-enrichment',
    shots: [
      { src: '/work/lead-enrichment/modern-office-facade.png', caption: 'Automated lead enrichment and website validation pipeline' },
      { src: '/work/lead-enrichment/skyscraper-sunset.png', caption: 'AI-powered personalized email generation and batch execution engine' },
    ],
    galleryImages: [
      '/work/lead-enrichment/modern-office-facade.png',
      '/work/lead-enrichment/skyscraper-sunset.png',
      '/work/stock-management/properties-3d.png',
      '/work/prayas-app/phone-3d.png',
    ],
    x: 300,
    y: 2260,
    w: 640,
    h: 420,
    innerX: 160,
    innerY: 150,
    innerW: 320,
    innerH: 230,
    outerSrc: '/work/lead-enrichment/modern-office-facade.png',
    innerSrc: '/work/lead-enrichment/skyscraper-sunset.png',
    outerMedia: { src: '/work/lead-enrichment/modern-office-facade.png' },
    innerMedia: { src: '/work/lead-enrichment/skyscraper-sunset.png' },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

// Aliases for backwards-compatibility
export const works = projectsData;
