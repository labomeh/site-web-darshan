import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import { METADATA, SITE } from '@/config/site';

export default function Home() {
  return (
    <Layout currentPage="/" title={METADATA.defaultTitle} description={METADATA.defaultDescription}>
      <Hero
        title={SITE.name.toUpperCase()}
        tagline={SITE.tagline}
        videoSrc="/videos/hero-background.webm"
        showServices
        showLocation
      />
    </Layout>
  );
}
