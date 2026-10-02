// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages sert le site sous /briard-noirot-la28/ : tous les liens internes passent par
// url() (src/lib/url.ts). Avec un domaine personnalisé, remplacer site et supprimer base.
export default defineConfig({
	site: 'https://bastienkatus.github.io',
	base: '/briard-noirot-la28',
});
