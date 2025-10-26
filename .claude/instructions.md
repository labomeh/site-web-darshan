# Instructions permanentes pour ce projet

## ⚡ DÉVELOPPEMENT AVEC CLAUDE CODE

**CE PROJET EST DÉVELOPPÉ AVEC CLAUDE CODE EN PRIORITÉ**

### Principes Fondamentaux

1. **AI-First Development** : Ce projet est conçu pour être développé principalement par Claude Code
   - Les estimations de temps pour les tâches ne concernent que Claude Code, pas les humains
   - Les développeurs humains doivent comprendre le code mais ne devraient intervenir que pour des ajustements mineurs
   - Toujours privilégier les solutions maintenables par IA (code clair, composants réutilisables, patterns cohérents)

2. **Mobile-First OBLIGATOIRE** : Toujours commencer par le mobile, puis adapter pour desktop
   ```tsx
   // ✅ CORRECT - Mobile first (base), puis desktop (md:)
   className="text-sm px-4 md:text-base md:px-6"

   // ❌ INCORRECT - Desktop first avec max-md:
   className="text-base px-6 max-md:text-sm max-md:px-4"
   ```

3. **DRY Principle - Ne Jamais Se Répéter** :
   - Si un pattern apparaît 2+ fois → Créer un composant réutilisable
   - Si des classes Tailwind se répètent 3+ fois → Extraire dans un composant
   - Toujours chercher à réutiliser les composants existants dans `components/ui/`

---

## Design System
TOUJOURS se référer au fichier `/docs/DESIGN_SYSTEM.md` avant toute modification de code.

### Règles strictes :
1. **AVANT** toute modification de styles, couleurs, typographie ou layout :
    - Consulter `/docs/DESIGN_SYSTEM.md`
    - Vérifier que la modification est conforme
    - Si la modification nécessite un changement du design system, DEMANDER CONFIRMATION à l'utilisateur AVANT de modifier

2. **JAMAIS** modifier `/docs/DESIGN_SYSTEM.md` sans approbation explicite de l'utilisateur

3. **Validation systématique** (voir `/docs/DESIGN_SYSTEM.md`) :
    - Palette de couleurs : Or #C9A961 (primary), Bleu nuit #0A1E2E (secondary)
    - Typographie : Medula One (logo), Libre Baskerville (headings), Outfit (body)
    - Espacement basé sur système 8px : p-1, p-2, p-4, p-6, p-8, p-12, p-16, p-24
    - Contrastes WCAG AA minimum (préférer AAA avec ratio 7:1+)
    - Responsive mobile-first : sm:640px, md:768px, lg:1024px
    - Touch targets minimum 48px (min-h-[48px] min-w-[48px])

4. **Si un besoin sort du design system** :
    - Signaler l'écart à l'utilisateur
    - Proposer des alternatives conformes au design system
    - Attendre confirmation avant d'appliquer une solution non-conforme

### Web Design Best Practices

1. **Hiérarchie Visuelle** :
   - Titres h1 (1 seul par page, SEO), h2, h3 avec tailles décroissantes
   - Espacement cohérent pour guider l'œil
   - Contraste suffisant entre texte et fond

2. **Espacement et Respiration** :
   - Ne jamais surcharger l'écran
   - Marges généreuses autour des sections importantes
   - Espacement vertical cohérent (système 8px)

3. **Images et Médias** :
   - Toujours avec attribut alt descriptif (SEO + accessibilité)
   - lazy loading pour images below-the-fold
   - Aspect ratios explicites pour éviter layout shifts

4. **Interaction et Feedback** :
   - États hover, focus, active pour tous les éléments cliquables
   - Transitions douces (duration-300)
   - Touch targets 48px minimum sur mobile

---

## Stack Technique

### Framework & Build
- **Next.js 15** (Pages Router) + TypeScript
- **Tailwind CSS v4** avec configuration `@theme` dans `styles/tailwind.css`
- **Export statique** (SSG) - Pas de fonctionnalités serveur
- **React 19** - Composants fonctionnels uniquement

### Styling
- **Tailwind CSS v4** - Utility-first, configuration CSS-first avec `@theme`
- **CSS Modules** - INTERDIT, migration en cours vers Tailwind pur
- **Composants réutilisables** dans `components/ui/`
- **Utilitaire `cn()`** - TOUJOURS utiliser pour merge de classes conditionnelles

---

## Code Best Practices (STRICT)

### 1. TypeScript (tsconfig.json - Mode Strict)
```typescript
// ❌ INTERDIT - any types
function handleClick(event: any) { }

// ✅ OBLIGATOIRE - Types explicites
function handleClick(event: React.MouseEvent<HTMLButtonElement>) { }

// ✅ OBLIGATOIRE - Type imports
import type { ButtonProps } from '@/types';

// ✅ OBLIGATOIRE - Interfaces pour props
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}
```

**Règles strictes :**
- ❌ `any` type INTERDIT (erreur ESLint)
- ✅ Tous les paramètres doivent avoir des types explicites
- ✅ Utiliser `import type` pour les imports de types uniquement
- ✅ Toujours définir des interfaces pour les props de composants
- ✅ Pas de variables inutilisées (erreur TypeScript)

### 2. React Components (ESLint enforced)
```tsx
// ✅ OBLIGATOIRE - Function declarations pour composants nommés
export default function Button({ variant, children }: ButtonProps) {
  return <button>{children}</button>;
}

// ❌ INTERDIT - Arrow functions pour composants nommés
export const Button = ({ variant, children }: ButtonProps) => { }

// ✅ OBLIGATOIRE - Self-closing tags
<Container />

// ❌ INTERDIT - Tags vides
<Container></Container>

// ✅ OBLIGATOIRE - Pas de braces inutiles
<Button variant="primary">

// ❌ INTERDIT - Braces inutiles
<Button variant={"primary"}>
```

**Règles strictes :**
- ✅ Function declarations pour composants nommés
- ✅ Self-closing tags obligatoires pour composants sans children
- ✅ Pas de braces autour des props string
- ✅ Pas de props boolean avec valeur explicite (`disabled` pas `disabled={true}`)

### 3. Imports Organization (ESLint auto-sort)
```tsx
// ✅ OBLIGATOIRE - Ordre automatique
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import type { ButtonProps } from '@/types';
```

**Ordre automatique (ESLint) :**
1. React
2. Next.js
3. External libraries
4. Internal (@/) imports
5. Type imports
6. Alphabétique dans chaque groupe

### 4. Tailwind CSS (Prettier plugin)
```tsx
// ✅ OBLIGATOIRE - Classes Tailwind avec cn()
<div className={cn(
  'rounded-lg bg-white p-6 shadow-md',
  'transition-all duration-300',
  isActive && 'bg-primary text-white',
  className
)}>

// ❌ INTERDIT - Template literals pour classes conditionnelles
<div className={`base ${isActive ? 'active' : ''} ${className}`}>

// ✅ Les classes Tailwind seront auto-triées par Prettier
// Ordre: Layout → Box Model → Typography → Visual → Misc
```

**Règles strictes :**
- ✅ TOUJOURS utiliser `cn()` pour classes conditionnelles
- ✅ Prettier trie automatiquement les classes Tailwind
- ✅ Utiliser les design tokens définis dans `styles/tailwind.css`
- ✅ Respecter les classes du design system (bg-primary, text-secondary, etc.)

### 5. Code Sans Commentaires (Self-Documenting)
```tsx
// ❌ INTERDIT - Commentaires qui expliquent "quoi"
// This function handles button click
function handleClick() { }

// ✅ OBLIGATOIRE - Nommage clair, pas de commentaire
function handleButtonClick() { }

// ✅ AUTORISÉ - Commentaires qui expliquent "pourquoi" ou choix complexes
// Using CSS filter instead of SVG fill because logo.svg is external
// and can't be modified inline for color changes
<img className="brightness-0 saturate-100 invert-[65%]..." />
```

**Règles strictes :**
- ❌ Pas de commentaires expliquant ce que fait le code (use clear naming)
- ✅ Commentaires autorisés uniquement pour :
  - Expliquer des choix techniques complexes ("why")
  - Workarounds temporaires avec ticket/issue
  - Algorithmes complexes qui nécessitent explication
- ✅ Le code doit être auto-documenté par le nommage

### 6. Console Logs (Next.js compiler)
```typescript
// ⚠️ WARNING - Supprimé en production
console.log('Debug info');

// ✅ AUTORISÉ - Gardé en production
console.error('Error message');
console.warn('Warning message');
```

**Règles strictes :**
- ⚠️ `console.log` génère un warning ESLint
- ✅ Automatiquement supprimé en production build
- ✅ `console.error` et `console.warn` autorisés et gardés

---

## Component Architecture

### Règles d'Extraction de Composants

**QUAND EXTRAIRE UN COMPOSANT :**
1. Pattern répété 2+ fois → Extraire immédiatement
2. Logique complexe (> 20 lignes JSX) → Décomposer
3. Même structure HTML avec différents contenus → Composant avec props
4. Classes Tailwind répétées 3+ fois → Composant avec variants

**EXEMPLE - Contact Page :**
```tsx
// ❌ MAUVAIS - Répétition de structure
<Card>
  <h3 className="mb-4 font-headings text-[22px]...">
    <i className="fas fa-phone..." />
    Téléphone
  </h3>
  <p>Content</p>
</Card>

// ✅ BON - Composant réutilisable
<ContactInfoCard icon="fas fa-phone" title="Téléphone">
  <p>Content</p>
</ContactInfoCard>
```

### Structure des Composants (FOLDER-BASED)

**RÈGLE CRITIQUE : TOUS les composants avec sub-components DOIVENT utiliser la structure folder/index.tsx**

```
components/
├── ui/                           # Composants génériques réutilisables
│   ├── Button.tsx                # Simple, pas de sub-components
│   ├── Card.tsx                  # Simple, pas de sub-components
│   ├── Container.tsx             # Simple, pas de sub-components
│   ├── Section.tsx               # Simple, pas de sub-components
│   ├── Heading/                  # Folder-based - Système de titres unifié
│   │   ├── index.tsx             # Composant Heading principal
│   │   └── HeadingWithIcon.tsx   # Variante avec icône
│   ├── PageHeader/               # Folder-based (extensible)
│   │   └── index.tsx
│   └── FormField/                # Folder-based (extensible)
│       └── index.tsx
├── contact/                      # Composants spécifiques à contact
│   └── ContactInfoCard/          # Folder-based
│       └── index.tsx
├── Hero/                         # Folder-based avec sub-components
│   ├── index.tsx                 # Composant principal
│   └── ServiceItem.tsx           # Sub-component
├── Header.tsx                    # Simple, pas de sub-components
├── Footer.tsx                    # Simple, pas de sub-components
└── Layout.tsx                    # Simple, pas de sub-components
```

**QUAND UTILISER FOLDER STRUCTURE :**

1. **Composant avec sub-components** :
   ```
   Hero/
   ├── index.tsx          # Composant principal exporté
   ├── ServiceItem.tsx    # Sub-component interne
   └── VideoBackground.tsx # Sub-component interne
   ```

2. **Composant simple** :
   ```
   Button.tsx             # Un seul fichier suffit
   ```

3. **Composant qui pourrait évoluer** :
   ```
   PageHeader/            # Folder même si 1 fichier pour l'instant
   └── index.tsx          # Facilite l'ajout futur de sub-components
   ```

**AVANTAGES :**
- ✅ Sub-components colocalisés avec le parent
- ✅ Imports clairs : `import Hero from '@/components/Hero'`
- ✅ Facile d'ajouter des sub-components plus tard
- ✅ Meilleure organisation du code

**EXEMPLE - Hero avec ServiceItem :**
```tsx
// components/Hero/ServiceItem.tsx
interface ServiceItemProps {
  icon: string;
  label: string;
}

export default function ServiceItem({ icon, label }: ServiceItemProps) {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-2...">
      <i className={`${icon} mb-0 text-[1.2rem]...`} />
      <span className="font-medium text-[13px]...">{label}</span>
    </div>
  );
}

// components/Hero/index.tsx
import ServiceItem from './ServiceItem';

export default function Hero({ ... }: HeroProps) {
  return (
    <section>
      <ServiceItem icon="fas fa-water" label="Hydrothérapie du côlon" />
      <ServiceItem icon="fas fa-hands" label="Massages ayurvédiques" />
      <ServiceItem icon="fas fa-om" label="Méditation tantrique" />
    </section>
  );
}
```

**RÈGLE : Préférer petits composants réutilisables plutôt que gros composants monolithiques**

---

## Système de Titres Unifié

**RÈGLE CRITIQUE : Tous les titres (h1-h6) doivent utiliser le composant `Heading` avec underline dorée**

### Composant Heading

```tsx
import Heading from '@/components/ui/Heading';

// Titre de section avec underline dorée (par défaut)
<Heading level={2}>Mon Titre</Heading>

// Titre aligné à gauche
<Heading level={2} align="left">Mon Titre</Heading>

// Titre sans underline
<Heading level={3} underline={false}>Mon Titre</Heading>

// Page header (h1)
<Heading level={1}>Contact</Heading>
```

### HeadingWithIcon (pour titres avec icônes)

```tsx
import HeadingWithIcon from '@/components/ui/Heading/HeadingWithIcon';

// Titre avec icône FontAwesome
<HeadingWithIcon icon="fas fa-phone" level={3}>
  Téléphone
</HeadingWithIcon>
```

### Niveaux et Styles

**Hiérarchie des titres :**
- `level={1}` → h1 - 48px (32px mobile) - Page headers uniquement
- `level={2}` → h2 - 36px (28px mobile) - Sections principales
- `level={3}` → h3 - 22px (20px mobile) - Sous-sections, cards
- `level={4}` → h4 - 18px - Petites sections
- `level={5}` → h5 - 16px - Micro-sections
- `level={6}` → h6 - 14px - Labels

**Underline dorée (par défaut) :**
- Hauteur : 3px
- Largeur : 60px
- Couleur : primary (gold #C9A961)
- Marge top : 16px

**Alignement :**
- `center` (défaut) - Titre centré, underline centrée
- `left` - Titre à gauche, underline à gauche
- `right` - Titre à droite, underline à droite

### Exemples d'Usage

**Page Header (h1 avec underline) :**
```tsx
<PageHeader title="Contactez-moi" subtitle="Pour toute question" />
// Utilise Heading level={1} en interne
```

**Section Header (h2 avec underline centrée) :**
```tsx
<Heading level={2}>
  <i className="fas fa-map-marked-alt mr-4 text-primary" />
  Localisation
</Heading>
```

**Card Header (h3 avec icône, sans underline) :**
```tsx
<HeadingWithIcon icon="fas fa-phone" level={3} className="mb-4">
  Téléphone
</HeadingWithIcon>
```

### ❌ Anti-patterns

**Ne JAMAIS utiliser de h1-h6 directement :**
```tsx
// ❌ INTERDIT
<h2 className="...">Mon Titre</h2>

// ✅ CORRECT
<Heading level={2}>Mon Titre</Heading>
```

**Ne JAMAIS recréer l'underline manuellement :**
```tsx
// ❌ INTERDIT
<h2 className="after:block after:h-[3px] after:w-[60px] after:bg-primary">

// ✅ CORRECT
<Heading level={2}>Mon Titre</Heading>
```

---

### Utilisation du cn() Utility
```typescript
// lib/utils.ts - Déjà créé
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Usage :**
```tsx
<button
  className={cn(
    'base-styles',                           // Base
    variant === 'primary' && 'primary-styles', // Conditional
    size === 'lg' && 'large-styles',         // Conditional
    className                                 // Override from parent
  )}
>
```

### Props Pattern
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props  // Spread remaining HTML attributes
}: ButtonProps) {
  // Implementation
}
```

---

## NPM Scripts (Automatisation)

Avant chaque commit, RECOMMANDER à l'utilisateur de lancer :
```bash
npm run validate  # Type-check + ESLint + Prettier
```

**Scripts disponibles :**
- `npm run lint` - Vérifier erreurs ESLint
- `npm run lint:fix` - Auto-corriger erreurs ESLint
- `npm run format` - Formater avec Prettier
- `npm run type-check` - Vérifier types TypeScript
- `npm run validate` - Tout vérifier en une commande

---

## Checklist Avant Chaque Modification

Avant d'écrire du code, vérifier :

- [ ] **Design System** : Conforme à `/docs/DESIGN_SYSTEM.md` ?
- [ ] **TypeScript** : Types explicites, pas de `any` ?
- [ ] **Imports** : Utiliser `import type` pour types ?
- [ ] **React** : Function declarations, self-closing tags ?
- [ ] **Tailwind** : Utiliser `cn()` pour classes conditionnelles ?
- [ ] **Naming** : Nommage clair, pas besoin de commentaires ?
- [ ] **Console** : Pas de `console.log` ?
- [ ] **Composants** : Réutiliser `components/ui/` si existe ?
- [ ] **DRY** : Pattern répété 2+ fois ? → Extraire en composant
- [ ] **Folder Structure** : Composant avec sub-components ? → Utiliser folder/index.tsx
- [ ] **Mobile-First** : Classes Tailwind mobile d'abord, puis md: ?

---

## SEO Best Practices

### Balises Meta et Structure

1. **Balises HTML Sémantiques** :
   ```tsx
   // ✅ OBLIGATOIRE
   <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>

   // ❌ INTERDIT (sauf cas exceptionnels)
   <div> pour structure principale
   ```

2. **Hiérarchie de Titres** :
   - 1 seul `<h1>` par page (titre principal)
   - `<h2>` pour sections principales
   - `<h3>` à `<h6>` pour sous-sections
   - Jamais sauter de niveau (h1 → h3 ❌)

3. **Images et Médias** :
   ```tsx
   // ✅ OBLIGATOIRE - Alt descriptif
   <img src="..." alt="Description précise pour SEO et accessibilité" />

   // ✅ OBLIGATOIRE - Loading lazy pour images below-the-fold
   <img src="..." alt="..." loading="lazy" />

   // ✅ BON - Dimensions explicites pour éviter layout shift
   <img src="..." alt="..." width={800} height={600} />
   ```

4. **Liens Internes** :
   - Toujours utiliser `<Link>` de Next.js (pas `<a>` pour navigation interne)
   - Texte de lien descriptif (éviter "cliquez ici")
   - Attribut `title` sur liens avec icônes uniquement

5. **Meta Tags dans Layout** :
   - Title unique par page (50-60 caractères)
   - Description unique par page (150-160 caractères)
   - Open Graph pour réseaux sociaux

### Performance SEO

1. **Core Web Vitals** :
   - LCP (Largest Contentful Paint) < 2.5s → Images optimisées, lazy loading
   - FID (First Input Delay) < 100ms → JavaScript minimal
   - CLS (Cumulative Layout Shift) < 0.1 → Dimensions images explicites

2. **Optimisation Images** :
   - Format WebP/AVIF quand possible
   - Lazy loading par défaut
   - Aspect ratio pour éviter layout shifts

3. **Lighthouse Checks** :
   - Performance > 90
   - Accessibility > 95
   - Best Practices > 90
   - SEO > 95

---

## Ton et Approche

- Site de bien-être : design doux, apaisant, professionnel
- Maximiser l'utilisation de l'espace (pas de vides inutiles)
- Images toujours accompagnées de texte
- Performance et SEO prioritaires (static export)
- Code clean, maintenable, sans dette technique
- **Mobile-first** : toujours commencer par concevoir pour mobile

---

## Documentation Workflow

**RÈGLE : Minimiser la documentation, privilégier le code auto-documenté**

### ✅ Créer Documentation Permanente Pour :
- Design systems et guidelines (`DESIGN_SYSTEM.md`)
- Workflows de développement (`BRANCHING_STRATEGY.md`, `GIT_ALIASES.md`)
- Configuration (`CONFIGURATION.md`)

### ❌ Ne PAS Créer de Docs Pour :
- Refactorings simples → Commit message suffit
- Explorations de design → Discuter avec l'utilisateur, puis supprimer
- Décisions temporaires → Commentaires inline dans le code
- Logs de travail → Git history suffit
- Audits de code → Effacer après complétion

### Workflow Simplifié :
1. **Créer** → Uniquement si nécessaire pour référence permanente
2. **Consolider** → Intégrer infos utiles dans docs existants
3. **Supprimer** → Effacer quand obsolète (pas d'archive)

**Location :**
- `/docs` → Documentation permanente uniquement
- `/docs/README.md` → Index à jour

**Pas de dossier archive** - Supprimer directement les docs temporaires après utilisation.

---

## Références

- **Design System complet** : `/docs/DESIGN_SYSTEM.md` (inclut stratégie couleurs en section 1.5)
- **Configuration complète** : `/docs/CONFIGURATION.md`
- **Stratégie Git** : `/docs/BRANCHING_STRATEGY.md`
- **Alias Git** : `/docs/GIT_ALIASES.md`
- **Index complet** : `/docs/README.md`

**En cas de doute, DEMANDER confirmation à l'utilisateur plutôt que d'assumer.**
