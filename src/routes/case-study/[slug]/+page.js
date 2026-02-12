import { error } from '@sveltejs/kit';

const caseStudies = {
  'how-salix-helped-boost-deal-closures-by-40-in-just-3-months': {
    title: 'Kako je Salix povećao zaključivanje poslova za 40% za samo 3 meseca',
    company: 'Salix',
    metric: '40%',
    metricLabel: 'Povećanje zaključenih poslova',
    duration: '3 meseca',
    description: 'Studija slučaja: Kako je implementacija Arhivix platforme pomogla kompaniji Salix da značajno poboljša poslovne rezultate.',
    image: '/images/blog/arhivska-knjiga.jpg',
    content: `
      <h2>Izazov</h2>
      <p><!-- PLACEHOLDER: Paste content from Framer editor here --></p>
      <p>Sadržaj iz Framer editora...</p>

      <h2>Rešenje</h2>
      <p>Sadržaj iz Framer editora...</p>

      <h2>Rezultati</h2>
      <p>Sadržaj iz Framer editora...</p>

      <h2>Zaključak</h2>
      <p>Sadržaj iz Framer editora...</p>
    `
  }
};

export function entries() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function load({ params }) {
  const study = caseStudies[params.slug];

  if (!study) {
    throw error(404, 'Studija slučaja nije pronađena');
  }

  return { study };
}
