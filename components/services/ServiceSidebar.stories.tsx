import type { Story } from '@ladle/react';
import ServiceSidebar from './ServiceSidebar';

const mockPricing = [
  {
    name: 'Séance individuelle',
    price: '120€',
    duration: '45-60 min',
  },
  {
    name: '3 séances',
    price: '340€',
    savings: 'Économie de 20€',
  },
  {
    name: '5 séances',
    price: '550€',
    savings: 'Économie de 50€',
  },
];

const mockEvents = [
  {
    title: 'Week-end Nettoyage du Foie',
    date: '15-17 Mars 2025',
  },
  {
    title: 'Séminaire Méditation Tantra',
    date: '5-11 Avril 2025',
  },
];

export const Default: Story = () => (
  <div className="min-h-screen bg-off-white p-8">
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px]">
      <div>
        <h1 className="mb-6 font-headings text-4xl text-black">Hydrothérapie du Côlon</h1>
        <div className="rounded-lg bg-white p-6">
          <p className="mb-4 text-dark-gray">
            L'hydrothérapie du côlon est une méthode douce de nettoyage intestinal qui permet
            d'éliminer les toxines accumulées dans le côlon.
          </p>
          <p className="mb-4 text-dark-gray">
            Cette technique, pratiquée depuis l'Antiquité, consiste en une irrigation douce du côlon
            avec de l'eau filtrée à température contrôlée.
          </p>
          <p className="text-dark-gray">
            Les séances durent entre 45 et 60 minutes et se déroulent dans un environnement calme et
            professionnel.
          </p>
        </div>
      </div>
      <ServiceSidebar
        duration="45-60 minutes"
        pricing={mockPricing}
        onBookingClick={() => alert('Réserver clicked')}
        onQuestionClick={() => alert('Question clicked')}
      />
    </div>
  </div>
);

export const WithEvents: Story = () => (
  <div className="min-h-screen bg-off-white p-8">
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px]">
      <div>
        <h1 className="mb-6 font-headings text-4xl text-black">
          Nettoyage du Foie et Vésicule Biliaire
        </h1>
        <div className="rounded-lg bg-white p-6">
          <p className="mb-4 text-dark-gray">
            Le nettoyage du foie selon la méthode Andreas Moritz est un protocole naturel qui permet
            d'éliminer les calculs biliaires et d'améliorer le fonctionnement hépatique.
          </p>
          <p className="text-dark-gray">
            Ce processus nécessite une préparation de 5 jours suivie d'un week-end intensif au
            centre.
          </p>
        </div>
      </div>
      <ServiceSidebar
        duration="Week-end complet"
        pricing={[
          {
            name: 'Week-end tout compris',
            price: '315€',
          },
        ]}
        onBookingClick={() => alert('Réserver clicked')}
        onQuestionClick={() => alert('Question clicked')}
        relatedEvents={mockEvents}
      />
    </div>
  </div>
);

export const SinglePrice: Story = () => (
  <div className="min-h-screen bg-off-white p-8">
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px]">
      <div>
        <h1 className="mb-6 font-headings text-4xl text-black">Trio de Soins Detox</h1>
        <div className="rounded-lg bg-white p-6">
          <p className="text-dark-gray">
            Le Trio de Soins Detox combine trois techniques complémentaires pour une expérience de
            détoxification complète.
          </p>
        </div>
      </div>
      <ServiceSidebar
        duration="2h30 - 3h"
        pricing={[
          {
            name: 'Package complet',
            price: '260€',
          },
        ]}
        onBookingClick={() => alert('Réserver clicked')}
        onQuestionClick={() => alert('Question clicked')}
      />
    </div>
  </div>
);

export const DesktopView: Story = () => (
  <div className="min-h-screen bg-off-white p-8">
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px]">
      <div>
        <h1 className="mb-6 font-headings text-4xl text-black">Massage Ayurvédique</h1>
        <div className="space-y-4 rounded-lg bg-white p-6">
          <p className="text-dark-gray">
            Le massage ayurvédique est une pratique millénaire issue de la médecine traditionnelle
            indienne.
          </p>
          <p className="text-dark-gray">
            Cette technique utilise des huiles chaudes et des mouvements spécifiques pour
            rééquilibrer les doshas et favoriser la circulation de l'énergie vitale.
          </p>
        </div>
      </div>
      <ServiceSidebar
        duration="60-90 minutes"
        pricing={[
          {
            name: '1 séance',
            price: '100€',
          },
          {
            name: '3 séances',
            price: '280€',
            savings: 'Économie de 20€',
          },
          {
            name: '5 séances',
            price: '450€',
            savings: 'Économie de 50€',
          },
        ]}
        onBookingClick={() => alert('Réserver clicked')}
        onQuestionClick={() => alert('Question clicked')}
      />
    </div>
  </div>
);
DesktopView.meta = {
  width: 'large',
};
