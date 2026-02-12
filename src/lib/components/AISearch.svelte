<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  const features = [
    {
      title: 'AI pretraga',
      desc: 'Opišite dokument svojim rečima. "Pronađi mi račun za struju iz marta" je dovoljno. Sistem razume kontekst i pronalazi tačan fajl za sekunde.',
      icon: 'search'
    },
    {
      title: 'Automatsko tagovanje',
      desc: 'Svaki dokument koji otpremite se automatski analizira. AI prepoznaje tip dokumenta, dobavljača, datume i ključne podatke, i dodeljuje tagove bez vašeg učešća.',
      icon: 'tag'
    },
    {
      title: 'Sumiranje dokumenata',
      desc: 'Dobijte suštinu bilo kog dokumenta u nekoliko rečenica. Ugovori, fakture, izveštaji. Bez čitanja 20 strana, samo ono što je bitno.',
      icon: 'summary'
    }
  ];
</script>

<section class="ai-section section">
  <div class="ai-bg">
    <div class="ai-gradient"></div>
    <div class="ai-sparkle ai-sparkle-1">
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="rgba(168,85,247,0.3)"/></svg>
    </div>
    <div class="ai-sparkle ai-sparkle-2">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="rgba(124,58,237,0.25)"/></svg>
    </div>
    <div class="ai-sparkle ai-sparkle-3">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="rgba(192,132,252,0.3)"/></svg>
    </div>
    <div class="ai-sparkle ai-sparkle-4">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="rgba(168,85,247,0.2)"/></svg>
    </div>
  </div>

  <div class="container">
    <div class="ai-header text-center animate-on-scroll" use:scrollReveal>
      <span class="ai-label">
        <svg class="ai-label-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="currentColor"/>
        </svg>
        Veštačka inteligencija
      </span>
      <h2 class="ai-title">Prestanite da tražite dokumente.<br/>Neka AI radi to umesto vas.</h2>
      <p class="ai-subtitle">
        Vaš tim više ne mora da gubi sate pretražujući foldere i fascikle.
        Arhivix AI automatski organizuje, pretražuje i sumira sve vaše dokumente.
      </p>
    </div>

    <div class="ai-features-grid">
      {#each features as feature, i}
        <div class="ai-feature-card animate-on-scroll" use:scrollReveal style="transition-delay: {i * 120}ms">
          <div class="ai-feature-icon">
            {#if feature.icon === 'search'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            {:else if feature.icon === 'tag'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            {:else}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
            {/if}
          </div>
          <h3 class="ai-feature-title">{feature.title}</h3>
          <p class="ai-feature-desc">{feature.desc}</p>
        </div>
      {/each}
    </div>

    <div class="ai-cta-wrapper animate-on-scroll" use:scrollReveal>
      <a href="/register" class="btn ai-cta-btn">
        <svg class="ai-cta-sparkle" width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="currentColor"/>
        </svg>
        Isprobajte AI funkcije besplatno
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <span class="ai-cta-note">Dostupno u Ultimate paketu</span>
    </div>

    <div class="ai-demo-wrapper animate-on-scroll" use:scrollReveal style="transition-delay: 200ms">
      <div class="ai-chat-demo">
        <div class="ai-chat-header">
          <div class="ai-chat-dot"></div>
          <span>Arhivix AI Pretraga</span>
        </div>
        <div class="ai-chat-body">
          <div class="ai-chat-msg user">
            <span>Pronađi mi račun za struju iz marta</span>
          </div>
          <div class="ai-chat-msg bot">
            <span>Pronašao sam 1 rezultat:</span>
            <div class="ai-chat-result">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
              <div>
                <strong>Račun_EPS_mart_2025.pdf</strong>
                <small>Fakture / EPS / Mart 2025</small>
              </div>
            </div>
            <div class="ai-chat-tags">
              <span class="ai-tag">Faktura</span>
              <span class="ai-tag">EPS</span>
              <span class="ai-tag">Mart 2025</span>
              <span class="ai-tag">Struja</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .ai-section {
    position: relative;
    padding: 8rem 0;
    margin: -3rem 0;
    background: linear-gradient(180deg,
      var(--color-bg) 0%,
      #faf7fe 8%,
      #f5eefa 15%,
      #f3e8ff 30%,
      #ede9fe 50%,
      #f3e8ff 70%,
      #f5eefa 85%,
      #faf7fe 92%,
      var(--color-bg) 100%
    );
  }

  .ai-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .ai-gradient {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 40% at 20% 30%, rgba(168, 85, 247, 0.06) 0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 80% 70%, rgba(124, 58, 237, 0.05) 0%, transparent 50%);
  }

  .ai-sparkle {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    animation: sparkle-float 6s ease-in-out infinite;
  }

  .ai-sparkle-1 { top: 15%; left: 8%; animation-delay: 0s; }
  .ai-sparkle-2 { top: 25%; right: 12%; animation-delay: 1.5s; }
  .ai-sparkle-3 { bottom: 30%; left: 15%; animation-delay: 3s; }
  .ai-sparkle-4 { bottom: 20%; right: 8%; animation-delay: 4.5s; }

  @keyframes sparkle-float {
    0%, 100% { opacity: 0.4; transform: translateY(0) scale(1); }
    50% { opacity: 1; transform: translateY(-12px) scale(1.15); }
  }

  .container {
    position: relative;
    z-index: 2;
  }

  .ai-header {
    margin-bottom: 3rem;
  }

  .ai-label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(124, 58, 237, 0.15));
    color: #7c3aed;
    font-size: var(--font-size-sm);
    font-weight: 700;
    border-radius: var(--radius-full);
    margin-bottom: 1.25rem;
  }

  .ai-label-icon {
    animation: sparkle-pulse 2s ease-in-out infinite;
  }

  @keyframes sparkle-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(0.85); }
  }

  .ai-title {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--color-text);
    margin-bottom: 1rem;
  }

  .ai-subtitle {
    font-size: var(--font-size-lg);
    color: #5b21b6;
    opacity: 0.7;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  .ai-features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .ai-feature-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(124, 58, 237, 0.12);
    border-radius: var(--radius-xl);
    padding: 2rem;
    transition: all var(--transition-normal);
  }

  .ai-feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(124, 58, 237, 0.12);
    border-color: rgba(124, 58, 237, 0.25);
  }

  .ai-feature-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    color: white;
    margin-bottom: 1.25rem;
  }

  .ai-feature-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }

  .ai-feature-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.6;
  }

  .ai-cta-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 3rem;
  }

  .ai-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 2rem;
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    color: white;
    font-size: var(--font-size-base);
    font-weight: 700;
    border-radius: var(--radius-full);
    border: none;
    transition: all var(--transition-normal);
    box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
  }

  .ai-cta-btn:hover {
    background: linear-gradient(135deg, #9333ea, #6d28d9);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.4);
  }

  .ai-cta-sparkle {
    animation: sparkle-pulse 2s ease-in-out infinite;
  }

  .ai-cta-note {
    font-size: var(--font-size-sm);
    color: #7c3aed;
    opacity: 0.6;
    font-weight: 500;
  }

  .ai-demo-wrapper {
    display: flex;
    justify-content: center;
  }

  .ai-chat-demo {
    width: 100%;
    max-width: 480px;
    border-radius: var(--radius-xl);
    border: 1px solid rgba(124, 58, 237, 0.15);
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(124, 58, 237, 0.12), 0 0 0 1px rgba(124, 58, 237, 0.05);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
  }

  .ai-chat-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.25rem;
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    color: white;
    font-size: var(--font-size-sm);
    font-weight: 600;
  }

  .ai-chat-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #34d399;
    animation: pulse-green 2s infinite;
  }

  .ai-chat-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .ai-chat-msg {
    padding: 0.75rem 1rem;
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    line-height: 1.5;
  }

  .ai-chat-msg.user {
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  }

  .ai-chat-msg.bot {
    background: #faf5ff;
    color: var(--color-text);
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    border: 1px solid rgba(124, 58, 237, 0.1);
  }

  .ai-chat-result {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.75rem;
    padding: 0.75rem;
    background: var(--color-white);
    border-radius: var(--radius-sm);
    border: 1px solid rgba(124, 58, 237, 0.1);
  }

  .ai-chat-result svg {
    color: #7c3aed;
    flex-shrink: 0;
  }

  .ai-chat-result strong {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: 600;
  }

  .ai-chat-result small {
    font-size: 0.7rem;
    color: var(--color-text-light);
  }

  .ai-chat-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.75rem;
  }

  .ai-tag {
    padding: 0.15rem 0.6rem;
    font-size: 0.65rem;
    font-weight: 600;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(124, 58, 237, 0.1));
    color: #7c3aed;
    border-radius: var(--radius-full);
    border: 1px solid rgba(124, 58, 237, 0.15);
  }

  @keyframes pulse-green {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @media (max-width: 900px) {
    .ai-features-grid {
      grid-template-columns: 1fr;
      max-width: 480px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 768px) {
    .ai-section {
      padding: 3.5rem 0;
    }

    .ai-feature-card {
      padding: 1.5rem;
    }
  }
</style>
