# briard-noirot-la28

Site vitrine de Chloé Briard et Vincent Noirot (équipe de France de beach rowing sprint, BRS) : présentation des rameurs, palmarès, albums photo et appel aux dons pour l’objectif Los Angeles 2028. Les dons passent par la plateforme [Soutiens ton Sportif](https://www.soutienstonsportif.fr/) de la Fondation du Sport Français : le site ne traite aucun paiement.

Construit avec [Astro](https://docs.astro.build) : le build produit du HTML/CSS statique dans `dist/`, sans cookie ni traceur.

## Prérequis

- Node.js >= 22.12

## Commandes

| Commande          | Action                                                            |
| ----------------- | ----------------------------------------------------------------- |
| `npm install`     | Installe les dépendances                                          |
| `npm run dev`     | Serveur de dev sur http://localhost:4321/                         |
| `npm run build`   | Génère le site statique dans `dist/`                              |
| `npm run preview` | Sert localement le contenu de `dist/` (relancer après un build)   |
| `npm run check`   | Vérifie les types et les composants Astro                         |

## Modifier le contenu

Tous les textes sont dans `src/data/`, séparés de la mise en page :

| Fichier                               | Contenu                                                                 |
| ------------------------------------- | ----------------------------------------------------------------------- |
| `site.ts`                             | Nom du site, titre et description de l’accueil pour les moteurs de recherche, image de partage, **e-mail de contact**, habillage de saison, menu, partenaires (accueil et pied de page), réglages des cagnottes |
| `accueil.ts`                          | Accueil : bandeau, présentation commune, projet, frise vers LA 2028, besoins, bloc « soutenir », partenaires |
| `athletes.ts`                         | Présentations, photos et encadrés des deux rameurs                      |
| `palmares.ts`                         | Résumés, résultats (`highlight: true` = affiché sur l’accueil), résultats en duo |
| `albums.ts`                           | Albums photo : ordre, textes alternatifs, légendes                      |
| `dons.ts`                             | Étapes du don, défiscalisation, mécénat/sponsoring, FAQ                 |
| `textes/mentions-legales.md`          | Mentions légales et données personnelles (Markdown)                     |

**Déplacer un bloc** : l’accueil (`src/pages/index.astro`) est une simple liste de sections ; changer l’ordre des lignes change l’ordre à l’écran. Les autres pages (`albums`, `palmares`, `infos`) suivent le même principe.

**Ajouter une photo** : la déposer dans `src/assets/photos/`, puis la référencer par son nom de fichier (dans `albums.ts` par exemple). Astro génère automatiquement des versions WebP redimensionnées. Un nom de fichier inconnu fait échouer le build : une faute de frappe ne peut pas partir en ligne.

**Activer une jauge de collecte** : Chloé et Vincent ont chacun leur cagnotte (la plateforme n’accepte pas de cagnotte commune). Quand la page Soutiens ton Sportif d’un athlète existe, renseigner son slug dans `site.ts` (`projectSlug` de son entrée dans `donation.projects`, la fin de l’URL `soutienstonsportif.fr/project/<slug>`). Sa jauge lit alors le montant collecté en direct ; si la plateforme ne répond pas, elle reste à son état initial et le bouton de don fonctionne toujours.

**Habillage de saison** : un halo de couleur et quelques motifs discrets en fond (feuilles en automne, flocons en hiver, pétales au printemps, reflets de soleil en été). Le navigateur change d’habillage à 0 h, heure de Paris, le jour de l’équinoxe ou du solstice : les dates sont calculées au build (`src/lib/seasons.ts`) pour les dix années suivantes, sans nouvelle mise en ligne. Pour voir une saison avant l’heure, ajouter `?saison=printemps`, `ete`, `automne` ou `hiver` à l’adresse ; pour retirer l’habillage, passer `seasonalTheme` à `false` dans `site.ts`.

**Référencement** : chaque page passe son titre et sa description à `BaseLayout` ; l’accueil décrit Chloé et Vincent en données structurées schema.org, la page Dons & infos sa FAQ. Le plan du site (`sitemap-index.xml`) est généré au build par `@astrojs/sitemap` et déclaré dans `public/robots.txt`.

## Déploiement (GitHub Pages)

1. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
2. Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui publie le site sur https://briard-noirot-la28.fr/.

**Domaine** : `briard-noirot-la28.fr`, acheté chez IONOS et déclaré dans **Settings → Pages → Custom domain** (HTTPS forcé). DNS chez IONOS : 4 enregistrements A et 4 AAAA de GitHub Pages sur `@`, CNAME `www` vers `bastienkatus.github.io`. Pas de fichier `CNAME` dans le dépôt : un déploiement par GitHub Actions n'en a pas besoin. L'adresse `bastienkatus.github.io/briard-noirot-la28/` redirige vers le domaine.

## À compléter avant la mise en ligne

- [ ] Crédits photos, et accord des photographes (FFAviron / Magaviron, World Rowing…)
- [ ] Relecture des biographies, du palmarès et de l’objectif LA 2028 par les athlètes
- [ ] Slug de la cagnotte Soutiens ton Sportif de Vincent (celle de Chloé est en place)

## Structure

```
.github/workflows/   Déploiement GitHub Pages
public/              Fichiers servis tels quels (favicon)
src/
├── assets/photos/   Photos (optimisées au build)
├── assets/logos/    Logos des partenaires (optimisés au build)
├── components/      Blocs réutilisables (en-tête, galerie, jauge, contact…)
│   └── sections/    Sections de la page d’accueil
├── data/            Tous les contenus éditables
├── layouts/         Gabarit HTML commun
├── lib/             Utilitaires (liens avec le base path, chargement des photos)
├── pages/           Une page = une route (index, albums, palmares, infos)
└── styles/          Styles globaux et variables de couleur
```
