import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface InsuranceProduct {
  id: string;
  title: string;
  description: string;
  iconName: string; // We will map this to actual icons in the component
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

export type Category = 'personal' | 'business';