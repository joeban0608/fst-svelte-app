import type { PageLoad } from './$types';

export const load = (async () => {
	const myArray = [1, 2, 3, 4];

	return {
		ary: myArray
	};
}) satisfies PageLoad;
