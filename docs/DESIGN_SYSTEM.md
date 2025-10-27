# Design System - Darshan

## Vue d'ensemble
Site vitrine pour Darshan, centre de bien-être et d'hydrothérapie. Le design reflète les valeurs spirituelles, de soin naturel, bien-être, douceur et sérénité.

**Stack technique :** Next.js 15 + **Tailwind CSS v4** (approche CSS-first avec `@theme`)

---

## 0. RÈGLES STRICTES - Composants Obligatoires

### ⚠️ COMPOSANTS À TOUJOURS UTILISER

**INTERDICTION ABSOLUE** d'utiliser des balises HTML natives pour ces éléments. **TOUJOURS** utiliser les composants React correspondants :

| Élément | ❌ NE JAMAIS UTILISER | ✅ TOUJOURS UTILISER | Raison |
|---------|---------------------|-------------------|--------|
| **Boutons** | `<button>` | `<Button variant="primary\|secondary\|outline">` | Styles cohérents, accessibilité, cursor-pointer |
| **Titres** | `<h1>`, `<h2>`, `<h3>` | `<Heading level={1\|2\|3}>` | Underline dorée automatique, styles cohérents |
| **Conteneur** | `<div className="max-w-[1200px] mx-auto px-6">` | `<Container>` | Largeur fixe, padding responsive |
| **Section** | `<section className="py-16">` | `<Section>` | Padding vertical cohérent |
| **Carte** | `<div className="bg-white rounded-xl...">` | `<Card>` | Effets hover, ombres, styles uniformes |

### Exemples d'utilisation OBLIGATOIRE

```tsx
// ❌ INTERDIT
<button className="bg-primary px-6 py-4 rounded-lg...">
  Réserver
</button>

// ✅ OBLIGATOIRE
<Button variant="primary" size="lg">
  Réserver
</Button>

// ❌ INTERDIT
<h2 className="text-3xl font-headings text-black">
  Mon Titre
</h2>
<div className="h-[3px] w-[60px] bg-primary mt-4" />

// ✅ OBLIGATOIRE
<Heading level={2}>Mon Titre</Heading>

// ❌ INTERDIT
<section className="py-16 bg-off-white">
  <div className="max-w-[1200px] mx-auto px-6">
    ...
  </div>
</section>

// ✅ OBLIGATOIRE
<Section>
  <Container>
    ...
  </Container>
</Section>
```

### Composants disponibles dans `components/ui/`

- `<Button>` - Tous les boutons
- `<Heading>` - Tous les titres (h1-h6)
- `<Container>` - Wrapper de contenu
- `<Section>` - Sections de page
- `<Card>` - Cartes de contenu
- `<PageHeader>` - En-têtes de page
- `<Logo>` - Logo du site

### Tests obligatoires

**TOUT nouveau composant UI DOIT avoir :**
1. ✅ Fichier de test (`*.test.tsx`)
2. ✅ Fichier Ladle (`*.stories.tsx`) pour documentation visuelle
3. ✅ Couverture de test minimum 80%

### Refactoring obligatoire

**Si vous voyez :**
- Un `<button>` → Remplacer par `<Button>`
- Un `<h1>`, `<h2>`, `<h3>` → Remplacer par `<Heading>`
- Des classes répétées 2+ fois → Créer un composant réutilisable

---

## 1. Palette de couleurs

### Configuration Tailwind CSS v4

```css
/* styles/tailwind.css */
@theme {
  /* Couleurs principales */
  --color-primary: #C9A961;        /* Or spirituel - Brand, lumière, éveil */
  --color-primary-light: #D4B87A;  /* Variante claire (accent) */
  --color-primary-dark: #B08F40;   /* Variante foncée */

  --color-secondary: #0A1E2E;      /* Bleu nuit profond - Méditation */
  --color-secondary-light: #1A3A4F;
  --color-secondary-dark: #051119;

  --color-accent: #D4B87A;         /* Or clair */
  --color-accent-light: #E5D1B3;
  --color-accent-dark: #C9A961;

  /* Couleurs neutres */
  --color-white: #FFFFFF;
  --color-off-white: #FAF9F7;      /* Fond principal - doux pour les yeux */
  --color-light-gray: #E8E6E3;     /* Bordures, séparateurs */
  --color-gray: #B5B3B0;           /* Texte secondaire */
  --color-dark-gray: #4A4A4A;      /* Texte principal */
  --color-black: #2C2C2C;          /* Titres, éléments importants */

  /* Couleurs sémantiques */
  --color-success: #7A9B76;
  --color-info: #8B9DAB;
  --color-warning: #C9A66B;
  --color-error: #A67B75;
}
```

### Classes Tailwind générées

```tsx
// Couleurs principales
<div className="bg-primary text-white">          // Fond or, texte blanc
<div className="bg-secondary text-primary">      // Fond bleu, texte or
<div className="bg-off-white text-dark-gray">    // Fond beige, texte gris

// Bordures et états
<div className="border-primary hover:bg-primary-dark">
<button className="text-primary-light focus:ring-primary">
```

### Utilisation des couleurs (Optimisée pour l'accessibilité WCAG AA)

#### Header et Navigation
```tsx
<header className="bg-secondary">
  <h1 className="font-logo text-primary">DARSHAN</h1>
  <nav className="text-off-white hover:text-primary">...</nav>
</header>
```
- **Contraste** : Or sur bleu = 8.5:1 ✅ WCAG AAA

#### Titres et Textes
```tsx
<h1 className="text-black font-headings">Titre Principal</h1>
<h2 className="text-black border-b-[3px] border-primary pb-2">Section</h2>
<p className="text-dark-gray">Texte courant</p>
<span className="text-gray text-sm">Légende</span>
```
- **Contraste** : Noir sur off-white = 14.8:1 ✅ WCAG AAA

#### Boutons et CTA
```tsx
// Bouton primaire
<button className="bg-primary text-secondary hover:bg-primary-dark">
  Réserver
</button>

// Bouton secondaire
<button className="bg-secondary text-primary border-2 border-primary">
  En savoir plus
</button>
```
- **Contraste** : 8.5:1 ✅ WCAG AAA

#### Autres éléments
- **Footer** : `bg-secondary text-off-white`, liens avec `text-primary`
- **Sections alternées** : `bg-off-white` et `bg-white`
- **Or utilisé uniquement** : Sur fond bleu foncé, en accents/bordures, jamais sur fond blanc

---

## 1.5 Stratégie d'Utilisation des Couleurs

### Hiérarchie Chromatique : Or en Premier

**Règle principale :** L'or (primary) est la couleur de marque dominante. Le bleu (secondary) joue un rôle de support structurel.

#### Répartition Visuelle
- **70% Or** - Éléments de marque, interactions clés
- **20% Bleu** - Structure, profondeur
- **80% Neutres chauds** - Fonds, base

### Toujours utiliser l'Or pour :
- ✅ Icônes dans les cartes (services, contact, fonctionnalités)
- ✅ Underlines des titres de section (h1, h2)
- ✅ CTAs primaires (boutons, liens importants)
- ✅ Cercles d'icônes avec fond (`bg-primary/10`)
- ✅ États hover sur éléments interactifs
- ✅ Accents décoratifs (bordures, séparateurs)

**Exemple d'utilisation correcte :**
```tsx
// Icône de carte - Or
<div className="rounded-full bg-primary/10">
  <i className="text-primary" />
</div>

// Titre de section - Underline or
<h2 className="text-black">Services</h2>
<div className="h-[3px] w-[60px] bg-primary" />

// CTA primaire - Fond or
<button className="bg-primary hover:bg-primary-dark">
  Prendre rendez-vous
</button>
```

### Utiliser le Bleu pour :

**1. Navigation/Header**
- Fond bleu foncé (`bg-secondary`) optionnel
- Texte bleu sur fond clair (actuel)

**2. Footer**
- Fond bleu foncé obligatoire (`bg-secondary`)
- Crée un "bookend" visuel avec le header

**3. Overlays Hero**
- Overlay sombre (`bg-secondary-dark/60`) sur vidéos/images
- Rend le texte blanc/or lisible

**4. Éléments informationnels** (usage restreint)
- Callouts avec `border-info` et `bg-info/5`
- Badges secondaires
- ⚠️ Usage parcimonieux - l'or reste dominant

**5. Sections alternées sombres**
- Fond bleu moyen (`bg-secondary-light`)
- Maximum 1-2 sections par page
- Crée du rythme visuel

**6. Couleurs de texte**
- Bleu foncé sur fond clair (alternative au noir)
- Liens : `text-secondary hover:text-primary`

### Ne JAMAIS utiliser le Bleu pour :
- ❌ Icônes de cartes (toujours or)
- ❌ CTAs primaires (toujours or)
- ❌ Underlines de titres principaux (toujours or)
- ❌ Fonds dominants (crée une ambiance froide)
- ❌ Petits éléments décoratifs (toujours or)

### Tableau de Référence Rapide

| Élément | Couleur | Alternative | Jamais |
|---------|---------|-------------|--------|
| **Icônes cartes** | Or | - | Bleu |
| **Fonds cartes** | Blanc/Off-white | - | Bleu |
| **Titres section** | Noir + underline or | - | Underline bleu |
| **CTA primaire** | Fond or | - | Fond bleu |
| **Navigation** | Fond blanc + texte foncé | Fond bleu + texte clair | - |
| **Footer** | Fond bleu foncé | Fond gris foncé | Fond blanc |
| **Overlay hero** | Bleu/noir foncé | - | Bleu clair |
| **Texte principal** | Gris foncé | Bleu foncé | Noir pur |
| **Liens** | Bleu foncé → Or hover | - | Bleu pur |
| **Fonds sections** | Off-white (principal) | Blanc, Bleu foncé (accent) | Bleu clair |

### Règles de Contraste
- **Sections claires** (off-white/blanc) → Or + texte gris foncé
- **Sections sombres** (bleu foncé) → Or + texte blanc

---

## 2. Typographie

### Configuration Tailwind CSS v4

```css
/* styles/tailwind.css */
@theme {
  /* Polices */
  --font-logo: 'Medula One', serif;
  --font-headings: 'Libre Baskerville', serif;
  --font-body: 'Outfit', sans-serif;

  /* Tailles de police responsive */
  --font-size-h1: clamp(32px, 5vw, 48px);
  --font-size-h2: clamp(26px, 4vw, 36px);
  --font-size-h3: clamp(22px, 3vw, 28px);
  --font-size-h4: clamp(18px, 2.5vw, 22px);
  --font-size-h5: clamp(16px, 2vw, 18px);
  --font-size-base: clamp(15px, 1.5vw, 16px);
  --font-size-sm: 14px;
}
```

### Classes Tailwind pour Typographie

#### Polices
```tsx
<h1 className="font-logo">DARSHAN</h1>              // Medula One
<h2 className="font-headings">Titre</h2>            // Libre Baskerville
<p className="font-body">Texte courant</p>          // Outfit (défaut)
```

#### Hiérarchie typographique

**Desktop (>1024px) :**
```tsx
<h1 className="text-5xl font-light leading-tight tracking-tight">
  Titre Principal (48px)
</h1>

<h2 className="text-4xl font-normal leading-snug tracking-tight">
  Sous-titre (36px)
</h2>

<h3 className="text-3xl font-medium leading-normal">
  Section (28px)
</h3>

<h4 className="text-2xl font-medium leading-normal">
  Sous-section (22px)
</h4>

<p className="text-base leading-relaxed">
  Texte courant (16px, line-height: 1.7)
</p>

<span className="text-sm">Petit texte (14px)</span>
```

**Tablet (640px-1024px) :**
```tsx
<h1 className="text-4xl md:text-5xl">40px → 48px</h1>
<h2 className="text-3xl md:text-4xl">32px → 36px</h2>
```

**Mobile (<640px) :**
```tsx
<h1 className="text-3xl md:text-5xl">32px → 48px</h1>
<h2 className="text-2xl md:text-4xl">26px → 36px</h2>
```

### Règles typographiques
```tsx
// Paragraphes avec marge
<p className="mb-6">Paragraphe avec espacement</p>

// Largeur optimale de lecture (70 caractères)
<p className="max-w-prose">Texte optimisé pour la lecture</p>

// Texte important (medium au lieu de bold)
<span className="font-medium">Important</span>

// Citations
<blockquote className="italic border-l-4 border-accent pl-4">
  Citation
</blockquote>
```

---

## 3. Espacement

### Configuration Tailwind CSS v4

```css
/* styles/tailwind.css */
@theme {
  /* Système d'espacement basé sur 8px */
  --spacing-xs: 4px;    /* 0.5 en Tailwind */
  --spacing-sm: 8px;    /* 2 en Tailwind */
  --spacing-md: 16px;   /* 4 en Tailwind */
  --spacing-lg: 24px;   /* 6 en Tailwind */
  --spacing-xl: 32px;   /* 8 en Tailwind */
  --spacing-2xl: 48px;  /* 12 en Tailwind */
  --spacing-3xl: 64px;  /* 16 en Tailwind */
  --spacing-4xl: 96px;  /* 24 en Tailwind */
}
```

### Classes Tailwind pour Espacement

```tsx
// Padding des sections
<section className="py-12 md:py-16">              // 48px → 64px
<section className="px-6 md:px-8">                // 24px → 32px

// Margin entre sections
<div className="mb-16 md:mb-24">                  // 64px → 96px

// Padding des cartes
<div className="p-6">                             // 24px

// Espacement entre paragraphes
<p className="mb-6">                              // 24px

// Espacement entre titre et texte
<h2 className="mb-4">                             // 16px
```

### Système Tailwind par défaut (compatible)

Tailwind utilise un système de spacing où `1 = 0.25rem (4px)` :
- `p-1` = 4px
- `p-2` = 8px (--spacing-sm)
- `p-4` = 16px (--spacing-md)
- `p-6` = 24px (--spacing-lg)
- `p-8` = 32px (--spacing-xl)
- `p-12` = 48px (--spacing-2xl)
- `p-16` = 64px (--spacing-3xl)
- `p-24` = 96px (--spacing-4xl)

---

## 4. Mise en page (Layout)

### Conteneur principal

```tsx
// Conteneur 1200px responsive
<div className="max-w-[1200px] mx-auto px-6 md:px-4">
  Contenu
</div>

// Conteneur Tailwind standard (1280px)
<div className="container mx-auto px-6">
  Contenu
</div>

// Conteneur texte (optimal pour lecture)
<div className="max-w-3xl mx-auto px-6">
  Texte optimisé (≈800px)
</div>
```

### Grilles Tailwind

```tsx
// Grille 2 colonnes (responsive)
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>Colonne 1</div>
  <div>Colonne 2</div>
</div>

// Grille 3 colonnes (responsive)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

// Grille avec gap personnalisé
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
  Contenu avec espacements adaptatifs
</div>
```

### Flexbox

```tsx
// Centrage horizontal
<div className="flex justify-center items-center">
  Contenu centré
</div>

// Espace entre éléments
<div className="flex justify-between items-center">
  <div>Gauche</div>
  <div>Droite</div>
</div>

// Colonnes responsive
<div className="flex flex-col md:flex-row gap-6">
  Mobile: vertical, Desktop: horizontal
</div>
```

### Règles de contenu
- **Largeur de contenu textuel** : `max-w-3xl` (≈800px) centré
- **Largeur pleine** : `max-w-[1200px]` pour les conteneurs
- **Pas de colonnes vides** : Le contenu doit utiliser tout l'espace disponible
- **Images** : Toujours accompagnées de texte, jamais seules dans une section

---

## 5. Composants

### Boutons

#### Bouton primaire
```tsx
<button className="
  bg-primary text-white
  px-8 py-3.5
  text-base font-medium
  rounded-lg
  min-h-[48px]
  transition-all duration-300
  hover:bg-primary-dark hover:-translate-y-0.5
  hover:shadow-[0_4px_12px_rgba(201,169,97,0.3)]
  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
">
  Réserver
</button>
```

#### Bouton secondaire
```tsx
<button className="
  bg-transparent text-primary
  px-8 py-3.5
  text-base font-medium
  rounded-lg
  border-2 border-primary
  min-h-[48px]
  transition-all duration-300
  hover:bg-primary hover:text-white
  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
">
  En savoir plus
</button>
```

#### Classe @layer components (optionnel)
```css
/* styles/tailwind.css */
@layer components {
  .btn-primary {
    @apply bg-primary text-white px-8 py-3.5 text-base font-medium rounded-lg;
    @apply min-h-[48px] transition-all duration-300;
    @apply hover:bg-primary-dark hover:-translate-y-0.5;
    @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
  }

  .btn-secondary {
    @apply bg-transparent text-primary px-8 py-3.5 border-2 border-primary;
    @apply text-base font-medium rounded-lg min-h-[48px];
    @apply transition-all duration-300 hover:bg-primary hover:text-white;
    @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
  }
}
```

### Cartes (Cards)

```tsx
<div className="
  bg-white rounded-xl p-6
  shadow-md
  transition-all duration-300
  hover:shadow-lg hover:-translate-y-1
">
  <img
    src="/image.jpg"
    alt="Description"
    className="rounded-lg w-full h-auto object-cover mb-4"
  />
  <h3 className="text-2xl font-medium text-black mb-2">
    Titre de la carte
  </h3>
  <p className="text-dark-gray leading-relaxed">
    Description de la carte
  </p>
</div>
```

#### Classe @layer components pour Card
```css
@layer components {
  .card {
    @apply bg-white rounded-xl p-6 shadow-md;
    @apply transition-all duration-300;
    @apply hover:shadow-lg hover:-translate-y-1;
  }

  .card-image {
    @apply rounded-lg w-full h-auto object-cover mb-4;
  }

  .card-title {
    @apply text-2xl font-medium text-black mb-2;
  }

  .card-description {
    @apply text-dark-gray leading-relaxed;
  }
}
```

### Images

#### Ratio et dimensions avec Tailwind
```tsx
// Image hero/bannière (16:9)
<img
  src="/hero.jpg"
  alt="Description"
  className="aspect-video object-cover rounded-2xl w-full"
/>

// Image de contenu
<img
  src="/content.jpg"
  alt="Description"
  className="max-w-full h-auto rounded-xl"
/>

// Image portrait pour prestations (4:5)
<img
  src="/service.jpg"
  alt="Description"
  className="aspect-[4/5] object-cover rounded-xl w-full"
/>
```

#### Position des images
- **Hero** : `w-full aspect-video` - Pleine largeur, ratio 16:9
- **Contenu alterné** : Grid avec `md:grid-cols-2` - Image + texte côte à côte
- **Grilles de prestations** : `aspect-[4/5]` en haut de carte
- **Toujours** : Alt text descriptif pour l'accessibilité

### Navigation

```tsx
<nav className="
  bg-white shadow-md
  py-4
  sticky top-0 z-[100]
">
  <a href="/" className="
    text-dark-gray font-medium
    px-4 py-2
    min-h-[44px]
    inline-flex items-center
    transition-colors duration-300
    hover:text-primary
    aria-[current=page]:text-primary
  ">
    Accueil
  </a>
</nav>
```

### Footer

```tsx
<footer className="bg-secondary text-white py-16 pb-8">
  <div className="max-w-[1200px] mx-auto px-6">
    <a href="#" className="
      text-off-white
      transition-colors duration-300
      hover:text-white
    ">
      Lien footer
    </a>
  </div>
</footer>
```

### Sections

```tsx
// Section standard
<section className="py-16 md:py-24">
  <div className="max-w-[1200px] mx-auto px-6">
    <h2 className="text-center mb-12 text-black">Titre</h2>
    <p className="text-center text-gray max-w-2xl mx-auto mb-12">
      Sous-titre
    </p>
  </div>
</section>

// Section alternée (fond blanc)
<section className="bg-white py-16 md:py-24">
  Contenu
</section>
```

---

## 6. Accessibilité (WCAG AA)

### Contraste
- **Texte normal** : Ratio minimum 4.5:1
- **Texte large (>18px ou >14px bold)** : Ratio minimum 3:1
- **Éléments UI** : Ratio minimum 3:1

### Combinaisons validées (WCAG AA minimum)

**Conformes WCAG AAA (contraste > 7:1) :**
✅ `--black` (#2C2C2C) sur `--off-white` : 14.8:1 - Tous les titres
✅ `--secondary` (#0A1E2E) sur `--off-white` : >15:1 - Texte sur fond clair
✅ `--dark-gray` (#4A4A4A) sur `--off-white` : 9.2:1 - Texte courant
✅ `--off-white` sur `--secondary` : >15:1 - Navigation
✅ `--primary` (#C9A961) sur `--secondary` : 8.5:1 - Logo/boutons

**Conformes WCAG AA (contraste 4.5-7:1) :**
✅ `--secondary` sur `--primary` : 8.5:1 - Boutons

**⚠️ Non conformes (à éviter) :**
❌ `--primary` (#C9A961) sur `--white` : 3.8:1 - Ne pas utiliser pour texte normal
✅ Acceptable uniquement pour texte large (>18px) ou décorations

### Règles d'accessibilité
- **Taille de police minimale** : 15px sur mobile, 16px sur desktop
- **Zones tactiles minimales** : 44x44px (iOS), 48x48px (Android)
- **Focus visible** : Outline de 2px `--primary` sur tous les éléments interactifs
- **Alt text** : Toutes les images décoratives alt="" et images de contenu avec description
- **Navigation clavier** : Tous les éléments interactifs accessibles au clavier
- **Headings hiérarchiques** : Pas de saut de niveau (H1 > H2 > H3...)
- **Couleurs or** : JAMAIS sur fond blanc/clair pour du texte, uniquement sur fond bleu foncé ou en décoration
- **Titres** : Toujours en noir (#2C2C2C) sur fond clair pour contraste maximal

### Focus states avec Tailwind

```tsx
// Focus visible global
<button className="
  focus:outline-none
  focus-visible:ring-2
  focus-visible:ring-primary
  focus-visible:ring-offset-2
  focus-visible:rounded
">
  Bouton accessible
</button>
```

Configuration globale dans `tailwind.css` :
```css
@layer base {
  *:focus-visible {
    @apply outline-none ring-2 ring-primary ring-offset-2 rounded;
  }
}
```

---

## 7. Animation et transitions

### Configuration Tailwind CSS v4

```css
@theme {
  /* Durées de transition */
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;

  /* Easing curves */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
}
```

### Classes Tailwind pour Transitions

```tsx
// Hover avec transition
<button className="
  transition-all duration-300
  hover:bg-primary-dark hover:-translate-y-1
">
  Bouton animé
</button>

// Transitions spécifiques
<div className="transition-colors duration-300">Couleurs uniquement</div>
<div className="transition-transform duration-500">Transform uniquement</div>

// Easing personnalisé
<div className="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
  Custom easing
</div>
```

### Applications
- **Hover** : `transition-all duration-300`
- **Apparitions** : Fade-in avec `animate-fade-in` (custom)
- **Scroll** : `scroll-smooth` sur `<html>`
- **Interactions** : `transition-colors duration-150` pour feedback immédiat

### Animations subtiles recommandées

```css
/* styles/tailwind.css */
@layer utilities {
  /* Fade in au scroll */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }
}
```

Usage :
```tsx
<div className="animate-fade-in-up">
  Contenu qui apparaît en douceur
</div>
```

---

## 8. Responsive breakpoints

### Breakpoints Tailwind CSS (par défaut)

```css
/* Tailwind breakpoints (mobile-first) */
sm:  640px   /* Tablettes portrait */
md:  768px   /* Tablettes paysage */
lg:  1024px  /* Desktop */
xl:  1280px  /* Grands écrans */
2xl: 1536px  /* Très grands écrans */
```

### Configuration personnalisée (optionnel)

```css
/* styles/tailwind.css */
@theme {
  --breakpoint-mobile: 320px;
  --breakpoint-tablet: 640px;
  --breakpoint-desktop: 1024px;
  --breakpoint-wide: 1280px;
}
```

### Usage des breakpoints

```tsx
// Mobile-first (défaut < 640px, puis sm:, md:, lg:, xl:)
<div className="
  text-sm           /* Mobile: 14px */
  md:text-base      /* Tablet: 16px */
  lg:text-lg        /* Desktop: 18px */
">
  Texte responsive
</div>

// Grid responsive
<div className="
  grid
  grid-cols-1       /* Mobile: 1 colonne */
  md:grid-cols-2    /* Tablet: 2 colonnes */
  lg:grid-cols-3    /* Desktop: 3 colonnes */
  gap-6
">
  Cards responsive
</div>

// Padding responsive
<section className="
  px-4 py-8         /* Mobile: 16px / 32px */
  md:px-6 md:py-12  /* Tablet: 24px / 48px */
  lg:px-8 lg:py-16  /* Desktop: 32px / 64px */
">
  Section adaptative
</section>
```

### Stratégie responsive
1. **Design mobile-first** : Styles de base pour mobile, préfixes `md:` `lg:` pour écrans plus larges
2. **Points de rupture majeurs** : `md:640px` (tablet), `lg:1024px` (desktop)
3. **Images responsive** : `srcset` + `aspect-ratio` pour optimiser le chargement
4. **Navigation** : Menu hamburger `lg:hidden`, menu horizontal `hidden lg:flex`
5. **Grilles** : `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## 9. Iconographie

### Source recommandée
- **Heroicons** (outline style) : Style minimaliste et doux
- **Taille** : 24px standard, 20px dans le texte, 32px pour hero
- **Couleur** : Hériter de la couleur du texte parent

### Usage
- **Navigation** : Icônes optionnelles, toujours avec label
- **Prestations** : Icône distinctive par service
- **Contact** : Téléphone, email, localisation
- **Réseaux sociaux** : Si présents

---

## 10. Photographie et médias

### Style photographique
- **Ambiance** : Douce, naturelle, lumineuse
- **Palette** : Tons chauds, verts naturels, beiges
- **Sujets** : Gros plans de soins, environnement apaisant, nature
- **Éviter** : Images cliniques, froides, trop médicales

### Spécifications techniques
```css
/* Formats d'images */
--image-hero: 1920x1080px (16:9)
--image-card: 800x600px (4:3)
--image-portrait: 600x750px (4:5)

/* Optimisation */
Format: WebP avec fallback JPG
Compression: 80-85% qualité
Lazy loading: Actif sur toutes les images hors viewport initial
```

---

## 11. Contenu textuel

### Ton et style
- **Voix** : Chaleureuse, professionnelle, rassurante
- **Vouvoiement** : Ton respectueux et bienveillant
- **Phrases** : Courtes et claires (15-20 mots max)
- **Paragraphes** : 3-4 lignes maximum

### Structure de page type
1. **Hero** : Titre principal + sous-titre + CTA
2. **Introduction** : 2-3 paragraphes maximum
3. **Contenu principal** : Sections alternées image/texte
4. **Prestations** : Grille de cartes
5. **Appel à l'action** : Section dédiée avant footer
6. **Footer** : Contact, horaires, liens utiles

---

## 12. Performance

### Objectifs
- **First Contentful Paint** : < 1.8s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **Time to Interactive** : < 3.8s

### Bonnes pratiques
- Images optimisées et lazy-loaded
- CSS critique inline
- Fonts chargées avec `font-display: swap`
- JavaScript minimal et différé
- Pas de dépendances inutiles

---

## 13. SEO et métadonnées

### Structure sémantique
```html
<header> - Navigation principale
<main> - Contenu principal unique par page
<article> - Prestations, articles
<section> - Blocs de contenu thématiques
<aside> - Informations complémentaires
<footer> - Pied de page
```

### Métadonnées requises
```html
<title>Page Title - Darshan</title>
<meta name="description" content="150-160 caractères">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<link rel="icon" type="image/svg+xml" href="images/favicon.svg">
```

---

## 14. Architecture des Composants React + Tailwind

### Philosophie : Composants réutilisables

**Principe :** Créer des **composants React TypeScript réutilisables** avec Tailwind, **pas des classes CSS globales**.

✅ **Faire :**
- Composants React avec props et variants
- Classes Tailwind directement dans les composants
- Type-safety avec TypeScript

❌ **Ne pas faire :**
- Classes CSS globales avec `@layer components`
- Répéter les mêmes classes partout
- Mixte CSS Modules + Tailwind

### Structure des composants

```
components/
├── ui/                     # Composants réutilisables génériques
│   ├── Button.tsx          # Boutons avec variants
│   ├── Card.tsx            # Cards réutilisables
│   ├── Container.tsx       # Wrapper de contenu
│   ├── Section.tsx         # Sections de page
│   ├── Input.tsx           # Champs de formulaire
│   └── Link.tsx            # Liens stylisés
├── Header.tsx              # Composants spécifiques au site
├── Footer.tsx
├── Hero.tsx
└── ...
```

### Exemples de composants réutilisables

#### Button Component

```tsx
// components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-3.5 text-base font-medium rounded-lg min-h-[48px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5",
    secondary: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

**Usage :**
```tsx
<Button variant="primary" onClick={() => {}}>Réserver</Button>
<Button variant="secondary">En savoir plus</Button>
<Button variant="primary" className="w-full">Pleine largeur</Button>
```

#### Card Component

```tsx
// components/ui/Card.tsx
interface CardProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  className = ''
}: CardProps) {
  const content = (
    <>
      {image && (
        <img
          src={image}
          alt={imageAlt || title}
          className="rounded-lg w-full aspect-[4/5] object-cover mb-4"
        />
      )}
      <h3 className="text-2xl font-headings text-black mb-2">
        {title}
      </h3>
      <p className="text-dark-gray leading-relaxed">
        {description}
      </p>
    </>
  );

  const cardClasses = `
    bg-white rounded-xl p-6 shadow-md
    transition-all duration-300
    hover:shadow-lg hover:-translate-y-1
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={cardClasses}>
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
```

**Usage :**
```tsx
<Card
  title="Hydrothérapie"
  description="Soins aquatiques apaisants..."
  image="/images/hydro.jpg"
  imageAlt="Séance d'hydrothérapie"
/>
```

#### Container Component

```tsx
// components/ui/Container.tsx
interface ContainerProps {
  maxWidth?: 'full' | 'text' | 'default';
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  maxWidth = 'default',
  children,
  className = ''
}: ContainerProps) {
  const widths = {
    default: 'max-w-[1200px]',
    text: 'max-w-3xl',
    full: 'max-w-full'
  };

  return (
    <div className={`${widths[maxWidth]} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
```

**Usage :**
```tsx
<Container>Contenu 1200px</Container>
<Container maxWidth="text">Texte optimisé lecture</Container>
```

#### Section Component

```tsx
// components/ui/Section.tsx
interface SectionProps {
  variant?: 'default' | 'white';
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  variant = 'default',
  children,
  className = ''
}: SectionProps) {
  const bgColor = variant === 'white' ? 'bg-white' : 'bg-off-white';

  return (
    <section className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}
```

**Usage :**
```tsx
<Section>
  <h2>Titre section</h2>
  <p>Contenu...</p>
</Section>

<Section variant="white">
  <h2>Section fond blanc</h2>
</Section>
```

### Utilitaire pour classes conditionnelles (optionnel)

Pour gérer proprement les classes conditionnelles :

```bash
npm install clsx tailwind-merge
```

```tsx
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Usage dans Button amélioré :**
```tsx
import { cn } from '@/lib/utils';

export default function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-8 py-3.5 text-base font-medium rounded-lg min-h-[48px]",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        variant === 'primary' && "bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5",
        variant === 'secondary' && "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
        className
      )}
      {...props}
    />
  );
}
```

---

## 15. Instructions spécifiques pour Claude Code

### Lors de la création de composants

1. **Toujours créer des composants React réutilisables** dans `components/ui/`
2. **Palette de couleurs** : Utiliser les classes `bg-primary`, `text-secondary`, etc.
3. **Espacement** : Classes `p-6`, `mb-4`, `gap-8` (système 8px via Tailwind)
4. **Typographie responsive** : `text-3xl md:text-5xl`, `font-headings`, `font-logo`
5. **Accessibilité** : Toujours ajouter `focus-visible:ring-2 focus-visible:ring-primary`
6. **Hover states** : `hover:bg-primary-dark transition-all duration-300`
7. **Mobile-first** : Classes de base pour mobile, préfixes `md:` `lg:` pour desktop
8. **TypeScript** : Toujours typer les props avec des interfaces

### Lors de la création de pages

1. **Utiliser les composants UI** : `<Container>`, `<Section>`, `<Button>`, `<Card>`
2. **Structure sémantique** : `<header>`, `<main>`, `<section>`, `<footer>`
3. **Sections alternées** : `<Section>` et `<Section variant="white">`
4. **Grilles responsive** : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
5. **Images** : `aspect-video`, `aspect-[4/5]`, toujours avec `alt` text
6. **Pas de répétition** : Si tu écris les mêmes classes 2+ fois, crée un composant

### Exemple de page complète avec composants

```tsx
// pages/services.tsx
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  const services = [
    {
      title: 'Hydrothérapie',
      description: 'Soins aquatiques apaisants pour le corps et l\'esprit',
      image: '/images/hydro.jpg'
    },
    // ...
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section>
        <div className="text-center">
          <h1 className="text-5xl font-headings text-black mb-4">
            Nos Services
          </h1>
          <p className="text-gray max-w-2xl mx-auto mb-8">
            Découvrez notre gamme de soins de bien-être
          </p>
          <Button variant="primary">Réserver une séance</Button>
        </div>
      </Section>

      {/* Services Grid */}
      <Section variant="white">
        <h2 className="text-4xl font-headings text-black text-center mb-12">
          Nos Prestations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.title}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container maxWidth="text" className="text-center">
          <h2 className="text-3xl font-headings text-black mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-dark-gray mb-6">
            Réservez votre première séance dès aujourd'hui
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary">Réserver</Button>
            <Button variant="secondary">Nous contacter</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
```

### Règles d'or

1. **DRY (Don't Repeat Yourself)** : Si tu copies les mêmes classes → crée un composant
2. **Composants UI génériques** : Dans `components/ui/`, réutilisables partout
3. **Props TypeScript** : Toujours typer les props avec `interface`
4. **Variants** : Utiliser des props `variant` plutôt que des classes conditionnelles complexes
5. **className override** : Toujours permettre `className` pour ajustements ponctuels
6. **Accessibilité** : Focus states, alt text, ARIA labels quand nécessaire

### Checklist avant validation

- [ ] **Couleurs** : `bg-primary`, `bg-secondary`, `text-primary` (or + bleu nuit)
- [ ] **Polices** : `font-logo` (Medula One), `font-headings` (Libre Baskerville), `font-body` (Outfit)
- [ ] **Espacement** : Classes Tailwind cohérentes (`p-6`, `mb-4`, `gap-8`)
- [ ] **Contraste WCAG AA** : Noir (`text-black`) pour titres, or uniquement sur bleu
- [ ] **Header** : `bg-secondary`, logo `text-primary`, nom "DARSHAN" en `font-logo`
- [ ] **Responsive** : Mobile-first avec `md:` et `lg:` breakpoints
- [ ] **Images** : `alt` text + `aspect-ratio` approprié
- [ ] **Accessibilité clavier** : `focus-visible:ring-2` sur éléments interactifs
- [ ] **Animations** : `transition-all duration-300` sur hover
- [ ] **Layout** : Pas d'espace vide inutile, contenu centré avec `mx-auto`

---

**Version** : 2.0 (Tailwind CSS v4)
**Date de création** : Octobre 2025
**Dernière mise à jour** : Janvier 2025
**Stack** : Next.js 15 + Tailwind CSS v4 + TypeScript