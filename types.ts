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

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

export type Category = 'personal' | 'business';