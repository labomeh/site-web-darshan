import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Section from './Section';

describe('Section', () => {
  it('renders children correctly', () => {
    render(<Section>Test content</Section>);

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders as section element', () => {
    const { container } = render(<Section>Content</Section>);

    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('applies default off-white background and padding', () => {
    const { container } = render(<Section>Content</Section>);
    const section = container.querySelector('section');

    expect(section).toHaveClass('py-12', 'md:py-16', 'bg-off-white');
  });

  it('applies white background when variant is white', () => {
    const { container } = render(<Section variant="white">Content</Section>);
    const section = container.querySelector('section');

    expect(section).toHaveClass('bg-white');
    expect(section).not.toHaveClass('bg-off-white');
  });

  it('supports custom className', () => {
    const { container } = render(<Section className="custom-styles">Content</Section>);
    const section = container.querySelector('section');

    expect(section).toHaveClass('custom-styles');
  });

  it('combines variant with custom className', () => {
    const { container } = render(
      <Section variant="white" className="extra-padding">
        Content
      </Section>
    );
    const section = container.querySelector('section');

    expect(section).toHaveClass('bg-white', 'extra-padding');
  });
});
