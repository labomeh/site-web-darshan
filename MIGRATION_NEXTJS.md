# Migration vers Next.js - Plan d'exécution

## Vue d'ensemble

Migration du site Darshan actuel (HTML/CSS/JS vanilla) vers **Next.js 15 + TypeScript + Tailwind CSS** en mode génération statique (SSG).

**Stack technique finale :**
- ✅ Next.js 15 (Pages Router)
- ✅ TypeScript
- ✅ Tailwind CSS (avec design tokens personnalisés)
- ✅ Decap CMS (inchangé)
- ✅ Netlify (déploiement)

---

## Étapes de migration

### Phase 1 : Setup initial Next.js

#### 1.1 Créer le projet Next.js (VOUS)

```bash
# Créer un nouveau projet Next.js dans un sous-dossier
npx create-next-app@latest darshan-nextjs

# Options à sélectionner :
# ✅ TypeScript? → Yes
# ✅ ESLint? → Yes
# ✅ Tailwind CSS? → Yes
# ✅ `src/` directory? → No
# ✅ App Router? → No (utiliser Pages Router)
# ✅ Import alias (@/*)? → Yes (@/*)
```

#### 1.2 Installer les dépendances supplémentaires (VOUS)

```bash
cd darshan-nextjs

# Parser les fichiers markdown des événements
npm install gray-matter

# Convertir markdown en HTML
npm install marked

# Types pour marked
npm install -D @types/marked
```

#### 1.3 Configurer Next.js pour export statique (CLAUDE CODE)

**Fichier à créer/modifier :**
- `darshan-nextjs/next.config.ts` → Configuration export statique

---

### Phase 2 : Configuration Tailwind avec Design Tokens

#### 2.1 Convertir design-tokens.css en Tailwind config (CLAUDE CODE)

**Fichiers à créer/modifier :**
- `darshan-nextjs/tailwind.config.ts` → Configuration complète basée sur DESIGN_SYSTEM.md
- `darshan-nextjs/styles/globals.css` → Import Tailwind + styles globaux
- `darshan-nextjs/styles/fonts.css` → Imports des fonts (Medula One, Libre Baskerville, Outfit)

**Mapping des tokens :**
```typescript
// Exemple de configuration Tailwind
{
  colors: {
    primary: { DEFAULT: '#C9A961', light: '#D4B87A', dark: '#B08F40' },
    secondary: { DEFAULT: '#0A1E2E', light: '#1A3A4F', dark: '#051119' },
    // ... tous les tokens convertis
  },
  fontFamily: {
    logo: ['Medula One', 'serif'],
    headings: ['Libre Baskerville', 'serif'],
    body: ['Outfit', 'sans-serif'],
  },
  spacing: {
    xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px',
    '2xl': '48px', '3xl': '64px', '4xl': '96px',
  },
  // ... toute la configuration
}
```

---

### Phase 3 : Copie des assets

#### 3.1 Copier les fichiers statiques (VOUS)

```bash
# Depuis le répertoire racine du projet actuel
cp -r images darshan-nextjs/public/images
cp -r videos darshan-nextjs/public/videos
cp -r admin darshan-nextjs/public/admin
cp -r _events darshan-nextjs/_events
cp DESIGN_SYSTEM.md darshan-nextjs/
cp CLAUDE.md darshan-nextjs/
```

**Si vous êtes sur Windows (PowerShell) :**
```powershell
Copy-Item -Recurse images darshan-nextjs/public/images
Copy-Item -Recurse videos darshan-nextjs/public/videos
Copy-Item -Recurse admin darshan-nextjs/public/admin
Copy-Item -Recurse _events darshan-nextjs/_events
Copy-Item DESIGN_SYSTEM.md darshan-nextjs/
Copy-Item CLAUDE.md darshan-nextjs/
```

---

### Phase 4 : Composants de base

#### 4.1 Créer le système de composants (CLAUDE CODE)

**Composants à créer :**

1. **Layout et navigation :**
   - `components/Layout.tsx` → Layout principal avec Header/Footer
   - `components/Header.tsx` → Header avec navigation (fond bleu nuit, logo or)
   - `components/Footer.tsx` → Footer
   - `components/MobileMenu.tsx` → Menu mobile hamburger

2. **Composants UI du Design System :**
   - `components/ui/Button.tsx` → Boutons (primary/secondary)
   - `components/ui/Section.tsx` → Section wrapper
   - `components/ui/Container.tsx` → Container avec max-width 1200px
   - `components/ui/Card.tsx` → Carte générique

3. **Composants métier :**
   - `components/EventCard.tsx` → Carte d'événement
   - `components/ServiceCard.tsx` → Carte de service
   - `components/Hero.tsx` → Section hero avec vidéo

#### 4.2 Créer les types TypeScript (CLAUDE CODE)

**Fichier à créer :**
- `types/index.ts` → Types pour Event, Service, etc.

```typescript
export interface Event {
  id: string
  title: string
  date: string
  location?: string
  body: string
  bodyHtml: string
  image?: string
  available_spots?: number
  contact_info?: string
}

export interface NavItem {
  href: string
  label: string
}

// ... autres types
```

---

### Phase 5 : Utilitaires et helpers

#### 5.1 Créer les helpers pour événements (CLAUDE CODE)

**Fichier à créer :**
- `lib/events.ts` → Fonctions pour lire et parser les événements markdown

```typescript
// Fonction qui lit les .md de _events/, parse YAML frontmatter, convertit markdown en HTML
export function getAllEvents(): Event[]
export function getUpcomingEvents(): Event[]
export function formatEventDate(dateString: string): string
```

#### 5.2 Créer les helpers utilitaires (CLAUDE CODE)

**Fichier à créer :**
- `lib/utils.ts` → Fonctions utilitaires (classNames helper, etc.)

---

### Phase 6 : Migration des pages

#### 6.1 Créer toutes les pages Next.js (CLAUDE CODE)

**Pages à créer avec leur contenu complet :**

1. **`pages/_app.tsx`** → App wrapper avec fonts et styles globaux
2. **`pages/_document.tsx`** → Document HTML avec scripts Netlify Identity
3. **`pages/index.tsx`** → Page d'accueil (hero vidéo, intro, aperçu services)
4. **`pages/services.tsx`** → Page services
5. **`pages/evenements.tsx`** → Page événements avec `getStaticProps` (lecture des .md)
6. **`pages/contact.tsx`** → Page contact
7. **`pages/mentions-legales.tsx`** → Mentions légales
8. **`pages/404.tsx`** → Page 404

**Pour la page événements :**
```typescript
// pages/evenements.tsx
export async function getStaticProps() {
  const events = getAllEvents() // Lit les fichiers _events/*.md au build
  return { props: { events } }
}
```

#### 6.2 Reproduire le contenu exact (CLAUDE CODE)

**Référence :**
- `index.html` → `pages/index.tsx`
- `services.html` → `pages/services.tsx`
- `evenements.html` → `pages/evenements.tsx`
- `contact.html` → `pages/contact.tsx`
- `mentions-legales.html` → `pages/mentions-legales.tsx`

---

### Phase 7 : Interactivité et animations

#### 7.1 Migrer les scripts JavaScript (CLAUDE CODE)

**Fonctionnalités à recréer :**

1. **Menu mobile** (de `js/main.js:menuToggle`)
   - Hook custom : `hooks/useMenuToggle.ts`
   - État React pour ouvrir/fermer le menu

2. **Animations au scroll** (de `js/main.js:IntersectionObserver`)
   - Hook custom : `hooks/useScrollAnimation.ts`
   - Fade-in automatique des sections

3. **Navigation services** (de `js/main.js:servicesNav`)
   - Dans `pages/services.tsx`
   - Détection de scroll pour active state

#### 7.2 Créer les hooks personnalisés (CLAUDE CODE)

**Hooks à créer :**
- `hooks/useMenuToggle.ts`
- `hooks/useScrollAnimation.ts`
- `hooks/useScrollSpy.ts` (pour navigation services)

---

### Phase 8 : Configuration déploiement

#### 8.1 Configurer Netlify (CLAUDE CODE)

**Fichiers à créer/modifier :**

1. **`netlify.toml`** (à la racine de darshan-nextjs)
```toml
[build]
  command = "npm run build"
  publish = "out"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

2. **`.gitignore`**
```gitignore
# Dependencies
node_modules/

# Next.js
.next/
out/
.swc/

# Environment
.env*.local

# OS
.DS_Store
```

3. **`package.json` scripts** (vérifier que c'est bon)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

### Phase 9 : Tests et validation

#### 9.1 Tester en développement (VOUS)

```bash
cd darshan-nextjs
npm run dev
```

**Checklist de tests :**
- [ ] http://localhost:3000 → Page d'accueil s'affiche correctement
- [ ] Navigation entre pages fonctionne
- [ ] Menu mobile s'ouvre/ferme (< 1024px)
- [ ] Événements se chargent sur `/evenements`
- [ ] Styles Tailwind appliqués (couleurs, fonts, spacing)
- [ ] Animations au scroll fonctionnent
- [ ] Responsive mobile/tablet/desktop
- [ ] Design identique au site actuel

#### 9.2 Build de production (VOUS)

```bash
npm run build
```

**Vérifications :**
- [ ] Build réussit sans erreurs TypeScript
- [ ] Dossier `out/` est créé
- [ ] Fichiers HTML statiques générés dans `out/`

#### 9.3 Test du build en local (VOUS)

```bash
npx serve out
```

Tester sur http://localhost:3000 :
- [ ] Toutes les pages accessibles
- [ ] Images chargent correctement
- [ ] Événements affichés
- [ ] Pas d'erreurs console

---

### Phase 10 : Migration du CMS

#### 10.1 Mettre à jour la config Decap CMS (CLAUDE CODE)

**Fichier à modifier :**
- `public/admin/config.yml` → Ajuster les chemins si nécessaire

**Vérifications :**
- Le CMS pointe toujours vers `_events/*.md`
- Git Gateway configuré
- Netlify Identity fonctionnel

#### 10.2 Tester le CMS (VOUS - après déploiement)

- [ ] `/admin` accessible
- [ ] Connexion Netlify Identity fonctionne
- [ ] Création d'un événement test
- [ ] Fichier `.md` créé dans `_events/`
- [ ] Push déclenche un nouveau build
- [ ] Événement apparaît sur le site

---

### Phase 11 : Déploiement

#### 11.1 Préparer le déploiement (VOUS)

```bash
cd darshan-nextjs

# Vérifier que tout est prêt
npm run build

# Si succès, commit
git add .
git commit -m "Migration complète vers Next.js + TypeScript + Tailwind"
```

#### 11.2 Configurer Netlify (VOUS)

**Option A : Via l'interface Netlify**
1. Aller sur votre site Netlify
2. Site settings → Build & deploy
3. Modifier :
   - Base directory: `darshan-nextjs`
   - Build command: `npm run build`
   - Publish directory: `darshan-nextjs/out`

**Option B : Créer un nouveau site Netlify**
1. Importer le repo depuis GitHub
2. Configurer :
   - Base directory: `darshan-nextjs`
   - Build command: `npm run build`
   - Publish directory: `darshan-nextjs/out`

#### 11.3 Déployer (VOUS)

```bash
# Push vers GitHub
git push origin <votre-branche-migration>

# Netlify détecte le push et lance le build automatiquement
```

#### 11.4 Vérifications post-déploiement (VOUS)

- [ ] Site accessible sur l'URL Netlify
- [ ] Toutes les pages fonctionnent
- [ ] Images/vidéos chargent
- [ ] Événements affichés
- [ ] CMS `/admin` accessible
- [ ] Test création événement via CMS
- [ ] Performance Lighthouse > 90

---

### Phase 12 : Cleanup et documentation

#### 12.1 Mettre à jour la documentation (CLAUDE CODE)

**Fichiers à mettre à jour :**
- `CLAUDE.md` → Nouvelles instructions pour Next.js
- `README.md` → Documentation utilisateur (si existe)

**Nouveau contenu CLAUDE.md :**
```markdown
## Development

Run dev server:
\`\`\`bash
npm run dev
\`\`\`

Build for production:
\`\`\`bash
npm run build
\`\`\`

## Architecture

- **Framework:** Next.js 15 (Pages Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **CMS:** Decap CMS (unchanged)
```

#### 12.2 Archiver l'ancien code (VOUS)

```bash
# Depuis la racine du projet
mkdir archive-html-version
mv *.html archive-html-version/
mv css archive-html-version/
mv js archive-html-version/
mv dev.sh archive-html-version/

# Ou créer une branche Git pour archiver
git checkout -b archive/html-version
git add .
git commit -m "Archive: version HTML/CSS/JS vanilla"
git push origin archive/html-version
git checkout <votre-branche-migration>
```

---

## Commandes récapitulatives

### Pour VOUS (à exécuter)

```bash
# 1. Créer le projet
npx create-next-app@latest darshan-nextjs
cd darshan-nextjs
npm install gray-matter marked
npm install -D @types/marked

# 2. Copier les assets
cp -r ../images public/images
cp -r ../videos public/videos
cp -r ../admin public/admin
cp -r ../_events _events
cp ../DESIGN_SYSTEM.md .
cp ../CLAUDE.md .

# 3. Développement (après que Claude ait créé les fichiers)
npm run dev

# 4. Build de production
npm run build

# 5. Test local du build
npx serve out

# 6. Déploiement
git add .
git commit -m "Migration vers Next.js"
git push origin <branche>
```

### Pour CLAUDE CODE (à demander)

**Commande simple pour démarrer :**
```
"Configure Next.js avec export statique et crée la config Tailwind basée sur design-tokens.css"
```

**Ensuite :**
```
"Crée tous les composants de base : Layout, Header, Footer, Button, Card, etc."
```

**Puis :**
```
"Crée le helper lib/events.ts pour parser les événements markdown"
```

**Enfin :**
```
"Migre toutes les pages HTML vers Next.js/TypeScript en conservant le contenu exact"
```

---

## Timeline estimée

| Phase | Durée | Qui |
|-------|-------|-----|
| Setup Next.js + dépendances | 15 min | VOUS |
| Config Tailwind + Design tokens | 30 min | CLAUDE |
| Copie des assets | 5 min | VOUS |
| Création composants | 1h | CLAUDE |
| Migration pages | 1h30 | CLAUDE |
| Scripts/Hooks | 45 min | CLAUDE |
| Config déploiement | 15 min | CLAUDE |
| Tests locaux | 30 min | VOUS |
| Déploiement | 15 min | VOUS |
| **TOTAL** | **~5h** | - |

---

## Checklist finale avant mise en production

### Fonctionnalités
- [ ] Toutes les pages migrées (5 pages)
- [ ] Navigation fonctionne
- [ ] Menu mobile opérationnel
- [ ] Événements chargés depuis `_events/*.md`
- [ ] CMS Decap fonctionnel sur `/admin`
- [ ] Formulaire contact (si applicable)

### Design
- [ ] Design identique au site HTML actuel
- [ ] Couleurs : Or #C9A961 + Bleu nuit #0A1E2E
- [ ] Fonts : Medula One (logo), Libre Baskerville (titres), Outfit (body)
- [ ] Responsive mobile/tablet/desktop
- [ ] Animations au scroll

### Performance
- [ ] Lighthouse Performance > 90
- [ ] Images optimisées (WebP)
- [ ] Lazy loading actif
- [ ] First Contentful Paint < 1.8s

### SEO
- [ ] Métadonnées sur toutes les pages
- [ ] `noindex, nofollow` si nécessaire (comme site actuel)
- [ ] Sitemap généré
- [ ] Favicon présent

### Accessibilité
- [ ] Contrastes WCAG AA validés
- [ ] Navigation clavier fonctionnelle
- [ ] Alt text sur images
- [ ] Focus states visibles

### Technique
- [ ] Build Next.js réussit sans erreurs
- [ ] Pas d'erreurs TypeScript
- [ ] Export statique génère HTML dans `out/`
- [ ] Netlify configuré correctement

---

## Rollback en cas de problème

Si quelque chose ne va pas :

```bash
# Revenir à la version HTML
git checkout main  # ou votre branche principale

# Redéployer l'ancienne version sur Netlify
# Via l'interface : Deploys → [ancien deploy] → Publish deploy
```

---

## Support et ressources

### Documentation
- [Next.js Pages Router](https://nextjs.org/docs/pages)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Decap CMS](https://decapcms.org/docs/)

### Fichiers de référence
- `DESIGN_SYSTEM.md` → Spécifications design complètes
- `CLAUDE.md` → Instructions projet pour Claude Code
- `css/design-tokens.css` → Variables CSS originales (référence)

---

**Prêt pour la migration !** 🚀

Pour démarrer, exécutez la section "Phase 1 : Setup initial" puis demandez à Claude Code de commencer la Phase 2.
