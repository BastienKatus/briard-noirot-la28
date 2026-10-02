# briard-noirot-la28

Site vitrine de Chloé Briard et Vincent Noirot (équipe de France de beach sprint) : présentation des rameurs, palmarès, albums photo et appel aux dons pour l’objectif Los Angeles 2028. Les dons passent par la plateforme [Soutiens ton Sportif](https://www.soutienstonsportif.fr/) de la Fondation du Sport Français : le site ne traite aucun paiement.

Construit avec [Astro](https://docs.astro.build) : le build produit du HTML/CSS statique dans `dist/`, sans cookie ni traceur.

## Prérequis

- Node.js >= 22.12

## Commandes

| Commande          | Action                                                            |
| ----------------- | ----------------------------------------------------------------- |
| `npm install`     | Installe les dépendances                                          |
| `npm run dev`     | Serveur de dev sur http://localhost:4321/briard-noirot-la28/      |
| `npm run build`   | Génère le site statique dans `dist/`                              |
| `npm run preview` | Sert localement le contenu de `dist/` (relancer après un build)   |
| `npm run check`   | Vérifie les types et les composants Astro                         |

## Modifier le contenu

Tous les textes sont dans `src/data/`, séparés de la mise en page :

| Fichier                               | Contenu                                                                 |
| ------------------------------------- | ----------------------------------------------------------------------- |
| `site.ts`                             | Nom du site, **e-mail de contact**, menu, réglages de la collecte       |
| `accueil.ts`                          | Accueil : bandeau, projet, frise vers LA 2028, besoins, bloc « soutenir » |
| `athletes.ts`                         | Biographies, photos et encadrés des deux rameurs                        |
| `palmares.ts`                         | Résultats (`highlight: true` = affiché sur l’accueil), résultats en duo |
| `albums.ts`                           | Albums photo : ordre, textes alternatifs, légendes                      |
| `dons.ts`                             | Étapes du don, défiscalisation, mécénat/sponsoring, FAQ                 |
| `textes/mentions-legales.md`          | Mentions légales et données personnelles (Markdown)                     |

**Déplacer un bloc** : l’accueil (`src/pages/index.astro`) est une simple liste de sections ; changer l’ordre des lignes change l’ordre à l’écran. Les autres pages (`albums`, `palmares`, `infos`) suivent le même principe.

**Ajouter une photo** : la déposer dans `src/assets/photos/`, puis la référencer par son nom de fichier (dans `albums.ts` par exemple). Astro génère automatiquement des versions WebP redimensionnées. Un nom de fichier inconnu fait échouer le build : une faute de frappe ne peut pas partir en ligne.

**Activer la jauge de collecte** : quand la page Soutiens ton Sportif existe, renseigner son slug dans `site.ts` (`donation.projectSlug`, la fin de l’URL `soutienstonsportif.fr/project/<slug>`). La jauge lit alors le montant collecté en direct ; si la plateforme ne répond pas, elle reste à son état initial et le bouton de don fonctionne toujours.

## Déploiement (GitHub Pages)

1. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
2. Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui publie le site sur https://bastienkatus.github.io/briard-noirot-la28/.

Avec un domaine personnalisé : remplacer `site` par ce domaine et supprimer `base` dans `astro.config.mjs`.

## À compléter avant la mise en ligne

- [ ] E-mail de contact réel (`site.ts`, actuellement `contact@example.com`)
- [ ] Coordonnées de l’éditeur dans les mentions légales
- [ ] Crédits photos, et accord des photographes (FFAviron / Magaviron, World Rowing…)
- [ ] Relecture des biographies, du palmarès et de l’objectif LA 2028 par les athlètes
- [ ] Slug de la page Soutiens ton Sportif, objectif de collecte (plafonné à 20 000 € par la plateforme)

## Structure

```
.github/workflows/   Déploiement GitHub Pages
public/              Fichiers servis tels quels (favicon)
src/
├── assets/photos/   Photos (optimisées au build)
├── components/      Blocs réutilisables (en-tête, galerie, jauge, contact…)
│   └── sections/    Sections de la page d’accueil
├── data/            Tous les contenus éditables
├── layouts/         Gabarit HTML commun
├── lib/             Utilitaires (liens avec le base path, chargement des photos)
├── pages/           Une page = une route (index, albums, palmares, infos)
└── styles/          Styles globaux et variables de couleur
```
