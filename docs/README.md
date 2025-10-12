# Documentation - Site Darshan

Cette documentation couvre tous les aspects du projet Next.js du site Darshan.

---

## 📚 Index de la documentation

| Fichier | Description | Pour qui ? |
|---------|-------------|-----------|
| [**DESIGN_SYSTEM.md**](DESIGN_SYSTEM.md) | Design tokens, couleurs, typographie, composants | Développeurs, designers |
| [**BRANCHING_STRATEGY.md**](BRANCHING_STRATEGY.md) | Stratégie Git Flow avec rebase, workflow complet | Développeurs |
| [**GIT_ALIASES.md**](GIT_ALIASES.md) | Guide des alias Git automatisés | Développeurs |

---

## 🎨 Design System

**Fichier :** [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)

Documentation complète du design system :
- Design tokens (couleurs, typographie, espacements)
- Système de grilles et breakpoints responsive
- Composants UI avec exemples de code
- Guidelines d'utilisation
- Checklist de validation

**⚠️ Important :** Toute modification de styles doit être conforme au design system.

---

## 🌳 Workflow Git

**Fichiers :**
- [`BRANCHING_STRATEGY.md`](BRANCHING_STRATEGY.md) - Stratégie détaillée
- [`GIT_ALIASES.md`](GIT_ALIASES.md) - Guide des commandes automatisées

Le projet utilise **Git Flow avec rebase** pour un historique linéaire.

### Commandes rapides

```bash
# Créer une feature
git new-feature events-page

# Merger dans staging
git finish

# Déployer en production
git deploy-prod
```

**Voir la documentation complète** pour :
- Règles de rebase
- Gestion des conflits
- Workflow complet
- Exemples d'usage

## 🔗 Liens rapides

### Documentation projet
- [`/README.md`](../README.md) - Vue d'ensemble du projet
- [`/CLAUDE.md`](../CLAUDE.md) - Instructions pour Claude Code

### Configuration
- [`/netlify.toml`](../netlify.toml) - Configuration Netlify
- [`/.git-aliases.sh`](../.git-aliases.sh) - Alias Git automatisés
- [`/next.config.ts`](../next.config.ts) - Configuration Next.js

### Styles
- [`/styles/tokens.css`](../styles/tokens.css) - Design tokens (CSS Variables)
- [`/styles/global.css`](../styles/global.css) - Styles globaux

---

## 🆘 Besoin d'aide ?

1. **Pour le design** → Consulter [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)
2. **Pour Git** → Consulter [BRANCHING_STRATEGY.md](BRANCHING_STRATEGY.md) ou [GIT_ALIASES.md](GIT_ALIASES.md)
3. **Pour comprendre l'architecture** → Consulter [/CLAUDE.md](../CLAUDE.md)

---

**Dernière mise à jour :** Octobre 2025
