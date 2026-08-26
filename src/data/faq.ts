export interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    number: '01',
    question: 'How much does a typical project cost?',
    answer:
      'Every project is custom-scoped based on your specific requirements, feature complexity, and timeline. We work on a transparent, fixed-price milestone basis — meaning after an initial discovery call, you receive a detailed proposal with a fixed quote and guaranteed delivery timeline before any code is written.',
  },
  {
    number: '02',
    question: 'How fast can you start?',
    answer:
      'Most projects begin within 1–2 weeks of signing. For urgent work, we can sometimes start within a few days.',
  },
  {
    number: '03',
    question: 'Do you work with non-technical founders?',
    answer:
      'Yes — most of our clients are non-technical. We translate ideas into clear technical specifications, user-friendly designs, and shipped products, ensuring you always understand the trade-offs at every step.',
  },
  {
    number: '04',
    question: 'Who owns the code and intellectual property?',
    answer:
      'You own 100% of all intellectual property, source code, designs, and project assets from day one. Upon final milestone completion, full repository access and credentials are handed over.',
  },
  {
    number: '05',
    question: 'How do we track progress during development?',
    answer:
      'We work in structured 2-week sprints with weekly async updates, active messaging channels (Slack/Discord), and direct access to a live staging environment so you can test features as they are built.',
  },
  {
    number: '06',
    question: 'Can you build on top of our existing codebase or tech stack?',
    answer:
      'Yes. Whether upgrading an existing application, refactoring legacy code, or integrating new AI features and third-party APIs, we can seamlessly audit and build directly within your current codebase.',
  },
  {
    number: '07',
    question: 'What tech stack do you specialize in?',
    answer:
      'We focus on modern, type-safe, and scalable web and mobile stacks — primarily React, Next.js, TanStack Start, TypeScript, Node.js, Python, Flutter, Tailwind CSS, and cloud platforms like AWS and Vercel.',
  },
  {
    number: '08',
    question: 'What happens after launch?',
    answer:
      'We provide dedicated post-launch support for bug fixes, performance monitoring, and maintenance. Many of our clients continue working with us long-term as their dedicated development team.',
  },
];
