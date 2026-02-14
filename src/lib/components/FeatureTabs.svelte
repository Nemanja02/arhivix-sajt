<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { t } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  const images = [
    { src: '/images/features/organizacija.png', alt: 'Arhivix document organization' },
    { src: '/images/features/digitalno.png', alt: 'Electronic invoices and shipping documents' },
    { src: '/images/features/sigurnost.png', alt: 'Archive ledger' }
  ];
</script>

<section class="features-section section" id="funkcije">
  <div class="container">
    <div class="features-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">{t(locale, 'features.label')}</span>
      <h2 class="section-title">{t(locale, 'features.title')}</h2>
      <p class="section-subtitle mx-auto">{t(locale, 'features.subtitle')}</p>
    </div>

    <div class="features-list">
      {#each [1, 2, 3] as n, i}
        <div class="feature-row animate-on-scroll" class:reverse={i % 2 === 1} use:scrollReveal style="transition-delay: {i * 100}ms">
          <div class="feature-text">
            <span class="feature-label">{t(locale, `features.tab${n}_label`)}</span>
            <h3 class="feature-title">{t(locale, `features.tab${n}_title`)}</h3>
            <p class="feature-desc">{t(locale, `features.tab${n}_desc`)}</p>
          </div>
          <div class="feature-image-wrapper">
            <img src={images[i].src} alt={images[i].alt} class="feature-image" width="600" height="400" loading="lazy" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .features-section { padding: 5rem 0; }
  .features-header { margin-bottom: 4rem; }
  .features-list { display: flex; flex-direction: column; gap: 4rem; }

  .feature-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;
  }

  .feature-row.reverse { direction: rtl; }
  .feature-row.reverse > * { direction: ltr; }

  .feature-label {
    display: inline-block; font-size: var(--font-size-sm); font-weight: 700;
    color: var(--color-primary); margin-bottom: 0.75rem;
    text-transform: uppercase; letter-spacing: 0.04em;
  }

  .feature-title {
    font-size: clamp(1.5rem, 2.5vw, 1.75rem); font-weight: 800;
    line-height: 1.2; letter-spacing: -0.02em; color: var(--color-text); margin-bottom: 1rem;
  }

  .feature-desc { font-size: var(--font-size-base); color: var(--color-text-muted); line-height: 1.7; }

  .feature-image-wrapper {
    border-radius: var(--radius-xl); overflow: hidden;
    border: 1px solid var(--color-border-light); box-shadow: var(--shadow-lg);
    background: var(--color-bg-card); transition: all var(--transition-normal);
  }

  .feature-image-wrapper:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); }
  .feature-image { width: 100%; display: block; }

  @media (max-width: 900px) {
    .feature-row, .feature-row.reverse {
      grid-template-columns: 1fr; gap: 2rem; direction: ltr;
    }
    .feature-text { text-align: center; }
    .features-list { gap: 3rem; }
  }
</style>
