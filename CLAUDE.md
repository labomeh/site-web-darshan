# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Marie-Pierre Garnier, a hydrotherapist in Saint-Gingolph (Haute-Savoie). Built with vanilla HTML/CSS/JavaScript and uses Decap CMS for content management (events). Hosted on Netlify.

**Live site:** https://marie-pierre-garnier-hydrotherapie.netlify.app

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

Events are dynamically loaded from GitHub via the GitHub API (`js/events.js:5`):

1. **Fetching:** Loads all `.md` files from `_events/` folder via GitHub API
2. **Parsing:** Extracts YAML frontmatter (title, date, location, etc.) and markdown body
3. **Filtering:** Shows only upcoming events (date >= now)
4. **Rendering:** Displays sorted events on `evenements.html`

**Key fields:**
- `title`, `date`, `location`, `body` (markdown), `image`, `available_spots`, `contact_info`

**Important:** Events are fetched from the public GitHub repo, so changes must be committed and pushed to appear on the site.

### JavaScript Structure

- **`js/main.js`** - Core site functionality: mobile menu toggle, scroll-based fade-in animations using IntersectionObserver
- **`js/events.js`** - Events loading, parsing frontmatter, markdown-to-HTML conversion, date formatting

### Deployment

- **Host:** Netlify
- **Publish directory:** `.` (root)
- **Branch:** `main`
- **Headers:** Security headers and cache control configured in `netlify.toml`

## Important Notes

- This is a static site - no build process or package.json
- The GitHub repo reference in `js/events.js:5` is hardcoded: `labomeh/site-pro-marie-pierre-garnier`
- CMS authentication uses Netlify Identity widget
- All HTML pages include Netlify Identity script for CMS access
- Site uses `noindex, nofollow` robots meta tag (see `index.html:6`)
