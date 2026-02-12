<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  const row1 = [
    { quote: 'Dokumenti nam stižu odmah, knjigovođa više ništa ne čeka. Sve radi glatko.', name: 'Marko Ilić', role: 'administracija — Market Lotos', img: '/images/reviews/marko-ilic.jpeg' },
    { quote: 'Pre smo stalno gubili papire, sad sve nađemo za par sekundi. Mnogo lakše radimo.', name: 'Milan Petrović', role: 'magacioner — Transport M&P', img: '/images/reviews/milan-petrovic.jpeg' },
    { quote: 'Pregled faktura nam je konačno jasan. Znam tačno šta je poslato i šta još stoji.', name: 'Nikola Radojević', role: 'operativa — InvestPro Group', img: '/images/reviews/nikola-radojevic.jpeg' },
    { quote: 'Elektronski potpis nam je spas. Ne jurimo više ljude po kancelarijama.', name: 'Tamara Nikšić', role: 'HR — SmartLab Solutions', img: '/images/reviews/tamara-niksic.jpeg' },
  ];

  const row2 = [
    { quote: 'Upload, klik i gotovo. Nema više trčanja za papirima kroz firmu.', name: 'Aleksandra Stanić', role: 'prodaja — SoftPoint Technologies', img: '/images/reviews/aleksandra-stanic.jpeg' },
    { quote: 'Najzad red u dokumentima. Sve pronađem bez nerviranja i gubljenja vremena.', name: 'Vladimir Simić', role: 'tehnička podrška — TechServ', img: '/images/reviews/vladimir-simic.jpeg' },
    { quote: 'Od kad koristimo ovaj sistem, nema kašnjenja ni zastoja. Radi baš kako treba.', name: 'Dejan Radulović', role: 'vozač — CargoLine Express', img: '/images/reviews/dejan-radulovic.jpeg' },
    { quote: 'Radimo brže, urednije i nema više grešaka sa dokumentima. Super stvar.', name: 'Stojan Jovanov', role: 'koordinacija — EuroTransport', img: '/images/reviews/stojan-jovanov.jpeg' },
  ];

  const row3 = [
    { quote: 'Dokumenti nam stižu odmah, knjigovođa više ništa ne čeka. Sve radi glatko.', name: 'Jelena Kovač', role: 'vođa smene — LogiRent', img: '/images/reviews/jelena-kovac.jpeg' },
    ...row1.slice(1),
  ];
</script>

<section class="reviews-section section">
  <div class="container">
    <div class="reviews-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">Iskustva naših korisnika</span>
      <h2 class="section-title">Koristi nas preko 300<br />zadovoljnih kompanija</h2>
      <div class="reviews-rating">
        <div class="stars">
          {#each Array(5) as _}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#facc15">
              <path d="M10 1l2.245 6.91h7.255l-5.873 4.27 2.245 6.91L10 14.82l-5.872 4.27 2.245-6.91L.5 7.91h7.255z"/>
            </svg>
          {/each}
        </div>
        <span class="rating-text">4.9 od preko 400 korisnika</span>
      </div>
    </div>
  </div>

  <div class="marquee-area">
    <!-- Row 1: scrolls left -->
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

    <!-- Row 2: scrolls right -->
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

    <!-- Row 3: scrolls left -->
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
