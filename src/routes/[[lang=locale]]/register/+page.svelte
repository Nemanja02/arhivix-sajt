<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import SEO from '$lib/components/SEO.svelte';
  import { t, localePath } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

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
      errs.name = t(locale, 'register.err_name');
    }

    if (!formData.email.trim()) {
      errs.email = t(locale, 'register.err_email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t(locale, 'register.err_email_invalid');
    }

    if (!formData.password) {
      errs.password = t(locale, 'register.err_password');
    } else if (formData.password.length < 8) {
      errs.password = t(locale, 'register.err_password_short');
    }

    if (!formData.company.trim()) {
      errs.company = t(locale, 'register.err_company');
    }

    if (!formData.pib.trim()) {
      errs.pib = t(locale, 'register.err_pib');
    }

    if (!formData.terms) {
      errs.terms = t(locale, 'register.err_terms');
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
  title={t(locale, 'register.meta_title')}
  description={t(locale, 'register.meta_desc')}
  {locale}
/>

<section class="register-page">
  <div class="container">
    <div class="register-wrapper">
      <div class="register-header text-center animate-on-scroll" use:scrollReveal>
        <span class="section-label">{t(locale, 'register.label')}</span>
        <h1 class="section-title">{t(locale, 'register.title')}</h1>
        <p class="section-subtitle mx-auto">
          {t(locale, 'register.subtitle')}
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
          <h2>{t(locale, 'register.success_title')}</h2>
          <p>{t(locale, 'register.success_text')}</p>
          <a href={localePath(locale, '/')} class="btn btn-primary btn-large">{t(locale, 'register.success_back')}</a>
        </div>
      {:else}
        <div class="register-card animate-on-scroll" use:scrollReveal>
          <form on:submit|preventDefault={handleSubmit} novalidate>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name">{t(locale, 'register.name_label')}</label>
                <input
                  id="name"
                  type="text"
                  class="form-input"
                  class:error={errors.name}
                  placeholder={t(locale, 'register.name_placeholder')}
                  bind:value={formData.name}
                />
                {#if errors.name}<span class="form-error">{errors.name}</span>{/if}
              </div>

              <div class="form-group">
                <label class="form-label" for="email">{t(locale, 'register.email_label')}</label>
                <input
                  id="email"
                  type="email"
                  class="form-input"
                  class:error={errors.email}
                  placeholder={t(locale, 'register.email_placeholder')}
                  bind:value={formData.email}
                />
                {#if errors.email}<span class="form-error">{errors.email}</span>{/if}
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="password">{t(locale, 'register.password_label')}</label>
              <input
                id="password"
                type="password"
                class="form-input"
                class:error={errors.password}
                placeholder={t(locale, 'register.password_placeholder')}
                bind:value={formData.password}
              />
              {#if errors.password}<span class="form-error">{errors.password}</span>{/if}
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="company">{t(locale, 'register.company_label')}</label>
                <input
                  id="company"
                  type="text"
                  class="form-input"
                  class:error={errors.company}
                  placeholder={t(locale, 'register.company_placeholder')}
                  bind:value={formData.company}
                />
                {#if errors.company}<span class="form-error">{errors.company}</span>{/if}
              </div>

              <div class="form-group">
                <label class="form-label" for="pib">{t(locale, 'register.pib_label')}</label>
                <input
                  id="pib"
                  type="text"
                  class="form-input"
                  class:error={errors.pib}
                  placeholder={t(locale, 'register.pib_placeholder')}
                  bind:value={formData.pib}
                />
                {#if errors.pib}<span class="form-error">{errors.pib}</span>{/if}
              </div>
            </div>

            <div class="form-group">
              <label class="form-checkbox">
                <input type="checkbox" bind:checked={formData.terms} />
                <span>
                  {t(locale, 'register.terms_text')} <a href={localePath(locale, '/legal/uslovi-koriscenja')}>{t(locale, 'register.terms_link')}</a> {t(locale, 'register.terms_and')}
                  <a href={localePath(locale, '/legal/politika-privatnosti')}>{t(locale, 'register.privacy_link')}</a>
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
                {t(locale, 'register.loading')}
              {:else}
                {t(locale, 'register.submit')}
              {/if}
            </button>
          </form>

          <p class="register-login">
            {t(locale, 'register.login_text')} <a href={localePath(locale, '/')}>{t(locale, 'register.login_link')}</a>
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
