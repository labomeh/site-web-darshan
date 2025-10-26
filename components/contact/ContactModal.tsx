import { cn } from '@/lib/utils';

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'booking' | 'question';
  contactInfo: ContactInfo;
  serviceName?: string;
  className?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  mode,
  contactInfo,
  serviceName,
  className,
}: ContactModalProps) {
  if (!isOpen) {
    return null;
  }

  const isBooking = mode === 'booking';
  const title = isBooking ? 'Réserver une séance' : 'Poser une question';
  const description = isBooking
    ? 'Pour réserver votre séance, contactez-nous par email ou téléphone.'
    : 'Une question sur nos services ? Contactez-nous par email ou téléphone.';

  const emailSubject = isBooking
    ? serviceName
      ? `Demande de réservation - ${serviceName}`
      : 'Demande de réservation'
    : serviceName
    ? `Question - ${serviceName}`
    : 'Question';

  const emailBody = isBooking
    ? `Bonjour,%0D%0A%0D%0AJe souhaite réserver une séance${serviceName ? ` de ${serviceName}` : ''}.%0D%0A%0D%0AMerci de me contacter pour convenir d'une date.%0D%0A%0D%0ACordialement`
    : `Bonjour,%0D%0A%0D%0AJ'ai une question${serviceName ? ` concernant ${serviceName}` : ''} :%0D%0A%0D%0A%0D%0A%0D%0ACordialement`;

  const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
  const phoneNumber = contactInfo.phone.replace(/\s/g, '');

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      data-testid="modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-dark/60 p-4"
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={cn(
          'relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl',
          'animate-fadeIn',
          className
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-dark-gray transition-colors hover:text-black"
          aria-label="Fermer"
        >
          <i className="fa-solid fa-xmark text-xl" aria-hidden="true" />
        </button>

        <h2
          id="modal-title"
          className="mb-4 font-headings text-2xl font-semibold text-black"
        >
          {title}
        </h2>

        <p className="mb-6 text-dark-gray">{description}</p>

        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary/30">
            <i
              className="fa-solid fa-envelope mt-1 text-primary"
              aria-hidden="true"
            />
            <div className="flex-1">
              <p className="mb-1 text-sm font-medium text-black">Email</p>
              <a
                href={mailtoLink}
                className="text-dark-gray transition-colors hover:text-primary"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary/30">
            <i
              className="fa-solid fa-phone mt-1 text-primary"
              aria-hidden="true"
            />
            <div className="flex-1">
              <p className="mb-1 text-sm font-medium text-black">Téléphone</p>
              <a
                href={`tel:${phoneNumber}`}
                className="text-dark-gray transition-colors hover:text-primary"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-dark-gray">
          {isBooking
            ? 'Nous vous répondrons dans les plus brefs délais pour confirmer votre réservation.'
            : 'Nous vous répondrons dans les plus brefs délais.'}
        </p>
      </div>
    </div>
  );
}
