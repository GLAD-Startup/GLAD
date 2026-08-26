export interface ServiceCapability {
  title: string;
  body: string;
}

export interface ServicePhase {
  title: string;
  body: string;
  meta: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  index: string;
  title: string;
  category: string;
  timeline: string;
  description: string;
  deliverables: string[];
  capabilities: ServiceCapability[];
  phases: ServicePhase[];
  techStack: string[];
  imageSeeds: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: '01',
    slug: 'mvp-development',
    index: '01',
    title: 'MVP Development',
    category: 'Startups & Ventures',
    timeline: '4 – 8 weeks',
    description:
      'Helping startups launch products quickly and efficiently — from clickable prototype to production-ready MVP. Interactive design prototype in Week 2, first working staging build in Week 3.',
    deliverables: [
      'Interactive Figma & React prototype by Week 2',
      'Working staging deployment by Week 3',
      'Production PostgreSQL schemas & auth',
      'Automated CI/CD deployment pipelines',
      '100% source code and IP transfer',
    ],
    capabilities: [
      {
        title: 'SaaS & Web Application MVPs',
        body: 'Full-stack multi-tenant web applications engineered with React, TypeScript, PostgreSQL, and secure role-based access control.',
      },
      {
        title: 'Cross-Platform Mobile MVPs',
        body: 'Native-feel iOS and Android mobile applications built on Flutter with offline-first local caching and push notifications.',
      },
      {
        title: 'AI & LLM-Powered MVPs',
        body: 'Intelligent software systems integrating OpenAI, Claude, LangChain, or custom RAG pipelines to automate complex workflows.',
      },
      {
        title: 'Workflow & Internal Tool MVPs',
        body: 'Custom business portals and automated operations backends replacing fragile manual spreadsheets and legacy systems.',
      },
    ],
    phases: [
      {
        title: 'Scope & Technical Blueprinting',
        body: 'We dissect your product vision, eliminate non-essential features, and define the core technical architecture, entity-relationship diagrams, and API boundaries.',
        meta: 'WEEK 01',
      },
      {
        title: 'Interactive Wireframes & UI Prototyping',
        body: 'Our team designs high-fidelity, clickable prototypes demonstrating complete user flows, navigation states, and micro-interactions before code is written.',
        meta: 'WEEK 02',
      },
      {
        title: 'Sprint-Based Engineering & Integration',
        body: 'Senior engineers build frontend interfaces and backend services in structured fortnightly sprints with continuous staging environment updates.',
        meta: 'WEEK 03 – 04',
      },
      {
        title: 'Quality Assurance, Security & Performance',
        body: 'Rigorous end-to-end testing, vulnerability scanning, SQL query optimization, and Lighthouse web vitals audits ensure launch-day stability.',
        meta: 'WEEK 05',
      },
      {
        title: 'Production Deployment & Handoff',
        body: 'We deploy your production infrastructure with automated CI/CD pipelines, configure domain DNS and monitoring, and transfer complete IP and repository access.',
        meta: 'WEEK 06 – 08',
      },
    ],
    techStack: ['React 19', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Supabase'],
    imageSeeds: ['glad-mvp-1', 'glad-mvp-2', 'glad-mvp-3', 'glad-mvp-4'],
  },
  {
    id: '02',
    slug: 'web-application-development',
    index: '02',
    title: 'Web Application Development',
    category: 'Enterprise SaaS & Web',
    timeline: '6 – 16 weeks',
    description:
      'Robust web applications from analytics dashboards to multi-tenant SaaS, with clean architecture and modern UX. Type-safe, secure platforms in predictable fortnightly sprints.',
    deliverables: [
      'Multi-tenant architecture with Row-Level Security',
      'Type-safe end-to-end API layer',
      'Automated subscription & payment billing',
      'Interactive real-time dashboards & analytics',
      'WCAG AA accessible UI design system',
    ],
    capabilities: [
      {
        title: 'Multi-Tenant SaaS Platforms',
        body: 'Scalable SaaS applications with row-level security, tenant data isolation, automated billing, and self-service onboarding flows.',
      },
      {
        title: 'Enterprise Portals & Backends',
        body: 'High-security business management portals, customer dashboards, and internal operations tools replacing legacy software.',
      },
      {
        title: 'High-Throughput API Services',
        body: 'REST and GraphQL microservices engineered for sub-100ms response times, rate-limiting, and resilient database connection pooling.',
      },
      {
        title: 'Real-Time Collaborative Dashboards',
        body: 'Interactive analytics workspaces powered by WebSockets, background queue workers, and low-latency state synchronization.',
      },
    ],
    phases: [
      {
        title: 'Domain Modeling & Schema Engineering',
        body: 'Normalized PostgreSQL database schemas with indexed foreign keys, automated migration pipelines, and zero data redundancy.',
        meta: 'WEEK 01 – 02',
      },
      {
        title: 'Component Architecture & Design System',
        body: 'Design token implementation, atomic component hierarchy, WCAG accessibility compliance, and responsive layouts across all viewports.',
        meta: 'WEEK 03 – 04',
      },
      {
        title: 'Full-Stack API & State Integration',
        body: 'End-to-end type safety connecting React client state with backend controllers, automated auth validation, and resilient error boundaries.',
        meta: 'WEEK 05 – 10',
      },
      {
        title: 'Performance Optimization & Hardening',
        body: 'Database query optimization, server-side caching with Redis, Lighthouse performance audits, and comprehensive automated end-to-end testing.',
        meta: 'WEEK 11 – 14',
      },
      {
        title: 'Cloud Infrastructure Deployment',
        body: 'Production deployment with automated CI/CD pipelines, SSL certificates, container orchestration, and continuous uptime monitoring.',
        meta: 'WEEK 15 – 16',
      },
    ],
    techStack: ['React 19', 'TanStack Start', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    imageSeeds: ['glad-web-1', 'glad-web-2', 'glad-web-3', 'glad-web-4'],
  },
  {
    id: '03',
    slug: 'mobile-app-development',
    index: '03',
    title: 'Mobile App Development',
    category: 'iOS & Android Engineering',
    timeline: '8 – 16 weeks',
    description:
      'Single codebase, native feel. Flutter applications that ship to both stores with polished UX and offline-first capability, backed by automated CI/CD.',
    deliverables: [
      'Single codebase for iOS & Android with 60fps UI',
      'Offline-first SQLite/Hive local persistence',
      'Hardware integrations (Camera, BLE, Geolocation)',
      'Complete Apple App Store & Google Play submission',
      'Automated CI/CD with Fastlane build pipelines',
    ],
    capabilities: [
      {
        title: 'Cross-Platform Flutter & React Native Apps',
        body: 'High-performance applications built from a single codebase for iOS and Android, cutting development timelines by 40% while preserving native UX.',
      },
      {
        title: 'Offline-First Data Synchronization',
        body: 'Local SQLite caching with conflict-free background data synchronization, enabling full application usability in low-connectivity field environments.',
      },
      {
        title: 'Hardware Integration & Device Sensors',
        body: 'Seamless integration with device camera, Bluetooth Low Energy, GPS geolocation, push notifications, and biometric authentication.',
      },
      {
        title: 'End-to-End App Store Submissions',
        body: 'Comprehensive Apple App Store and Google Play Store compliance, guideline review preparation, and automated release pipeline setup.',
      },
    ],
    phases: [
      {
        title: 'Mobile Architecture & Native Bridge Mapping',
        body: 'Defining client-server protocols, offline sync logic, local storage schemas, and native platform integration contracts.',
        meta: 'WEEK 01 – 02',
      },
      {
        title: 'Interactive UX Flows & Mobile Design Tokens',
        body: 'Touch-optimized design systems following iOS Human Interface Guidelines and Google Material 3 standards with 60fps micro-animations.',
        meta: 'WEEK 03 – 04',
      },
      {
        title: 'Cross-Platform Engineering Sprints',
        body: 'Modular Flutter/React Native development with strict state management, API service layers, and local SQLite/Hive persistence.',
        meta: 'WEEK 05 – 09',
      },
      {
        title: 'Field Testing, Profiling & Device Matrix QA',
        body: 'Battery consumption profiling, memory leak detection, network throttling simulations, and automated test runs on physical iOS and Android devices.',
        meta: 'WEEK 10 – 12',
      },
      {
        title: 'App Store Submission & Live Launch',
        body: 'Preparing metadata, screenshots, privacy declarations, TestFlight beta distributions, and managing app store review approvals.',
        meta: 'WEEK 13 – 14',
      },
    ],
    techStack: ['Flutter', 'React Native', 'Dart', 'TypeScript', 'Firebase', 'SQLite', 'Fastlane'],
    imageSeeds: ['glad-mob-1', 'glad-mob-2', 'glad-mob-3', 'glad-mob-4'],
  },
  {
    id: '04',
    slug: 'ai-solutions',
    index: '04',
    title: 'AI Solutions',
    category: 'Applied AI & LLM Systems',
    timeline: '3 – 10 weeks',
    description:
      'LLMs integrated where they create real leverage — support automation, smart search, document workflows and assistants, with strict evaluation guardrails and cost-routing.',
    deliverables: [
      'Hybrid dense-sparse vector RAG retrieval pipelines',
      'Autonomous tool-calling agents with human gates',
      'Deterministic output schemas & Pydantic guardrails',
      'Sub-250ms streaming response optimizations',
      'Automated Ragas / DeepEval regression evaluation harnesses',
    ],
    capabilities: [
      {
        title: 'Enterprise RAG Search Pipelines',
        body: 'Hybrid dense-sparse vector retrieval over enterprise documents, databases, and knowledge bases using pgvector, Cohere reranking, and semantic chunking.',
      },
      {
        title: 'Autonomous Workflow & Task Agents',
        body: 'Multi-step AI agents equipped with deterministic function calling, state machine controllers, and automated human-in-the-loop escalation gates.',
      },
      {
        title: 'Conversational Voice & Chat Interfaces',
        body: 'Low-latency streaming voice and text conversational engines with websocket real-time audio parsing and custom persona prompt engineering.',
      },
      {
        title: 'Document Intelligence & Extraction',
        body: 'Automated OCR, unstructured invoice parsing, and contract entity extraction transforming scanned paperwork into validated JSON schemas.',
      },
    ],
    phases: [
      {
        title: 'Feasibility Audit & Data Architecture',
        body: 'Evaluating token economics, defining quantitative evaluation metrics, and architecting data ingestion pipelines with semantic chunking.',
        meta: 'WEEK 01 – 02',
      },
      {
        title: 'RAG Pipeline & Prompt Engineering',
        body: 'Implementing hybrid vector search, context window optimization, custom rerankers, and deterministic tool-calling schemas.',
        meta: 'WEEK 03 – 05',
      },
      {
        title: 'Guardrails & Automated Evaluation Suites',
        body: 'Building automated LLM evaluation harnesses, hallucination detectors, content safety moderation layers, and latency optimizations.',
        meta: 'WEEK 06 – 08',
      },
      {
        title: 'Production Infrastructure & Scaling',
        body: 'Deploying model caching with Redis, multi-provider token routing (OpenAI/Anthropic/Local LLMs), and continuous telemetry monitoring.',
        meta: 'WEEK 09 – 12',
      },
    ],
    techStack: ['Python', 'FastAPI', 'pgvector', 'LangChain', 'OpenAI', 'Claude', 'LangSmith', 'Docker'],
    imageSeeds: ['glad-ai-1', 'glad-ai-2', 'glad-ai-3', 'glad-ai-4'],
  },
  {
    id: '05',
    slug: 'business-automation',
    index: '05',
    title: 'Business Automation',
    category: 'Operations & Integrations',
    timeline: '2 – 6 weeks',
    description:
      'Custom internal tools and automations that connect the systems you already use and remove manual work from your operations.',
    deliverables: [
      'Self-hosted or cloud n8n integration clusters',
      'Automated lead prospecting & data enrichment pipelines',
      'Bi-directional CRM, ERP, and payment ledger sync',
      'Dead-letter queue error recovery and Slack alerts',
      'Full SOP documentation and pipeline ownership',
    ],
    capabilities: [
      {
        title: 'Lead Sourcing & Enrichment Pipelines',
        body: 'Automate high-volume outbound prospecting by discovering company domains, verifying contact emails, and enriching CRM profiles with structured metadata.',
      },
      {
        title: 'Multi-Platform CRM & ERP Sync',
        body: 'Bi-directional, real-time data synchronization between HubSpot, Salesforce, Notion, Postgres, and proprietary accounting systems with strict deduplication.',
      },
      {
        title: 'Automated Document & Invoice Processing',
        body: 'Extract structured financial tables, tax IDs, and customer line items from incoming email attachments directly into your ERP or payment ledger.',
      },
      {
        title: 'Custom Webhook & Event-Driven Routers',
        body: 'Resilient microservices handling webhook ingestion, exponential backoff retries, and dead-letter queue error recovery across distributed systems.',
      },
    ],
    phases: [
      {
        title: 'Process Discovery & Mapping',
        body: "We audit your team's manual operations, identify data bottlenecks, and blueprint a clear end-to-end integration architecture.",
        meta: 'WEEK 01',
      },
      {
        title: 'Sandbox Pipeline & API Integration',
        body: 'Engineering webhook endpoints, rate-limit throttlers, schema transformers, and connecting testing sandbox environments.',
        meta: 'WEEK 02 – 03',
      },
      {
        title: 'Error Handling & Idempotency Testing',
        body: 'Simulating network partitions, webhook timeouts, and payload malformations to verify automated retry queues and alert dispatches.',
        meta: 'WEEK 04 – 05',
      },
      {
        title: 'Production Cutover & Observability',
        body: 'Live deployment of self-hosted or cloud workflows, real-time Slack/PagerDuty monitoring setup, and comprehensive SOP documentation handoff.',
        meta: 'WEEK 06 – 08',
      },
    ],
    techStack: ['n8n', 'Python', 'Node.js', 'PostgreSQL', 'Redis Queues', 'Docker', 'HubSpot / Salesforce'],
    imageSeeds: ['glad-auto-1', 'glad-auto-2', 'glad-auto-3', 'glad-auto-4'],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}
