# Arhivix — SvelteKit Conversion

A SvelteKit recreation of the [arhivix.com](https://arhivix.com/) Framer website.

## Project Structure

```
src/
├── app.css                          # Global styles, CSS variables, animations
├── app.html                         # HTML template
├── routes/
│   ├── +layout.svelte               # Root layout
│   └── +page.svelte                 # Main homepage
└── lib/
    ├── actions/
    │   └── scrollReveal.js          # Intersection Observer action for scroll animations
    └── components/
        ├── Navbar.svelte            # Sticky navbar with mobile drawer
        ├── Hero.svelte              # Hero with badge, heading, CTA, dashboard image
        ├── FeatureTabs.svelte       # Tabbed features (Organizacija, Digitalno, Sigurnost)
        ├── Stats.svelte             # Animated stats counters
        ├── BentoFeatures.svelte     # 6-card bento grid for 2026 features
        ├── FeatureCards.svelte      # Image cards + testimonial block
        ├── Reviews.svelte           # Infinite marquee testimonial rows
        ├── Pricing.svelte           # Monthly/Yearly toggle + 3 pricing tiers
        ├── HowItWorks.svelte        # 3-step process with image switching
        ├── FAQ.svelte               # Accordion FAQ
        ├── Blog.svelte              # Blog article cards
        ├── CTA.svelte               # Final CTA with dark bg + floating illustration
        └── Footer.svelte            # Footer with links
```

## Features & Animations Captured

- **Scroll-reveal animations** — Elements fade up on scroll via Intersection Observer
- **Sticky navbar** — Transparent → blurred glass on scroll
- **Mobile drawer** — Slide-in menu with overlay
- **Tab switching** — Smooth opacity/scale transitions between feature tabs
- **Marquee testimonials** — 3 rows of infinite-scrolling review cards (pause on hover)
- **Pricing toggle** — Monthly/Yearly switch with sliding indicator & 15% discount
- **Step selector** — Interactive 3-step process with image crossfade
- **FAQ accordion** — Svelte `slide` transition for open/close
- **Hover effects** — Card lift, image zoom, arrow reveal, link underlines
- **Floating elements** — Subtle CSS float animation on icons and illustrations
- **Gradient backgrounds** — Radial gradients, grid patterns, glow effects
- **Responsive design** — Mobile-first breakpoints at 480px, 768px, 900px

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization Notes

- **Images**: Currently using Framer CDN URLs. Replace with your own hosted images.
- **Fonts**: Using Plus Jakarta Sans from Google Fonts. Change in `app.html` and `app.css`.
- **Colors**: All defined as CSS variables in `app.css` — easy to rebrand.
- **Links**: Internal links point to `/register`, `/blog/*`, `/legal/*` — create these routes as needed.
- **Content**: All text is in Serbian (sr). Modify directly in components.

## Tech Stack

- **SvelteKit** (Svelte 5)
- **Pure CSS** (no Tailwind — all custom)
- **No external JS dependencies** for animations (CSS + Svelte transitions)
