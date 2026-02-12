<script>
  import Hero from '$lib/components/Hero.svelte';
  import FeatureTabs from '$lib/components/FeatureTabs.svelte';
  import Stats from '$lib/components/Stats.svelte';
  import BentoFeatures from '$lib/components/BentoFeatures.svelte';
  import FeatureCards from '$lib/components/FeatureCards.svelte';
  import Reviews from '$lib/components/Reviews.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
  import HowItWorks from '$lib/components/HowItWorks.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Blog from '$lib/components/Blog.svelte';
  import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
  <title>Arhivix | Vaša dokumentacija na dohvat ruke</title>
  <meta name="description" content="Organizujte svu dokumentaciju na jednom mestu. Pametniji način da organizujete svoju dokumentaciju i ostanete u skladu sa zakonom." />
</svelte:head>

<Hero />
<FeatureTabs />
<Stats />
<BentoFeatures />
<FeatureCards />
<Reviews />
<Pricing />
<HowItWorks />
<FAQ />
<Blog />
<CTA />
