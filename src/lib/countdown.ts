export interface Remaining {
	d: number;
	h: number;
	m: number;
	s: number;
}

export function remaining(target: string, now = Date.now()): Remaining {
	const total = Math.max(0, Math.floor((new Date(target).getTime() - now) / 1000));
	return {
		d: Math.floor(total / 86400),
		h: Math.floor((total % 86400) / 3600),
		m: Math.floor((total % 3600) / 60),
		s: total % 60,
	};
}

export const pad = (n: number) => String(n).padStart(2, '0');
