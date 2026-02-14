<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { t } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  let activeStep = 0;

  $: steps = [
    {
      num: 1,
      title: t(locale, 'howItWorks.step1'),
      image: '/images/features/howitworks-1.png'
    },
    {
      num: 2,
      title: t(locale, 'howItWorks.step2'),
      image: '/images/features/howitworks-2.png'
    },
    {
      num: 3,
      title: t(locale, 'howItWorks.step3'),
      image: '/images/features/howitworks-3.png'
    }
  ];
</script>

<section class="hiw-section section">
  <div class="container">
    <div class="hiw-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">{t(locale, 'howItWorks.label')}</span>
      <h2 class="section-title">{t(locale, 'howItWorks.title')}</h2>
      <p class="section-subtitle mx-auto">
        {t(locale, 'howItWorks.subtitle')}
      </p>
    </div>

    <div class="hiw-content animate-on-scroll" use:scrollReveal>
      <div class="hiw-steps">
        {#each steps as step, i}
          <button
            class="hiw-step"
            class:active={activeStep === i}
            on:click={() => (activeStep = i)}
          >
            <div class="step-number" class:active={activeStep === i}>{step.num}</div>
            <span class="step-title">{step.title}</span>
          </button>
          {#if i < steps.length - 1}
            <div class="step-connector" class:active={activeStep > i}></div>
          {/if}
        {/each}
      </div>

      <div class="hiw-image-wrapper">
        {#each steps as step, i}
          <div class="hiw-image" class:active={activeStep === i}>
            <img src={step.image} alt={step.title} width="500" height="500" loading="lazy" />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .hiw-header {
    margin-bottom: 3rem;
  }

  .hiw-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  .hiw-steps {
    display: flex;
    align-items: center;
    gap: 0;
    justify-content: center;
  }

  .hiw-step {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-full);
    transition: all var(--transition-normal);
    background: transparent;
    cursor: pointer;
  }

  .hiw-step:hover {
    background: var(--color-bg-card);
  }

  .hiw-step.active {
    background: var(--color-bg-card);
    box-shadow: var(--shadow-sm);
  }

  .step-number {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: var(--font-size-sm);
    background: var(--color-border-light);
    color: var(--color-text-muted);
    transition: all var(--transition-normal);
    flex-shrink: 0;
  }

  .step-number.active {
    background: var(--color-primary);
    color: white;
  }

  .step-title {
    font-weight: 600;
    font-size: var(--font-size-sm);
    white-space: nowrap;
  }

  .step-connector {
    width: 40px;
    height: 2px;
    background: var(--color-border);
    transition: background var(--transition-normal);
    flex-shrink: 0;
  }

  .step-connector.active {
    background: var(--color-primary);
  }

  .hiw-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 500px;
    min-height: 400px;
  }

  .hiw-image {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    opacity: 0;
    transform: translateY(10px) scale(0.98);
    transition: all 0.4s ease;
    pointer-events: none;
  }

  .hiw-image.active {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
    position: relative;
  }

  .hiw-image img {
    max-width: 100%;
    max-height: 500px;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .hiw-steps {
      flex-direction: column;
      gap: 0;
    }

    .step-connector {
      width: 2px;
      height: 24px;
    }

    .hiw-image-wrapper {
      min-height: 300px;
    }
  }
</style>
