import type { Story } from '@ladle/react';
import StickyBottomBar from './StickyBottomBar';

export const Default: Story = () => (
  <div className="min-h-screen bg-off-white p-4 pb-24">
    <div className="rounded-lg bg-white p-6">
      <h1 className="mb-4 font-headings text-2xl text-black">Hydrothérapie du Côlon</h1>
      <p className="mb-4 text-dark-gray">
        L'hydrothérapie du côlon est une méthode douce de nettoyage intestinal qui permet d'éliminer
        les toxines accumulées dans le côlon.
      </p>
      <p className="mb-4 text-dark-gray">
        Cette technique, pratiquée depuis l'Antiquité, consiste en une irrigation douce du côlon
        avec de l'eau filtrée à température contrôlée.
      </p>
      <p className="mb-4 text-dark-gray">
        Les séances durent entre 45 et 60 minutes et se déroulent dans un environnement calme et
        professionnel.
      </p>
      <p className="text-sm text-dark-gray">Scroll down to see the sticky bottom bar...</p>
    </div>

    <StickyBottomBar
      onBookingClick={() => alert('Réserver clicked')}
      onQuestionClick={() => alert('Question clicked')}
    />
  </div>
);

export const WithLongContent: Story = () => (
  <div className="min-h-[200vh] bg-off-white p-4 pb-24">
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6">
        <h1 className="mb-4 font-headings text-2xl text-black">Massage Ayurvédique</h1>
        <p className="mb-4 text-dark-gray">
          Le massage ayurvédique est une pratique millénaire issue de la médecine traditionnelle
          indienne.
        </p>
        <p className="mb-4 text-dark-gray">
          Cette technique utilise des huiles chaudes et des mouvements spécifiques pour rééquilibrer
          les doshas et favoriser la circulation de l'énergie vitale.
        </p>
      </div>

      <div className="rounded-lg bg-white p-6">
        <h2 className="mb-4 font-headings text-xl text-black">Bienfaits</h2>
        <ul className="space-y-2 text-dark-gray">
          <li>• Relaxation profonde du corps et de l'esprit</li>
          <li>• Amélioration de la circulation sanguine et lymphatique</li>
          <li>• Élimination des toxines</li>
          <li>• Renforcement du système immunitaire</li>
          <li>• Réduction du stress et de l'anxiété</li>
        </ul>
      </div>

      <div className="rounded-lg bg-white p-6">
        <h2 className="mb-4 font-headings text-xl text-black">Tarifs</h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between">
              <span className="text-black">1 séance</span>
              <span className="font-bold text-primary">100€</span>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between">
              <span className="text-black">3 séances</span>
              <span className="font-bold text-primary">280€</span>
            </div>
            <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Économie de 20€
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6">
        <p className="text-center text-sm text-dark-gray">
          Scroll to see the sticky bottom bar remain visible
        </p>
      </div>
    </div>

    <StickyBottomBar
      onBookingClick={() => alert('Réserver clicked')}
      onQuestionClick={() => alert('Question clicked')}
    />
  </div>
);

export const MobileView: Story = () => (
  <div className="min-h-screen bg-off-white p-4 pb-24">
    <div className="rounded-lg bg-white p-6">
      <h1 className="mb-4 font-headings text-xl text-black">Nettoyage du Foie</h1>
      <p className="mb-4 text-dark-gray">
        Le nettoyage du foie selon la méthode Andreas Moritz est un protocole naturel qui permet
        d'éliminer les calculs biliaires.
      </p>
      <p className="mb-4 text-dark-gray">
        Ce processus nécessite une préparation de 5 jours suivie d'un week-end intensif au centre.
      </p>
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
        <p className="text-sm font-medium text-black">
          💡 Notice how the buttons are thumb-friendly on mobile
        </p>
      </div>
    </div>

    <StickyBottomBar
      onBookingClick={() => alert('Réserver clicked')}
      onQuestionClick={() => alert('Question clicked')}
    />
  </div>
);
MobileView.meta = {
  width: 'xsmall',
};
