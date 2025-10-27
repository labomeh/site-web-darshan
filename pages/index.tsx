import Hero from '@/components/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import UpcomingEvents from '@/components/home/UpcomingEvents';
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
      <div id="content" className="h-1" aria-hidden="true" />

      <ServicesGrid />

      <UpcomingEvents />
    </Layout>
  );
}
