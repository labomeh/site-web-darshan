import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

export default function Home() {
  return (
    <Layout
      currentPage="/"
      title="Darshan - Hydrothérapie - Saint-Gingolph"
      description="Hydrothérapeute à Saint-Gingolph (Haute-Savoie). Soins d'hydrothérapie du côlon, massages ayurvédiques. 21 Route de Chez Monnet, 74500."
    >
      {/* Hero Section avec vidéo */}
      <Hero
        title="DARSHAN"
        tagline="Centre de bien-être et d'hydrothérapie"
        videoSrc="/videos/hero-background.webm"
        showServices={true}
        showLocation={true}
      />

      {/* Section Introduction */}
      <Section className="intro fade-in" variant="default">
        <Container maxWidth="content">
          <h2 className="text-h2 font-headings text-black mb-lg text-center">
            Bienvenue
          </h2>
          <p className="text-dark-gray text-center">
            Je vous accueille à mon cabinet à Saint-Gingolph pour des soins d'hydrothérapie du côlon et des massages ayurvédiques.
          </p>
          <p className="text-dark-gray text-center">
            Je vous accompagne avec des conseils thérapeutiques personnalisés pour vous aider à retrouver le bien-être intérieur et extérieur.
          </p>
        </Container>
      </Section>

      {/* Section Parcours */}
      <Section className="about-preview fade-in" variant="alt">
        <Container>
          <div className="about-grid grid grid-cols-1 tablet-lg:grid-cols-2 gap-3xl items-center">
            <div className="about-image">
              <img
                src="/images/about-photo.jpg"
                alt="Marie-Pierre Garnier - Hydrothérapeute"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="about-text">
              <h2 className="text-h2 font-headings text-black mb-lg">
                Mon parcours
              </h2>
              <p className="text-dark-gray mb-md">
                Professionnelle de santé depuis plus de 20 ans, j'ai suivi une formation d'infirmière puis de sage-femme.
              </p>
              <p className="text-dark-gray">
                Au cours de mes voyages en Inde, j'ai découvert les bases de la médecine ayurvédique. Aujourd'hui, ma pratique a évolué et je continue à me former en Médecine de l'Âme, Médecine Énergétique, et en tant qu'Animatrice d'Ateliers de Méditations Tantriques.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
