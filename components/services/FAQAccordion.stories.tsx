import type { Story } from '@ladle/react';
import FAQAccordion from './FAQAccordion';

export const Default: Story = () => (
  <FAQAccordion
    items={[
      {
        question: 'Combien de temps dure une séance?',
        answer: 'Une séance dure entre 45 et 60 minutes.',
      },
      {
        question: 'Y a-t-il des contre-indications?',
        answer:
          'Oui, certaines conditions médicales sont contre-indiquées. Veuillez consulter votre médecin avant de réserver une séance.',
      },
      {
        question: 'Dois-je apporter quelque chose?',
        answer: 'Non, tout le matériel nécessaire est fourni sur place.',
      },
    ]}
  />
);

export const SingleItem: Story = () => (
  <FAQAccordion
    items={[
      {
        question: 'Puis-je annuler ma réservation?',
        answer: "Oui, vous pouvez annuler votre réservation jusqu'à 24 heures avant la séance.",
      },
    ]}
  />
);

export const ManyItems: Story = () => (
  <FAQAccordion
    items={[
      {
        question: 'Combien de temps dure une séance?',
        answer: 'Une séance dure entre 45 et 60 minutes.',
      },
      {
        question: 'Y a-t-il des contre-indications?',
        answer:
          'Oui, certaines conditions médicales sont contre-indiquées. Veuillez consulter votre médecin avant de réserver une séance.',
      },
      {
        question: 'Dois-je apporter quelque chose?',
        answer: 'Non, tout le matériel nécessaire est fourni sur place.',
      },
      {
        question: 'Puis-je annuler ma réservation?',
        answer: "Oui, vous pouvez annuler votre réservation jusqu'à 24 heures avant la séance.",
      },
      {
        question: 'Est-ce que les séances sont adaptées aux débutants?',
        answer:
          'Absolument! Nos séances sont adaptées à tous les niveaux, y compris les débutants.',
      },
      {
        question: 'Faut-il être à jeun?',
        answer: 'Il est recommandé de ne pas manger de repas lourd 2 heures avant la séance.',
      },
    ]}
  />
);

export const LongContent: Story = () => (
  <FAQAccordion
    items={[
      {
        question: "Quels sont les bienfaits de l'hydrothérapie du côlon?",
        answer:
          "L'hydrothérapie du côlon offre de nombreux bienfaits pour la santé: amélioration de la digestion, réduction des ballonnements, augmentation de l'énergie, renforcement du système immunitaire, amélioration de la qualité de la peau, et bien-être général. Elle aide à éliminer les toxines accumulées dans le côlon et favorise un meilleur fonctionnement du système digestif.",
      },
      {
        question: 'Combien de séances sont recommandées?',
        answer:
          'Le nombre de séances varie selon les besoins individuels. Pour un nettoyage initial, 3 à 5 séances sont généralement recommandées. Pour un entretien régulier, une séance tous les 3 à 6 mois peut être bénéfique. Votre praticien vous conseillera un plan personnalisé lors de votre première consultation.',
      },
    ]}
  />
);

export const MobileView: Story = () => (
  <FAQAccordion
    items={[
      {
        question: 'Combien de temps dure une séance?',
        answer: 'Une séance dure entre 45 et 60 minutes.',
      },
      {
        question: 'Y a-t-il des contre-indications?',
        answer:
          'Oui, certaines conditions médicales sont contre-indiquées. Veuillez consulter votre médecin avant de réserver une séance.',
      },
      {
        question: 'Dois-je apporter quelque chose?',
        answer: 'Non, tout le matériel nécessaire est fourni sur place.',
      },
    ]}
  />
);
MobileView.meta = {
  width: 'xsmall',
};

export const Empty: Story = () => <FAQAccordion items={[]} />;
