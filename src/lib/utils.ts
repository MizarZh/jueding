import type { Card } from '$lib/types';
import { defaultPages } from '$lib/types';
import { LocalStorage } from '$lib';

export function readPages(): Record<string, Card> {
	let pages_raw: string | null = LocalStorage.get('pages');
	if (pages_raw == null) {
		pages_raw = JSON.stringify(defaultPages);
		LocalStorage.set('pages', pages_raw);
	}
	return JSON.parse(pages_raw);
}

