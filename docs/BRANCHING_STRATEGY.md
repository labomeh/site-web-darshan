# Stratégie de branches Git - Darshan

## 🎯 Objectif

Maintenir un historique Git **linéaire** et **lisible** avec une stratégie de rebase systématique.

---

## 🌳 Structure des branches

```
main (production)
  ↑
staging (préproduction)
  ↑
  ├── feature/nom-feature
  ├── fix/nom-bug
  └── hotfix/nom-urgence
```

### **Branches principales (longue durée)**

- **`main`** : Production, toujours stable et déployée
  - URL : https://centre-darshan.netlify.app
  - SEO : Indexé
  - Deploy : Auto à chaque push

- **`staging`** : Préproduction, environnement de test
  - URL : https://staging--centre-darshan.netlify.app
  - SEO : Non indexé (`X-Robots-Tag: noindex`)
  - Deploy : Auto à chaque push

### **Branches temporaires (courte durée)**

- **`feature/xxx`** : Nouvelles fonctionnalités
- **`fix/xxx`** : Corrections de bugs
- **`hotfix/xxx`** : Corrections urgentes en production

**Important :** Ces branches sont **supprimées** après merge.

---

## 🔄 Workflow avec rebase (Historique linéaire)

### **1. Créer une feature**

```bash
# Depuis staging
git checkout staging
git pull origin staging
git checkout -b feature/events-page
```

### **2. Développer**

```bash
git add .
git commit -m "feat: Add events page structure"
git commit -m "feat: Add EventCard component"
git commit -m "style: Update events layout"

# Backup cloud (optionnel)
git push origin feature/events-page
```

### **3. Rebase avant merge (OBLIGATOIRE)**

```bash
# Récupérer les derniers changements de staging
git checkout staging
git pull origin staging

# Rebase la feature SUR staging
git checkout feature/events-page
git rebase staging

# Si conflits : résoudre puis
git add .
git rebase --continue

# Si rebase trop compliqué : annuler
git rebase --abort
```

### **4. Merger avec fast-forward (linéaire)**

```bash
git checkout staging
git merge feature/events-page --ff-only
# --ff-only refuse le merge si pas de fast-forward possible
# → Force un historique linéaire

git push origin staging
# → Deploy auto sur preprod
```

### **5. Tester en préproduction**

Accéder à https://staging--centre-darshan.netlify.app et valider.

Si bug trouvé :
```bash
git checkout staging
git add .
git commit -m "fix: Correct events date parsing"
git push origin staging
```

### **6. Deploy en production**

```bash
git checkout main
git pull origin main
git merge staging --ff-only
git push origin main
# → Deploy auto sur prod
```

### **7. Nettoyer**

```bash
# Supprimer la feature branch (local)
git branch -d feature/events-page

# Supprimer la feature branch (remote)
git push origin --delete feature/events-page
```

---

## 📊 Comparaison historique

### **Avec merge classique (branches croisées) :**

```
* Merge branch 'staging'
|\
| * Merge branch 'feature/events'
| |\
| | * feat: Add events API
| | * feat: Add events page
| |/
| * Previous commit
|/
* Previous main commit
```

❌ Difficile à lire, plein de merge commits

### **Avec rebase + fast-forward (linéaire) :**

```
* (main, staging) feat: Add events API integration
* feat: Add events page structure
* feat: Add EventCard component
* Previous commit
* Initial commit
```

✅ Histoire claire, facile à lire avec `git log --oneline`

---

## 🎯 Règles d'or

### **✅ À FAIRE**

1. **Toujours rebase avant de merger**
   ```bash
   git checkout feature/xxx
   git rebase staging
   git checkout staging
   git merge feature/xxx --ff-only
   ```

2. **Utiliser `--force-with-lease` après rebase**
   ```bash
   git push origin feature/xxx --force-with-lease
   ```

3. **Commits atomiques et clairs**
   ```bash
   git commit -m "feat: Add events page"  # ✅ Clair
   git commit -m "WIP"                    # ❌ À éviter
   ```

4. **Tester en staging avant prod**
   - Ne jamais merger directement sur `main`
   - Toujours passer par `staging` pour validation

### **❌ À NE PAS FAIRE**

1. **Ne JAMAIS rebase `main`**
   ```bash
   git checkout main
   git rebase staging  # ❌ INTERDIT (réécrit l'historique public)
   ```

2. **Ne pas forcer sans `--force-with-lease`**
   ```bash
   git push --force  # ❌ Dangereux
   git push --force-with-lease  # ✅ Sécurisé
   ```

3. **Ne pas merger sans rebase**
   ```bash
   git merge feature/xxx  # ❌ Crée un merge commit
   git rebase staging && git merge feature/xxx --ff-only  # ✅ Linéaire
   ```

4. **Ne pas commiter du code non testé sur staging**
   - `staging` doit toujours être dans un état **déployable**

---

## 🔧 Configuration Git recommandée

```bash
# Toujours rebase lors d'un pull (évite merge commits)
git config pull.rebase true

# Rebase automatique des branches locales
git config branch.autoSetupRebase always

# Autostash pendant rebase (sauvegarde les changements non commités)
git config rebase.autoStash true

# Activer couleurs pour faciliter lecture
git config --global color.ui auto
```

---

## 🚨 Gestion des conflits pendant rebase

Si un conflit apparaît lors du rebase :

```bash
git rebase staging
# CONFLICT (content): Merge conflict in pages/index.tsx

# 1. Ouvrir et résoudre manuellement
code pages/index.tsx

# 2. Marquer comme résolu
git add pages/index.tsx

# 3. Continuer le rebase
git rebase --continue

# OU annuler si trop compliqué
git rebase --abort
```

---

## 📝 Commandes rapides (Cheat sheet)

```bash
# Créer feature
git checkout staging && git pull && git checkout -b feature/nom

# Rebase feature sur staging
git checkout feature/nom && git rebase staging

# Merger feature (linéaire)
git checkout staging && git merge feature/nom --ff-only && git push origin staging

# Deploy staging → main
git checkout main && git merge staging --ff-only && git push origin main

# Force push sécurisé après rebase
git push origin feature/nom --force-with-lease

# Supprimer feature (local + remote)
git branch -d feature/nom && git push origin --delete feature/nom

# Annuler rebase en cours
git rebase --abort

# Voir historique linéaire
git log --oneline --graph
```

---

## 🎯 Exemple complet : Ajouter page événements

```bash
# Jour 1 : Créer feature
git checkout staging && git pull
git checkout -b feature/events-page

# Développer
git add pages/evenements.tsx
git commit -m "feat: Add events page structure"
git add components/EventCard.tsx
git commit -m "feat: Add EventCard component"
git push origin feature/events-page  # Backup

# Jour 2 : Staging a avancé, mettre à jour
git checkout staging && git pull
git checkout feature/events-page
git rebase staging  # Résoudre conflits si nécessaire
git push origin feature/events-page --force-with-lease

# Jour 3 : Feature terminée, merger
git checkout staging && git pull
git checkout feature/events-page
git rebase staging
git checkout staging
git merge feature/events-page --ff-only
git push origin staging
# → Tester sur https://staging--centre-darshan.netlify.app

# Jour 4 : Validé, deploy prod
git checkout main && git pull
git merge staging --ff-only
git push origin main
# → Deploy sur https://centre-darshan.netlify.app

# Nettoyer
git branch -d feature/events-page
git push origin --delete feature/events-page
```

---

## 📚 Ressources

- **Pourquoi rebase ?** [Atlassian Git Rebase Tutorial](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
- **Git Flow vs Trunk Based** [Martin Fowler](https://martinfowler.com/bliki/FeatureBranch.html)
- **Commit conventions** [Conventional Commits](https://www.conventionalcommits.org/)

---

**Date de création :** 12 octobre 2025
**Version :** 1.0
**Auteur :** Configuration pour projet Darshan
