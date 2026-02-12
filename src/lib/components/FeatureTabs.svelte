<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  const features = [
    {
      label: 'Centralna arhiva',
      title: 'Svi dokumenti na jednom mestu, dostupni u sekundi',
      description: 'Fakture, otpremnice, ugovori, rešenja. Sve organizovano u jednom sistemu, dostupno sa bilo kog uređaja. Pretražujte slobodnim jezikom umesto da kopate po fasciklama.',
      image: '/images/features/organizacija.png',
      imageAlt: 'Arhivix organizacija dokumenata'
    },
    {
      label: 'E-fakture i otpremnice',
      title: 'Kreirajte, šaljite i pratite elektronske dokumente u par klikova',
      description: 'Usklađeno sa zakonom od prvog dana. Automatsko prosleđivanje knjigovođi, praćenje statusa, izveštaji. Manje ručnog posla, manje grešaka, potpuna kontrola.',
      image: '/images/features/digitalno.png',
      imageAlt: 'Elektronske fakture i otpremnice'
    },
    {
      label: 'Arhivska knjiga',
      title: 'Automatski vođena arhivska knjiga, uvek spremna za inspekciju',
      description: 'Sistem automatski generiše i ažurira arhivsku knjigu prema zakonskim zahtevima. Bez ručnog unosa, bez brige o rokovima. Uvek tačna, uvek dostupna.',
      image: '/images/features/sigurnost.png',
      imageAlt: 'Arhivska knjiga'
    }
  ];
</script>

<section class="features-section section" id="funkcije">
  <div class="container">
    <div class="features-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">Ključne funkcije</span>
      <h2 class="section-title">Jedna platforma za celokupnu dokumentaciju vaše firme</h2>
      <p class="section-subtitle mx-auto">
        Od prijema dokumenta do trajnog arhiviranja. Sve automatizovano, sve na jednom mestu.
      </p>
    </div>

    <div class="features-list">
      {#each features as feature, i}
        <div class="feature-row animate-on-scroll" class:reverse={i % 2 === 1} use:scrollReveal style="transition-delay: {i * 100}ms">
          <div class="feature-text">
            <span class="feature-label">{feature.label}</span>
            <h3 class="feature-title">{feature.title}</h3>
            <p class="feature-desc">{feature.description}</p>
          </div>
          <div class="feature-image-wrapper">
            <img src={feature.image} alt={feature.imageAlt} class="feature-image" loading="lazy" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .features-section {
    padding: 5rem 0;
  }

  .features-header {
    margin-bottom: 4rem;
  }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .feature-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .feature-row.reverse {
    direction: rtl;
  }

  .feature-row.reverse > * {
    direction: ltr;
  }

  .feature-label {
    display: inline-block;
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .feature-title {
    font-size: clamp(1.5rem, 2.5vw, 1.75rem);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--color-text);
    margin-bottom: 1rem;
  }

  .feature-desc {
    font-size: var(--font-size-base);
    color: var(--color-text-muted);
    line-height: 1.7;
  }

  .feature-image-wrapper {
    border-radius: var(--radius-xl);
    overflow: hidden;
    border: 1px solid var(--color-border-light);
    box-shadow: var(--shadow-lg);
    background: var(--color-bg-card);
    transition: all var(--transition-normal);
  }

  .feature-image-wrapper:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
  }

  .feature-image {
    width: 100%;
    display: block;
  }

  @media (max-width: 900px) {
    .feature-row,
    .feature-row.reverse {
      grid-template-columns: 1fr;
      gap: 2rem;
      direction: ltr;
    }

    .feature-text {
      text-align: center;
    }

    .features-list {
      gap: 3rem;
    }
  }
</style>
