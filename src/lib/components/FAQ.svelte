<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { t } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  let openIndex = 0;

  $: faqs = [
    { q: t(locale, 'faq.q1'), a: t(locale, 'faq.a1') },
    { q: t(locale, 'faq.q2'), a: t(locale, 'faq.a2') },
    { q: t(locale, 'faq.q3'), a: t(locale, 'faq.a3') },
    { q: t(locale, 'faq.q4'), a: t(locale, 'faq.a4') },
    { q: t(locale, 'faq.q5'), a: t(locale, 'faq.a5') }
  ];

  $: faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  function toggle(i) {
    openIndex = openIndex === i ? -1 : i;
  }
</script>

<svelte:head>
  {@html '<script type="application/ld+json">' + JSON.stringify(faqJsonLd) + '</script>'}
</svelte:head>

<section class="faq-section section" id="pitanja">
  <div class="container">
    <div class="faq-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">FAQ</span>
      <h2 class="section-title">{t(locale, 'faq.title')}</h2>
      <p class="section-subtitle mx-auto">{t(locale, 'faq.subtitle')}</p>
    </div>

    <div class="faq-list">
      {#each faqs as faq, i}
        <div class="faq-item animate-on-scroll" use:scrollReveal style="transition-delay: {i * 80}ms">
          <button class="faq-trigger" class:open={openIndex === i} on:click={() => toggle(i)}>
            <span class="faq-question">{faq.q}</span>
            <div class="faq-icon" class:open={openIndex === i}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 8L10 13L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <div class="faq-answer" class:open={openIndex === i}>
            <p>{faq.a}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq-header {
    margin-bottom: 3rem;
  }

  .faq-list {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .faq-item {
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: all var(--transition-normal);
  }

  .faq-item:hover {
    border-color: var(--color-border);
  }

  .faq-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text);
    transition: background var(--transition-fast);
  }

  .faq-trigger:hover {
    background: var(--color-bg-card);
  }

  .faq-trigger.open {
    background: var(--color-bg-card);
  }

  .faq-icon {
    flex-shrink: 0;
    color: var(--color-text-muted);
    transition: transform var(--transition-normal);
  }

  .faq-icon.open {
    transform: rotate(180deg);
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    padding: 0 1.5rem;
  }

  .faq-answer.open {
    max-height: 300px;
    padding: 0 1.5rem 1.25rem;
  }

  .faq-answer p {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.7;
  }
</style>
