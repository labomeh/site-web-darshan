import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Custom404() {
  return (
    <Layout
      title="Page non trouvée - Darshan"
      description="La page que vous recherchez n'existe pas."
    >
      <Section variant="default" className="min-h-[60vh] flex items-center">
        <Container maxWidth="content">
          <div className="text-center space-y-xl">
            <div className="text-[120px] font-logo text-primary leading-none">
              404
            </div>
            <h1 className="text-h1 font-headings text-black">
              Page non trouvée
            </h1>
            <p className="text-lg text-dark-gray">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <div className="flex gap-md justify-center flex-wrap">
              <Button href="/" variant="primary">
                Retour à l'accueil
              </Button>
              <Button href="/contact" variant="outline">
                Contact
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
