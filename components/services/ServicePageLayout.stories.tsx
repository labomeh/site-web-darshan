import type { Story } from '@ladle/react';
import Heading from '@/components/ui/Heading';
import FAQAccordion from './FAQAccordion';
import ServicePageLayout from './ServicePageLayout';

const mockPricing = [
  { name: 'Séance individuelle', price: '120€', duration: '45-60 min' },
  { name: 'Forfait 3 séances', price: '340€', savings: 'Économie de 20€' },
  { name: 'Forfait 5 séances', price: '550€', savings: 'Économie de 50€' },
];

const mockEvents = [
  { title: 'Atelier bien-être', date: '15 janvier 2025' },
  { title: 'Conférence santé', date: '22 janvier 2025' },
];

const mockFAQ = [
  {
    question: 'Comment se déroule une séance ?',
    answer:
      'La séance dure environ 45-60 minutes. Vous serez installé confortablement et nous prendrons le temps de discuter de vos besoins avant de commencer.',
  },
  {
    question: 'Y a-t-il des contre-indications ?',
    answer:
      'Certaines conditions médicales peuvent nécessiter un avis médical préalable. Nous en discuterons lors de la prise de rendez-vous.',
  },
];

export const Default: Story = () => (
  <ServicePageLayout
    title="Hydrothérapie du côlon"
    duration="45-60 min"
    pricing={mockPricing}
    onBookingClick={() => alert('Booking clicked')}
    onQuestionClick={() => alert('Question clicked')}
  >
    <div className="space-y-8">
      <div>
        <Heading level={2}>Description</Heading>
        <p className="mt-4 text-dark-gray">
          L'hydrothérapie du côlon est une méthode douce et naturelle qui permet de nettoyer le
          côlon en profondeur. Cette technique ancestrale favorise l'élimination des toxines et
          contribue à améliorer votre bien-être général.
        </p>
      </div>

      <div>
        <Heading level={2}>Bienfaits</Heading>
        <ul className="mt-4 space-y-2 text-dark-gray">
          <li className="flex items-start gap-3">
            <i className="fa-solid fa-check mt-1 text-primary" aria-hidden="true" />
            <span>Amélioration du transit intestinal</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fa-solid fa-check mt-1 text-primary" aria-hidden="true" />
            <span>Renforcement du système immunitaire</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fa-solid fa-check mt-1 text-primary" aria-hidden="true" />
            <span>Meilleure absorption des nutriments</span>
          </li>
        </ul>
      </div>

      <div>
        <Heading level={2}>Questions fréquentes</Heading>
        <FAQAccordion items={mockFAQ} className="mt-4" />
      </div>
    </div>
  </ServicePageLayout>
);

export const WithEvents: Story = () => (
  <ServicePageLayout
    title="Massage bien-être"
    duration="60 min"
    pricing={mockPricing}
    relatedEvents={mockEvents}
    onBookingClick={() => alert('Booking clicked')}
    onQuestionClick={() => alert('Question clicked')}
  >
    <div className="space-y-8">
      <div>
        <Heading level={2}>Description</Heading>
        <p className="mt-4 text-dark-gray">
          Le massage bien-être combine différentes techniques pour vous offrir un moment de
          relaxation profonde. Idéal pour relâcher les tensions musculaires et mentales.
        </p>
      </div>
    </div>
  </ServicePageLayout>
);

export const MobileView: Story = () => (
  <ServicePageLayout
    title="Réflexologie plantaire"
    duration="45 min"
    pricing={mockPricing.slice(0, 2)}
    onBookingClick={() => alert('Booking clicked')}
    onQuestionClick={() => alert('Question clicked')}
  >
    <div className="space-y-8">
      <div>
        <Heading level={2}>Description</Heading>
        <p className="mt-4 text-dark-gray">
          La réflexologie plantaire stimule des points précis sur les pieds pour rétablir
          l'équilibre naturel du corps.
        </p>
      </div>
    </div>
  </ServicePageLayout>
);
MobileView.meta = {
  width: 'xsmall',
};
