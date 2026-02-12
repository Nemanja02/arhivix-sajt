<script>
  import { onMount } from 'svelte';

  let heroVisible = false;

  onMount(() => {
    setTimeout(() => {
      heroVisible = true;
    }, 100);
  });
</script>

<section class="hero">
  <div class="hero-bg">
    <div class="hero-gradient"></div>
    <div class="hero-grid-pattern"></div>
  </div>

  <div class="container">
    <div class="hero-content" class:visible={heroVisible}>
      <a href="/register" class="hero-badge">
        <span class="badge-dot"></span>
        Pridružite se 300+ uspešnih kompanija
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <h1 class="hero-title">
        Zaboravite na izgubljene<br />
        dokumente. <span class="hero-title-highlight">Neka AI<br />radi umesto vas.</span>
      </h1>

      <p class="hero-subtitle">
        Arhivix čuva, štiti i organizuje celokupnu dokumentaciju vaše firme<br class="hide-mobile" />
        uz pomoć veštačke inteligencije. Elektronske fakture, otpremnice,<br class="hide-mobile" />
        arhivska knjiga. Sve na jednom mestu, potpuno usklađeno sa zakonom.
      </p>

      <div class="hero-cta">
        <a href="/register" class="btn btn-primary btn-large hero-btn">
          Isprobajte besplatno 14 dana
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <span class="hero-cta-note">Više od 300 zadovoljnih firmi</span>
      </div>

      <div class="hero-image-wrapper">
        <div class="hero-image-glow"></div>
        <img
          src="/images/misc/hero-dashboard.png"
          alt="Arhivix Dashboard"
          class="hero-image"
          loading="eager"
        />
        <div class="hero-image-shadow"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: 8rem 0 4rem;
    overflow: hidden;
    min-height: 100vh;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .hero-gradient {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.08) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 0%, rgba(124, 58, 237, 0.05) 0%, transparent 50%);
  }

  .hero-grid-pattern {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 0%, transparent 70%);
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-content > * {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .hero-content.visible > *:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0s; }
  .hero-content.visible > *:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
  .hero-content.visible > *:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
  .hero-content.visible > *:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
  .hero-content.visible > *:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--color-badge-bg);
    color: var(--color-badge-text);
    font-size: var(--font-size-sm);
    font-weight: 600;
    border-radius: var(--radius-full);
    border: 1px solid rgba(37, 99, 235, 0.15);
    transition: all var(--transition-normal);
    margin-bottom: 1.5rem;
  }

  .hero-badge:hover {
    background: rgba(37, 99, 235, 0.12);
    transform: translateY(-1px);
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-primary);
    animation: pulse 2s infinite;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5.5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
    color: var(--color-text);
  }

  .hero-title-highlight {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .hero-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
  }

  .hero-btn {
    position: relative;
    overflow: hidden;
  }

  .hero-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  .hero-btn:hover::before {
    transform: translateX(100%);
  }

  .hero-cta-note {
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
  }

  .hero-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    border-radius: var(--radius-xl);
    overflow: hidden;
    border: 1px solid var(--color-border-light);
    box-shadow: var(--shadow-xl), 0 0 0 1px rgba(0, 0, 0, 0.03);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    background: var(--color-bg-card);
  }

  .hero-image-wrapper:hover {
    transform: translateY(-4px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.03);
  }

  .hero-image-glow {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(ellipse, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
    filter: blur(60px);
    z-index: -1;
    pointer-events: none;
  }

  .hero-image {
    width: 100%;
    display: block;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }

  .hero-image-shadow {
    position: absolute;
    bottom: -20px;
    left: 10%;
    right: 10%;
    height: 40px;
    background: radial-gradient(ellipse, rgba(0, 0, 0, 0.1) 0%, transparent 70%);
    filter: blur(20px);
    pointer-events: none;
  }

  .hide-mobile {
    display: inline;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 6rem 0 2rem;
      min-height: auto;
    }

    .hero-subtitle {
      font-size: var(--font-size-base);
    }

    .hide-mobile {
      display: none;
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
</style>
