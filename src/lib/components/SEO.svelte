<script>
  export let title = 'Arhivix | Vaša dokumentacija na dohvat ruke';
  export let description = '';
  export let image = '';
  export let url = '';
  export let type = 'website';
  export let publishedDate = '';
</script>

<svelte:head>
  <title>{title}</title>
  {#if description}<meta name="description" content={description} />{/if}
  <meta property="og:title" content={title} />
  {#if description}<meta property="og:description" content={description} />{/if}
  <meta property="og:type" content={type} />
  {#if image}<meta property="og:image" content={image} />{/if}
  {#if url}
    <meta property="og:url" content={url} />
    <link rel="canonical" href={url} />
  {/if}
  {#if publishedDate}<meta property="article:published_time" content={publishedDate} />{/if}
</svelte:head>
