import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
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
      <section className="intro">
        <Container maxWidth="content">
          <h2>Bienvenue</h2>
          <p>
            Je vous accueille à mon cabinet à Saint-Gingolph pour des soins d'hydrothérapie du côlon et des massages ayurvédiques.
          </p>
          <p>
            Je vous accompagne avec des conseils thérapeutiques personnalisés pour vous aider à retrouver le bien-être intérieur et extérieur.
          </p>
        </Container>
      </section>

      {/* Section Parcours */}
      <section className="about-preview">
        <Container>
          <div className="about-grid">
            <div className="about-image">
              <img
                src="/images/about-photo.jpg"
                alt="Marie-Pierre Garnier - Hydrothérapeute"
              />
            </div>
            <div className="about-text">
              <h2>Mon parcours</h2>
              <p>
                Professionnelle de santé depuis plus de 20 ans, j'ai suivi une formation d'infirmière puis de sage-femme.
              </p>
              <p>
                Au cours de mes voyages en Inde, j'ai découvert les bases de la médecine ayurvédique. Aujourd'hui, ma pratique a évolué et je continue à me former en Médecine de l'Âme, Médecine Énergétique, et en tant qu'Animatrice d'Ateliers de Méditations Tantriques.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
