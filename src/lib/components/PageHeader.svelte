<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import Breadcrumbs from './Breadcrumbs.svelte';

  export let label = '';
  export let title = '';
  export let subtitle = '';
  export let breadcrumbs = [];
  export let centered = true;
</script>

<section class="page-header section">
  <div class="container">
    {#if breadcrumbs.length > 0}
      <div class="page-header-breadcrumbs" class:text-center={centered}>
        <Breadcrumbs items={breadcrumbs} />
      </div>
    {/if}

    <div
      class="page-header-content animate-on-scroll"
      class:text-center={centered}
      use:scrollReveal
    >
      {#if label}
        <span class="section-label">{label}</span>
      {/if}
      <h1 class="section-title">{title}</h1>
      {#if subtitle}
        <p class="section-subtitle" class:mx-auto={centered}>{subtitle}</p>
      {/if}
    </div>
  </div>
</section>

<style>
  .page-header {
    padding-top: 8rem;
    padding-bottom: 3rem;
  }

  .page-header-breadcrumbs {
    margin-bottom: 1.5rem;
  }

  .page-header-breadcrumbs.text-center :global(.breadcrumbs) {
    justify-content: center;
  }

  .page-header-content h1 {
    margin-bottom: 1rem;
  }
</style>
