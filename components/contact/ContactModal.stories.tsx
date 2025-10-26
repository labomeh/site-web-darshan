import { useState } from 'react';
import type { Story } from '@ladle/react';
import ContactModal from './ContactModal';

export const BookingMode: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-off-white p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 font-headings text-2xl text-black">
          Test du Modal de Réservation
        </h2>
        <p className="mb-4 text-dark-gray">
          Cliquez sur le bouton ci-dessous pour ouvrir le modal de réservation avec formulaire.
        </p>
        <p className="mb-6 text-sm text-dark-gray">
          Le formulaire envoie un email formaté via Web3Forms avec les informations du client.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          <i className="fa-solid fa-calendar-check mr-2" aria-hidden="true" />
          Ouvrir modal de réservation
        </button>
      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="booking"
      />
    </div>
  );
};

export const BookingModeWithService: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-off-white p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 font-headings text-2xl text-black">
          Réservation avec Service Spécifique
        </h2>
        <p className="mb-4 text-dark-gray">
          Ce modal inclut le nom du service dans le sujet et le message pré-rempli.
        </p>
        <p className="mb-6 text-sm text-dark-gray">
          Service: <strong>Hydrothérapie du Côlon</strong>
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          <i className="fa-solid fa-calendar-check mr-2" aria-hidden="true" />
          Réserver Hydrothérapie
        </button>
      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="booking"
        serviceName="Hydrothérapie du Côlon"
      />
    </div>
  );
};

export const QuestionMode: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-off-white p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 font-headings text-2xl text-black">
          Test du Modal Questions
        </h2>
        <p className="mb-4 text-dark-gray">
          Cliquez sur le bouton ci-dessous pour poser une question.
        </p>
        <p className="mb-6 text-sm text-dark-gray">
          Le formulaire envoie un email avec votre question aux coordonnées du centre.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg border-2 border-secondary bg-white px-6 py-3 font-medium text-secondary transition-colors hover:bg-secondary/5"
        >
          <i className="fa-solid fa-message mr-2" aria-hidden="true" />
          Poser une question
        </button>
      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="question"
      />
    </div>
  );
};

export const QuestionModeWithService: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-off-white p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 font-headings text-2xl text-black">
          Question sur un Service Spécifique
        </h2>
        <p className="mb-4 text-dark-gray">
          Ce modal inclut le nom du service dans le sujet et le message pré-rempli.
        </p>
        <p className="mb-6 text-sm text-dark-gray">
          Service: <strong>Massage Ayurvédique</strong>
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg border-2 border-secondary bg-white px-6 py-3 font-medium text-secondary transition-colors hover:bg-secondary/5"
        >
          <i className="fa-solid fa-message mr-2" aria-hidden="true" />
          Question sur les massages
        </button>
      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="question"
        serviceName="Massage Ayurvédique"
      />
    </div>
  );
};

export const MobileView: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-off-white p-4">
      <div className="rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-3 font-headings text-xl text-black">
          Vue Mobile
        </h2>
        <p className="mb-4 text-sm text-dark-gray">
          Testez le modal sur mobile. Le formulaire s'adapte automatiquement à la taille de l'écran.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          <i className="fa-solid fa-calendar-check mr-2" aria-hidden="true" />
          Réserver
        </button>
      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="booking"
        serviceName="Méditation Tantrique"
      />
    </div>
  );
};
MobileView.meta = {
  width: 'xsmall',
};

export const InteractionDemo: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'booking' | 'question'>('booking');

  return (
    <div className="flex min-h-screen items-center justify-center bg-off-white p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 font-headings text-2xl text-black">
          Démo Interactive
        </h2>
        <p className="mb-6 text-dark-gray">
          Testez les deux modes du modal: réservation et question.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setMode('booking');
              setIsOpen(true);
            }}
            className="flex-1 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
          >
            <i className="fa-solid fa-calendar-check mr-2" aria-hidden="true" />
            Réserver
          </button>
          <button
            onClick={() => {
              setMode('question');
              setIsOpen(true);
            }}
            className="flex-1 rounded-lg border-2 border-primary bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/5"
          >
            <i className="fa-solid fa-message mr-2" aria-hidden="true" />
            Question
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={mode}
        serviceName="Hydrothérapie du Côlon"
      />
    </div>
  );
};

export const FormInteraction: Story = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-off-white p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 font-headings text-2xl text-black">
          Test d'Interaction du Formulaire
        </h2>
        <p className="mb-4 text-dark-gray">
          Modal ouvert par défaut pour tester le formulaire facilement.
        </p>
        <p className="mb-6 text-sm text-dark-gray">
          Remplissez tous les champs obligatoires pour tester la validation et la soumission.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          <i className="fa-solid fa-calendar-check mr-2" aria-hidden="true" />
          Rouvrir le modal
        </button>
      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="booking"
        serviceName="Hydrothérapie du Côlon"
      />
    </div>
  );
};
