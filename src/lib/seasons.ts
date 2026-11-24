// Début des saisons astronomiques (équinoxes et solstices) d'après J. Meeus, Astronomical Algorithms, chapitre 27 :
// précis à la minute près, sans dépendance. Calculé au build ; le navigateur ne fait que comparer des dates.

export const seasons = ['printemps', 'ete', 'automne', 'hiver'] as const;
export type Season = (typeof seasons)[number];

// Instant moyen de l'équinoxe de mars, du solstice de juin, de l'équinoxe de septembre et du solstice de décembre
// (jours juliens des éphémérides, années 1000 à 3000), en polynôme de (année − 2000) / 1000.
const MEAN = [
	[2451623.80984, 365242.37404, 0.05169, -0.00411, -0.00057],
	[2451716.56767, 365241.62603, 0.00325, 0.00888, -0.0003],
	[2451810.21715, 365242.01767, -0.11575, 0.00337, 0.00078],
	[2451900.05952, 365242.74049, -0.06223, -0.00823, 0.00032],
];

// Termes périodiques de correction (A, B, C).
const TERMS = [
	[485, 324.96, 1934.136],
	[203, 337.23, 32964.467],
	[199, 342.08, 20.186],
	[182, 27.85, 445267.112],
	[156, 73.14, 45036.886],
	[136, 171.52, 22518.443],
	[77, 222.54, 65928.934],
	[74, 296.72, 3034.906],
	[70, 243.58, 9037.513],
	[58, 119.81, 33718.147],
	[52, 297.17, 150.678],
	[50, 21.02, 2281.226],
	[45, 247.54, 29929.562],
	[44, 325.15, 31555.956],
	[29, 60.93, 4443.417],
	[18, 155.12, 67555.328],
	[17, 288.79, 4562.452],
	[16, 198.04, 62894.029],
	[14, 199.76, 31436.921],
	[12, 95.39, 14577.848],
	[12, 287.11, 31931.756],
	[12, 320.81, 34777.259],
	[9, 227.73, 1222.114],
	[8, 15.45, 16859.074],
];

const RAD = Math.PI / 180;
// Écart entre le temps des éphémérides et le temps universel : environ 69 s dans les années 2020.
const DELTA_T_DAYS = 69 / 86400;

/** Instant où commence une saison : index 0 = printemps, 1 = été, 2 = automne, 3 = hiver. */
export function seasonStart(year: number, index: number): Date {
	const y = (year - 2000) / 1000;
	const jde0 = MEAN[index].reduce((sum, coefficient, power) => sum + coefficient * y ** power, 0);
	const t = (jde0 - 2451545) / 36525;
	const w = (35999.373 * t - 2.47) * RAD;
	const dl = 1 + 0.0334 * Math.cos(w) + 0.0007 * Math.cos(2 * w);
	const s = TERMS.reduce((sum, [a, b, c]) => sum + a * Math.cos((b + c * t) * RAD), 0);
	const jd = jde0 + (0.00001 * s) / dl - DELTA_T_DAYS;
	return new Date((jd - 2440587.5) * 86400000);
}

const parisDay = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', month: '2-digit', day: '2-digit' });

/** Jour de Paris (« MM-JJ ») d'un instant. */
export function parisMonthDay(date: Date): string {
	const parts = Object.fromEntries(parisDay.formatToParts(date).map(({ type, value }) => [type, value]));
	return `${parts.month}-${parts.day}`;
}

/** Jour de Paris où commence chacune des quatre saisons, année par année : { 2027: ['03-20', '06-21', '09-23', '12-22'], … }. */
export function seasonCalendar(from: number, to: number): Record<number, string[]> {
	const calendar: Record<number, string[]> = {};
	for (let year = from; year <= to; year++) calendar[year] = seasons.map((_, index) => parisMonthDay(seasonStart(year, index)));
	return calendar;
}
