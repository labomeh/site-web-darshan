# Sveltia CMS - Guide d'utilisation

Ce projet utilise **Sveltia CMS**, un CMS moderne et open-source compatible avec Decap CMS (anciennement Netlify CMS).

---

## 🎯 Accès au CMS

### En local (développement)

1. **Démarrer le serveur local CMS** (dans un terminal) :
   ```bash
   npm run cms
   ```

2. **Démarrer Next.js** (dans un autre terminal) :
   ```bash
   npm run dev
   ```

3. **Accéder au CMS** :
   - Ouvrir http://localhost:3000/admin
   - **Aucune authentification requise** en local
   - Les modifications sont sauvegardées directement dans Git

### En production (Netlify)

1. Accéder à https://centre-darshan.netlify.app/admin
2. Se connecter avec **Netlify Identity**
3. Les modifications créent des commits GitHub automatiquement

---

## 📁 Collections disponibles

### Événements
Gérer les événements et ateliers :
- Titre, dates (début/fin)
- Description courte + contenu détaillé (Markdown)
- Image, lieu, prix
- Places disponibles, lien d'inscription
- Statut publié/brouillon

**Fichiers créés dans :** `content/events/`

### Services
Gérer les services proposés (pour usage futur) :
- Titre, description, contenu (Markdown)
- Image, durée, prix
- Ordre d'affichage
- Statut publié/brouillon

**Fichiers créés dans :** `content/services/`

---

## 🖼️ Images

Les images uploadées via le CMS sont automatiquement sauvegardées dans :
- **Dossier :** `public/images/uploads/`
- **URL publique :** `/images/uploads/nom-de-limage.jpg`

---

## ⚙️ Configuration

### Fichier de configuration
`public/admin/config.yml` contient toute la configuration du CMS :
- Backend (GitHub)
- Collections (types de contenu)
- Champs personnalisés
- Paramètres régionaux (français)

### Backend GitHub
Pour utiliser GitHub en production, **mettre à jour** dans `config.yml` :

```yaml
backend:
  repo: VOTRE_NOM_UTILISATEUR/site-web-darshan
```

Remplacer `VOTRE_NOM_UTILISATEUR` par votre username GitHub.

---

## 🔧 Mode local (détails techniques)

Le mode local utilise `local_backend: true` dans la config.

**Comment ça marche :**
1. `npm run cms` lance `@sveltia/cms-auth` sur le port 8080
2. Le CMS lit/écrit directement dans votre dépôt Git local
3. Aucune connexion GitHub/Netlify requise
4. Les modifications créent des commits locaux

**Commiter vos changements :**
```bash
git add .
git commit -m "feat: Add new event via CMS"
git push
```

---

## 🚀 Déploiement en production

### Configuration Netlify

1. **Activer Netlify Identity** :
   - Site settings → Identity → Enable Identity

2. **Configurer Git Gateway** :
   - Identity → Services → Git Gateway → Enable

3. **Inviter des utilisateurs** :
   - Identity → Invite users
   - Les utilisateurs reçoivent un email d'invitation

### Configuration GitHub

Le backend GitHub nécessite :
- Un dépôt GitHub public ou privé
- Les permissions d'écriture pour les utilisateurs du CMS
- Netlify connecté au dépôt

---

## 📝 Workflow de contenu

### Créer un événement

1. Aller dans **Événements** → **Nouveau**
2. Remplir les champs :
   - Titre (requis)
   - Date de début (requis)
   - Date de fin (optionnel)
   - Description courte (optionnel, pour les listes)
   - Contenu détaillé (requis, supporte Markdown)
   - Image, lieu, prix, places, lien inscription (optionnels)
3. Cocher **Publié** pour rendre visible
4. Cliquer **Publier**

### Éditer du contenu existant

1. Aller dans la collection (Événements/Services)
2. Cliquer sur l'élément à modifier
3. Faire les modifications
4. Cliquer **Publier**

### Prévisualiser (local)

En mode local, les modifications sont **instantanées** :
- Rafraîchir la page Next.js pour voir les changements
- Les fichiers Markdown sont mis à jour immédiatement

---

## 🆘 Dépannage

### Le CMS ne s'affiche pas
- Vérifier que `npm run dev` est lancé
- Aller sur http://localhost:3000/admin (pas /admin/)
- Ouvrir la console navigateur pour voir les erreurs

### "local_backend not working"
- Vérifier que `npm run cms` est en cours d'exécution
- Le port 8080 doit être disponible
- Redémarrer les deux serveurs (CMS + Next.js)

### Images ne s'affichent pas
- Vérifier le chemin : `/images/uploads/nom-fichier.jpg`
- Les images doivent être dans `public/images/uploads/`
- Rafraîchir le cache navigateur (Ctrl+F5)

### En production : "Unable to access"
- Vérifier que Netlify Identity est activé
- Vérifier que Git Gateway est configuré
- Vérifier le `repo` dans `config.yml`

---

## 📚 Ressources

- **Documentation Sveltia CMS** : https://github.com/sveltia/sveltia-cms
- **Markdown Guide** : https://www.markdownguide.org/basic-syntax/
- **Netlify Identity** : https://docs.netlify.com/visitor-access/identity/

---

## 🔄 Migration depuis Decap CMS

Sveltia CMS est **100% compatible** avec Decap CMS :
- Même format de configuration (`config.yml`)
- Même structure de contenu (fichiers Markdown)
- Même workflow Git
- **Bonus** : Interface plus moderne, meilleure performance, support mobile

Aucune migration nécessaire - juste changer le script dans `/admin`.
