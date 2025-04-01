import type { Card } from '$lib/types';
import { defaultPages } from '$lib/types';
import { LocalStorage } from '$lib';

const pages: Record<string, Card> = LocalStorage.get('pages') || defaultPages;

export function load({ params }) {
	return {
		page: pages[params.slug] || pages['work-dont-know-what-to-do']
	};
}
