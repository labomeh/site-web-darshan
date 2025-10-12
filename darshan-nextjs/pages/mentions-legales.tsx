import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

export default function MentionsLegales() {
  return (
    <Layout
      currentPage="/mentions-legales"
      title="Mentions légales - Darshan"
      description="Mentions légales du site Darshan, hydrothérapie à Saint-Gingolph."
    >
      {/* Page Header */}
      <section className="page-header bg-off-white py-3xl">
        <Container>
          <h2 className="text-h2 font-headings text-black text-center">
            Mentions légales
          </h2>
        </Container>
      </section>

      {/* Legal Content */}
      <Section variant="default">
        <Container maxWidth="content">
          <div className="space-y-3xl">
            <div>
              <h3 className="text-h3 font-headings text-black mb-lg">
                Éditeur du site
              </h3>
              <p className="text-dark-gray mb-md">
                <strong>Marie-Pierre Garnier</strong><br />
                <span className="bg-warning/30 px-xs py-[2px] rounded">
                  ⚠️ SIRET à renseigner : [SIRET]
                </span><br />
                21 Route de Chez Monnet<br />
                74500 Saint-Gingolph<br />
                France
              </p>
              <p className="text-dark-gray">
                <strong>Contact :</strong><br />
                Email :{' '}
                <span className="bg-warning/30 px-xs py-[2px] rounded">
                  ⚠️ [email à renseigner]
                </span><br />
                Téléphone :{' '}
                <span className="bg-warning/30 px-xs py-[2px] rounded">
                  ⚠️ [téléphone à renseigner]
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-h3 font-headings text-black mb-lg">
                Hébergement
              </h3>
              <p className="text-dark-gray">
                Ce site est hébergé par :<br />
                <strong>Netlify, Inc.</strong><br />
                2325 3rd Street, Suite 296<br />
                San Francisco, CA 94107<br />
                États-Unis<br />
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
              <h3 className="text-h3 font-headings text-black mb-lg">
                Propriété intellectuelle
              </h3>
              <p className="text-dark-gray">
                L'ensemble de ce site relève de la législation française et internationale sur le
                droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont
                réservés, y compris pour les documents téléchargeables et les représentations
                iconographiques et photographiques.
              </p>
            </div>

            <div>
              <h3 className="text-h3 font-headings text-black mb-lg">
                Données personnelles
              </h3>
              <p className="text-dark-gray mb-md">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                disposez d'un droit d'accès, de modification, de rectification et de suppression
                des données vous concernant.
              </p>
              <p className="text-dark-gray">
                Ce site ne collecte pas de données personnelles via des formulaires. Seule
                l'interface d'administration utilise Netlify Identity pour l'authentification des
                administrateurs.
              </p>
            </div>

            <div>
              <h3 className="text-h3 font-headings text-black mb-lg">
                Cookies
              </h3>
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
