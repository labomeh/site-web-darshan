import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '@/types';

export default function Layout({
  children,
  currentPage = '/',
  title = 'Darshan - Hydrothérapie - Saint-Gingolph',
  description = "Hydrothérapeute à Saint-Gingolph (Haute-Savoie). Soins d'hydrothérapie du côlon, massages ayurvédiques. 21 Route de Chez Monnet, 74500.",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Netlify Identity */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>

      <Header currentPage={currentPage} />

      <main>{children}</main>

      <Footer />
    </>
  );
}
