import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PricingCard from './PricingCard';

describe('PricingCard', () => {
  it('renders pricing card with name and price', () => {
    render(
      <PricingCard name="Séance individuelle" price="120€" duration="45-60 min" />
    );

    expect(screen.getByText('Séance individuelle')).toBeInTheDocument();
    expect(screen.getByText('120€')).toBeInTheDocument();
    expect(screen.getByText('45-60 min')).toBeInTheDocument();
  });

  it('displays savings when provided', () => {
    render(
      <PricingCard
        name="3 séances"
        price="340€"
        savings="Économie de 20€"
        duration="45-60 min"
      />
    );

    expect(screen.getByText('Économie de 20€')).toBeInTheDocument();
  });

  it('displays description when provided', () => {
    render(
      <PricingCard
        name="5 séances"
        price="550€"
        description="Forfait pour un suivi régulier"
      />
    );

    expect(screen.getByText('Forfait pour un suivi régulier')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <PricingCard name="Test" price="100€" className="custom-class" />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders without optional fields', () => {
    render(<PricingCard name="Basic" price="80€" />);

    expect(screen.getByText('Basic')).toBeInTheDocument();
    expect(screen.getByText('80€')).toBeInTheDocument();
  });
});
