import Layout from '@/components/Layout';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { CONTACT, LABELS, METADATA } from '@/config/site';

export default function MentionsLegales() {
  return (
    <Layout
      currentPage="/mentions-legales"
      title={METADATA.legalTitle}
      description={METADATA.legalDescription}
    >
      {/* Page Header */}
      <section className="page-header bg-off-white py-3xl">
        <Container>
          <h2 className="text-h2 text-center font-headings text-black">{LABELS.legal.title}</h2>
        </Container>
      </section>

      {/* Legal Content */}
      <Section variant="default">
        <Container maxWidth="content">
          <div className="space-y-3xl">
            <div>
              <h3 className="text-h3 mb-lg font-headings text-black">{LABELS.legal.publisher}</h3>
              <p className="mb-md text-dark-gray">
                <strong>Marie-Pierre Garnier</strong>
                <br />
                <span className="rounded bg-warning/30 px-xs py-[2px]">
                  ⚠️ SIRET à renseigner : [SIRET]
                </span>
                <br />
                {CONTACT.address.street}
                <br />
                {CONTACT.address.postalCode} {CONTACT.address.city.replace('BRET - ', '')}
                <br />
                {CONTACT.address.country}
              </p>
              <p className="text-dark-gray">
                <strong>{LABELS.contact.title} :</strong>
                <br />
                {LABELS.contact.email} : {CONTACT.email}
                <br />
                {LABELS.contact.phone} : {CONTACT.phone.display}
              </p>
            </div>

            <div>
              <h3 className="text-h3 mb-lg font-headings text-black">{LABELS.legal.hosting}</h3>
              <p className="text-dark-gray">
                Ce site est hébergé par :<br />
                <strong>Netlify, Inc.</strong>
                <br />
                2325 3rd Street, Suite 296
                <br />
                San Francisco, CA 94107
                <br />
                États-Unis
                <br />
                Site web :{' '}
                <a
                  href="https://www.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary-dark"
                >
                  netlify.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-h3 mb-lg font-headings text-black">{LABELS.legal.copyright}</h3>
              <p className="text-dark-gray">
                L'ensemble de ce site relève de la législation française et internationale sur le
                droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont
                réservés, y compris pour les documents téléchargeables et les représentations
                iconographiques et photographiques.
              </p>
            </div>

            <div>
              <h3 className="text-h3 mb-lg font-headings text-black">{LABELS.legal.privacy}</h3>
              <p className="mb-md text-dark-gray">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                disposez d'un droit d'accès, de modification, de rectification et de suppression des
                données vous concernant.
              </p>
              <p className="text-dark-gray">
                Ce site ne collecte pas de données personnelles via des formulaires. Seule
                l'interface d'administration utilise Netlify Identity pour l'authentification des
                administrateurs.
              </p>
            </div>

            <div>
              <h3 className="text-h3 mb-lg font-headings text-black">{LABELS.legal.cookies}</h3>
              <p className="text-dark-gray">
                Ce site n'utilise pas de cookies de tracking ou publicitaires. Seuls des cookies
                techniques nécessaires au fonctionnement de l'interface d'administration sont
                utilisés.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
