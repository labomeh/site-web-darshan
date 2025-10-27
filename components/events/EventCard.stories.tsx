import type { Story } from '@ladle/react';
import EventCard from './EventCard';

export const WeekendFastingRetreat: Story = () => (
  <EventCard
    title="Stage de jeûne - Weekend détox"
    startDate="2025-03-15T10:00:00"
    endDate="2025-03-17T16:00:00"
    excerpt="Un week-end pour se ressourcer et nettoyer son organisme dans un cadre exceptionnel face au lac Léman"
    price="450€"
    location="Centre Darshan, Saint-Gingolph"
    availableSpots={3}
    totalSpots={8}
  />
);

WeekendFastingRetreat.meta = {
  description: 'Weekend fasting retreat with all details',
};

export const LiverCleanse: Story = () => (
  <EventCard
    title="Nettoyage du foie et de la vésicule biliaire"
    startDate="2025-04-01T09:00:00"
    endDate="2025-04-03T18:00:00"
    excerpt="Week-end de cure detox selon la méthode Andreas Moritz. Accompagnement personnalisé et suivi complet."
    price="380€"
    location="Centre Darshan, Saint-Gingolph"
    availableSpots={5}
    totalSpots={10}
    featured
  />
);

LiverCleanse.meta = {
  description: 'Featured liver cleanse event',
};

export const MeditationWorkshop: Story = () => (
  <EventCard
    title="Atelier Méditation Tantra"
    startDate="2025-05-10T14:00:00"
    excerpt="Initiation à la méditation tantrique. Séance guidée pour débutants et pratiquants intermédiaires."
    price="50€"
    availableSpots={8}
    totalSpots={12}
  />
);

MeditationWorkshop.meta = {
  description: 'Single-day meditation workshop (no end date)',
};

export const DetoxTrio: Story = () => (
  <EventCard
    title="Week-end Trio de soins detox"
    startDate="2025-06-15T10:00:00"
    endDate="2025-06-16T17:00:00"
    excerpt="Combinaison hydrothérapie + massage métamorphique + bol kansu pour une détoxification complète"
    price="260€"
    location="Centre Darshan, Saint-Gingolph"
  />
);

DetoxTrio.meta = {
  description: 'Detox trio without spots info',
};

export const FullyBooked: Story = () => (
  <EventCard
    title="Retraite bien-être - COMPLET"
    startDate="2025-07-01T10:00:00"
    endDate="2025-07-05T16:00:00"
    excerpt="Retraite de 5 jours avec jeûne, méditation et soins. Programme complet pour une transformation profonde."
    price="890€"
    location="Centre Darshan, Saint-Gingolph"
    availableSpots={0}
    totalSpots={6}
  />
);

FullyBooked.meta = {
  description: 'Fully booked event (0 spots available)',
};

export const MinimalEvent: Story = () => (
  <EventCard
    title="Conférence bien-être"
    startDate="2025-08-20T18:00:00"
    excerpt="Présentation des bienfaits de l'hydrotherapie et du jeûne thérapeutique"
  />
);

MinimalEvent.meta = {
  description: 'Minimal event with required props only',
};

export const MobileView: Story = () => (
  <div className="flex flex-col gap-4">
    <EventCard
      title="Stage de jeûne"
      startDate="2025-03-15T10:00:00"
      endDate="2025-03-17T16:00:00"
      excerpt="Un week-end pour se ressourcer"
      price="450€"
      availableSpots={3}
      totalSpots={8}
      featured
    />
    <EventCard
      title="Nettoyage du foie"
      startDate="2025-04-01T09:00:00"
      endDate="2025-04-03T18:00:00"
      excerpt="Week-end de cure detox"
      price="380€"
      location="Centre Darshan"
    />
    <EventCard
      title="Atelier méditation"
      startDate="2025-05-10T14:00:00"
      excerpt="Initiation à la méditation tantrique"
      price="50€"
    />
  </div>
);

MobileView.meta = {
  width: 'xsmall',
  description: 'Mobile view with stacked event cards',
};

export const DesktopGrid: Story = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <EventCard
      title="Stage de jeûne - Weekend détox"
      startDate="2025-03-15T10:00:00"
      endDate="2025-03-17T16:00:00"
      excerpt="Un week-end pour se ressourcer et nettoyer son organisme"
      price="450€"
      location="Centre Darshan"
      availableSpots={3}
      totalSpots={8}
      featured
    />
    <EventCard
      title="Nettoyage du foie"
      startDate="2025-04-01T09:00:00"
      endDate="2025-04-03T18:00:00"
      excerpt="Week-end de cure detox selon Andreas Moritz"
      price="380€"
      availableSpots={5}
      totalSpots={10}
    />
    <EventCard
      title="Méditation Tantra"
      startDate="2025-05-10T14:00:00"
      excerpt="Initiation à la méditation tantrique"
      price="50€"
      availableSpots={8}
      totalSpots={12}
    />
    <EventCard
      title="Trio de soins detox"
      startDate="2025-06-15T10:00:00"
      endDate="2025-06-16T17:00:00"
      excerpt="Combinaison hydrothérapie + massages"
      price="260€"
      location="Centre Darshan"
    />
    <EventCard
      title="Retraite bien-être"
      startDate="2025-07-01T10:00:00"
      endDate="2025-07-05T16:00:00"
      excerpt="Retraite de 5 jours avec jeûne et méditation"
      price="890€"
      availableSpots={2}
      totalSpots={6}
    />
    <EventCard
      title="Conférence gratuite"
      startDate="2025-08-20T18:00:00"
      excerpt="Présentation des bienfaits de l'hydrotherapie"
    />
  </div>
);

DesktopGrid.meta = {
  width: 'xlarge',
  description: 'Desktop grid layout with 2-3 columns',
};
