import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout
      currentPage="/services"
      title="Nos Services - Darshan"
      description="Découvrez nos services : hydrothérapie du côlon, massage ayurvédique, méditation tantrique, nettoyage du foie, trio de soins detox et stages de jeûne."
    >
      {/* Page Header */}
      <section className="page-header bg-off-white py-3xl">
        <Container>
          <h2 className="text-h2 font-headings text-black text-center mb-md">
            Nos Prestations
          </h2>
          <p className="text-dark-gray text-center">
            Des soins holistiques pour votre bien-être intérieur et extérieur
          </p>
        </Container>
      </section>

      {/* Services Navigation */}
      <nav className="services-nav sticky top-20 bg-white py-lg shadow-md z-[100]">
        <Container>
          <div className="flex flex-wrap justify-center gap-md">
            <Link href="#hydrotherapie" className="services-nav-item flex flex-col items-center gap-xs px-md py-sm hover:text-primary transition-colors">
              <i className="fas fa-water text-xl" />
              <span className="text-sm">Hydrothérapie</span>
            </Link>
            <Link href="#massage" className="services-nav-item flex flex-col items-center gap-xs px-md py-sm hover:text-primary transition-colors">
              <i className="fas fa-hands text-xl" />
              <span className="text-sm">Massage</span>
            </Link>
            <Link href="#meditation" className="services-nav-item flex flex-col items-center gap-xs px-md py-sm hover:text-primary transition-colors">
              <i className="fas fa-om text-xl" />
              <span className="text-sm">Méditation</span>
            </Link>
            <Link href="#foie" className="services-nav-item flex flex-col items-center gap-xs px-md py-sm hover:text-primary transition-colors">
              <i className="fas fa-leaf text-xl" />
              <span className="text-sm">Foie</span>
            </Link>
            <Link href="#detox" className="services-nav-item flex flex-col items-center gap-xs px-md py-sm hover:text-primary transition-colors">
              <i className="fas fa-spa text-xl" />
              <span className="text-sm">Detox</span>
            </Link>
            <Link href="#jeune" className="services-nav-item flex flex-col items-center gap-xs px-md py-sm hover:text-primary transition-colors">
              <i className="fas fa-mountain text-xl" />
              <span className="text-sm">Jeûne</span>
            </Link>
          </div>
        </Container>
      </nav>

      {/* Hydrothérapie */}
      <Section id="hydrotherapie" variant="default">
        <Container>
          <div className="grid grid-cols-1 tablet-lg:grid-cols-2 gap-3xl items-start">
            <img src="https://placehold.co/600x750/1a4d2e/ffffff?text=Hydrothérapie+du+Côlon" alt="Hydrothérapie du Côlon" className="w-full rounded-lg shadow-md" />
            <div>
              <h2 className="text-h2 font-headings text-black mb-md">
                <i className="fas fa-water text-primary mr-md" />
                Hydrothérapie du Côlon
              </h2>
              <p className="text-lg text-primary mb-lg">Une mesure d'hygiène et de prévention</p>
              <div className="text-dark-gray space-y-4">
                <p>L'hydrothérapie du côlon, autrement appelée irrigation du côlon, est un procédé permettant de nettoyer le gros intestin en utilisant de l'eau. C'est un nettoyage doux en profondeur réalisé par des bains internes d'eau tempérée et filtrée, à très faible débit, par voie rectale (canule à usage unique), accompagnés d'un massage sur l'abdomen.</p>
                <p>Le tout est contrôlé par un appareil sécurisé. Cette pratique est complètement inodore.</p>
                <h4 className="text-h4 font-headings text-black mt-lg mb-md">Déroulement de la séance</h4>
                <p>Avant la séance, je réalise une anamnèse, qui a pour but de connaître vos besoins et ainsi adapter le soin. Une préparation alimentaire est conseillée.</p>
                <p>Un moyen efficace pour retirer les toxines du corps et se purifier de l'intérieur.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Massage Ayurvédique */}
      <Section id="massage" variant="alt">
        <Container>
          <div className="grid grid-cols-1 tablet-lg:grid-cols-2 gap-3xl items-start">
            <img src="https://placehold.co/600x750/2d6a4f/ffffff?text=Massage+Ayurvédique" alt="Massage Ayurvédique" className="w-full rounded-lg shadow-md tablet-lg:order-2" />
            <div className="tablet-lg:order-1">
              <h2 className="text-h2 font-headings text-black mb-md">
                <i className="fas fa-hands text-primary mr-md" />
                Massage Ayurvédique
              </h2>
              <p className="text-lg text-primary mb-lg">Tradition millénaire de l'Inde</p>
              <div className="text-dark-gray space-y-4">
                <p>Le massage ayurvédique est une pratique ancestrale issue de la médecine ayurvédique indienne. Il vise à rééquilibrer les énergies du corps et de l'esprit.</p>
                <p>Au cours de mes voyages en Inde, j'ai reçu un enseignement et découvert les bases de la médecine ayurvédique dans un centre spécialisé. Je vous propose aujourd'hui de bénéficier de cette approche holistique du bien-être.</p>
                <p>Ces massages permettent une détente profonde, favorisent la circulation et aident à l'élimination des toxines.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Méditation Tantrique */}
      <Section id="meditation" variant="default">
        <Container>
          <div className="grid grid-cols-1 tablet-lg:grid-cols-2 gap-3xl items-start">
            <img src="https://placehold.co/600x750/40916c/ffffff?text=Méditation+Tantrique" alt="Méditation Tantrique" className="w-full rounded-lg shadow-md" />
            <div>
              <h2 className="text-h2 font-headings text-black mb-md">
                <i className="fas fa-om text-primary mr-md" />
                Méditation Tantrique
              </h2>
              <p className="text-lg text-primary mb-lg">Traditionnellement originaire de l'Inde, une démarche spirituelle</p>
              <div className="text-dark-gray space-y-4">
                <p>Les ateliers de méditation tantrique vous invitent à explorer une dimension spirituelle profonde. Formée en tant qu'Animatrice d'Ateliers de Méditations Tantriques, je vous accompagne dans cette pratique transformatrice.</p>
                <p>Ces ateliers permettent de se reconnecter à soi-même, d'explorer la relation entre le corps et l'esprit, et de vivre pleinement l'instant présent dans une démarche globale de bien-être.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Nettoyage du Foie */}
      <Section id="foie" variant="alt">
        <Container>
          <div className="grid grid-cols-1 tablet-lg:grid-cols-2 gap-3xl items-start">
            <img src="https://placehold.co/600x750/52b788/ffffff?text=Nettoyage+du+Foie" alt="Nettoyage du Foie" className="w-full rounded-lg shadow-md tablet-lg:order-2" />
            <div className="tablet-lg:order-1">
              <h2 className="text-h2 font-headings text-black mb-md">
                <i className="fas fa-leaf text-primary mr-md" />
                Nettoyage du Foie
              </h2>
              <p className="text-lg text-primary mb-lg">Accompagnement sur 3 jours selon le protocole d'Andreas Moritz</p>
              <div className="text-dark-gray space-y-4">
                <p>Nous proposons de vous accompagner sur 3 jours, le 6ème, 7ème et 8ème jour de votre nettoyage du foie.</p>
                <h4 className="text-h4 font-headings text-black mt-lg mb-md">Le protocole</h4>
                <p><strong>Préparation (6 jours avant) :</strong> Boire 1L de jus de pomme Bio par jour ou acide malique (préférable en cas de candidose).</p>
                <p><strong>Jour 6 :</strong></p>
                <ul className="list-disc pl-lg space-y-2">
                  <li>Petit déjeuner léger et déjeuner léger</li>
                  <li>Arrêt de l'alimentation à 14h00</li>
                  <li>Une irrigation du côlon</li>
                  <li>18h : 1 c. à soupe de sulfate de Magnésium dans un verre d'eau</li>
                  <li>20h : Idem</li>
                  <li>22h : Mélanger 120 ml d'huile d'olive 1ère pression à froid et 180 ml de jus de pamplemousse</li>
                  <li>Boire rapidement et se coucher</li>
                </ul>
                <p><strong>Jour 7 :</strong></p>
                <ul className="list-disc pl-lg space-y-2">
                  <li>6h : 1 c. à soupe de sulfate de Magnésium dans un verre d'eau</li>
                  <li>8h : Idem</li>
                  <li>13h : Réalimentation</li>
                </ul>
                <p><strong>Jour 8 :</strong> Une irrigation du côlon afin de nettoyer les calculs résiduels.</p>
                <h4 className="text-h4 font-headings text-black mt-lg mb-md">Les bienfaits</h4>
                <p>Cette cure vous permettra de faire une expérience entre le corps et l'esprit. Nous pouvons considérer cette cure comme un "maintien" en santé. Le foie assure le fonctionnement de chaque cellule, il gère la filtration du sang (déchets toxiques et impuretés).</p>
                <p>Son dysfonctionnement est souvent lié à son engorgement par des calculs. Cette cure permettra la libération des calculs de la Vésicule Biliaire et du Foie.</p>
                <p>Nous vous accompagnons également par des méditations tantriques, la clef de la transformation, pour vous offrir cette opportunité de rendez-vous avec vous-même et vous donner les clefs vers l'autonomie de cette cure.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trio de Soins Detox */}
      <Section id="detox" variant="default">
        <Container>
          <div className="grid grid-cols-1 tablet-lg:grid-cols-2 gap-3xl items-start">
            <img src="https://placehold.co/600x750/74c69d/ffffff?text=Trio+de+Soins+Detox" alt="Trio de Soins Detox" className="w-full rounded-lg shadow-md" />
            <div>
              <h2 className="text-h2 font-headings text-black mb-md">
                <i className="fas fa-spa text-primary mr-md" />
                Trio de Soins Detox
              </h2>
              <p className="text-lg text-primary mb-lg">"Fais du Bien à ton corps pour que ton Âme ait envie d'y rester." - Proverbe Indien</p>
              <div className="text-dark-gray space-y-4">
                <p>Trois espaces de Soins, Trois thérapeutes, Trois Heures pour Soi pour une même démarche : La Detox du Corps Physique et des Corps Subtils dans une démarche Globale.</p>
                <h4 className="text-h4 font-headings text-black mt-lg mb-md">Le parcours</h4>
                <ol className="list-decimal pl-lg space-y-2">
                  <li><strong>Soin au Bol Kanzu :</strong> La Réflexologie Plantaire à l'Indienne s'invite pour garantir un ancrage</li>
                  <li><strong>Massage Métamorphique :</strong> Le Subtil se visite en Douceur</li>
                  <li><strong>Hydrothérapie du Côlon ou Massage Abhyanga :</strong> Nous terminons ce Voyage par mes soins</li>
                </ol>
                <p>Une proposition de découverte. L'opportunité de vivre l'expérience de lâcher son mental et de se laisser surprendre par la combinaison de ce Trio de Soins.</p>
                <p>En partant du corps avec vos pieds, vos racines, en vous promenant dans le subtil et en revenant dans "l'Âme à tiers" avec le corps. En presque 3 heures de soins, nous vous offrons un voyage complet de détoxification et de reconnexion.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stage de Jeûne */}
      <Section id="jeune" variant="alt">
        <Container>
          <div className="grid grid-cols-1 tablet-lg:grid-cols-2 gap-3xl items-start">
            <img src="https://placehold.co/600x750/95d5b2/333333?text=Stage+de+Jeûne" alt="Stage de Jeûne" className="w-full rounded-lg shadow-md tablet-lg:order-2" />
            <div className="tablet-lg:order-1">
              <h2 className="text-h2 font-headings text-black mb-md">
                <i className="fas fa-mountain text-primary mr-md" />
                Stage de Jeûne
              </h2>
              <p className="text-lg text-primary mb-lg">Une semaine entre Lac et Montagnes</p>
              <div className="text-dark-gray space-y-4">
                <p>Nous vous proposons de jeûner une semaine dans un très joli cadre, entre Lac et Montagnes de Courchevel, en Savoie.</p>
                <p>Ces stages de jeûne sont l'occasion de vous ressourcer profondément, de vous reconnecter à votre corps et de vivre une expérience transformatrice dans un environnement exceptionnel.</p>
                <p>Un accompagnement personnalisé tout au long de la semaine vous permettra de vivre cette expérience en toute sérénité.</p>
                <p className="bg-primary/10 border-l-4 border-primary p-lg rounded">
                  📅 Pour connaître les prochaines dates de stages, consultez notre page <Link href="/evenements" className="text-primary underline hover:text-primary-dark">Événements</Link> ou <Link href="/contact" className="text-primary underline hover:text-primary-dark">contactez-nous</Link>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
