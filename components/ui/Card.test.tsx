import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card', () => {
  describe('Rendering', () => {
    it('renders as div by default', () => {
      const { container } = render(<Card title="Test Card" />);

      expect(container.querySelector('div')).toBeInTheDocument();
    });

    it('renders as link when href is provided', () => {
      render(<Card title="Test Card" href="/test" />);

      const link = screen.getByRole('link');

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/test');
    });

    it('renders children content', () => {
      render(
        <Card>
          <p>Custom content</p>
        </Card>
      );

      expect(screen.getByText('Custom content')).toBeInTheDocument();
    });
  });

  describe('Content', () => {
    it('renders title when provided', () => {
      render(<Card title="Test Title" />);

      const title = screen.getByRole('heading', { name: 'Test Title' });

      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('font-headings', 'text-2xl', 'text-black');
    });

    it('renders description when provided', () => {
      render(<Card description="Test description" />);

      expect(screen.getByText('Test description')).toBeInTheDocument();
      expect(screen.getByText('Test description')).toHaveClass('text-dark-gray');
    });

    it('renders image when provided', () => {
      render(<Card image="/test-image.jpg" imageAlt="Test image" title="Card with image" />);

      const img = screen.getByRole('img', { name: 'Test image' });

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', '/test-image.jpg');
      expect(img).toHaveAttribute('loading', 'lazy');
    });

    it('uses title as alt text when imageAlt is not provided', () => {
      render(<Card image="/test.jpg" title="Test Card" />);

      const img = screen.getByRole('img', { name: 'Test Card' });

      expect(img).toBeInTheDocument();
    });

    it('uses default alt text when neither imageAlt nor title provided', () => {
      render(<Card image="/test.jpg" />);

      const img = screen.getByRole('img', { name: 'Card image' });

      expect(img).toBeInTheDocument();
    });

    it('renders all content together', () => {
      render(
        <Card
          title="Complete Card"
          description="Full description"
          image="/test.jpg"
          imageAlt="Test"
        >
          <p>Additional content</p>
        </Card>
      );

      expect(screen.getByRole('heading', { name: 'Complete Card' })).toBeInTheDocument();
      expect(screen.getByText('Full description')).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'Test' })).toBeInTheDocument();
      expect(screen.getByText('Additional content')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies default card styles', () => {
      const { container } = render(<Card title="Test" />);
      const card = container.firstChild as HTMLElement;

      expect(card).toHaveClass(
        'rounded-2xl',
        'bg-white',
        'p-8',
        'shadow-sm',
        'transition-all',
        'duration-300'
      );
    });

    it('applies hover styles by default', () => {
      const { container } = render(<Card title="Test" />);
      const card = container.firstChild as HTMLElement;

      expect(card).toHaveClass('hover:shadow-lg');
    });

    it('removes hover styles when hoverable is false', () => {
      const { container } = render(<Card title="Test" hoverable={false} />);
      const card = container.firstChild as HTMLElement;

      expect(card).not.toHaveClass('hover:shadow-lg');
    });

    it('applies cursor-pointer when href is provided', () => {
      const { container } = render(<Card title="Test" href="/test" />);
      const card = container.firstChild as HTMLElement;

      expect(card).toHaveClass('cursor-pointer');
    });

    it('supports custom className', () => {
      const { container } = render(<Card title="Test" className="custom-class" />);
      const card = container.firstChild as HTMLElement;

      expect(card).toHaveClass('custom-class');
    });

    it('combines custom className with default styles', () => {
      const { container } = render(<Card title="Test" className="extra-padding" />);
      const card = container.firstChild as HTMLElement;

      expect(card).toHaveClass('rounded-2xl', 'bg-white', 'extra-padding');
    });
  });

  describe('Image Styling', () => {
    it('applies correct aspect ratio to image', () => {
      render(<Card image="/test.jpg" imageAlt="Test" />);

      const img = screen.getByRole('img');

      expect(img).toHaveClass('aspect-[4/5]', 'w-full', 'rounded-lg', 'object-cover');
    });
  });
});
