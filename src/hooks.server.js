export async function handle({ event, resolve }) {
  const path = event.url.pathname;
  let lang = 'sr-Latn';
  if (path === '/en' || path.startsWith('/en/')) lang = 'en';
  else if (path === '/de' || path.startsWith('/de/')) lang = 'de';

  return resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace('lang="sr-Latn"', `lang="${lang}"`);
    }
  });
}
