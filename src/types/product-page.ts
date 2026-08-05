export interface ProductHeroConfig {
  eyebrow: string;
  title: string;
  titleGradient: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  stats: readonly {
    value: string;
    label: string;
  }[];
}

export interface ProductTier {
  role: string;
  title: string;
  description: string;
  bullets: readonly string[];
}

export interface ProductFeatureItem {
  eyebrow: string;
  title: string;
  description: string;
  routePath: string;
}

export interface SecurityPillar {
  title: string;
  description: string;
}

export interface StepItem {
  phase: string;
  metric: string;
  title: string;
  description: string;
  checklist: readonly string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface PricingPlan {
  name: string;
  tagline: string;
  featured?: boolean;
  features: readonly string[];
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductPageData {
  slug: string;
  title: string;
  metaDescription: string;
  hero: ProductHeroConfig;
  threeTier: readonly ProductTier[];
  features: readonly ProductFeatureItem[];
  securityPillars: readonly SecurityPillar[];
  steps: readonly StepItem[];
  testimonials: readonly TestimonialItem[];
  pricing: readonly PricingPlan[];
  faqs: readonly FAQItem[];
  aboutStory: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    beliefs: readonly { title: string; desc: string }[];
  };
}
