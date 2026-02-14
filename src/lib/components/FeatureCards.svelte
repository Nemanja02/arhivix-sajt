<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { t } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;
</script>

<section class="feature-cards-section section">
  <div class="container">
    <div class="fc-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">{t(locale, 'featureCards.label')}</span>
      <h2 class="section-title">{@html t(locale, 'featureCards.title')}</h2>
      <p class="section-subtitle mx-auto">
        {t(locale, 'featureCards.subtitle')}
      </p>
    </div>

    <div class="fc-grid">
      <div class="fc-card fc-card-half animate-on-scroll" use:scrollReveal>
        <div class="fc-card-img">
          <img src="/images/features/card-archive.png" alt={t(locale, 'featureCards.card1_title')} width="600" height="400" loading="lazy" />
        </div>
        <div class="fc-card-body">
          <h3>{t(locale, 'featureCards.card1_title')}</h3>
          <p>{t(locale, 'featureCards.card1_desc')}</p>
        </div>
      </div>

      <div class="fc-card fc-card-half animate-on-scroll" use:scrollReveal style="transition-delay: 100ms">
        <div class="fc-card-img">
          <img src="/images/features/card-invoices.png" alt={t(locale, 'featureCards.card2_title')} width="600" height="400" loading="lazy" />
        </div>
        <div class="fc-card-body">
          <h3>{t(locale, 'featureCards.card2_title')}</h3>
          <p>{t(locale, 'featureCards.card2_desc')}</p>
        </div>
      </div>

      <div class="fc-testimonial animate-on-scroll" use:scrollReveal>
        <div class="fc-quote-mark">"</div>
        <blockquote>
          {t(locale, 'featureCards.testimonial')}
        </blockquote>
        <div class="fc-author">
          <img src="/images/features/card-stamp.png" alt={t(locale, 'featureCards.testimonial_name')} class="fc-author-img" />
          <div>
            <div class="fc-author-name">{t(locale, 'featureCards.testimonial_name')}</div>
            <div class="fc-author-role">{t(locale, 'featureCards.testimonial_role')}</div>
          </div>
        </div>
      </div>

      <div class="fc-card fc-card-half animate-on-scroll" use:scrollReveal>
        <div class="fc-card-img">
          <img src="/images/features/card-dashboard.png" alt={t(locale, 'featureCards.card3_title')} width="600" height="400" loading="lazy" />
        </div>
        <div class="fc-card-body">
          <h3>{t(locale, 'featureCards.card3_title')}</h3>
          <p>{t(locale, 'featureCards.card3_desc')}</p>
        </div>
      </div>

      <div class="fc-card fc-card-half animate-on-scroll" use:scrollReveal style="transition-delay: 100ms">
        <div class="fc-card-img">
          <img src="/images/features/card-otpremnice.png" alt={t(locale, 'featureCards.card4_title')} width="600" height="400" loading="lazy" />
        </div>
        <div class="fc-card-body">
          <h3>{t(locale, 'featureCards.card4_title')}</h3>
          <p>{t(locale, 'featureCards.card4_desc')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .fc-header {
    margin-bottom: 3rem;
  }

  .fc-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .fc-card {
    background: var(--color-bg-card);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-normal);
    border: 1px solid transparent;
  }

  .fc-card:hover {
    border-color: var(--color-border);
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .fc-card-img {
    padding: 1.5rem 1.5rem 0;
    overflow: hidden;
  }

  .fc-card-img img {
    width: 100%;
    border-radius: var(--radius-md);
    transition: transform 0.5s ease;
  }

  .fc-card:hover .fc-card-img img {
    transform: scale(1.02);
  }

  .fc-card-body {
    padding: 1.5rem;
  }

  .fc-card-body h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .fc-card-body p {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.6;
  }

  .fc-testimonial {
    grid-column: 1 / -1;
    background: var(--color-bg-dark);
    color: var(--color-white);
    border-radius: var(--radius-xl);
    padding: 3rem;
    position: relative;
    overflow: hidden;
  }

  .fc-testimonial::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  .fc-quote-mark {
    font-size: 5rem;
    font-weight: 800;
    line-height: 1;
    color: var(--color-primary);
    opacity: 0.4;
    position: absolute;
    top: 1rem;
    left: 2rem;
  }

  .fc-testimonial blockquote {
    font-size: var(--font-size-xl);
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
    max-width: 700px;
  }

  .fc-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 1;
  }

  .fc-author-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .fc-author-name {
    font-weight: 600;
    font-size: var(--font-size-base);
  }

  .fc-author-role {
    font-size: var(--font-size-sm);
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    .fc-grid {
      grid-template-columns: 1fr;
    }

    .fc-testimonial {
      padding: 2rem;
    }

    .fc-testimonial blockquote {
      font-size: var(--font-size-lg);
    }
  }
</style>
