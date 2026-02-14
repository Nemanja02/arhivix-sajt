import sr from './translations/sr.js';
import en from './translations/en.js';
import de from './translations/de.js';

export const locales = ['sr', 'en', 'de'];
export const defaultLocale = 'sr';

const translations = { sr, en, de };

/**
 * Look up a translation by dot-notation key.
 * @param {string} locale
 * @param {string} key e.g. 'nav.home'
 * @returns {string}
 */
export function t(locale, key) {
  const keys = key.split('.');
  let value = translations[locale];
  for (const k of keys) {
    if (value == null) break;
    value = value[k];
  }
  if (value != null) return value;

  // Fallback to default locale
  let fallback = translations[defaultLocale];
  for (const k of keys) {
    if (fallback == null) break;
    fallback = fallback[k];
  }
  return fallback != null ? fallback : key;
}

/**
 * Build a locale-prefixed path. Serbian (default) has no prefix.
 * @param {string} locale
 * @param {string} path e.g. '/register'
 * @returns {string}
 */
export function localePath(locale, path) {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

/**
 * Extract locale from the optional route param.
 * @param {string|undefined} lang
 * @returns {string}
 */
export function getLocaleFromParam(lang) {
  if (lang === 'en' || lang === 'de') return lang;
  return defaultLocale;
}

/**
 * Get the BCP 47 / Intl locale string for date formatting.
 * @param {string} locale
 * @returns {string}
 */
export function dateLocale(locale) {
  const map = { sr: 'sr-Latn-RS', en: 'en-US', de: 'de-DE' };
  return map[locale] || map[defaultLocale];
}

/**
 * Get the HTML lang attribute value.
 * @param {string} locale
 * @returns {string}
 */
export function htmlLang(locale) {
  const map = { sr: 'sr-Latn', en: 'en', de: 'de' };
  return map[locale] || map[defaultLocale];
}

/**
 * Get the Open Graph locale string.
 * @param {string} locale
 * @returns {string}
 */
export function ogLocale(locale) {
  const map = { sr: 'sr_RS', en: 'en_US', de: 'de_DE' };
  return map[locale] || map[defaultLocale];
}
