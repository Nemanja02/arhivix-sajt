<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { slide } from 'svelte/transition';

  let openIndex = 0;

  const faqs = [
    {
      q: 'Gde se čuvaju moji dokumenti?',
      a: 'Vaši dokumenti se čuvaju na Amazon Web Services (AWS) cloud infrastrukturi. Konkretno, koristimo dva odvojena S3 skladišta u dva različita evropska regiona. To znači da čak i u slučaju tehničkih problema u jednom regionu, vaši dokumenti su i dalje bezbedni i dostupni u drugom. Sve je automatski enkriptovano.'
    },
    {
      q: 'Da li neko može da pristupi mojim fajlovima bez mog znanja?',
      a: 'Ne. Svi fajlovi su enkriptovani i ne mogu se otvoriti bez posebnog ključa koji je vezan za vaš nalog. Čak ni naš tim nema pristup vašim dokumentima. Za svakog korisnika u vašoj firmi možete podesiti individualne dozvole: ko može da vidi, menja ili preuzima svaki dokument.'
    },
    {
      q: 'Šta je veštačka inteligencija u Arhivix-u?',
      a: 'Arhivix automatski indeksira svaki dokument koji unesete. Naš AI sistem čita i razume sadržaj dokumenata, pa ih možete pretraživati prirodnim jezikom. Na primer, možete ukucati "Pronađi mi račun za telefon iz aprila" i sistem će pronaći tačan dokument. Bez ručnog pretraživanja, bez gubljenja vremena.'
    },
    {
      q: 'Da li je sistem usklađen sa novim zakonom o elektronskim otpremnicama?',
      a: 'Da, u potpunosti. Od 1. januara 2026. elektronske otpremnice su zakonska obaveza. Arhivix podržava kreiranje, slanje, prijem i arhiviranje elektronskih otpremnica i prijemnica u skladu sa svim propisima.'
    },
    {
      q: 'Šta ako nisam tehnički osoba? Da li je komplikovano za korišćenje?',
      a: 'Uopšte ne. Arhivix je dizajniran da bude jednostavan za svakoga. Dokument se arhivira u tri koraka, pretraga funkcioniše kao razgovor sa asistentom, a ceo sistem je intuitivan. Ako vam ipak zatreba pomoć, tu smo 24/7.'
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
