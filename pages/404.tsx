import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { LABELS, METADATA } from '@/config/site';

export default function Custom404() {
  return (
    <Layout title={METADATA.notFoundTitle} description={METADATA.notFoundDescription}>
      <Section variant="default" className="flex min-h-[60vh] items-center">
        <Container maxWidth="content">
          <div className="space-y-xl text-center">
            <div className="font-logo text-[120px] leading-none text-primary">404</div>
            <h1 className="text-h1 font-headings text-black">{LABELS.notFound.heading}</h1>
            <p className="text-lg text-dark-gray">{LABELS.notFound.description}</p>
            <div className="flex flex-wrap justify-center gap-md">
              <Button href="/" variant="primary">
                {LABELS.nav.backToHome}
              </Button>
              <Button href="/contact" variant="outline">
                {LABELS.nav.contact}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
