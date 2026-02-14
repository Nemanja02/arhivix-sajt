<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import { htmlLang } from '$lib/i18n';

  export let data;

  const localeStore = writable(data.locale);
  setContext('locale', localeStore);

  $: localeStore.set(data.locale);

  // Update document lang attribute on client-side navigation
  $: if (typeof document !== 'undefined') {
    document.documentElement.lang = htmlLang(data.locale);
  }
</script>

{#key data.locale}
  <div in:fade={{ duration: 250 }}>
    <slot />
  </div>
{/key}
