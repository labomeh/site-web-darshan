# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for Darshan, a wellness and hydrotherapy center in Saint-Gingolph (Haute-Savoie). Built with **Next.js 15** and uses Decap CMS for content management (events). Hosted on Netlify.

**Live site:** https://centre-darshan.netlify.app

## Project Structure

```
site-web-darshan/              # Next.js project (root)
├── components/                # React components
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Layout.tsx
│   ├── EventCard.tsx
│   └── ServiceCard.tsx
├── pages/                    # Next.js pages (3 pages)
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx            # Home page
│   ├── contact.tsx          # Contact page
│   ├── mentions-legales.tsx # Legal mentions
│   └── 404.tsx              # 404 error page
├── public/                   # Static assets
│   ├── admin/               # Decap CMS (for future use)
│   │   ├── config.yml
│   │   └── index.html
│   ├── images/
│   └── videos/
├── styles/                   # Global styles
│   ├── global.css           # Global styles and base reset
│   └── tokens.css           # Design system variables
├── lib/                      # Utility functions
├── types/                    # TypeScript types
├── _events/                  # Events markdown files (for CMS - future use)
├── CLAUDE.md                 # This file
├── DEPLOIEMENT.md            # Deployment checklist
├── DESIGN_SYSTEM.md          # Design system documentation
├── MIGRATION_NEXTJS.md       # Migration notes
├── netlify.toml              # Netlify configuration
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── next.config.ts            # Next.js config
├── README.md                 # Project README
├── robots.txt                # SEO configuration
└── sitemap.xml               # Site map
```

**Current state:** Next.js project at root level with 3 functional pages (Home, Contact, Legal Mentions). Events and Services pages will be added later.

## Development

### Prerequisites

- Node.js 18+ and npm

### Local Development

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:3000`

### Build & Export

```bash
npm run build   # Build production version and export to out/
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Technology Stack

- **Framework:** Next.js 15 (React 19)
- **Styling:** CSS Modules + CSS Variables (design tokens)
- **TypeScript:** Full type safety
- **CMS:** Decap CMS (formerly Netlify CMS)
- **Deployment:** Netlify (static export)

### Content Management System (Future)

The site has **Decap CMS** configured but not yet activated:

- **CMS Admin:** `/admin` (will be accessible at `https://yoursite.com/admin`)
- **CMS Config:** `public/admin/config.yml`
- **Backend:** Git Gateway (Netlify) - will commit directly to `main` branch
- **Event Files:** `_events/*.md` - Markdown files with YAML frontmatter

**Status:** CMS infrastructure is in place but events functionality will be implemented later.

**Note:** Netlify Identity widget is configured in `_document.tsx` and ready for activation when needed.

### CSS Architecture

The project uses **CSS Modules** for component-scoped styling and **CSS Variables** for the design system:

#### Design System Files

- **`styles/tokens.css`** - Design system variables:
  - Color palette (primary, secondary, accent, neutrals)
  - Typography tokens (font families, sizes, weights)
  - Spacing system (based on 8px)
  - Border radius, shadows, transitions
  - Responsive breakpoints
  - Accessibility constants

- **`styles/global.css`** - Global styles:
  - Base resets and typography
  - Utility classes (`.container`, `.page-header`, etc.)
  - Section styles
  - Responsive media queries

#### Component Styles

Each component has its own CSS Module file:
- `components/Footer.module.css`
- `components/Header.module.css`
- `components/Hero.module.css`
- `components/ui/Card.module.css`
- `components/ui/Container.module.css`
- `components/ui/Section.module.css`
- `pages/contact.module.css`

**Usage example:**
```tsx
import styles from './Header.module.css';

export default function Header() {
  return <header className={styles.navbar}>...</header>;
}
```

All styles reference variables from `tokens.css` to ensure consistency with the design system defined in `DESIGN_SYSTEM.md`.

### TypeScript Types

All types are defined in `darshan-nextjs/types/index.ts`:
- `LayoutProps`, `HeaderProps`, `FooterProps`
- `HeroProps`, `CardProps`, `ButtonProps`
- `Event`, `Service`

### Deployment

- **Host:** Netlify
- **Publish directory:** `darshan-nextjs/out` (static export)
- **Build command:** `cd darshan-nextjs && npm run build`
- **Branch:** `main`
- **Headers:** Security headers and cache control configured in `netlify.toml`

**Note:** Update `netlify.toml` to point to `darshan-nextjs/out` as the publish directory.

## Important Notes

- This is a **static Next.js site** using `output: 'export'`
- The project uses **CSS Modules** instead of Tailwind CSS
- CMS authentication uses **Netlify Identity widget** (loaded via script in `_document.tsx`)
- All images and videos are in `darshan-nextjs/public/`
- ESLint is configured to allow certain patterns (apostrophes, `<img>` tags, sync scripts)
- The design system is documented in `DESIGN_SYSTEM.md`

## Migration Notes

The project was migrated from vanilla HTML/CSS to Next.js. See `MIGRATION_NEXTJS.md` for detailed migration notes and architecture decisions.
