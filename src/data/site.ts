export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
}

export interface ContactChannel {
  label: string;
  href: string;
  external: boolean;
}

export const cyclingWords = [
  'इरादा',
  'हुनर',
  'लगन',
  'नीयत',
  'जुनून',
] as const;

export const siteConfig = {
  name: 'GLAD studio',
  tagline: 'Web, Mobile & AI Product Engineering',
  legalName: 'GLAD Studio',
  foundedYear: 2024,
  location: {
    city: 'Vrindavan',
    state: 'Uttar Pradesh',
    country: 'India',
    countryHi: 'भारत',
    fullAddress: 'Vrindavan, Uttar Pradesh, India',
    coordinates: '27.5806° N, 77.7006° E',
  },
  contact: {
    email: 'hello@gladstudio.net',
    inquiryEmail: 'sayhi@gladstudio.net',
    phone: '+91 94572 45650',
    phoneDisplay: '+91 (0) Vrindavan Studio',
  },
  socials: {
    x: 'https://x.com/_GLAD_Studio',
    linkedin: 'https://www.linkedin.com/company/glad-studio-2k26',
    instagram: 'https://www.instagram.com/__gladstudio/',
    reddit: 'https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ] as NavLink[],
  contactLinks: [
    {
      label: 'Office: Vrindavan, Uttar Pradesh, India.',
      href: 'https://maps.google.com/?q=Vrindavan,Uttar+Pradesh,India',
      external: true,
    },
    {
      label: 'Follow us on X (Twitter)',
      href: 'https://x.com/_GLAD_Studio',
      external: true,
    },
    {
      label: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/company/glad-studio-2k26',
      external: true,
    },
    {
      label: 'hello@gladstudio.net',
      href: 'mailto:hello@gladstudio.net',
      external: false,
    },
  ] as ContactChannel[],
  footer: {
    wordRail: ['Independent', 'Senior Team', 'Multidisciplinary', 'India-Based'],
    mission:
      'An engineering-focused software and AI product studio building custom digital products, SaaS platforms, AI systems, and business automation solutions.',
    copyright: '© 2026 GLAD studio',
  },
};
