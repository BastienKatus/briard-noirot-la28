import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
});

const byName = new Map(Object.entries(files).map(([path, mod]) => [path.split('/').pop() ?? path, mod.default]));

/** Lève une erreur au build sur un nom inconnu : une faute de frappe dans les données ne doit pas produire une image cassée en ligne. */
export function photo(name: string): ImageMetadata {
	const image = byName.get(name);
	if (!image) throw new Error(`Photo introuvable dans src/assets/photos : « ${name} »`);
	return image;
}
