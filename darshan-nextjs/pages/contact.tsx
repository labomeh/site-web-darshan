import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function Contact() {
  return (
    <Layout
      currentPage="/contact"
      title="Contact - Darshan"
      description="Contactez Darshan pour prendre rendez-vous. Cabinet à Saint-Gingolph, Haute-Savoie."
    >
      {/* Page Header */}
      <section className="page-header bg-off-white py-3xl">
        <Container>
          <h2 className="text-h2 font-headings text-black text-center mb-md">
            Contactez-moi
          </h2>
          <p className="text-dark-gray text-center">
            Pour toute question ou prise de rendez-vous
          </p>
        </Container>
      </section>

      {/* Contact Section */}
      <Section variant="default" className="contact-section">
        <Container>
          <div className="grid grid-cols-1 tablet-lg:grid-cols-2 gap-3xl">
            {/* Informations de contact */}
            <div className="contact-info space-y-lg">
              <Card className="fade-in">
                <h3 className="text-h4 font-headings text-black mb-md">
                  <i className="fas fa-map-marker-alt text-primary mr-sm" />
                  Adresse
                </h3>
                <p className="text-dark-gray">
                  <strong>Cabinet de Saint-Gingolph</strong><br />
                  21 Route de Chez Monnet<br />
                  74500 BRET - Saint-Gingolph<br />
                  France
                </p>
              </Card>

              <Card className="fade-in">
                <h3 className="text-h4 font-headings text-black mb-md">
                  <i className="fas fa-phone text-primary mr-sm" />
                  Téléphone
                </h3>
                <p>
                  <a href="tel:+33621953168" className="text-primary text-lg hover:text-primary-dark transition-colors">
                    06 21 95 31 68
                  </a>
                </p>
              </Card>

              <Card className="fade-in">
                <h3 className="text-h4 font-headings text-black mb-md">
                  <i className="fas fa-envelope text-primary mr-sm" />
                  Email
                </h3>
                <p>
                  <a href="mailto:contact@hydrotherapie-colon-savoie.fr" className="text-primary hover:text-primary-dark transition-colors break-all">
                    contact@hydrotherapie-colon-savoie.fr
                  </a>
                </p>
              </Card>

              <Card className="fade-in">
                <h3 className="text-h4 font-headings text-black mb-md">
                  <i className="fas fa-clock text-primary mr-sm" />
                  Horaires d'ouverture
                </h3>
                <p className="text-dark-gray">
                  <strong>Lundi - Samedi :</strong> 8h00 - 18h00<br />
                  <strong>Dimanche :</strong> Fermé
                </p>
                <p className="text-gray text-sm mt-md">
                  Sur rendez-vous uniquement
                </p>
              </Card>
            </div>

            {/* Formulaire de contact (placeholder) */}
            <div className="contact-form-container fade-in">
              <Card>
                <h3 className="text-h4 font-headings text-black mb-md">
                  <i className="fas fa-paper-plane text-primary mr-sm" />
                  Écrire un message
                </h3>
                <p className="text-gray mb-2xl">
                  Le formulaire de contact sera bientôt disponible.<br />
                  En attendant, vous pouvez me joindre directement par téléphone ou email.
                </p>

                {/* Placeholder du formulaire */}
                <div className="space-y-lg opacity-50">
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-xs">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      disabled
                      placeholder="Votre nom"
                      className="w-full px-md py-sm border border-light-gray rounded-md bg-light-gray cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-xs">
                      Email
                    </label>
                    <input
                      type="email"
                      disabled
                      placeholder="votre@email.com"
                      className="w-full px-md py-sm border border-light-gray rounded-md bg-light-gray cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-xs">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      disabled
                      placeholder="Votre téléphone"
                      className="w-full px-md py-sm border border-light-gray rounded-md bg-light-gray cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-xs">
                      Message
                    </label>
                    <textarea
                      disabled
                      rows={5}
                      placeholder="Votre message..."
                      className="w-full px-md py-sm border border-light-gray rounded-md bg-light-gray cursor-not-allowed"
                    />
                  </div>
                  <button
                    disabled
                    className="w-full bg-gray text-white px-xl py-md rounded-md cursor-not-allowed"
                  >
                    Formulaire à venir
                  </button>
                </div>

                <div className="mt-xl p-lg bg-primary/10 border-l-4 border-primary rounded">
                  <p className="text-dark-gray">
                    <strong>
                      <i className="fas fa-lightbulb text-primary mr-xs" />
                      Pour l'instant :
                    </strong><br />
                    Appelez-moi au{' '}
                    <a href="tel:+33621953168" className="text-primary underline hover:text-primary-dark">
                      06 21 95 31 68
                    </a><br />
                    Ou écrivez-moi à{' '}
                    <a
                      href="mailto:contact@hydrotherapie-colon-savoie.fr"
                      className="text-primary underline hover:text-primary-dark break-all"
                    >
                      contact@hydrotherapie-colon-savoie.fr
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Google Maps */}
      <Section variant="alt" className="map-section">
        <Container>
          <h2 className="text-h2 font-headings text-black text-center mb-2xl">
            <i className="fas fa-map-marked-alt text-primary mr-md" />
            Localisation
          </h2>
          <div className="map-container rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.5836060257834!2d6.767251792456602!3d46.39748316603168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba0a3b6ececbb%3A0x144b691290669f6e!2sGarnier%20Marie-Pierre!5e0!3m2!1sfr!2sfr!4v1760058506918!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
