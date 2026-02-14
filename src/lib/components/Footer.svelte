<script>
  import { t, localePath } from '$lib/i18n';

  export let locale = 'sr';
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href={localePath(locale, '/')} class="footer-logo">
          <img
            src="/images/misc/logo.png"
            alt="Arhivix"
            width="120"
            height="28"
          />
        </a>
        <p class="footer-tagline">{t(locale, 'footer.tagline')}</p>
      </div>

      <div class="footer-links-group">
        <h4>{t(locale, 'footer.resources')}</h4>
        <ul>
          <li><a href={localePath(locale, '/blog/elektronske-fakture')}>{t(locale, 'footer.efakture')}</a></li>
          <li><a href={localePath(locale, '/blog/elektronske-otpremnice')}>{t(locale, 'footer.eotpremnice')}</a></li>
          <li><a href={localePath(locale, '/blog/arhivska-knjiga')}>{t(locale, 'footer.arhivska_knjiga')}</a></li>
          <li><a href={localePath(locale, '/blog')}>{t(locale, 'footer.blog')}</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>{t(locale, 'footer.support')}</h4>
        <ul>
          <li><a href={localePath(locale, '/')}>{t(locale, 'footer.contact')}</a></li>
          <li><a href={localePath(locale, '/blog')}>{t(locale, 'footer.videos')}</a></li>
          <li><a href={localePath(locale, '/')}>{t(locale, 'footer.tech_support')}</a></li>
          <li><a href={localePath(locale, '/') + '#pitanja'}>{t(locale, 'footer.faq')}</a></li>
          <li><a href={localePath(locale, '/') + '#cenovnik'}>{t(locale, 'footer.packages')}</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>{t(locale, 'footer.legal')}</h4>
        <ul>
          <li><a href={localePath(locale, '/legal/politika-privatnosti')}>{t(locale, 'footer.privacy')}</a></li>
          <li><a href={localePath(locale, '/legal/uslovi-koriscenja')}>{t(locale, 'footer.terms')}</a></li>
          <li><a href={localePath(locale, '/legal/kolacici')}>{t(locale, 'footer.cookies')}</a></li>
          <li><a href={localePath(locale, '/legal/javni-pravilnici')}>{t(locale, 'footer.public_rules')}</a></li>
          <li><a href={localePath(locale, '/legal/licenca')}>{t(locale, 'footer.license')}</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Notix DOO Beograd | MB: 21993310 | PIB: 114240716</p>
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
