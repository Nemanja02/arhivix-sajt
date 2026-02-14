import { SITE_URL } from '$lib/config.js';
import { getAllSlugs as getBlogSlugs } from '$lib/data/blogPosts/index.js';
import { getAllSlugs as getLegalSlugs } from '$lib/data/legalPages/index.js';
import { locales, localePath } from '$lib/i18n';

export const prerender = true;

export function GET() {
  const staticPages = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/blog', changefreq: 'weekly', priority: '0.8' },
    { path: '/register', changefreq: 'monthly', priority: '0.7' },
    { path: '/legal', changefreq: 'monthly', priority: '0.3' }
  ];

  const blogSlugs = getBlogSlugs();
  const legalSlugs = getLegalSlugs();

  const blogPages = blogSlugs.map(slug => ({
    path: `/blog/${slug}`,
    changefreq: 'monthly',
    priority: '0.7'
  }));

  const legalPagesList = legalSlugs.map(slug => ({
    path: `/legal/${slug}`,
    changefreq: 'yearly',
    priority: '0.3'
  }));

  const allPages = [...staticPages, ...blogPages, ...legalPagesList];

  const urls = allPages.flatMap(p => {
    return locales.map(loc => {
      const href = `${SITE_URL}${localePath(loc, p.path)}`;
      const alternates = locales.map(altLoc => {
        const altHref = `${SITE_URL}${localePath(altLoc, p.path)}`;
        const hreflang = altLoc === 'sr' ? 'sr' : altLoc;
        return `      <xhtml:link rel="alternate" hreflang="${hreflang}" href="${altHref}"/>`;
      }).join('\n');
      const xDefault = `      <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${p.path}"/>`;

      return `  <url>
    <loc>${href}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
${alternates}
${xDefault}
  </url>`;
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
}
