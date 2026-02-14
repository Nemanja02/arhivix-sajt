<script>
  import { page } from '$app/stores';
  import { SITE_URL, SITE_NAME } from '$lib/config.js';
  import { locales, defaultLocale, localePath, ogLocale } from '$lib/i18n';

  export let title = 'Arhivix | Vaša dokumentacija na dohvat ruke';
  export let description = '';
  export let image = '';
  export let url = '';
  export let type = 'website';
  export let publishedDate = '';
  export let noindex = false;
  export let jsonLd = null;
  export let locale = 'sr';

  $: canonicalUrl = url || `${SITE_URL}${$page.url.pathname}`;
  $: fullImage = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
    : '';

  // Derive the current page path without locale prefix
  $: currentPath = (() => {
    let p = $page.url.pathname;
    for (const loc of locales) {
      if (loc !== defaultLocale && (p === `/${loc}` || p.startsWith(`/${loc}/`))) {
        p = p.slice(loc.length + 1) || '/';
        break;
      }
    }
    return p;
  })();
</script>

<svelte:head>
  <title>{title}</title>
  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
  {/if}
  {#if description}
    <meta name="description" content={description} />
  {/if}
  <link rel="canonical" href={canonicalUrl} />

  <!-- hreflang tags -->
  {#each locales as loc}
    <link rel="alternate" hreflang={loc === 'sr' ? 'sr' : loc} href="{SITE_URL}{localePath(loc, currentPath)}" />
  {/each}
  <link rel="alternate" hreflang="x-default" href="{SITE_URL}{currentPath}" />

  <meta property="og:title" content={title} />
  {#if description}<meta property="og:description" content={description} />{/if}
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:locale" content={ogLocale(locale)} />
  {#if fullImage}<meta property="og:image" content={fullImage} />{/if}
  {#if publishedDate}<meta property="article:published_time" content={publishedDate} />{/if}

  <meta name="twitter:card" content={fullImage ? 'summary_large_image' : 'summary'} />
  <meta name="twitter:title" content={title} />
  {#if description}<meta name="twitter:description" content={description} />{/if}
  {#if fullImage}<meta name="twitter:image" content={fullImage} />{/if}

  {#if jsonLd}
    {#each Array.isArray(jsonLd) ? jsonLd : [jsonLd] as schema}
      {@html '<script type="application/ld+json">' + JSON.stringify(schema) + '</script>'}
    {/each}
  {/if}
</svelte:head>
