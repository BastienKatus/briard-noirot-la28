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
			{ file: 'solo-mer-calme.jpg', alt: 'Rameur en solo sur une mer d’huile, pelle aux couleurs de la France' },
			{ file: 'sortie-bateau-plage.jpg', alt: 'Rameur de l’équipe de France bondit de son bateau vers la plage' },
			{ file: 'solo-contre-jour.jpg', alt: 'Silhouette d’un rameur en solo à contre-jour, soleil bas sur la mer' },
			{ file: 'portage-bateau-plage.jpg', alt: 'Rameur de l’équipe de France porte l’avant de son bateau au bord de l’eau' },
			{ file: 'solo-bord-de-plage.jpg', alt: 'Rameur de l’équipe de France assis dans son solo au bord de l’eau' },
			{ file: 'portrait-casquette-swift.jpg', alt: 'Portrait d’un rameur en casquette Swift Racing et lunettes de soleil' },
			{ file: 'casquette-swift-racing.jpg', alt: 'Casquette Swift Racing vue de dos' },
			{ file: 'chloe-solo-bouees.jpg', alt: 'Chloé Briard en solo, bouées jaunes du parcours derrière elle' },
			{ file: 'chloe-gerbe-ecume.jpg', alt: 'Chloé Briard traverse une gerbe d’écume' },
			{ file: 'double-mixte-vague.jpg', alt: 'Double mixte français devant une vague qui déferle' },
			{ file: 'chloe-sprint-sable.jpg', alt: 'Chloé Briard sprinte sur le sable' },
			{ file: 'chloe-double-vagues.jpg', alt: 'Chloé Briard et son coéquipier franchissent les vagues en double mixte' },
			{ file: 'embarquement-vagues.jpg', alt: 'Rameuse de l’équipe de France saute dans son bateau au milieu des vagues' },
			{ file: 'double-mixte-mer-calme.jpg', alt: 'Double mixte français sur une mer calme, pelles tricolores' },
			{ file: 'chloe-passage-vague.jpg', alt: 'Chloé Briard passe une vague en double, l’écume jaillit autour d’elle' },
			{ file: 'double-mixte-deferlante.jpg', alt: 'Double mixte français pris dans une déferlante, bateau World Rowing' },
			{ file: 'rameuse-saut-vagues.jpg', alt: 'Rameuse de l’équipe de France bondit dans les vagues' },
			{ file: 'double-bouee-red-bull.jpg', alt: 'Double français contourne une bouée devant une plage bondée' },
			{ file: 'double-mixte-bouee-dos.jpg', alt: 'Double mixte français vu de dos, près d’une bouée rouge' },
			{ file: 'double-mixte-cote-rocheuse.jpg', alt: 'Double mixte français dans les vagues, côte rocheuse en arrière-plan' },
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
			{
				file: 'mondiaux-mer-2023-podium.jpg',
				alt: 'Podium du double mixte aux championnats du monde d’aviron de mer : Vincent Noirot et sa coéquipière, médaillés d’argent, à gauche',
				caption: 'Mondiaux d’aviron de mer 2023, Barletta',
			},
			{
				file: 'heraklion-2023-podium.jpg',
				alt: 'Vincent Noirot, médaille de bronze, sur le podium du solo homme des Jeux méditerranéens de plage',
				caption: 'Jeux méditerranéens de plage 2023, Heraklion',
			},
			{ file: 'accolade-equipe-france.jpg', alt: 'Accolade entre deux rameurs de l’équipe de France après une course World Rowing' },
			{
				file: 'pharoes-2026-medailles.jpg',
				alt: 'Mathis Nottelet et Chloé Briard montrent leur médaille devant le panneau du Pharoes Trophy',
				caption: 'Pharoes Trophy 2026, Oeiras',
			},
			{ file: 'chloe-ergometre.jpg', alt: 'Chloé Briard à l’ergomètre, en tenue de l’équipe de France' },
		],
	},
];
