export const site = {
	name: 'Chloé Briard & Vincent Noirot',
	shortName: 'Briard · Noirot',
	// Titre et description de l'accueil dans les moteurs de recherche ; les autres pages passent les leurs à BaseLayout.
	title: 'Chloé Briard et Vincent Noirot · Aviron de mer, JO Los Angeles 2028',
	description:
		'Chloé Briard et Vincent Noirot, rameurs de l’équipe de France d’aviron de mer (beach rowing sprint), visent les JO de Los Angeles 2028. Soutenez-les !',
	// Image d'aperçu des liens partagés (réseaux sociaux, messageries), recadrée en 1200 × 630.
	share: {
		photo: 'duo-en-mer.jpg',
		alt: 'Double mixte lancé à pleine vitesse dans les vagues',
	},

	// Le formulaire de contact écrit à cette adresse, redirigée chez IONOS vers une boîte personnelle.
	contactEmail: 'contact@briard-noirot-la28.fr',
	// Web3Forms relaie le formulaire vers contactEmail. La clé est publique par conception : elle figure dans la page.
	contactForm: {
		endpoint: 'https://api.web3forms.com/submit',
		accessKey: 'e03ce2bb-42ed-44b2-aa28-e1bd54956dac',
	},

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
