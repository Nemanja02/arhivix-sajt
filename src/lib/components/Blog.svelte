<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  const posts = [
    {
      title: 'Elektronske otpremnice u Srbiji: šta znači novi zakon i kako utiče na firme od 2026. godine',
      excerpt: 'Jasno objašnjeno šta su elektronske otpremnice, koje su nove obaveze od 2026, ko ih mora slati i šta to znači za firme, prevoznike i građane.',
      image: '/images/blog/elektronske-otpremnice.jpg',
      link: '/blog/elektronske-otpremnice'
    },
    {
      title: 'Unos Dokumentacije u Arhivsku Knjigu',
      excerpt: 'Arhivska knjiga predstavlja ključni dokument za praćenje i arhiviranje poslovne dokumentacije.',
      image: '/images/blog/arhivska-knjiga.jpg',
      link: '/blog/arhivska-knjiga'
    },
    {
      title: 'Elektronsko Arhiviranje',
      excerpt: 'Elektronsko arhiviranje dokumenata postaje sve važnije za poslovanje, posebno zbog novih zakonskih obaveza.',
      image: '/images/blog/elektronsko-arhiviranje.jpg',
      link: '/blog/elektronsko-arhiviranje'
    }
  ];
</script>

<section class="blog-section section">
  <div class="container">
    <div class="blog-header text-center animate-on-scroll" use:scrollReveal>
      <span class="section-label">Novosti</span>
      <h2 class="section-title">Naši najnoviji članci i saveti</h2>
    </div>

    <div class="blog-grid">
      {#each posts as post, i}
        <a
          href={post.link}
          class="blog-card animate-on-scroll"
          use:scrollReveal
          style="transition-delay: {i * 100}ms"
        >
          <div class="blog-card-img">
            <img src={post.image} alt={post.title} loading="lazy" />
          </div>
          <div class="blog-card-body">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span class="blog-read-more">
              Pročitaj više
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .blog-header {
    margin-bottom: 3rem;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .blog-card {
    background: var(--color-bg-card);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-normal);
    border: 1px solid transparent;
  }

  .blog-card:hover {
    border-color: var(--color-border);
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .blog-card-img {
    overflow: hidden;
    aspect-ratio: 16/9;
  }

  .blog-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .blog-card:hover .blog-card-img img {
    transform: scale(1.05);
  }

  .blog-card-body {
    padding: 1.25rem;
  }

  .blog-card-body h3 {
    font-size: var(--font-size-base);
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .blog-card-body p {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .blog-read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-primary);
    transition: gap var(--transition-normal);
  }

  .blog-card:hover .blog-read-more {
    gap: 0.6rem;
  }

  @media (max-width: 900px) {
    .blog-grid {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }
</style>
