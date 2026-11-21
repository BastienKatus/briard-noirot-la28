// Palmarès établi le 2 octobre 2026 à partir de sources publiques (World Rowing, FFAviron, Mag Aviron,
// presse régionale), complété le 21 novembre 2026 par les athlètes. Ordre libre : les pages trient par
// année décroissante.

export type Medal = 'gold' | 'silver' | 'bronze';
export type Level = 'monde' | 'europe' | 'international' | 'france';

export interface Result {
	year: number;
	competition: string;
	location: string;
	event: string;
	result: string;
	level: Level;
	medal?: Medal;
	/** Mis en avant sur la page d'accueil. */
	highlight?: boolean;
}

/** Résumé communiqué par l'athlète : il compte aussi des résultats absents de la liste détaillée. */
export interface Summary {
	nationalTitles: number;
	items: string[];
}

export const levelLabels: Record<Level, string> = {
	monde: 'Monde',
	europe: 'Europe',
	international: 'International',
	france: 'France',
};

export const palmares: Record<'chloe' | 'vincent', Result[]> = {
	chloe: [
		{
			year: 2026,
			competition: 'Championnats de France de sprint de plage',
			location: 'La Seyne-sur-Mer',
			event: 'Solo femme',
			result: 'Championne de France',
			level: 'france',
			medal: 'gold',
			highlight: true,
		},
		{
			year: 2026,
			competition: 'Championnats de France de sprint de plage',
			location: 'La Seyne-sur-Mer',
			event: 'Double mixte, avec Vincent Noirot',
			result: 'Vice-championne de France',
			level: 'france',
			medal: 'silver',
		},
		{
			year: 2026,
			competition: 'Pharoes Trophy',
			location: 'Oeiras (Portugal)',
			event: 'Double mixte, avec Mathis Nottelet',
			result: 'Victoire',
			level: 'international',
			medal: 'gold',
			highlight: true,
		},
		{
			year: 2026,
			competition: 'Trophée Lido Filippi',
			location: 'Donoratico (Italie)',
			event: 'Solo femme',
			result: 'Quart de finale',
			level: 'international',
		},
		{
			year: 2025,
			competition: 'World Rowing Beach Sprint Finals',
			location: 'Antalya (Turquie)',
			event: 'Double mixte, avec Antoine Lefebvre',
			result: 'Médaille de bronze',
			level: 'monde',
			medal: 'bronze',
			highlight: true,
		},
		{
			year: 2025,
			competition: 'Championnats de France de beach sprint',
			location: 'Aix-les-Bains',
			event: 'Double mixte',
			result: 'Championne de France',
			level: 'france',
			medal: 'gold',
		},
		{
			year: 2025,
			competition: 'Championnats de France d’aviron indoor',
			location: 'France',
			event: '500 m',
			result: 'Championne de France',
			level: 'france',
			medal: 'gold',
		},
		{
			year: 2023,
			competition: 'Championnats d’Europe d’aviron de mer',
			location: 'La Seyne-sur-Mer',
			event: 'Double mixte',
			result: '4e de la finale A',
			level: 'europe',
		},
		{
			year: 2023,
			competition: 'Championnats d’Europe d’aviron de mer',
			location: 'La Seyne-sur-Mer',
			event: 'Double femme',
			result: 'Médaille de bronze',
			level: 'europe',
			medal: 'bronze',
		},
		{
			year: 2024,
			competition: 'Championnats d’Europe d’aviron de mer',
			location: 'Gdansk (Pologne)',
			event: 'Double femme',
			result: 'Médaille d’argent',
			level: 'europe',
			medal: 'silver',
		},
		{
			year: 2024,
			competition: 'Championnats d’Europe d’aviron de mer',
			location: 'Gdansk (Pologne)',
			event: 'Double mixte',
			result: 'Médaille d’or',
			level: 'europe',
			medal: 'gold',
		},
		{
			year: 2023,
			competition: 'Championnats du monde d’aviron de mer',
			location: 'Barletta (Italie)',
			event: 'Double mixte',
			result: '9e de la finale A',
			level: 'monde',
		},
		{
			year: 2022,
			competition: 'Championnats du monde d’aviron de mer',
			location: 'Saundersfoot (pays de Galles)',
			event: 'Double mixte',
			result: 'Finaliste A',
			level: 'monde',
		},
	],
	vincent: [
		{
			year: 2026,
			competition: 'Championnats de France élite seniors',
			location: 'Mâcon',
			event: 'Huit barré (8+), Aviron Club Lyon-Caluire',
			result: 'Champion de France',
			level: 'france',
			medal: 'gold',
			highlight: true,
		},
		{
			year: 2026,
			competition: 'Championnats de France de sprint de plage',
			location: 'La Seyne-sur-Mer',
			event: 'Double mixte, avec Chloé Briard',
			result: 'Vice-champion de France',
			level: 'france',
			medal: 'silver',
		},
		{
			year: 2026,
			competition: 'Championnats de France de sprint de plage',
			location: 'La Seyne-sur-Mer',
			event: 'Solo homme',
			result: 'Médaille de bronze',
			level: 'france',
			medal: 'bronze',
		},
		{
			year: 2024,
			competition: 'World Rowing Beach Sprint Finals',
			location: 'Gênes (Italie)',
			event: 'Quatre de couple barré mixte',
			result: 'Médaille de bronze',
			level: 'monde',
			medal: 'bronze',
			highlight: true,
		},
		{
			year: 2023,
			competition: 'Championnats du monde d’aviron de mer',
			location: 'Barletta (Italie)',
			event: 'Double mixte',
			result: 'Vice-champion du monde',
			level: 'monde',
			medal: 'silver',
			highlight: true,
		},
		{
			year: 2023,
			competition: 'Jeux méditerranéens de plage',
			location: 'Heraklion (Grèce)',
			event: 'Solo homme',
			result: 'Médaille de bronze',
			level: 'international',
			medal: 'bronze',
		},
		{
			year: 2023,
			competition: 'Championnats d’Europe d’aviron de mer',
			location: 'La Seyne-sur-Mer',
			event: 'Solo homme',
			result: '8e de la finale A',
			level: 'europe',
		},
		{
			year: 2020,
			competition: 'Championnats de France d’aviron de mer',
			location: 'Saint-Nazaire',
			event: 'Solo homme',
			result: 'Champion de France',
			level: 'france',
			medal: 'gold',
			highlight: true,
		},
		{
			year: 2019,
			competition: 'Championnats de France de sprint',
			location: 'Gérardmer',
			event: 'Double homme, avec Gaëtan Delhon',
			result: 'Champion de France',
			level: 'france',
			medal: 'gold',
		},
		{
			year: 2019,
			competition: 'Jeux méditerranéens de plage',
			location: 'Patras (Grèce)',
			event: 'Double homme',
			result: 'Médaille d’or',
			level: 'international',
			medal: 'gold',
		},
		{
			year: 2019,
			competition: 'Jeux méditerranéens de plage',
			location: 'Patras (Grèce)',
			event: 'Relais',
			result: 'Médaille de bronze',
			level: 'international',
			medal: 'bronze',
		},
		{
			year: 2018,
			competition: 'Championnats du monde d’aviron de mer',
			location: 'Sidney (Canada)',
			event: 'Double homme, pour Monaco',
			result: 'Finaliste',
			level: 'monde',
		},
	],
};

export const summaries: Record<'chloe' | 'vincent', Summary> = {
	chloe: {
		nationalTitles: 10,
		items: [
			'10 titres nationaux en aviron de mer, et 10 médailles d’argent ou de bronze',
			'3 médailles européennes, dont un titre',
			'Nombreuses participations aux championnats du monde, avec une médaille de bronze en 2025',
			'5 sélections en équipe de France depuis 2022',
		],
	},
	vincent: {
		nationalTitles: 10,
		items: [
			'10 titres nationaux : mer, rivière (sprint et bateaux longs) et aviron indoor (2 000 m élite et relais)',
			'18 médailles d’argent et de bronze',
			'2 médailles de bronze européennes',
			'Vice-champion du monde d’aviron de mer (coastal rowing) en double mixte en 2023',
			'Médaille de bronze aux championnats du monde de beach rowing en 2024',
			'Médaille d’or aux Jeux méditerranéens de plage en double homme, à Patras en 2019',
			'Médaille de bronze aux Jeux méditerranéens de plage en relais, à Patras en 2019',
			'Médaille de bronze aux Jeux méditerranéens de plage en solo homme, à Heraklion en 2023',
			'9 participations aux championnats du monde',
		],
	},
};

export const duo = [
	{
		year: 2026,
		title: 'Vice-champions de France en double mixte',
		detail: 'Championnats de France de sprint de plage, La Seyne-sur-Mer',
	},
];

export function sortByYear(results: Result[]): Result[] {
	return [...results].sort((a, b) => b.year - a.year);
}
