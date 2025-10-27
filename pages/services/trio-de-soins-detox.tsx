import { useState } from 'react';
import ContactModal from '@/components/contact/ContactModal';
import Layout from '@/components/Layout';
import FAQAccordion from '@/components/services/FAQAccordion';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import Heading from '@/components/ui/Heading';
import { SITE } from '@/config/site';

const pricing = [
  {
    name: 'Trio de soins detox complet',
    price: '350€',
    duration: '3 séances sur 2 semaines',
    savings: 'Économie de 60€ par rapport aux soins séparés',
  },
];

const faqItems = [
  {
    question: "Qu'est-ce que le trio de soins detox ?",
    answer:
      "C'est un programme complet combinant trois soins complémentaires : hydrothérapie du côlon, nettoyage du foie et massage ayurvédique. Cette synergie optimise la détoxification et le bien-être global.",
  },
  {
    question: 'Dans quel ordre se déroulent les soins ?',
    answer:
      "Le protocole recommandé : 1) Hydrothérapie du côlon pour nettoyer l'intestin, 2) Nettoyage du foie pour détoxifier cet organe vital, 3) Massage ayurvédique pour relancer la circulation et éliminer les toxines résiduelles.",
  },
  {
    question: 'Sur quelle période étaler les soins ?',
    answer:
      "Idéalement sur 2 à 3 semaines, avec 5 à 7 jours entre chaque soin. Cette progression permet au corps de s'adapter et d'optimiser les bienfaits de chaque étape.",
  },
  {
    question: 'Puis-je faire les soins séparément ?',
    answer:
      'Oui, chaque soin peut être réalisé indépendamment. Le trio est particulièrement recommandé pour une détoxification profonde et complète, notamment aux changements de saisons.',
  },
];

export default function TrioDeSoinsDetoxPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'booking' | 'question'>('booking');

  const title = 'Trio de soins detox';

  return (
    <Layout currentPage="/services" title={`${title} - ${SITE.name}`}>
      <ServicePageLayout
        title={title}
        duration="3 séances sur 2-3 semaines"
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
            <Heading level={2}>Une détox complète et harmonieuse</Heading>
            <div className="mt-6 space-y-4 text-dark-gray">
              <p>
                Le trio de soins detox est un programme holistique qui associe trois techniques
                complémentaires pour une purification profonde du corps et de l'esprit. Chaque soin
                prépare et amplifie les bienfaits du suivant.
              </p>
              <p>
                Cette approche globale permet d'agir sur tous les systèmes d'élimination du corps
                (intestins, foie, système lymphatique) tout en favorisant la détente et le
                rééquilibrage énergétique.
              </p>
            </div>
          </section>

          <section>
            <Heading level={2}>Les trois étapes du programme</Heading>
            <div className="mt-6 space-y-6">
              {[
                {
                  number: '1',
                  icon: 'fa-water',
                  title: 'Hydrothérapie du côlon',
                  duration: '45-60 min',
                  description:
                    'Nettoyage en profondeur du côlon pour éliminer les toxines et déchets accumulés. Première étape essentielle qui prépare le corps à la détoxification du foie.',
                  benefits: [
                    'Amélioration du transit',
                    'Élimination des toxines intestinales',
                    'Préparation optimale pour le nettoyage du foie',
                  ],
                },
                {
                  number: '2',
                  icon: 'fa-leaf',
                  title: 'Nettoyage du foie',
                  duration: 'Programme 3 jours',
                  description:
                    'Détoxification hépatique pour régénérer le foie et optimiser ses 500 fonctions vitales. Le foie, débarrassé de ses surcharges, peut pleinement remplir son rôle.',
                  benefits: [
                    'Régénération hépatique',
                    'Élimination des calculs biliaires',
                    'Amélioration de la digestion',
                  ],
                },
                {
                  number: '3',
                  icon: 'fa-hands',
                  title: 'Massage ayurvédique',
                  duration: '60-75 min',
                  description:
                    'Massage thérapeutique pour relancer la circulation, drainer le système lymphatique et éliminer les toxines résiduelles tout en procurant une détente profonde.',
                  benefits: [
                    'Drainage lymphatique',
                    'Élimination des toxines résiduelles',
                    'Relaxation profonde et rééquilibrage',
                  ],
                },
              ].map((soin) => (
                <div
                  key={soin.number}
                  className="rounded-lg border border-light-gray bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <i
                        className={`fa-solid ${soin.icon} text-2xl text-primary`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-headings text-xl font-semibold text-black">
                          {soin.number}. {soin.title}
                        </h3>
                        <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                          {soin.duration}
                        </span>
                      </div>
                      <p className="mt-3 text-dark-gray">{soin.description}</p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-black">Bienfaits clés :</p>
                        <ul className="mt-2 space-y-1">
                          {soin.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-dark-gray">
                              <i
                                className="fa-solid fa-check mt-0.5 flex-shrink-0 text-primary"
                                aria-hidden="true"
                              />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading level={2}>Les bienfaits du programme complet</Heading>
            <ul className="mt-6 space-y-3">
              {[
                "Détoxification profonde et complète de l'organisme",
                "Regain d'énergie et de vitalité",
                'Amélioration significative de la digestion',
                'Renforcement du système immunitaire',
                'Peau plus lumineuse et éclatante',
                'Meilleure qualité de sommeil',
                'Clarté mentale et concentration améliorées',
                'Sensation de légèreté et de bien-être général',
                'Perte de poids naturelle (pour certains)',
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
            <Heading level={2}>Pour qui ?</Heading>
            <div className="mt-6 space-y-4 text-dark-gray">
              <p>Le trio de soins detox est particulièrement recommandé pour :</p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Les changements de saisons (printemps et automne)</li>
                <li className="list-disc">Après des périodes d'excès alimentaires</li>
                <li className="list-disc">
                  Lors d'un changement de mode de vie (nouveau régime alimentaire)
                </li>
                <li className="list-disc">En cas de fatigue chronique ou baisse d'énergie</li>
                <li className="list-disc">Pour préparer une grossesse ou après l'accouchement</li>
                <li className="list-disc">Dans une démarche de bien-être global</li>
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
                className="fa-solid fa-calendar-check mt-1 text-2xl text-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-headings text-lg font-semibold text-black">
                  Planification recommandée
                </h3>
                <p className="mt-2 text-dark-gray">
                  Pour optimiser les résultats, nous recommandons d'espacer les soins de 5 à 7
                  jours. Un calendrier personnalisé sera établi lors de votre première consultation
                  pour s'adapter à votre emploi du temps et vos besoins.
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
