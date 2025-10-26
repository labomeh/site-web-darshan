import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Détermine si une URL est active (pour la navigation)
 */
export function isActiveRoute(currentPath: string, itemPath: string): boolean {
  // Page d'accueil : exacte seulement
  if (itemPath === '/') {
    return currentPath === '/';
  }

  // Autres pages : commence par le chemin
  return currentPath.startsWith(itemPath);
}

/**
 * Formate un numéro de téléphone français
 */
export function formatPhoneNumber(phone: string): string {
  // Enlever tous les caractères non numériques
  const cleaned = phone.replace(/\D/g, '');

  // Format français : 06 12 34 56 78
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  }

  return phone;
}

/**
 * Slugifie un texte (pour les URLs)
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplacer les caractères spéciaux par des tirets
    .replace(/^-+|-+$/g, ''); // Enlever les tirets au début et à la fin
}

/**
 * Tronque un texte avec ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Vérifie si une date est passée
 */
export function isPastDate(dateString: string): boolean {
  const date = new Date(dateString);
  const now = new Date();

  return date < now;
}

/**
 * Vérifie si une date est aujourd'hui
 */
export function isToday(dateString: string): boolean {
  const date = new Date(dateString);
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Calcule le nombre de jours jusqu'à une date
 */
export function daysUntil(dateString: string): number {
  const date = new Date(dateString);
  const now = new Date();
  const diff = date.getTime() - now.getTime();

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
