import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StickyBottomBar from './StickyBottomBar';

describe('StickyBottomBar', () => {
  it('renders booking button', () => {
    render(
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(screen.getByRole('button', { name: /Réserver/i })).toBeInTheDocument();
  });

  it('renders question button', () => {
    render(
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(screen.getByRole('button', { name: /Question/i })).toBeInTheDocument();
  });

  it('calls onBookingClick when booking button is clicked', async () => {
    const user = userEvent.setup();
    const handleBookingClick = vi.fn();

    render(
      <StickyBottomBar
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
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={handleQuestionClick}
      />
    );

    const questionButton = screen.getByRole('button', { name: /Question/i });
    await user.click(questionButton);

    expect(handleQuestionClick).toHaveBeenCalledTimes(1);
  });

  it('has fixed positioning', () => {
    const { container } = render(
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(container.firstChild).toHaveClass('fixed');
  });

  it('is positioned at bottom', () => {
    const { container } = render(
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(container.firstChild).toHaveClass('bottom-0');
  });

  it('has high z-index for layering', () => {
    const { container } = render(
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(container.firstChild).toHaveClass('z-50');
  });

  it('is hidden on desktop (lg and above)', () => {
    const { container } = render(
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(container.firstChild).toHaveClass('lg:hidden');
  });

  it('applies custom className', () => {
    const { container } = render(
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
        className="custom-class"
      />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('has white background', () => {
    const { container } = render(
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    expect(container.firstChild).toHaveClass('bg-white');
  });

  it('has shadow for depth', () => {
    const { container } = render(
      <StickyBottomBar
        onBookingClick={() => {}}
        onQuestionClick={() => {}}
      />
    );

    const element = container.firstChild;
    expect(element?.classList.toString()).toMatch(/shadow/);
  });
});
