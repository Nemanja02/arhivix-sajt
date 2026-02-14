<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { t, localePath } from '$lib/i18n';
  import LanguageSwitcher from './LanguageSwitcher.svelte';

  export let locale = 'sr';

  let scrolled = false;
  let mobileOpen = false;

  $: pathname = $page.url.pathname;
  $: isHome = pathname === '/' || pathname === '/en' || pathname === '/en/' || pathname === '/de' || pathname === '/de/';
  $: forceScrolled = !isHome;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function closeMobile() {
    mobileOpen = false;
  }
</script>

<nav class="navbar" class:scrolled={scrolled || forceScrolled}>
  <div class="nav-container">
    <a href={localePath(locale, '/')} class="nav-logo">
      <img
        src="/images/misc/logo.png"
        alt="Arhivix"
        width="130"
        height="30"
      />
    </a>

    <div class="nav-links">
      <a href={localePath(locale, '/')}>{t(locale, 'nav.home')}</a>
      <a href={localePath(locale, '/') + '#funkcije'}>{t(locale, 'nav.features')}</a>
      <a href={localePath(locale, '/') + '#cenovnik'}>{t(locale, 'nav.pricing')}</a>
    </div>

    <div class="nav-actions">
      <LanguageSwitcher {locale} />
      <a href="https://updater.arhivix.com/download_arhivix" class="btn btn-outline btn-nav" rel="noopener" target="_blank">{t(locale, 'nav.download')}</a>
      <a href={localePath(locale, '/register')} class="btn btn-primary btn-nav">
        {t(locale, 'nav.cta')}
      </a>
    </div>

    <button
      class="mobile-toggle"
      on:click={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
    >
      <span class="hamburger" class:open={mobileOpen}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  </div>

  {#if mobileOpen}
    <div class="mobile-overlay" on:click={closeMobile} on:keydown={closeMobile}></div>
    <div class="mobile-menu" class:open={mobileOpen}>
      <div class="mobile-menu-inner">
        <a href={localePath(locale, '/')} on:click={closeMobile}>{t(locale, 'nav.home')}</a>
        <a href={localePath(locale, '/') + '#funkcije'} on:click={closeMobile}>{t(locale, 'nav.features')}</a>
        <a href={localePath(locale, '/') + '#cenovnik'} on:click={closeMobile}>{t(locale, 'nav.pricing')}</a>
        <div class="mobile-lang">
          <LanguageSwitcher {locale} />
        </div>
        <div class="mobile-actions">
          <a href="https://updater.arhivix.com/download_arhivix" class="btn btn-outline btn-full" rel="noopener" target="_blank">{t(locale, 'nav.download')}</a>
          <a href={localePath(locale, '/register')} class="btn btn-primary btn-full">{t(locale, 'nav.cta')}</a>
        </div>
      </div>
    </div>
  {/if}
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem 0;
    transition: all var(--transition-normal);
    background: transparent;
  }

  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-border-light);
    padding: 0.75rem 0;
    box-shadow: var(--shadow-sm);
  }

  .nav-container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-padding);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo img {
    height: 30px;
    width: auto;
    transition: opacity var(--transition-fast);
  }

  .nav-logo:hover img {
    opacity: 0.8;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
    position: relative;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
    border-radius: 1px;
  }

  .nav-links a:hover {
    color: var(--color-text);
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  .nav-actions {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .btn-nav {
    padding: 0.5rem 1.25rem;
    font-size: var(--font-size-sm);
  }

  .mobile-toggle {
    display: none;
    padding: 0.5rem;
    z-index: 1001;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 24px;
  }

  .hamburger span {
    display: block;
    height: 2px;
    background: var(--color-text);
    border-radius: 2px;
    transition: all var(--transition-normal);
    transform-origin: center;
  }

  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 998;
    animation: fadeIn 0.2s ease;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: var(--color-white);
    z-index: 999;
    padding: 5rem 1.5rem 2rem;
    animation: slideInRight 0.3s ease;
    box-shadow: var(--shadow-xl);
  }

  .mobile-menu-inner {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .mobile-menu-inner a {
    font-size: var(--font-size-lg);
    font-weight: 500;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--color-border-light);
  }

  .mobile-lang {
    padding: 0.5rem 0;
  }

  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .btn-full {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 900px) {
    .nav-links,
    .nav-actions {
      display: none;
    }

    .mobile-toggle {
      display: block;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
</style>
