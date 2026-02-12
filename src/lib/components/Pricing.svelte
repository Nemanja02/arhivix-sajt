<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  import { tick } from 'svelte';

  let isYearly = false;
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
      monthly: 2900,
      yearly: 2465,
      features: [
        '100 arhiviranih dokumenata mesečno.',
        '50 žigova mesečno',
        'Automatsko arhiviranje'
      ],
      popular: false
    },
    {
      name: 'Premium',
      desc: 'Za preduzeća sa većim obimom dokumenata i potrebom za bržim, fleksibilnijim radom.',
      monthly: 4200,
      yearly: 3570,
      features: [
        '300 arhiviranih dokumenata mesečno.',
        '150 žigova mesečno',
        'Automatsko arhiviranje'
      ],
      popular: false
    },
    {
      name: 'Ultimate',
      desc: 'Za kompanije koje rade intenzivno i traže najviše kapacitete i punu automatizaciju.',
      monthly: 5400,
      yearly: 4590,
      features: [
        '1000 arhiviranih dokumenata mesečno.',
        '500 žigova mesečno',
        'Automatsko arhiviranje'
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
              <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4L6 12L3 9" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {feature}
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
    align-items: start;
  }

  .pricing-card {
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: 2rem;
    position: relative;
    transition: all var(--transition-normal);
  }

  .pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .pricing-card.popular {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 1px var(--color-primary), var(--shadow-lg);
  }

  .popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-primary);
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

  .btn-plan {
    width: 100%;
    padding: 0.85rem;
    text-align: center;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 900px) {
    .pricing-grid {
      grid-template-columns: 1fr;
      max-width: 420px;
      margin: 0 auto;
    }
  }
</style>
