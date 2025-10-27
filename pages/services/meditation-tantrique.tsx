import { useState } from 'react';
import ContactModal from '@/components/contact/ContactModal';
import Layout from '@/components/Layout';
import FAQAccordion from '@/components/services/FAQAccordion';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import Heading from '@/components/ui/Heading';
import { SITE } from '@/config/site';

const pricing = [
  {
    name: 'Séance découverte',
    price: '60€',
    duration: '60 min',
  },
  {
    name: 'Séance individuelle',
    price: '80€',
    duration: '90 min',
  },
  {
    name: 'Forfait 5 séances',
    price: '350€',
    savings: 'Économie de 50€',
  },
];

const faqItems = [
  {
    question: "Qu'est-ce que la méditation tantrique ?",
    answer:
      "La méditation tantrique est une pratique spirituelle issue du tantra, visant à éveiller l'énergie vitale et à harmoniser le corps, le mental et l'esprit. Elle utilise des techniques de respiration, de visualisation et de présence consciente.",
  },
  {
    question: "Dois-je avoir de l'expérience en méditation ?",
    answer:
      'Non, la méditation tantrique est accessible à tous, débutants comme pratiquants expérimentés. Chaque séance est adaptée à votre niveau et à vos besoins du moment.',
  },
  {
    question: 'Quelle est la différence avec la méditation classique ?',
    answer:
      "La méditation tantrique intègre le corps et les sens dans la pratique, contrairement à certaines méditations qui cherchent à les transcender. Elle utilise l'énergie vitale (kundalini) comme support de transformation.",
  },
  {
    question: 'Les séances sont-elles individuelles ou en groupe ?',
    answer:
      'Nous proposons principalement des séances individuelles pour un accompagnement personnalisé. Des ateliers de groupe peuvent être organisés ponctuellement.',
  },
];

export default function MeditationTantriquePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'booking' | 'question'>('booking');

  const title = 'Méditation tantrique';

  return (
    <Layout currentPage="/services" title={`${title} - ${SITE.name}`}>
      <ServicePageLayout
        title={title}
        duration="60-90 min"
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
            <Heading level={2}>La voie du tantra</Heading>
            <div className="mt-6 space-y-4 text-dark-gray">
              <p>
                Le tantra est une voie spirituelle ancestrale qui considère le corps comme un temple
                et l'énergie vitale comme la clé de la transformation intérieure. Loin des clichés,
                la méditation tantrique est une pratique profonde d'éveil de la conscience.
              </p>
              <p>
                Cette pratique permet d'accéder à un état de présence profonde, d'harmoniser les
                polarités intérieures et de libérer les blocages énergétiques. Elle favorise une
                connexion authentique avec soi-même et avec le vivant.
              </p>
            </div>
          </section>

          <section>
            <Heading level={2}>Les bienfaits</Heading>
            <ul className="mt-6 space-y-3">
              {[
                'Apaisement du mental et réduction du stress',
                "Éveil de l'énergie vitale (kundalini)",
                'Harmonisation des centres énergétiques (chakras)',
                'Amélioration de la présence et de la conscience corporelle',
                'Libération des blocages émotionnels',
                "Développement de la créativité et de l'intuition",
                'Renforcement de la vitalité et de la joie de vivre',
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
            <Heading level={2}>Déroulement d'une séance</Heading>
            <div className="mt-6 space-y-6">
              {[
                {
                  step: '1',
                  title: 'Accueil et intention',
                  description:
                    "Temps d'échange pour clarifier votre intention et vous préparer à la pratique (10 min).",
                },
                {
                  step: '2',
                  title: 'Centrage et ancrage',
                  description:
                    "Exercices de respiration et de présence pour vous connecter à votre corps et à l'instant présent.",
                },
                {
                  step: '3',
                  title: 'Méditation guidée',
                  description:
                    'Pratique méditative adaptée à vos besoins : visualisations, mantras, travail énergétique (40-70 min).',
                },
                {
                  step: '4',
                  title: 'Intégration',
                  description:
                    'Temps de retour en douceur et partage de votre expérience si vous le souhaitez (10 min).',
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
                className="fa-solid fa-info-circle mt-1 text-2xl text-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-headings text-lg font-semibold text-black">
                  Informations pratiques
                </h3>
                <p className="mt-2 text-dark-gray">
                  Prévoyez des vêtements confortables et amples. La méditation se pratique assis ou
                  allongé selon les techniques. Un tapis et des coussins sont fournis.
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
