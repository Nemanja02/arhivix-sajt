<script>
  import { getContext } from 'svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { t } from '$lib/i18n';

  const localeStore = getContext('locale');
  $: locale = $localeStore;

  $: badges = [
    { img: '/images/badges/shield-lock.svg', label: t(locale, 'trust.encryption') },
    { img: '/images/badges/uptime.svg', label: t(locale, 'trust.uptime') },
    { img: '/images/badges/aws-logo.svg', label: t(locale, 'trust.aws'), wide: true },
    { img: '/images/badges/eu-flag.svg', label: t(locale, 'trust.eu') },
    { img: '/images/badges/compliance.svg', label: t(locale, 'trust.compliance') }
  ];
</script>

<div class="trust-strip animate-on-scroll" use:scrollReveal>
  <div class="container">
    <div class="trust-badges">
      {#each badges as badge, i}
        <div class="trust-badge" style="transition-delay: {i * 60}ms">
          <img
            src={badge.img}
            alt={badge.label}
            class="trust-icon"
            class:trust-icon-wide={badge.wide}
            width="24"
            height="24"
            loading="lazy"
          />
          <span class="trust-label">{badge.label}</span>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .trust-strip {
    padding: 2rem 0 1rem;
  }

  .trust-badges {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .trust-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-full);
    transition: all var(--transition-normal);
  }

  .trust-badge:hover {
    border-color: var(--color-border);
    box-shadow: var(--shadow-sm);
    transform: translateY(-1px);
  }

  .trust-icon {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  .trust-icon-wide {
    width: 36px;
    height: 22px;
  }

  .trust-label {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text);
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    .trust-badges {
      gap: 0.5rem;
    }

    .trust-badge {
      padding: 0.4rem 0.75rem;
    }

    .trust-icon {
      width: 18px;
      height: 18px;
    }

    .trust-icon-wide {
      width: 32px;
      height: 20px;
    }

    .trust-label {
      font-size: var(--font-size-xs);
    }
  }
</style>
