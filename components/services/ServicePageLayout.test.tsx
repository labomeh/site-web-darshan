import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ServicePageLayout from './ServicePageLayout';

const mockPricing = [{ name: 'Séance individuelle', price: '120€', duration: '45-60 min' }];

describe('ServicePageLayout', () => {
  it('renders service title', () => {
    render(
      <ServicePageLayout
        title="Hydrothérapie du côlon"
        duration="45-60 min"
        pricing={mockPricing}
        onBookingClick={vi.fn()}
        onQuestionClick={vi.fn()}
      >
        <p>Content here</p>
      </ServicePageLayout>
    );

    expect(screen.getByText('Hydrothérapie du côlon')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <ServicePageLayout
        title="Service"
        duration="60 min"
        pricing={mockPricing}
        onBookingClick={vi.fn()}
        onQuestionClick={vi.fn()}
      >
        <div data-testid="custom-content">Custom content</div>
      </ServicePageLayout>
    );

    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
  });

  it('renders sidebar on desktop', () => {
    render(
      <ServicePageLayout
        title="Service"
        duration="60 min"
        pricing={mockPricing}
        onBookingClick={vi.fn()}
        onQuestionClick={vi.fn()}
      >
        <p>Content</p>
      </ServicePageLayout>
    );

    const sidebar = screen.getByText('Tarifs').closest('aside');

    expect(sidebar).toHaveClass('hidden', 'lg:block');
  });

  it('renders sticky bottom bar on mobile', () => {
    render(
      <ServicePageLayout
        title="Service"
        duration="60 min"
        pricing={mockPricing}
        onBookingClick={vi.fn()}
        onQuestionClick={vi.fn()}
      >
        <p>Content</p>
      </ServicePageLayout>
    );

    const bottomBarButton = screen.getAllByText('Réserver')[1];
    const bottomBar = bottomBarButton?.closest('[class*="fixed bottom-0"]');

    expect(bottomBar).toHaveClass('lg:hidden');
  });
  it('passes related events to sidebar', () => {
    const relatedEvents = [{ title: 'Atelier bien-être', date: '15 janvier 2025' }];

    render(
      <ServicePageLayout
        title="Service"
        duration="60 min"
        pricing={mockPricing}
        relatedEvents={relatedEvents}
        onBookingClick={vi.fn()}
        onQuestionClick={vi.fn()}
      >
        <p>Content</p>
      </ServicePageLayout>
    );

    expect(screen.getByText('Atelier bien-être')).toBeInTheDocument();
    expect(screen.getByText('15 janvier 2025')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ServicePageLayout
        title="Service"
        duration="60 min"
        pricing={mockPricing}
        onBookingClick={vi.fn()}
        onQuestionClick={vi.fn()}
        className="custom-class"
      >
        <p>Content</p>
      </ServicePageLayout>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });
});
