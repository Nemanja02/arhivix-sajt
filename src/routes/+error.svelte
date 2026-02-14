<script>
  import { page } from '$app/stores';
  import { getLocaleFromParam } from '$lib/i18n';
  import { t, localePath } from '$lib/i18n';

  // Derive locale from URL path
  $: locale = (() => {
    const path = $page.url.pathname;
    if (path.startsWith('/en/') || path === '/en') return 'en';
    if (path.startsWith('/de/') || path === '/de') return 'de';
    return 'sr';
  })();
</script>

<svelte:head>
  <title>Arhivix | {$page.status === 404 ? t(locale, 'error.not_found') : t(locale, 'error.generic')}</title>
  <meta name="description" content={t(locale, 'error.desc')} />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="error-page">
  <div class="container">
    <div class="error-content">
      <span class="error-code">{$page.status}</span>
      <h1 class="error-title">
        {#if $page.status === 404}
          {t(locale, 'error.not_found')}
        {:else}
          {t(locale, 'error.generic')}
        {/if}
      </h1>
      <p class="error-message">
        {#if $page.status === 404}
          {t(locale, 'error.desc')}
        {:else}
          {$page.error?.message || t(locale, 'error.desc')}
        {/if}
      </p>
      <a href={localePath(locale, '/')} class="btn btn-primary btn-large">
        {t(locale, 'error.go_home')}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  .error-page {
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8rem;
    padding-bottom: 4rem;
  }

  .error-content {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  .error-code {
    display: block;
    font-size: 8rem;
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  .error-title {
    font-size: var(--font-size-3xl);
    font-weight: 800;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .error-message {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .error-code {
      font-size: 5rem;
    }
  }
</style>
