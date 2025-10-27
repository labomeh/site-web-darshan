import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import ContactModal from './ContactModal';

global.fetch = vi.fn();

describe('ContactModal', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env = { ...originalEnv, NEXT_PUBLIC_WEB3FORMS_KEY: 'test-key-123' };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('Booking Mode', () => {
    it('renders booking modal when mode is "booking"', () => {
      render(<ContactModal isOpen onClose={() => {}} mode="booking" />);

      expect(screen.getByRole('heading', { name: /Réserver une séance/i })).toBeInTheDocument();
    });

    it('displays booking-specific content', () => {
      render(<ContactModal isOpen onClose={() => {}} mode="booking" />);

      expect(screen.getByText(/Remplissez le formulaire/i)).toBeInTheDocument();
    });

    it('shows form fields for booking', () => {
      render(<ContactModal isOpen onClose={() => {}} mode="booking" />);

      expect(screen.getByLabelText(/Nom/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Téléphone/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    });

    it('pre-fills message for booking without service', () => {
      render(<ContactModal isOpen onClose={() => {}} mode="booking" />);

      const messageField = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;

      expect(messageField.value).toContain('Je souhaite réserver une séance');
    });

    it('pre-fills message for booking with service name', () => {
      render(
        <ContactModal
          isOpen
          onClose={() => {}}
          mode="booking"
          serviceName="Hydrothérapie du Côlon"
        />
      );

      const messageField = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;

      expect(messageField.value).toContain('Hydrothérapie du Côlon');
    });

    it('includes service name in subject field when provided', () => {
      render(
        <ContactModal
          isOpen
          onClose={() => {}}
          mode="booking"
          serviceName="Hydrothérapie du Côlon"
        />
      );

      const subjectField = screen.getByDisplayValue(
        /Demande de réservation - Hydrothérapie du Côlon/i
      );

      expect(subjectField).toBeInTheDocument();
    });
  });

  describe('Question Mode', () => {
    it('renders question modal when mode is "question"', () => {
      render(<ContactModal isOpen onClose={() => {}} mode="question" />);

      expect(screen.getByText(/Poser une question/i)).toBeInTheDocument();
    });

    it('displays question-specific content', () => {
      render(<ContactModal isOpen onClose={() => {}} mode="question" />);

      expect(screen.getByText(/Remplissez le formulaire/i)).toBeInTheDocument();
    });

    it('pre-fills message for question without service', () => {
      render(<ContactModal isOpen onClose={() => {}} mode="question" />);

      const messageField = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;

      expect(messageField.value).toContain("J'ai une question");
    });

    it('pre-fills message for question with service name', () => {
      render(
        <ContactModal isOpen onClose={() => {}} mode="question" serviceName="Massage Ayurvédique" />
      );

      const messageField = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;

      expect(messageField.value).toContain('Massage Ayurvédique');
    });

    it('includes service name in subject field when provided', () => {
      render(
        <ContactModal isOpen onClose={() => {}} mode="question" serviceName="Massage Ayurvédique" />
      );

      const subjectField = screen.getByDisplayValue(/Question - Massage Ayurvédique/i);

      expect(subjectField).toBeInTheDocument();
    });
  });

  describe('Form Submission', () => {
    it('submits form with all required fields', async () => {
      const user = userEvent.setup();
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      global.fetch = mockFetch;

      render(<ContactModal isOpen onClose={() => {}} mode="booking" />);

      await user.type(screen.getByLabelText(/Nom/i), 'Jean Dupont');
      await user.type(screen.getByLabelText(/Email/i), 'jean@example.com');
      await user.type(screen.getByLabelText(/Téléphone/i), '0612345678');
      await user.click(screen.getByRole('button', { name: /Envoyer/i }));

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledTimes(1);
      });

      const formData = mockFetch.mock.calls[0]?.[1]?.body;

      expect(formData).toBeInstanceOf(FormData);
    });

    it('shows success message after successful submission', async () => {
      const user = userEvent.setup();
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      });

      global.fetch = mockFetch;

      render(<ContactModal isOpen onClose={() => {}} mode="booking" />);

      await user.type(screen.getByLabelText(/Nom/i), 'Jean Dupont');
      await user.type(screen.getByLabelText(/Email/i), 'jean@example.com');
      await user.type(screen.getByLabelText(/Téléphone/i), '0612345678');
      await user.click(screen.getByRole('button', { name: /Envoyer/i }));

      await waitFor(() => {
        expect(screen.getByText(/Message envoyé avec succès/i)).toBeInTheDocument();
      });
    });

    it('shows error message after failed submission', async () => {
      const user = userEvent.setup();
      const mockFetch = vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ success: false }),
      });

      global.fetch = mockFetch;

      render(<ContactModal isOpen onClose={() => {}} mode="booking" />);

      await user.type(screen.getByLabelText(/Nom/i), 'Jean Dupont');
      await user.type(screen.getByLabelText(/Email/i), 'jean@example.com');
      await user.type(screen.getByLabelText(/Téléphone/i), '0612345678');
      await user.click(screen.getByRole('button', { name: /Envoyer/i }));

      await waitFor(() => {
        expect(screen.getByText(/Une erreur est survenue/i)).toBeInTheDocument();
      });
    });

    it('validates required fields before submission', async () => {
      const user = userEvent.setup();
      const mockFetch = vi.fn();

      global.fetch = mockFetch;

      render(<ContactModal isOpen onClose={() => {}} mode="booking" />);

      await user.click(screen.getByRole('button', { name: /Envoyer/i }));

      expect(mockFetch).not.toHaveBeenCalled();
    });
  });

  describe('Common Functionality', () => {
    it('does not render when isOpen is false', () => {
      const { container } = render(
        <ContactModal isOpen={false} onClose={() => {}} mode="booking" />
      );

      expect(container.firstChild).toBeNull();
    });

    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(<ContactModal isOpen onClose={handleClose} mode="booking" />);

      const closeButton = screen.getByRole('button', { name: /fermer/i });

      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when backdrop is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(<ContactModal isOpen onClose={handleClose} mode="booking" />);

      const backdrop = screen.getByTestId('modal-backdrop');

      await user.click(backdrop);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when modal content is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(<ContactModal isOpen onClose={handleClose} mode="booking" />);

      const modalContent = screen.getByRole('dialog');

      await user.click(modalContent);

      expect(handleClose).not.toHaveBeenCalled();
    });

    it('includes honeypot field for spam protection', () => {
      render(<ContactModal isOpen onClose={() => {}} mode="booking" />);

      const honeypot = document.querySelector('input[name="botcheck"]');

      expect(honeypot).toBeInTheDocument();
      expect(honeypot).toHaveStyle({ display: 'none' });
    });
  });
});
