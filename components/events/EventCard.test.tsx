import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EventCard from './EventCard';

describe('EventCard', () => {
  it('renders event with title and dates', () => {
    render(
      <EventCard
        title="Stage de jeûne"
        startDate="2025-03-15T10:00:00"
        endDate="2025-03-17T16:00:00"
        excerpt="Un week-end de jeûne pour se ressourcer"
      />
    );

    expect(screen.getByText('Stage de jeûne')).toBeInTheDocument();
    expect(screen.getByText(/Un week-end de jeûne/)).toBeInTheDocument();
  });

  it('displays formatted date range', () => {
    render(
      <EventCard
        title="Nettoyage du foie"
        startDate="2025-04-01T09:00:00"
        endDate="2025-04-03T18:00:00"
        excerpt="Weekend detox"
      />
    );

    expect(screen.getByText(/1 avril 2025/)).toBeInTheDocument();
    expect(screen.getByText(/3 avril 2025/)).toBeInTheDocument();
  });

  it('displays single date when no end date', () => {
    render(
      <EventCard
        title="Atelier méditation"
        startDate="2025-05-10T14:00:00"
        excerpt="Séance unique"
      />
    );

    expect(screen.getByText(/10 mai 2025/)).toBeInTheDocument();
  });

  it('displays price when provided', () => {
    render(
      <EventCard
        title="Trio de soins"
        startDate="2025-06-01T10:00:00"
        excerpt="Détox complète"
        price="260€"
      />
    );

    expect(screen.getByText('260€')).toBeInTheDocument();
  });

  it('displays location when provided', () => {
    render(
      <EventCard
        title="Retraite bien-être"
        startDate="2025-07-01T10:00:00"
        excerpt="Weekend ressourçant"
        location="Centre Darshan, Saint-Gingolph"
      />
    );

    expect(screen.getByText('Centre Darshan, Saint-Gingolph')).toBeInTheDocument();
  });

  it('displays available spots when provided', () => {
    render(
      <EventCard
        title="Stage yoga"
        startDate="2025-08-01T10:00:00"
        excerpt="Initiation au yoga"
        availableSpots={5}
        totalSpots={12}
      />
    );

    expect(screen.getByText('5 places disponibles')).toBeInTheDocument();
  });

  it('displays featured badge when featured is true', () => {
    render(
      <EventCard
        title="Weekend spécial"
        startDate="2025-09-01T10:00:00"
        excerpt="Événement exceptionnel"
        featured
      />
    );

    expect(screen.getByText('À la une')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <EventCard
        title="Test Event"
        startDate="2025-10-01T10:00:00"
        excerpt="Test"
        className="custom-class"
      />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with minimum required props', () => {
    render(
      <EventCard title="Simple Event" startDate="2025-11-01T10:00:00" excerpt="Basic event" />
    );

    expect(screen.getByText('Simple Event')).toBeInTheDocument();
    expect(screen.getByText(/Basic event/)).toBeInTheDocument();
  });
});
