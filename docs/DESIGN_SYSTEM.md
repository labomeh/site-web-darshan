# Design System - Darshan

## Vue d'ensemble
Site vitrine pour Darshan, centre de bien-être et d'hydrothérapie. Le design reflète les valeurs spirituelles, de soin naturel, bien-être, douceur et sérénité.

---

## 1. Palette de couleurs

### Couleurs principales
```css
--primary: #C9A961        /* Or spirituel - Couleur du logo, lumière, éveil */
--primary-light: #D4B87A  /* Variante claire (accent) */
--primary-dark: #B08F40   /* Variante foncée */

--secondary: #0A1E2E      /* Bleu nuit profond - Fond du logo, méditation, profondeur */
--secondary-light: #1A3A4F
--secondary-dark: #051119

--accent: #D4B87A         /* Or clair - Version plus claire de la primaire */
--accent-light: #E5D1B3
--accent-dark: #C9A961
```

### Couleurs neutres
```css
--white: #FFFFFF
--off-white: #FAF9F7      /* Fond principal - doux pour les yeux */
--light-gray: #E8E6E3     /* Bordures, séparateurs */
--gray: #B5B3B0           /* Texte secondaire */
--dark-gray: #4A4A4A      /* Texte principal */
--black: #2C2C2C          /* Titres, éléments importants */
```

### Couleurs sémantiques
```css
--success: #7A9B76        /* Harmonisé avec la palette */
--info: #8B9DAB
--warning: #C9A66B
--error: #A67B75
```

### Utilisation des couleurs (Optimisée pour l'accessibilité WCAG AA)

#### Header et Navigation
- **Header** : Fond `--secondary` (bleu nuit #0A1E2E)
- **Logo** : SVG coloré en `--primary` (or #C9A961)
- **Nom "DARSHAN"** : Police Medula One, couleur `--primary` (or)
- **Liens navigation** : `--off-white` (texte clair), soulignement `--primary` au hover/active
- **Contraste** : Or sur bleu = 8.5:1 ✅ WCAG AAA

#### Titres et Textes
- **Tous les titres (H1-H6)** : `--black` (#2C2C2C) - contraste maximal
- **Accent doré** : Ligne décorative de 3px en `--primary` sous les H2
- **Texte courant** : `--dark-gray`
- **Texte secondaire/légendes** : `--gray`
- **Contraste** : Noir sur off-white = 14.8:1 ✅ WCAG AAA

#### Boutons et CTA
- **Boutons primaires** : Fond `--primary` (or), texte `--secondary` (bleu) - contraste 8.5:1 ✅
- **Boutons secondaires** : Fond `--secondary` (bleu), texte `--primary` (or) - contraste 8.5:1 ✅
- **CTA Section** : Fond dégradé bleu, bouton or avec texte bleu

#### Autres éléments
- **Footer** : Fond `--secondary`, texte `--off-white`, liens `--primary`
- **Sections alternées** : `--off-white` et `--white`
- **Or utilisé uniquement** : Sur fond bleu foncé, en accents/bordures, jamais sur fond blanc

---

## 2. Typographie

### Famille de polices

#### Police de logo et d'identité
```css
--font-logo: 'Medula One', serif;
/* Utilisée pour : Logo, nom "Darshan", éléments d'identité visuelle */
```

#### Police de titres
```css
--font-headings: 'Libre Baskerville', serif;
/* Utilisée pour : Tous les titres (H1 à H6), sous-titres importants */
```

#### Police de texte
```css
--font-body: 'Outfit', sans-serif;
/* Utilisée pour : Texte courant, paragraphes, navigation, boutons */
```

### Hiérarchie typographique

#### Desktop (>1024px)
```css
--h1-size: 48px;
--h1-weight: 300;        /* Light */
--h1-line-height: 1.2;
--h1-letter-spacing: -0.5px;

--h2-size: 36px;
--h2-weight: 400;        /* Regular */
--h2-line-height: 1.3;
--h2-letter-spacing: -0.25px;

--h3-size: 28px;
--h3-weight: 500;        /* Medium */
--h3-line-height: 1.4;

--h4-size: 22px;
--h4-weight: 500;
--h4-line-height: 1.4;

--h5-size: 18px;
--h5-weight: 500;
--h5-line-height: 1.5;

--h6-size: 16px;
--h6-weight: 600;        /* Semi-bold */
--h6-line-height: 1.5;

--body-size: 16px;
--body-weight: 400;
--body-line-height: 1.7;

--small-size: 14px;
--small-weight: 400;
--small-line-height: 1.6;
```

#### Tablet (640px - 1024px)
```css
--h1-size: 40px;
--h2-size: 32px;
--h3-size: 24px;
--h4-size: 20px;
--h5-size: 17px;
--h6-size: 16px;
--body-size: 16px;
--small-size: 14px;
```

#### Mobile (<640px)
```css
--h1-size: 32px;
--h2-size: 26px;
--h3-size: 22px;
--h4-size: 18px;
--h5-size: 16px;
--h6-size: 15px;
--body-size: 15px;
--small-size: 13px;
```

### Règles typographiques
- **Paragraphes** : Marge inférieure de 1.5em
- **Largeur maximale du texte** : 70 caractères (≈700px) pour une lecture optimale
- **Texte important** : Utiliser `font-weight: 500` plutôt que du gras total
- **Citations** : Italic, `--accent` pour la bordure gauche

---

## 3. Espacement

### Système d'espacement basé sur 8px
```css
--space-xs: 4px;      /* Espaces très serrés */
--space-sm: 8px;      /* Espaces internes petits */
--space-md: 16px;     /* Espacement standard */
--space-lg: 24px;     /* Entre sections de contenu */
--space-xl: 32px;     /* Entre blocs importants */
--space-2xl: 48px;    /* Entre sections majeures */
--space-3xl: 64px;    /* Espacements hero/header */
--space-4xl: 96px;    /* Marges de page desktop */
```

### Application
- **Padding des sections** : `--space-2xl` (mobile: `--space-xl`)
- **Margin entre sections** : `--space-3xl` (mobile: `--space-2xl`)
- **Padding des cartes** : `--space-lg`
- **Espacement entre paragraphes** : `--space-lg`
- **Espacement entre titre et texte** : `--space-md`

---

## 4. Mise en page (Layout)

### Conteneur principal
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

/* Tablet */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
    padding: 0 var(--space-md);
  }
}

/* Mobile */
@media (max-width: 640px) {
  .container {
    padding: 0 var(--space-md);
  }
}
```

### Grille
```css
.grid {
  display: grid;
  gap: var(--space-lg);
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

/* Responsive */
@media (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
```

### Règles de contenu
- **Largeur de contenu textuel** : Maximum 800px centré
- **Largeur d'image pleine** : Toute la largeur du conteneur (1200px max)
- **Pas de colonnes vides** : Le contenu doit utiliser tout l'espace disponible
- **Images** : Toujours accompagnées de texte, jamais seules dans une section

---

## 5. Composants

### Boutons

#### Bouton primaire
```css
.btn-primary {
  background: var(--primary);
  color: var(--white);
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 48px; /* Accessibilité tactile */
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 157, 131, 0.3);
}
```

#### Bouton secondaire
```css
.btn-secondary {
  background: transparent;
  color: var(--primary);
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border: 2px solid var(--primary);
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 48px;
}

.btn-secondary:hover {
  background: var(--primary);
  color: var(--white);
}
```

### Cartes (Cards)
```css
.card {
  background: var(--white);
  border-radius: 12px;
  padding: var(--space-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.card-image {
  border-radius: 8px;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: var(--space-md);
}

.card-title {
  font-size: var(--h4-size);
  font-weight: 500;
  color: var(--black);
  margin-bottom: var(--space-sm);
}

.card-description {
  color: var(--dark-gray);
  line-height: 1.7;
}
```

### Images

#### Ratio et dimensions
```css
/* Image hero/bannière */
.hero-image {
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 16px;
}

/* Image de contenu */
.content-image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

/* Image portrait (pour les prestations) */
.portrait-image {
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 12px;
}
```

#### Position des images
- **Hero** : Pleine largeur, centrée
- **Contenu alterné** : Image à gauche/droite avec texte adjacent
- **Grilles de prestations** : Images en haut de carte
- **Toujours** : Alt text descriptif pour l'accessibilité

### Navigation
```css
.nav {
  background: var(--white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: var(--space-md) 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-link {
  color: var(--dark-gray);
  font-weight: 500;
  padding: var(--space-sm) var(--space-md);
  transition: color 0.3s ease;
  min-height: 44px; /* Touch target */
  display: inline-flex;
  align-items: center;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary);
}
```

### Footer
```css
.footer {
  background: var(--secondary);
  color: var(--white);
  padding: var(--space-3xl) 0 var(--space-xl);
}

.footer-link {
  color: var(--off-white);
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--white);
}
```

### Sections
```css
.section {
  padding: var(--space-3xl) 0;
}

.section-alt {
  background: var(--white);
  padding: var(--space-3xl) 0;
}

.section-title {
  text-align: center;
  margin-bottom: var(--space-2xl);
  color: var(--black);
}

.section-subtitle {
  text-align: center;
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto var(--space-2xl);
}
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

### Focus states
```css
*:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## 7. Animation et transitions

### Durées standard
```css
--transition-fast: 0.15s;
--transition-base: 0.3s;
--transition-slow: 0.5s;
```

### Easing
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

### Applications
- **Hover** : `transition: all 0.3s ease`
- **Apparitions** : Fade-in subtil, pas de mouvements brusques
- **Scroll** : Smooth scroll sur toute la page
- **Interactions** : Feedback visuel immédiat (<0.15s)

### Animations subtiles recommandées
```css
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

.fade-in {
  animation: fadeInUp 0.6s ease-out;
}
```

---

## 8. Responsive breakpoints

```css
/* Mobile first approach */
--mobile: 320px;      /* Minimum supporté */
--mobile-lg: 480px;   /* Grands mobiles */
--tablet: 640px;      /* Tablettes portrait */
--tablet-lg: 1024px;  /* Tablettes paysage */
--desktop: 1280px;    /* Desktop standard */
--desktop-lg: 1536px; /* Grands écrans */
```

### Stratégie responsive
1. **Design mobile-first** : Commencer par mobile, enrichir pour desktop
2. **Points de rupture majeurs** : 640px (tablet), 1024px (desktop)
3. **Images responsive** : Utiliser srcset pour optimiser le chargement
4. **Navigation** : Menu hamburger < 1024px, menu horizontal > 1024px
5. **Grilles** : 1 colonne mobile, 2-3 colonnes desktop

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

## 14. Instructions spécifiques pour Claude Code

### Lors de la création de composants
1. Respecter strictement la palette de couleurs définie
2. Utiliser le système d'espacement (multiples de 8px)
3. Appliquer les tailles de police responsive
4. Vérifier les contrastes pour l'accessibilité
5. Ajouter les états hover/focus sur tous les éléments interactifs
6. Utiliser des transitions douces (0.3s ease)

### Lors de la création de pages
1. Commencer par une structure sémantique HTML5
2. Alterner sections claires et blanches
3. Centrer le contenu textuel (max 800px)
4. Maximiser l'utilisation de l'espace (pas de vides inutiles)
5. Images toujours accompagnées de texte
6. Suivre la hiérarchie typographique H1 > H2 > H3

### Checklist avant validation
- [ ] Palette de couleurs respectée (or + bleu nuit)
- [ ] Typographie : Medula One (logo), Libre Baskerville (titres), Outfit (texte)
- [ ] Espacement cohérent (système 8px)
- [ ] Contrastes WCAG AA validés (noir pour titres, or uniquement sur bleu)
- [ ] Header : Fond bleu, logo or, nom "DARSHAN" en or
- [ ] Responsive fonctionnel (mobile, tablet, desktop)
- [ ] Images optimisées avec alt text
- [ ] Navigation clavier fonctionnelle
- [ ] Pas d'espace vide inutile au centre
- [ ] Accents dorés utilisés avec parcimonie (lignes décoratives, bordures)

---

**Version** : 1.0  
**Date de création** : Octobre 2025  
**Dernière mise à jour** : Octobre 2025