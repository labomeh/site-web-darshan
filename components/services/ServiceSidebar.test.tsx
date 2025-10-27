import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ServiceSidebar from './ServiceSidebar';

describe('ServiceSidebar', () => {
  const mockPricing = [
    {
      name: 'Séance individuelle',
      price: '120€',
      duration: '45-60 min',
    },
    {
      name: '3 séances',
      price: '340€',
      savings: 'Économie de 20€',
    },
  ];

  it('renders service duration', () => {
    render(
      <ServiceSidebar
        duration="45-60 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(screen.getByText('45-60 minutes')).toBeInTheDocument();
  });

  it('renders all pricing options', () => {
    render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(screen.getByText('Séance individuelle')).toBeInTheDocument();
    expect(screen.getByText('120€')).toBeInTheDocument();
    expect(screen.getByText('3 séances')).toBeInTheDocument();
    expect(screen.getByText('340€')).toBeInTheDocument();
  });

  it('renders pricing duration when provided', () => {
    render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(screen.getByText('45-60 min')).toBeInTheDocument();
  });

  it('renders savings badge when provided', () => {
    render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(screen.getByText('Économie de 20€')).toBeInTheDocument();
  });

  it('renders booking button', () => {
    render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(screen.getByRole('button', { name: /Réserver/i })).toBeInTheDocument();
  });

  it('renders question button', () => {
    render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(screen.getByRole('button', { name: /Une question/i })).toBeInTheDocument();
  });

  it('calls onBookingClick when booking button is clicked', async () => {
    const user = userEvent.setup();
    const handleBookingClick = vi.fn();

    render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={handleBookingClick}
        onQuestionClick={() => {}}
      />
    );

    const bookingButton = screen.getByRole('button', { name: /Réserver/i });

    await user.click(bookingButton);

    expect(handleBookingClick).toHaveBeenCalledTimes(1);
  });

  it('calls onQuestionClick when question button is clicked', async () => {
    const user = userEvent.setup();
    const handleQuestionClick = vi.fn();

    render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={handleQuestionClick}
      />
    );

    const questionButton = screen.getByRole('button', { name: /Une question/i });

    await user.click(questionButton);

    expect(handleQuestionClick).toHaveBeenCalledTimes(1);
  });

  it('displays related events when provided', () => {
    const events = [
      {
        title: 'Week-end Détox Foie',
        date: '15-17 Mars 2025',
      },
    ];

    render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
        relatedEvents={events}
      />
    );

    expect(screen.getByText('Événements à venir')).toBeInTheDocument();
    expect(screen.getByText('Week-end Détox Foie')).toBeInTheDocument();
    expect(screen.getByText('15-17 Mars 2025')).toBeInTheDocument();
  });

  it('does not display events section when no events provided', () => {
    render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(screen.queryByText('Événements à venir')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
        className="custom-class"
      />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('has sticky positioning', () => {
    const { container } = render(
      <ServiceSidebar
        duration="45 minutes"
        pricing={mockPricing}
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(container.firstChild).toHaveClass('sticky');
  });
});
