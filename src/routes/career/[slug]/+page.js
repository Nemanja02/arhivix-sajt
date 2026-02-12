import { error } from '@sveltejs/kit';

const careerPages = {
  'senior-ui-ux-designer': {
    title: 'Senior UI/UX Designer',
    location: 'Beograd, Srbija',
    type: 'Puno radno vreme',
    department: 'Dizajn',
    description: 'Tražimo iskusnog UI/UX dizajnera koji će voditi dizajn naše platforme za elektronsko arhiviranje.',
    content: `
      <h2>O poziciji</h2>
      <p><!-- PLACEHOLDER: Paste content from Framer editor here --></p>
      <p>Sadržaj iz Framer editora...</p>

      <h2>Odgovornosti</h2>
      <ul>
        <li>Sadržaj iz Framer editora...</li>
      </ul>

      <h2>Zahtevi</h2>
      <ul>
        <li>Sadržaj iz Framer editora...</li>
      </ul>

      <h2>Šta nudimo</h2>
      <ul>
        <li>Sadržaj iz Framer editora...</li>
      </ul>
    `
  }
};

export function entries() {
  return Object.keys(careerPages).map((slug) => ({ slug }));
}

export function load({ params }) {
  const career = careerPages[params.slug];

  if (!career) {
    throw error(404, 'Pozicija nije pronađena');
  }

  return { career };
}
