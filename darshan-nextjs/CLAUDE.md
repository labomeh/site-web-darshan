# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Darshan, a wellness and hydrotherapy center in Saint-Gingolph (Haute-Savoie). Built with vanilla HTML/CSS/JavaScript and uses Decap CMS for content management (events). Hosted on Netlify.

**Live site:** https://centre-darshan.netlify.app

## Development

### Local Development

Run the development environment:
```bash
./dev.sh
```

This script:
- Verifies `local_backend: true` is set in `admin/config.yml`
- Starts Decap CMS proxy server for local content editing
- Launches live-server on port 8000

**Note:** `local_backend: true` must be added to `admin/config.yml` for local development, but should NOT be committed to production.

### Manual Development (without CMS)

```bash
npx live-server --port=8000
```

## Architecture

### Content Management System

The site uses **Decap CMS** (formerly Netlify CMS) for managing events:

- **CMS Admin:** `/admin/index.html` - Netlify Identity authentication required
- **CMS Config:** `/admin/config.yml` - Defines content collections and schema
- **Backend:** Git Gateway (Netlify) - commits directly to `main` branch
- **Event Files:** `/_events/*.md` - Markdown files with YAML frontmatter

### Events System

Events are dynamically loaded from GitHub via the GitHub API (`js/events.js:4`):

1. **Fetching:** Loads all `.md` files from `_events/` folder via GitHub API
2. **Parsing:** Extracts YAML frontmatter (title, date, location, etc.) and markdown body
3. **Filtering:** Shows only upcoming events (date >= now)
4. **Rendering:** Displays sorted events on `evenements.html`

**Key fields:**
- `title`, `date`, `location`, `body` (markdown), `image`, `available_spots`, `contact_info`

**Important:** Events are fetched from the public GitHub repo, so changes must be committed and pushed to appear on the site.

### CSS Architecture

The styles are split into two files for better maintainability:

- **`css/design-tokens.css`** - Design system variables (326 lines):
  - Color palette (primary, secondary, accent, neutrals)
  - Typography tokens (font families, sizes, weights)
  - Spacing system (based on 8px)
  - Border radius, shadows, transitions
  - Responsive breakpoints
  - Accessibility constants
  - Utility classes
- **`css/style.css`** - Component styles and layout:
  - Base styles and resets
  - Component-specific CSS (header, footer, cards, buttons, etc.)
  - Page-specific styles
  - Responsive media queries

All styles reference variables from `design-tokens.css` to ensure consistency with the design system defined in `DESIGN_SYSTEM.md`.

### JavaScript Structure

- **`js/main.js`** - Core site functionality:
  - Mobile menu toggle (`menuToggle`)
  - Scroll-based fade-in animations using IntersectionObserver
  - Services navigation with active state tracking (page services)
  - Smooth scroll to service sections with scroll position detection
- **`js/events.js`** - Events loading, parsing frontmatter, markdown-to-HTML conversion, date formatting

### Deployment

- **Host:** Netlify
- **Publish directory:** `.` (root)
- **Branch:** `main`
- **Headers:** Security headers and cache control configured in `netlify.toml`

## Important Notes

- This is a static site - no build process or package.json
- The GitHub repo reference in `js/events.js:2` is hardcoded: `labomeh/site-web-darshan`
- CMS authentication uses Netlify Identity widget
- All HTML pages include Netlify Identity script for CMS access
- Site uses `noindex, nofollow` robots meta tag (see `index.html:6`)
