// Les fichiers sont dans src/assets/photos/. Pour ajouter une photo : la déposer dans ce dossier,
// puis l'ajouter à un album ci-dessous (l'ordre de la liste est l'ordre d'affichage).

export interface GalleryPhoto {
	file: string;
	alt: string;
	caption?: string;
}

export interface Album {
	id: string;
	title: string;
	description: string;
	photos: GalleryPhoto[];
}

const antalya = 'Beach Sprint Finals 2025, Antalya';

export const albums: Album[] = [
	{
		id: 'antalya-2025',
		title: 'World Rowing Beach Sprint Finals 2025',
		description: 'Antalya (Turquie) : sprint sur le sable, départs sous l’arche et podiums mondiaux en équipe de France.',
		photos: [
			{ file: 'antalya-2025-equipe-france.jpg', alt: 'Trois rameurs de l’équipe de France, médaille au cou, devant les drapeaux', caption: antalya },
			{ file: 'antalya-2025-sprint-1.jpg', alt: 'Chloé Briard s’élance en courant sur le sable', caption: antalya },
			{ file: 'antalya-2025-medailles-2.jpg', alt: 'Duo français médaillé, drapeau tricolore déployé', caption: antalya },
			{ file: 'antalya-2025-arche-1.jpg', alt: 'Départ en course sous l’arche World Rowing', caption: antalya },
			{ file: 'antalya-2025-podium-4.jpg', alt: 'Podium du double mixte sur la plage d’Antalya', caption: antalya },
			{ file: 'antalya-2025-portrait-chloe.jpg', alt: 'Portrait de Chloé Briard en tenue de l’équipe de France', caption: antalya },
			{ file: 'antalya-2025-sortie-tente.jpg', alt: 'Chloé Briard sort de la zone d’appel', caption: antalya },
			{ file: 'antalya-2025-podium-1.jpg', alt: 'Podium avec les médaillés américains, lituaniens et français', caption: antalya },
			{ file: 'antalya-2025-bouquets.jpg', alt: 'Deux rameurs français souriants, bouquet à la main', caption: antalya },
			{ file: 'antalya-2025-arche-2.jpg', alt: 'Rameuse au départ, en appui sur le sable', caption: antalya },
			{ file: 'antalya-2025-medailles-1.jpg', alt: 'Duo français médaillé avec les mascottes de la compétition', caption: antalya },
			{ file: 'antalya-2025-podium-3.jpg', alt: 'Podium « Glory awaits you » avec les drapeaux des nations', caption: antalya },
			{ file: 'antalya-2025-sprint-2.jpg', alt: 'Chloé Briard en pleine foulée vers le bateau', caption: antalya },
			{ file: 'antalya-2025-depart.jpg', alt: 'Rameuse accroupie dans les starting-blocks de sable', caption: antalya },
			{ file: 'antalya-2025-podium-2.jpg', alt: 'Vue large du podium des Beach Sprint Finals', caption: antalya },
		],
	},
	{
		id: 'en-mer',
		title: 'En mer',
		description: 'Entraînements et courses : double, solo et bateaux d’équipage, du lever du jour aux vagues de la compétition.',
		photos: [
			{ file: 'double-lever-du-jour.jpg', alt: 'Double en mer calme au lever du jour, reflets sur l’eau' },
			{ file: 'duo-en-mer.jpg', alt: 'Double mixte lancé à pleine vitesse dans les vagues' },
			{ file: 'double-mixte-mer-1.jpg', alt: 'Double mixte en tenues de l’équipe de France' },
			{ file: 'vincent-en-mer.jpg', alt: 'Vincent Noirot en solo sur une mer calme' },
			{ file: 'c4x-france-1.jpg', alt: 'Quatre de couple barré français dans les gerbes d’eau' },
			{ file: 'double-mixte-mer-2.jpg', alt: 'Double mixte en tenues de l’équipe de France, gros plan' },
			{ file: 'depart-plage.jpg', alt: 'Mise à l’eau depuis la plage sous un ciel bleu' },
			{ file: 'solo-mer.jpg', alt: 'Rameur en solo, tenue de l’équipe de France' },
			{ file: 'c4x-france-3.jpg', alt: 'Équipage français en pleine course' },
			{ file: 'course-plage.jpg', alt: 'Course sur la plage au pied d’une digue' },
			{ file: 'c4x-france-2.jpg', alt: 'Quatre de couple barré français, drapeaux tricolores à l’arrière' },
			{ file: 'equipe-france-dans-l-eau.jpg', alt: 'Cinq rameurs de l’équipe de France posent dans l’eau' },
		],
	},
	{
		id: 'podiums',
		title: 'Podiums & équipe de France',
		description: 'Championnats de France et rendez-vous internationaux d’aviron de mer.',
		photos: [
			{ file: 'coastal-equipe-france.jpg', alt: 'Équipe de France médaillée, drapeau tricolore', caption: 'Coastal Championships' },
			{ file: 'podium-france-femmes.jpg', alt: 'Podium féminin avec le fanion de la Fédération française d’aviron', caption: 'Championnats de France 2026' },
			{ file: 'podium-international.jpg', alt: 'Podium international avec les drapeaux français, italien et britannique' },
			{ file: 'podium-france-hommes.jpg', alt: 'Podium masculin avec le fanion de la Fédération française d’aviron', caption: 'Championnats de France 2026' },
			{ file: 'coastal-podium.jpg', alt: 'Podium des Coastal Championships avec les équipes médaillées', caption: 'Coastal Championships' },
		],
	},
];
