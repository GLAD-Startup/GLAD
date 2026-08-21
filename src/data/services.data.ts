export type ServiceCapability = { title: string; body: string };
export type ServicePhase = { title: string; body: string; meta: string };
export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  order: number;
  name: string;
  navLabel: string;
  categoryBadge: string;
  h1: string;
  intro: string;
  timeline: string;
  ledger: { key: string; value: string; accent?: string }[];
  capabilitiesHeading: string;
  capabilitiesIntro?: string;
  capabilities: ServiceCapability[];
  methodologyHeading: string;
  methodologyIntro?: string;
  phases: ServicePhase[];
  stack: { group: string; items: string[] }[];
  caseStudySlug?: string;
  faqHeading: string;
  faqs: ServiceFAQ[];
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    jsonLd: object[];
  };
};

export const services: Service[] = [
  // ── 1. MVP Development ──────────────────────────────────
  {
    slug: "mvp-development",
    order: 1,
    name: "MVP Development",
    navLabel: "MVP Development",
    categoryBadge: "MVP Development India",
    h1: "MVP Development for Startups and Businesses",
    intro:
      "Turn validated product concepts and business requirements into production-ready web, mobile, and SaaS MVPs. GLAD Studio engineers high-velocity, scalable digital products backed by senior engineers, type-safe architectures, and 100% intellectual property ownership.",
    timeline: "4 – 8 WEEKS",
    ledger: [
      { key: "Interactive Prototype", value: "Week 02", accent: "clickable flow" },
      { key: "Working Staging Build", value: "Week 03", accent: "live demo" },
      { key: "Codebase Ownership", value: "100", accent: "% client owned" },
      { key: "Target Launch Window", value: "4–8", accent: "weeks" },
      { key: "Engineering Level", value: "Senior", accent: "only" },
    ],
    capabilitiesHeading: "What Kind of MVPs We Build",
    capabilitiesIntro:
      "We specialize in custom MVP development for ambitious startups and businesses seeking to validate product-market fit, onboard early adopters, and secure funding with a credible, high-performance product.",
    capabilities: [
      {
        title: "SaaS & Web Application MVPs",
        body: "Full-stack multi-tenant web applications engineered with React, TypeScript, PostgreSQL, and secure role-based access control.",
      },
      {
        title: "Cross-Platform Mobile MVPs",
        body: "Native-feel iOS and Android mobile applications built on Flutter with offline-first local caching and push notifications.",
      },
      {
        title: "AI & LLM-Powered MVPs",
        body: "Intelligent software systems integrating OpenAI, Claude, LangChain, or custom RAG pipelines to automate complex workflows.",
      },
      {
        title: "Workflow & Internal Tool MVPs",
        body: "Custom business portals and automated operations backends replacing fragile manual spreadsheets and legacy systems.",
      },
    ],
    methodologyHeading: "Our 5-Phase MVP Engineering Process",
    methodologyIntro:
      "We eliminate ambiguity through structured sprint cycles, transparent architectural blueprints, and rapid staging environment deployments.",
    phases: [
      {
        title: "Product Scope & Technical Blueprinting",
        body: "We dissect your product vision, eliminate non-essential features, and define the core technical architecture, entity-relationship diagrams, and API boundaries.",
        meta: "WEEK 01",
      },
      {
        title: "Interactive Wireframes & UI Prototyping",
        body: "Our team designs high-fidelity, clickable prototypes demonstrating complete user flows, navigation states, and micro-interactions before code is written.",
        meta: "WEEK 02",
      },
      {
        title: "Sprint-Based Engineering & Integration",
        body: "Senior engineers build frontend interfaces and backend services in structured fortnightly sprints with continuous staging environment updates.",
        meta: "WEEK 03 – 04",
      },
      {
        title: "Quality Assurance, Security & Performance",
        body: "Rigorous end-to-end testing, vulnerability scanning, SQL query optimization, and Lighthouse web vitals audits ensure launch-day stability.",
        meta: "WEEK 05",
      },
      {
        title: "Production Deployment & Handoff",
        body: "We deploy your production infrastructure with automated CI/CD pipelines, configure domain DNS and monitoring, and transfer complete IP and repository access.",
        meta: "WEEK 06 – 08",
      },
    ],
    stack: [
      { group: "Frontend", items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "TanStack"] },
      { group: "Backend & DB", items: ["Node.js", "Python", "PostgreSQL", "Supabase", "Redis"] },
      { group: "Mobile & Cloud", items: ["Flutter", "React Native", "AWS", "Vercel", "Docker"] },
    ],
    caseStudySlug: "stock-management",
    faqHeading: "MVP Development Insights & Answers",
    faqs: [
      {
        q: "What is MVP development?",
        a: "MVP development is the process of engineering a functional, early version of a software product containing core features needed to validate market demand with real users. By focusing strictly on high-impact capabilities, businesses minimize development risk and accelerate time to market.",
      },
      {
        q: "Why choose GLAD Studio for MVP development in India?",
        a: "GLAD Studio delivers production-grade software engineering combining rapid product prototyping, scalable database design, clean TypeScript and Python codebases, and complete intellectual property ownership. We operate as an embedded senior engineering partner rather than a transactional outsourcing agency.",
      },
      {
        q: "What deliverables are included in an MVP build?",
        a: "Every GLAD Studio MVP includes fully documented source code, production database schemas, secure authentication, API endpoints, CI/CD automated deployments, and administrative controls. You receive a fully functioning, launch-ready application without vendor lock-in.",
      },
      {
        q: "How does GLAD Studio ensure MVP architecture scales after launch?",
        a: "We architect MVPs using modular component hierarchies, strict type safety, PostgreSQL relational schemas, and containerized backends that allow seamless feature expansion without costly rewrites. The foundations established in the MVP directly support subsequent v2 and enterprise iterations.",
      },
      {
        q: "Can GLAD develop both SaaS and mobile MVPs?",
        a: "Yes, GLAD Studio engineers multi-tenant SaaS web platforms with automated billing and cross-platform mobile MVPs using Flutter and React Native. Both platforms share unified backend APIs, maintaining consistent business rules and synchronized data.",
      },
      {
        q: "Who owns the intellectual property and code of the MVP?",
        a: "You retain 100% ownership of all source code, database architectures, digital assets, and intellectual property created during the engagement. All repositories, cloud credentials, and design artifacts are transferred directly to your organization.",
      },
    ],
    seo: {
      title: "MVP Development in India | GLAD Studio",
      description:
        "Custom MVP development for startups and businesses. GLAD Studio designs and engineers scalable web, mobile and SaaS MVPs from product concept to launch.",
      canonical: "https://gladstudio.net/services/mvp-development",
      ogImage: "https://gladstudio.net/og-image.png",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/mvp-development/#webpage",
              url: "https://gladstudio.net/services/mvp-development",
              name: "MVP Development in India | GLAD Studio",
              description:
                "Custom MVP development for startups and businesses. GLAD Studio designs and engineers scalable web, mobile and SaaS MVPs from product concept to launch.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/mvp-development/#breadcrumb",
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
                  name: "Services",
                  item: "https://gladstudio.net/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "MVP Development",
                  item: "https://gladstudio.net/services/mvp-development",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/mvp-development/#service",
              name: "MVP Development",
              serviceType: "Minimum Viable Product Engineering",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Custom MVP development company in India building production-ready web applications, SaaS platforms, and mobile apps for startups and growing businesses.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/mvp-development/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is MVP development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "MVP development is the process of engineering a functional, early version of a software product containing core features needed to validate market demand with real users.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why choose GLAD Studio for MVP development in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "GLAD Studio delivers production-grade software engineering combining rapid product prototyping, scalable database design, clean TypeScript and Python codebases, and complete intellectual property ownership.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What deliverables are included in an MVP build?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Every GLAD Studio MVP includes fully documented source code, production database schemas, secure authentication, API endpoints, CI/CD automated deployments, and administrative controls.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does GLAD Studio ensure MVP architecture scales after launch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We architect MVPs using modular component hierarchies, strict type safety, PostgreSQL relational schemas, and containerized backends that allow seamless feature expansion without costly rewrites.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD develop both SaaS and mobile MVPs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, GLAD Studio engineers multi-tenant SaaS web platforms with automated billing and cross-platform mobile MVPs using Flutter and React Native.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who owns the intellectual property and code of the MVP?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You retain 100% ownership of all source code, database architectures, digital assets, and intellectual property created during the engagement.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },

  // ── 2. Web Application Development ─────────────────────
  {
    slug: "web-application-development",
    order: 2,
    name: "Web Application Development",
    navLabel: "Web Applications",
    categoryBadge: "Enterprise Web Engineering",
    h1: "Custom Web Application Development",
    intro:
      "GLAD Studio builds custom web applications and SaaS platforms for businesses, startups, and product teams. We engineer type-safe, multi-tenant digital systems combining modern React frontends, robust Python and Node.js APIs, and relational PostgreSQL data architectures.",
    timeline: "6 – 16 WEEKS",
    ledger: [
      { key: "Architecture", value: "Type-Safe", accent: "React 19 & TS" },
      { key: "Database Standard", value: "PostgreSQL", accent: "relational integrity" },
      { key: "Sprint Cadence", value: "2", accent: "weeks" },
      { key: "Codebase Ownership", value: "100", accent: "% client owned" },
      { key: "Test Coverage", value: "E2E", accent: "automated suites" },
    ],
    capabilitiesHeading: "Web Applications Engineered for Enterprise Demands",
    capabilitiesIntro:
      "From multi-tenant SaaS architectures to high-throughput internal analytics platforms, we engineer scalable, mission-critical web applications tailored to your business logic.",
    capabilities: [
      {
        title: "Multi-Tenant SaaS Platforms",
        body: "Scalable SaaS applications with row-level security, tenant data isolation, automated billing, and self-service onboarding flows.",
      },
      {
        title: "Enterprise Portals & Backends",
        body: "High-security business management portals, customer dashboards, and internal operations tools replacing legacy software.",
      },
      {
        title: "High-Throughput API Services",
        body: "REST and GraphQL microservices engineered for sub-100ms response times, rate-limiting, and resilient database connection pooling.",
      },
      {
        title: "Real-Time Collaborative Dashboards",
        body: "Interactive analytics workspaces powered by WebSockets, background queue workers, and low-latency state synchronization.",
      },
    ],
    methodologyHeading: "Core Technical Foundations We Build Into Every App",
    methodologyIntro:
      "We build resilient web software using industry-standard engineering best practices, ensuring long-term maintainability and zero vendor lock-in.",
    phases: [
      {
        title: "Domain Modeling & Schema Engineering",
        body: "Normalized PostgreSQL database schemas with indexed foreign keys, automated migration pipelines, and zero data redundancy.",
        meta: "WEEK 01 – 02",
      },
      {
        title: "Component Architecture & Design System",
        body: "Design token implementation, atomic component hierarchy, WCAG accessibility compliance, and responsive layouts across all viewports.",
        meta: "WEEK 03 – 04",
      },
      {
        title: "Full-Stack API & State Integration",
        body: "End-to-end type safety connecting React client state with backend controllers, automated auth validation, and resilient error boundaries.",
        meta: "WEEK 05 – 10",
      },
      {
        title: "Performance Optimization & Hardening",
        body: "Database query optimization, server-side caching with Redis, Lighthouse performance audits, and comprehensive automated end-to-end testing.",
        meta: "WEEK 11 – 14",
      },
      {
        title: "Cloud Infrastructure Deployment",
        body: "Production deployment with automated CI/CD pipelines, SSL certificates, container orchestration, and continuous uptime monitoring.",
        meta: "WEEK 15 – 16",
      },
    ],
    stack: [
      { group: "Frontend Stack", items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Router"] },
      { group: "Backend & Data", items: ["Node.js", "Python / FastAPI", "PostgreSQL", "Supabase", "Redis"] },
      { group: "DevOps & Cloud", items: ["Docker", "AWS", "Vercel", "GitHub Actions", "Cloudflare"] },
    ],
    caseStudySlug: "settledesk",
    faqHeading: "Web Application Development FAQs",
    faqs: [
      {
        q: "What technologies does GLAD Studio use for custom web application development?",
        a: "We engineer web applications using React 19, TypeScript, TanStack Start, Next.js, Node.js, Python (FastAPI/Django), and PostgreSQL. Our tech stack is chosen for exceptional performance, strong typing, maintainability, and long-term ecosystem stability.",
      },
      {
        q: "How does GLAD Studio ensure web application security and data isolation?",
        a: "We implement defense-in-depth security including PostgreSQL Row-Level Security (RLS) for multi-tenant isolation, parameterized SQL queries to prevent injection, JWT-based RBAC authentication, CSRF protections, automated secret scanning, and end-to-end TLS encryption.",
      },
      {
        q: "Can GLAD Studio build multi-tenant SaaS platforms with automated billing?",
        a: "Yes, we specialize in multi-tenant SaaS architectures featuring automated subscription lifecycle management with Stripe and Razorpay, team seat licensing, granular role permissions, and tenant-scoped data partitioning.",
      },
      {
        q: "How long does it take to develop a custom web application?",
        a: "Typical custom web applications require 6 to 16 weeks depending on scope, feature complexity, third-party integrations, and testing requirements. We work in structured fortnightly sprints with working staging builds delivered regularly.",
      },
      {
        q: "Who owns the code and intellectual property of the web application?",
        a: "You own 100% of all intellectual property, source code, database architectures, and digital assets. Upon project completion and milestone sign-offs, full repository access and cloud credentials are transferred directly to you.",
      },
      {
        q: "Do you provide post-launch maintenance, SLAs, and technical support?",
        a: "Yes, GLAD Studio offers ongoing engineering support, uptime monitoring, security patching, database optimization, and continuous feature development through dedicated maintenance retainers.",
      },
    ],
    seo: {
      title: "Web Application Development Company in India | GLAD Studio",
      description:
        "Custom web application development services in India. GLAD Studio builds scalable, secure SaaS platforms, dashboards, and enterprise web applications.",
      canonical: "https://gladstudio.net/services/web-application-development",
      ogImage: "https://gladstudio.net/og-image.png",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/web-application-development/#webpage",
              url: "https://gladstudio.net/services/web-application-development",
              name: "Web Application Development Company in India | GLAD Studio",
              description:
                "Custom web application development services in India. GLAD Studio builds scalable, secure SaaS platforms, dashboards, and enterprise web applications.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/web-application-development/#breadcrumb",
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
                  name: "Services",
                  item: "https://gladstudio.net/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Web Application Development",
                  item: "https://gladstudio.net/services/web-application-development",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/web-application-development/#service",
              name: "Custom Web Application Development",
              serviceType: "Web Application Engineering & SaaS Development",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Enterprise-grade custom web application development agency in India building scalable SaaS platforms, client portals, and bespoke management systems.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/web-application-development/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What technologies does GLAD Studio use for custom web application development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We engineer web applications using React 19, TypeScript, TanStack Start, Next.js, Node.js, Python (FastAPI/Django), and PostgreSQL.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does GLAD Studio ensure web application security and data isolation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We implement defense-in-depth security including PostgreSQL Row-Level Security (RLS) for multi-tenant isolation, parameterized queries, JWT-based RBAC authentication, and end-to-end TLS encryption.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD Studio build multi-tenant SaaS platforms with automated billing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we specialize in multi-tenant SaaS architectures featuring automated subscription lifecycle management with Stripe and Razorpay, team seat licensing, and tenant-scoped data partitioning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to develop a custom web application?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Typical custom web applications require 6 to 16 weeks depending on scope, feature complexity, and integrations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who owns the code and intellectual property of the web application?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You own 100% of all intellectual property, source code, database architectures, and digital assets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide post-launch maintenance, SLAs, and technical support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, GLAD Studio offers ongoing engineering support, uptime monitoring, security patching, and continuous feature development through dedicated maintenance retainers.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },

  // ── 3. Mobile App Development ───────────────────────────
  {
    slug: "mobile-app-development",
    order: 3,
    name: "Mobile App Development",
    navLabel: "Mobile Apps",
    categoryBadge: "Cross-Platform Engineering",
    h1: "Custom Mobile App Development",
    intro:
      "GLAD Studio builds custom mobile applications for startups and businesses using modern cross-platform and native-compatible development approaches. We deliver polished iOS and Android apps engineered with Flutter, offline-first data sync, and high-security authentication.",
    timeline: "8 – 14 WEEKS",
    ledger: [
      { key: "Target Platforms", value: "iOS & Android", accent: "single codebase" },
      { key: "Offline Reliability", value: "100", accent: "% local sync" },
      { key: "App Store Approvals", value: "Guaranteed", accent: "end-to-end" },
      { key: "Delivery Timeline", value: "8–14", accent: "weeks" },
      { key: "Codebase Ownership", value: "Full", accent: "IP transfer" },
    ],
    capabilitiesHeading: "Cross-Platform Mobile Apps Built for Reliability",
    capabilitiesIntro:
      "We design and build production-grade mobile applications with responsive touch interactions, native device hardware integrations, and offline-first data synchronization.",
    capabilities: [
      {
        title: "Cross-Platform Flutter & React Native Apps",
        body: "High-performance applications built from a single codebase for iOS and Android, cutting development timelines by 40% while preserving native UX.",
      },
      {
        title: "Offline-First Data Synchronization",
        body: "Local SQLite caching with conflict-free background data synchronization, enabling full application usability in low-connectivity field environments.",
      },
      {
        title: "Hardware Integration & Device Sensors",
        body: "Seamless integration with device camera, Bluetooth Low Energy, GPS geolocation, push notifications, and biometric authentication.",
      },
      {
        title: "End-to-End App Store Submissions",
        body: "Comprehensive Apple App Store and Google Play Store compliance, guideline review preparation, and automated release pipeline setup.",
      },
    ],
    methodologyHeading: "How We Build & Launch Mobile Applications",
    methodologyIntro:
      "Our structured mobile engineering lifecycle ensures complete code quality, security audits, and smooth app store review approvals.",
    phases: [
      {
        title: "Mobile Architecture & Native Bridge Mapping",
        body: "Defining client-server protocols, offline sync logic, local storage schemas, and native platform integration contracts.",
        meta: "WEEK 01 – 02",
      },
      {
        title: "Interactive UX Flows & Mobile Design Tokens",
        body: "Touch-optimized design systems following iOS Human Interface Guidelines and Google Material 3 standards with 60fps micro-animations.",
        meta: "WEEK 03 – 04",
      },
      {
        title: "Cross-Platform Engineering Sprints",
        body: "Modular Flutter/React Native development with strict state management, API service layers, and local SQLite/Hive persistence.",
        meta: "WEEK 05 – 09",
      },
      {
        title: "Field Testing, Profiling & Device Matrix QA",
        body: "Battery consumption profiling, memory leak detection, network throttling simulations, and automated test runs on physical iOS and Android devices.",
        meta: "WEEK 10 – 12",
      },
      {
        title: "App Store Submission & Live Launch",
        body: "Preparing metadata, screenshots, privacy declarations, TestFlight beta distributions, and managing app store review approvals.",
        meta: "WEEK 13 – 14",
      },
    ],
    stack: [
      { group: "Mobile Frameworks", items: ["Flutter", "React Native", "Dart", "TypeScript", "Kotlin / Swift"] },
      { group: "Local Storage & State", items: ["SQLite", "Hive", "WatermelonDB", "Riverpod", "Zustand"] },
      { group: "Cloud & Distribution", items: ["Firebase", "Supabase", "Fastlane", "App Store Connect", "Play Console"] },
    ],
    caseStudySlug: "prayas-app",
    faqHeading: "Mobile App Development Q&A",
    faqs: [
      {
        q: "Should I build a cross-platform or native mobile app?",
        a: "For over 90% of startups and commercial products, modern cross-platform engineering (Flutter or React Native) is the optimal choice. It provides near-identical 60fps performance and native feel while slashing development cost and maintenance overhead by maintaining a single unified codebase.",
      },
      {
        q: "How does GLAD Studio handle offline-first mobile app functionality?",
        a: "We engineer local embedded databases (SQLite or Hive) that store user actions and transactional data on the device. When connectivity is restored, automated background sync workers reconcile changes with conflict-resolution strategies.",
      },
      {
        q: "Do you handle the Apple App Store and Google Play review process?",
        a: "Yes, our team manages the complete submission process end-to-end: generating distribution builds, preparing compliance documentation and privacy labels, managing TestFlight betas, and addressing any app store reviewer inquiries until public approval.",
      },
      {
        q: "How much does custom mobile app development cost?",
        a: "Mobile app development costs depend on feature complexity, backend integration requirements, device hardware access, and offline data sync needs. We provide transparent, fixed-scope proposals with milestone-based billing.",
      },
      {
        q: "Who owns the mobile app source code and developer accounts?",
        a: "You retain 100% ownership of all source code, design assets, and app store listings. All apps are published under your organization's Apple Developer and Google Play Developer accounts.",
      },
      {
        q: "How do you handle mobile app updates and post-launch maintenance?",
        a: "We configure automated CI/CD pipelines with Fastlane for rapid over-the-air updates and provide ongoing maintenance retainers for OS version upgrades, API adaptations, and feature iterations.",
      },
    ],
    seo: {
      title: "Mobile App Development Company in India | GLAD Studio",
      description:
        "Custom mobile app development services in India. GLAD Studio designs and engineers cross-platform Flutter and React Native mobile applications for iOS and Android.",
      canonical: "https://gladstudio.net/services/mobile-app-development",
      ogImage: "https://gladstudio.net/og-image.png",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/mobile-app-development/#webpage",
              url: "https://gladstudio.net/services/mobile-app-development",
              name: "Mobile App Development Company in India | GLAD Studio",
              description:
                "Custom mobile app development services in India. GLAD Studio designs and engineers cross-platform Flutter and React Native mobile applications for iOS and Android.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/mobile-app-development/#breadcrumb",
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
                  name: "Services",
                  item: "https://gladstudio.net/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Mobile App Development",
                  item: "https://gladstudio.net/services/mobile-app-development",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/mobile-app-development/#service",
              name: "Custom Mobile App Development",
              serviceType: "Mobile Application Engineering (iOS & Android)",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Professional mobile app development company in India specializing in cross-platform Flutter and React Native mobile applications with offline-first synchronization.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/mobile-app-development/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Should I build a cross-platform or native mobile app?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For over 90% of startups and commercial products, modern cross-platform engineering (Flutter or React Native) is the optimal choice.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does GLAD Studio handle offline-first mobile app functionality?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We engineer local embedded databases (SQLite or Hive) that store user actions and transactional data on the device.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle the Apple App Store and Google Play review process?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our team manages the complete submission process end-to-end.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does custom mobile app development cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mobile app development costs depend on feature complexity, backend integration requirements, device hardware access, and offline data sync needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who owns the mobile app source code and developer accounts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You retain 100% ownership of all source code, design assets, and app store listings.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you handle mobile app updates and post-launch maintenance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We configure automated CI/CD pipelines with Fastlane for rapid over-the-air updates and provide ongoing maintenance retainers.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },

  // ── 4. AI Solutions ─────────────────────────────────────
  {
    slug: "ai-solutions",
    order: 4,
    name: "AI Solutions and Development",
    navLabel: "AI Solutions",
    categoryBadge: "Applied AI Engineering",
    h1: "AI Solutions and Development",
    intro:
      "GLAD Studio engineers custom AI solutions that connect frontier language models with proprietary business data, APIs, and operational workflows. We build production-ready LLM applications, RAG search pipelines, autonomous AI agents, and computer vision systems backed by deterministic guardrails and cost-optimized routing.",
    timeline: "4 – 12 WEEKS",
    ledger: [
      { key: "Latency Benchmark", value: "< 250", accent: "ms streaming" },
      { key: "Retrieval Architecture", value: "Hybrid", accent: "dense + sparse" },
      { key: "Hallucination Control", value: "Strict", accent: "eval suites" },
      { key: "Deployment Timeline", value: "4–12", accent: "weeks" },
      { key: "Model Portability", value: "100", accent: "% provider agnostic" },
    ],
    capabilitiesHeading: "Production AI Systems Engineered for Real-World Demands",
    capabilitiesIntro:
      "We turn speculative AI concepts into reliable, deterministic software systems with robust evaluation suites, secure data isolation, and low-latency response times.",
    capabilities: [
      {
        title: "Enterprise RAG Search Pipelines",
        body: "Hybrid dense-sparse vector retrieval over enterprise documents, databases, and knowledge bases using pgvector, Cohere reranking, and semantic chunking.",
      },
      {
        title: "Autonomous Workflow & Task Agents",
        body: "Multi-step AI agents equipped with deterministic function calling, state machine controllers, and automated human-in-the-loop escalation gates.",
      },
      {
        title: "Conversational Voice & Chat Interfaces",
        body: "Low-latency streaming voice and text conversational engines with websocket real-time audio parsing and custom persona prompt engineering.",
      },
      {
        title: "Document Intelligence & Extraction",
        body: "Automated OCR, unstructured invoice parsing, and contract entity extraction transforming scanned paperwork into validated JSON schemas.",
      },
    ],
    methodologyHeading: "Our 4-Stage AI Engineering Process",
    methodologyIntro:
      "We follow a rigorous, empirical approach to AI systems development that prioritizes deterministic output quality, security, and cost efficiency.",
    phases: [
      {
        title: "Feasibility Audit & Data Architecture",
        body: "Evaluating token economics, defining quantitative evaluation metrics, and architecting data ingestion pipelines with semantic chunking.",
        meta: "WEEK 01 – 02",
      },
      {
        title: "RAG Pipeline & Prompt Engineering",
        body: "Implementing hybrid vector search, context window optimization, custom rerankers, and deterministic tool-calling schemas.",
        meta: "WEEK 03 – 05",
      },
      {
        title: "Guardrails & Automated Evaluation Suites",
        body: "Building automated LLM evaluation harnesses, hallucination detectors, content safety moderation layers, and latency optimizations.",
        meta: "WEEK 06 – 08",
      },
      {
        title: "Production Infrastructure & Scaling",
        body: "Deploying model caching with Redis, multi-provider token routing (OpenAI/Anthropic/Local LLMs), and continuous telemetry monitoring.",
        meta: "WEEK 09 – 12",
      },
    ],
    stack: [
      { group: "AI & LLM Frameworks", items: ["OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex", "Ollama"] },
      { group: "Vector DB & Search", items: ["PostgreSQL / pgvector", "Qdrant", "Pinecone", "Cohere Rerank", "BM25"] },
      { group: "Backend & Eval", items: ["FastAPI", "Python", "LangSmith", "Ragas", "Docker"] },
    ],
    caseStudySlug: "fluxor",
    faqHeading: "AI Solutions & Engineering Q&A",
    faqs: [
      {
        q: "What is Retrieval-Augmented Generation (RAG) and why is it useful?",
        a: "RAG is an architectural pattern that connects language models with your organization's private documents, databases, and knowledge repositories. Instead of relying solely on general training data, the model retrieves verified context from your data before answering, preventing hallucinations and ensuring up-to-date responses.",
      },
      {
        q: "How does GLAD Studio prevent hallucinations and ensure AI output accuracy?",
        a: "We implement deterministic guardrails including strict JSON schema enforcement, hybrid retrieval (combining semantic vector search with keyword BM25 indexing), reranking models, automated regression evaluation suites (using Ragas/DeepEval), and citation verification.",
      },
      {
        q: "Can GLAD Studio build on-premise or private cloud AI solutions?",
        a: "Yes, we engineer self-hosted AI systems using open-source models (Llama 3, Mistral, Qwen) deployed on your private VPC or on-premise GPU infrastructure, ensuring complete data residency and regulatory compliance.",
      },
      {
        q: "How do you manage AI API token costs and latency at scale?",
        a: "We optimize production token economics through semantic caching (avoiding duplicate model invocations), prompt compression, hierarchical routing (using smaller models for classification and larger models only for complex reasoning), and streaming responses.",
      },
      {
        q: "Can AI agents take automated actions in our external software systems?",
        a: "Yes, we build AI agents with secure function-calling capabilities that interact with third-party APIs (Stripe, HubSpot, Jira, Slack, Salesforce), validated by strict schema constraints and human-in-the-loop confirmation gates for critical operations.",
      },
      {
        q: "Who owns the fine-tuned models, prompts, and intellectual property?",
        a: "You retain 100% ownership of all custom prompts, training datasets, vector embeddings, fine-tuned weights, source code, and integration pipelines. GLAD Studio transfers complete IP ownership upon milestone completion.",
      },
    ],
    seo: {
      title: "AI Solutions & Development Services in India | GLAD Studio",
      description:
        "Custom AI solutions and software development in India. GLAD Studio engineers enterprise RAG pipelines, autonomous AI agents, LLM applications, and voice AI.",
      canonical: "https://gladstudio.net/services/ai-solutions",
      ogImage: "https://gladstudio.net/og-image.png",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/ai-solutions/#webpage",
              url: "https://gladstudio.net/services/ai-solutions",
              name: "AI Solutions & Development Services in India | GLAD Studio",
              description:
                "Custom AI solutions and software development in India. GLAD Studio engineers enterprise RAG pipelines, autonomous AI agents, LLM applications, and voice AI.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/ai-solutions/#breadcrumb",
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
                  name: "Services",
                  item: "https://gladstudio.net/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "AI Solutions",
                  item: "https://gladstudio.net/services/ai-solutions",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/ai-solutions/#service",
              name: "Custom AI Solutions & LLM Engineering",
              serviceType: "Artificial Intelligence Software Development",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Applied AI engineering company in India designing production-ready LLM systems, RAG search engines, AI agents, and conversational voice interfaces for enterprises.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/ai-solutions/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Retrieval-Augmented Generation (RAG) and why is it useful?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "RAG is an architectural pattern that connects language models with your organization's private documents, databases, and knowledge repositories.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does GLAD Studio prevent hallucinations and ensure AI output accuracy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We implement deterministic guardrails including strict JSON schema enforcement, hybrid retrieval, reranking models, and automated regression evaluation suites.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD Studio build on-premise or private cloud AI solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we engineer self-hosted AI systems using open-source models (Llama 3, Mistral, Qwen) deployed on your private VPC or on-premise GPU infrastructure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you manage AI API token costs and latency at scale?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We optimize production token economics through semantic caching, prompt compression, hierarchical routing, and streaming responses.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can AI agents take automated actions in our external software systems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we build AI agents with secure function-calling capabilities that interact with third-party APIs validated by strict schema constraints.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who owns the fine-tuned models, prompts, and intellectual property?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You retain 100% ownership of all custom prompts, training datasets, vector embeddings, fine-tuned weights, source code, and integration pipelines.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },

  // ── 5. Business Automation ──────────────────────────────
  {
    slug: "business-automation",
    order: 5,
    name: "Business Automation and AI Workflows",
    navLabel: "Business Automation",
    categoryBadge: "Operational Engineering",
    h1: "Business Automation and AI Workflows",
    intro:
      "GLAD Studio builds custom business automation systems using APIs, event-driven workflows, AI agents, and integrations to eliminate repetitive operational work, connect fragmented software stacks, and ensure data integrity across your entire organization.",
    timeline: "3 – 8 WEEKS",
    ledger: [
      { key: "Hours Reclaimed", value: "100+", accent: "hours / mo" },
      { key: "Sync Reliability", value: "99.9", accent: "% delivery" },
      { key: "Idempotent Logic", value: "Zero", accent: "duplicates" },
      { key: "Deployment Timeline", value: "3–8", accent: "weeks" },
      { key: "Pipeline Ownership", value: "100", accent: "% self-hosted" },
    ],
    capabilitiesHeading: "What Business Processes We Automate",
    capabilitiesIntro:
      "We design resilient workflow pipelines that eliminate error-prone manual copy-pasting, multi-system status updates, and disconnected operational spreadsheets.",
    capabilities: [
      {
        title: "Lead Sourcing & Enrichment Pipelines",
        body: "Automate high-volume outbound prospecting by discovering company domains, verifying contact emails, and enriching CRM profiles with structured metadata.",
      },
      {
        title: "Multi-Platform CRM & ERP Sync",
        body: "Bi-directional, real-time data synchronization between HubSpot, Salesforce, Notion, Postgres, and proprietary accounting systems with strict deduplication.",
      },
      {
        title: "Automated Document & Invoice Processing",
        body: "Extract structured financial tables, tax IDs, and customer line items from incoming email attachments directly into your ERP or payment ledger.",
      },
      {
        title: "Custom Webhook & Event-Driven Routers",
        body: "Resilient microservices handling webhook ingestion, exponential backoff retries, and dead-letter queue error recovery across distributed systems.",
      },
    ],
    methodologyHeading: "Our 4-Phase Automation Engineering Process",
    methodologyIntro:
      "We engineer enterprise automations with defensive error handling, guaranteed delivery semantics, and immutable audit logs.",
    phases: [
      {
        title: "Process Discovery & Mapping",
        body: "We audit your team's manual operations, identify data bottlenecks, and blueprint a clear end-to-end integration architecture.",
        meta: "WEEK 01",
      },
      {
        title: "Sandbox Pipeline & API Integration",
        body: "Engineering webhook endpoints, rate-limit throttlers, schema transformers, and connecting testing sandbox environments.",
        meta: "WEEK 02 – 03",
      },
      {
        title: "Error Handling & Idempotency Testing",
        body: "Simulating network partitions, webhook timeouts, and payload malformations to verify automated retry queues and alert dispatches.",
        meta: "WEEK 04 – 05",
      },
      {
        title: "Production Cutover & Observability",
        body: "Live deployment of self-hosted or cloud workflows, real-time Slack/PagerDuty monitoring setup, and comprehensive SOP documentation handoff.",
        meta: "WEEK 06 – 08",
      },
    ],
    stack: [
      { group: "Automation Engines", items: ["n8n (Self-Hosted)", "Make", "Temporal", "Python Workers", "Node.js"] },
      { group: "Data & Storage", items: ["PostgreSQL", "Redis Queues", "Supabase", "Airtable", "Google Sheets API"] },
      { group: "Integrations & APIs", items: ["HubSpot", "Salesforce", "Stripe", "Slack", "SendGrid / Resend"] },
    ],
    caseStudySlug: "q-safe",
    faqHeading: "Business Automation FAQs",
    faqs: [
      {
        q: "What is business process automation?",
        a: "Business process automation is the use of software integrations, APIs, and workflow orchestration to execute repetitive operational tasks automatically without manual human intervention. It streamlines operations, eliminates data-entry errors, and accelerates cross-departmental coordination.",
      },
      {
        q: "What business processes can GLAD Studio automate?",
        a: "GLAD Studio automates sales lead prospecting and enrichment, multi-system CRM synchronization, invoice parsing and reconciliation, employee and customer onboarding, and operational data extraction.",
      },
      {
        q: "Can GLAD connect different business systems and tools?",
        a: "Yes, we integrate disparate software systems including CRMs, ERPs, payment gateways, SQL databases, email providers, and internal tools using resilient webhooks and REST APIs.",
      },
      {
        q: "Can AI be used for business automation?",
        a: "Yes, we integrate language models into automated workflows to parse unstructured emails, classify incoming tickets, extract structured fields from documents, and validate complex operational data.",
      },
      {
        q: "Can GLAD build lead enrichment automation?",
        a: "Yes, we engineer high-throughput lead enrichment pipelines that scrape company websites, verify email deliverability, append demographic data, and automatically update CRM contact records.",
      },
      {
        q: "Can GLAD build n8n workflows and self-hosted instances?",
        a: "Yes, we deploy self-hosted and cloud n8n workflow instances with custom Python/JavaScript function nodes, automated error notifications, and resilient retry mechanisms.",
      },
    ],
    seo: {
      title: "Business Automation Services in India | GLAD Studio",
      description:
        "GLAD Studio builds custom business automation systems using APIs, workflows, AI agents and integrations to reduce repetitive operational work and connect business processes.",
      canonical: "https://gladstudio.net/services/business-automation",
      ogImage: "https://gladstudio.net/og-image.png",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://gladstudio.net/services/business-automation/#webpage",
              url: "https://gladstudio.net/services/business-automation",
              name: "Business Automation Services in India | GLAD Studio",
              description:
                "GLAD Studio builds custom business automation systems using APIs, workflows, AI agents and integrations to reduce repetitive operational work and connect business processes.",
              isPartOf: {
                "@id": "https://gladstudio.net/#website",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://gladstudio.net/services/business-automation/#breadcrumb",
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
                  name: "Services",
                  item: "https://gladstudio.net/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Business Automation",
                  item: "https://gladstudio.net/services/business-automation",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://gladstudio.net/services/business-automation/#service",
              name: "Business Automation and AI Workflows",
              serviceType: "Business Process Automation & Integration Engineering",
              provider: {
                "@type": "Organization",
                "@id": "https://gladstudio.net/#organization",
                name: "Glad Studio",
                url: "https://gladstudio.net",
              },
              areaServed: "India and Global",
              description:
                "Custom business automation company in India building resilient workflow orchestration, n8n pipelines, API integrations, and AI-powered operational backends.",
            },
            {
              "@type": "FAQPage",
              "@id": "https://gladstudio.net/services/business-automation/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is business process automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Business process automation is the use of software integrations, APIs, and workflow orchestration to execute repetitive operational tasks automatically without manual human intervention.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What business processes can GLAD Studio automate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "GLAD Studio automates sales lead prospecting and enrichment, multi-system CRM synchronization, invoice parsing and reconciliation, employee and customer onboarding, and operational data extraction.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD connect different business systems and tools?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we integrate disparate software systems including CRMs, ERPs, payment gateways, SQL databases, email providers, and internal tools using resilient webhooks and REST APIs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can AI be used for business automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we integrate language models into automated workflows to parse unstructured emails, classify incoming tickets, extract structured fields from documents, and validate complex operational data.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD build lead enrichment automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we engineer high-throughput lead enrichment pipelines that scrape company websites, verify email deliverability, append demographic data, and automatically update CRM contact records.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can GLAD build n8n workflows and self-hosted instances?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we deploy self-hosted and cloud n8n workflow instances with custom Python/JavaScript function nodes, automated error notifications, and resilient retry mechanisms.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
