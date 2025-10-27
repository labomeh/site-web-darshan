import { useState } from 'react';
import ContactModal from '@/components/contact/ContactModal';
import Layout from '@/components/Layout';
import FAQAccordion from '@/components/services/FAQAccordion';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import Heading from '@/components/ui/Heading';
import { SITE } from '@/config/site';

const pricing = [
  {
    name: 'Séance individuelle',
    price: '120€',
    duration: '45-60 min',
  },
  {
    name: 'Forfait 3 séances',
    price: '340€',
    savings: 'Économie de 20€',
  },
  {
    name: 'Forfait 5 séances',
    price: '550€',
    savings: 'Économie de 50€',
  },
];

const faqItems = [
  {
    question: "Comment se déroule une séance d'hydrothérapie du côlon ?",
    answer:
      "La séance dure environ 45 à 60 minutes. Vous serez installé confortablement et nous prendrons le temps de discuter de vos besoins avant de commencer. L'irrigation se fait en douceur avec de l'eau purifiée à température corporelle.",
  },
  {
    question: 'Y a-t-il des contre-indications ?',
    answer:
      'Certaines conditions médicales peuvent nécessiter un avis médical préalable : grossesse, troubles cardiovasculaires récents, maladies inflammatoires intestinales en phase aiguë. Nous en discuterons lors de la prise de rendez-vous.',
  },
  {
    question: 'À quelle fréquence faire des séances ?',
    answer:
      "La fréquence dépend de vos objectifs et de votre état de santé. En général, un programme de 3 à 5 séances espacées de quelques semaines est recommandé pour un nettoyage en profondeur, suivi d'une séance d'entretien tous les 3 à 6 mois.",
  },
  {
    question: 'Est-ce douloureux ?',
    answer:
      "Non, l'hydrothérapie du côlon est une pratique douce et non douloureuse. Vous pourriez ressentir de légères sensations de pression ou de ballonnement, mais cela reste confortable. Nous adaptons la séance à votre ressenti.",
  },
  {
    question: "Quels sont les bienfaits de l'hydrothérapie du côlon ?",
    answer:
      "Les bienfaits incluent : amélioration du transit intestinal, meilleure absorption des nutriments, renforcement du système immunitaire, détoxification de l'organisme, regain d'énergie et de vitalité, amélioration de la qualité de la peau.",
  },
];

export default function HydrotherapieDuColonPage() {
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

  const title = 'Hydrothérapie du côlon';

  return (
    <Layout currentPage="/services" title={`${title} - ${SITE.name}`}>
      <ServicePageLayout
        title={title}
        duration="45-60 min"
        pricing={pricing}
        onBookingClick={handleBookingClick}
        onQuestionClick={handleQuestionClick}
      >
        <div className="space-y-12">
          <section>
            <Heading level={2}>Qu'est-ce que l'hydrothérapie du côlon ?</Heading>
            <div className="mt-6 space-y-4 text-dark-gray">
              <p>
                L'hydrothérapie du côlon est une méthode douce et naturelle qui permet de nettoyer
                le côlon en profondeur grâce à l'irrigation avec de l'eau purifiée. Cette technique
                ancestrale favorise l'élimination des toxines et des déchets accumulés dans
                l'intestin.
              </p>
              <p>
                Le côlon joue un rôle essentiel dans notre santé globale. Un côlon encombré peut
                entraîner fatigue, ballonnements, troubles digestifs et affaiblissement du système
                immunitaire. L'hydrothérapie permet de restaurer l'équilibre naturel de la flore
                intestinale.
              </p>
            </div>
          </section>

          <section>
            <Heading level={2}>Les bienfaits</Heading>
            <ul className="mt-6 space-y-3">
              {[
                'Amélioration du transit intestinal et réduction des ballonnements',
                "Renforcement du système immunitaire (70% des cellules immunitaires sont dans l'intestin)",
                'Meilleure absorption des nutriments essentiels',
                "Détoxification de l'organisme et élimination des toxines",
                "Regain d'énergie et de vitalité",
                'Amélioration de la qualité de la peau',
                'Sensation de légèreté et de bien-être général',
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
                  title: 'Entretien préalable',
                  description:
                    "Nous prenons le temps d'échanger sur vos attentes, votre état de santé et vos objectifs (10-15 min).",
                },
                {
                  step: '2',
                  title: 'Installation confortable',
                  description:
                    'Vous êtes installé en position allongée, dans un environnement calme et respectueux de votre intimité.',
                },
                {
                  step: '3',
                  title: 'Irrigation douce',
                  description:
                    "L'eau purifiée à température corporelle circule en douceur dans le côlon, permettant l'élimination des déchets (30-40 min).",
                },
                {
                  step: '4',
                  title: 'Repos et conseils',
                  description:
                    'Temps de repos après la séance avec des conseils personnalisés pour optimiser les bienfaits (5-10 min).',
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
              <p>L'hydrothérapie du côlon s'adresse à toute personne souhaitant :</p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Améliorer son confort digestif</li>
                <li className="list-disc">Préparer un changement alimentaire (régime, détox)</li>
                <li className="list-disc">Renforcer son système immunitaire</li>
                <li className="list-disc">Retrouver de l'énergie et de la vitalité</li>
                <li className="list-disc">Accompagner un programme de gestion du poids</li>
                <li className="list-disc">Compléter une démarche de bien-être global</li>
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
                <h3 className="font-headings text-lg font-semibold text-black">Bon à savoir</h3>
                <p className="mt-2 text-dark-gray">
                  L'hydrothérapie du côlon est une pratique de bien-être et ne remplace pas un
                  traitement médical. En cas de doute ou de pathologie, consultez votre médecin
                  avant de prendre rendez-vous.
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
