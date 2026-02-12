<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { slide } from 'svelte/transition';

  let openIndex = 0;

  const faqs = [
    {
      q: 'Da li su moji dokumenti bezbedni?',
      a: 'Da. Svi dokumenti su enkriptovani, čuvaju se na sigurnom cloudu i repliciraju na dve odvojene lokacije. Kontrola pristupa obezbeđuje da samo ovlašćeni korisnici mogu da ih vide.'
    },
    {
      q: 'Kako da počnem?',
      a: 'Registrujte se za besplatan 14-dnevni probni period. Nakon registracije, možete odmah početi sa unošenjem dokumenata i korišćenjem svih funkcija sistema.'
    },
    {
      q: 'Da li je sistem usklađen sa zakonskim obavezama?',
      a: 'Da. Arhivix je u potpunosti usklađen sa zakonom o elektronskom dokumentu, elektronskoj identifikaciji i uslugama od poverenja u elektronskom poslovanju, kao i sa drugim relevantnim propisima.'
    },
    {
      q: 'Da li mi je potreban internet za korišćenje?',
      a: 'Da, potrebna vam je internet konekcija za pristup sistemu. Svi podaci se čuvaju na cloudu kako bi bili dostupni sa bilo kog uređaja, u bilo kom trenutku.'
    }
  ];

  function toggle(i) {
    openIndex = openIndex === i ? -1 : i;
  }
</script>

<section class="faq-section section" id="pitanja">
  <div class="container">
    <div class="faq-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">FAQ</span>
      <h2 class="section-title">Često postavljena pitanja</h2>
      <p class="section-subtitle mx-auto">Pronađite odgovore na najčešća pitanja</p>
    </div>

    <div class="faq-list">
      {#each faqs as faq, i}
        <div class="faq-item animate-on-scroll" use:scrollReveal style="transition-delay: {i * 80}ms">
          <button class="faq-trigger" class:open={openIndex === i} on:click={() => toggle(i)}>
            <span class="faq-question">{faq.q}</span>
            <div class="faq-icon" class:open={openIndex === i}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 8L10 13L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          {#if openIndex === i}
            <div class="faq-answer" transition:slide={{ duration: 300 }}>
              <p>{faq.a}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq-header {
    margin-bottom: 3rem;
  }

  .faq-list {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .faq-item {
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: all var(--transition-normal);
  }

  .faq-item:hover {
    border-color: var(--color-border);
  }

  .faq-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text);
    transition: background var(--transition-fast);
  }

  .faq-trigger:hover {
    background: var(--color-bg-card);
  }

  .faq-trigger.open {
    background: var(--color-bg-card);
  }

  .faq-icon {
    flex-shrink: 0;
    color: var(--color-text-muted);
    transition: transform var(--transition-normal);
  }

  .faq-icon.open {
    transform: rotate(180deg);
  }

  .faq-answer {
    padding: 0 1.5rem 1.25rem;
  }

  .faq-answer p {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.7;
  }
</style>
