import { error } from '@sveltejs/kit';
import { blogPosts } from '$lib/data/blogPosts.js';

export function load({ params }) {
  const slug = params.slug;
  const post = blogPosts[slug];

  if (!post) {
    throw error(404, 'Blog post nije pronađen');
  }

  return { post };
}
