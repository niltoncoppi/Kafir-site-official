import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface InsuranceProduct {
  id: string;
  title: string;
  description: string;
  iconName: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface ConsortiumFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface ConsortiumBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

export interface ProductPageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  benefits: FeatureItem[];
  ctaTitle: string;
  ctaText: string;
}

export type Category = 'personal' | 'business';