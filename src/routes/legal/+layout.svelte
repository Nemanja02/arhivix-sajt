<script>
  import { page } from '$app/stores';
  import { legalNavItems } from '$lib/data/legalPages.js';

  $: currentPath = $page.url.pathname;
</script>

<div class="legal-layout">
  <div class="container">
    <div class="legal-grid">
      <aside class="legal-sidebar">
        <nav class="legal-nav">
          <h4 class="legal-nav-title">Pravilnici</h4>
          <ul>
            {#each legalNavItems as item}
              <li>
                <a
                  href="/legal/{item.slug}"
                  class="legal-nav-link"
                  class:active={currentPath === `/legal/${item.slug}`}
                >
                  {item.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      </aside>

      <div class="legal-content">
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  .legal-layout {
    padding-top: 8rem;
    padding-bottom: 4rem;
    min-height: 60vh;
  }

  .legal-grid {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 3rem;
    align-items: start;
  }

  .legal-sidebar {
    position: sticky;
    top: 6rem;
  }

  .legal-nav-title {
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-text);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-border-light);
  }

  .legal-nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .legal-nav-link {
    display: block;
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }

  .legal-nav-link:hover {
    color: var(--color-text);
    background: var(--color-bg-card);
  }

  .legal-nav-link.active {
    color: var(--color-primary);
    background: var(--color-primary-light);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .legal-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .legal-sidebar {
      position: static;
    }

    .legal-nav ul {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .legal-nav-link {
      padding: 0.4rem 0.75rem;
      font-size: var(--font-size-xs);
      border: 1px solid var(--color-border-light);
      border-radius: var(--radius-full);
    }

    .legal-nav-link.active {
      border-color: var(--color-primary);
    }
  }
</style>
