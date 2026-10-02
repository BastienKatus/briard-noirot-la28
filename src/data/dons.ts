// Règles vérifiées le 2 octobre 2026 : CGU de soutienstonsportif.fr, service-public.gouv.fr (F426, F22263), BOFiP.
// À revérifier à chaque loi de finances.

export const steps = [
	{
		title: 'Rendez-vous sur notre page',
		text: 'Notre collecte est hébergée par Soutiens ton Sportif, la plateforme de la Fondation du Sport Français.',
	},
	{
		title: 'Donnez en quelques clics',
		text: 'Paiement par carte bancaire sécurisé (3D Secure), de 15 € à 9 900 € par don.',
	},
	{
		title: 'Recevez votre reçu fiscal',
		text: 'La Fondation vous envoie automatiquement un reçu fiscal (CERFA) par e-mail.',
	},
];

export const taxCards = [
	{
		audience: 'Particuliers',
		rate: '66 %',
		summary: 'de réduction d’impôt sur le revenu',
		rules: [
			'Dans la limite de 20 % de votre revenu imposable.',
			'L’excédent est reporté sur les 5 années suivantes.',
			'Article 200 du Code général des impôts.',
		],
		examples: [
			{ gift: 50, cost: 17 },
			{ gift: 100, cost: 34 },
			{ gift: 300, cost: 102 },
		],
		source: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F426',
	},
	{
		audience: 'Entreprises',
		rate: '60 %',
		summary: 'de réduction d’impôt (IS ou IR)',
		rules: [
			'Dans la limite de 20 000 € ou de 0,5 % du chiffre d’affaires HT (le plus élevé des deux).',
			'L’excédent est reporté sur les 5 exercices suivants.',
			'Au-delà de 3 000 €, le don passe par une convention de mécénat avec la Fondation : contactez-nous.',
		],
		examples: [
			{ gift: 1000, cost: 400 },
			{ gift: 3000, cost: 1200 },
		],
		source: 'https://entreprendre.service-public.gouv.fr/vosdroits/F22263',
	},
];

export const comparison = {
	columns: ['Mécénat (don)', 'Sponsoring (parrainage)'],
	rows: [
		{ label: 'Principe', values: ['Un soutien sans contrepartie équivalente', 'Une prestation de visibilité achetée'] },
		{
			label: 'Contreparties',
			values: ['Symboliques (citation du nom ou du logo), au plus 25 % du don', 'Visibilité publicitaire : tenues, bateau, réseaux, événements'],
		},
		{ label: 'Fiscalité', values: ['Réduction d’impôt de 60 %', 'Charge déductible du résultat, facturée avec TVA'] },
		{ label: 'Formalités', values: ['Reçu fiscal émis par la Fondation du Sport Français', 'Contrat et facture entre l’entreprise et les athlètes'] },
	],
};

export const faq = [
	{
		question: 'Où va mon argent ?',
		answer:
			'La Fondation du Sport Français collecte les dons pour notre compte et nous les reverse chaque mois. Elle retient 10 % de chaque don pour le fonctionnement de la plateforme, frais bancaires compris.',
	},
	{
		question: 'Ma famille peut-elle donner ?',
		answer:
			'Non, pas via la plateforme : les règles de la Fondation excluent les dons des membres de notre famille et de notre foyer fiscal. Vos encouragements restent les bienvenus !',
	},
	{
		question: 'Puis-je donner plus de 3 000 € ?',
		answer:
			'Oui, mais au-delà de 3 000 € le don fait l’objet d’une convention de mécénat signée avec la Fondation, hors plateforme. Écrivez-nous et nous vous mettrons en relation.',
	},
	{
		question: 'Que se passe-t-il si l’objectif n’est pas atteint ?',
		answer: 'Rien de particulier : chaque don nous est reversé au fil de la collecte, quel que soit le montant final.',
	},
	{
		question: 'Mon don est-il remboursable ?',
		answer: 'Non, un don est irrévocable. En cas de besoin, il peut être réaffecté au fonds de solidarité de la Fondation.',
	},
	{
		question: 'Puis-je recevoir une contrepartie ?',
		answer:
			'Une attention symbolique, oui : la loi limite la contrepartie à 25 % du don, et à 73 € au plus pour un particulier, faute de quoi la réduction d’impôt est perdue.',
	},
];
