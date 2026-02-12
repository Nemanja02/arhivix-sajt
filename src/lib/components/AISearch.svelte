<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  const examples = [
    'Pronađi mi račun za struju iz marta',
    'Pokaži mi otpremnicu za firmu Jović Transport',
    'Gde je faktura od dobavljača iz novembra?'
  ];
</script>

<section class="ai-section section">
  <div class="container">
    <div class="ai-layout">
      <div class="ai-content animate-on-scroll" use:scrollReveal>
        <span class="section-label">Veštačka inteligencija</span>
        <h2 class="section-title ai-title">Recite Arhivix-u šta tražite. On će naći za vas.</h2>
        <p class="ai-subtitle">
          Zaboravite na ručno pretraživanje fascikli i foldera. Naša veštačka inteligencija razume šta vam treba. Dovoljno je da opišete dokument svojim rečima.
        </p>
        <p class="ai-desc">
          Svaki dokument koji unesete u Arhivix se automatski indeksira. Sistem čita, analizira i razume sadržaj. Kada vam zatreba bilo koji dokument, jednostavno ukucajte:
        </p>

        <div class="ai-examples">
          {#each examples as example, i}
            <div class="ai-example animate-on-scroll" use:scrollReveal style="transition-delay: {i * 100}ms">
              <div class="ai-example-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <span>"{example}"</span>
            </div>
          {/each}
        </div>

        <p class="ai-conclusion">
          Koliko vremena vaš tim dnevno potroši tražeći dokumente? Sa Arhivix-om, to vreme je prošlost. Vratite fokus na ono što zaista pokreće vaš posao.
        </p>
      </div>

      <div class="ai-visual animate-on-scroll" use:scrollReveal style="transition-delay: 200ms">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .ai-section {
    padding: 5rem 0;
  }

  .ai-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .ai-title {
    text-align: left;
  }

  .ai-subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .ai-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .ai-examples {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .ai-example {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: var(--color-bg-card);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border-light);
    font-size: var(--font-size-sm);
    color: var(--color-text);
    font-style: italic;
  }

  .ai-example-icon {
    color: var(--color-primary);
    flex-shrink: 0;
  }

  .ai-conclusion {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.7;
    font-weight: 500;
  }

  .ai-visual {
    display: flex;
    justify-content: center;
  }

  .ai-chat-demo {
    width: 100%;
    max-width: 400px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border-light);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    background: var(--color-white);
  }

  .ai-chat-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: var(--color-bg-dark);
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
    background: var(--color-primary);
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  }

  .ai-chat-msg.bot {
    background: var(--color-bg-card);
    color: var(--color-text);
    align-self: flex-start;
    border-bottom-left-radius: 4px;
  }

  .ai-chat-result {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.75rem;
    padding: 0.75rem;
    background: var(--color-white);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border-light);
  }

  .ai-chat-result svg {
    color: var(--color-primary);
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

  @keyframes pulse-green {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @media (max-width: 900px) {
    .ai-layout {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .ai-title {
      text-align: center;
    }

    .ai-subtitle,
    .ai-desc,
    .ai-conclusion {
      text-align: center;
    }
  }
</style>
