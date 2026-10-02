import { palmares, type Result } from './palmares';

export interface Athlete {
	id: 'chloe' | 'vincent';
	firstName: string;
	lastName: string;
	discipline: string;
	tags: string[];
	photo: string;
	photoAlt: string;
	/** Cadrage de la photo dans la carte (valeur CSS object-position). */
	photoPosition?: string;
	bio: string[];
	aside?: { label: string; text: string; source: string };
	results: Result[];
}

export const athletes: Athlete[] = [
	{
		id: 'chloe',
		firstName: 'Chloé',
		lastName: 'Briard',
		discipline: 'Solo femme · double mixte',
		tags: ['Aviron Club Lyon-Caluire', 'Formée à Saint-Malo', 'Équipe de France'],
		photo: 'antalya-2025-portrait-chloe.jpg',
		photoAlt: 'Chloé Briard en tenue de l’équipe de France aux Beach Sprint Finals 2025',
		photoPosition: 'center 22%',
		bio: [
			'Issue d’une famille de rameurs malouins, Chloé a fait ses classes à la Société nautique de la Baie de Saint-Malo avant de rejoindre l’Aviron Club Lyon-Caluire en 2026.',
			'Médaillée de bronze mondiale en double mixte en 2025, elle est sacrée championne de France de sprint de plage en solo en 2026.',
		],
		aside: {
			label: 'Le saviez-vous ?',
			text: 'Aux Beach Sprint Finals 2025, Chloé et Antoine Lefebvre ont détenu le record du monde pendant quelques minutes, en huitième de finale.',
			source: 'FFAviron',
		},
		results: palmares.chloe,
	},
	{
		id: 'vincent',
		firstName: 'Vincent',
		lastName: 'Noirot',
		discipline: 'Solo homme · double mixte',
		tags: ['Aviron Club Lyon-Caluire', 'Originaire de Toulon', 'Équipe de France'],
		photo: 'vincent-en-mer.jpg',
		photoAlt: 'Vincent Noirot en solo sur une mer calme',
		photoPosition: '45% center',
		bio: [
			'Toulonnais, Vincent s’est construit à la Société nautique de Monaco, qu’il a représentée aux Mondiaux d’aviron de mer 2018. Il rame depuis 2021 à l’Aviron Club Lyon-Caluire, où il siège aussi au comité directeur.',
			'Champion de France de solo en mer en 2020, il décroche le bronze mondial en 2024 aux Beach Sprint Finals de Gênes, puis le titre national en huit avec Lyon-Caluire en 2026.',
		],
		aside: {
			label: 'En une phrase',
			text: '« L’aviron a changé ma vie. »',
			source: 'Mag Aviron, 2024',
		},
		results: palmares.vincent,
	},
];
