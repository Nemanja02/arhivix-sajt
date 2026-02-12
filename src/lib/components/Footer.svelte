<script>
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="footer-logo">
          <img
            src="/images/misc/logo.png"
            alt="Arhivix"
            width="120"
            height="28"
          />
        </a>
        <p class="footer-tagline">Vaša dokumentacija na dohvat ruke</p>
      </div>

      <div class="footer-links-group">
        <h4>Knjigovođe</h4>
        <ul>
          <li><a href="/">Za knjigovođe</a></li>
          <li><a href="/">Za agencije</a></li>
          <li><a href="/">Postani partner</a></li>
          <li><a href="/blog">Edukacije</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>Podrška</h4>
        <ul>
          <li><a href="/">Kontakt</a></li>
          <li><a href="/blog">Video materijali</a></li>
          <li><a href="/">Tehnička podrška</a></li>
          <li><a href="/#pitanja">Pitanja</a></li>
          <li><a href="/#cenovnik">Paketi</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>Pravilnici</h4>
        <ul>
          <li><a href="/legal/politika-privatnosti">Politika privatnosti</a></li>
          <li><a href="/legal/uslovi-koriscenja">Uslovi korišćenja</a></li>
          <li><a href="/legal/kolacici">Kolačići</a></li>
          <li><a href="/legal/javni-pravilnici">Javni Pravilnici</a></li>
          <li><a href="/legal/licenca">Licenca softvera</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Notix DOO Beograd | MB: 21993310 | PIB: 114240716</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--color-border-light);
    padding: 4rem 0 2rem;
    background: var(--color-bg);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .footer-logo img {
    height: 28px;
    width: auto;
    margin-bottom: 0.75rem;
  }

  .footer-tagline {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
  }

  .footer-links-group h4 {
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .footer-links-group ul {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .footer-links-group a {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
  }

  .footer-links-group a:hover {
    color: var(--color-text);
  }

  .footer-bottom {
    border-top: 1px solid var(--color-border-light);
    padding-top: 1.5rem;
  }

  .footer-bottom p {
    font-size: var(--font-size-xs);
    color: var(--color-text-light);
    text-align: center;
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .footer-brand {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 480px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
