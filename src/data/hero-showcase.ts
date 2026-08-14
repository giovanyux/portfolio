// Vitrine curada do hero da home — lista manual (não automática): edite este
// array pra trocar quais telas aparecem. Cada item é uma tela REAL de um
// case já publicado (nunca draft/comingSoon). `orientation` só ajuda o
// enquadramento a ficar elegante (o box já se adapta via object-fit:
// contain de qualquer forma, é reforço, não obrigatório acertar).
//
// Pra adicionar uma tela: pegue o caminho public/cases/... e cole aqui com
// o slug do case (bate com src/content/cases/<slug>.mdx) e um alt descritivo.
// Pra remover: apague a entrada. A ordem do array é a ordem de rotação.
export interface HeroShowcaseItem {
  src: string;
  alt: string;
  orientation: 'mobile' | 'desktop';
  caseSlug: string;
  caseTitle: string;
}

export const HERO_SHOWCASE: HeroShowcaseItem[] = [
  {
    src: '/cases/case-dionisio/admin-02-visao-geral-do-salao-dark.webp',
    alt: 'Admin do gerente do case Dionísio: visão geral do salão, estado de cada mesa',
    orientation: 'desktop',
    caseSlug: 'case-dionisio',
    caseTitle: 'Dionísio',
  },
  {
    src: '/cases/case-dionisio/garcom-02-painel-dark.webp',
    alt: 'App do garçom do case Dionísio: painel com alertas, ganhos e sugestão de venda',
    orientation: 'mobile',
    caseSlug: 'case-dionisio',
    caseTitle: 'Dionísio',
  },
  {
    src: '/cases/healthcare/redesign-desktop.webp',
    alt: 'Redesign desktop da tela de atendimento médico do SAM, Hapvida',
    orientation: 'desktop',
    caseSlug: 'healthcare',
    caseTitle: 'Hapvida · SAM',
  },
  {
    src: '/cases/pjbank/atual-onboarding-solucao.webp',
    alt: 'Tela de onboarding do app PJBank',
    orientation: 'mobile',
    caseSlug: 'pjbank',
    caseTitle: 'PJBank',
  },
  {
    src: '/cases/totem/categorias.webp',
    alt: 'Grid de categorias do totem de autoatendimento da Cardápio Web',
    orientation: 'mobile',
    caseSlug: 'totem',
    caseTitle: 'Totem · Cardápio Web',
  },
  {
    src: '/cases/case-dionisio/admin-06-dashboard-de-performance-dark.webp',
    alt: 'Dashboard de performance dos garçons no admin do case Dionísio',
    orientation: 'desktop',
    caseSlug: 'case-dionisio',
    caseTitle: 'Dionísio',
  },
];
