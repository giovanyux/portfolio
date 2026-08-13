export const BASE = '/portfolio';

export const AUTHOR = {
  name: 'Cicero Giovany Junior',
  short: 'Giovany Jr',
  initials: 'GJ',
  role: 'Lead Product Designer',
  location: 'Fortaleza, Brasil',
  email: 'cicerogiovany@gmail.com',
  bio: [
    'Lead product designer com 9 anos construindo produtos digitais na interseção entre método, pensamento sistêmico e IA.',
    '9 anos em SaaS B2B e B2C. Do Figma ao componente em produção, com IA no fluxo. Aberto a posições sênior/lead, remoto.',
  ],
};

export const SOCIAL = {
  email: 'mailto:cicerogiovany@gmail.com',
  linkedin: 'https://linkedin.com/in/giovany-jr-617223aa',
  github: 'https://github.com/giovanyux',
};

export const CREDENTIALS = [
  'CARDÁPIO WEB',
  'GUPY',
  'SUPERLOGICA',
  'CLIQX',
  'AGENDA EDU',
  'INTMED',
];

export const NAV_LINKS = [
  { href: `${BASE}/cases`, label: 'CASES' },
  { href: `${BASE}/sobre`, label: 'SOBRE' },
  { href: `${BASE}/contato`, label: 'CONTATO' },
];

// Case fora da content collection: página estática auto-contida em
// public/cases/case-dionisio (design system próprio, não usa CaseLayout).
// Entrada manual só pra ela aparecer nas listagens — a URL já resolve
// certo porque o slug bate com o nome da pasta em public/.
export const EXTRA_CASES = [
  {
    slug: 'case-dionisio',
    data: {
      title: 'Dionísio: operação de mesa que funciona sem internet',
      description:
        'App do garçom e admin do gerente pra bistrôs de mesa sentada — discovery completo, telas em alta fidelidade e design system.',
      tags: ['food-tech', 'design system'],
      cover: '/cases/case-dionisio/cover.png',
      thumbnail: undefined as string | undefined,
      coverVideo: undefined as string | undefined,
      metric: 'Piloto: 22 mesas · 6 garçons/turno',
      comingSoon: false,
      date: new Date('2026-08-09'),
    },
  },
];

export const SITE = {
  title: 'Giovany Jr — Lead Product Designer | SaaS B2B e código com IA',
  description:
    'Lead product designer com 9 anos em SaaS B2B e B2C. Do Figma ao componente em produção, com IA no fluxo.',
  url: 'https://giovanyux.github.io/portfolio',
  ogImage: `${BASE}/og-image.png`,
};
