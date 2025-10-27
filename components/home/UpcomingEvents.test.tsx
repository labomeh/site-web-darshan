import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import UpcomingEvents from './UpcomingEvents';

describe('UpcomingEvents', () => {
  it('renders section title', () => {
    render(<UpcomingEvents />);

    expect(screen.getByText(/Événements à venir/i)).toBeInTheDocument();
  });

  it('displays message when no events', () => {
    render(<UpcomingEvents events={[]} />);

    expect(screen.getByText(/Aucun événement prévu pour le moment/i)).toBeInTheDocument();
  });

  it('renders event cards when events provided', () => {
    const mockEvents = [
      {
        title: 'Stage de jeûne printemps',
        startDate: '2025-03-15',
        endDate: '2025-03-20',
        excerpt: 'Une semaine de détox et régénération',
        price: '950€',
        location: 'Saint-Gingolph',
        availableSpots: 5,
        totalSpots: 8,
      },
      {
        title: 'Atelier méditation',
        startDate: '2025-02-10',
        excerpt: 'Découverte de la méditation tantrique',
        price: '60€',
      },
    ];

    render(<UpcomingEvents events={mockEvents} />);

    expect(screen.getByText('Stage de jeûne printemps')).toBeInTheDocument();
    expect(screen.getByText('Atelier méditation')).toBeInTheDocument();
  });

  it('limits displayed events to 3 by default', () => {
    const mockEvents = Array.from({ length: 5 }, (_, i) => ({
      title: `Event ${i + 1}`,
      startDate: '2025-03-15',
      excerpt: `Description ${i + 1}`,
    }));

    render(<UpcomingEvents events={mockEvents} />);

    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
    expect(screen.getByText('Event 3')).toBeInTheDocument();
    expect(screen.queryByText('Event 4')).not.toBeInTheDocument();
    expect(screen.queryByText('Event 5')).not.toBeInTheDocument();
  });

  it('respects custom maxEvents limit', () => {
    const mockEvents = Array.from({ length: 5 }, (_, i) => ({
      title: `Event ${i + 1}`,
      startDate: '2025-03-15',
      excerpt: `Description ${i + 1}`,
    }));

    render(<UpcomingEvents events={mockEvents} maxEvents={2} />);

    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
    expect(screen.queryByText('Event 3')).not.toBeInTheDocument();
  });

  it('shows "Voir tous les événements" link when events exist', () => {
    const mockEvents = [
      {
        title: 'Test Event',
        startDate: '2025-03-15',
        excerpt: 'Test description',
      },
    ];

    render(<UpcomingEvents events={mockEvents} />);

    const link = screen.getByRole('link', { name: /Voir tous les événements/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/evenements');
  });

  it('does not show link when no events', () => {
    render(<UpcomingEvents events={[]} />);

    expect(
      screen.queryByRole('link', { name: /Voir tous les événements/i })
    ).not.toBeInTheDocument();
  });
});
