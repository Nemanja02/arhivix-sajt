import { legalPages as srPages, legalNavItems as srNav } from './sr.js';
import { legalPages as enPages, legalNavItems as enNav } from './en.js';
import { legalPages as dePages, legalNavItems as deNav } from './de.js';

const allPages = { sr: srPages, en: enPages, de: dePages };
const allNav = { sr: srNav, en: enNav, de: deNav };

export function getLegalPage(locale = 'sr', slug) {
  const pages = allPages[locale] || allPages.sr;
  return pages[slug] || null;
}

export function getLegalNavItems(locale = 'sr') {
  return allNav[locale] || allNav.sr;
}

export function getAllSlugs() {
  return Object.keys(allPages.sr);
}
