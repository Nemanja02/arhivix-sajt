<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import SEO from '$lib/components/SEO.svelte';

  let formData = {
    name: '',
    email: '',
    password: '',
    company: '',
    pib: '',
    terms: false
  };

  let errors = {};
  let submitted = false;
  let loading = false;

  function validate() {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Ime i prezime je obavezno';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email je obavezan';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Unesite validnu email adresu';
    }

    if (!formData.password) {
      errs.password = 'Lozinka je obavezna';
    } else if (formData.password.length < 8) {
      errs.password = 'Lozinka mora imati najmanje 8 karaktera';
    }

    if (!formData.company.trim()) {
      errs.company = 'Naziv firme je obavezan';
    }

    if (!formData.pib.trim()) {
      errs.pib = 'PIB je obavezan';
    }

    if (!formData.terms) {
      errs.terms = 'Morate prihvatiti uslove korišćenja';
    }

    return errs;
  }

  async function handleSubmit() {
    errors = validate();
    if (Object.keys(errors).length > 0) return;

    loading = true;

    // TODO: Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    loading = false;
    submitted = true;
  }
</script>

<SEO
  title="Arhivix | Registracija"
  description="Započnite besplatni probni period od 14 dana. Registrujte se za Arhivix i organizujte svoju dokumentaciju."
/>

<section class="register-page">
  <div class="container">
    <div class="register-wrapper">
      <div class="register-header text-center animate-on-scroll" use:scrollReveal>
        <span class="section-label">Besplatno 14 dana</span>
        <h1 class="section-title">Započnite besplatni probni period</h1>
        <p class="section-subtitle mx-auto">
          Kreirajte nalog i isprobajte sve funkcionalnosti Arhivix platforme bez obaveza.
        </p>
      </div>

      {#if submitted}
        <div class="register-success animate-on-scroll" use:scrollReveal>
          <div class="success-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#10b981" opacity="0.1"/>
              <path d="M16 24L22 30L32 18" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2>Uspešna registracija!</h2>
          <p>Proverite vaš email za dalje instrukcije.</p>
          <a href="/" class="btn btn-primary btn-large">Nazad na početnu</a>
        </div>
      {:else}
        <div class="register-card animate-on-scroll" use:scrollReveal>
          <form on:submit|preventDefault={handleSubmit} novalidate>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name">Ime i prezime</label>
                <input
                  id="name"
                  type="text"
                  class="form-input"
                  class:error={errors.name}
                  placeholder="Vaše ime i prezime"
                  bind:value={formData.name}
                />
                {#if errors.name}<span class="form-error">{errors.name}</span>{/if}
              </div>

              <div class="form-group">
                <label class="form-label" for="email">Email adresa</label>
                <input
                  id="email"
                  type="email"
                  class="form-input"
                  class:error={errors.email}
                  placeholder="vas@email.com"
                  bind:value={formData.email}
                />
                {#if errors.email}<span class="form-error">{errors.email}</span>{/if}
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="password">Lozinka</label>
              <input
                id="password"
                type="password"
                class="form-input"
                class:error={errors.password}
                placeholder="Najmanje 8 karaktera"
                bind:value={formData.password}
              />
              {#if errors.password}<span class="form-error">{errors.password}</span>{/if}
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="company">Naziv firme</label>
                <input
                  id="company"
                  type="text"
                  class="form-input"
                  class:error={errors.company}
                  placeholder="Naziv vaše firme"
                  bind:value={formData.company}
                />
                {#if errors.company}<span class="form-error">{errors.company}</span>{/if}
              </div>

              <div class="form-group">
                <label class="form-label" for="pib">PIB</label>
                <input
                  id="pib"
                  type="text"
                  class="form-input"
                  class:error={errors.pib}
                  placeholder="Vaš PIB broj"
                  bind:value={formData.pib}
                />
                {#if errors.pib}<span class="form-error">{errors.pib}</span>{/if}
              </div>
            </div>

            <div class="form-group">
              <label class="form-checkbox">
                <input type="checkbox" bind:checked={formData.terms} />
                <span>
                  Prihvatam <a href="/legal/uslovi-koriscenja">uslove korišćenja</a> i
                  <a href="/legal/politika-privatnosti">politiku privatnosti</a>
                </span>
              </label>
              {#if errors.terms}<span class="form-error">{errors.terms}</span>{/if}
            </div>

            <button
              type="submit"
              class="btn btn-primary btn-large register-submit"
              disabled={loading}
            >
              {#if loading}
                <span class="spinner"></span>
                Kreiranje naloga...
              {:else}
                Kreirajte besplatni nalog
              {/if}
            </button>
          </form>

          <p class="register-login">
            Već imate nalog? <a href="/">Prijavite se</a>
          </p>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .register-page {
    padding-top: 8rem;
    padding-bottom: 4rem;
    min-height: 80vh;
  }

  .register-wrapper {
    max-width: 540px;
    margin: 0 auto;
  }

  .register-header {
    margin-bottom: 2.5rem;
  }

  .register-card {
    background: var(--color-white);
    border: 1.5px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: 2.5rem;
    box-shadow: var(--shadow-lg);
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .register-submit {
    width: 100%;
    margin-top: 0.5rem;
  }

  .register-login {
    text-align: center;
    margin-top: 1.5rem;
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
  }

  .register-login a {
    color: var(--color-primary);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .register-success {
    text-align: center;
    padding: 3rem 2rem;
    background: var(--color-white);
    border: 1.5px solid var(--color-border);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
  }

  .success-icon {
    margin-bottom: 1.5rem;
  }

  .register-success h2 {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .register-success p {
    color: var(--color-text-muted);
    margin-bottom: 2rem;
  }

  .spinner {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 600px) {
    .form-row {
      grid-template-columns: 1fr;
    }

    .register-card {
      padding: 1.5rem;
    }
  }
</style>
