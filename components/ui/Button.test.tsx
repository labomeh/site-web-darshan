import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders button with children', () => {
      render(<Button>Click me</Button>);

      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('renders as link when href is provided', () => {
      render(<Button href="/test">Go to page</Button>);

      const link = screen.getByRole('link', { name: 'Go to page' });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/test');
    });
  });

  describe('Variants', () => {
    it('applies primary variant styles by default', () => {
      render(<Button>Primary</Button>);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-primary', 'text-white');
    });

    it('applies secondary variant styles', () => {
      render(<Button variant="secondary">Secondary</Button>);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-secondary', 'text-primary');
    });

    it('applies outline variant styles', () => {
      render(<Button variant="outline">Outline</Button>);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('border-2', 'border-primary', 'bg-transparent', 'text-primary');
    });
  });

  describe('Sizes', () => {
    it('applies medium size by default', () => {
      render(<Button>Medium</Button>);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('min-h-[48px]', 'px-8', 'py-3.5', 'text-base');
    });

    it('applies small size styles', () => {
      render(<Button size="sm">Small</Button>);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('min-h-[36px]', 'px-4', 'py-2', 'text-sm');
    });

    it('applies large size styles', () => {
      render(<Button size="lg">Large</Button>);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('min-h-[56px]', 'px-12', 'py-4', 'text-lg');
    });
  });

  describe('Interaction', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has cursor-pointer class', () => {
      render(<Button>Button</Button>);

      expect(screen.getByRole('button')).toHaveClass('cursor-pointer');
    });

    it('has cursor-not-allowed when disabled', () => {
      render(<Button disabled>Disabled</Button>);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('disabled:cursor-not-allowed');
      expect(button).toBeDisabled();
    });

    it('has focus-visible styles', () => {
      render(<Button>Focus me</Button>);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('focus-visible:ring-2', 'focus-visible:ring-primary');
    });

    it('supports custom className', () => {
      render(<Button className="custom-class">Custom</Button>);

      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });
  });

  describe('HTML Attributes', () => {
    it('passes through button HTML attributes', () => {
      render(
        <Button type="submit" aria-label="Submit form">
          Submit
        </Button>
      );

      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('aria-label', 'Submit form');
    });
  });

  describe('With Icons', () => {
    it('renders button with icon', () => {
      render(
        <Button>
          <i className="fa-solid fa-check" aria-hidden="true" />
          Save
        </Button>
      );

      expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
    });
  });
});
