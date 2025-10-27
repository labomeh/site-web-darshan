import { useState } from 'react';
import ContactModal from '@/components/contact/ContactModal';
import Layout from '@/components/Layout';
import FAQAccordion from '@/components/services/FAQAccordion';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import Heading from '@/components/ui/Heading';
import { SITE } from '@/config/site';

const pricing = [
  {
    name: 'Stage de jeûne 3 jours',
    price: '450€',
    duration: 'Programme complet avec hébergement',
  },
  {
    name: 'Stage de jeûne 5 jours',
    price: '700€',
    duration: 'Programme complet avec hébergement',
  },
  {
    name: 'Stage de jeûne 7 jours',
    price: '950€',
    duration: 'Programme complet avec hébergement',
    savings: 'Recommandé pour une détox profonde',
  },
];

const faqItems = [
  {
    question: "Qu'est-ce qu'un stage de jeûne ?",
    answer:
      "Un stage de jeûne est une retraite encadrée où vous cessez de vous alimenter pendant quelques jours pour permettre à votre corps de se régénérer. L'accompagnement comprend des activités douces (méditation, yoga, marche), des enseignements et un suivi personnalisé.",
  },
  {
    question: "N'est-ce pas dangereux de ne pas manger ?",
    answer:
      "Non, le jeûne thérapeutique encadré est une pratique ancestrale sans danger pour les personnes en bonne santé. Votre corps utilise ses réserves et entre dans un processus d'autoguérison naturelle. Un entretien préalable permet d'évaluer votre aptitude au jeûne.",
  },
  {
    question: 'Vais-je avoir faim ?',
    answer:
      "La sensation de faim est généralement modérée et disparaît après 24-48h. Le corps s'adapte et produit des corps cétoniques qui procurent énergie et clarté mentale. Les activités proposées et le soutien du groupe facilitent grandement le processus.",
  },
  {
    question: 'Quelle est la différence avec un jeûne à domicile ?',
    answer:
      'Le stage offre un cadre sécurisant avec un accompagnement professionnel, un groupe bienveillant, des activités adaptées et un environnement propice. Cela augmente considérablement les chances de réussite et optimise les bienfaits.',
  },
  {
    question: 'Puis-je travailler pendant un stage de jeûne ?',
    answer:
      'Non, il est essentiel de se mettre en pause pour bénéficier pleinement de cette expérience. Le stage nécessite de se consacrer entièrement à ce processus de régénération physique et mentale.',
  },
];

export default function StageDeJeunePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'booking' | 'question'>('booking');

  const title = 'Stage de jeûne';

  return (
    <Layout currentPage="/services" title={`${title} - ${SITE.name}`}>
      <ServicePageLayout
        title={title}
        duration="3, 5 ou 7 jours"
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
            <Heading level={2}>Le jeûne, une pause régénératrice</Heading>
            <div className="mt-6 space-y-4 text-dark-gray">
              <p>
                Le jeûne thérapeutique est une pratique millénaire reconnue pour ses vertus
                régénératrices. En cessant temporairement de vous alimenter, vous offrez à votre
                corps la possibilité de se détoxifier, de se régénérer et de se rééquilibrer en
                profondeur.
              </p>
              <p>
                Nos stages de jeûne sont encadrés dans un cadre naturel et ressourçant, avec un
                accompagnement professionnel quotidien. Vous bénéficiez d'activités douces
                (méditation, yoga, marches en nature), d'enseignements sur la santé naturelle et du
                soutien d'un groupe bienveillant.
              </p>
            </div>
          </section>

          <section>
            <Heading level={2}>Les bienfaits du jeûne</Heading>
            <ul className="mt-6 space-y-3">
              {[
                "Détoxification profonde de l'organisme",
                'Régénération cellulaire et autophagie',
                'Renforcement du système immunitaire',
                'Perte de poids saine et durable',
                'Amélioration de la clarté mentale et de la concentration',
                "Regain d'énergie et de vitalité",
                'Amélioration du sommeil',
                'Réduction des inflammations chroniques',
                'Meilleure gestion du stress et des émotions',
                'Reconnexion à soi et à ses besoins essentiels',
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
            <Heading level={2}>Déroulement d'une journée type</Heading>
            <div className="mt-6 space-y-4">
              {[
                {
                  time: '7h00',
                  title: 'Réveil en douceur',
                  description: 'Tisane du matin et temps personnel',
                },
                {
                  time: '8h00',
                  title: 'Yoga ou méditation',
                  description: 'Pratique douce pour réveiller le corps',
                },
                {
                  time: '10h00',
                  title: 'Atelier ou conférence',
                  description:
                    "Enseignements sur la santé, l'alimentation vivante, l'hygiène de vie",
                },
                {
                  time: '12h00',
                  title: 'Bouillon ou jus',
                  description: 'Moment de partage collectif',
                },
                {
                  time: '14h00',
                  title: 'Marche en nature',
                  description: 'Randonnée douce dans un environnement ressourçant',
                },
                {
                  time: '16h00',
                  title: 'Activité créative ou repos',
                  description: 'Temps libre pour lire, écrire, créer ou se reposer',
                },
                {
                  time: '18h00',
                  title: 'Tisane du soir',
                  description: "Moment de partage et d'échange en groupe",
                },
                {
                  time: '19h30',
                  title: 'Méditation ou yoga nidra',
                  description: 'Pratique de relaxation profonde',
                },
                {
                  time: '21h00',
                  title: 'Temps calme',
                  description: 'Préparation au sommeil, coucher tôt',
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-light-gray bg-off-white p-4"
                >
                  <div className="flex-shrink-0">
                    <span className="font-headings text-sm font-bold text-primary">
                      {activity.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headings font-semibold text-black">{activity.title}</h3>
                    <p className="mt-1 text-sm text-dark-gray">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading level={2}>Ce qui est inclus</Heading>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: 'fa-bed',
                  title: 'Hébergement',
                  description: 'Chambre confortable en pension complète',
                },
                {
                  icon: 'fa-user-nurse',
                  title: 'Accompagnement',
                  description: 'Suivi quotidien par un professionnel',
                },
                {
                  icon: 'fa-mug-hot',
                  title: 'Bouillons & tisanes',
                  description: 'Bouillons de légumes bio et tisanes à volonté',
                },
                {
                  icon: 'fa-person-hiking',
                  title: 'Activités',
                  description: 'Yoga, méditation, marches en nature',
                },
                {
                  icon: 'fa-book',
                  title: 'Enseignements',
                  description: 'Ateliers sur la santé naturelle',
                },
                {
                  icon: 'fa-users',
                  title: 'Groupe',
                  description: 'Soutien et partage en petit groupe (max 8 personnes)',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-light-gray bg-white p-4"
                >
                  <i
                    className={`fa-solid ${item.icon} mt-1 text-xl text-primary`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-headings font-semibold text-black">{item.title}</h3>
                    <p className="mt-1 text-sm text-dark-gray">{item.description}</p>
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
                  Le jeûne est déconseillé en cas de : grossesse ou allaitement, insuffisance rénale
                  ou hépatique sévère, troubles du comportement alimentaire, diabète de type 1,
                  hyperthyroïdie non contrôlée, cachexie. Un certificat médical peut être demandé.
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
