import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'booking' | 'question';
  serviceName?: string;
  className?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  mode,
  serviceName,
  className,
}: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setSubmitStatus('idle');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const isBooking = mode === 'booking';
  const title = isBooking ? 'Réserver une séance' : 'Poser une question';
  const description = isBooking
    ? 'Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais pour confirmer votre réservation.'
    : 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.';

  const subject = isBooking
    ? serviceName
      ? `Demande de réservation - ${serviceName}`
      : 'Demande de réservation'
    : serviceName
    ? `Question - ${serviceName}`
    : 'Question';

  const contextMessage = isBooking
    ? serviceName
      ? `Demande de réservation - ${serviceName}`
      : 'Demande de réservation'
    : serviceName
    ? `Question - ${serviceName}`
    : 'Question générale';

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.error('Web3Forms access key is not configured');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalContent = (
    <div
      data-testid="modal-backdrop"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-secondary-dark/60 p-4"
      onClick={handleBackdropClick}
      style={{ margin: 0 }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={cn(
          'relative w-full max-w-2xl max-h-full rounded-lg bg-white p-6 shadow-2xl',
          'overflow-y-auto',
          'animate-fadeIn',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-dark-gray transition-colors hover:bg-gray-100 hover:text-black"
          aria-label="Fermer"
        >
          <i className="fa-solid fa-xmark text-xl" aria-hidden="true" />
        </button>

        <h2
          id="modal-title"
          className="mb-4 pr-8 font-headings text-2xl font-semibold text-black"
        >
          {title}
        </h2>

        <p className="mb-6 text-dark-gray">{description}</p>

        {submitStatus === 'success' ? (
          <div className="rounded-lg border-2 border-primary bg-primary/5 p-4 text-center">
            <i className="fa-solid fa-check-circle mb-2 text-3xl text-primary" aria-hidden="true" />
            <p className="font-semibold text-black">Message envoyé avec succès !</p>
            <p className="mt-2 text-sm text-dark-gray">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="subject" value={subject} />
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold text-black">
                Nom <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-light-gray bg-white px-4 py-3 text-black transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-black">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-light-gray bg-white px-4 py-3 text-black transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-black">
                Téléphone <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-lg border border-light-gray bg-white px-4 py-3 text-black transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="06 12 34 56 78"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold text-black">
                Message <span className="text-primary">*</span>
              </label>
              <div className="mb-2 flex items-start gap-2 rounded-lg bg-primary/10 p-3">
                <i className="fa-solid fa-info-circle mt-0.5 text-sm text-primary" aria-hidden="true" />
                <p className="text-sm text-dark-gray">
                  <span className="font-medium text-black">Contexte : </span>
                  {contextMessage}
                </p>
              </div>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Écrivez votre message..."
                className="w-full rounded-lg border border-light-gray bg-white px-4 py-3 text-black transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {submitStatus === 'error' && (
              <div className="rounded-lg border-2 border-red-500 bg-red-50 p-3 text-center">
                <p className="text-sm font-semibold text-red-700">
                  Une erreur est survenue lors de l'envoi du message.
                </p>
                <p className="mt-1 text-xs text-red-600">
                  Veuillez réessayer ou nous contacter directement.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                'w-full rounded-lg px-6 py-3 font-semibold text-white transition-all',
                'bg-primary hover:bg-primary-dark',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                isSubmitting && 'cursor-not-allowed opacity-50'
              )}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" />
                  Envoi en cours...
                </span>
              ) : (
                <span>Envoyer</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  if (typeof window === 'undefined') {
    return null;
  }

  return createPortal(modalContent, document.body);
}
