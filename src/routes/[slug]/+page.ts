import { readPages } from '$lib/utils.js';

const pages = readPages();

export function load({ params }) {
	return {
		page: pages[params.slug] || pages['work-dont-know-what-to-do']
	};
}
