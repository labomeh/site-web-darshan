# Site Darshan - Centre de Bien-être et Hydrothérapie

Site web pour Darshan, centre de bien-être et d'hydrothérapie à Saint-Gingolph (Haute-Savoie).

## 🌐 Sites en ligne

- **Production :** [https://centre-darshan.netlify.app](https://centre-darshan.netlify.app)
- **Préproduction :** [https://staging--centre-darshan.netlify.app](https://staging--centre-darshan.netlify.app)

---

## 🏗️ Stack technique

- **Framework :** [Next.js 15](https://nextjs.org/) (Pages Router) avec TypeScript
- **Styling :** CSS Modules + CSS Variables (Design Tokens)
- **CMS :** [Decap CMS](https://decapcms.org/) pour la gestion de contenu
- **Hosting :** [Netlify](https://www.netlify.com/) avec déploiement automatique
- **Export :** Site statique (SSG) via `output: 'export'`

---

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
# Ouvre http://localhost:3000
```

### Build

```bash
npm run build
# Génère le site statique dans /out
```

### Preview du build

```bash
npx serve out
# Ouvre http://localhost:3000
```

---

## 📂 Structure du projet

```
site-web-darshan/
├── pages/              # Pages Next.js
│   ├── index.tsx       # Page d'accueil
│   ├── contact.tsx     # Page contact
│   └── mentions-legales.tsx
├── components/         # Composants React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ui/             # Composants UI génériques
├── styles/             # Styles globaux
│   ├── tokens.css      # Design tokens (couleurs, typo, spacing)
│   └── global.css      # Styles de base
├── public/             # Assets statiques
│   ├── images/
│   ├── videos/
│   └── admin/          # Decap CMS config
├── docs/               # Documentation
│   ├── DESIGN_SYSTEM.md
│   ├── BRANCHING_STRATEGY.md
│   ├── GIT_ALIASES.md
│   └── DEPLOIEMENT.md
├── .git-aliases.sh     # Alias Git automatisés
└── netlify.toml        # Configuration Netlify
```

---

## ⚠️ IMPORTANT pour les développeurs et Claude Code

**Ce projet suit un design system strict défini dans `/docs/DESIGN_SYSTEM.md`.**

### Règles de développement

- ✅ TOUJOURS consulter `/docs/DESIGN_SYSTEM.md` avant toute modification
- ❌ JAMAIS modifier le design system sans approbation explicite
- 🔍 En cas de doute, demander confirmation avant de dévier du design system
- 📋 Utiliser la checklist de validation avant chaque commit

Toute modification des couleurs, typographie, espacements ou composants DOIT être conforme au design system.

---

## 🔀 Workflow Git

Ce projet utilise **Git Flow avec rebase** pour un historique linéaire.

### Commandes rapides (alias Git)

```bash
# Créer une nouvelle feature
git new-feature events-page

# Développer...
git add .
git commit -m "feat: Add events page"

# Merger dans staging (preprod)
git finish

# Déployer en production
git deploy-prod
```

**Documentation complète :** [`/docs/BRANCHING_STRATEGY.md`](docs/BRANCHING_STRATEGY.md) et [`/docs/GIT_ALIASES.md`](docs/GIT_ALIASES.md)

---

## 📚 Documentation

| Fichier | Description |
|---------|-------------|
| [`CLAUDE.md`](CLAUDE.md) | Instructions pour Claude Code |
| [`/docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) | Design tokens et composants |
| [`/docs/BRANCHING_STRATEGY.md`](docs/BRANCHING_STRATEGY.md) | Stratégie Git Flow avec rebase |
| [`/docs/GIT_ALIASES.md`](docs/GIT_ALIASES.md) | Guide des alias Git automatisés |

---

## 🎨 Design System

Le projet utilise un design system basé sur des **CSS Custom Properties** (variables CSS) définies dans `styles/tokens.css`.

### Design Tokens principaux

```css
/* Couleurs */
--primary: #C9A961;        /* Or - Identité visuelle */
--secondary: #0A1E2E;      /* Bleu marine foncé */
--accent: #E8F4F8;         /* Bleu clair */

/* Typographie */
--font-logo: 'Medula One', serif;
--font-headings: 'Libre Baskerville', serif;
--font-body: 'Outfit', sans-serif;

/* Spacing (système 8px) */
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
```

**Voir la documentation complète :** [`/docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)

---

## 🎯 Pages actuelles

- ✅ **Page d'accueil** (`/`) - Hero avec vidéo, présentation
- ✅ **Contact** (`/contact`) - Formulaire et informations
- ✅ **Mentions légales** (`/mentions-legales`)
- ✅ **404** - Page d'erreur personnalisée

### Prochaines pages (à venir)

- 🔜 **Événements** (`/evenements`) - Liste dynamique via Decap CMS
- 🔜 **Services** (`/services`) - Détails des prestations

---

## 🔧 Configuration Netlify

### Build settings

```toml
[build]
command = "npm run build"
publish = "out"
```

### Environnements

- **Production :** Branche `main` (indexée par SEO)
- **Préproduction :** Branche `staging` (noindex)

---

## 🧪 Scripts npm

```bash
npm run dev       # Serveur de développement (port 3000)
npm run build     # Build production dans /out
npm run lint      # Linter ESLint
```

---

## 📦 CMS Decap (Netlify CMS)

Le CMS est configuré dans `public/admin/config.yml` pour gérer les événements.

### Accès au CMS

1. Activer **Netlify Identity** sur le site
2. Configurer **Git Gateway**
3. Inviter les utilisateurs admin
4. Accéder à `/admin` sur le site déployé

**Note :** Le CMS est configuré mais non activé pour l'instant (à activer après le premier déploiement).

---

## 🤝 Contribution

Pour contribuer au projet :

1. Créer une feature branch depuis `staging` : `git new-feature ma-feature`
2. Développer en respectant le design system
3. Merger dans `staging` : `git finish`
4. Tester en préproduction
5. Déployer en production : `git deploy-prod`

**Voir le workflow détaillé :** [`/docs/BRANCHING_STRATEGY.md`](docs/BRANCHING_STRATEGY.md)

---

## 📝 Historique du projet

- **Octobre 2025 :** Migration de vanilla HTML/CSS vers Next.js 15
- **Architecture :** CSS Modules avec design tokens pour préserver l'identité visuelle
- **Export :** Site statique (SSG) pour performance optimale sur Netlify

---

## 📄 Licence

Tous droits réservés - Darshan Centre de Bien-être

---

**Dernière mise à jour :** Octobre 2025
