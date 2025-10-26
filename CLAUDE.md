# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## ⚡ DEVELOPMENT APPROACH - CRITICAL

**THIS PROJECT IS AI-FIRST - DEVELOPED PRIMARILY WITH CLAUDE CODE**

### Core Principles

1. **AI-First Development**: This project is designed to be developed primarily by Claude Code
   - Time estimates are for Claude Code, not humans
   - Human developers should only intervene for minor adjustments
   - Always prefer maintainable solutions (clear code, reusable components, consistent patterns)

2. **MOBILE-FIRST MANDATORY**: Always start with mobile, then adapt for desktop
   ```tsx
   // ✅ CORRECT - Mobile first (base), then desktop (md:)
   className="text-sm px-4 md:text-base md:px-6"

   // ❌ INCORRECT - Desktop first with max-md:
   className="text-base px-6 max-md:text-sm max-md:px-4"
   ```

3. **DRY Principle - Don't Repeat Yourself**:
   - If a pattern appears 2+ times → Create a reusable component
   - If Tailwind classes repeat 3+ times → Extract into a component
   - Always look to reuse existing components in `components/ui/`

---

## Project Overview

**Static website for Darshan**, a wellness and hydrotherapy center in Saint-Gingolph (Haute-Savoie).

Built with **Next.js 15** (Pages Router), **Tailwind CSS v4** (CSS-first with `@theme`), and uses **Sveltia CMS** for content management. Deployed on **Netlify** as a static site (SSG via `output: 'export'`).

**Live sites:**
- Production: https://centre-darshan.netlify.app
- Staging: https://staging--centre-darshan.netlify.app

---

## Tech Stack

- **Framework:** Next.js 15 (Pages Router) + TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first with `@theme` directive in `styles/tailwind.css`)
- **CMS:** Sveltia CMS (GitHub backend, configured in `public/admin/config.yml`)
- **Export:** Static site generation (`output: 'export'`)
- **Hosting:** Netlify with automatic deployments
- **React:** 19 - Functional components only
- **Testing:** Vitest + Testing Library
- **Component Development:** Ladle (Vite-based component documentation)

---

## Test-Driven Development (TDD) - MANDATORY

**⚠️ ALL new components MUST be developed using TDD**

### TDD Workflow

1. **Write test first** (Red) - Component doesn't exist yet
2. **Implement minimum code** (Green) - Make test pass
3. **Create Ladle story** - Visual validation
4. **Refactor** - Improve code quality
5. **Repeat** - Add more tests for edge cases

### Testing Stack

- **Vitest** - Fast test runner (Vite-based, 10-100x faster than Jest)
- **Testing Library** - Component testing utilities
- **Ladle** - Component documentation & visual testing

### Commands

```bash
# Run tests once
npm run test

# Watch mode (auto-run on file changes)
npm run test:watch

# Coverage report
npm run test:coverage

# Component documentation
npm run ladle
```

### TDD Example

```tsx
// 1. WRITE TEST FIRST (Red)
// components/services/PricingCard.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PricingCard from './PricingCard';

describe('PricingCard', () => {
  it('renders price and name', () => {
    render(<PricingCard name="Séance individuelle" price="120€" />);

    expect(screen.getByText('Séance individuelle')).toBeInTheDocument();
    expect(screen.getByText('120€')).toBeInTheDocument();
  });

  it('shows savings badge when provided', () => {
    render(
      <PricingCard
        name="3 séances"
        price="340€"
        savings="Économie de 20€"
      />
    );

    expect(screen.getByText('Économie de 20€')).toBeInTheDocument();
  });

  it('applies gold color to price', () => {
    render(<PricingCard name="Test" price="100€" />);

    const priceElement = screen.getByText('100€');
    expect(priceElement).toHaveClass('text-primary');
  });
});

// 2. IMPLEMENT COMPONENT (Green)
// components/services/PricingCard.tsx
interface PricingCardProps {
  name: string;
  price: string;
  savings?: string;
  duration?: string;
  className?: string;
}

export default function PricingCard({
  name,
  price,
  savings,
  duration,
  className
}: PricingCardProps) {
  return (
    <div className={cn(
      'rounded-lg border border-light-gray bg-white p-6 shadow-sm',
      'transition-shadow duration-300 hover:shadow-md',
      className
    )}>
      <h3 className="font-headings text-lg text-black">{name}</h3>
      {duration && (
        <p className="mt-1 text-sm text-dark-gray">{duration}</p>
      )}
      <p className="mt-4 text-3xl font-bold text-primary">{price}</p>
      {savings && (
        <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {savings}
        </span>
      )}
    </div>
  );
}

// 3. CREATE LADLE STORY (Visual validation)
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

export const MobileView: Story = () => (
  <PricingCard
    name="5 séances"
    price="550€"
    savings="Économie de 50€"
  />
);
MobileView.meta = {
  width: 'xsmall', // Test mobile layout
};
```

### Component Development Workflow

**Terminal setup:**
```bash
# Terminal 1: Next.js dev server (Turbopack)
npm run dev

# Terminal 2: Ladle component documentation
npm run ladle

# Terminal 3: Tests in watch mode
npm run test:watch
```

**Access:**
- **Next.js app**: http://localhost:3000
- **Ladle docs**: http://localhost:61000
- **Tests**: Auto-run in terminal

### Ladle Configuration

Ladle is configured in `.ladle/` directory:

- **`.ladle/config.mjs`** - Viewport presets, stories location
- **`.ladle/components.tsx`** - Global provider (Tailwind styles)
- **`.ladle/NextImage.tsx`** - Mock for `next/image`
- **`.ladle/NextLink.tsx`** - Mock for `next/link`

**Viewport presets for responsive testing:**
- `xsmall`: 414px (Mobile)
- `small`: 640px (sm:)
- `medium`: 768px (md:) - Default
- `large`: 1024px (lg:)
- `xlarge`: 1280px (xl:)

### Test Coverage Requirements

- **Components**: 80%+ coverage
- **Utilities**: 90%+ coverage
- **Pages**: Integration tests for critical paths

### What to Test

**✅ DO test:**
- Component rendering with different props
- Conditional rendering (with/without optional props)
- User interactions (clicks, form submissions)
- Accessibility (ARIA attributes, keyboard navigation)
- Responsive behavior (different breakpoints)
- Design system compliance (colors, spacing, typography)

**❌ DON'T test:**
- Next.js internals
- Tailwind class application details
- Third-party library internals
- Implementation details (internal state structure)

### TDD Best Practices

1. **Write failing test first** - Verify it actually fails
2. **Minimum code to pass** - Don't over-engineer
3. **Refactor with confidence** - Tests catch regressions
4. **One test = one assertion** - Keep tests focused
5. **Descriptive test names** - "it('shows savings badge when provided')"
6. **Test behavior, not implementation** - Focus on user perspective

### Before Committing

```bash
npm run validate  # Runs: type-check + lint + format + tests
```

**All tests must pass before commit.**

---

## Design System (CRITICAL)

**⚠️ ALWAYS consult `/docs/DESIGN_SYSTEM.md` BEFORE any styling changes**

### Strict Rules:

1. **BEFORE** any style/color/typography/layout modification:
   - Read `/docs/DESIGN_SYSTEM.md`
   - Verify the modification is compliant
   - If it requires design system changes, **ASK USER CONFIRMATION** first

2. **NEVER** modify `/docs/DESIGN_SYSTEM.md` without explicit user approval

3. **Systematic Validation** (see `/docs/DESIGN_SYSTEM.md`):
   - Color palette: Gold #C9A961 (primary), Night Blue #0A1E2E (secondary)
   - Typography: Medula One (logo), Libre Baskerville (headings), Outfit (body)
   - Spacing: 8px system (p-1, p-2, p-4, p-6, p-8, p-12, p-16, p-24)
   - Contrast: WCAG AA minimum (prefer AAA with 7:1+ ratio)
   - Responsive mobile-first: sm:640px, md:768px, lg:1024px
   - Touch targets: minimum 48px (min-h-[48px] min-w-[48px])

4. **If a need falls outside the design system**:
   - Alert the user
   - Propose compliant alternatives
   - Wait for confirmation before applying non-compliant solution

### Key Design Tokens (Tailwind CSS v4)

Located in `styles/tailwind.css`:

```css
@theme {
  /* Colors */
  --color-primary: #C9A961;        /* Gold - Brand identity */
  --color-primary-light: #D4B87A;
  --color-primary-dark: #B08F40;

  --color-secondary: #0A1E2E;      /* Dark blue */
  --color-secondary-light: #1A3A4F;
  --color-secondary-dark: #051119;

  /* Typography */
  --font-logo: 'Medula One', serif;
  --font-headings: 'Libre Baskerville', serif;
  --font-body: 'Outfit', sans-serif;

  /* Spacing (8px system) */
  --spacing-sm: 0.5rem;   /* 8px = p-2 */
  --spacing-md: 1rem;     /* 16px = p-4 */
  --spacing-lg: 1.5rem;   /* 24px = p-6 */
  --spacing-xl: 2rem;     /* 32px = p-8 */
}
```

### Color Usage Strategy (Gold First!)

**Hierarchy: 70% Gold + 20% Blue + 80% Warm Neutrals**

**Always use GOLD for:**
- ✅ Icons in cards (services, contact, features)
- ✅ Underlines for section titles (h1, h2)
- ✅ Primary CTAs (buttons, important links)
- ✅ Icon circles with background (`bg-primary/10`)
- ✅ Hover states on interactive elements
- ✅ Decorative accents (borders, separators)

**Use BLUE for:**
- Navigation/Header backgrounds (optional)
- Footer backgrounds (mandatory `bg-secondary`)
- Hero overlays (dark overlay `bg-secondary-dark/60`)
- Alternating dark sections (sparingly, max 1-2 per page)

**NEVER use BLUE for:**
- ❌ Card icons (always gold)
- ❌ Primary CTAs (always gold)
- ❌ Main title underlines (always gold)
- ❌ Dominant backgrounds (creates cold atmosphere)

See full strategy in `/docs/DESIGN_SYSTEM.md` section 1.5

---

## Code Best Practices (STRICT)

### 1. TypeScript (Strict Mode)

```typescript
// ❌ FORBIDDEN - any types
function handleClick(event: any) { }

// ✅ REQUIRED - Explicit types
function handleClick(event: React.MouseEvent<HTMLButtonElement>) { }

// ✅ REQUIRED - Type imports
import type { ButtonProps } from '@/types';

// ✅ REQUIRED - Interfaces for props
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}
```

**Strict rules:**
- ❌ `any` type FORBIDDEN (ESLint error)
- ✅ All parameters must have explicit types
- ✅ Use `import type` for type-only imports
- ✅ Always define interfaces for component props
- ✅ No unused variables (TypeScript error)

### 2. React Components (ESLint enforced)

```tsx
// ✅ REQUIRED - Function declarations for named components
export default function Button({ variant, children }: ButtonProps) {
  return <button>{children}</button>;
}

// ❌ FORBIDDEN - Arrow functions for named components
export const Button = ({ variant, children }: ButtonProps) => { }

// ✅ REQUIRED - Self-closing tags
<Container />

// ❌ FORBIDDEN - Empty tags
<Container></Container>

// ✅ REQUIRED - No unnecessary braces
<Button variant="primary">

// ❌ FORBIDDEN - Unnecessary braces
<Button variant={"primary"}>
```

### 3. Tailwind CSS with cn() Utility

```tsx
// ✅ REQUIRED - Tailwind classes with cn()
<div className={cn(
  'rounded-lg bg-white p-6 shadow-md',
  'transition-all duration-300',
  isActive && 'bg-primary text-white',
  className
)}>

// ❌ FORBIDDEN - Template literals for conditional classes
<div className={`base ${isActive ? 'active' : ''} ${className}`}>
```

**Strict rules:**
- ✅ ALWAYS use `cn()` for conditional classes
- ✅ Prettier auto-sorts Tailwind classes
- ✅ Use design tokens defined in `styles/tailwind.css`
- ✅ Follow design system classes (bg-primary, text-secondary, etc.)

### 4. Code Without Comments (Self-Documenting)

```tsx
// ❌ FORBIDDEN - Comments explaining "what"
// This function handles button click
function handleClick() { }

// ✅ REQUIRED - Clear naming, no comment needed
function handleButtonClick() { }

// ✅ ALLOWED - Comments explaining "why" or complex choices
// Using inline style because SVG fill="currentColor" requires color property
<img className="h-10" style={{ color: 'var(--color-primary)' }} />
```

**Strict rules:**
- ❌ No comments explaining what the code does (use clear naming)
- ✅ Comments allowed only for:
  - Explaining complex technical choices ("why")
  - Temporary workarounds with ticket/issue reference
  - Complex algorithms requiring explanation
- ✅ Code must be self-documented through naming

### 5. Console Logs

```typescript
// ⚠️ WARNING - Removed in production
console.log('Debug info');

// ✅ ALLOWED - Kept in production
console.error('Error message');
console.warn('Warning message');
```

---

## Component Architecture

### When to Extract a Component

1. **Pattern repeated 2+ times** → Extract immediately
2. **Complex logic (> 20 lines JSX)** → Decompose
3. **Same HTML structure with different content** → Component with props
4. **Tailwind classes repeated 3+ times** → Component with variants

### Folder Structure (CRITICAL)

**RULE: ALL components with sub-components MUST use folder/index.tsx structure**

```
components/
├── ui/                           # Generic reusable components
│   ├── Button.tsx                # Simple, no sub-components
│   ├── Card.tsx                  # Simple, no sub-components
│   ├── Container.tsx             # Simple, no sub-components
│   ├── Section.tsx               # Simple, no sub-components
│   ├── Heading/                  # Folder-based - Unified heading system
│   │   ├── index.tsx             # Main Heading component
│   │   └── HeadingWithIcon.tsx   # Variant with icon
│   └── PageHeader/               # Folder-based (extensible)
│       └── index.tsx
├── contact/                      # Page-specific components
│   └── ContactInfoCard/
│       └── index.tsx
├── Hero/                         # Folder-based with sub-components
│   ├── index.tsx                 # Main component
│   └── ServiceItem.tsx           # Sub-component
├── Header.tsx                    # Simple, no sub-components
├── Footer.tsx                    # Simple, no sub-components
└── Layout.tsx                    # Simple, no sub-components
```

**When to use folder structure:**
1. Component has sub-components → Use folder/index.tsx
2. Simple component → Single .tsx file
3. Component that might evolve → Use folder even if 1 file (easy to add sub-components later)

---

## Unified Heading System

**CRITICAL RULE: All headings (h1-h6) MUST use the `Heading` component with golden underline**

### Heading Component

```tsx
import Heading from '@/components/ui/Heading';

// Section title with golden underline (default)
<Heading level={2}>My Title</Heading>

// Left-aligned title
<Heading level={2} align="left">My Title</Heading>

// Title without underline
<Heading level={3} underline={false}>My Title</Heading>

// Page header (h1)
<Heading level={1}>Contact</Heading>
```

### HeadingWithIcon

```tsx
import HeadingWithIcon from '@/components/ui/Heading/HeadingWithIcon';

// Title with FontAwesome icon
<HeadingWithIcon icon="fas fa-phone" level={3}>
  Phone
</HeadingWithIcon>
```

### Levels and Styles

- `level={1}` → h1 - 48px (32px mobile) - Page headers only
- `level={2}` → h2 - 36px (28px mobile) - Main sections
- `level={3}` → h3 - 22px (20px mobile) - Subsections, cards
- `level={4}` → h4 - 18px - Small sections
- `level={5}` → h5 - 16px - Micro-sections
- `level={6}` → h6 - 14px - Labels

**Golden underline (default):**
- Height: 3px
- Width: 60px
- Color: primary (gold #C9A961)
- Top margin: 16px

### ❌ Anti-patterns

```tsx
// ❌ FORBIDDEN - Direct h1-h6 usage
<h2 className="...">My Title</h2>

// ✅ CORRECT
<Heading level={2}>My Title</Heading>

// ❌ FORBIDDEN - Manually recreating underline
<h2 className="after:block after:h-[3px] after:w-[60px] after:bg-primary">

// ✅ CORRECT
<Heading level={2}>My Title</Heading>
```

---

## Git Workflow

### Branching Strategy

This project uses **Git Flow with rebase** for linear history.

**Branches:**
- `main` → Production (always stable)
- `staging` → Staging/preprod (testing environment)
- `feature/*` → New features
- `fix/*` → Bug fixes

**See full documentation:** `/docs/BRANCHING_STRATEGY.md`

### Automated Git Aliases

Custom Git commands configured in `.git-aliases.sh`:

```bash
# Create feature branch from staging
git new-feature events-page

# Develop...
git add .
git commit -m "feat: Add events page"

# Rebase + merge into staging + cleanup
git finish

# Deploy staging to production
git deploy-prod
```

**Available aliases:**
- `git new-feature <name>` - Create feature branch
- `git new-fix <name>` - Create fix branch
- `git update-from-staging` - Rebase current branch on staging
- `git ship-to-staging` - Rebase + merge into staging
- `git deploy-prod` - Deploy staging to main
- `git finish` - Complete workflow (ship + cleanup)
- `git cleanup <branch>` - Delete branch (local + remote)
- `git tree` - Show history graph (20 commits, no pager)
- `git tree-all` - Show full history with pager
- `git st` - Short status

**See full guide:** `/docs/GIT_ALIASES.md`

---

## Sveltia CMS (Content Management)

### Configuration

- **CMS Admin:** `/admin` (requires Netlify OAuth + GitHub)
- **CMS Config:** `public/admin/config.yml`
- **Backend:** GitHub (NOT Git Gateway - unsupported for performance)
- **Authentication:** Netlify OAuth proxy
- **Content:** Events/Services stored in `content/events/*.md` and `content/services/*.md`

### Important CMS Details

**Backend configuration uses GitHub directly:**
```yaml
backend:
  name: github
  repo: labomeh/site-web-darshan
  branch: main
  base_url: https://centre-darshan.netlify.app
  auth_endpoint: /.netlify/functions/auth
```

**Why `base_url` points to production:**
- Netlify OAuth must point to one canonical URL
- Works across all deploys (staging, branches, production)
- This is by design - not an error

**Local development:**
```yaml
local_backend: true  # Enables local testing without GitHub
```

See `/docs/CMS.md` for full configuration details.

---

## Deployment (Netlify)

### Build Configuration

```toml
[build]
command = "npm run build"
publish = "out"
```

### Environments

- **Production:** `main` branch → https://centre-darshan.netlify.app
- **Staging:** `staging` branch → https://staging--centre-darshan.netlify.app (with `X-Robots-Tag: noindex`)

### SEO Configuration

Only production is indexed:

```toml
# All non-production deploys have noindex
[context.branch-deploy.headers]
  for = "/*"
  [context.branch-deploy.headers.values]
    X-Robots-Tag = "noindex, nofollow"
```

**See deployment checklist:** `/docs/DEPLOIEMENT.md` (if exists)

---

## NPM Scripts (Automation)

Before each commit, RECOMMEND to user:
```bash
npm run validate  # Type-check + ESLint + Prettier
```

**Available scripts:**
- `npm run lint` - Check ESLint errors
- `npm run lint:fix` - Auto-fix ESLint errors
- `npm run format` - Format with Prettier
- `npm run type-check` - Check TypeScript types
- `npm run validate` - Check everything in one command

---

## Web Design Best Practices

### 1. Visual Hierarchy
- Titles h1 (1 per page, SEO), h2, h3 with decreasing sizes
- Consistent spacing to guide the eye
- Sufficient contrast between text and background

### 2. Spacing and Breathing Room
- Never overload the screen
- Generous margins around important sections
- Consistent vertical spacing (8px system)

### 3. Images and Media
- Always with descriptive alt attribute (SEO + accessibility)
- Lazy loading for below-the-fold images
- Explicit aspect ratios to avoid layout shifts

### 4. Interaction and Feedback
- Hover, focus, active states for all clickable elements
- Smooth transitions (duration-300)
- 48px minimum touch targets on mobile

---

## SEO Best Practices

### Semantic HTML

```tsx
// ✅ REQUIRED
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>

// ❌ FORBIDDEN (except special cases)
<div> for main structure
```

### Heading Hierarchy

- 1 single `<h1>` per page (main title)
- `<h2>` for main sections
- `<h3>` to `<h6>` for subsections
- Never skip levels (h1 → h3 ❌)

### Images and Media

```tsx
// ✅ REQUIRED - Descriptive alt
<img src="..." alt="Precise description for SEO and accessibility" />

// ✅ REQUIRED - Lazy loading for below-the-fold images
<img src="..." alt="..." loading="lazy" />

// ✅ GOOD - Explicit dimensions to avoid layout shift
<img src="..." alt="..." width={800} height={600} />
```

---

## Accessibility (WCAG AA)

### Contrast

- **Normal text**: Minimum 4.5:1 ratio
- **Large text (>18px or >14px bold)**: Minimum 3:1 ratio
- **UI elements**: Minimum 3:1 ratio

### Validated Combinations (WCAG AA minimum)

**WCAG AAA compliant (contrast > 7:1):**
✅ `--black` (#2C2C2C) on `--off-white`: 14.8:1 - All titles
✅ `--secondary` (#0A1E2E) on `--off-white`: >15:1 - Text on light background
✅ `--primary` (#C9A961) on `--secondary`: 8.5:1 - Logo/buttons

**⚠️ Non-compliant (avoid):**
❌ `--primary` (#C9A961) on `--white`: 3.8:1 - Don't use for normal text
✅ Acceptable only for large text (>18px) or decorations

### Accessibility Rules

- **Minimum font size**: 15px on mobile, 16px on desktop
- **Minimum touch targets**: 44x44px (iOS), 48x48px (Android)
- **Visible focus**: 2px `--primary` outline on all interactive elements
- **Alt text**: All decorative images alt="" and content images with description
- **Keyboard navigation**: All interactive elements keyboard-accessible
- **Hierarchical headings**: No level skipping (H1 > H2 > H3...)
- **Gold colors**: NEVER on white/light background for text, only on dark blue or as decoration
- **Titles**: Always in black (#2C2C2C) on light background for maximum contrast

---

## Documentation Strategy

**RULE: Minimize documentation, favor self-documenting code**

### ✅ Create Permanent Documentation For:
- Design systems and guidelines (`DESIGN_SYSTEM.md`)
- Development workflows (`BRANCHING_STRATEGY.md`, `GIT_ALIASES.md`)
- Configuration (`CONFIGURATION.md`, `CMS.md`)

### ❌ Do NOT Create Docs For:
- Simple refactorings → Commit message is enough
- Design explorations → Discuss with user, then delete
- Temporary decisions → Inline code comments
- Work logs → Git history is enough
- Code audits → Delete after completion

### Simplified Workflow:
1. **Create** → Only if necessary for permanent reference
2. **Consolidate** → Integrate useful info into existing docs
3. **Delete** → Remove when obsolete (no archive)

**Location:**
- `/docs` → Permanent documentation only
- `/docs/README.md` → Up-to-date index

**No archive folder** - Delete temporary docs directly after use.

---

## Documentation Reference

| File | Purpose |
|------|---------|
| `README.md` | Project overview and quick start |
| `CLAUDE.md` | This file - Instructions for Claude Code |
| `/docs/DESIGN_SYSTEM.md` | **CRITICAL** - Design tokens, colors, typography, components, color strategy |
| `/docs/CONFIGURATION.md` | TypeScript, ESLint, Prettier, tools configuration |
| `/docs/BRANCHING_STRATEGY.md` | Git workflow with rebase (detailed guide) |
| `/docs/GIT_ALIASES.md` | Automated Git aliases documentation |
| `/docs/CMS.md` | Sveltia CMS configuration and usage |
| `/docs/README.md` | Documentation index |

---

## Checklist Before Any Modification

Before writing code, verify:

- [ ] **TDD**: Write test first, then implement?
- [ ] **Design System**: Compliant with `/docs/DESIGN_SYSTEM.md`?
- [ ] **TypeScript**: Explicit types, no `any`?
- [ ] **Imports**: Use `import type` for types?
- [ ] **React**: Function declarations, self-closing tags?
- [ ] **Tailwind**: Use `cn()` for conditional classes?
- [ ] **Naming**: Clear naming, no need for comments?
- [ ] **Console**: No `console.log`?
- [ ] **Components**: Reuse `components/ui/` if exists?
- [ ] **DRY**: Pattern repeated 2+ times? → Extract to component
- [ ] **Folder Structure**: Component with sub-components? → Use folder/index.tsx
- [ ] **Mobile-First**: Tailwind classes mobile first, then md:?
- [ ] **Headings**: Use `<Heading>` component, not raw h1-h6?
- [ ] **Color Strategy**: Gold for icons/CTAs/underlines, blue for structure only?
- [ ] **Ladle Story**: Created story for visual validation?
- [ ] **Tests Pass**: `npm run validate` passes before commit?

---

## Tone and Approach

- Wellness site: soft, calming, professional design
- Maximize space usage (no unnecessary voids)
- Images always accompanied by text
- Performance and SEO priorities (static export)
- Clean, maintainable code, no technical debt
- **Mobile-first**: always start with mobile design

---

## Common Tasks

### Adding a New Page

```tsx
// pages/new-page.tsx
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';

export default function NewPage() {
  return (
    <main>
      <Section>
        <Container>
          <Heading level={1}>New Page</Heading>
          <p className="text-dark-gray">Content here</p>
        </Container>
      </Section>
    </main>
  );
}
```

### Adding a New Component

```tsx
// components/ui/NewComponent.tsx
import { cn } from '@/lib/utils';

interface NewComponentProps {
  title: string;
  className?: string;
}

export default function NewComponent({ title, className }: NewComponentProps) {
  return (
    <div className={cn('rounded-lg bg-white p-6 shadow-md', className)}>
      <h3 className="font-headings text-black">{title}</h3>
    </div>
  );
}
```

### Creating a Feature Branch

```bash
git new-feature my-feature
# Develop...
git add .
git commit -m "feat: Add my feature"
git finish  # Merges to staging
```

---

## Migration History

**October 2025:** Migrated from vanilla HTML/CSS to Next.js 15 + Tailwind CSS v4

- Converted from vanilla to React components
- Replaced CSS Modules with Tailwind CSS v4
- Preserved design system with `@theme` directive
- Configured static export for Netlify
- Set up Git Flow with rebase workflow
- Implemented Sveltia CMS with GitHub backend

---

## Support

For questions or issues:
- Check documentation in `/docs`
- **Review design system before styling changes** (`/docs/DESIGN_SYSTEM.md`)
- Use Git aliases for workflow automation
- Test in staging before deploying to production

---

**Last updated:** January 2025
**Next.js version:** 15.x
**Tailwind CSS version:** 4.x
**Node version:** 18+
