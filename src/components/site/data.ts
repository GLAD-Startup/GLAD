import prayasLogo from "@/routes/images/prayas.jpg";
import glaCanteenLogo from "@/routes/images/gla canteen.png";
import earthTravelsLogo from "@/routes/images/earth travels.png";

export type Project = {
  slug: string;
  order: number;
  name: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  outcome?: string;
  stack: string[];
  ledger?: { key: string; value: string; accent?: string }[];
  shots: { src?: string; caption: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
    jsonLd: object[];
  };
};

export const projects: Project[] = [
  {
    slug: "fluxor",
    order: 1,
    name: "Fluxor",
    category: "Desktop Application",
    summary: "Automated Document Orchestration & Asset Classification Engine",
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
    stack: ["Python", "ML models"],
    shots: [
      { caption: "AI-driven file renaming and content analysis engine" },
      { caption: "Batch file processing and automatic folder classification" },
    ],
    seo: {
      title: "Fluxor — GLAD studio",
      description: "Automated Document Orchestration & Asset Classification Engine",
      canonical: "https://gladstudio.net/portfolio/fluxor",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              "@id": "https://gladstudio.net/portfolio/fluxor/#work",
              url: "https://gladstudio.net/portfolio/fluxor",
              name: "Fluxor",
              description: "Automated Document Orchestration & Asset Classification Engine",
              creator: {
                "@id": "https://gladstudio.net/#organization",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/portfolio/fluxor/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gladstudio.net",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://gladstudio.net/portfolio",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Fluxor",
                  item: "https://gladstudio.net/portfolio/fluxor",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "prayas-app",
    order: 2,
    name: "Prayas App",
    category: "Mobile App",
    summary: "Decentralized Medical Inventory Control & Resource Logistics Platform",
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
    stack: ["React Native"],
    shots: [
      { caption: "Blood donation coordination and donor-recipient matching interface" },
      { caption: "Equipment lending management and real-time availability tracking" },
    ],
    seo: {
      title: "Prayas App — GLAD studio",
      description: "Decentralized Medical Inventory Control & Resource Logistics Platform",
      canonical: "https://gladstudio.net/portfolio/prayas-app",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              "@id": "https://gladstudio.net/portfolio/prayas-app/#work",
              url: "https://gladstudio.net/portfolio/prayas-app",
              name: "Prayas App",
              description: "Decentralized Medical Inventory Control & Resource Logistics Platform",
              creator: {
                "@id": "https://gladstudio.net/#organization",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/portfolio/prayas-app/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gladstudio.net",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://gladstudio.net/portfolio",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Prayas App",
                  item: "https://gladstudio.net/portfolio/prayas-app",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "stock-management",
    order: 3,
    name: "Stock Management",
    category: "Full Stack Platform",
    summary: "Multi-Tenant Enterprise Inventory & Supply Chain Orchestration Suite",
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
    stack: ["React Native", "React.js", "Node.js"],
    shots: [
      { caption: "Multi-division inventory tracking dashboard and analytics" },
      { caption: "Admin panel with real-time stock updates and reporting" },
    ],
    seo: {
      title: "Stock Management — GLAD studio",
      description: "Multi-Tenant Enterprise Inventory & Supply Chain Orchestration Suite",
      canonical: "https://gladstudio.net/portfolio/stock-management",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              "@id": "https://gladstudio.net/portfolio/stock-management/#work",
              url: "https://gladstudio.net/portfolio/stock-management",
              name: "Stock Management",
              description: "Multi-Tenant Enterprise Inventory & Supply Chain Orchestration Suite",
              creator: {
                "@id": "https://gladstudio.net/#organization",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/portfolio/stock-management/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gladstudio.net",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://gladstudio.net/portfolio",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Stock Management",
                  item: "https://gladstudio.net/portfolio/stock-management",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "ai-mock-interview",
    order: 4,
    name: "AI Mock Interview",
    category: "AI Product",
    summary: "Low-Latency Conversational AI Technical Assessment Engine",
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
    stack: ["React.js", "FastAPI", "HuggingFace", "MongoDB"],
    shots: [
      { caption: "Role-specific question generation and live AI interview session" },
      { caption: "Confidence analysis, semantic similarity scoring, and evaluation feedback" },
    ],
    seo: {
      title: "AI Mock Interview — GLAD studio",
      description: "Low-Latency Conversational AI Technical Assessment Engine",
      canonical: "https://gladstudio.net/portfolio/ai-mock-interview",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              "@id": "https://gladstudio.net/portfolio/ai-mock-interview/#work",
              url: "https://gladstudio.net/portfolio/ai-mock-interview",
              name: "AI Mock Interview",
              description: "Low-Latency Conversational AI Technical Assessment Engine",
              creator: {
                "@id": "https://gladstudio.net/#organization",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/portfolio/ai-mock-interview/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gladstudio.net",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://gladstudio.net/portfolio",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "AI Mock Interview",
                  item: "https://gladstudio.net/portfolio/ai-mock-interview",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "lead-enrichment",
    order: 5,
    name: "Lead Enrichment",
    category: "Business Automation",
    summary: "High-Throughput Lead Sourcing & Automated Data Cleansing Pipeline",
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
    outcome:
      "Scaled outreach capacity from dozens to thousands of personalized leads per day.",
    stack: ["Python", "n8n", "PostgreSQL"],
    shots: [
      { caption: "Automated lead enrichment and website validation pipeline" },
      { caption: "AI-powered personalized email generation and batch execution engine" },
    ],
    seo: {
      title: "Lead Enrichment — GLAD studio",
      description: "High-Throughput Lead Sourcing & Automated Data Cleansing Pipeline",
      canonical: "https://gladstudio.net/portfolio/lead-enrichment",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              "@id": "https://gladstudio.net/portfolio/lead-enrichment/#work",
              url: "https://gladstudio.net/portfolio/lead-enrichment",
              name: "Lead Enrichment",
              description: "High-Throughput Lead Sourcing & Automated Data Cleansing Pipeline",
              creator: {
                "@id": "https://gladstudio.net/#organization",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/portfolio/lead-enrichment/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gladstudio.net",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://gladstudio.net/portfolio",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Lead Enrichment",
                  item: "https://gladstudio.net/portfolio/lead-enrichment",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "q-safe",
    order: 6,
    name: "Q-SAFE",
    category: "Security Platform",
    summary: "Zero-Knowledge Encrypted Secure File Transmission Portal",
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
    outcome:
      "Enabled secure, scalable document sharing for organizations handling sensitive data.",
    stack: ["Django REST Framework", "PostgreSQL", "Docker"],
    shots: [
      { caption: "Zero-knowledge encrypted file transmission and QR code sharing portal" },
      { caption: "Role-based access control and automated file expiration management" },
    ],
    seo: {
      title: "Q-SAFE — GLAD studio",
      description: "Zero-Knowledge Encrypted Secure File Transmission Portal",
      canonical: "https://gladstudio.net/portfolio/q-safe",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              "@id": "https://gladstudio.net/portfolio/q-safe/#work",
              url: "https://gladstudio.net/portfolio/q-safe",
              name: "Q-SAFE",
              description: "Zero-Knowledge Encrypted Secure File Transmission Portal",
              creator: {
                "@id": "https://gladstudio.net/#organization",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/portfolio/q-safe/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gladstudio.net",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://gladstudio.net/portfolio",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Q-SAFE",
                  item: "https://gladstudio.net/portfolio/q-safe",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  project?: string;
  metric?: string;
  rating?: number;
  logo?: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
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
    verified: false,
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
    verified: false,
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
    verified: false,
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
