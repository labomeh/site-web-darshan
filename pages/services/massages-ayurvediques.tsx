import { useState } from 'react';
import ContactModal from '@/components/contact/ContactModal';
import Layout from '@/components/Layout';
import FAQAccordion from '@/components/services/FAQAccordion';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import Heading from '@/components/ui/Heading';
import { SITE } from '@/config/site';

const pricing = [
  {
    name: 'Massage abhyanga (corps entier)',
    price: '90€',
    duration: '60 min',
  },
  {
    name: 'Massage shirodhara (crâne et front)',
    price: '75€',
    duration: '45 min',
  },
  {
    name: 'Massage ayurvédique sur-mesure',
    price: '110€',
    duration: '75 min',
  },
  {
    name: 'Forfait 3 séances',
    price: '250€',
    savings: 'Économie de 20€',
  },
];

const faqItems = [
  {
    question: "Qu'est-ce que le massage ayurvédique ?",
    answer:
      'Le massage ayurvédique est une technique traditionnelle indienne qui vise à rééquilibrer les énergies vitales (doshas) du corps. Il utilise des huiles chaudes et des mouvements spécifiques adaptés à votre constitution.',
  },
  {
    question: 'Quelle est la différence entre un massage classique et un massage ayurvédique ?',
    answer:
      'Le massage ayurvédique est personnalisé selon votre constitution (Vata, Pitta ou Kapha) et vos déséquilibres énergétiques. Il combine plusieurs techniques : pétrissage, pressions, étirements et utilise des huiles médicinales chaudes.',
  },
  {
    question: 'Dois-je me dévêtir complètement ?',
    answer:
      'Oui, pour profiter pleinement des bienfaits du massage. Vous serez couvert par un drap et seule la zone massée sera découverte. Votre intimité et votre confort sont respectés tout au long de la séance.',
  },
  {
    question: 'À quelle fréquence faire des massages ayurvédiques ?',
    answer:
      "Pour un effet thérapeutique optimal, une cure de 3 à 5 séances rapprochées (1 à 2 fois par semaine) est recommandée. Pour l'entretien, une séance mensuelle permet de maintenir l'équilibre.",
  },
  {
    question: 'Y a-t-il des contre-indications ?',
    answer:
      'Le massage ayurvédique est déconseillé en cas de fièvre, infection cutanée, phlébite, ou dans les 3 premiers mois de grossesse. En cas de doute, consultez votre médecin.',
  },
];

export default function MassagesAyurvediquesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'booking' | 'question'>('booking');

  const handleBookingClick = () => {
    setModalMode('booking');
    setIsModalOpen(true);
  };

  const handleQuestionClick = () => {
    setModalMode('question');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const title = 'Massages ayurvédiques';

  return (
    <Layout currentPage="/services" title={`${title} - ${SITE.name}`}>
      <ServicePageLayout
        title={title}
        duration="45-75 min"
        pricing={pricing}
        onBookingClick={handleBookingClick}
        onQuestionClick={handleQuestionClick}
      >
        <div className="space-y-12">
          <section>
            <Heading level={2}>La tradition ayurvédique</Heading>
            <div className="mt-6 space-y-4 text-dark-gray">
              <p>
                Le massage ayurvédique trouve ses racines dans l'Ayurveda, la médecine
                traditionnelle indienne vieille de plus de 5000 ans. Cette approche holistique
                considère l'être humain dans sa globalité : corps, esprit et âme.
              </p>
              <p>
                Chaque massage est personnalisé selon votre constitution énergétique (dosha) et vos
                déséquilibres du moment. L'utilisation d'huiles végétales chaudes, souvent enrichies
                de plantes médicinales, permet une pénétration profonde et une action thérapeutique
                complète.
              </p>
            </div>
          </section>

          <section>
            <Heading level={2}>Les bienfaits</Heading>
            <ul className="mt-6 space-y-3">
              {[
                'Détente profonde et réduction du stress',
                'Amélioration de la circulation sanguine et lymphatique',
                'Élimination des toxines par stimulation du système lymphatique',
                'Assouplissement des articulations et des muscles',
                'Renforcement du système immunitaire',
                'Amélioration de la qualité du sommeil',
                'Harmonisation des énergies vitales (doshas)',
                'Régénération de la peau grâce aux huiles nourrissantes',
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
            <Heading level={2}>Types de massages proposés</Heading>
            <div className="mt-6 space-y-6">
              {[
                {
                  name: 'Abhyanga',
                  icon: 'fa-hands',
                  description:
                    "Massage du corps entier à l'huile chaude. C'est le massage ayurvédique le plus complet, qui harmonise tous les doshas et procure une détente profonde.",
                },
                {
                  name: 'Shirodhara',
                  icon: 'fa-brain',
                  description:
                    "Massage du crâne et du front avec un filet d'huile tiède coulant en continu. Parfait pour apaiser le mental, réduire l'anxiété et améliorer le sommeil.",
                },
                {
                  name: 'Massage sur-mesure',
                  icon: 'fa-spa',
                  description:
                    'Un massage personnalisé qui combine différentes techniques selon vos besoins spécifiques et votre constitution. Idéal pour un soin ciblé et adapté.',
                },
              ].map((massage) => (
                <div
                  key={massage.name}
                  className="rounded-lg border border-light-gray bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <i
                        className={`fa-solid ${massage.icon} text-xl text-primary`}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-headings text-xl font-semibold text-black">
                        {massage.name}
                      </h3>
                      <p className="mt-2 text-dark-gray">{massage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading level={2}>Déroulement d'une séance</Heading>
            <div className="mt-6 space-y-6">
              {[
                {
                  step: '1',
                  title: 'Entretien personnalisé',
                  description:
                    'Échange sur votre constitution, vos besoins et vos objectifs pour adapter le massage (10 min).',
                },
                {
                  step: '2',
                  title: 'Préparation',
                  description:
                    'Installation confortable et préparation des huiles spécifiques à votre dosha.',
                },
                {
                  step: '3',
                  title: 'Massage thérapeutique',
                  description:
                    'Le massage adapté à vos besoins avec des techniques traditionnelles et des huiles chaudes (45-75 min).',
                },
                {
                  step: '4',
                  title: 'Temps de repos',
                  description:
                    'Un moment de repos pour intégrer les bienfaits du massage, suivi de conseils personnalisés (10 min).',
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
            <Heading level={2}>Pour qui ?</Heading>
            <div className="mt-6 space-y-4 text-dark-gray">
              <p>Le massage ayurvédique s'adresse à toute personne souhaitant :</p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Se relaxer profondément et réduire le stress</li>
                <li className="list-disc">Soulager des tensions musculaires ou articulaires</li>
                <li className="list-disc">Améliorer sa circulation et éliminer les toxines</li>
                <li className="list-disc">Retrouver un équilibre énergétique</li>
                <li className="list-disc">Accompagner un changement de saison ou de mode de vie</li>
                <li className="list-disc">Découvrir une approche holistique du bien-être</li>
              </ul>
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
                  Conseil avant votre séance
                </h3>
                <p className="mt-2 text-dark-gray">
                  Prévoyez des vêtements confortables et évitez de manger lourdement dans les 2
                  heures précédant le massage. Pensez à bien vous hydrater avant et après la séance
                  pour optimiser l'élimination des toxines.
                </p>
              </div>
            </div>
          </section>
        </div>
      </ServicePageLayout>

      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        mode={modalMode}
        serviceName={title}
      />
    </Layout>
  );
}
