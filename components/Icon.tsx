import React from 'react';
import {
  ShieldAlert, Heart, Car, Plane, Tractor, Key, CreditCard,
  PiggyBank, Smartphone, Banknote, Anchor, Smile, TrendingUp,
  Home, Map, Activity, Building2, Briefcase, Users, FileCheck,
  Link, Ticket, Truck, Coins, Settings, Stethoscope, GraduationCap,
  Handshake, BarChart, Scale, HardHat, ShoppingBag, Container,
  HeartHandshake, Zap, UserCheck, Award, PhoneCall, ChevronDown,
  Menu, X, CheckCircle, Mail, Phone, Clock, Instagram, Facebook, Linkedin, ExternalLink,
  Search, Presentation, LifeBuoy, FileText, Quote, Star, ArrowRight, User
} from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  ShieldAlert, Heart, Car, Plane, Tractor, Key, CreditCard,
  PiggyBank, Smartphone, Banknote, Anchor, Smile, TrendingUp,
  Home, Map, Activity, Building2, Briefcase, Users, FileCheck,
  Link, Ticket, Truck, Coins, Settings, Stethoscope, GraduationCap,
  Handshake, BarChart, Scale, HardHat, ShoppingBag, Container,
  HeartHandshake, Zap, UserCheck, Award, PhoneCall, ChevronDown,
  Menu, X, CheckCircle, Mail, Phone, Clock, Instagram, Facebook, Linkedin, ExternalLink,
  Search, Presentation, LifeBuoy, FileText, Quote, Star, ArrowRight, User
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};