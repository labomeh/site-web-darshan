/**
 * Site-wide constants and configuration
 * Single source of truth for all business information, contact details, site metadata, and UI text
 */

export const SITE = {
  name: 'Darshan',
  tagline: "Centre de bien-être et d'hydrothérapie",
  description:
    "Hydrothérapeute à Saint-Gingolph (Haute-Savoie). Soins d'hydrothérapie du côlon, massages ayurvédiques.",
  url: 'https://centre-darshan.netlify.app',
} as const;

/**
 * UI Labels - Reusable text for interface elements
 */
export const LABELS = {
  // Navigation
  nav: {
    home: 'Accueil',
    contact: 'Contact',
    backToHome: "Retour à l'accueil",
  },

  // Contact section labels
  contact: {
    title: 'Contact',
    address: 'Adresse',
    phone: 'Téléphone',
    email: 'Email',
    hours: 'Horaires',
    location: 'Localisation',
  },

  // Footer sections
  footer: {
    contact: 'Contact',
    hours: 'Horaires',
    info: 'Informations',
    legalNotice: 'Mentions légales',
  },

  // 404 Page
  notFound: {
    title: 'Page non trouvée',
    heading: 'Page non trouvée',
    description: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
    metaDescription: "La page que vous recherchez n'existe pas.",
  },

  // Legal page
  legal: {
    title: 'Mentions légales',
    publisher: 'Éditeur du site',
    hosting: 'Hébergement',
    copyright: 'Propriété intellectuelle',
    privacy: 'Données personnelles',
    cookies: 'Cookies',
  },
} as const;

export const CONTACT = {
  phone: {
    display: '06 21 95 31 68',
    tel: '+33621953168',
  },
  email: 'contact@hydrotherapie-colon-savoie.fr',
  address: {
    street: '21 Route de Chez Monnet',
    city: 'BRET - Saint-Gingolph',
    postalCode: '74500',
    country: 'France',
    full: '21 Route de Chez Monnet, 74500 BRET - Saint-Gingolph, France',
    short: '21 Route de Chez Monnet, 74500 Saint-Gingolph',
  },
} as const;

export const BUSINESS_HOURS = {
  weekdays: {
    label: 'Lundi - Samedi',
    hours: '8h00 - 18h00',
  },
  sunday: {
    label: 'Dimanche',
    hours: 'Fermé',
  },
  note: 'Sur rendez-vous uniquement',
} as const;

export const METADATA = {
  defaultTitle: `${SITE.name} - Hydrothérapie - Saint-Gingolph`,
  defaultDescription: `${SITE.description} ${CONTACT.address.short}.`,
  contactTitle: `${LABELS.contact.title} - ${SITE.name}`,
  contactDescription: `Contactez ${SITE.name} pour prendre rendez-vous. Cabinet à Saint-Gingolph, Haute-Savoie.`,
  notFoundTitle: `${LABELS.notFound.title} - ${SITE.name}`,
  notFoundDescription: LABELS.notFound.metaDescription,
  legalTitle: `${LABELS.legal.title} - ${SITE.name}`,
  legalDescription: `${LABELS.legal.title} du site ${SITE.name}, hydrothérapie à Saint-Gingolph.`,
} as const;

export const SOCIAL = {
  // Add social media links here when available
  // facebook: '',
  // instagram: '',
} as const;
