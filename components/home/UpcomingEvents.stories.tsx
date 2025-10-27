import type { Story } from '@ladle/react';
import UpcomingEvents from './UpcomingEvents';

export const WithEvents: Story = () => (
  <UpcomingEvents
    events={[
      {
        title: 'Stage de jeûne printemps',
        startDate: '2025-03-15',
        endDate: '2025-03-20',
        excerpt:
          'Rejoignez-nous pour une semaine de détoxification profonde et de régénération dans un cadre naturel et ressourçant.',
        price: '950€',
        location: 'Saint-Gingolph',
        availableSpots: 5,
        totalSpots: 8,
        featured: true,
      },
      {
        title: 'Atelier méditation tantrique',
        startDate: '2025-02-10',
        excerpt: 'Découvrez les pratiques méditatives tantriques pour harmoniser corps et esprit.',
        price: '60€',
        location: 'Saint-Gingolph',
        availableSpots: 12,
        totalSpots: 15,
      },
      {
        title: 'Journée détox et bien-être',
        startDate: '2025-02-25',
        excerpt:
          'Une journée complète dédiée à votre bien-être avec hydrothérapie, massage et conseils nutrition.',
        price: '180€',
        location: 'Saint-Gingolph',
        availableSpots: 6,
        totalSpots: 10,
      },
    ]}
  />
);

export const WithManyEvents: Story = () => (
  <UpcomingEvents
    events={[
      {
        title: 'Stage de jeûne printemps',
        startDate: '2025-03-15',
        endDate: '2025-03-20',
        excerpt: 'Une semaine de détox et régénération',
        price: '950€',
        location: 'Saint-Gingolph',
        availableSpots: 5,
        totalSpots: 8,
        featured: true,
      },
      {
        title: 'Atelier méditation',
        startDate: '2025-02-10',
        excerpt: 'Découverte de la méditation tantrique',
        price: '60€',
      },
      {
        title: 'Journée détox',
        startDate: '2025-02-25',
        excerpt: 'Journée bien-être complète',
        price: '180€',
      },
      {
        title: 'Weekend yoga et méditation',
        startDate: '2025-04-05',
        endDate: '2025-04-07',
        excerpt: 'Un weekend pour se ressourcer',
        price: '350€',
      },
      {
        title: 'Formation massage ayurvédique',
        startDate: '2025-05-10',
        endDate: '2025-05-14',
        excerpt: 'Apprenez les techniques traditionnelles',
        price: '750€',
      },
    ]}
    maxEvents={3}
  />
);

export const NoEvents: Story = () => <UpcomingEvents events={[]} />;

export const SingleEvent: Story = () => (
  <UpcomingEvents
    events={[
      {
        title: "Stage de jeûne d'été",
        startDate: '2025-07-15',
        endDate: '2025-07-22',
        excerpt: "Profitez de l'été pour vous régénérer avec une semaine de jeûne thérapeutique.",
        price: '950€',
        location: 'Saint-Gingolph',
        availableSpots: 3,
        totalSpots: 8,
        featured: true,
      },
    ]}
  />
);

export const MobileView: Story = () => (
  <UpcomingEvents
    events={[
      {
        title: 'Stage de jeûne',
        startDate: '2025-03-15',
        endDate: '2025-03-20',
        excerpt: 'Une semaine de détox',
        price: '950€',
        availableSpots: 5,
        totalSpots: 8,
      },
      {
        title: 'Atelier méditation',
        startDate: '2025-02-10',
        excerpt: 'Méditation tantrique',
        price: '60€',
      },
    ]}
  />
);
MobileView.meta = {
  width: 'xsmall',
};
