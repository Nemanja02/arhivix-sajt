import { getLocaleFromParam } from '$lib/i18n';

export function load({ params }) {
  return { locale: getLocaleFromParam(params.lang) };
}
