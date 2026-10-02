export const site = {
	name: 'Chloé Briard & Vincent Noirot',
	shortName: 'Briard · Noirot',
	description:
		'Chloé Briard et Vincent Noirot, rameurs de l’équipe de France de beach sprint, visent les Jeux olympiques de Los Angeles 2028. Soutenez leur projet.',

	// À remplacer par la vraie adresse avant la mise en ligne : le formulaire de contact écrit à cette adresse.
	contactEmail: 'contact@example.com',

	nav: [
		{ label: 'Accueil', href: '/' },
		{ label: 'Albums', href: '/albums/' },
		{ label: 'Palmarès', href: '/palmares/' },
		{ label: 'Dons & infos', href: '/infos/' },
	],

	donation: {
		platformName: 'Soutiens ton Sportif',
		platformUrl: 'https://www.soutienstonsportif.fr/',
		// Slug de la page de collecte (soutienstonsportif.fr/project/<slug>). Vide tant que la page
		// n'existe pas : la jauge affiche alors « collecte bientôt en ligne ».
		projectSlug: '',
		// Objectif affiché tant que la plateforme ne fournit pas le sien. Les CGU plafonnent une cagnotte à 20 000 €.
		goal: 20000,
	},
};
