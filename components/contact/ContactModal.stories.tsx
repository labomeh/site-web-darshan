import { useState } from 'react';
import type { Story } from '@ladle/react';
import ContactModal from './ContactModal';

const mockContactInfo = {
  email: 'contact@centre-darshan.fr',
  phone: '+33 6 12 34 56 78',
};

export const BookingMode: Story = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Ouvrir modal de réservation
      </button>
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="booking"
        contactInfo={mockContactInfo}
      />
    </div>
  );
};

export const BookingModeWithService: Story = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Ouvrir modal de réservation (avec service)
      </button>
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="booking"
        contactInfo={mockContactInfo}
        serviceName="Hydrothérapie du Côlon"
      />
    </div>
  );
};

export const QuestionMode: Story = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-secondary px-6 py-3 font-medium text-white transition-colors hover:bg-secondary-dark"
      >
        Ouvrir modal de question
      </button>
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="question"
        contactInfo={mockContactInfo}
      />
    </div>
  );
};

export const QuestionModeWithService: Story = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-secondary px-6 py-3 font-medium text-white transition-colors hover:bg-secondary-dark"
      >
        Ouvrir modal de question (avec service)
      </button>
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="question"
        contactInfo={mockContactInfo}
        serviceName="Massage Ayurvédique"
      />
    </div>
  );
};

export const MobileView: Story = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Ouvrir modal (mobile)
      </button>
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode="booking"
        contactInfo={mockContactInfo}
        serviceName="Méditation Tantrique"
      />
    </div>
  );
};
MobileView.meta = {
  width: 'xsmall',
};
