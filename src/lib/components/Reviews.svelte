<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { t } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  const reviewImages = [
    '/images/reviews/marko-ilic.jpeg',
    '/images/reviews/milan-petrovic.jpeg',
    '/images/reviews/nikola-radojevic.jpeg',
    '/images/reviews/tamara-niksic.jpeg',
    '/images/reviews/aleksandra-stanic.jpeg',
    '/images/reviews/vladimir-simic.jpeg',
    '/images/reviews/dejan-radulovic.jpeg',
    '/images/reviews/stojan-jovanov.jpeg',
    '/images/reviews/jelena-kovac.jpeg'
  ];

  $: row1 = [
    { quote: t(locale, 'reviews.r1'), name: t(locale, 'reviews.r1_name'), role: t(locale, 'reviews.r1_role'), img: reviewImages[0] },
    { quote: t(locale, 'reviews.r2'), name: t(locale, 'reviews.r2_name'), role: t(locale, 'reviews.r2_role'), img: reviewImages[1] },
    { quote: t(locale, 'reviews.r3'), name: t(locale, 'reviews.r3_name'), role: t(locale, 'reviews.r3_role'), img: reviewImages[2] },
    { quote: t(locale, 'reviews.r4'), name: t(locale, 'reviews.r4_name'), role: t(locale, 'reviews.r4_role'), img: reviewImages[3] },
  ];

  $: row2 = [
    { quote: t(locale, 'reviews.r5'), name: t(locale, 'reviews.r5_name'), role: t(locale, 'reviews.r5_role'), img: reviewImages[4] },
    { quote: t(locale, 'reviews.r6'), name: t(locale, 'reviews.r6_name'), role: t(locale, 'reviews.r6_role'), img: reviewImages[5] },
    { quote: t(locale, 'reviews.r7'), name: t(locale, 'reviews.r7_name'), role: t(locale, 'reviews.r7_role'), img: reviewImages[6] },
    { quote: t(locale, 'reviews.r8'), name: t(locale, 'reviews.r8_name'), role: t(locale, 'reviews.r8_role'), img: reviewImages[7] },
  ];

  $: row3 = [
    { quote: t(locale, 'reviews.r9'), name: t(locale, 'reviews.r9_name'), role: t(locale, 'reviews.r9_role'), img: reviewImages[8] },
    ...row1.slice(1),
  ];
</script>

<section class="reviews-section section">
  <div class="container">
    <div class="reviews-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">{t(locale, 'reviews.label')}</span>
      <h2 class="section-title">{@html t(locale, 'reviews.title')}</h2>
      <div class="reviews-rating">
        <div class="stars">
          {#each Array(5) as _}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#facc15">
              <path d="M10 1l2.245 6.91h7.255l-5.873 4.27 2.245 6.91L10 14.82l-5.872 4.27 2.245-6.91L.5 7.91h7.255z"/>
            </svg>
          {/each}
        </div>
        <span class="rating-text">{t(locale, 'reviews.rating')}</span>
      </div>
    </div>
  </div>

  <div class="marquee-area">
    <div class="marquee-track">
      <div class="marquee-row marquee-left">
        {#each [...row1, ...row1] as review}
          <div class="review-card">
            <p class="review-text">"{review.quote}"</p>
            <div class="review-author">
              <img src={review.img} alt={review.name} class="review-avatar" loading="lazy" />
              <div>
                <div class="review-name">{review.name}</div>
                <div class="review-role">{review.role}</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="marquee-track">
      <div class="marquee-row marquee-right">
        {#each [...row2, ...row2] as review}
          <div class="review-card">
            <p class="review-text">"{review.quote}"</p>
            <div class="review-author">
              <img src={review.img} alt={review.name} class="review-avatar" loading="lazy" />
              <div>
                <div class="review-name">{review.name}</div>
                <div class="review-role">{review.role}</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="marquee-track">
      <div class="marquee-row marquee-left-slow">
        {#each [...row3, ...row3] as review}
          <div class="review-card">
            <p class="review-text">"{review.quote}"</p>
            <div class="review-author">
              <img src={review.img} alt={review.name} class="review-avatar" loading="lazy" />
              <div>
                <div class="review-name">{review.name}</div>
                <div class="review-role">{review.role}</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="marquee-fade-left"></div>
    <div class="marquee-fade-right"></div>
  </div>
</section>

<style>
  .reviews-section {
    padding-bottom: 2rem;
    overflow: hidden;
  }

  .reviews-header {
    margin-bottom: 2.5rem;
  }

  .reviews-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .stars {
    display: flex;
    gap: 2px;
  }

  .rating-text {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    font-weight: 500;
  }

  .marquee-area {
    position: relative;
    overflow: hidden;
    padding: 1rem 0;
  }

  .marquee-track {
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .marquee-row {
    display: flex;
    gap: 1rem;
    width: max-content;
  }

  .marquee-left {
    animation: marquee 40s linear infinite;
  }

  .marquee-right {
    animation: marqueeReverse 45s linear infinite;
  }

  .marquee-left-slow {
    animation: marquee 50s linear infinite;
  }

  .marquee-track:hover .marquee-row {
    animation-play-state: paused;
  }

  .review-card {
    background: var(--color-bg-card);
    border-radius: var(--radius-md);
    padding: 1.25rem;
    min-width: 320px;
    max-width: 360px;
    border: 1px solid var(--color-border-light);
    transition: all var(--transition-normal);
  }

  .review-card:hover {
    border-color: var(--color-border);
    box-shadow: var(--shadow-sm);
    transform: translateY(-2px);
  }

  .review-text {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    color: var(--color-text);
    margin-bottom: 1rem;
    font-style: italic;
  }

  .review-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .review-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .review-name {
    font-size: var(--font-size-sm);
    font-weight: 600;
  }

  .review-role {
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
  }

  .marquee-fade-left,
  .marquee-fade-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 2;
    pointer-events: none;
  }

  .marquee-fade-left {
    left: 0;
    background: linear-gradient(to right, var(--color-bg) 0%, transparent 100%);
  }

  .marquee-fade-right {
    right: 0;
    background: linear-gradient(to left, var(--color-bg) 0%, transparent 100%);
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes marqueeReverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  @media (max-width: 768px) {
    .review-card {
      min-width: 260px;
      max-width: 280px;
    }
  }
</style>
