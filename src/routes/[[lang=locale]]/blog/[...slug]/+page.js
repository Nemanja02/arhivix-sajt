import { error } from '@sveltejs/kit';
import { getPost, getAllSlugs } from '$lib/data/blogPosts/index.js';
import { getLocaleFromParam } from '$lib/i18n';

export function load({ params }) {
  const locale = getLocaleFromParam(params.lang);
  const slug = params.slug;
  const post = getPost(locale, slug);

  if (!post) {
    throw error(404, 'Blog post not found');
  }

  return { post };
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
