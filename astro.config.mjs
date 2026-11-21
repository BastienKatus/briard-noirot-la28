// @ts-check
import { defineConfig } from 'astro/config';

// Domaine personnalisé déclaré dans Settings → Pages du dépôt : le site est servi à la racine, sans base.
// Les liens internes passent quand même par url() (src/lib/url.ts), qui suivrait un éventuel retour d'un base.
export default defineConfig({
	site: 'https://briard-noirot-la28.fr',
});
