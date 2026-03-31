export interface NavItem {
  label: string;
  href: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  company?: string;
  companyLogo?: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  badge?: string;
  price: string;
  period: string;
  billingNote: string;
  features: string[];
  ctaLabel: string;
  highlighted: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolTab {
  id: string;
  label: string;
  description: string;
  screenshot: string;
}

export interface IntegrationCategory {
  title: string;
  description: string;
  integrations: string[];
}

export interface FeatureCard {
  icon?: string;
  title: string;
  description: string;
}
