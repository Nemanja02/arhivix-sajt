<script>
  import { getContext } from 'svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { SITE_URL } from '$lib/config.js';
  import { t } from '$lib/i18n';
  import Hero from '$lib/components/Hero.svelte';
  import TrustBadges from '$lib/components/TrustBadges.svelte';
  import SecuritySection from '$lib/components/SecuritySection.svelte';
  import AISearch from '$lib/components/AISearch.svelte';
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

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Arhivix',
      url: SITE_URL,
      logo: `${SITE_URL}/images/misc/logo.png`,
      description: t(locale, 'seo.home_desc'),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Beograd',
        addressCountry: 'RS'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Arhivix',
      url: SITE_URL
    }
  ];
</script>

<SEO
  title={t(locale, 'seo.home_title')}
  description={t(locale, 'seo.home_desc')}
  image="/images/misc/hero-dashboard.png"
  {jsonLd}
  {locale}
/>

<Hero />
<TrustBadges />
<SecuritySection />
<AISearch />
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
