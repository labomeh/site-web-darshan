/**
 * ═══════════════════════════════════════════════════════════════════
 * TYPES - Darshan Next.js
 * ═══════════════════════════════════════════════════════════════════
 *
 * Définitions TypeScript pour le projet
 */

// ═══════════════════════════════════════════════════════════════════
// ÉVÉNEMENTS
// ═══════════════════════════════════════════════════════════════════

export interface Event {
  id: string;
  title: string;
  date: string;
  location?: string;
  body: string;
  bodyHtml: string;
  image?: string;
  available_spots?: number;
  contact_info?: string;
}

// ═══════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════

export interface NavItem {
  href: string;
  label: string;
}

// ═══════════════════════════════════════════════════════════════════
// SERVICES
// ═══════════════════════════════════════════════════════════════════

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  details?: string;
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANTS UI
// ═══════════════════════════════════════════════════════════════════

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'alt';
  id?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'container' | 'content';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

// ═══════════════════════════════════════════════════════════════════
// LAYOUT
// ═══════════════════════════════════════════════════════════════════

export interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  title?: string;
  description?: string;
}

export interface HeaderProps {
  currentPage?: string;
}

// ═══════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════

export interface HeroProps {
  title?: string;
  tagline?: string;
  videoSrc?: string;
  showServices?: boolean;
  showLocation?: boolean;
}
