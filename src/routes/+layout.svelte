<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { getLocaleFromParam } from '$lib/i18n';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  $: locale = getLocaleFromParam($page.params.lang);
</script>

<Navbar {locale} />
<main>
  <slot />
</main>
<Footer {locale} />

<style>
  main {
    overflow-x: hidden;
  }
</style>
