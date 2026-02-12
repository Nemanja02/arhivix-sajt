<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  let activeTab = 0;

  const tabs = [
    {
      title: 'Kraj haosa sa papirima',
      description: 'Sve fakture, otpremnice, ugovori i dokumenti na jednom mestu. Pretražujte ih slobodnim jezikom, pristupajte im sa bilo kog uređaja. Bez fascikli, bez nerviranja, bez gubljenja vremena.',
      image: '/images/features/organizacija.png',
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>'
    },
    {
      title: 'Elektronske fakture i otpremnice bez glavobolje',
      description: 'Kreirajte, šaljite i upravljajte elektronskim fakturama i otpremnicama u par klikova. Automatsko prosleđivanje knjigovođi. Manje grešaka, brži proces, potpuna kontrola.',
      image: '/images/features/digitalno.png',
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>'
    },
    {
      title: 'Vaši podaci su samo vaši',
      description: 'Enkripcija na svakom fajlu, skladištenje na dva AWS evropska regiona, granularna kontrola pristupa za svakog korisnika. Vaši dokumenti su bezbedniji nego u fizičkom sefu.',
      image: '/images/features/sigurnost.png',
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>'
    }
  ];
</script>

<section class="features-section section" id="funkcije" use:scrollReveal>
  <div class="container animate-on-scroll" use:scrollReveal>
    <div class="features-header text-center">
      <span class="section-label">Ključne funkcije</span>
      <h2 class="section-title">Sve što vam treba. Ništa što vam ne treba.</h2>
    </div>

    <div class="features-tabs">
      <div class="tabs-nav">
        {#each tabs as tab, i}
          <button
            class="tab-btn"
            class:active={activeTab === i}
            on:click={() => (activeTab = i)}
          >
            <span class="tab-icon">{@html tab.icon}</span>
            <div class="tab-text">
              <span class="tab-title">{tab.title}</span>
              <span class="tab-desc">{tab.description}</span>
            </div>
            <div class="tab-progress" class:active={activeTab === i}></div>
          </button>
        {/each}
      </div>

      <div class="tabs-content">
        {#each tabs as tab, i}
          <div class="tab-panel" class:active={activeTab === i}>
            <img src={tab.image} alt={tab.title} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .features-section {
    padding: 5rem 0;
  }

  .features-header {
    margin-bottom: 3rem;
  }

  .features-tabs {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 2.5rem;
    align-items: start;
  }

  .tabs-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tab-btn {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem;
    border-radius: var(--radius-md);
    text-align: left;
    transition: all var(--transition-normal);
    background: transparent;
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
  }

  .tab-btn:hover {
    background: var(--color-bg-card);
  }

  .tab-btn.active {
    background: var(--color-white);
    border-color: var(--color-border);
    box-shadow: var(--shadow-sm);
  }

  .tab-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    background: rgba(37, 99, 235, 0.08);
    color: var(--color-primary);
    flex-shrink: 0;
    margin-top: 2px;
    transition: all var(--transition-normal);
  }

  .tab-btn.active .tab-icon {
    background: var(--color-primary);
    color: white;
  }

  .tab-text {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .tab-title {
    font-weight: 700;
    font-size: var(--font-size-base);
    color: var(--color-text);
  }

  .tab-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.5;
  }

  .tab-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: var(--color-primary);
    width: 0;
    transition: width 0.3s ease;
  }

  .tab-progress.active {
    width: 100%;
  }

  .tabs-content {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-bg-card);
    min-height: 400px;
  }

  .tab-panel {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    opacity: 0;
    transform: scale(0.98);
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
  }

  .tab-panel.active {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
    position: relative;
  }

  .tab-panel img {
    max-width: 100%;
    max-height: 480px;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    object-fit: contain;
  }

  @media (max-width: 900px) {
    .features-tabs {
      grid-template-columns: 1fr;
    }

    .tabs-nav {
      flex-direction: row;
      overflow-x: auto;
      gap: 0.5rem;
      padding-bottom: 0.5rem;
      -webkit-overflow-scrolling: touch;
    }

    .tab-btn {
      flex-direction: column;
      min-width: 200px;
      padding: 1rem;
    }

    .tab-desc {
      display: none;
    }

    .tabs-content {
      min-height: 300px;
    }
  }
</style>
