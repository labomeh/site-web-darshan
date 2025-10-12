/**
 * ═══════════════════════════════════════════════════════════════════
 * EVENTS HELPERS - Darshan
 * ═══════════════════════════════════════════════════════════════════
 *
 * Fonctions pour lire et parser les événements depuis les fichiers markdown
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Event } from '@/types';

const eventsDirectory = path.join(process.cwd(), '_events');

/**
 * Récupère tous les événements depuis les fichiers .md
 */
export async function getAllEvents(): Promise<Event[]> {
  // Vérifier si le dossier existe
  if (!fs.existsSync(eventsDirectory)) {
    console.warn('Le dossier _events/ n\'existe pas');
    return [];
  }

  // Lire tous les fichiers du dossier
  const fileNames = fs.readdirSync(eventsDirectory);

  const allEventsPromises = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Parser le frontmatter YAML
      const { data, content } = matter(fileContents);

      // Convertir le markdown en HTML (marked retourne une Promise)
      const bodyHtml = await marked(content);

      // Convertir la date en string si elle est un objet Date
      const dateString = data.date instanceof Date
        ? data.date.toISOString()
        : (data.date || '');

      // Construire l'objet événement en omettant les valeurs undefined
      const event: Event = {
        id,
        title: data.title || '',
        date: dateString,
        body: content,
        bodyHtml: typeof bodyHtml === 'string' ? bodyHtml : '',
      };

      // Ajouter les champs optionnels seulement s'ils sont définis
      if (data.location) event.location = data.location;
      if (data.image) event.image = data.image;
      if (data.available_spots !== undefined) event.available_spots = data.available_spots;
      if (data.contact_info) event.contact_info = data.contact_info;

      return event;
    });

  const allEvents = await Promise.all(allEventsPromises);
  return allEvents;
}

/**
 * Récupère uniquement les événements à venir (date >= maintenant)
 * et les trie par date croissante
 */
export async function getUpcomingEvents(): Promise<Event[]> {
  const allEvents = await getAllEvents();
  const now = new Date();

  const upcomingEvents = allEvents
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= now;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });

  return upcomingEvents;
}

/**
 * Récupère tous les événements triés par date (les plus récents en premier)
 */
export async function getAllEventsSorted(): Promise<Event[]> {
  const allEvents = await getAllEvents();

  return allEvents.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Formate une date en français
 */
export function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formate une date courte (pour calendrier)
 */
export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
