import Head from 'next/head';
import Script from 'next/script';
import { METADATA } from '@/config/site';
import type { LayoutProps } from '@/types';
import Footer from './Footer';
import Header from './Header';

export default function Layout({
  children,
  currentPage = '/',
  title = METADATA.defaultTitle,
  description = METADATA.defaultDescription,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* SEO robots controlled by netlify.toml X-Robots-Tag headers */}
        {/* Production (main): indexed | Staging/branches: noindex */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
      </Head>

      {/* Netlify Identity - loaded after page is interactive */}
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="afterInteractive"
      />

      <Header currentPage={currentPage} />

      <main className="pt-[70px]">{children}</main>

      <Footer />
    </>
  );
}
