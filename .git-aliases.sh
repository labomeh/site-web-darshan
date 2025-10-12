#!/bin/bash
# Git Aliases pour workflow Git Flow avec Rebase
# Installation : source .git-aliases.sh
# Ou ajouter à ~/.bashrc : source /chemin/vers/.git-aliases.sh

# === CRÉATION DE FEATURES ===

# Créer une nouvelle feature depuis staging
# Usage: git new-feature nom-de-la-feature
git config alias.new-feature '!f() {
    git checkout staging &&
    git pull origin staging &&
    git checkout -b feature/$1;
}; f'

# Créer un nouveau fix depuis staging
# Usage: git new-fix nom-du-bug
git config alias.new-fix '!f() {
    git checkout staging &&
    git pull origin staging &&
    git checkout -b fix/$1;
}; f'

# === MISE À JOUR ===

# Mettre à jour la branche courante avec staging (rebase)
# Usage: git update-from-staging
git config alias.update-from-staging '!f() {
    BRANCH=$(git branch --show-current);
    git checkout staging &&
    git pull origin staging &&
    git checkout $BRANCH &&
    git rebase staging;
}; f'

# === MERGE DANS STAGING ===

# Rebase + merge dans staging (historique linéaire)
# Usage: git ship-to-staging
git config alias.ship-to-staging '!f() {
    BRANCH=$(git branch --show-current);
    if [ "$BRANCH" = "staging" ] || [ "$BRANCH" = "main" ]; then
        echo "❌ Erreur: Vous êtes sur $BRANCH. Utilisez cette commande depuis une feature/fix branch.";
        exit 1;
    fi;
    echo "📦 Shipping $BRANCH to staging...";
    git checkout staging &&
    git pull origin staging &&
    git checkout $BRANCH &&
    echo "🔄 Rebasing $BRANCH on staging..." &&
    git rebase staging &&
    echo "✅ Rebase successful. Merging into staging..." &&
    git checkout staging &&
    git merge $BRANCH --ff-only &&
    echo "🚀 Pushing to staging..." &&
    git push origin staging &&
    echo "✅ $BRANCH shipped to staging successfully!" &&
    echo "🔗 Preview: https://staging--centre-darshan.netlify.app";
}; f'

# === DEPLOY EN PRODUCTION ===

# Merger staging dans main (production)
# Usage: git deploy-prod
git config alias.deploy-prod '!f() {
    BRANCH=$(git branch --show-current);
    if [ "$BRANCH" != "staging" ]; then
        echo "❌ Erreur: Vous devez être sur staging pour déployer en prod.";
        echo "   Lancez: git checkout staging";
        exit 1;
    fi;
    echo "🚀 Deploying staging to production...";
    git checkout main &&
    git pull origin main &&
    git merge staging --ff-only &&
    git push origin main &&
    echo "✅ Production deployed successfully!" &&
    echo "🔗 Live: https://centre-darshan.netlify.app";
}; f'

# === NETTOYAGE ===

# Supprimer une feature/fix branch (local + remote)
# Usage: git cleanup nom-de-la-branch
git config alias.cleanup '!f() {
    git branch -d $1 2>/dev/null || git branch -D $1;
    git push origin --delete $1 2>/dev/null || echo "Remote branch already deleted or does not exist";
    echo "✅ Branch $1 cleaned up";
}; f'

# Supprimer la branche courante (après merge)
# Usage: git cleanup-current
git config alias.cleanup-current '!f() {
    BRANCH=$(git branch --show-current);
    if [ "$BRANCH" = "staging" ] || [ "$BRANCH" = "main" ]; then
        echo "❌ Erreur: Ne peut pas supprimer $BRANCH (branche protégée)";
        exit 1;
    fi;
    echo "🗑️  Cleaning up $BRANCH...";
    git checkout staging &&
    git branch -d $BRANCH 2>/dev/null || git branch -D $BRANCH;
    git push origin --delete $BRANCH 2>/dev/null || echo "Remote branch already deleted";
    echo "✅ $BRANCH cleaned up, now on staging";
}; f'

# === WORKFLOW COMPLET ===

# Workflow complet : rebase + merge + cleanup
# Usage: git finish
git config alias.finish '!f() {
    BRANCH=$(git branch --show-current);
    if [ "$BRANCH" = "staging" ] || [ "$BRANCH" = "main" ]; then
        echo "❌ Erreur: Vous êtes sur $BRANCH. Utilisez cette commande depuis une feature/fix branch.";
        exit 1;
    fi;
    echo "🎯 Finishing $BRANCH...";
    git ship-to-staging &&
    echo "🗑️  Cleaning up $BRANCH..." &&
    git branch -d $BRANCH &&
    git push origin --delete $BRANCH 2>/dev/null || echo "Remote branch already deleted" &&
    echo "✅ $BRANCH finished and cleaned up!" &&
    echo "📍 You are now on staging";
}; f'

# === UTILITAIRES ===

# Voir l'historique linéaire avec graph (quitter avec 'q', ou CTRL+C si --no-pager)
# Usage: git tree [nombre de commits, défaut: 20]
git config alias.tree '!f() {
    LIMIT=${1:-20};
    git --no-pager log --oneline --graph --decorate --all -n $LIMIT;
}; f'

# Voir l'historique complet avec pager (quitter avec 'q')
# Usage: git tree-all
git config alias.tree-all 'log --oneline --graph --decorate --all'

# Voir l'historique de la branche courante uniquement
# Usage: git history [nombre de commits, défaut: 20]
git config alias.history '!f() {
    LIMIT=${1:-20};
    git --no-pager log --oneline --graph --decorate -n $LIMIT;
}; f'

# Status avec branches
# Usage: git st
git config alias.st 'status -sb'

# Annuler le dernier commit (garde les changements)
# Usage: git undo
git config alias.undo 'reset HEAD~1 --soft'

# Force push sécurisé (après rebase)
# Usage: git pushf
git config alias.pushf 'push --force-with-lease'

echo "✅ Git aliases configured successfully!"
echo ""
echo "📚 Available commands:"
echo "   git new-feature <name>     - Create new feature branch"
echo "   git new-fix <name>         - Create new fix branch"
echo "   git update-from-staging    - Rebase current branch on staging"
echo "   git ship-to-staging        - Rebase + merge into staging"
echo "   git deploy-prod            - Deploy staging to production"
echo "   git finish                 - Ship + cleanup current branch"
echo "   git cleanup <branch>       - Delete branch (local + remote)"
echo "   git cleanup-current        - Delete current branch and switch to staging"
echo "   git tree                   - Show full history graph"
echo "   git history                - Show current branch history"
echo "   git st                     - Status with branches"
echo "   git undo                   - Undo last commit (keep changes)"
echo "   git pushf                  - Force push (safe)"
