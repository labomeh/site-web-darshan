# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**Static website for Darshan**, a wellness and hydrotherapy center in Saint-Gingolph (Haute-Savoie).

Built with **Next.js 15** (Pages Router), TypeScript, CSS Modules, and uses **Decap CMS** for content management. Deployed on **Netlify** as a static site (SSG via `output: 'export'`).

**Live sites:**
- Production: https://centre-darshan.netlify.app
- Staging: https://staging--centre-darshan.netlify.app

---

## Architecture

### Tech Stack

- **Framework:** Next.js 15 (Pages Router) with TypeScript
- **Styling:** CSS Modules + CSS Variables (design tokens in `styles/tokens.css`)
- **CMS:** Decap CMS (configured in `public/admin/config.yml`)
- **Export:** Static site generation (`output: 'export'` in `next.config.ts`)
- **Hosting:** Netlify with automatic deployments

### Project Structure

```
site-web-darshan/
├── pages/              # Next.js pages
│   ├── index.tsx       # Homepage
│   ├── contact.tsx     # Contact page
│   ├── mentions-legales.tsx
│   └── _app.tsx        # App wrapper
├── components/         # React components
│   ├── Header.tsx      # Navigation with mobile menu
│   ├── Footer.tsx      # Footer with links
│   ├── Hero.tsx        # Hero section with video
│   └── ui/             # Generic UI components
│       ├── Card.tsx
│       ├── Container.tsx
│       └── Section.tsx
├── styles/             # Global styles
│   ├── tokens.css      # Design tokens (colors, typography, spacing)
│   └── global.css      # Base styles and resets
├── public/             # Static assets
│   ├── images/
│   ├── videos/
│   └── admin/          # Decap CMS admin interface
│       ├── index.html
│       └── config.yml  # CMS configuration
├── docs/               # Project documentation
│   ├── DESIGN_SYSTEM.md
│   ├── BRANCHING_STRATEGY.md
│   ├── GIT_ALIASES.md
│   ├── DEPLOIEMENT.md
│   └── MIGRATION_NEXTJS_ARCHIVE.md
├── .git-aliases.sh     # Automated Git workflow aliases
└── netlify.toml        # Netlify deployment config
```

---

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

### Design System (CRITICAL)

**This project follows a strict design system defined in `/docs/DESIGN_SYSTEM.md`.**

#### Rules:
- ✅ **ALWAYS** consult `/docs/DESIGN_SYSTEM.md` before any styling changes
- ❌ **NEVER** modify colors, typography, or spacing without explicit approval
- 🎨 **All styles** use CSS Variables from `styles/tokens.css`
- 📋 **Use CSS Modules** for component-specific styles (e.g., `Header.module.css`)

#### Design Tokens Location:
- **Global tokens:** `styles/tokens.css` (`:root` CSS Variables)
- **Component styles:** `components/**/*.module.css` (import tokens via `var(--token-name)`)

#### Key Design Tokens:
```css
/* Colors */
--primary: #C9A961;        /* Gold - Brand identity */
--secondary: #0A1E2E;      /* Dark blue */
--accent: #E8F4F8;         /* Light blue */

/* Typography */
--font-logo: 'Medula One', serif;
--font-headings: 'Libre Baskerville', serif;
--font-body: 'Outfit', sans-serif;

/* Spacing (8px system) */
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
```

---

## Git Workflow

### Branching Strategy

This project uses **Git Flow with rebase** for a linear history.

**Branches:**
- `main` → Production (always stable)
- `staging` → Staging/preprod (testing environment)
- `feature/*` → New features
- `fix/*` → Bug fixes

**See full documentation:** `/docs/BRANCHING_STRATEGY.md`

### Automated Git Aliases

Custom Git commands are configured in `.git-aliases.sh` to simplify workflow:

```bash
# Create new feature branch from staging
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

## Deployment

### Netlify Configuration

**Build settings:**
```toml
[build]
command = "npm run build"
publish = "out"
```

**Environments:**
- **Production:** `main` branch → https://centre-darshan.netlify.app
- **Staging:** `staging` branch → https://staging--centre-darshan.netlify.app (with `X-Robots-Tag: noindex`)

**See deployment checklist:** `/docs/DEPLOIEMENT.md`

---

## Decap CMS (Content Management)

### Configuration

- **CMS Admin:** `/admin` (requires Netlify Identity authentication)
- **CMS Config:** `public/admin/config.yml`
- **Backend:** Git Gateway (commits to `main` branch)
- **Content:** Events stored in `_events/*.md` (markdown with YAML frontmatter)

### CMS Status

**Currently:** Configured but not activated (to be enabled after first deployment)

**To activate:**
1. Enable Netlify Identity on deployed site
2. Configure Git Gateway in Netlify
3. Invite admin users
4. Access `/admin` on deployed site

---

## Pages

### Current Pages (v1.0)

- ✅ **Homepage** (`/`) - Hero with video, presentation
- ✅ **Contact** (`/contact`) - Contact form and info
- ✅ **Legal Mentions** (`/mentions-legales`)
- ✅ **404** - Custom error page

### Future Pages

- 🔜 **Events** (`/evenements`) - Dynamic events list via CMS
- 🔜 **Services** (`/services`) - Service details

---

## Important Notes

### CSS Architecture

- **No Tailwind CSS** - Project uses CSS Modules + CSS Variables
- **Design tokens first** - Always use variables from `styles/tokens.css`
- **Component-scoped styles** - Each component has its own `.module.css` file
- **Global styles** - Only in `styles/global.css` (resets, utilities)

### TypeScript

- **Strict mode enabled** - All components must be typed
- **ESLint configured** - Run `npm run lint` before committing
- **Relaxed rules:**
  - `react/no-unescaped-entities: off` (apostrophes in JSX allowed)
  - `@next/next/no-img-element: warn` (next/image warnings only)

### Static Export

- **No server-side features** - Site is fully static
- **No API routes** - Use external APIs or Netlify Functions if needed
- **No ISR/SSR** - Only Static Site Generation (SSG)

### Netlify Features

- **Headers configured** - Security headers + cache control in `netlify.toml`
- **Branch deploys** - `staging` branch auto-deploys to preprod
- **Deploy previews** - Can be enabled for pull requests

---

## Documentation Reference

| File | Purpose |
|------|---------|
| `README.md` | Project overview and quick start |
| `CLAUDE.md` | This file - Instructions for Claude Code |
| `/docs/DESIGN_SYSTEM.md` | Design tokens, colors, typography, components |
| `/docs/BRANCHING_STRATEGY.md` | Git workflow with rebase (detailed guide) |
| `/docs/GIT_ALIASES.md` | Automated Git aliases documentation |
| `/docs/DEPLOIEMENT.md` | Deployment checklist and testing |
| `/docs/MIGRATION_NEXTJS_ARCHIVE.md` | Historical migration documentation (reference only) |

---

## Common Tasks

### Adding a new page

```tsx
// pages/new-page.tsx
import Container from '@/components/ui/Container';
import styles from './new-page.module.css';

export default function NewPage() {
  return (
    <Container>
      <h1 className={styles.title}>New Page</h1>
      <p>Content here</p>
    </Container>
  );
}
```

```css
/* pages/new-page.module.css */
.title {
  color: var(--primary);
  font-family: var(--font-headings);
  font-size: var(--text-4xl);
  margin-bottom: var(--space-lg);
}
```

### Adding a new component

```tsx
// components/NewComponent.tsx
import styles from './NewComponent.module.css';

interface NewComponentProps {
  title: string;
}

export default function NewComponent({ title }: NewComponentProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
```

```css
/* components/NewComponent.module.css */
.wrapper {
  padding: var(--space-lg);
  background: var(--accent);
}

.title {
  color: var(--secondary);
  font-family: var(--font-headings);
}
```

### Creating a feature branch

```bash
git new-feature my-feature
# Develop...
git add .
git commit -m "feat: Add my feature"
git finish  # Merges to staging
```

---

## Migration History

**October 2025:** Migrated from vanilla HTML/CSS to Next.js 15

- Converted from vanilla to React components
- Replaced global CSS with CSS Modules
- Preserved design system with CSS Variables
- Configured static export for Netlify
- Set up Git Flow with rebase workflow

**See archive:** `/docs/MIGRATION_NEXTJS_ARCHIVE.md`

---

## Support

For questions or issues:
- Check documentation in `/docs`
- Review design system before styling changes
- Use Git aliases for workflow automation
- Test in staging before deploying to production

---

**Last updated:** October 2025
**Next.js version:** 15.x
**Node version:** 18+
