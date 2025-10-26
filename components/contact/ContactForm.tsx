import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    formData.append('subject', 'Contact depuis le site web');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
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

  return (
    <div className={cn('rounded-lg bg-white p-6 shadow-md', className)}>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
          <i className="fas fa-envelope text-lg text-primary" aria-hidden="true" />
        </div>
        <h3 className="m-0 font-headings text-lg font-medium text-black">
          Envoyez-nous un message
        </h3>
      </div>

      {submitStatus === 'success' ? (
        <div className="rounded-lg border-2 border-primary bg-primary/5 p-6 text-center">
          <i className="fa-solid fa-check-circle mb-3 text-4xl text-primary" aria-hidden="true" />
          <p className="mb-2 font-semibold text-black">Message envoyé avec succès !</p>
          <p className="text-sm text-dark-gray">
            Nous vous répondrons dans les plus brefs délais.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="mt-4 rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Envoyer un nouveau message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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
                Contact depuis le site web
              </p>
            </div>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full rounded-lg border border-light-gray bg-white px-4 py-3 text-black transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Écrivez votre message..."
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
  );
}
