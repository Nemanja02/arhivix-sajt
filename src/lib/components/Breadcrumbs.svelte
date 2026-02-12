<script>
  export let items = [];
</script>

<nav class="breadcrumbs" aria-label="Navigacija">
  {#each items as item, i}
    {#if i > 0}
      <svg class="breadcrumb-sep" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    {/if}
    {#if i === items.length - 1}
      <span class="breadcrumb-current">{item.label}</span>
    {:else}
      <a href={item.href} class="breadcrumb-link">{item.label}</a>
    {/if}
  {/each}
</nav>

<style>
  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: var(--font-size-sm);
    flex-wrap: wrap;
  }

  .breadcrumb-link {
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
  }

  .breadcrumb-link:hover {
    color: var(--color-primary);
  }

  .breadcrumb-sep {
    color: var(--color-text-light);
    flex-shrink: 0;
  }

  .breadcrumb-current {
    color: var(--color-text);
    font-weight: 500;
  }
</style>
