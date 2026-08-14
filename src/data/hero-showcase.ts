// Vitrine curada do hero da home — lista manual: edite este array pra trocar
// o que aparece. Cada entrada é um "cenário" de um case já publicado (nunca
// draft/comingSoon): desktop + mobile juntos (composição em profundidade,
// preferida) quando o case tem as duas, ou só mobile quando não tem desktop
// (ex.: PJBank, 100% app). Nunca telas soltas dentro de uma moldura neutra —
// cada uma entra no frame do seu próprio device.
export interface HeroShowcaseMedia {
  src: string;
  alt: string;
}

export interface HeroShowcaseEntry {
  caseSlug: string;
  caseTitle: string;
  desktop?: HeroShowcaseMedia;
  mobile?: HeroShowcaseMedia;
}

export const HERO_SHOWCASE: HeroShowcaseEntry[] = [
  {
    caseSlug: 'case-dionisio',
    caseTitle: 'Dionísio',
    desktop: {
      src: '/cases/case-dionisio/admin-02-visao-geral-do-salao-dark.webp',
      alt: 'Admin do gerente do case Dionísio: visão geral do salão',
    },
    mobile: {
      src: '/cases/case-dionisio/garcom-02-painel-dark.webp',
      alt: 'App do garçom do case Dionísio: painel com alertas e sugestão de venda',
    },
  },
  {
    caseSlug: 'healthcare',
    caseTitle: 'Hapvida · SAM',
    desktop: {
      src: '/cases/healthcare/redesign-desktop.webp',
      alt: 'Redesign desktop da tela de atendimento médico do SAM, Hapvida',
    },
    mobile: {
      src: '/cases/healthcare/redesign-mobile.webp',
      alt: 'Redesign mobile da tela de atendimento médico do SAM, Hapvida',
    },
  },
  {
    caseSlug: 'pjbank',
    caseTitle: 'PJBank',
    mobile: {
      src: '/cases/pjbank/atual-onboarding-solucao.webp',
      alt: 'Tela de onboarding do app PJBank',
    },
  },
  {
    caseSlug: 'totem',
    caseTitle: 'Totem · Cardápio Web',
    mobile: {
      src: '/cases/totem/categorias.webp',
      alt: 'Grid de categorias do totem de autoatendimento da Cardápio Web',
    },
  },
];
