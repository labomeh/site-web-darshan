import { useState } from 'react';
import ContactInfoCard from '@/components/contact/ContactInfoCard';
import ContactModal from '@/components/contact/ContactModal';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import { BUSINESS_HOURS, CONTACT, LABELS, METADATA } from '@/config/site';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout
      currentPage="/contact"
      title={METADATA.contactTitle}
      description={METADATA.contactDescription}
    >
      <PageHeader title={LABELS.contact.title} compact />

      {/* Main Content - Sidebar Layout */}
      <section className="bg-off-white py-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Contact Info Sidebar */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <ContactInfoCard icon="fas fa-map-marker-alt" title={LABELS.contact.address}>
                <p className="text-sm">
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.postalCode} {CONTACT.address.city}
                  <br />
                  {CONTACT.address.country}
                </p>
              </ContactInfoCard>

              <ContactInfoCard icon="fas fa-phone" title={LABELS.contact.phone}>
                <a
                  href={`tel:${CONTACT.phone.tel}`}
                  className="text-sm font-medium text-secondary underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
                >
                  {CONTACT.phone.display}
                </a>
              </ContactInfoCard>

              <ContactInfoCard icon="fas fa-envelope" title={LABELS.contact.email}>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm font-medium break-all text-secondary underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
                >
                  {CONTACT.email}
                </a>
              </ContactInfoCard>

              <ContactInfoCard icon="fas fa-clock" title={LABELS.contact.hours}>
                <div className="text-sm">
                  <p className="mb-2">
                    <strong>{BUSINESS_HOURS.weekdays.label} :</strong>{' '}
                    {BUSINESS_HOURS.weekdays.hours}
                  </p>
                  <p className="mb-2">
                    <strong>{BUSINESS_HOURS.sunday.label} :</strong> {BUSINESS_HOURS.sunday.hours}
                  </p>
                  <p className="text-sm text-dark-gray">{BUSINESS_HOURS.note}</p>
                </div>
              </ContactInfoCard>

              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                size="lg"
                className="w-full"
              >
                <i className="fa-solid fa-envelope mr-2" aria-hidden="true" />
                Formulaire de contact
              </Button>
            </div>

            {/* Map - Main Content */}
            <div className="lg:col-span-2">
              <Card hoverable={false} className="flex h-full flex-col p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <i className="fas fa-map-marked-alt text-lg text-primary" />
                  </div>
                  <h3 className="m-0 font-headings text-lg font-medium text-black">
                    {LABELS.contact.location}
                  </h3>
                </div>
                <div className="flex-1 overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.5836060257834!2d6.767251792456602!3d46.39748316603168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba0a3b6ececbb%3A0x144b691290669f6e!2sGarnier%20Marie-Pierre!5e0!3m2!1sfr!2sfr!4v1760058506918!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    title="Localisation du cabinet"
                    className="block border-0"
                  />
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode="question" />
    </Layout>
  );
}
