export const hero = {
	eyebrow: 'Équipe de France · Beach rowing sprint',
	title: 'Cap sur Los Angeles 2028',
	lead: 'Chloé Briard et Vincent Noirot rament pour décrocher les deux places françaises du beach rowing sprint aux Jeux de Los Angeles, et y courir ensemble le double mixte.',
	photo: 'duo-en-mer.jpg',
	// Cadrage sur grand écran : la photo est agrandie (photoScale) puis calée selon photoPosition, pour sortir
	// les rameurs de la zone du texte et couper le filigrane du bas. Mettre 1 et 'center' pour une photo neutre.
	photoScale: 1.5,
	photoPosition: 'left 61%',
	facts: [
		{ value: '2', label: 'médailles de bronze mondiales' },
		{ value: '2026', label: 'vice-champions de France en double mixte' },
	],
	countdown: {
		// Premier jour du beach rowing sprint olympique, heure de Long Beach (PDT, UTC-7).
		target: '2028-07-24T00:00:00-07:00',
		label: 'avant le beach rowing sprint olympique',
		date: '24-25 juillet 2028 · Long Beach',
	},
};

export const story = {
	eyebrow: 'Les rameurs',
	title: 'Une rencontre sur le sable, un rêve à deux',
	paragraphs: [
		'C’est sur le sable, autour de notre passion commune pour l’aviron, que nos chemins se sont croisés. Le Beach Rowing nous a réunis, et il est aujourd’hui bien plus qu’un sport : il est le fil conducteur de notre histoire et du projet que nous construisons ensemble.',
		'Au fil des compétitions, des entraînements et des aventures internationales, nous avons appris à avancer ensemble, à partager les exigences du haut niveau et à nous soutenir dans chaque étape de nos parcours.',
		'Aujourd’hui, nous avons décidé de donner une nouvelle dimension à cette aventure en associant pleinement notre projet de couple à nos ambitions sportives individuelles. Car si nous partageons le même rêve olympique, le chemin pour y parvenir reste propre à chacun d’entre nous. La sélection pour les Jeux de Los Angeles 2028 se jouera individuellement, et chacun devra gagner sa place au sein de l’équipe de France.',
		'Entre vie professionnelle, entraînements quotidiens, stages et compétitions internationales, nous faisons le choix de mener ces deux parcours de front, avec une conviction : être ensemble est une force pour aller chacun le plus loin possible dans notre discipline.',
		'Nous croyons en la force de notre duo, dans le sport comme dans la vie. Et si notre histoire a commencé sur le sable, nous comptons bien continuer à l’écrire ensemble, au rythme des vagues et des départs de course.',
	],
	signature: 'Chloé & Vincent',
	tagline: 'Une histoire née sur le sable, deux parcours individuels, un rêve commun : Los Angeles 2028.',
};

export const project = {
	eyebrow: 'Le projet',
	title: 'Le beach rowing sprint entre aux Jeux',
	paragraphs: [
		'Départ en courant sur le sable, slalom en mer entre les bouées, retour sur la plage et sprint jusqu’à la ligne : le beach rowing sprint est une course d’aviron explosive de quelques minutes, au programme olympique pour la première fois à Los Angeles.',
		'Chaque pays ne peut qualifier qu’une rameuse et un rameur en solo, et ce sont eux qui forment le double mixte olympique. Notre projet : décrocher ces deux places et porter ensemble les couleurs de la France à Long Beach.',
	],
	photo: 'double-lever-du-jour.jpg',
	photoAlt: 'Double en mer calme au lever du jour, reflets sur l’eau',
	timeline: [
		{ when: '2026', title: 'Confirmer', text: 'Titres et podiums nationaux, premières victoires sur le circuit international.' },
		{
			when: '2027',
			title: 'Se qualifier',
			text: 'Jeux européens en Turquie (juin) et championnats du monde à Oeiras (Portugal) : les épreuves qualificatives olympiques.',
		},
		{ when: '2028', title: 'Los Angeles', text: 'Aucune épreuve qualificative : place aux Jeux, les 24 et 25 juillet à Long Beach.' },
	],
	needs: [
		{ title: 'Matériel', text: 'Bateaux d’aviron de mer, rames et équipement.' },
		{ title: 'Compétitions', text: 'Déplacements et inscriptions sur le circuit international.' },
		{ title: 'Préparation', text: 'Stages, préparation physique et récupération.' },
		{ title: 'Accompagnement', text: 'Suivi médical, kinésithérapie et nutrition.' },
	],
};

export const support = {
	eyebrow: 'Soutenir le projet',
	title: 'Chaque don nous rapproche de Los Angeles',
	text: 'Votre soutien finance directement notre préparation. Un don de 100 € ne vous coûte que 34 € après réduction d’impôt.',
	twoCagnottes:
		'Il n’est pas possible d’ouvrir une cagnotte commune : chacun de nous a la sienne, et vous pouvez soutenir l’un, l’autre ou les deux.',
};

export const partners = {
	eyebrow: 'Ils nous soutiennent',
	title: 'Nos partenaires',
	list: ['Swift Racing', 'Ville de Caluire', 'Aviron Club de Lyon Caluire'],
};
