import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FAQAccordion from './FAQAccordion';

describe('FAQAccordion', () => {
  const mockFaqItems = [
    {
      question: 'Combien de temps dure une séance?',
      answer: 'Une séance dure entre 45 et 60 minutes.',
    },
    {
      question: 'Y a-t-il des contre-indications?',
      answer: 'Oui, certaines conditions médicales sont contre-indiquées.',
    },
  ];

  it('renders all FAQ questions', () => {
    render(<FAQAccordion items={mockFaqItems} />);

    expect(screen.getByText('Combien de temps dure une séance?')).toBeInTheDocument();
    expect(screen.getByText('Y a-t-il des contre-indications?')).toBeInTheDocument();
  });

  it('hides answers by default', () => {
    render(<FAQAccordion items={mockFaqItems} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
  });

  it('shows answer when question is clicked', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion items={mockFaqItems} />);

    const firstQuestion = screen.getByText('Combien de temps dure une séance?');
    await user.click(firstQuestion);

    expect(screen.getByText('Une séance dure entre 45 et 60 minutes.')).toBeVisible();
  });

  it('hides answer when question is clicked again', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion items={mockFaqItems} />);

    const firstQuestion = screen.getByText('Combien de temps dure une séance?');
    const firstButton = screen.getAllByRole('button')[0];

    await user.click(firstQuestion);
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');

    await user.click(firstQuestion);
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('allows multiple items to be open simultaneously', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion items={mockFaqItems} />);

    const firstQuestion = screen.getByText('Combien de temps dure une séance?');
    const secondQuestion = screen.getByText('Y a-t-il des contre-indications?');

    await user.click(firstQuestion);
    await user.click(secondQuestion);

    expect(screen.getByText('Une séance dure entre 45 et 60 minutes.')).toBeVisible();
    expect(screen.getByText('Oui, certaines conditions médicales sont contre-indiquées.')).toBeVisible();
  });

  it('renders with empty items array', () => {
    const { container } = render(<FAQAccordion items={[]} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('applies custom className', () => {
    const { container } = render(
      <FAQAccordion items={mockFaqItems} className="custom-class" />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });
});
