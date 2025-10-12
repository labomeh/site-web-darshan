# Checklist de déploiement - Darshan Next.js

## ✅ Prérequis (Complétés)

- [x] Build Next.js réussit sans erreurs
- [x] Export statique génère `out/` correctement
- [x] 4 pages HTML générées : `/`, `/contact`, `/mentions-legales`, `/404`
- [x] Assets copiés : images, videos, admin
- [x] Netlify configuré (`netlify.toml`)
- [x] Documentation à jour (`CLAUDE.md`, `MIGRATION_NEXTJS.md`)

## 📋 Déploiement sur Netlify

### Étape 1 : Commit et push

```bash
# Vérifier l'état
git status

# Ajouter tous les changements
git add .

# Créer le commit
git commit -m "Migration Next.js complète - Version minimale déployable"

# Pousser sur la branche
git push origin NEXT-JS-MIGRATION
```

### Étape 2 : Configuration Netlify

**Via l'interface Netlify :**

1. **Build settings**
   - Base directory: *(laisser vide - projet à la racine)*
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Deploy settings**
   - Branch: `NEXT-JS-MIGRATION` (ou `main` après merge)
   - Node version: 18 ou supérieur

### Étape 3 : Variables d'environnement (si nécessaire)

Aucune variable d'environnement requise pour le moment.

### Étape 4 : Lancer le déploiement

1. Push sur GitHub déclenchera automatiquement le build Netlify
2. Attendre la fin du build (2-3 minutes)
3. Vérifier le deploy preview

## ✅ Tests post-déploiement

### Tests fonctionnels

- [ ] Site accessible sur l'URL Netlify
- [ ] Page d'accueil `/` s'affiche correctement
- [ ] Hero avec vidéo fonctionne
- [ ] Navigation Header/Footer fonctionnelle
- [ ] Page `/contact` accessible
- [ ] Page `/mentions-legales` accessible
- [ ] Page `/404` s'affiche pour les URLs inexistantes
- [ ] Menu mobile fonctionne (< 768px)
- [ ] Logo et images chargent correctement
- [ ] Vidéo hero charge

### Tests responsive

- [ ] Desktop (> 1024px)
- [ ] Tablet (640px - 1024px)
- [ ] Mobile (< 640px)

### Tests navigateurs

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (si possible)

### Performance (optionnel)

- [ ] Lighthouse Performance > 80
- [ ] First Contentful Paint < 2s
- [ ] Pas d'erreurs console

## 🔧 CMS Decap (À activer plus tard)

**Infrastructure prête :**
- [x] Dossier `/admin` présent dans `out/`
- [x] Configuration `config.yml` en place
- [x] Netlify Identity widget chargé

**Activation différée :**
- [ ] Activer Netlify Identity sur le site
- [ ] Configurer Git Gateway
- [ ] Inviter utilisateur admin
- [ ] Tester création d'événement (quand page `/evenements` sera prête)

## 🚨 Rollback en cas de problème

Si le déploiement échoue :

1. Vérifier les logs Netlify
2. Si erreur de build :
   ```bash
   cd darshan-nextjs
   npm run build
   ```
3. Si besoin de rollback :
   - Via Netlify : Deploys → [ancien deploy] → "Publish deploy"
   - Via Git : `git revert HEAD` puis push

## 📊 Monitoring post-déploiement

**À surveiller les premiers jours :**
- Temps de chargement
- Erreurs JavaScript (console)
- Feedback utilisateurs
- Analytics (si configuré)

## 🎯 Prochaines étapes (après déploiement)

1. Tester le site en production
2. Merger `NEXT-JS-MIGRATION` vers `main` si tout OK
3. Planifier l'ajout de `/evenements` et `/services`
4. Activer CMS Decap pour gestion des événements
5. Ajouter animations au scroll
6. Optimiser images si nécessaire

---

## 📝 Commandes rapides

**Build local :**
```bash
npm run build
```

**Test du build :**
```bash
npx serve out
# Ouvre http://localhost:3000
```

**Deploy preview Netlify :**
```bash
git push origin NEXT-JS-MIGRATION
# Attendre le build Netlify
```

---

**Version actuelle :** MVP avec 3 pages (Accueil, Contact, Mentions légales)
**Status :** ✅ Prêt pour déploiement
**Date :** 12 octobre 2025
