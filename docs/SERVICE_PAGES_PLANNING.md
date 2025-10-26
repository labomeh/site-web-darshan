# Service Pages Planning Document

**Status:** Planning Phase - Awaiting User Approval
**Created:** January 2025
**Branch:** `feature/service-pages`

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Content Analysis](#content-analysis)
3. [Information Architecture](#information-architecture)
4. [Service Page Structure](#service-page-structure)
5. [CMS Configuration](#cms-configuration)
6. [Design & Layout Options](#design--layout-options)
7. [Homepage Integration](#homepage-integration)
8. [Implementation Roadmap](#implementation-roadmap)

---

## Executive Summary

### Problem Statement
The previous site (hydrotherapie-colon-savoie.com) mixed **practitioner information** with **service information**, creating confusion. We need to:
- Clearly separate practitioner bio/approach from service details
- Create dedicated service pages with comprehensive, well-researched content
- Enable CMS management for all dynamic content (services, events, pricing, testimonials)
- Support three special event types: Liver Cleansing, Detox Trio, Fasting Retreats

### Key Objectives
1. **Content Clarity**: Separate "who" (practitioner) from "what" (services)
2. **CMS-Driven**: All content manageable via Sveltia CMS
3. **SEO & Credibility**: Well-researched, referenced content
4. **Event Management**: Promote special workshops/retreats
5. **Pricing Flexibility**: Easy-to-update pricing structure
6. **Social Proof**: Testimonials/reviews on service pages

### ✅ Complete Information Received

**All pricing and service details are now fully defined:**

- ✅ **8 Core Services** identified with complete pricing structure (including 3 massage types)
- ✅ **Package Pricing** for 3 and 5-session bundles (savings clearly shown)
- ✅ **Trio de Soins Detox** composition clarified (Bol Kansu + Massage Métamorphique + Hydro = 260€)
- ✅ **Détox Foie/VB Weekend** structure defined (315€ all-inclusive weekend)
- ✅ **Meditation Retreats** pricing breakdown (weekly 10€, weekend 190€, 6-day 875€, New Year 605€)
- ✅ **Individual Services** with tiered pricing and savings
- ✅ **CMS Configuration** examples with real data

**Remaining decisions needed:**
- Layout choice (3 options provided)
- Pricing display strategy (hybrid recommended)
- Testimonials strategy (both locations recommended)

---

## Content Analysis

### Current Services (from old site + research)

#### 1. **Hydrothérapie du Côlon** (Colon Hydrotherapy)
- **Process**: Gentle colon irrigation (45-60 min, controlled water temperature, modern equipment)
- **Benefits**: digestive issues, constipation, toxin elimination, improved energy
- **Contraindications**: infections, perforations, recent surgery, active inflammation
- **Recommended frequency**: 3 sessions initially, then 2/year for maintenance
- **Pricing**:
  - Séance individuelle: 120€
  - 3 séances: 340€ (économie de 20€)
  - 5 séances: 550€ (économie de 50€)

#### 2. **Massage Ayurvédique** (Ayurvedic Massage)
- **Single service** (general Ayurvedic massage, type not specified)
- **Pricing**:
  - 1 séance: 100€
  - 3 séances: 280€ (économie de 20€)
  - 5 séances: 450€ (économie de 50€)

#### 3. **Massage Métamorphique** (Metamorphic Massage)
- **Energy massage** based on reflexology principles
- **Pricing**:
  - 1 séance: 80€
  - 3 séances: 220€ (économie de 20€)
  - 5 séances: 350€ (économie de 50€)

#### 4. **Bol Kansu** (Kansu Bowl Massage)
- **Ayurvedic foot massage** with brass bowl (balances fire element)
- **Pricing**:
  - 1 séance: 80€
  - 3 séances: 220€ (économie de 20€)
  - 5 séances: 350€ (économie de 50€)

#### 5. **Méditation Tantra de la Reconnaissance** (Tantric Meditation of Gratitude)
- **Format**: Weekly sessions + weekend workshops + multi-day retreats
- **Key message**: NOT erotic, deeply spiritual practice focused on chakra activation and gratitude
- **Pricing**:
  - Séance hebdomadaire: 10€/séance (1h30, 18h30-20h00)
  - Week-end: 190€ (samedi 14h-22h30 + dimanche 10h-18h)
  - Séminaire 6 jours: 875€ total (samedi 14h - vendredi 14h)
    - Inclus: 13 repas (195€) + 6 nuits (80€)
  - Séminaire Nouvel An: 605€ total (27/12/25 14h - 01/01/26)
    - Base: 390€ + nuits/repas: 215€

#### 6. **Nettoyage du Foie/Vésicule Biliaire** (Liver/Gallbladder Cleansing) - Andreas Moritz Method
- **Format**: Weekend retreat with comprehensive support
- **Protocol**: 7-day process (5 days prep + 2-day intensive weekend)
- **Requires**: malic acid, magnesium sulfate, olive oil, grapefruit juice
- **Benefits**: improved digestion, energy, skin clarity, gallstone elimination
- **Important**: Medical supervision recommended
- **Pricing Weekend Retreat**: 315€
  - Inclus: 2 hydrothérapies + 2 nuits + 3 repas + méditations guidées

#### 7. **Trio de Soins Detox** (Detox Care Trio)
- **Composition**: Bol Kansu + Massage Métamorphique + Hydrothérapie Côlon
- **Duration**: Full treatment (~2.5-3 hours total)
- **Benefits**: Complete detox experience combining reflexology, energy work, and colon cleansing
- **Pricing**: 260€ (package price)

#### 8. **Stage de Jeûne** (Fasting Retreat)
- **Current info**: Listed in events
- **Research found**:
  - Typical duration: 6-7 days (extendable to 10-14 days)
  - Accompaniment: FFJR-certified facilitators
  - Program: hiking, yoga, meditation, workshops, naturopathy
  - Buchinger method: 250 kcal/day (juices, broths, teas)

### Complete Pricing Overview

#### Individual Services

| Service | Single Session | 3 Sessions | 5 Sessions |
|---------|---------------|------------|------------|
| **Hydrothérapie Côlon** | 120€ | 340€ (-20€) | 550€ (-50€) |
| **Massage Ayurvédique** | 100€ | 280€ (-20€) | 450€ (-50€) |
| **Massage Métamorphique** | 80€ | 220€ (-20€) | 350€ (-50€) |
| **Bol Kansu** | 80€ | 220€ (-20€) | 350€ (-50€) |
| **Méditation hebdomadaire** | 10€ (1h30) | - | - |

#### Package Treatments

| Package | Price | Details |
|---------|-------|---------|
| **Trio de Soins Detox** | 260€ | Bol Kansu + Massage Métamorphique + Hydro |
| **Détox Foie/VB (Weekend)** | 315€ | 2 hydro + 2 nuits + 3 repas + méditations |

#### Meditation Retreats

| Format | Price | Dates/Duration | Included |
|--------|-------|----------------|----------|
| **Week-end Tantra** | 190€ | Sam 14h-22h30 + Dim 10h-18h | Sessions |
| **Séminaire 6 jours** | 875€ | Sam 14h - Ven 14h | 13 repas (195€) + 6 nuits (80€) |
| **Séminaire Nouvel An** | 605€ | 27/12/25 14h - 01/01/26 | Base 390€ + nuits/repas 215€ |

### Content Separation Strategy

**Practitioner Information** (About page - separate from services):
- Professional background (20+ years healthcare)
- Training (nurse, midwife, Ayurvedic studies in India)
- Philosophy & approach
- Continuing education (Soul Medicine, Energy Medicine, Tantric Meditation)

**Service Information** (Individual service pages):
- What it is (definition, origins if relevant)
- How it works (process, duration, equipment)
- Benefits (with realistic expectations)
- Contraindications & precautions
- Pricing (with package discounts clearly shown)
- FAQ specific to that service
- Related external resources (if relevant)

---

## Information Architecture

### Proposed Site Structure

```
Home
├── À Propos (About) - NEW PAGE
│   ├── Who is Marie-Pierre
│   ├── Professional background
│   ├── Philosophy & approach
│   └── Training & certifications
│
├── Services (Overview) - NEW PAGE
│   ├── Grid/list of all services
│   ├── Quick comparison
│   └── Call-to-action
│
├── Services (Individual Pages) - 6 PAGES
│   ├── /services/hydrotherapie-du-colon
│   ├── /services/massages
│   │   ├── Section: Massage Ayurvédique
│   │   ├── Section: Massage Métamorphique
│   │   └── Section: Bol Kansu
│   ├── /services/meditation-tantrique
│   ├── /services/nettoyage-du-foie
│   ├── /services/trio-de-soins-detox
│   └── /services/stage-de-jeune
│
├── Événements (Events) - NEW PAGE
│   ├── Upcoming events
│   ├── Past events archive
│   └── Event registration
│
├── Tarifs (Pricing) - NEW PAGE (OPTIONAL)
│   ├── All services pricing
│   ├── Packages/combos
│   └── Payment methods
│
└── Contact (Existing)
```

### URL Strategy

**Clean, SEO-friendly URLs:**
- `/a-propos` - About page
- `/services` - Services overview
- `/services/[slug]` - Individual service pages
- `/evenements` - Events list
- `/tarifs` - Pricing (optional dedicated page)
- `/contact` - Existing contact page

---

## Service Page Structure

### Proposed Template Structure

Each service page follows this consistent structure:

```
┌─────────────────────────────────────────────────┐
│  PAGE HEADER (Hero)                             │
│  - Service name                                  │
│  - Hero image (optional)                         │
│  - Short tagline                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  QUICK INFO BAR                                  │
│  [Icon] Duration  [Icon] Price  [Icon] Level     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  MAIN CONTENT (Markdown from CMS)                │
│  - What is it?                                   │
│  - How does it work?                             │
│  - Benefits                                      │
│  - Process/Session breakdown                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  CONTRAINDICATIONS (if applicable)               │
│  - Warning box                                   │
│  - List of contraindications                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  PRICING SECTION                                 │
│  - Service variants (if applicable)              │
│  - Pricing table                                 │
│  - Package options                               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  TESTIMONIALS (optional)                         │
│  - Reviews for this service                      │
│  - Star rating                                   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  RELATED RESOURCES (optional)                    │
│  - External links                                │
│  - Scientific references                         │
│  - Recommended reading                           │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  FAQ (Accordion)                                 │
│  - Service-specific questions                    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  RELATED EVENTS (Dynamic)                        │
│  - Upcoming events for this service              │
│  - Example: "Liver Cleansing" events for         │
│    the Liver Cleansing service page             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  CALL TO ACTION                                  │
│  - Book appointment button                       │
│  - Contact info                                  │
└─────────────────────────────────────────────────┘
```

---

## CMS Configuration

### Enhanced Sveltia CMS Structure

#### 1. **Services Collection** (Enhanced)

```yaml
collections:
  - name: services
    label: Services
    folder: content/services
    create: true
    slug: '{{slug}}'
    fields:
      # Basic Info
      - { label: Titre, name: title, widget: string }
      - { label: Slug, name: slug, widget: string }
      - { label: Description courte, name: excerpt, widget: text, max: 160 }
      - { label: Image principale, name: image, widget: image }
      - { label: Image hero (optionnel), name: heroImage, widget: image, required: false }

      # Service Details
      - { label: Durée, name: duration, widget: string, hint: "Ex: 45 minutes" }
      - { label: Icône FontAwesome, name: icon, widget: string, default: "fas fa-spa" }
      - { label: Ordre d'affichage, name: order, widget: number, default: 0 }
      - { label: Niveau, name: level, widget: select, options: ["Débutant", "Intermédiaire", "Avancé", "Tous niveaux"], default: "Tous niveaux", required: false }

      # Main Content
      - { label: Contenu principal, name: body, widget: markdown, hint: "Description détaillée, bénéfices, processus" }

      # Contraindications (optional)
      - { label: Contre-indications, name: contraindications, widget: markdown, required: false }

      # Pricing Section
      - label: Tarifs
        name: pricing
        widget: list
        required: false
        hint: "Définir les différents tarifs pour ce service"
        fields:
          - { label: Nom, name: name, widget: string, hint: "Ex: Séance individuelle, 3 séances, 5 séances" }
          - { label: Prix, name: price, widget: string, hint: "Ex: 120€" }
          - { label: Économie, name: savings, widget: string, required: false, hint: "Ex: -20€ ou Économie de 20€" }
          - { label: Durée, name: duration, widget: string, required: false, hint: "Ex: 45-60 min" }
          - { label: Description, name: description, widget: text, required: false }

      # FAQ Section
      - label: FAQ
        name: faq
        widget: list
        required: false
        fields:
          - { label: Question, name: question, widget: string }
          - { label: Réponse, name: answer, widget: markdown }

      # External Resources
      - label: Ressources externes
        name: externalResources
        widget: list
        required: false
        fields:
          - { label: Titre, name: title, widget: string }
          - { label: URL, name: url, widget: string }
          - { label: Type, name: type, widget: select, options: ["Article", "Étude scientifique", "Livre", "Vidéo", "Site web"] }
          - { label: Description, name: description, widget: text, required: false }

      # SEO
      - { label: Meta Title (SEO), name: metaTitle, widget: string, required: false }
      - { label: Meta Description (SEO), name: metaDescription, widget: text, required: false }

      # Publishing
      - { label: Publié, name: published, widget: boolean, default: true }
```

**Example: Hydrothérapie du Côlon Service (CMS Data)**
```yaml
title: "Hydrothérapie du Côlon"
slug: "hydrotherapie-du-colon"
excerpt: "Nettoyage en profondeur du côlon par irrigation douce"
duration: "45-60 minutes"
icon: "fas fa-water"
order: 1
level: "Tous niveaux"
body: |
  L'hydrothérapie du côlon est une méthode douce de nettoyage intestinal...
contraindications: |
  - Infections intestinales actives
  - Perforations ou fissures
  - Chirurgie récente (< 6 mois)
  - Inflammation aiguë
pricing:
  - name: "Séance individuelle"
    price: "120€"
    duration: "45-60 min"
  - name: "3 séances"
    price: "340€"
    savings: "Économie de 20€"
  - name: "5 séances"
    price: "550€"
    savings: "Économie de 50€"
faq:
  - question: "À quelle fréquence dois-je faire des séances ?"
    answer: "Il est recommandé de faire 3 séances initiales, puis 2 séances par an pour l'entretien."
  - question: "Est-ce douloureux ?"
    answer: "Non, le processus est doux et indolore. Certaines personnes ressentent une légère pression."
published: true
```

#### 2. **Events Collection** (Enhanced for special events)

```yaml
  - name: events
    label: Événements
    folder: content/events
    create: true
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
    fields:
      # Basic Info
      - { label: Titre, name: title, widget: string }
      - { label: Type d'événement, name: eventType, widget: select,
          options: ["Nettoyage du foie", "Trio de soins detox", "Stage de jeûne", "Atelier", "Autre"],
          default: "Autre" }
      - { label: Service associé, name: relatedService, widget: relation,
          collection: services, search_fields: ["title"], value_field: "slug", required: false }

      # Dates
      - { label: Date de début, name: startDate, widget: datetime }
      - { label: Date de fin, name: endDate, widget: datetime, required: false }

      # Content
      - { label: Description courte, name: excerpt, widget: text }
      - { label: Programme détaillé, name: body, widget: markdown }
      - { label: Image, name: image, widget: image, required: false }

      # Logistics
      - { label: Lieu, name: location, widget: string, required: false }
      - { label: Prix, name: price, widget: string, required: false }
      - { label: Places disponibles, name: availableSpots, widget: number, required: false }
      - { label: Places totales, name: totalSpots, widget: number, required: false }

      # Registration
      - { label: Lien d'inscription, name: registrationUrl, widget: string, required: false }
      - { label: Date limite d'inscription, name: registrationDeadline, widget: datetime, required: false }

      # Includes
      - label: Inclus dans le programme
        name: includes
        widget: list
        required: false
        field: { label: Item, name: item, widget: string }

      # Prerequisites
      - { label: Prérequis, name: prerequisites, widget: text, required: false }

      # Publishing
      - { label: Publié, name: published, widget: boolean, default: true }
      - { label: Featured (mise en avant), name: featured, widget: boolean, default: false }
```

**Example: Détox Foie/VB Weekend Event (CMS Data)**
```yaml
title: "Week-end Nettoyage du Foie et Vésicule Biliaire"
eventType: "Nettoyage du foie"
relatedService: "nettoyage-du-foie"
startDate: 2025-03-15T14:00:00
endDate: 2025-03-17T14:00:00
excerpt: "Week-end de détoxification hépatique selon la méthode Andreas Moritz, accompagné de méditations et soins"
body: |
  Programme complet de nettoyage du foie et vésicule biliaire sur un week-end.
  Préparation de 5 jours à la maison, puis week-end intensif au centre...
location: "Centre Darshan, Saint-Gingolph"
price: "315€"
availableSpots: 8
totalSpots: 8
includes:
  - "2 séances d'hydrothérapie du côlon"
  - "2 nuits d'hébergement"
  - "3 repas adaptés"
  - "Méditations guidées quotidiennes"
  - "Accompagnement personnalisé"
prerequisites: "Avoir suivi la préparation de 5 jours (protocole fourni à l'inscription)"
published: true
featured: true
```

**Example: Séminaire Tantra Nouvel An (CMS Data)**
```yaml
title: "Séminaire Méditation Tantra - Spécial Nouvel An"
eventType: "Atelier"
relatedService: "meditation-tantrique"
startDate: 2025-12-27T14:00:00
endDate: 2026-01-01T14:00:00
excerpt: "Célébrez le passage à la nouvelle année par une immersion dans la méditation tantrique de la reconnaissance"
body: |
  6 jours de retraite méditative pour accueillir la nouvelle année en conscience...
location: "Centre Darshan, Saint-Gingolph"
price: "605€"
includes:
  - "Séances de méditation quotidiennes"
  - "6 nuits d'hébergement (215€)"
  - "Repas végétariens"
  - "Célébration du Nouvel An en conscience"
availableSpots: 12
totalSpots: 15
registrationDeadline: 2025-12-15T23:59:00
published: true
featured: true
```

#### 3. **Testimonials Collection** (NEW)

```yaml
  - name: testimonials
    label: Témoignages
    folder: content/testimonials
    create: true
    slug: '{{year}}-{{month}}-{{slug}}'
    fields:
      # Author Info
      - { label: Nom (initiales), name: authorName, widget: string, hint: "Ex: M.P." }
      - { label: Localisation (optionnel), name: location, widget: string, required: false }

      # Testimonial Content
      - { label: Témoignage, name: content, widget: text }
      - { label: Note, name: rating, widget: number, min: 1, max: 5, value_type: int }

      # Service Related
      - label: Services concernés
        name: relatedServices
        widget: relation
        collection: services
        search_fields: ["title"]
        value_field: "slug"
        multiple: true
        required: false

      # Meta
      - { label: Date, name: date, widget: datetime }
      - { label: Vérifié, name: verified, widget: boolean, default: false }
      - { label: Publié, name: published, widget: boolean, default: true }
```

#### 4. **Global Pricing Configuration** (NEW - for pricing page)

```yaml
  - name: settings
    label: Paramètres
    files:
      - label: Tarifs
        name: pricing
        file: content/settings/pricing.json
        fields:
          - label: Tarifs par service
            name: servicePricing
            widget: list
            fields:
              - { label: Service (slug), name: serviceSlug, widget: string }
              - label: Tarifs
                name: prices
                widget: list
                fields:
                  - { label: Nom, name: name, widget: string }
                  - { label: Prix, name: price, widget: string }
                  - { label: Durée, name: duration, widget: string, required: false }
                  - { label: Description, name: description, widget: text, required: false }

          - label: Formules & Packages
            name: packages
            widget: list
            required: false
            fields:
              - { label: Nom du package, name: name, widget: string }
              - { label: Prix, name: price, widget: string }
              - { label: Économie, name: savings, widget: string, required: false }
              - { label: Description, name: description, widget: text }
              - label: Services inclus
                name: includedServices
                widget: list
                field: { label: Service, name: service, widget: string }

          - label: Informations de paiement
            name: paymentInfo
            widget: object
            fields:
              - { label: Moyens de paiement acceptés, name: methods, widget: list, field: { label: Méthode, name: method, widget: string } }
              - { label: Politique d'annulation, name: cancellationPolicy, widget: markdown }
```

---

## Design & Layout Options

### **DECISION POINT 1: Service Page Layout Style**

I propose **3 layout options** for service pages. Please choose one:

#### **Option A: Single Column (Simple & Clean)**
```
┌─────────────────────────────────┐
│         HERO SECTION            │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│                                 │
│         MAIN CONTENT            │
│       (Full width, max          │
│        content width)           │
│                                 │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│         PRICING CARDS           │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│         TESTIMONIALS            │
└─────────────────────────────────┘
```

**Pros:**
- ✅ Mobile-first friendly
- ✅ Clear reading flow
- ✅ Easy to scan
- ✅ Less complex to implement

**Cons:**
- ❌ Can feel long on desktop
- ❌ No sidebar for quick navigation

---

#### **Option B: Sidebar Layout (Professional)**
```
┌─────────────────────────────────────────┐
│             HERO SECTION                │
└─────────────────────────────────────────┘
┌───────────────────┬────────────────────┐
│                   │                    │
│                   │   STICKY SIDEBAR   │
│   MAIN CONTENT    │   - Quick Info     │
│   (Wider area)    │   - Pricing        │
│                   │   - CTA Button     │
│                   │   - Related Events │
│                   │                    │
└───────────────────┴────────────────────┘
┌─────────────────────────────────────────┐
│           TESTIMONIALS                  │
└─────────────────────────────────────────┘
```

**Pros:**
- ✅ Professional medical/wellness site feel
- ✅ Quick access to key info
- ✅ Sticky sidebar keeps CTA visible
- ✅ Better desktop experience

**Cons:**
- ❌ More complex responsive design
- ❌ Sidebar collapses on mobile anyway

---

#### **Option C: Tabbed Interface (Modern)**
```
┌─────────────────────────────────────────┐
│             HERO SECTION                │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ [Description] [Tarifs] [FAQ] [Avis]    │ ← Tabs
├─────────────────────────────────────────┤
│                                         │
│         TAB CONTENT AREA                │
│      (Changes based on tab)             │
│                                         │
└─────────────────────────────────────────┘
```

**Pros:**
- ✅ Modern, app-like experience
- ✅ Organized content sections
- ✅ Reduces page length
- ✅ User controls navigation

**Cons:**
- ❌ Not great for SEO (hidden content)
- ❌ Users might miss tabs
- ❌ More JavaScript required

---

### **DECISION POINT 2: Pricing Display**

#### **Option A: Embedded in Service Page** (Recommended)
- Pricing section within each service page
- CMS-managed pricing per service
- Pros: Context-aware, easy to update per service
- Cons: Pricing duplicated if shown on dedicated pricing page

#### **Option B: Dedicated Pricing Page Only**
- All pricing on `/tarifs` page
- Service pages link to pricing page
- Pros: Single source of truth, easy comparison
- Cons: Extra click for users, context loss

#### **Option C: Hybrid Approach** (Most Flexible)
- Show basic pricing on service page
- Link to `/tarifs` for packages/combos
- Use same CMS data source (no duplication)
- Pros: Best of both worlds
- Cons: Slightly more complex implementation

**My Recommendation:** **Option C (Hybrid)** - Show pricing on service pages, but also have a dedicated `/tarifs` page for comparing all services and showing packages.

---

### **DECISION POINT 3: Testimonials Display**

#### **Option A: Service-Specific Only**
- Show only testimonials related to each service
- Pros: Contextual, relevant
- Cons: Might have few testimonials per service initially

#### **Option B: Homepage Carousel**
- All testimonials on homepage rotating carousel
- Pros: Social proof on main page, showcases all reviews
- Cons: Testimonials not tied to specific services

#### **Option C: Both** (Recommended)
- Homepage: Recent testimonials (all services mixed)
- Service pages: Filtered by service
- Pros: Maximum visibility, contextual relevance
- Cons: Need good CMS filtering system

**My Recommendation:** **Option C** - Show latest testimonials on homepage, filtered testimonials on service pages.

---

## Homepage Integration

### Proposed Homepage Sections

```
1. HERO SECTION (existing)
   - Video background
   - Main tagline
   - Services quick links

2. INTRODUCTION (existing)
   - Brief welcome message
   - Who is Marie-Pierre (SHORT version)
   - Link to full "À Propos" page

3. SERVICES GRID (NEW - enhanced)
   - 6 service cards (gold icons, consistent design)
   - Each card:
     * Service icon
     * Service name
     * 1-line description
     * "En savoir plus" button → service page
   - Mobile: 1-2 columns
   - Desktop: 3 columns

4. UPCOMING EVENTS SECTION (NEW)
   - Title: "Événements à venir"
   - Show next 3 upcoming events
   - Event cards with:
     * Event type badge (Liver Cleanse / Detox Trio / Fasting)
     * Date range
     * Location
     * Available spots indicator
     * "S'inscrire" button
   - Link to full /evenements page

5. TESTIMONIALS CAROUSEL (NEW)
   - Title: "Témoignages de nos clients"
   - Rotating carousel (auto-play or manual)
   - Shows: Quote, name/initials, rating, service
   - Design: Cards with gold accent

6. APPROACH SECTION (enhanced)
   - "Mon approche"
   - Brief philosophy
   - Key differentiators
   - Link to "À Propos"

7. CALL TO ACTION
   - Contact info
   - Booking encouragement

8. FOOTER (existing)
```

---

## Implementation Roadmap

### Phase 1: CMS Configuration & Content Structure
**Duration:** 2-3 days (with Claude Code)

- [ ] Update `public/admin/config.yml` with enhanced collections
- [ ] Create JSON schema for pricing settings
- [ ] Test CMS locally with mock data
- [ ] Validate all field types and relations

### Phase 2: Service Content Research & Writing
**Duration:** 3-5 days (mostly user work)

- [ ] Research and write content for each service:
  - [ ] Hydrothérapie du Côlon
  - [ ] Massages Ayurvédiques
  - [ ] Méditation Tantrique
  - [ ] Nettoyage du Foie
  - [ ] Trio de Soins Detox
  - [ ] Stage de Jeûne
- [ ] Prepare FAQ for each service
- [ ] Gather external resources/references
- [ ] Define pricing for all services

### Phase 3: Component Development
**Duration:** 4-5 days (with Claude Code)

- [ ] Create service page template component
- [ ] Build pricing display component
- [ ] Create testimonials component (card + carousel)
- [ ] Build event card component
- [ ] Create FAQ accordion component
- [ ] Develop external resources component

### Phase 4: Service Pages Implementation
**Duration:** 3-4 days (with Claude Code)

- [ ] Create `/pages/services/index.tsx` (overview)
- [ ] Create `/pages/services/[slug].tsx` (dynamic individual pages)
- [ ] Implement chosen layout (sidebar, single column, or tabs)
- [ ] Connect to CMS data
- [ ] Add related events filtering
- [ ] Add related testimonials filtering

### Phase 5: Homepage Integration
**Duration:** 2-3 days (with Claude Code)

- [ ] Add services grid section
- [ ] Add upcoming events section
- [ ] Add testimonials carousel
- [ ] Enhance existing sections
- [ ] Mobile-first responsive design

### Phase 6: Additional Pages
**Duration:** 2-3 days (with Claude Code)

- [ ] Create "À Propos" page
- [ ] Create "Événements" page
- [ ] Create "Tarifs" page (if hybrid approach chosen)
- [ ] Update navigation menu

### Phase 7: Testing & Refinement
**Duration:** 2-3 days

- [ ] CMS workflow testing
- [ ] Content entry testing
- [ ] Mobile responsiveness testing
- [ ] SEO validation
- [ ] Accessibility audit
- [ ] Performance testing

### Phase 8: Content Population
**Duration:** 3-5 days (user work with CMS)

- [ ] Enter all service content via CMS
- [ ] Add initial events
- [ ] Add initial testimonials (if available)
- [ ] Set pricing
- [ ] Upload images

---

## Open Questions for User Decision

### 🔴 CRITICAL DECISIONS NEEDED:

1. **Layout Choice**: Which service page layout do you prefer?
   - [ ] Option A: Single Column (Simple)
   - [ ] Option B: Sidebar Layout (Professional)
   - [ ] Option C: Tabbed Interface (Modern)

2. **Pricing Display Strategy**:
   - [ ] Option A: Embedded in service pages only
   - [ ] Option B: Dedicated pricing page only
   - [ ] Option C: Hybrid (both) ← **Recommended**

3. **Testimonials Strategy**:
   - [ ] Option A: Service-specific only
   - [ ] Option B: Homepage only
   - [ ] Option C: Both ← **Recommended**

### ✅ RESOLVED QUESTIONS:

4. **Trio de Soins Detox Definition** ✓
   - ✅ Composition: Bol Kansu + Massage Métamorphique + Hydrothérapie Côlon
   - ✅ Pricing: 260€ (package price)
   - ✅ Duration: ~2.5-3 hours total

5. **Complete Pricing Structure** ✓
   - ✅ All individual services priced with package discounts
   - ✅ Meditation retreats with detailed breakdowns
   - ✅ Special events (Détox Foie/VB weekend) defined

### ✅ RESOLVED QUESTIONS (continued):

6. **Massage Services Structure** ✓
   - ✅ Single `/services/massages` page with 3 sections:
     - Massage Ayurvédique (100€/280€/450€)
     - Massage Métamorphique (80€/220€/350€)
     - Bol Kansu (80€/220€/350€)
   - ✅ Single scroll page, clear h2/h3 hierarchy (best for SEO)

7. **Event Landing Pages** ✓
   - ✅ NO separate event type landing pages
   - ✅ Service pages show related events dynamically
   - ✅ Events page is chronological listing only

### ⚪ OPTIONAL DECISIONS:

8. **Testimonials Collection**:
   - Do you have existing testimonials to migrate?
   - Will you collect new ones systematically?
   - Public or moderated submission?

9. **Scientific References** ✓
   - ✅ Resources section (complementary, not primary)
   - ✅ Main information must be self-contained on the site

---

## Next Steps

**Once you approve the key decisions above, I will:**

1. Create the enhanced CMS configuration
2. Build reusable components
3. Implement the service pages structure
4. Integrate everything on the homepage
5. Create additional pages (About, Events, Pricing)

**Estimated Total Development Time:** 15-20 days (with Claude Code)

---

**Last Updated:** January 2025
**Status:** ⏸️ Awaiting User Decisions
