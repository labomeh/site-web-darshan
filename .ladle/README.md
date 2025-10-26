# Ladle Component Development

This directory contains configuration for [Ladle](https://ladle.dev/), our component development and documentation tool.

## What is Ladle?

Ladle is a fast, lightweight alternative to Storybook for developing and documenting React components in isolation.

**Benefits:**
- ✅ Vite-based (extremely fast HMR)
- ✅ Visual component documentation (committed to Git)
- ✅ Responsive testing (mobile, tablet, desktop presets)
- ✅ Zero Next.js/Turbopack conflicts (separate dev server)

## Quick Start

```bash
# Start Ladle dev server
npm run ladle

# Access at: http://localhost:61000
```

## Files in this Directory

- **`config.mjs`** - Ladle configuration (stories location, viewport presets)
- **`components.tsx`** - Global provider (wraps all stories with Tailwind styles)
- **`NextImage.tsx`** - Mock for `next/image` (allows components using Next Image to work in Ladle)
- **`NextLink.tsx`** - Mock for `next/link` (allows components using Next Link to work in Ladle)

## Creating Component Stories

Stories live next to components:

```
components/
├── services/
│   ├── PricingCard.tsx        ← Component
│   ├── PricingCard.test.tsx   ← Tests
│   └── PricingCard.stories.tsx ← Ladle stories
```

### Example Story

```tsx
// components/services/PricingCard.stories.tsx
import type { Story } from '@ladle/react';
import PricingCard from './PricingCard';

export const SingleSession: Story = () => (
  <PricingCard
    name="Séance individuelle"
    price="120€"
    duration="45-60 min"
  />
);

export const PackageWithSavings: Story = () => (
  <PricingCard
    name="3 séances"
    price="340€"
    savings="Économie de 20€"
  />
);

// Test mobile view
export const MobileView: Story = () => (
  <PricingCard
    name="5 séances"
    price="550€"
    savings="Économie de 50€"
  />
);
MobileView.meta = {
  width: 'xsmall', // Mobile preset
};
```

## Viewport Presets

Test responsive behavior with built-in width presets:

- **xsmall** - 414px (Mobile)
- **small** - 640px (sm: breakpoint)
- **medium** - 768px (md: breakpoint) ← Default
- **large** - 1024px (lg: breakpoint)
- **xlarge** - 1280px (xl: breakpoint)

## TDD Workflow with Ladle

1. **Write test** (`PricingCard.test.tsx`)
2. **Run tests** (`npm run test:watch`)
3. **Implement component** (`PricingCard.tsx`)
4. **Create story** (`PricingCard.stories.tsx`)
5. **Visual validation** in Ladle (http://localhost:61000)
6. **Refactor** (tests auto-run)

## Building Static Documentation

```bash
npm run ladle:build
```

Generates static HTML in `build/` folder, which can be deployed separately for component documentation.

## Learn More

- [Ladle Documentation](https://ladle.dev/docs/)
- [Next.js Integration Guide](https://ladle.dev/docs/nextjs/)
