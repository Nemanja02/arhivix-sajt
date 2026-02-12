<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  const cards = [
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
      title: 'Dupla zaštita na dva evropska servera',
      text: 'Vaši fajlovi se čuvaju na cloud sistemu koji koristi Amazon Web Services (AWS), svetski lider u infrastrukturi. Svaki dokument se automatski replicira na dva odvojena S3 skladišta u dva različita evropska regiona. Čak i da jedan server prestane sa radom, vaši dokumenti su i dalje tu, sigurni i dostupni.'
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>',
      title: 'Potpuna enkripcija, bez izuzetka',
      text: 'Svaki fajl koji otpremite se automatski enkriptuje. Bez vašeg naloga i posebnog ključa, niko ne može da ih vidi, pa ni mi. Vaši podaci nisu dostupni nikome osim vama i korisnicima kojima vi eksplicitno dozvolite pristup.'
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
      title: 'Vi kontrolišete ko šta vidi',
      text: 'Za svakog člana tima možete da podesite individualne dozvole: ko može da vidi, ko može da menja, ko može da preuzme. Sve je pod vašom kontrolom, za svaki dokument pojedinačno. Nema iznenađenja, nema nepotrebnog pristupa.'
    }
  ];
</script>

<section class="security-section section">
  <div class="container">
    <div class="security-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">Bezbednost na prvom mestu</span>
      <h2 class="section-title">Vaši dokumenti su zaštićeni kao u trezoru. Samo vi imate ključ.</h2>
      <p class="section-subtitle mx-auto">
        Znamo da vam poveravanje dokumenata trećem sistemu izaziva nelagodu. Zato smo sigurnost postavili kao temelj svega što radimo.
      </p>
    </div>

    <div class="security-grid">
      {#each cards as card, i}
        <div class="security-card animate-on-scroll" use:scrollReveal style="transition-delay: {i * 100}ms">
          <div class="security-icon">{@html card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .security-section {
    padding: 5rem 0;
    background: var(--color-bg-card);
  }

  .security-header {
    margin-bottom: 3rem;
  }

  .security-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .security-card {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    padding: 2rem;
    border: 1px solid var(--color-border-light);
    transition: all var(--transition-normal);
  }

  .security-card:hover {
    border-color: var(--color-border);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  .security-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background: rgba(37, 99, 235, 0.08);
    color: var(--color-primary);
    margin-bottom: 1.25rem;
  }

  .security-card h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--color-text);
  }

  .security-card p {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    .security-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>
