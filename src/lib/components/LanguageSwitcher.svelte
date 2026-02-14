<script>
  import { page } from '$app/stores';
  import { locales, defaultLocale } from '$lib/i18n';

  export let locale = 'sr';

  const labels = { sr: 'SR', en: 'EN', de: 'DE' };

  let open = false;

  function getLocalizedPath(targetLocale) {
    let path = $page.url.pathname;

    // Strip current locale prefix
    for (const loc of locales) {
      if (loc === defaultLocale) continue;
      if (path === `/${loc}`) {
        path = '/';
        break;
      }
      if (path.startsWith(`/${loc}/`)) {
        path = path.slice(loc.length + 1);
        break;
      }
    }

    // Add target locale prefix
    if (targetLocale === defaultLocale) return path;
    return `/${targetLocale}${path}`;
  }

  function close() {
    open = false;
  }
</script>

<svelte:window on:click={close} />

<div class="lang-switcher">
  <button
    class="lang-current"
    on:click|stopPropagation={() => (open = !open)}
    aria-label="Change language"
    aria-expanded={open}
  >
    {labels[locale]}
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class:open>
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>

  {#if open}
    <div class="lang-dropdown">
      {#each locales as loc}
        {#if loc !== locale}
          <a href={getLocalizedPath(loc)} class="lang-option" on:click={close}>
            {labels[loc]}
          </a>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .lang-switcher {
    position: relative;
  }

  .lang-current {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.4rem 0.6rem;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-muted);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-sm);
    background: transparent;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .lang-current:hover {
    color: var(--color-text);
    border-color: var(--color-border);
  }

  .lang-current svg {
    transition: transform var(--transition-fast);
  }

  .lang-current svg.open {
    transform: rotate(180deg);
  }

  .lang-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    background: var(--color-white);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    z-index: 100;
    min-width: 60px;
  }

  .lang-option {
    display: block;
    padding: 0.5rem 0.75rem;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-muted);
    transition: all var(--transition-fast);
    text-align: center;
  }

  .lang-option:hover {
    background: var(--color-bg-card);
    color: var(--color-text);
  }
</style>
