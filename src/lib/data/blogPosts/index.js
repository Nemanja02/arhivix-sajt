import { blogPosts as srPosts } from './sr.js';
import { blogPosts as enPosts } from './en.js';
import { blogPosts as dePosts } from './de.js';

const allPosts = { sr: srPosts, en: enPosts, de: dePosts };

export function getAllPosts(locale = 'sr') {
  const posts = allPosts[locale] || allPosts.sr;
  return Object.values(posts).sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(locale = 'sr', slug) {
  const posts = allPosts[locale] || allPosts.sr;
  return posts[slug] || null;
}

export function getRelatedPosts(locale = 'sr', slug, limit = 3) {
  return getAllPosts(locale).filter(p => p.slug !== slug).slice(0, limit);
}

export function getAllSlugs() {
  return Object.keys(allPosts.sr);
}
