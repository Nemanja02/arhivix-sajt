<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import SEO from '$lib/components/SEO.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import { t, localePath } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  export let data;

  $: career = data.career;
</script>

<SEO
  title="Arhivix | {career.title}"
  description={career.description}
  {locale}
  noindex={true}
/>

<section class="career-page">
  <div class="container">
    <div class="career-breadcrumbs">
      <Breadcrumbs items={[
        { label: t(locale, 'breadcrumbs.home'), href: localePath(locale, '/') },
        { label: t(locale, 'breadcrumbs.career') },
        { label: career.title }
      ]} />
    </div>

    <div class="career-content">
      <header class="career-header animate-on-scroll" use:scrollReveal>
        <span class="section-label">{career.department}</span>
        <h1 class="career-title">{career.title}</h1>
        <div class="career-meta">
          <span class="career-meta-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 14s-5.333-3.733-5.333-8A5.333 5.333 0 018 .667a5.333 5.333 0 015.333 5.333C13.333 10.267 8 14 8 14z" stroke="currentColor" stroke-width="1.2"/>
              <circle cx="8" cy="6" r="2" stroke="currentColor" stroke-width="1.2"/>
            </svg>
            {career.location}
          </span>
          <span class="career-meta-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1.333" y="4" width="13.333" height="9.333" rx="1.333" stroke="currentColor" stroke-width="1.2"/>
              <path d="M10.667 4V2.667A1.333 1.333 0 009.333 1.333H6.667A1.333 1.333 0 005.333 2.667V4" stroke="currentColor" stroke-width="1.2"/>
            </svg>
            {career.type}
          </span>
        </div>
      </header>

      <div class="career-body prose animate-on-scroll" use:scrollReveal>
        {@html career.content}
      </div>

      <div class="career-cta animate-on-scroll" use:scrollReveal>
        <div class="career-cta-card">
          <h3>{career.cta_title}</h3>
          <p>{career.cta_text}</p>
          <a href="mailto:karijera@arhivix.com" class="btn btn-primary btn-large">
            {career.cta_button}
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
  .career-page {
    padding-top: 8rem;
    padding-bottom: 4rem;
  }

  .career-breadcrumbs {
    margin-bottom: 2rem;
  }

  .career-content {
    max-width: 720px;
    margin: 0 auto;
  }

  .career-header {
    margin-bottom: 2.5rem;
  }

  .career-title {
    font-size: var(--font-size-4xl);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 1.25rem;
  }

  .career-meta {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .career-meta-item {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
  }

  .career-body {
    padding-bottom: 2rem;
  }

  .career-cta {
    padding-top: 2rem;
    border-top: 1px solid var(--color-border-light);
  }

  .career-cta-card {
    background: var(--color-bg-card);
    padding: 2rem;
    border-radius: var(--radius-lg);
    text-align: center;
  }

  .career-cta-card h3 {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .career-cta-card p {
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    .career-title {
      font-size: var(--font-size-3xl);
    }
  }
</style>
