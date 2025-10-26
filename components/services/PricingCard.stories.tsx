import type { Story } from '@ladle/react';
import PricingCard from './PricingCard';

export const SingleSession: Story = () => (
  <PricingCard name="Séance individuelle" price="120€" duration="45-60 min" />
);

SingleSession.meta = {
  description: 'Single session pricing card with duration',
};

export const PackageWithSavings: Story = () => (
  <PricingCard
    name="3 séances"
    price="340€"
    savings="Économie de 20€"
    duration="45-60 min"
  />
);

PackageWithSavings.meta = {
  description: 'Package pricing with savings badge',
};

export const PackageWithDescription: Story = () => (
  <PricingCard
    name="5 séances"
    price="550€"
    savings="Économie de 50€"
    duration="45-60 min"
    description="Forfait pour un suivi régulier et des résultats optimaux"
  />
);

PackageWithDescription.meta = {
  description: 'Package with savings and description text',
};

export const MinimalPricing: Story = () => (
  <PricingCard name="Consultation" price="80€" />
);

MinimalPricing.meta = {
  description: 'Minimal pricing card without optional fields',
};

export const MobileView: Story = () => (
  <div className="flex flex-col gap-4">
    <PricingCard
      name="Hydrothérapie du côlon"
      price="120€"
      duration="45-60 min"
    />
    <PricingCard
      name="3 séances"
      price="340€"
      savings="Économie de 20€"
      duration="45-60 min"
    />
    <PricingCard
      name="5 séances"
      price="550€"
      savings="Économie de 50€"
      duration="45-60 min"
      description="Forfait recommandé pour un nettoyage complet"
    />
  </div>
);

MobileView.meta = {
  width: 'xsmall',
  description: 'Mobile view with stacked pricing cards',
};

export const DesktopGrid: Story = () => (
  <div className="grid gap-6 md:grid-cols-3">
    <PricingCard
      name="Séance individuelle"
      price="120€"
      duration="45-60 min"
    />
    <PricingCard
      name="3 séances"
      price="340€"
      savings="Économie de 20€"
      duration="45-60 min"
    />
    <PricingCard
      name="5 séances"
      price="550€"
      savings="Économie de 50€"
      duration="45-60 min"
      description="Forfait pour un suivi régulier"
    />
  </div>
);

DesktopGrid.meta = {
  width: 'large',
  description: 'Desktop grid layout with 3 columns',
};
