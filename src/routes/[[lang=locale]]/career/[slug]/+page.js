import { error } from '@sveltejs/kit';
import { getLocaleFromParam } from '$lib/i18n';

const careerPages = {
  sr: {
    'senior-ui-ux-designer': {
      title: 'Senior UI/UX Designer',
      location: 'Beograd, Srbija',
      type: 'Puno radno vreme',
      department: 'Dizajn',
      description: 'Tražimo iskusnog UI/UX dizajnera koji će voditi dizajn naše platforme za elektronsko arhiviranje.',
      cta_title: 'Zainteresovani ste?',
      cta_text: 'Pošaljite nam vaš CV i portfolio na email adresu ispod.',
      cta_button: 'Prijavite se',
      content: `
        <h2>O poziciji</h2>
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
  },
  en: {
    'senior-ui-ux-designer': {
      title: 'Senior UI/UX Designer',
      location: 'Belgrade, Serbia',
      type: 'Full-time',
      department: 'Design',
      description: 'We are looking for an experienced UI/UX designer to lead the design of our electronic archiving platform.',
      cta_title: 'Interested?',
      cta_text: 'Send us your CV and portfolio to the email address below.',
      cta_button: 'Apply now',
      content: `
        <h2>About the position</h2>
        <p>Content from Framer editor...</p>

        <h2>Responsibilities</h2>
        <ul>
          <li>Content from Framer editor...</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>Content from Framer editor...</li>
        </ul>

        <h2>What we offer</h2>
        <ul>
          <li>Content from Framer editor...</li>
        </ul>
      `
    }
  },
  de: {
    'senior-ui-ux-designer': {
      title: 'Senior UI/UX Designer',
      location: 'Belgrad, Serbien',
      type: 'Vollzeit',
      department: 'Design',
      description: 'Wir suchen einen erfahrenen UI/UX-Designer, der das Design unserer Plattform für elektronische Archivierung leitet.',
      cta_title: 'Interessiert?',
      cta_text: 'Senden Sie uns Ihren Lebenslauf und Ihr Portfolio an die unten stehende E-Mail-Adresse.',
      cta_button: 'Jetzt bewerben',
      content: `
        <h2>Über die Position</h2>
        <p>Inhalt aus dem Framer-Editor...</p>

        <h2>Verantwortlichkeiten</h2>
        <ul>
          <li>Inhalt aus dem Framer-Editor...</li>
        </ul>

        <h2>Anforderungen</h2>
        <ul>
          <li>Inhalt aus dem Framer-Editor...</li>
        </ul>

        <h2>Was wir bieten</h2>
        <ul>
          <li>Inhalt aus dem Framer-Editor...</li>
        </ul>
      `
    }
  }
};

const allSlugs = Object.keys(careerPages.sr);

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
  const pages = careerPages[locale] || careerPages.sr;
  const career = pages[params.slug];

  if (!career) {
    throw error(404, 'Page not found');
  }

  return { career };
}
