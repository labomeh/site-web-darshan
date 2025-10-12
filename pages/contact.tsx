import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <Layout
      currentPage="/contact"
      title="Contact - Darshan"
      description="Contactez Darshan pour prendre rendez-vous. Cabinet à Saint-Gingolph, Haute-Savoie."
    >
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <h2>Contactez-moi</h2>
          <p>Pour toute question ou prise de rendez-vous</p>
        </Container>
      </section>

      {/* Contact Section */}
      <Section variant="default">
        <Container>
          <div className={styles.contactGrid}>
            {/* Informations de contact */}
            <div className={styles.contactInfo}>
              <Card>
                <h3>
                  <i className="fas fa-map-marker-alt" />
                  Adresse
                </h3>
                <p>
                  <strong>Cabinet de Saint-Gingolph</strong><br />
                  21 Route de Chez Monnet<br />
                  74500 BRET - Saint-Gingolph<br />
                  France
                </p>
              </Card>

              <Card>
                <h3>
                  <i className="fas fa-phone" />
                  Téléphone
                </h3>
                <p>
                  <a href="tel:+33621953168">
                    06 21 95 31 68
                  </a>
                </p>
              </Card>

              <Card>
                <h3>
                  <i className="fas fa-envelope" />
                  Email
                </h3>
                <p>
                  <a href="mailto:contact@hydrotherapie-colon-savoie.fr" style={{ wordBreak: 'break-all' }}>
                    contact@hydrotherapie-colon-savoie.fr
                  </a>
                </p>
              </Card>

              <Card>
                <h3>
                  <i className="fas fa-clock" />
                  Horaires d'ouverture
                </h3>
                <p>
                  <strong>Lundi - Samedi :</strong> 8h00 - 18h00<br />
                  <strong>Dimanche :</strong> Fermé
                </p>
                <p style={{ color: 'var(--gray)', fontSize: 'var(--small-size)', marginTop: 'var(--space-md)' }}>
                  Sur rendez-vous uniquement
                </p>
              </Card>
            </div>

            {/* Formulaire de contact (placeholder) */}
            <div className={styles.contactFormContainer}>
              <Card>
                <h3>
                  <i className="fas fa-paper-plane" />
                  Écrire un message
                </h3>
                <p style={{ color: 'var(--gray)', marginBottom: 'var(--space-2xl)' }}>
                  Le formulaire de contact sera bientôt disponible.<br />
                  En attendant, vous pouvez me joindre directement par téléphone ou email.
                </p>

                {/* Placeholder du formulaire */}
                <div className={styles.formPlaceholder}>
                  <div className={styles.formField}>
                    <label>Nom complet</label>
                    <input
                      type="text"
                      disabled
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label>Email</label>
                    <input
                      type="email"
                      disabled
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label>Téléphone</label>
                    <input
                      type="tel"
                      disabled
                      placeholder="Votre téléphone"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label>Message</label>
                    <textarea
                      disabled
                      rows={5}
                      placeholder="Votre message..."
                    />
                  </div>
                  <button className={styles.formButton} disabled>
                    Formulaire à venir
                  </button>
                </div>

                <div className={styles.infoBox}>
                  <p>
                    <strong>
                      <i className="fas fa-lightbulb" style={{ color: 'var(--primary)', marginRight: 'var(--space-xs)' }} />
                      Pour l'instant :
                    </strong>
                    Appelez-moi au{' '}
                    <a href="tel:+33621953168">
                      06 21 95 31 68
                    </a><br />
                    Ou écrivez-moi à{' '}
                    <a href="mailto:contact@hydrotherapie-colon-savoie.fr" className={styles.breakAll}>
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
      <Section variant="alt">
        <Container>
          <h2>
            <i className="fas fa-map-marked-alt" style={{ color: 'var(--primary)', marginRight: 'var(--space-md)' }} />
            Localisation
          </h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.5836060257834!2d6.767251792456602!3d46.39748316603168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba0a3b6ececbb%3A0x144b691290669f6e!2sGarnier%20Marie-Pierre!5e0!3m2!1sfr!2sfr!4v1760058506918!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              title="Localisation du cabinet"
            />
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
