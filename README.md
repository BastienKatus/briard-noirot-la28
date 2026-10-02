# briard-noirot-la28

Site vitrine statique : présentation d'un objectif sportif et appel aux dons (redirection vers la plateforme de dons, aucune gestion financière sur le site).

Construit avec [Astro](https://docs.astro.build) : le build produit du HTML/CSS statique dans `dist/`, hébergeable n'importe où.

## Prérequis

- Node.js >= 22.12

## Commandes

| Commande          | Action                                          |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Installe les dépendances                        |
| `npm run dev`     | Serveur de dev sur http://localhost:4321        |
| `npm run build`   | Génère le site statique dans `dist/`            |
| `npm run preview` | Sert localement le contenu de `dist/`           |

## Structure

```
public/              Fichiers servis tels quels (favicon, images)
src/
├── layouts/         Gabarit HTML commun (head, métadonnées)
└── pages/           Une page = une route (index.astro → /)
```
