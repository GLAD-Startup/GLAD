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
    slug: 'fluxor',
    index: '01',
    title: 'Fluxor',
    name: 'Fluxor',
    category: 'Desktop Application',
    client: 'Fluxor Engine Labs',
    date: 'Monday, April 15, 2024',
    duration: '6 – 8 Weeks',
    location: 'Mathura, India',
    summary: 'Automated Document Orchestration & Asset Classification Engine',
    subtitle: 'Automated Document Orchestration & Asset Classification Engine',
    challenge:
      'Users were spending hours manually organizing, renaming, and sorting files across cluttered directories — a tedious, error-prone process.',
    solution:
      'Built an AI-powered Windows desktop application that automatically analyzes file content and metadata to suggest smart renames and classify files into organized folder structures.',
    features: [
      'AI-driven file renaming',
      'Automatic folder classification',
      'Batch file processing',
      'Smart content analysis',
    ],
    outcome:
      'Reduced file organization time by over 80% for users with large, unstructured directories.',
    stack: ['Python', 'PyQt', 'Machine Learning', 'Local LLMs'],
    techStack: ['Python', 'PyQt', 'Machine Learning', 'Local LLMs'],
    year: '2024',
    metric: '80% Time Reduction',
    liveUrl: 'https://gladstudio.net/portfolio/fluxor',
    shots: [
      { src: '/work/fluxor/corporate-server.png', caption: 'AI-driven file renaming and content analysis engine' },
      { src: '/work/fluxor/real-estate-contract.png', caption: 'Batch file processing and automatic folder classification' },
    ],
    galleryImages: [
      '/work/fluxor/corporate-server.png',
      '/work/fluxor/real-estate-contract.png',
      '/work/prayas-app/phone-3d.png',
      '/work/stock-management/properties-3d.png',
    ],
    x: 42,
    y: 0,
    w: 720,
    h: 432,
    innerX: 180,
    innerY: 176,
    innerW: 358,
    innerH: 252,
    outerSrc: '/work/fluxor/corporate-server.png',
    innerSrc: '/work/fluxor/real-estate-contract.png',
    outerMedia: { src: '/work/fluxor/corporate-server.png' },
    innerMedia: { src: '/work/fluxor/real-estate-contract.png' },
  },
  {
    id: '02',
    slug: 'prayas-app',
    index: '02',
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
      '/work/fluxor/corporate-server.png',
    ],
    x: 975,
    y: 112,
    w: 500,
    h: 352,
    innerX: 126,
    innerY: 82,
    innerW: 250,
    innerH: 180,
    outerSrc: '/work/prayas-app/phone-3d.png',
    innerSrc: '/work/prayas-app/real-estate-app.png',
    outerMedia: { src: '/work/prayas-app/phone-3d.png' },
    innerMedia: { src: '/work/prayas-app/real-estate-app.png' },
  },
  {
    id: '03',
    slug: 'stock-management',
    index: '03',
    title: 'Stock Management',
    name: 'Stock Management',
    category: 'Full Stack Platform',
    client: 'GLA Canteen',
    date: 'Monday, September 9, 2024',
    duration: '8 – 10 Weeks',
    location: 'Mathura, India',
    summary: 'Multi-Tenant Enterprise Inventory & Supply Chain Orchestration Suite',
    subtitle: 'Multi-Tenant Enterprise Inventory & Supply Chain Orchestration Suite',
    challenge:
      'A business with multiple sub-divisions was struggling to track inventory across departments using disconnected spreadsheets and manual processes.',
    solution:
      'Built a comprehensive stock management ecosystem — a React Native mobile app for on-the-ground inventory tracking, a web application for managers, and a full admin panel for oversight and reporting.',
    features: [
      'Cross-platform mobile & web apps',
      'Admin panel with reporting',
      'Multi-division inventory tracking',
      'Real-time stock updates',
    ],
    outcome:
      'Unified inventory visibility across all business divisions, eliminating stock discrepancies entirely.',
    stack: ['React Native', 'React.js', 'Node.js', 'PostgreSQL'],
    techStack: ['React Native', 'React.js', 'Node.js', 'PostgreSQL'],
    year: '2024',
    metric: 'Zero Stock Discrepancies',
    liveUrl: 'https://gladstudio.net/portfolio/stock-management',
    shots: [
      { src: '/work/stock-management/properties-3d.png', caption: 'Multi-division inventory tracking dashboard and analytics' },
      { src: '/work/stock-management/commission-3d.png', caption: 'Admin panel with real-time stock updates and reporting' },
    ],
    galleryImages: [
      '/work/stock-management/properties-3d.png',
      '/work/stock-management/commission-3d.png',
      '/work/ai-mock-interview/hero-3d.png',
      '/work/lead-enrichment/modern-office-facade.png',
    ],
    x: 520,
    y: 690,
    w: 460,
    h: 546,
    innerX: 116,
    innerY: 140,
    innerW: 230,
    innerH: 274,
    outerSrc: '/work/stock-management/properties-3d.png',
    innerSrc: '/work/stock-management/commission-3d.png',
    outerMedia: { src: '/work/stock-management/properties-3d.png' },
    innerMedia: { src: '/work/stock-management/commission-3d.png' },
  },
  {
    id: '04',
    slug: 'ai-mock-interview',
    index: '04',
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
      '/work/q-safe/building.png',
      '/work/fluxor/corporate-server.png',
    ],
    x: 35,
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
    id: '05',
    slug: 'lead-enrichment',
    index: '05',
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
    x: 1005,
    y: 1436,
    w: 470,
    h: 462,
    innerX: 118,
    innerY: 108,
    innerW: 234,
    innerH: 234,
    outerSrc: '/work/lead-enrichment/modern-office-facade.png',
    innerSrc: '/work/lead-enrichment/skyscraper-sunset.png',
    outerMedia: { src: '/work/lead-enrichment/modern-office-facade.png' },
    innerMedia: { src: '/work/lead-enrichment/skyscraper-sunset.png' },
  },
  {
    id: '06',
    slug: 'q-safe',
    index: '06',
    title: 'Q-SAFE',
    name: 'Q-SAFE',
    category: 'Security Platform',
    client: 'Encrypted Media Protocol',
    date: 'Friday, May 23, 2025',
    duration: '7 – 8 Weeks',
    location: 'Hyderabad, India',
    summary: 'Zero-Knowledge Encrypted Secure File Transmission Portal',
    subtitle: 'Zero-Knowledge Encrypted Secure File Transmission Portal',
    challenge:
      'Organizations needed a secure, self-hosted way to share sensitive documents without relying on third-party services that lacked fine-grained access controls.',
    solution:
      'Built a secure file-sharing platform enabling encrypted file transfer through links and QR codes, with JWT-based authentication, role-based access control, Redis caching, Celery background processing, and automated cleanup tasks.',
    features: [
      'Encrypted file transfer via links & QR',
      'JWT auth & role-based access control',
      'Background processing with Celery',
      'Automated file cleanup & expiration',
    ],
    outcome:
      'Enabled secure, scalable document sharing for organizations handling sensitive high-value data.',
    stack: ['Django REST Framework', 'PostgreSQL', 'Docker', 'Celery', 'Redis'],
    techStack: ['Django REST Framework', 'PostgreSQL', 'Docker', 'Celery', 'Redis'],
    year: '2025',
    metric: 'Zero-Knowledge Security',
    liveUrl: 'https://gladstudio.net/portfolio/q-safe',
    shots: [
      { src: '/work/q-safe/building.png', caption: 'Zero-knowledge encrypted file transmission and QR code sharing portal' },
      { src: '/work/q-safe/broker-office.png', caption: 'Role-based access control and automated file expiration management' },
    ],
    galleryImages: [
      '/work/q-safe/building.png',
      '/work/q-safe/broker-office.png',
      '/work/fluxor/corporate-server.png',
      '/work/ai-mock-interview/hero-3d.png',
    ],
    x: 300,
    y: 2300,
    w: 640,
    h: 400,
    innerX: 160,
    innerY: 150,
    innerW: 320,
    innerH: 230,
    outerSrc: '/work/q-safe/building.png',
    innerSrc: '/work/q-safe/broker-office.png',
    outerMedia: { src: '/work/q-safe/building.png' },
    innerMedia: { src: '/work/q-safe/broker-office.png' },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

// Aliases for backwards-compatibility
export const works = projectsData;
