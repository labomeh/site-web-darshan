import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TestimonialCard from './TestimonialCard';

describe('TestimonialCard', () => {
  it('renders testimonial with author name and content', () => {
    render(
      <TestimonialCard
        authorName="M.P."
        content="Excellente expérience, je recommande vivement!"
        rating={5}
      />
    );

    expect(screen.getByText('M.P.')).toBeInTheDocument();
    expect(
      screen.getByText(/Excellente expérience, je recommande vivement!/)
    ).toBeInTheDocument();
  });

  it('displays correct number of stars for rating', () => {
    const { container } = render(
      <TestimonialCard authorName="J.D." content="Très bien" rating={4} />
    );

    const stars = container.querySelectorAll('.fa-star');
    expect(stars).toHaveLength(4);
  });

  it('displays location when provided', () => {
    render(
      <TestimonialCard
        authorName="S.L."
        content="Super!"
        rating={5}
        location="Evian"
      />
    );

    expect(screen.getByText('Evian')).toBeInTheDocument();
  });

  it('displays verified badge when verified is true', () => {
    render(
      <TestimonialCard
        authorName="A.B."
        content="Parfait"
        rating={5}
        verified={true}
      />
    );

    expect(screen.getByText('Vérifié')).toBeInTheDocument();
  });

  it('does not display verified badge when verified is false', () => {
    render(
      <TestimonialCard
        authorName="C.D."
        content="Bien"
        rating={4}
        verified={false}
      />
    );

    expect(screen.queryByText('Vérifié')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <TestimonialCard
        authorName="E.F."
        content="Nice"
        rating={5}
        className="custom-class"
      />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with minimum required props', () => {
    render(
      <TestimonialCard
        authorName="G.H."
        content="Good service"
        rating={3}
      />
    );

    expect(screen.getByText('G.H.')).toBeInTheDocument();
    expect(screen.getByText(/Good service/)).toBeInTheDocument();
  });
});
