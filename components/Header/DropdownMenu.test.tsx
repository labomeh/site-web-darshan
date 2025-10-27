import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import DropdownMenu from './DropdownMenu';

describe('DropdownMenu', () => {
  const mockItems = [
    { href: '/services/hydrotherapie-du-colon', label: 'Hydrothérapie du côlon' },
    { href: '/services/massages-ayurvediques', label: 'Massages ayurvédiques' },
  ];

  it('renders dropdown trigger button', () => {
    render(<DropdownMenu label="Services" items={mockItems} />);

    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('shows dropdown items when clicked', async () => {
    const user = userEvent.setup();

    render(<DropdownMenu label="Services" items={mockItems} />);

    const trigger = screen.getByText('Services');

    await user.click(trigger);

    expect(screen.getByText('Hydrothérapie du côlon')).toBeInTheDocument();
    expect(screen.getByText('Massages ayurvédiques')).toBeInTheDocument();
  });

  it('hides dropdown when clicking outside', async () => {
    const user = userEvent.setup();

    render(
      <div>
        <DropdownMenu label="Services" items={mockItems} />
        <div data-testid="outside">Outside</div>
      </div>
    );

    const trigger = screen.getByText('Services');

    await user.click(trigger);

    expect(screen.getByText('Hydrothérapie du côlon')).toBeVisible();

    await user.click(screen.getByTestId('outside'));

    expect(screen.queryByText('Hydrothérapie du côlon')).not.toBeInTheDocument();
  });

  it('closes dropdown when item is clicked', async () => {
    const user = userEvent.setup();

    render(<DropdownMenu label="Services" items={mockItems} />);

    const trigger = screen.getByText('Services');

    await user.click(trigger);

    const link = screen.getByText('Hydrothérapie du côlon');

    await user.click(link);

    expect(screen.queryByText('Massages ayurvédiques')).not.toBeInTheDocument();
  });

  it('has chevron icon that rotates when open', async () => {
    const user = userEvent.setup();
    const { container } = render(<DropdownMenu label="Services" items={mockItems} />);

    const trigger = screen.getByText('Services');
    const chevron = container.querySelector('.fa-chevron-down');

    expect(chevron).not.toHaveClass('rotate-180');

    await user.click(trigger);

    expect(chevron).toHaveClass('rotate-180');
  });
});
