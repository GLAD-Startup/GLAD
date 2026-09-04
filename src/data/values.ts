export interface StudioValue {
  number: string;
  id?: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photoSrc: string;
}

export const studioValues: StudioValue[] = [
  {
    number: '01',
    id: '01',
    title: 'Skin In The Game',
    subtitle: 'Dual-Engine Architecture',
    description:
      'We build and operate our own proprietary SaaS engines (SettleDesk & GLAD HMS). We test architectural patterns, database performance, and security models on our own products before deploying them to client systems.',
  },
  {
    number: '02',
    id: '02',
    title: 'Week 3 Working Staging',
    subtitle: 'Demonstrable Velocity',
    description:
      'No 8-week slide decks or endless wireframing loops. We ship interactive clickable UI by Week 2 and fully deployed, working staging software by Week 3 so you can test features as they are built.',
  },
  {
    number: '03',
    id: '03',
    title: 'Zero-Layer Senior Core',
    subtitle: 'Direct Engineering Access',
    description:
      'You talk directly to the senior engineers writing your code and designing your schemas. Zero account managers, zero telephone-game miscommunications, and zero junior developers learning on your budget.',
  },
  {
    number: '04',
    id: '04',
    title: '100% IP & Clean Code',
    subtitle: 'Uncompromising Ownership',
    description:
      'Type-safe TypeScript, strict SQL schemas, automated test suites, and zero proprietary agency lock-in. You own 100% of all intellectual property, source code, and cloud credentials from day one.',
  },
];

export const coreValues = studioValues;

export const leadershipTeam: TeamMember[] = [
  {
    name: 'Arjun Singh Rajput',
    role: 'CEO & Head of Strategy',
    bio: 'Driving overarching vision, strategic growth, product market alignment, and venture execution across the studio.',
    photoSrc: '/team/arjun.jpg',
  },
  {
    name: 'Jatin Khetan',
    role: 'CFO & Head of Product & Design',
    bio: 'Directing financial strategy and crafting intuitive, high-craft user experiences, design systems, and product architectures.',
    photoSrc: '/team/jatin.jpg',
  },
  {
    name: 'Parth Garg',
    role: 'COO & Head of Operations',
    bio: 'Streamlining cross-functional sprint execution, client delivery lifecycles, and operational excellence.',
    photoSrc: '/team/parth.jpeg',
  },
  {
    name: 'Somesh Rajput',
    role: 'CTO & Head of Engineering',
    bio: 'Architecting scalable cloud backends, relational database schemas, autonomous AI agent pipelines, and core technical innovation.',
    photoSrc: '/team/somesh.jpeg',
  },
];

export const studioStatement = {
  quote:
    'We started GLAD studio because founders kept losing months to agencies that overpromised and left them with code they couldn’t maintain. So we built something different — a senior team that works on a small number of projects at a time and ships every week.',
  yearsCount: '13+ Years',
  yearsCaption: 'Combined Engineering Leadership',
};
