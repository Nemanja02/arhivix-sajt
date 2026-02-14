<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import SEO from '$lib/components/SEO.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import { t, localePath, dateLocale } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  export let data;

  $: page = data.page;

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString(dateLocale(locale), {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
</script>

<SEO
  title="Arhivix | {page.title}"
  description={page.description}
  {locale}
/>

<div class="legal-page">
  <div class="legal-page-breadcrumbs">
    <Breadcrumbs items={[
      { label: t(locale, 'breadcrumbs.home'), href: localePath(locale, '/') },
      { label: t(locale, 'breadcrumbs.legal'), href: localePath(locale, '/legal') },
      { label: page.title }
    ]} />
  </div>

  <header class="legal-page-header animate-on-scroll" use:scrollReveal>
    <h1 class="legal-page-title">{page.title}</h1>
    <p class="legal-page-date">{t(locale, 'legal.last_updated')}: {formatDate(page.lastUpdated)}</p>
  </header>

  <div class="legal-page-body prose animate-on-scroll" use:scrollReveal>
    {@html page.content}
  </div>
</div>

<style>
  .legal-page-breadcrumbs {
    margin-bottom: 1.5rem;
  }

  .legal-page-header {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-border-light);
  }

  .legal-page-title {
    font-size: var(--font-size-3xl);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
  }

  .legal-page-date {
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
  }

  .legal-page-body {
    padding-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .legal-page-title {
      font-size: var(--font-size-2xl);
    }
  }
</style>
