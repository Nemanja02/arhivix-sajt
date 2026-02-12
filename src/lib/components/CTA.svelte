<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
</script>

<section class="cta-section section">
  <div class="container">
    <div class="cta-card animate-on-scroll" use:scrollReveal>
      <div class="cta-bg">
        <div class="cta-gradient-1"></div>
        <div class="cta-gradient-2"></div>
        <img
          src="/images/misc/cta-decoration.png"
          alt=""
          class="cta-decoration"
          aria-hidden="true"
        />
      </div>

      <div class="cta-content">
        <img
          src="/images/misc/cta-illustration.png"
          alt="Arhivix"
          class="cta-illustration"
        />
        <h2>Prestanite da gubite vreme<br />na traženje dokumenata.</h2>
        <p>Pređite na pametniji način upravljanja dokumentacijom. Bez obaveza, bez kartice. 14 dana besplatno.</p>
        <a href="/register" class="btn btn-primary btn-large cta-btn">
          Započnite besplatno
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .cta-section {
    padding: 3rem 0 5rem;
  }

  .cta-card {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    padding: 4rem 2rem;
    text-align: center;
    background: var(--color-bg-dark);
    color: white;
  }

  .cta-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .cta-gradient-1 {
    position: absolute;
    top: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%);
    filter: blur(80px);
  }

  .cta-gradient-2 {
    position: absolute;
    bottom: -50%;
    left: -20%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
    filter: blur(80px);
  }

  .cta-decoration {
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 400px;
    opacity: 0.05;
    pointer-events: none;
  }

  .cta-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-illustration {
    display: block;
    width: 160px;
    height: auto;
    margin: 0 auto 2rem;
    object-fit: contain;
    animation: float 4s ease-in-out infinite;
  }

  .cta-content h2 {
    font-size: var(--font-size-3xl);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
  }

  .cta-content p {
    font-size: var(--font-size-lg);
    opacity: 0.7;
    margin-bottom: 2rem;
  }

  .cta-btn {
    background: white;
    color: var(--color-bg-dark);
  }

  .cta-btn:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  @media (max-width: 768px) {
    .cta-card {
      padding: 3rem 1.5rem;
    }

    .cta-illustration {
      width: 120px;
    }
  }
</style>
