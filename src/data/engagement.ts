export interface EngagementTier {
  id: string;
  budget: string;
  timeline: string;
  name: string;
  description: string;
  activeFeaturesCount: number;
  features: string[];
}

export const budgetBands: EngagementTier[] = [
  {
    id: '01',
    budget: 'Under $15k',
    timeline: '4 – 8 weeks',
    name: 'MVP Sprint',
    description: 'Validate an idea fast with a production-ready v1 that real users can touch.',
    activeFeaturesCount: 3,
    features: [
      'Clickable prototype in Week 2',
      'Working staging build in Week 3',
      'Production foundations from day one',
      'Investor-ready demo assets',
      'Auth and billing wired up',
      'SEO-ready structure',
      'Deployment and CI/CD',
      'Two weeks post-launch support',
    ],
  },
  {
    id: '02',
    budget: '$15k – $40k',
    timeline: '6 – 16 weeks',
    name: 'Product Build',
    description: 'For growing teams that need a real platform, not a prototype.',
    activeFeaturesCount: 5,
    features: [
      'Multi-tenant web application',
      'Type-safe frontend and API',
      'Auth, billing and permissions',
      'Performance budgets out of the box',
      'Fortnightly sprint cadence',
      'Automated test suite',
      'Observability and error tracking',
      'Handover documentation',
    ],
  },
  {
    id: '03',
    budget: '$40k+',
    timeline: '12+ weeks',
    name: 'Full Scope',
    description: 'Web, mobile and AI as one system, built and operated end to end.',
    activeFeaturesCount: 8,
    features: [
      'Everything in Product Build',
      'Flutter app on both stores',
      'AI/RAG integration with evals',
      'Business automation workflows',
      'Custom design system',
      'Data migration and integrations',
      'Launch support and QA',
      'Ongoing retainer or clean handoff',
    ],
  },
];

export const engagementModels = budgetBands;
