<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { t } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  $: stats = [
    { value: '47,000', label: t(locale, 'stats.docs'), prefix: '+', suffix: '' },
    { value: '99.9', label: t(locale, 'stats.uptime'), prefix: '', suffix: '%' },
    { value: '256', label: t(locale, 'stats.encryption'), prefix: '', suffix: '' },
    { value: '2', label: t(locale, 'stats.regions'), prefix: '', suffix: '' }
  ];
</script>

<section class="stats-section">
  <div class="container">
    <div class="stats-grid animate-on-scroll" use:scrollReveal>
      {#each stats as stat, i}
        <div class="stat-item" style="transition-delay: {i * 100}ms">
          <div class="stat-value">
            <span class="stat-prefix">{stat.prefix}</span>
            {stat.value}
            <span class="stat-suffix">{stat.suffix}</span>
          </div>
          <div class="stat-label">{stat.label}</div>
        </div>
        {#if i < stats.length - 1}
          <div class="stat-divider"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  .stats-section { padding: 3rem 0; }

  .stats-grid {
    display: flex; align-items: center; justify-content: center; gap: 2rem;
    padding: 2.5rem 3rem; background: var(--color-bg-card);
    border-radius: var(--radius-xl); border: 1px solid var(--color-border-light);
  }

  .stat-item { text-align: center; flex: 1; }

  .stat-value {
    font-size: var(--font-size-3xl); font-weight: 800;
    letter-spacing: -0.02em; color: var(--color-text); line-height: 1.2;
  }

  .stat-prefix { color: var(--color-primary); }
  .stat-label { font-size: var(--font-size-sm); color: var(--color-text-muted); margin-top: 0.25rem; }
  .stat-divider { width: 1px; height: 60px; background: var(--color-border); flex-shrink: 0; }

  @media (max-width: 768px) {
    .stats-grid { flex-wrap: wrap; gap: 1.5rem; padding: 2rem 1.5rem; }
    .stat-item { flex: 1 1 40%; min-width: 120px; }
    .stat-divider { display: none; }
    .stat-value { font-size: var(--font-size-2xl); }
  }
</style>
