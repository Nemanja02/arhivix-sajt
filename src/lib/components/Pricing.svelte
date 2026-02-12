<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  import { tick } from 'svelte';

  let isYearly = true;
  let toggleBtns = [];
  let indicatorLeft = 0;
  let indicatorWidth = 0;

  async function updateIndicator() {
    await tick();
    const activeIndex = isYearly ? 1 : 0;
    const btn = toggleBtns[activeIndex];
    if (btn) {
      indicatorLeft = btn.offsetLeft;
      indicatorWidth = btn.offsetWidth;
    }
  }

  $: isYearly, updateIndicator();

  const plans = [
    {
      name: 'Basic',
      desc: 'Za male firme koje žele urednu digitalnu arhivu i osnovne funkcije bez komplikacija.',
      monthly: 3000,
      yearly: 2600,
      features: [
        { text: 'Do 5 korisnika', ai: false },
        { text: '1 radni prostor', ai: false },
        { text: '100 arhiviranih dokumenata mesečno', ai: false },
        { text: '50 vremenskih žigova mesečno', ai: false },
        { text: 'Automatsko arhiviranje', ai: false }
      ],
      popular: false
    },
    {
      name: 'Premium',
      desc: 'Za preduzeća sa većim obimom dokumenata i potrebom za bržim, fleksibilnijim radom.',
      monthly: 4800,
      yearly: 4100,
      features: [
        { text: 'Do 10 korisnika', ai: false },
        { text: '3 radna prostora', ai: false },
        { text: '300 arhiviranih dokumenata mesečno', ai: false },
        { text: '150 vremenskih žigova mesečno', ai: false },
        { text: 'Automatsko arhiviranje', ai: false }
      ],
      popular: false
    },
    {
      name: 'Ultimate',
      desc: 'Za kompanije koje rade intenzivno i traže najviše kapacitete, AI funkcije i punu automatizaciju.',
      monthly: 6200,
      yearly: 5300,
      features: [
        { text: 'Do 20 korisnika', ai: false },
        { text: '5 radnih prostora', ai: false },
        { text: '1000 arhiviranih dokumenata mesečno', ai: false },
        { text: '500 vremenskih žigova mesečno', ai: false },
        { text: 'Automatsko arhiviranje', ai: false },
        { text: 'AI pretraga dokumenata', ai: true },
        { text: 'Sumiranje dokumenata pomoću AI', ai: true }
      ],
      popular: true
    }
  ];

  function formatPrice(price) {
    return price.toLocaleString('sr-RS');
  }
</script>

<section class="pricing-section section" id="cenovnik">
  <div class="container">
    <div class="pricing-header text-center animate-on-scroll" use:scrollReveal>
      <h2 class="section-title">Paketi za svako preduzeće</h2>
      <p class="section-subtitle mx-auto">Izaberite paket koji najbolje odgovara vašim potrebama</p>
    </div>

    <div class="pricing-toggle-wrapper animate-on-scroll" use:scrollReveal>
      <div class="pricing-toggle">
        <button
          class="toggle-btn"
          class:active={!isYearly}
          on:click={() => (isYearly = false)}
          bind:this={toggleBtns[0]}
        >
          Mesečno
        </button>
        <button
          class="toggle-btn"
          class:active={isYearly}
          on:click={() => (isYearly = true)}
          bind:this={toggleBtns[1]}
        >
          Godišnje
          <span class="toggle-badge">Uštedi 15%</span>
        </button>
        <div
          class="toggle-indicator"
          style="left: {indicatorLeft}px; width: {indicatorWidth}px"
        ></div>
      </div>
    </div>

    <div class="pricing-grid">
      {#each plans as plan, i}
        <div
          class="pricing-card animate-on-scroll"
          class:popular={plan.popular}
          use:scrollReveal
          style="transition-delay: {i * 100}ms"
        >
          {#if plan.popular}
            <div class="popular-badge">Najpopularnije</div>
          {/if}

          <div class="pricing-card-header">
            <h3 class="plan-name">{plan.name}</h3>
            <p class="plan-desc">{plan.desc}</p>
          </div>

          <div class="plan-price">
            <span class="price-amount">
              {formatPrice(isYearly ? plan.yearly : plan.monthly)}
            </span>
            <span class="price-currency">RSD</span>
            <span class="price-period">mesečno</span>
          </div>

          <ul class="plan-features">
            {#each plan.features as feature}
              <li class:ai-feature={feature.ai}>
                {#if feature.ai}
                  <svg class="sparkle-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="url(#sparkle-grad)" stroke="url(#sparkle-grad)" stroke-width="0.5" stroke-linejoin="round"/>
                    <defs><linearGradient id="sparkle-grad" x1="1" y1="1" x2="15" y2="15"><stop stop-color="#a855f7"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs>
                  </svg>
                {:else}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 4L6 12L3 9" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                {/if}
                {feature.text}
              </li>
            {/each}
          </ul>

          <a
            href="/register"
            class="btn btn-plan"
            class:btn-primary={plan.popular}
            class:btn-outline={!plan.popular}
          >
            Isprobajte 14 dana besplatno
          </a>
        </div>
      {/each}
    </div>

    <div class="pricing-note animate-on-scroll" use:scrollReveal>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
        <path d="M8 7V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="8" cy="5" r="0.75" fill="currentColor"/>
      </svg>
      <span><strong>Vremenski žigovi</strong> su digitalni potpisi sa tačnim vremenom izdavanja. Koriste se za elektronsko potpisivanje dokumenata i pravno dokazuju kada je dokument potpisan.</span>
    </div>
  </div>
</section>

<style>
  .pricing-header {
    margin-bottom: 2rem;
  }

  .pricing-toggle-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .pricing-toggle {
    position: relative;
    display: flex;
    background: var(--color-bg-card);
    border-radius: var(--radius-full);
    padding: 4px;
    border: 1px solid var(--color-border-light);
  }

  .toggle-btn {
    position: relative;
    z-index: 1;
    padding: 0.6rem 1.5rem;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-muted);
    transition: color var(--transition-normal);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: var(--radius-full);
  }

  .toggle-btn.active {
    color: var(--color-text);
  }

  .toggle-badge {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    background: var(--color-success);
    color: white;
    padding: 2px 6px;
    border-radius: var(--radius-full);
    letter-spacing: 0.02em;
  }

  .toggle-indicator {
    position: absolute;
    top: 4px;
    height: calc(100% - 8px);
    background: var(--color-white);
    border-radius: var(--radius-full);
    box-shadow: var(--shadow-sm);
    transition: left var(--transition-normal), width var(--transition-normal);
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    align-items: stretch;
  }

  .pricing-card {
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: 2rem;
    position: relative;
    transition: all var(--transition-normal);
    display: flex;
    flex-direction: column;
  }

  .pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .pricing-card.popular {
    border-color: #7c3aed;
    box-shadow: 0 0 0 1px #7c3aed, 0 8px 32px rgba(124, 58, 237, 0.15);
    background: linear-gradient(180deg, #faf5ff 0%, var(--color-white) 40%);
  }

  .pricing-card.popular:hover {
    box-shadow: 0 0 0 1px #7c3aed, 0 12px 40px rgba(124, 58, 237, 0.25);
  }

  .popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    color: white;
    font-size: var(--font-size-xs);
    font-weight: 700;
    padding: 0.3rem 1rem;
    border-radius: var(--radius-full);
    white-space: nowrap;
  }

  .pricing-card-header {
    margin-bottom: 1.5rem;
  }

  .plan-name {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .plan-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.5;
  }

  .plan-price {
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-border-light);
  }

  .price-amount {
    font-size: var(--font-size-3xl);
    font-weight: 800;
    letter-spacing: -0.02em;
    transition: all var(--transition-normal);
  }

  .price-currency {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-muted);
  }

  .price-period {
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
  }

  .plan-features {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;
    flex: 1;
  }

  .plan-features li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
  }

  .plan-features svg {
    flex-shrink: 0;
  }

  .ai-feature {
    color: #6d28d9;
    font-weight: 600;
  }

  .sparkle-icon {
    animation: sparkle-pulse 2s ease-in-out infinite;
  }

  @keyframes sparkle-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(0.9); }
  }

  .btn-plan {
    width: 100%;
    padding: 0.85rem;
    text-align: center;
    font-size: var(--font-size-sm);
  }

  .pricing-card.popular .btn-plan.btn-primary {
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    border-color: #7c3aed;
  }

  .pricing-card.popular .btn-plan.btn-primary:hover {
    background: linear-gradient(135deg, #9333ea, #6d28d9);
    box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
  }

  .pricing-note {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    max-width: 600px;
    margin: 2rem auto 0;
    padding: 1rem 1.25rem;
    background: var(--color-bg-card);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.6;
  }

  .pricing-note svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: var(--color-primary);
  }

  @media (max-width: 900px) {
    .pricing-grid {
      grid-template-columns: 1fr;
      max-width: 420px;
      margin: 0 auto;
    }
  }
</style>
