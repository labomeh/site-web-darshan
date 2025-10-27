import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Container from './Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(<Container>Test content</Container>);

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default max-width and centering', () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveClass('max-w-[1200px]', 'mx-auto', 'px-6');
  });

  it('applies text max-width when specified', () => {
    const { container } = render(<Container maxWidth="text">Content</Container>);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveClass('max-w-3xl', 'mx-auto', 'px-6');
  });

  it('applies full max-width when specified', () => {
    const { container } = render(<Container maxWidth="full">Content</Container>);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveClass('max-w-full', 'mx-auto', 'px-6');
  });

  it('supports custom className', () => {
    const { container } = render(<Container className="custom-padding">Content</Container>);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveClass('custom-padding');
  });

  it('combines maxWidth prop with custom className', () => {
    const { container } = render(
      <Container maxWidth="text" className="py-8">
        Content
      </Container>
    );
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveClass('max-w-3xl', 'py-8');
  });
});
