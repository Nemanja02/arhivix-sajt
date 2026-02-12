<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
</script>

<section class="feature-cards-section section">
  <div class="container">
    <div class="fc-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">Napredne funkcije za modernu digitalnu kancelariju</span>
      <h2 class="section-title">Sve što vam treba za bržu<br />i uredniju dokumentaciju</h2>
      <p class="section-subtitle mx-auto">
        Digitalizujte fakture, otpremnice i arhivu na jednom mestu i olakšajte saradnju sa timom i knjigovođom.
      </p>
    </div>

    <div class="fc-grid">
      <!-- Card 1: Invoice overview -->
      <div class="fc-card fc-card-half animate-on-scroll" use:scrollReveal>
        <div class="fc-card-img">
          <img
            src="/images/features/card-archive.png"
            alt="Pregled faktura"
          />
        </div>
        <div class="fc-card-body">
          <h3>Pregled faktura na jednom mestu</h3>
          <p>Brzo vidiš sve fakture sa statusom, cenom i tipom, kao i ko je kreirao i odobrio dokument. Ušteda vremena i potpuna kontrola nad finansijskim tokom.</p>
        </div>
      </div>

      <!-- Card 2: Recent docs -->
      <div class="fc-card fc-card-half animate-on-scroll" use:scrollReveal style="transition-delay: 100ms">
        <div class="fc-card-img">
          <img
            src="/images/features/card-invoices.png"
            alt="Nedavni dokumenti"
          />
        </div>
        <div class="fc-card-body">
          <h3>Nedavni dokumenti i aktivnosti</h3>
          <p>Sve što je skoro arhivirano prikazano je pregledno – ko je dodao dokument, kojoj grupi pripada i kada je unet.</p>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="fc-testimonial animate-on-scroll" use:scrollReveal>
        <div class="fc-quote-mark">"</div>
        <blockquote>
          Ovaj sistem nam je konačno rešio haos sa papirima. Svi dokumenti, fakture i otpremnice su pregledni, deljenje sa klijentima je momentalno, a knjigovođa ima sve na vreme. Osećamo stvarno olakšanje u svakodnevnom radu.
        </blockquote>
        <div class="fc-author">
          <img
            src="/images/features/card-stamp.png"
            alt="Marko Jovanović"
            class="fc-author-img"
          />
          <div>
            <div class="fc-author-name">Marko Jovanović</div>
            <div class="fc-author-role">Direktor operacija, MJ Solutions</div>
          </div>
        </div>
      </div>

      <!-- Card 3: e-signature -->
      <div class="fc-card fc-card-half animate-on-scroll" use:scrollReveal>
        <div class="fc-card-img">
          <img
            src="/images/features/card-dashboard.png"
            alt="e-potpis"
          />
        </div>
        <div class="fc-card-body">
          <h3>Brzo arhiviranje i e-potpis</h3>
          <p>Dodaj ili skeniraj dokument u par sekundi, a potom ga potpiši elektronski. Sve ide brzo i bez komplikacija.</p>
        </div>
      </div>

      <!-- Card 4: Team management -->
      <div class="fc-card fc-card-half animate-on-scroll" use:scrollReveal style="transition-delay: 100ms">
        <div class="fc-card-img">
          <img
            src="/images/features/card-otpremnice.png"
            alt="Upravljanje timom"
          />
        </div>
        <div class="fc-card-body">
          <h3>Upravljanje timom i pristupima</h3>
          <p>Jednostavno dodajte korisnike, dodelite uloge i kontrolišite dozvole. Sve aktivnosti su pregledne i uvek pod vašom kontrolom.</p>
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
