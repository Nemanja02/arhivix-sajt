<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import SEO from '$lib/components/SEO.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

  export let data;

  $: study = data.study;
</script>

<SEO
  title="Arhivix | {study.title}"
  description={study.description}
  image={study.image}
/>

<section class="case-study-page">
  <div class="container">
    <div class="case-study-breadcrumbs">
      <Breadcrumbs items={[
        { label: 'Početna', href: '/' },
        { label: 'Studije slučaja' },
        { label: study.company }
      ]} />
    </div>

    <div class="case-study-content">
      <header class="case-study-header animate-on-scroll" use:scrollReveal>
        <span class="section-label">Studija slučaja</span>
        <h1 class="case-study-title">{study.title}</h1>
      </header>

      <div class="case-study-metrics animate-on-scroll" use:scrollReveal>
        <div class="metric-card">
          <span class="metric-value">{study.metric}</span>
          <span class="metric-label">{study.metricLabel}</span>
        </div>
        <div class="metric-card">
          <span class="metric-value">{study.duration}</span>
          <span class="metric-label">Vreme implementacije</span>
        </div>
        <div class="metric-card">
          <span class="metric-value">{study.company}</span>
          <span class="metric-label">Kompanija</span>
        </div>
      </div>

      {#if study.image}
        <div class="case-study-hero animate-on-scroll" use:scrollReveal>
          <img src={study.image} alt={study.title} />
        </div>
      {/if}

      <div class="case-study-body prose animate-on-scroll" use:scrollReveal>
        {@html study.content}
      </div>

      <div class="case-study-cta animate-on-scroll" use:scrollReveal>
        <div class="cta-card">
          <h3>Želite slične rezultate?</h3>
          <p>Započnite besplatni probni period i uverite se sami.</p>
          <a href="/register" class="btn btn-primary btn-large">
            Isprobajte besplatno 14 dana
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .case-study-page {
    padding-top: 8rem;
    padding-bottom: 4rem;
  }

  .case-study-breadcrumbs {
    margin-bottom: 2rem;
  }

  .case-study-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .case-study-header {
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .case-study-title {
    font-size: var(--font-size-4xl);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .case-study-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  .metric-card {
    background: var(--color-bg-card);
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    text-align: center;
    border: 1px solid var(--color-border-light);
  }

  .metric-value {
    display: block;
    font-size: var(--font-size-3xl);
    font-weight: 800;
    color: var(--color-primary);
    margin-bottom: 0.25rem;
  }

  .metric-label {
    display: block;
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
  }

  .case-study-hero {
    border-radius: var(--radius-lg);
    overflow: hidden;
    margin-bottom: 3rem;
  }

  .case-study-hero img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  .case-study-body {
    padding-bottom: 2rem;
  }

  .case-study-cta {
    padding-top: 2rem;
    border-top: 1px solid var(--color-border-light);
  }

  .cta-card {
    background: var(--color-bg-dark);
    padding: 3rem 2rem;
    border-radius: var(--radius-xl);
    text-align: center;
    color: white;
  }

  .cta-card h3 {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: white;
  }

  .cta-card p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1.5rem;
  }

  .cta-card .btn-primary {
    background: white;
    color: var(--color-text);
  }

  .cta-card .btn-primary:hover {
    background: #f0f0f0;
  }

  @media (max-width: 768px) {
    .case-study-title {
      font-size: var(--font-size-3xl);
    }

    .case-study-metrics {
      grid-template-columns: 1fr;
    }

    .metric-card {
      padding: 1rem;
    }
  }
</style>
