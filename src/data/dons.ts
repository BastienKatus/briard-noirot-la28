// Informations volontairement générales : le détail des règles relève de Soutiens ton Sportif (collecte) et de
// service-public.gouv.fr (réduction d'impôt), vers lesquels la page Dons & infos renvoie. Taux vérifiés le
// 21 novembre 2026 (F426, F22263), à revérifier à chaque loi de finances.

export const steps = [
	{
		title: 'Choisissez votre cagnotte',
		text: 'Chloé et Vincent ont chacun leur cagnotte sur Soutiens ton Sportif, la plateforme de la Fondation du Sport Français.',
	},
	{
		title: 'Donnez en quelques clics',
		text: 'Paiement sécurisé par carte bancaire, directement sur la plateforme.',
	},
	{
		title: 'Recevez votre reçu fiscal',
		text: 'La Fondation du Sport Français vous envoie un reçu fiscal par e-mail.',
	},
];

export const taxCards = [
	{
		audience: 'Particuliers',
		rate: '66 %',
		summary: 'de réduction d’impôt sur le revenu',
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
			values: ['Symboliques (citation du nom ou du logo)', 'Visibilité publicitaire : tenues, bateau, réseaux, événements'],
		},
		{ label: 'Fiscalité', values: ['Réduction d’impôt de 60 %', 'Charge déductible du résultat, facturée avec TVA'] },
		{ label: 'Formalités', values: ['Reçu fiscal émis par la Fondation du Sport Français', 'Contrat et facture entre l’entreprise et les athlètes'] },
	],
};

export const faq = [
	{
		question: 'Pourquoi deux cagnottes ?',
		answer:
			'Sur Soutiens ton Sportif, chaque cagnotte est ouverte au nom d’un seul athlète, qui en est le bénéficiaire : il n’est donc pas possible d’ouvrir une cagnotte commune. Chacun de nous a la sienne, et vous pouvez soutenir l’un, l’autre ou les deux.',
	},
	{
		question: 'Où va mon argent ?',
		answer:
			'La Fondation du Sport Français collecte les dons pour notre compte et nous les reverse. Ses conditions de collecte sont détaillées sur Soutiens ton Sportif.',
	},
	{
		question: 'Mes proches peuvent-ils donner ?',
		answer:
			'Certains dons ne sont pas acceptés, notamment au sein d’un même foyer fiscal : les conditions sont précisées sur Soutiens ton Sportif. Vos encouragements restent les bienvenus !',
	},
	{
		question: 'Puis-je faire un don important ou au nom de mon entreprise ?',
		answer: 'Oui : écrivez-nous et nous vous mettrons en relation avec la Fondation du Sport Français.',
	},
	{
		question: 'Puis-je recevoir une contrepartie ?',
		answer: 'Une attention symbolique, oui, dans les limites fixées par la loi pour conserver la réduction d’impôt.',
	},
];
