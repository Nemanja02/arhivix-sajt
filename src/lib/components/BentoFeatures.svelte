<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { t } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  const icons = [
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="13" y2="11"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/><path d="M15 5l4 4"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>'
  ];

  $: features = [
    { icon: icons[0], title: t(locale, 'bento.card1_title'), desc: t(locale, 'bento.card1_desc') },
    { icon: icons[1], title: t(locale, 'bento.card2_title'), desc: t(locale, 'bento.card2_desc') },
    { icon: icons[2], title: t(locale, 'bento.card3_title'), desc: t(locale, 'bento.card3_desc') },
    { icon: icons[3], title: t(locale, 'bento.card4_title'), desc: t(locale, 'bento.card4_desc') },
    { icon: icons[4], title: t(locale, 'bento.card5_title'), desc: t(locale, 'bento.card5_desc') },
    { icon: icons[5], title: t(locale, 'bento.card6_title'), desc: t(locale, 'bento.card6_desc') }
  ];
</script>

<section class="bento-section section">
  <div class="container">
    <div class="bento-header text-center animate-on-scroll" use:scrollReveal>
      <h2 class="section-title">{t(locale, 'bento.title')}</h2>
      <p class="section-subtitle mx-auto">{t(locale, 'bento.subtitle')}</p>
    </div>

    <div class="bento-grid">
      {#each features as feature, i}
        <div class="bento-card animate-on-scroll" use:scrollReveal style="transition-delay: {i * 80}ms">
          <div class="bento-icon">{@html feature.icon}</div>
          <h3 class="bento-title">{feature.title}</h3>
          <p class="bento-desc">{feature.desc}</p>
          <div class="bento-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .bento-header { margin-bottom: 3rem; }

  .bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }

  .bento-card {
    background: var(--color-bg-card); border-radius: var(--radius-lg); padding: 1.75rem;
    transition: all var(--transition-normal); border: 1px solid transparent;
    position: relative; overflow: hidden; cursor: default;
  }

  .bento-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, transparent 60%);
    opacity: 0; transition: opacity var(--transition-normal);
  }

  .bento-card:hover { border-color: var(--color-border); transform: translateY(-4px); box-shadow: var(--shadow-md); }
  .bento-card:hover::before { opacity: 1; }

  .bento-icon {
    width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
    border-radius: var(--radius-md); background: rgba(37, 99, 235, 0.08);
    color: var(--color-primary); margin-bottom: 1rem;
  }

  .bento-title { font-size: var(--font-size-base); font-weight: 700; margin-bottom: 0.5rem; color: var(--color-text); }
  .bento-desc { font-size: var(--font-size-sm); color: var(--color-text-muted); line-height: 1.6; }

  .bento-arrow {
    margin-top: 1rem; color: var(--color-primary); opacity: 0;
    transform: translateX(-8px); transition: all var(--transition-normal);
  }

  .bento-card:hover .bento-arrow { opacity: 1; transform: translateX(0); }

  @media (max-width: 900px) { .bento-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .bento-grid { grid-template-columns: 1fr; } }
</style>
