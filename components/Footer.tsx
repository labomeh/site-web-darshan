import Link from 'next/link';
import { BUSINESS_HOURS, CONTACT, LABELS, SITE } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 text-off-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-headings text-lg text-white">{LABELS.footer.contact}</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-1 text-primary" />
                <span>
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.postalCode} {CONTACT.address.city.replace('BRET - ', '')}
                </span>
              </p>
              <p>
                <a
                  href={`tel:${CONTACT.phone.tel}`}
                  className="flex items-center gap-2 text-off-white underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
                >
                  <i className="fas fa-phone text-primary" />
                  {CONTACT.phone.display}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 break-all text-off-white underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
                >
                  <i className="fas fa-envelope text-primary" />
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="mb-4 font-headings text-lg text-white">{LABELS.footer.hours}</h3>
            <div className="space-y-1 text-sm">
              <p>
                <strong className="text-white">{BUSINESS_HOURS.weekdays.label} :</strong>{' '}
                {BUSINESS_HOURS.weekdays.hours}
              </p>
              <p>
                <strong className="text-white">{BUSINESS_HOURS.sunday.label} :</strong>{' '}
                {BUSINESS_HOURS.sunday.hours}
              </p>
              <p className="mt-2 text-sm text-off-white">{BUSINESS_HOURS.note}</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-headings text-lg text-white">{LABELS.footer.info}</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/mentions-legales"
                className="block text-off-white underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
              >
                {LABELS.footer.legalNotice}
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-secondary-light pt-6 text-center text-sm text-off-white/70">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name} - {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
