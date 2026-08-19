import fluxorThumbnail from "@/routes/images/projects/Fluxor thumbnail.jpeg";
import fluxorNewThumbnail from "@/routes/images/projects/fluxor.png";
import fluxorDescription from "@/routes/images/projects/fluxor description page.jpeg";
import stockMgmtThumbnail from "@/routes/images/projects/stock management thumbnail.png";
import inventoryDashboard from "@/routes/images/projects/What_Is_an_Inventory_Management_Dashboard_6db2051190.jpg";
import inventoryMgmt from "@/routes/images/projects/inventory management.png";
import unifiedInventory from "@/routes/images/projects/unified-inventory-management.webp";
import aiMockThumbnail from "@/routes/images/projects/AI mock interview.png";
import aiMockFeatures from "@/routes/images/projects/ai mock interview features.png";
import aiMockPlatform from "@/routes/images/projects/Top-Must-Have-Features-of-AI-Powered-Interview-Platforms.webp";
import prayasThumbnail from "@/routes/images/projects/prayas thumbnail.jpeg";
import prayasAppImage from "@/routes/images/projects/prayas app.jpeg";
import prayasImage from "@/routes/images/projects/prayas.png";
import leadEnrichmentThumbnail from "@/routes/images/projects/lead_enrichment thumbnail.png";
import leadEnrichmentImage1 from "@/routes/images/projects/69e06961fb9d36867dfcedd7_Lead enrichment_2.png";
import leadEnrichmentImage2 from "@/routes/images/projects/data-enrichment-to-enhance-your-decision-making.jpg";
import qSafeThumbnail from "@/routes/images/projects/qsafe thumbnail.png";
import qSafeImage1 from "@/routes/images/projects/q safe.png";
import qSafeImage2 from "@/routes/images/projects/Top-Secure-File-Transfer-Software-Solutions.webp";
import prayasLogo from "@/routes/images/prayas.jpg";
import glaCanteenLogo from "@/routes/images/gla canteen.png";
import earthTravelsLogo from "@/routes/images/earth travels.png";

export const services = [
  {
    slug: "mvp",
    title: "MVP Development",
    short: "Ship a credible v1 in weeks, not quarters.",
    description:
      "Helping startups launch products quickly and efficiently — from clickable prototype to production-ready MVP. We deliver a high-fidelity, clickable interactive design prototype in Week 2, and deploy your first working staging build in Week 3.",
    benefits: [
      "Validate ideas with real users fast",
      "Investor-ready demos and pitch assets",
      "Production foundations from day one",
    ],
    tech: ["Next.js", "TanStack Start", "Supabase", "Stripe", "Vercel"],
    timeline: "4 – 8 weeks",
  },
  {
    slug: "web",
    title: "Web Application Development",
    short: "Custom dashboards, SaaS, CRM and internal platforms.",
    description:
      "We design and build robust web applications — from analytics dashboards to multi-tenant SaaS — with clean architecture and modern UX. Type-safe, secure platforms structured into predictable fortnightly sprints.",
    benefits: [
      "Type-safe, scalable frontends",
      "Auth, billing & permissions handled",
      "Performance budgets out of the box",
    ],
    tech: ["React 19", "TypeScript", "Postgres", "tRPC", "Tailwind"],
    timeline: "6 – 16 weeks",
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    short: "Cross-platform apps for Android and iOS.",
    description:
      "Single codebase, native feel. We build Flutter applications that ship to both stores with polished UX and offline-first capability. Cross-platform iOS & Android deployment backed by automated CI/CD pipelines.",
    benefits: [
      "One team, two platforms",
      "Native performance and gestures",
      "CI/CD to TestFlight & Play Console",
    ],
    tech: ["Flutter", "Dart", "Firebase", "RevenueCat", "Fastlane"],
    timeline: "8 – 16 weeks",
  },
  {
    slug: "ai",
    title: "AI Solutions",
    short: "Chatbots, agents, RAG and intelligent workflows.",
    description:
      "We integrate LLMs into your product where they create real leverage — support automation, smart search, document workflows and assistants. Fast deployment of context-aware models with strict evaluation guardrails and cost-routing.",
    benefits: [
      "RAG over your own data",
      "Cost-aware model routing",
      "Guardrails, evals and observability",
    ],
    tech: ["OpenAI", "Anthropic", "LangGraph", "pgvector", "Lovable AI"],
    timeline: "3 – 10 weeks",
  },
  {
    slug: "automation",
    title: "Business Automation",
    short: "Cut the busywork your team shouldn't be doing.",
    description:
      "Custom internal tools and automations that connect the systems you already use and remove manual work from your operations. Direct systems integration to eliminate administrative overhead.",
    benefits: [
      "Save dozens of hours per week",
      "Fewer human errors, cleaner data",
      "Integrates with the stack you have",
    ],
    tech: ["Node.js", "n8n", "Zapier", "Postgres", "Webhooks"],
    timeline: "2 – 6 weeks",
  },
] as const;

export const projects = [
  {
    slug: "fluxor",
    name: "Fluxor",
    category: "Desktop Application",
    short: "Automated Document Orchestration & Asset Classification Engine",
    tech: ["Python", "ML models"],
    gradient: "linear-gradient(135deg, #22C55E, #15803D)",
    challenge:
      "Users were spending hours manually organizing, renaming, and sorting files across cluttered directories — a tedious, error-prone process.",
    solution:
      "Built an AI-powered Windows desktop application that automatically analyzes file content and metadata to suggest smart renames and classify files into organized folder structures.",
    features: [
      "AI-driven file renaming",
      "Automatic folder classification",
      "Batch file processing",
      "Smart content analysis",
    ],
    outcome:
      "Reduced file organization time by over 80% for users with large, unstructured directories.",
    thumbnail: fluxorNewThumbnail,
    images: [fluxorDescription, fluxorThumbnail],
  },
  {
    slug: "prayas-app",
    name: "Prayas App",
    category: "Mobile App",
    short: "Decentralized Medical Inventory Control & Resource Logistics Platform",
    tech: ["React Native"],
    gradient: "linear-gradient(135deg, #FACC15, #CA8A04)",
    challenge:
      "Prayas NGO needed a streamlined way to manage health equipment lending and coordinate blood donation drives across their community network.",
    solution:
      "Developed a React Native Android application that connects donors with those in need, manages equipment inventory and lending workflows, and provides real-time coordination for blood donation campaigns.",
    features: [
      "Blood donation coordination",
      "Equipment lending management",
      "Donor-recipient matching",
      "Real-time availability tracking",
    ],
    outcome:
      "Enabled Prayas NGO to digitize their operations and serve their community more efficiently.",
    thumbnail: prayasImage,
    images: [prayasAppImage, prayasThumbnail],
  },
  {
    slug: "stock-management",
    name: "Stock Management",
    category: "Full Stack Platform",
    short: "Multi-Tenant Enterprise Inventory & Supply Chain Orchestration Suite",
    tech: ["React Native", "React.js", "Node.js"],
    gradient: "linear-gradient(135deg, #A3E635, #4D7C0F)",
    challenge:
      "A business with multiple sub-divisions was struggling to track inventory across departments using disconnected spreadsheets and manual processes.",
    solution:
      "Built a comprehensive stock management ecosystem — a React Native mobile app for on-the-ground inventory tracking, a web application for managers, and a full admin panel for oversight and reporting.",
    features: [
      "Cross-platform mobile & web apps",
      "Admin panel with reporting",
      "Multi-division inventory tracking",
      "Real-time stock updates",
    ],
    outcome:
      "Unified inventory visibility across all business divisions, eliminating stock discrepancies.",
    thumbnail: stockMgmtThumbnail,
    images: [inventoryDashboard, inventoryMgmt, unifiedInventory],
  },
  {
    slug: "ai-mock-interview",
    name: "AI Mock Interview",
    category: "AI Product",
    short: "Low-Latency Conversational AI Technical Assessment Engine",
    tech: ["React.js", "FastAPI", "HuggingFace", "MongoDB"],
    gradient: "linear-gradient(135deg, #22C55E, #FACC15)",
    challenge:
      "Job seekers lacked access to realistic, on-demand interview practice with meaningful feedback beyond generic question banks.",
    solution:
      "Built an AI-powered platform that generates role-specific questions using LLMs, evaluates candidate responses with semantic similarity analysis, and provides detailed scoring, confidence analysis, and improvement suggestions.",
    features: [
      "Role-specific question generation",
      "AI-based answer scoring & evaluation",
      "Confidence analysis & feedback",
      "Semantic similarity matching",
    ],
    outcome:
      "Enabled candidates to practice with realistic, AI-evaluated interviews anytime, anywhere.",
    thumbnail: aiMockThumbnail,
    images: [aiMockFeatures, aiMockPlatform],
  },
  {
    slug: "lead-enrichment",
    name: "Lead Enrichment",
    category: "Business Automation",
    short: "High-Throughput Lead Sourcing & Automated Data Cleansing Pipeline",
    tech: ["Python", "n8n", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #09090B, #22C55E)",
    challenge:
      "Sales teams were manually researching leads, validating websites, and crafting outreach emails — a process that couldn't scale beyond a handful of prospects per day.",
    solution:
      "Developed an automated platform that collects and enriches lead data, identifies decision-makers, validates websites, deduplicates records, and generates personalized AI-powered outreach campaigns using batch jobs and async workflows.",
    features: [
      "Automated lead enrichment",
      "Website validation & deduplication",
      "AI-powered email generation",
      "Scalable batch processing",
    ],
    outcome: "Scaled outreach capacity from dozens to thousands of personalized leads per day.",
    thumbnail: leadEnrichmentThumbnail,
    images: [leadEnrichmentImage1, leadEnrichmentImage2],
  },
  {
    slug: "q-safe",
    name: "Q-SAFE",
    category: "Security Platform",
    short: "Zero-Knowledge Encrypted Secure File Transmission Portal",
    tech: ["Django REST Framework", "PostgreSQL", "Docker"],
    gradient: "linear-gradient(135deg, #09090B, #FACC15)",
    challenge:
      "Organizations needed a secure, self-hosted way to share sensitive documents without relying on third-party services that lacked fine-grained access controls.",
    solution:
      "Built a secure file-sharing platform enabling encrypted file transfer through links and QR codes, with JWT-based authentication, role-based access control, Redis caching, Celery background processing, and automated cleanup tasks.",
    features: [
      "Encrypted file transfer via links & QR",
      "JWT auth & role-based access control",
      "Background processing with Celery",
      "Automated file cleanup & expiration",
    ],
    outcome: "Enabled secure, scalable document sharing for organizations handling sensitive data.",
    thumbnail: qSafeThumbnail,
    images: [qSafeImage1, qSafeImage2],
  },
] as const;

export const testimonials = [
  {
    quote:
      "The Prayas App transformed how we coordinate blood donations and health equipment lending. It's now the backbone of our community outreach.",
    name: "Prayas NGO Team",
    role: "Community Leaders",
    company: "Prayas NGO",
    project: "Health & Community App",
    metric: "10,000+ Community Reach",
    rating: 5,
    logo: prayasLogo,
  },
  {
    quote:
      "GLA Canteen Stock Management transformed our daily inventory tracking and order workflow, giving us clear visibility into stock levels and sales.",
    name: "Rakesh Khetan",
    role: "Owner & Operator",
    company: "GLA Canteen",
    project: "POS & Inventory System",
    metric: "Zero Stock Discrepancies",
    rating: 5,
    logo: glaCanteenLogo,
  },
  {
    quote:
      "The website developed for Earth Travels India presents our travel packages and services beautifully, significantly elevating our online presence.",
    name: "Nitesh Khandelwal",
    role: "Founder & Director",
    company: "Earth Travels India",
    project: "Travel & Booking Portal",
    metric: "3x Online Inquiries",
    rating: 5,
    logo: earthTravelsLogo,
  },
];

export const faqs = [
  {
    q: "How much does a typical project cost?",
    a: "Every project is custom-scoped based on your specific requirements, feature complexity, and timeline. We work on a transparent, fixed-price milestone basis — meaning after an initial discovery call, you receive a detailed proposal with a fixed quote and guaranteed delivery timeline before any code is written.",
  },
  {
    q: "How fast can you start?",
    a: "Most projects begin within 1–2 weeks of signing. For urgent work, we can sometimes start within a few days.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes — most of our clients are non-technical. We translate ideas into clear technical specifications, user-friendly designs, and shipped products, ensuring you always understand the trade-offs at every step.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You own 100% of all intellectual property, source code, designs, and project assets from day one. Upon final milestone completion, full repository access and credentials are handed over.",
  },
  {
    q: "How do we track progress during development?",
    a: "We work in structured 2-week sprints with weekly async updates, active messaging channels (Slack/Discord), and direct access to a live staging environment so you can test features as they are built.",
  },
  {
    q: "Can you build on top of our existing codebase or tech stack?",
    a: "Yes. Whether upgrading an existing application, refactoring legacy code, or integrating new AI features and third-party APIs, we can seamlessly audit and build directly within your current codebase.",
  },
  {
    q: "What tech stack do you specialize in?",
    a: "We focus on modern, type-safe, and scalable web and mobile stacks — primarily React, Next.js, TanStack Start, TypeScript, Node.js, Python, Flutter, Tailwind CSS, and cloud platforms like AWS and Vercel.",
  },
  {
    q: "What happens after launch?",
    a: "We provide dedicated post-launch support for bug fixes, performance monitoring, and maintenance. Many of our clients continue working with us long-term as their dedicated development team.",
  },
];
