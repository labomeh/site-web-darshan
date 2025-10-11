# Structure du site - Darshan

## Guide de formatage du document

Ce document décrit la structure et l'organisation des pages du site. Il sert de référence pour maintenir et faire évoluer le site de manière cohérente.

### Comment utiliser ce document

#### 1. Référencement des couleurs
Utiliser les variables du Design System avec la notation suivante :
- `[PRIMARY]` → Or spirituel (`--primary: #C9A961`)
- `[SECONDARY]` → Bleu nuit profond (`--secondary: #0A1E2E`)
- `[ACCENT]` → Or clair (`--accent: #D4B87A`)
- `[OFF-WHITE]` → Fond principal (`--off-white: #FAF9F7`)
- `[WHITE]` → Blanc pur (`--white: #FFFFFF`)
- `[BLACK]` → Noir pour titres (`--black: #2C2C2C`)
- `[DARK-GRAY]` → Texte principal (`--dark-gray: #4A4A4A`)
- `[GRAY]` → Texte secondaire (`--gray: #B5B3B0`)

#### 2. Espacement
Utiliser le système d'espacement basé sur 8px :
- `[SPACE-XS]` → 4px
- `[SPACE-SM]` → 8px
- `[SPACE-MD]` → 16px
- `[SPACE-LG]` → 24px
- `[SPACE-XL]` → 32px
- `[SPACE-2XL]` → 48px
- `[SPACE-3XL]` → 64px
- `[SPACE-4XL]` → 96px

#### 3. Typographie
Références aux styles de titres et textes :
- `[H1]` → Titre principal (48px desktop, 32px mobile)
- `[H2]` → Titre de section (36px desktop, 26px mobile)
- `[H3]` → Sous-titre (28px desktop, 22px mobile)
- `[H4]` → Titre de carte (22px desktop, 18px mobile)
- `[BODY]` → Texte courant (16px desktop, 15px mobile)
- `[SMALL]` → Petit texte (14px desktop, 13px mobile)

#### 4. Structure des blocs

##### Bloc standard
```
[SECTION]
  Fond: [OFF-WHITE] ou [WHITE]
  Padding: [SPACE-3XL] (desktop), [SPACE-2XL] (mobile)

  [CONTAINER] (max-width: 1200px)
    [H2] Titre de section
    [BODY] Description

    [CONTENT]
      Description du contenu...
```

##### Bloc Hero
```
[HERO]
  Fond: Image ou [PRIMARY]
  Hauteur: 60vh minimum

  [CONTAINER]
    [H1] Titre principal
    [BODY] Sous-titre
    [CTA] Bouton d'action
```

##### Bloc Grille
```
[GRID]
  Colonnes: 3 (desktop), 2 (tablet), 1 (mobile)
  Gap: [SPACE-LG]

  [CARD]
    [IMAGE] ratio 4:3
    [H4] Titre
    [BODY] Description
    [LINK] En savoir plus
```

#### 5. Composants interactifs
- `[BTN-PRIMARY]` → Bouton primaire (fond [PRIMARY], texte [WHITE])
- `[BTN-SECONDARY]` → Bouton secondaire (bordure [PRIMARY], fond transparent)
- `[CARD]` → Carte avec ombre et hover
- `[NAV]` → Navigation sticky
- `[FOOTER]` → Pied de page (fond [PRIMARY-DARK])

#### 6. Images
- `[IMG-HERO]` → 16:9 ratio, pleine largeur
- `[IMG-PORTRAIT]` → 4:5 ratio, pour services
- `[IMG-CONTENT]` → 4:3 ratio, dans contenu

---

## Pages du site

### 1. Page d'accueil (`index.html`)

#### Structure actuelle

**[HEADER]**
- Navigation sticky
- Fond: [SECONDARY] (bleu nuit)
- Logo: Image SVG [PRIMARY] (or) + Texte "DARSHAN" [PRIMARY] (Medula One)
- Menu: Accueil | Services | Événements | Contact
- Liens: [OFF-WHITE], hover/active [PRIMARY] avec soulignement

**[HERO]**
- Fond: Image (à définir)
- [H2] "Retrouvez votre bien-être intérieur"
- [BODY] "Hydrothérapie du côlon et soins holistiques à Saint-Gingolph, Haute-Savoie"

**[SECTION - Intro]**
- Fond: [OFF-WHITE]
- [H2] "Bienvenue"
- [BODY] Paragraphes de présentation
  - Accueil au cabinet à Saint-Gingolph
  - Hydrothérapie du côlon et massages ayurvédiques
  - Conseils thérapeutiques personnalisés

**[SECTION - À propos]**
- Fond: [WHITE]
- Layout: 2 colonnes (image + texte)
- [IMG-PORTRAIT] Photo de présentation
- [H2] "Mon parcours"
- [BODY] Description du parcours
  - Professionnelle de santé (20+ ans)
  - Formation infirmière et sage-femme
  - Découverte médecine ayurvédique en Inde
  - Formation Médecine de l'Âme, Énergétique, Méditations Tantriques

**[FOOTER]**
- Fond: [PRIMARY-DARK]
- Texte: [WHITE]
- Copyright: "© 2025 Darshan"
- Adresse: "21 Route de Chez Monnet, 74500 Saint-Gingolph"
- Lien: Mentions légales

---

### 2. Page Services (`services.html`)

#### Structure actuelle

**[HEADER]** - Identique à l'accueil

**[PAGE-HEADER]**
- Fond: [OFF-WHITE]
- [H2] "Nos Prestations"
- [BODY] "Des soins holistiques pour votre bien-être intérieur et extérieur"

**[SERVICES-NAV]** - Navigation des services
- Sticky sous le header
- 6 onglets avec icônes:
  - Hydrothérapie (icône: water)
  - Massage (icône: hands)
  - Méditation (icône: om)
  - Foie (icône: leaf)
  - Detox (icône: spa)
  - Jeûne (icône: mountain)

**[SECTION - Hydrothérapie du côlon]** `#hydrotherapie`
- Fond: [OFF-WHITE]
- Layout: Image + Texte (2 colonnes)
- [IMG-PORTRAIT] Image placeholder
- [H2] + Icône: "Hydrothérapie du Côlon"
- [SMALL] Sous-titre: "Une mesure d'hygiène et de prévention"
- [BODY] Description détaillée:
  - Procédé de nettoyage du gros intestin
  - Nettoyage doux avec eau tempérée
  - Déroulement de la séance
  - Anamnèse et préparation alimentaire

**[SECTION - Massage Ayurvédique]** `#massage`
- Fond: [WHITE]
- Layout: Image + Texte
- [IMG-PORTRAIT] Image placeholder
- [H2] + Icône: "Massage Ayurvédique"
- [SMALL] "Tradition millénaire de l'Inde"
- [BODY] Description:
  - Pratique ancestrale ayurvédique
  - Enseignement reçu en Inde
  - Détente profonde et élimination des toxines

**[SECTION - Méditation Tantrique]** `#meditation`
- Fond: [OFF-WHITE]
- Layout: Image + Texte
- [IMG-PORTRAIT] Image placeholder
- [H2] + Icône: "Méditation Tantrique"
- [SMALL] "Traditionnellement originaire de l'Inde, une démarche spirituelle"
- [BODY] Description:
  - Ateliers de méditation tantrique
  - Formation d'animatrice
  - Reconnexion corps-esprit

**[SECTION - Nettoyage du Foie]** `#foie`
- Fond: [WHITE]
- Layout: Image + Texte
- [IMG-PORTRAIT] Image placeholder
- [H2] + Icône: "Nettoyage du Foie"
- [SMALL] "Accompagnement sur 3 jours selon le protocole d'Andreas Moritz"
- [BODY] Description détaillée:
  - [H4] "Le protocole"
  - Préparation 6 jours
  - Jour 6: Détails du processus
  - Jour 7: Suite du protocole
  - Jour 8: Irrigation du côlon finale
  - [H4] "Les bienfaits"
  - Expérience corps-esprit
  - Libération des calculs
  - Accompagnement par méditations tantriques

**[SECTION - Trio de Soins Detox]** `#detox`
- Fond: [OFF-WHITE]
- Layout: Image + Texte
- [IMG-PORTRAIT] Image placeholder
- [H2] + Icône: "Trio de Soins Detox"
- [SMALL] Citation: "Fais du Bien à ton corps pour que ton Âme ait envie d'y rester." - Proverbe Indien
- [BODY] Description:
  - 3 espaces, 3 thérapeutes, 3 heures
  - [H4] "Le parcours"
  - Liste ordonnée des soins:
    1. Soin au Bol Kanzu (Réflexologie Plantaire)
    2. Massage Métamorphique
    3. Hydrothérapie ou Massage Abhyanga
  - Voyage complet de détoxification (3 heures)

**[SECTION - Stage de Jeûne]** `#jeune`
- Fond: [WHITE]
- Layout: Image + Texte
- [IMG-PORTRAIT] Image placeholder
- [H2] + Icône: "Stage de Jeûne"
- [SMALL] "Une semaine entre Lac et Montagnes"
- [BODY] Description:
  - Stage d'une semaine à Courchevel
  - Cadre entre lac et montagnes
  - Accompagnement personnalisé
  - [INFO-BOX] Lien vers page Événements pour les dates

**[CTA-SECTION]**
- Fond: [PRIMARY]
- [H3] "Intéressé par nos services ?"
- [BODY] "N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous"
- [BTN-PRIMARY] "Me contacter" → contact.html

**[FOOTER]** - Identique à l'accueil

---

### 3. Page Événements (`evenements.html`)

#### Structure actuelle

**[HEADER]** - Identique à l'accueil

**[PAGE-HEADER]**
- Fond: [OFF-WHITE]
- [H2] "Événements à venir"
- [BODY] "Rejoignez-nous pour nos prochains stages et ateliers"

**[SECTION - Liste des événements]**
- Fond: [WHITE]
- [CONTAINER]
  - `#events-container` - Conteneur dynamique
  - [GRID] - 3 colonnes (responsive)
  - Chargement via `js/events.js`
  - Source: Fichiers Markdown du dossier `_events/`
  - Filtrage: Événements à venir uniquement
  - Message de chargement: "Chargement des événements..."

**Champs des événements (frontmatter):**
- `title` - Titre de l'événement
- `date` - Date de l'événement
- `location` - Lieu
- `body` - Description (markdown)
- `image` - Image illustrative
- `available_spots` - Places disponibles
- `contact_info` - Informations de contact

**[FOOTER]** - Identique à l'accueil

---

### 4. Page Contact (`contact.html`)

#### Structure actuelle

**[HEADER]** - Identique à l'accueil

**[PAGE-HEADER]**
- Fond: [OFF-WHITE]
- [H2] "Contactez-moi"
- [BODY] "Pour toute question ou prise de rendez-vous"

**[SECTION - Contact]**
- Fond: [WHITE]
- Layout: 2 colonnes (infos + formulaire)

**Colonne 1 - Informations de contact:**

**[CARD] Adresse**
- Icône: 📍
- [H3] "Adresse"
- Cabinet de Saint-Gingolph
- 21 Route de Chez Monnet
- 74500 BRET - Saint-Gingolph
- France

**[CARD] Téléphone**
- Icône: 📞
- [H3] "Téléphone"
- Lien: `tel:+33621953168`
- Texte: "06 21 95 31 68"
- Couleur: [PRIMARY]

**[CARD] Email**
- Icône: 📧
- [H3] "Email"
- Lien: `mailto:contact@hydrotherapie-colon-savoie.fr`
- Couleur: [PRIMARY]

**[CARD] Horaires**
- Icône: 🕐
- [H3] "Horaires d'ouverture"
- Lundi - Samedi: 8h00 - 18h00
- Dimanche: Fermé
- Note: "Sur rendez-vous uniquement"

**Colonne 2 - Formulaire (placeholder):**
- [H3] "Écrire un message"
- Message: "Le formulaire de contact sera bientôt disponible"
- Champs désactivés:
  - Nom complet
  - Email
  - Téléphone
  - Message (textarea)
- Bouton désactivé: "Formulaire à venir"
- [INFO-BOX] avec liens de contact directs

**[SECTION - Carte]**
- Fond: [OFF-WHITE]
- [H3] "Localisation" (centré)
- Google Maps iframe
  - Source: Garnier Marie-Pierre, Saint-Gingolph
  - Dimensions: 100% × 400px
  - Border-radius: 10px

**[FOOTER]** - Identique à l'accueil

---

### 5. Page Mentions légales (`mentions-legales.html`)

#### Structure actuelle

**[HEADER]** - Identique à l'accueil

**[PAGE-HEADER]**
- Fond: [OFF-WHITE]
- [H2] "Mentions légales"

**[SECTION - Contenu légal]**
- Fond: [WHITE]
- Max-width: 800px (contenu textuel)

**[H3] Éditeur du site**
- Nom: Marie-Pierre Garnier
- ⚠️ SIRET: À renseigner (surlignage jaune)
- Adresse: 21 Route de Chez Monnet, 74500 Saint-Gingolph
- Contact:
  - Email: ⚠️ À renseigner
  - Téléphone: ⚠️ À renseigner

**[H3] Hébergement**
- Hébergeur: Netlify, Inc.
- Adresse: 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA
- Site web: netlify.com

**[H3] Propriété intellectuelle**
- Droits d'auteur et reproduction

**[H3] Données personnelles**
- Conformité RGPD
- Droits des utilisateurs
- Note: Pas de collecte de données via formulaires
- Netlify Identity uniquement pour l'admin

**[H3] Cookies**
- Pas de cookies de tracking
- Cookies techniques uniquement pour l'admin

**[FOOTER]** - Identique à l'accueil

---

## Éléments communs à toutes les pages

### Header (Navigation)
- Position: Sticky top
- Fond: [SECONDARY] (bleu nuit #0A1E2E)
- Box-shadow: 0 2px 8px rgba(0,0,0,0.06)
- Logo:
  - Image SVG (logo.svg) colorée en [PRIMARY] (or)
  - Texte "DARSHAN" en [PRIMARY] (or) avec police Medula One
  - Disposition horizontale avec gap [SPACE-MD]
- Menu horizontal (desktop) / Hamburger (mobile < 1024px)
- Liens navigation: Texte [OFF-WHITE], soulignement [PRIMARY] au hover/active
- Menu mobile: Fond [SECONDARY] (même bleu que header)

### Footer
- Fond: [SECONDARY] (bleu nuit)
- Texte: [OFF-WHITE]
- Liens: [PRIMARY] (or), hover [PRIMARY-LIGHT]
- Padding: [SPACE-3XL] top, [SPACE-XL] bottom
- Contenu centré:
  - Copyright: "© 2025 Darshan"
  - Adresse: "21 Route de Chez Monnet, 74500 Saint-Gingolph"
  - Lien: "Mentions légales" en [PRIMARY]

### Scripts
- `js/main.js` - Fonctionnalités principales:
  - Menu mobile toggle
  - Animations fade-in au scroll (IntersectionObserver)
- `js/events.js` - Chargement dynamique des événements (page événements uniquement)
- Netlify Identity Widget - Toutes les pages

---

## Notes techniques

### CMS (Decap CMS)
- Admin: `/admin/index.html`
- Config: `/admin/config.yml`
- Backend: Git Gateway (Netlify)
- Collection: Events (`_events/*.md`)
- Authentification: Netlify Identity

### Événements
- Stockage: `/_events/` (fichiers Markdown)
- Chargement: GitHub API (repo public)
- Parsing: YAML frontmatter + Markdown body
- Filtrage: Événements futurs uniquement

### SEO
- Meta robots: `noindex, nofollow` (toutes les pages)
- Meta description personnalisée par page
- Favicon: `images/favicon.png`

---

**Version** : 1.0
**Date de création** : Octobre 2025
**Dernière mise à jour** : Octobre 2025
