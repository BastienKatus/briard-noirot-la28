const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Un lien interne écrit en dur (« /albums/ ») ignore le `base` d'astro.config.mjs et casse sur GitHub Pages. */
export function url(path = '/'): string {
	return `${base}/${path.replace(/^\//, '')}`;
}
