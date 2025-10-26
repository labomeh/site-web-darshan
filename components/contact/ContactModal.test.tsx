import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactModal from './ContactModal';

describe('ContactModal', () => {
  const mockContactInfo = {
    email: 'contact@centre-darshan.fr',
    phone: '+33 6 12 34 56 78',
  };

  describe('Booking Mode', () => {
    it('renders booking modal when mode is "booking"', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      expect(screen.getByText(/Réserver une séance/i)).toBeInTheDocument();
    });

    it('displays booking-specific content', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      expect(screen.getByText(/Pour réserver/i)).toBeInTheDocument();
    });

    it('shows mailto link with booking subject', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      const emailLink = screen.getByRole('link', { name: /contact@centre-darshan.fr/i });
      expect(emailLink).toHaveAttribute('href', expect.stringContaining('Demande'));
    });

    it('includes service name in subject when provided', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="booking"
          contactInfo={mockContactInfo}
          serviceName="Hydrothérapie du Côlon"
        />
      );

      const emailLink = screen.getByRole('link', { name: /contact@centre-darshan.fr/i });
      expect(emailLink).toHaveAttribute('href', expect.stringContaining('Hydrothérapie du Côlon'));
    });
  });

  describe('Question Mode', () => {
    it('renders question modal when mode is "question"', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="question"
          contactInfo={mockContactInfo}
        />
      );

      expect(screen.getByText(/Poser une question/i)).toBeInTheDocument();
    });

    it('displays question-specific content', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="question"
          contactInfo={mockContactInfo}
        />
      );

      expect(screen.getByText(/Une question sur nos services/i)).toBeInTheDocument();
    });

    it('shows mailto link with question subject', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="question"
          contactInfo={mockContactInfo}
        />
      );

      const emailLink = screen.getByRole('link', { name: /contact@centre-darshan.fr/i });
      expect(emailLink).toHaveAttribute('href', expect.stringContaining('subject=Question'));
    });
  });

  describe('Common Functionality', () => {
    it('does not render when isOpen is false', () => {
      const { container } = render(
        <ContactModal
          isOpen={false}
          onClose={() => {}}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      expect(container.firstChild).toBeNull();
    });

    it('displays contact email', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      expect(screen.getByText(/contact@centre-darshan.fr/i)).toBeInTheDocument();
    });

    it('displays contact phone', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      expect(screen.getByText(/\+33 6 12 34 56 78/)).toBeInTheDocument();
    });

    it('has phone link with tel: protocol', () => {
      render(
        <ContactModal
          isOpen={true}
          onClose={() => {}}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      const phoneLink = screen.getByRole('link', { name: /\+33 6 12 34 56 78/ });
      expect(phoneLink).toHaveAttribute('href', 'tel:+33612345678');
    });

    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(
        <ContactModal
          isOpen={true}
          onClose={handleClose}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      const closeButton = screen.getByRole('button', { name: /fermer/i });
      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when backdrop is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(
        <ContactModal
          isOpen={true}
          onClose={handleClose}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      const backdrop = screen.getByTestId('modal-backdrop');
      await user.click(backdrop);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when modal content is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(
        <ContactModal
          isOpen={true}
          onClose={handleClose}
          mode="booking"
          contactInfo={mockContactInfo}
        />
      );

      const modalContent = screen.getByRole('dialog');
      await user.click(modalContent);

      expect(handleClose).not.toHaveBeenCalled();
    });
  });
});
