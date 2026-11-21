import { palmares, summaries, type Result, type Summary } from './palmares';

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
	/** Titre de la présentation rédigée par l'athlète. */
	tagline: string;
	bio: string[];
	/** Suite de la présentation, repliée sous « Lire la suite ». */
	bioMore: string[];
	aside?: { label: string; text: string; source: string };
	summary: Summary;
	results: Result[];
}

export const athletes: Athlete[] = [
	{
		id: 'chloe',
		firstName: 'Chloé',
		lastName: 'Briard',
		discipline: 'Solo femme · double mixte',
		tags: ['Aviron Club de Lyon Caluire', 'Formée à Saint-Malo', 'Équipe de France'],
		photo: 'antalya-2025-portrait-chloe.jpg',
		photoAlt: 'Chloé Briard en tenue de l’équipe de France aux Beach Sprint Finals 2025',
		photoPosition: 'center 22%',
		tagline: 'Entre médecine et passion pour l’aviron',
		bio: [
			'J’ai commencé l’aviron en 2008 à Saint-Malo, dans un environnement où cette passion faisait déjà partie de la famille. J’ai naturellement suivi les traces de mes parents, eux-mêmes rameurs, notamment en Doris, une embarcation emblématique de l’aviron de mer.',
			'Au fil des années, je me suis spécialisée dans l’aviron de mer, d’abord en endurance, puis en BRS, une discipline dans laquelle je poursuis aujourd’hui mon projet sportif de haut niveau. Après plusieurs expériences et résultats internationaux, mon ambition est désormais de continuer à progresser et de tout mettre en œuvre pour atteindre les Jeux Olympiques de Los Angeles en 2028.',
		],
		bioMore: [
			'En parallèle de mon engagement sportif, je poursuis mon internat en médecine générale à Lyon. J’ai rejoint l’Aviron Club de Lyon Caluire en 2025, à l’occasion de mon installation dans la région pour ma formation médicale.',
			'Les Hospices Civils de Lyon et l’Université de Lyon 1 m’accompagnent dans cette double ambition en facilitant autant que possible l’organisation de mon emploi du temps. Toutefois, les exigences de l’internat restent importantes : gardes, horaires variables et journées parfois très longues rendent la conciliation entre médecine et sport particulièrement exigeante.',
			'Dans ce contexte, la récupération est essentielle, mais le temps disponible est extrêmement précieux. Le soutien financier que nous recherchons me permettrait notamment d’acquérir du matériel spécifique de récupération, afin d’optimiser chaque moment disponible et de mieux gérer les contraintes physiques liées à mon double engagement.',
			'Je suis convaincue qu’il est possible de poursuivre une carrière médicale tout en portant un projet sportif ambitieux. Mon objectif est de continuer à faire vivre ces deux passions sans devoir renoncer à l’une pour réussir dans l’autre.',
			'Votre soutien m’aidera à préserver cet équilibre, à poursuivre ma progression sportive et à me donner les moyens de viser mon rêve olympique : Los Angeles 2028.',
		],
		aside: {
			label: 'Le saviez-vous ?',
			text: 'Aux Beach Sprint Finals 2025, Chloé et Antoine Lefebvre ont détenu le record du monde pendant quelques minutes, en huitième de finale.',
			source: 'FFAviron',
		},
		summary: summaries.chloe,
		results: palmares.chloe,
	},
	{
		id: 'vincent',
		firstName: 'Vincent',
		lastName: 'Noirot',
		discipline: 'Solo homme · double mixte',
		tags: ['Aviron Club de Lyon Caluire', 'Originaire de Toulon', 'Équipe de France'],
		photo: 'vincent-en-mer.jpg',
		photoAlt: 'Vincent Noirot en solo sur une mer calme',
		photoPosition: '45% center',
		tagline: '18 ans d’aviron, un objectif olympique',
		bio: [
			'Originaire de Toulon, je pratique l’aviron depuis 18 ans. Mon parcours m’a conduit à rejoindre l’Aviron Club de Lyon Caluire en 2014, club au sein duquel j’évolue depuis, à l’exception de deux saisons passées à Monaco.',
			'Depuis mes débuts, j’ai toujours fait le choix de construire mon parcours sportif en parallèle de ma vie professionnelle. À travers des études en alternance, j’ai appris à concilier formation, travail et entraînements. Un équilibre que je poursuis aujourd’hui en tant qu’ingénieur méthodes et industrialisation dans une PME spécialisée dans le repoussage des métaux.',
		],
		bioMore: [
			'Cet engagement m’a permis de construire un parcours sportif riche, marqué par plusieurs titres nationaux et deux podiums aux Championnats du monde, avec une médaille d’argent en 2023 et une médaille de bronze en 2024. Aujourd’hui, je poursuis cette aventure au sein du collectif français de BRS, avec les Jeux Olympiques de Los Angeles 2028 en ligne de mire.',
			'Mais atteindre le haut niveau tout en conservant une activité professionnelle à temps plein demande d’importants sacrifices. Pour participer aux stages, déplacements et compétitions internationales, je dois régulièrement poser des congés sans solde. Ces absences entraînent une perte directe de revenus et fragilisent progressivement mon équilibre financier.',
			'Aujourd’hui, cette réalité devient un véritable enjeu pour la poursuite de mon projet. Je souhaite continuer à progresser et à représenter la France sans que les contraintes financières ne deviennent un frein à mes ambitions.',
			'Votre soutien peut faire la différence. En contribuant à cette aventure, vous m’aidez à poursuivre 18 années d’engagement et à me donner les moyens de réaliser un rêve : devenir Olympien.',
		],
		aside: {
			label: 'En une phrase',
			text: '« L’aviron a changé ma vie. »',
			source: 'Mag Aviron, 2024',
		},
		summary: summaries.vincent,
		results: palmares.vincent,
	},
];
