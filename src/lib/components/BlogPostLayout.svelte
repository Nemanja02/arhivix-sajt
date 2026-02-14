<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { SITE_URL } from '$lib/config.js';
  import { t, localePath, dateLocale } from '$lib/i18n';
  import SEO from './SEO.svelte';
  import Breadcrumbs from './Breadcrumbs.svelte';
  import { getRelatedPosts } from '$lib/data/blogPosts/index.js';

  export let post;

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  $: related = getRelatedPosts(locale, post.slug, 3);

  $: blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Arhivix'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Arhivix',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/misc/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${localePath(locale, `/blog/${post.slug}`)}`
    }
  };

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString(dateLocale(locale), {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
</script>

<SEO
  title="Arhivix | {post.title}"
  description={post.excerpt}
  image={post.image}
  type="article"
  publishedDate={post.date}
  jsonLd={blogPostingJsonLd}
  {locale}
/>

<article class="blog-post">
  <div class="container">
    <div class="blog-post-breadcrumbs">
      <Breadcrumbs items={[
        { label: t(locale, 'breadcrumbs.home'), href: localePath(locale, '/') },
        { label: t(locale, 'breadcrumbs.blog'), href: localePath(locale, '/blog') },
        { label: post.title }
      ]} />
    </div>

    <header class="blog-post-header animate-on-scroll" use:scrollReveal>
      <h1 class="blog-post-title">{post.title}</h1>
      <div class="blog-post-meta">
        <span class="blog-post-date">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333zM10.667 1.333V4M5.333 1.333V4M2 6.667h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {formatDate(post.date)}
        </span>
        <span class="blog-post-author">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.333 14v-1.333A2.667 2.667 0 0010.667 10H5.333a2.667 2.667 0 00-2.666 2.667V14M8 7.333A2.667 2.667 0 108 2a2.667 2.667 0 000 5.333z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {post.author}
        </span>
        <span class="blog-post-reading">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.667" stroke="currentColor" stroke-width="1.2"/>
            <path d="M8 4v4l2.667 1.333" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {post.readingTime}
        </span>
      </div>
    </header>

    {#if post.image}
      <div class="blog-post-hero animate-on-scroll" use:scrollReveal>
        <img src={post.image} alt={post.title} width="900" height="506" />
      </div>
    {/if}

    <div class="blog-post-body prose animate-on-scroll" use:scrollReveal>
      {@html post.content}
    </div>
  </div>

  {#if related.length > 0}
    <section class="related-posts section">
      <div class="container">
        <div class="related-header text-center animate-on-scroll" use:scrollReveal>
          <span class="section-label">{t(locale, 'blog.related')}</span>
          <h2 class="section-title">{t(locale, 'blog.related_title')}</h2>
        </div>
        <div class="related-grid">
          {#each related as relPost, i}
            <a
              href={localePath(locale, `/blog/${relPost.slug}`)}
              class="related-card animate-on-scroll"
              use:scrollReveal
              style="transition-delay: {i * 100}ms"
            >
              <div class="related-card-img">
                <img src={relPost.image} alt={relPost.title} loading="lazy" />
              </div>
              <div class="related-card-body">
                <h3>{relPost.title}</h3>
                <p>{relPost.excerpt}</p>
                <span class="related-read-more">
                  {t(locale, 'blog.read_more')}
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
  {/if}
</article>

<style>
  .blog-post {
    padding-top: 8rem;
  }

  .blog-post-breadcrumbs {
    margin-bottom: 2rem;
  }

  .blog-post-header {
    max-width: 720px;
    margin: 0 auto 2rem;
  }

  .blog-post-title {
    font-size: var(--font-size-4xl);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 1.25rem;
  }

  .blog-post-meta {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .blog-post-meta span {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
  }

  .blog-post-hero {
    max-width: 900px;
    margin: 0 auto 3rem;
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .blog-post-hero img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  .blog-post-body {
    max-width: 720px;
    margin: 0 auto;
    padding-bottom: 3rem;
  }

  /* Related posts */
  .related-header {
    margin-bottom: 2.5rem;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .related-card {
    background: var(--color-bg-card);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-normal);
    border: 1px solid transparent;
  }

  .related-card:hover {
    border-color: var(--color-border);
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .related-card-img {
    overflow: hidden;
    aspect-ratio: 16/9;
  }

  .related-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .related-card:hover .related-card-img img {
    transform: scale(1.05);
  }

  .related-card-body {
    padding: 1.25rem;
  }

  .related-card-body h3 {
    font-size: var(--font-size-base);
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .related-card-body p {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .related-read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-primary);
    transition: gap var(--transition-normal);
  }

  .related-card:hover .related-read-more {
    gap: 0.6rem;
  }

  @media (max-width: 900px) {
    .related-grid {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .blog-post-title {
      font-size: var(--font-size-3xl);
    }

    .blog-post-meta {
      gap: 1rem;
    }
  }
</style>
