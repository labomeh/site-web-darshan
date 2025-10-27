import { useState } from 'react';
import ContactModal from '@/components/contact/ContactModal';
import Layout from '@/components/Layout';
import FAQAccordion from '@/components/services/FAQAccordion';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import Heading from '@/components/ui/Heading';
import { SITE } from '@/config/site';

const pricing = [
  {
    name: 'Programme nettoyage du foie',
    price: '150€',
    duration: 'Programme sur 3 jours',
  },
  {
    name: 'Suivi post-nettoyage',
    price: '50€',
    duration: '30 min',
  },
];

const faqItems = [
  {
    question: 'Pourquoi faire un nettoyage du foie ?',
    answer:
      "Le foie est l'organe de détoxification principal du corps. Un nettoyage permet d'éliminer les toxines accumulées, d'améliorer les fonctions hépatiques et de retrouver vitalité et énergie.",
  },
  {
    question: 'Comment se déroule le programme ?',
    answer:
      'Le programme se déroule sur 3 jours avec une préparation alimentaire spécifique, la prise de remèdes naturels et un suivi personnalisé. Un protocole détaillé vous sera remis lors de la première consultation.',
  },
  {
    question: 'Y a-t-il des effets secondaires ?',
    answer:
      'Des sensations légères peuvent apparaître : fatigue temporaire, maux de tête légers. Ce sont des signes que le corps élimine les toxines. Ces symptômes disparaissent rapidement.',
  },
  {
    question: 'À quelle fréquence faire un nettoyage ?',
    answer:
      "Un nettoyage du foie peut être réalisé 2 à 4 fois par an, idéalement aux changements de saisons (printemps et automne). L'espacement dépend de vos besoins et de votre mode de vie.",
  },
];

export default function NettoyageDuFoiePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'booking' | 'question'>('booking');

  const title = 'Nettoyage du foie';

  return (
    <Layout currentPage="/services" title={`${title} - ${SITE.name}`}>
      <ServicePageLayout
        title={title}
        duration="Programme sur 3 jours"
        pricing={pricing}
        onBookingClick={() => {
          setModalMode('booking');
          setIsModalOpen(true);
        }}
        onQuestionClick={() => {
          setModalMode('question');
          setIsModalOpen(true);
        }}
      >
        <div className="space-y-12">
          <section>
            <Heading level={2}>Le foie, organe vital</Heading>
            <div className="mt-6 space-y-4 text-dark-gray">
              <p>
                Le foie est l'un des organes les plus importants du corps humain. Il assure plus de
                500 fonctions vitales, dont la détoxification, la production de bile, la régulation
                du métabolisme et le stockage des nutriments.
              </p>
              <p>
                Notre mode de vie moderne (alimentation transformée, stress, pollution, médicaments)
                sollicite intensément le foie. Un nettoyage régulier permet de le soulager et de
                maintenir son bon fonctionnement.
              </p>
            </div>
          </section>

          <section>
            <Heading level={2}>Les bienfaits</Heading>
            <ul className="mt-6 space-y-3">
              {[
                'Amélioration de la digestion et réduction des ballonnements',
                "Regain d'énergie et de vitalité",
                "Meilleure qualité de la peau (teint lumineux, réduction de l'acné)",
                'Renforcement du système immunitaire',
                'Amélioration du sommeil',
                'Clarté mentale et meilleure concentration',
                'Perte de poids naturelle pour certaines personnes',
                'Élimination des calculs biliaires',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-dark-gray">
                  <i
                    className="fa-solid fa-check mt-1 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading level={2}>Déroulement du programme</Heading>
            <div className="mt-6 space-y-6">
              {[
                {
                  step: '1',
                  title: 'Consultation initiale',
                  description:
                    'Entretien pour évaluer votre état de santé, vos antécédents et vos objectifs. Remise du protocole détaillé.',
                },
                {
                  step: '2',
                  title: 'Préparation (3-5 jours)',
                  description:
                    'Alimentation légère et spécifique pour préparer le foie en douceur. Début de la prise de remèdes naturels.',
                },
                {
                  step: '3',
                  title: 'Nettoyage intensif (1 jour)',
                  description:
                    "Journée de nettoyage avec un protocole précis utilisant des ingrédients naturels (sels d'Epsom, jus de pamplemousse, huile d'olive).",
                },
                {
                  step: '4',
                  title: 'Récupération et suivi',
                  description:
                    'Reprise alimentaire progressive. Suivi post-nettoyage pour évaluer les résultats et ajuster si nécessaire.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-lg border border-light-gray bg-off-white p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-headings text-lg font-bold text-primary">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headings text-lg font-semibold text-black">{item.title}</h3>
                    <p className="mt-2 text-dark-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading level={2}>Questions fréquentes</Heading>
            <FAQAccordion items={faqItems} className="mt-6" />
          </section>

          <section className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
            <div className="flex items-start gap-4">
              <i
                className="fa-solid fa-triangle-exclamation mt-1 text-2xl text-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-headings text-lg font-semibold text-black">
                  Contre-indications
                </h3>
                <p className="mt-2 text-dark-gray">
                  Le nettoyage du foie est déconseillé en cas de grossesse, allaitement, calculs
                  biliaires volumineux, maladies hépatiques sévères ou troubles gastro-intestinaux
                  aigus. Un avis médical est recommandé en cas de doute.
                </p>
              </div>
            </div>
          </section>
        </div>
      </ServicePageLayout>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        serviceName={title}
      />
    </Layout>
  );
}
