import { error } from '@sveltejs/kit';
import { getLegalPage, getAllSlugs } from '$lib/data/legalPages/index.js';
import { getLocaleFromParam } from '$lib/i18n';

export function load({ params }) {
  const locale = getLocaleFromParam(params.lang);
  const page = getLegalPage(locale, params.slug);

  if (!page) {
    throw error(404, 'Page not found');
  }

  return { page };
}

export function entries() {
  const slugs = getAllSlugs();
  const result = [];
  for (const slug of slugs) {
    result.push({ slug });
    result.push({ lang: 'en', slug });
    result.push({ lang: 'de', slug });
  }
  return result;
}
