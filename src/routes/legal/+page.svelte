<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import SEO from '$lib/components/SEO.svelte';
  import { legalNavItems } from '$lib/data/legalPages.js';
</script>

<SEO
  title="Arhivix | Pravilnici"
  description="Pravna dokumentacija i pravilnici za korišćenje Arhivix platforme."
/>

<div class="legal-index">
  <div class="legal-index-header animate-on-scroll" use:scrollReveal>
    <h1 class="section-title">Pravilnici i pravna dokumentacija</h1>
    <p class="section-subtitle">
      Ovde možete pronaći sve pravne dokumente vezane za korišćenje Arhivix platforme.
    </p>
  </div>

  <div class="legal-cards">
    {#each legalNavItems as item, i}
      <a
        href="/legal/{item.slug}"
        class="legal-card animate-on-scroll"
        use:scrollReveal
        style="transition-delay: {i * 80}ms"
      >
        <div class="legal-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3>{item.label}</h3>
        <svg class="legal-card-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    {/each}
  </div>
</div>

<style>
  .legal-index-header {
    margin-bottom: 2.5rem;
  }

  .legal-index-header .section-subtitle {
    margin-top: 0.5rem;
  }

  .legal-cards {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .legal-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background: var(--color-bg-card);
    border-radius: var(--radius-md);
    border: 1px solid transparent;
    transition: all var(--transition-normal);
  }

  .legal-card:hover {
    border-color: var(--color-border);
    transform: translateX(4px);
    box-shadow: var(--shadow-sm);
  }

  .legal-card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--color-primary-light);
    color: var(--color-primary);
    border-radius: var(--radius-sm);
    flex-shrink: 0;
  }

  .legal-card h3 {
    flex: 1;
    font-size: var(--font-size-base);
    font-weight: 600;
  }

  .legal-card-arrow {
    color: var(--color-text-light);
    transition: all var(--transition-normal);
    flex-shrink: 0;
  }

  .legal-card:hover .legal-card-arrow {
    color: var(--color-primary);
    transform: translateX(4px);
  }
</style>
