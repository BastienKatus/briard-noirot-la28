export const site = {
	name: 'Chloé Briard & Vincent Noirot',
	shortName: 'Briard · Noirot',
	description:
		'Chloé Briard et Vincent Noirot, rameurs de l’équipe de France de beach rowing sprint (BRS), visent les Jeux olympiques de Los Angeles 2028. Soutenez leur projet.',

	// À remplacer par la vraie adresse avant la mise en ligne : le formulaire de contact écrit à cette adresse.
	contactEmail: 'contact@example.com',

	nav: [
		{ label: 'Accueil', href: '/' },
		{ label: 'Albums', href: '/albums/' },
		{ label: 'Palmarès', href: '/palmares/' },
		{ label: 'Dons & infos', href: '/infos/' },
	],

	// Sponsors et personnes qui nous accompagnent : section « Nos partenaires » de l'accueil et encadré du pied de page.
	// logo = fichier de src/assets/logos/, affiché seulement dans la section de l'accueil.
	supporters: [
		{ name: 'Swift Racing', logo: 'swift-racing.jpg' },
		{ name: 'Aviron Club de Lyon Caluire', logo: 'aviron-club-lyon-caluire.png' },
		{ name: 'Ville de Caluire', logo: 'ville-caluire.png' },
	],

	donation: {
		platformName: 'Soutiens ton Sportif',
		platformUrl: 'https://www.soutienstonsportif.fr/',
		// Objectif affiché tant que la plateforme ne fournit pas le sien.
		goal: 20000,
		// Une cagnotte par athlète, la plateforme n'acceptant pas de cagnotte commune : une jauge par entrée.
		// projectSlug = fin de l'URL soutienstonsportif.fr/project/<slug> ; vide tant que la page n'existe pas,
		// la jauge affiche alors « collecte bientôt en ligne ».
		// initialRaised = montant affiché tant que la jauge ne lit pas la plateforme (slug vide ou plateforme injoignable).
		projects: [
			{ athlete: 'Chloé', projectSlug: 'chloe-briard-aviron-beach-rowing-sprint', initialRaised: 0 },
			{ athlete: 'Vincent', projectSlug: '', initialRaised: 0 },
		],
	},
};
