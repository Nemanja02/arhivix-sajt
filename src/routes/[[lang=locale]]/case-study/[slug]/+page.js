import { error } from '@sveltejs/kit';
import { getLocaleFromParam } from '$lib/i18n';

const caseStudies = {
  sr: {
    'how-salix-helped-boost-deal-closures-by-40-in-just-3-months': {
      title: 'Kako je Salix povećao zaključivanje poslova za 40% za samo 3 meseca',
      company: 'Salix',
      metric: '40%',
      metricLabel: 'Povećanje zaključenih poslova',
      duration: '3 meseca',
      durationLabel: 'Vreme implementacije',
      companyLabel: 'Kompanija',
      description: 'Studija slučaja: Kako je implementacija Arhivix platforme pomogla kompaniji Salix da značajno poboljša poslovne rezultate.',
      image: '/images/blog/arhivska-knjiga.jpg',
      cta_title: 'Želite slične rezultate?',
      cta_text: 'Započnite besplatni probni period i uverite se sami.',
      cta_button: 'Isprobajte besplatno 14 dana',
      content: `
        <h2>Izazov</h2>
        <p>Sadržaj iz Framer editora...</p>

        <h2>Rešenje</h2>
        <p>Sadržaj iz Framer editora...</p>

        <h2>Rezultati</h2>
        <p>Sadržaj iz Framer editora...</p>

        <h2>Zaključak</h2>
        <p>Sadržaj iz Framer editora...</p>
      `
    }
  },
  en: {
    'how-salix-helped-boost-deal-closures-by-40-in-just-3-months': {
      title: 'How Salix Boosted Deal Closures by 40% in Just 3 Months',
      company: 'Salix',
      metric: '40%',
      metricLabel: 'Increase in closed deals',
      duration: '3 months',
      durationLabel: 'Implementation time',
      companyLabel: 'Company',
      description: 'Case study: How implementing the Arhivix platform helped Salix significantly improve business results.',
      image: '/images/blog/arhivska-knjiga.jpg',
      cta_title: 'Want similar results?',
      cta_text: 'Start your free trial and see for yourself.',
      cta_button: 'Try free for 14 days',
      content: `
        <h2>Challenge</h2>
        <p>Content from Framer editor...</p>

        <h2>Solution</h2>
        <p>Content from Framer editor...</p>

        <h2>Results</h2>
        <p>Content from Framer editor...</p>

        <h2>Conclusion</h2>
        <p>Content from Framer editor...</p>
      `
    }
  },
  de: {
    'how-salix-helped-boost-deal-closures-by-40-in-just-3-months': {
      title: 'Wie Salix die Abschlussquote in nur 3 Monaten um 40% steigerte',
      company: 'Salix',
      metric: '40%',
      metricLabel: 'Steigerung der Abschlüsse',
      duration: '3 Monate',
      durationLabel: 'Implementierungszeit',
      companyLabel: 'Unternehmen',
      description: 'Fallstudie: Wie die Implementierung der Arhivix-Plattform dem Unternehmen Salix half, die Geschäftsergebnisse deutlich zu verbessern.',
      image: '/images/blog/arhivska-knjiga.jpg',
      cta_title: 'Möchten Sie ähnliche Ergebnisse?',
      cta_text: 'Starten Sie Ihre kostenlose Testphase und überzeugen Sie sich selbst.',
      cta_button: '14 Tage kostenlos testen',
      content: `
        <h2>Herausforderung</h2>
        <p>Inhalt aus dem Framer-Editor...</p>

        <h2>Lösung</h2>
        <p>Inhalt aus dem Framer-Editor...</p>

        <h2>Ergebnisse</h2>
        <p>Inhalt aus dem Framer-Editor...</p>

        <h2>Fazit</h2>
        <p>Inhalt aus dem Framer-Editor...</p>
      `
    }
  }
};

const allSlugs = Object.keys(caseStudies.sr);

export function entries() {
  const result = [];
  for (const slug of allSlugs) {
    result.push({ slug });
    result.push({ lang: 'en', slug });
    result.push({ lang: 'de', slug });
  }
  return result;
}

export function load({ params }) {
  const locale = getLocaleFromParam(params.lang);
  const studies = caseStudies[locale] || caseStudies.sr;
  const study = studies[params.slug];

  if (!study) {
    throw error(404, 'Page not found');
  }

  return { study };
}
