export interface ProcessStep {
  number: string;
  title: string;
  timeline: string;
  description: string;
  deliverables?: string[];
}

export interface ProcessRow {
  step: string;
  stage: string;
  description: string;
  when: string;
}

export interface StudioSla {
  key: string;
  value: string;
  caption: string;
}

export const processRows: ProcessRow[] = [
  {
    step: '01',
    stage: 'Discovery Call',
    description: 'A 30-minute conversation to understand your idea, users and constraints.',
    when: 'Day 0',
  },
  {
    step: '02',
    stage: 'Requirements Analysis',
    description: 'Your vision translated into a written brief — scope, metrics, risks surfaced early.',
    when: 'Week 1',
  },
  {
    step: '03',
    stage: 'Planning',
    description: 'Fixed-scope proposal with timeline, milestones and clear pricing. No surprises later.',
    when: 'Week 1',
  },
  {
    step: '04',
    stage: 'UI/UX Design',
    description: 'Wireframes evolve into a polished interactive prototype. You sign off before code.',
    when: 'Weeks 2 – 3',
  },
  {
    step: '05',
    stage: 'Development',
    description: 'Weekly sprints, weekly demos. Staging, Slack and the codebase from day one.',
    when: 'Weeks 3 – N',
  },
  {
    step: '06',
    stage: 'Testing',
    description: 'Automated tests, manual QA, accessibility checks and performance budgets.',
    when: 'Continuous',
  },
  {
    step: '07',
    stage: 'Deployment',
    description: 'Shipped behind feature flags, closely monitored, rolled out with zero downtime.',
    when: 'Launch week',
  },
  {
    step: '08',
    stage: 'Post-Launch Support',
    description: 'Bug fixes, performance work and new features on retainer — or a clean handoff.',
    when: 'Ongoing',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Product Scope & Technical Blueprint',
    timeline: 'Week 01',
    description:
      'We dissect your vision, eliminate non-essential scope, and engineer the core technical architecture, entity-relationship diagrams, and API boundaries.',
  },
  {
    number: '02',
    title: 'Interactive Wireframes & UI Prototyping',
    timeline: 'Week 02',
    description:
      'We design high-fidelity clickable UI prototypes demonstrating complete user flows, state transitions, and responsive micro-interactions before code is written.',
  },
  {
    number: '03',
    title: 'Working Staging Build & Sprint Execution',
    timeline: 'Week 03 – 06',
    description:
      'Senior engineers write production TypeScript and Python in 2-week sprints, deploying working software to a live staging URL from week three.',
  },
  {
    number: '04',
    title: 'Hardening, Security & Production Handoff',
    timeline: 'Week 06 – 08',
    description:
      'End-to-end security audits, database indexing, Lighthouse performance checks, and 100% intellectual property transfer upon launch.',
  },
];

export const studioSlas: StudioSla[] = [
  {
    key: 'Week 3 Staging',
    value: 'Week 03',
    caption: 'Clickable live staging environment with working software',
  },
  {
    key: '100% IP Transfer',
    value: '100%',
    caption: 'Full copyright, code repository, and cloud credential ownership',
  },
  {
    key: 'Zero-Layer Core',
    value: 'Senior',
    caption: 'Direct collaboration with senior engineers without account managers',
  },
  {
    key: '30-Day Guarantee',
    value: '30 Days',
    caption: 'Post-launch warranty resolving bugs and SOW deviations at no cost',
  },
];
