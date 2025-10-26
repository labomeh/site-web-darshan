import Head from 'next/head';
import Script from 'next/script';

/**
 * Sveltia CMS Admin Page
 * Access at /admin to manage site content
 *
 * Local development: npm run cms (starts local backend)
 * Production: Uses Netlify Identity + GitHub backend
 */
export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin - Darshan CMS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Load Sveltia CMS from CDN */}
      <Script
        src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"
        type="module"
        strategy="afterInteractive"
      />

      {/* Sveltia CMS mounts here automatically */}
    </>
  );
}
