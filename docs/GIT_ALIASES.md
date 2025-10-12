# Git Aliases - Automatisation du workflow

Ce projet utilise des **Git aliases** pour simplifier le workflow Git Flow avec rebase.

---

## 🚀 Installation (déjà fait)

Les aliases sont déjà configurés dans ce projet. Pour les réinstaller :

```bash
bash .git-aliases.sh
```

---

## 📚 Commandes disponibles

### **🆕 Créer une nouvelle branche**

```bash
# Créer une feature depuis staging
git new-feature events-page
# → Crée et switch sur feature/events-page depuis staging

# Créer un fix depuis staging
git new-fix menu-mobile
# → Crée et switch sur fix/menu-mobile depuis staging
```

**Équivalent manuel :**
```bash
git checkout staging
git pull origin staging
git checkout -b feature/events-page
```

---

### **🔄 Mettre à jour une branche**

```bash
# Mettre à jour la branche courante avec les derniers changements de staging
git update-from-staging
# → Rebase automatique sur staging
```

**Équivalent manuel :**
```bash
BRANCH=$(git branch --show-current)
git checkout staging
git pull origin staging
git checkout $BRANCH
git rebase staging
```

---

### **📦 Merger dans staging (préproduction)**

```bash
# Depuis ta feature/fix branch
git ship-to-staging
# → Rebase automatique + merge dans staging + push
# → Deploy auto sur https://staging--centre-darshan.netlify.app
```

**Ce que ça fait :**
1. Récupère les derniers changements de staging
2. Rebase ta branche sur staging
3. Merge avec `--ff-only` (historique linéaire)
4. Push sur origin staging
5. Affiche l'URL de préproduction

**Équivalent manuel :**
```bash
BRANCH=$(git branch --show-current)
git checkout staging
git pull origin staging
git checkout $BRANCH
git rebase staging
git checkout staging
git merge $BRANCH --ff-only
git push origin staging
```

---

### **🚀 Déployer en production**

```bash
# Depuis staging (après avoir testé en preprod)
git checkout staging
git deploy-prod
# → Merge staging dans main + push
# → Deploy auto sur https://centre-darshan.netlify.app
```

**Ce que ça fait :**
1. Vérifie que tu es sur staging
2. Récupère les derniers changements de main
3. Merge staging dans main avec `--ff-only`
4. Push sur origin main
5. Affiche l'URL de production

**Équivalent manuel :**
```bash
git checkout main
git pull origin main
git merge staging --ff-only
git push origin main
```

---

### **🗑️ Nettoyer les branches**

```bash
# Supprimer une branche spécifique (local + remote)
git cleanup feature/events-page

# Supprimer la branche courante (après merge)
git cleanup-current
# → Supprime la branche, revient sur staging
```

**Équivalent manuel :**
```bash
git branch -d feature/events-page
git push origin --delete feature/events-page
```

---

### **🎯 Workflow complet (recommandé)**

```bash
# Finir une feature : ship + cleanup automatique
git finish
# → ship-to-staging + cleanup-current en une commande
```

**Ce que ça fait :**
1. Rebase ta branche sur staging
2. Merge dans staging avec `--ff-only`
3. Push sur origin staging
4. Supprime la branche (local + remote)
5. Te place sur staging

---

### **🔍 Utilitaires**

```bash
# Voir l'historique linéaire avec toutes les branches
git tree

# Voir l'historique de la branche courante uniquement
git history

# Status court avec branches
git st

# Annuler le dernier commit (garde les changements)
git undo

# Force push sécurisé (après rebase)
git pushf
```

---

## 🎯 Exemples d'usage réel

### **Exemple 1 : Ajouter la page événements**

```bash
# 1. Créer la feature
git new-feature events-page
# → feature/events-page créée depuis staging

# 2. Développer
# ... coder ...
git add .
git commit -m "feat: Add events page structure"
git commit -m "feat: Add EventCard component"

# 3. Merger dans staging et tester
git finish
# → Rebase + merge + cleanup automatique
# → Tester sur https://staging--centre-darshan.netlify.app

# 4. Déployer en prod (si OK)
git deploy-prod
# → Deploy sur https://centre-darshan.netlify.app
```

**Total : 3 commandes au lieu de 15+ !**

---

### **Exemple 2 : Corriger un bug urgent**

```bash
# 1. Créer le fix
git new-fix menu-mobile

# 2. Corriger
# ... fix ...
git add .
git commit -m "fix: Correct mobile menu toggle"

# 3. Ship + cleanup
git finish

# 4. Deploy prod immédiatement
git deploy-prod
```

---

### **Exemple 3 : Travailler sur plusieurs features en parallèle**

```bash
# Feature 1 : Events
git new-feature events-page
# ... dev ...
git add . && git commit -m "feat: Add events page"
git push origin feature/events-page  # Backup cloud

# Passer à Feature 2 : Services (sans finir events)
git new-feature services-page
# ... dev ...
git add . && git commit -m "feat: Add services page"

# Finir services d'abord
git finish  # → services mergé dans staging

# Retourner sur events
git checkout feature/events-page
git update-from-staging  # Mettre à jour avec staging (inclut services)
# ... finir ...
git finish  # → events mergé dans staging

# Deploy tout en prod
git deploy-prod
```

---

## 🚨 Gestion des erreurs

### **Erreur : "not possible to fast-forward"**

```bash
git ship-to-staging
# ❌ fatal: Not possible to fast-forward, aborting.
```

**Cause :** Ta branche n'est pas à jour avec staging.

**Solution :**
```bash
git update-from-staging  # Rebase sur staging
git ship-to-staging      # Réessayer
```

---

### **Erreur : Conflits pendant rebase**

```bash
git update-from-staging
# CONFLICT (content): Merge conflict in pages/index.tsx
```

**Solution :**
```bash
# 1. Résoudre les conflits manuellement
code pages/index.tsx

# 2. Marquer comme résolu
git add pages/index.tsx

# 3. Continuer le rebase
git rebase --continue

# OU annuler
git rebase --abort
```

---

### **Erreur : "Vous êtes sur staging"**

```bash
git finish
# ❌ Erreur: Vous êtes sur staging. Utilisez cette commande depuis une feature/fix branch.
```

**Cause :** `git finish` ne fonctionne que depuis une feature/fix branch.

**Solution :**
- Si tu veux déployer staging → main : `git deploy-prod`
- Si tu veux créer une nouvelle feature : `git new-feature xxx`

---

## 📊 Comparaison avant/après

### **Avant (manuel) :**

```bash
# Créer feature : 3 commandes
git checkout staging
git pull origin staging
git checkout -b feature/events

# Merger dans staging : 6 commandes
BRANCH=$(git branch --show-current)
git checkout staging
git pull origin staging
git checkout $BRANCH
git rebase staging
git checkout staging
git merge $BRANCH --ff-only
git push origin staging

# Cleanup : 3 commandes
git branch -d feature/events
git push origin --delete feature/events

# Deploy prod : 4 commandes
git checkout main
git pull origin main
git merge staging --ff-only
git push origin main

# TOTAL : 16 commandes
```

### **Après (alias) :**

```bash
git new-feature events   # Créer
git finish               # Merger + cleanup
git deploy-prod          # Deploy prod

# TOTAL : 3 commandes
```

**Gain : 80% de commandes en moins !**

---

## 🔧 Configuration avancée (optionnel)

### **Ajouter au ~/.bashrc pour tous les projets**

Si tu veux ces aliases sur **tous** tes projets Git :

```bash
# Ouvrir ~/.bashrc
nano ~/.bashrc

# Ajouter à la fin
source ~/Documents/projets/site-web-darshan/.git-aliases.sh

# Recharger
source ~/.bashrc
```

### **Personnaliser les alias**

Tu peux modifier `.git-aliases.sh` et relancer :

```bash
bash .git-aliases.sh
```

---

## 🎯 Workflow recommandé avec aliases

```
1. git new-feature xxx     → Créer feature
2. ... développer ...
3. git finish              → Ship to staging + cleanup
4. Tester preprod
5. git deploy-prod         → Deploy production
```

**Simple, rapide, linéaire !**

---

## 📚 Ressources

- **Documentation complète :** `BRANCHING_STRATEGY.md`
- **Fichier d'aliases :** `.git-aliases.sh`
- **Netlify config :** `netlify.toml`

---

**Date de création :** 12 octobre 2025
**Version :** 1.0
