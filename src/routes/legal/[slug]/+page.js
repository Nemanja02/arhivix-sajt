import { error } from '@sveltejs/kit';
import { legalPages } from '$lib/data/legalPages.js';

export function load({ params }) {
  const page = legalPages[params.slug];

  if (!page) {
    throw error(404, 'Stranica nije pronađena');
  }

  return { page };
}
