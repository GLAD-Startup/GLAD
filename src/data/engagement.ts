export interface EngagementTier {
  id: string;
  name: string;
  phase: string;
  timeline: string;
  tagline: string;
  description: string;
  badge?: string;
  activeFeaturesCount: number;
  features: string[];
}

export const engagementTiers: EngagementTier[] = [
  {
    id: '01',
    name: 'MVP Sprint',
    phase: 'Validation Phase',
    timeline: '4 – 8 weeks',
    tagline: 'Lean, rapid & built to prove real market demand',
    description: 'Validate your concept fast with a production-ready v1 real users can touch. Zero unnecessary overhead—strictly the core features your business needs.',
    activeFeaturesCount: 4,
    features: [
      'Clickable prototype & user flows in Week 2',
      'Working staging build in Week 3',
      'Solid, scalable production architecture',
      'Auth, billing & core permissions wired',
      'SEO-ready structure & analytics',
      'Automated deployment and CI/CD',
      'Handover code & 2 weeks launch support',
      'Zero bloated agency retainers',
    ],
  },
  {
    id: '02',
    name: 'Dedicated Build',
    phase: 'Growth & Scaling',
    timeline: '6 – 16 weeks',
    tagline: 'Custom engineering tailored around your roadmap',
    badge: 'Recommended',
    description: 'For growing teams requiring a full-scale platform. We engineer strictly around your milestone outcomes rather than billing inflated agency hours.',
    activeFeaturesCount: 6,
    features: [
      'Multi-tenant web & cloud platform',
      'Type-safe frontend, API & database schemas',
      'Role-based permissions & secure auth',
      'Performance budgets & sub-second loads',
      'Bi-weekly sprint cadence & direct partner access',
      'Comprehensive automated test suite',
      'Observability, logging & error tracking',
      'Full source ownership & clean handover',
    ],
  },
  {
    id: '03',
    name: 'Full Lifecycle',
    phase: 'Ecosystem & AI',
    timeline: 'Milestone / Retainer',
    tagline: 'End-to-end technical partnership across all platforms',
    description: 'Web, mobile, and AI systems built and operated as a unified engine. Dedicated technical stewardship adapted to your growth constraints.',
    activeFeaturesCount: 8,
    features: [
      'Everything in Dedicated Build',
      'Native / cross-platform mobile apps (iOS & Android)',
      'Custom AI/RAG integrations with evals',
      'Business automation & internal workflows',
      'Bespoke design system & UI tokens',
      'Data migration & third-party integrations',
      'Dedicated launch engineering & QA',
      'Ongoing technical partnership & evolution',
    ],
  },
];

export const budgetBands = engagementTiers;
export const engagementModels = engagementTiers;
