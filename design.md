# Design — Giovany Jr Portfolio

Sistema de design travado pro portfolio inteiro. Toda página lê este arquivo
antes de ir pro ar. Não recria o sistema por página — estende ou emenda este
arquivo quando o sistema precisar crescer.

Gerado por `hallmark redesign` em 2026-08-13. Briefing: técnico, funcional,
informativo, profissionalismo pra recrutadores — sem perder a identidade azul
já estabelecida (`#0066FF`).

## Genre
modern-minimal

## Tema
**Cobalt** — registro técnico de dev-tool/API/instrument-panel (GitBook,
Vercel, Linear, Stripe docs). Papel branco-frio, nunca preto/branco puro,
um único sinal azul elétrico, hairlines fazem o trabalho de profundidade,
uma faixa grafite escura por página como o "beat" de destaque.

## Macrostructure families
Três famílias, uma por tipo de página:

- **Narrativa** (`index.astro`, `sobre.astro`, `contato.astro`): **Marquee
  Hero** — afirmação/identidade preenche a dobra, sem CTA competindo ali;
  abaixo da dobra a página vira outra coisa (grid de cases na home, lista
  tipo changelog na sobre, lista de canais no contato).
- **Índice** (`cases/index.astro`): **Portfolio Grid** — cards de projeto
  num grid responsivo, sem hero pesado, tagline curta acima.
- **Detalhe** (`cases/[slug].astro` via `CaseLayout.astro`): **Workbench** —
  screenshot em destaque como conteúdo primário, tour guiado, menos "copy
  de venda", mais "aqui está o que foi decidido e por quê".

## Theme

```css
--color-paper:       oklch(98.5% 0.004 250);
--color-paper-2:      oklch(96.5% 0.006 250);
--color-ink:          oklch(24% 0.02 258);
--color-ink-2:        oklch(34% 0.018 257);
--color-rule:         oklch(88% 0.006 250);
--color-accent:       oklch(58% 0.20 256);
--color-accent-ink:   oklch(99% 0.005 250);
--color-focus:        oklch(58% 0.20 256);
--color-graphite:     oklch(22% 0.016 260);
--color-graphite-ink: oklch(94% 0.006 250);
```

Dark mode espelha o mesmo eixo (papel escuro `oklch(16% 0.014 260)`, tinta
clara `oklch(94% 0.006 250)`) — o toggle já existente no site continua
funcionando, só os valores mudam pro eixo Cobalt.

## Typography
- Display: **Space Grotesk**, peso 500/600, tracking `-0.02em`
- Body: **Inter**, peso 400/500
- Mono (outlier): **JetBrains Mono** — eyebrows, meta, status, labels,
  navegação — a voz "leitura de máquina" contra o display geométrico
- Escala: base 1rem, razão 1.25, `--text-display: clamp(2.75rem, 5vw + 1rem, 5.25rem)`

## Spacing
Escala 4pt já existente em `tokens.css` (`--space-xs` a `--space-2xl`),
estendida com `--space-3xs`, `--space-2xs` e `--space-3xl` pros ritmos mais
apertados/generosos que o Cobalt pede. Nomeado, nunca valor cru.

## Motion
- Easings: `--ease-out cubic-bezier(0.16,1,0.3,1)`, `--ease-in cubic-bezier(0.7,0,0.84,0)`, `--ease-in-out cubic-bezier(0.65,0,0.35,1)`
- Reveal: um fade+rise por carregamento de página (hero), sem stagger em
  lista/grid — composto, não universal
- Reduced-motion: colapsa pra opacity-only, ≤150ms

## Microinteractions
- Sucesso silencioso, nunca toast celebratório
- Hover: sublinhado cresce em links, borda muda pra cobalt em cards/inputs
- Foco: anel instantâneo, nunca anima a entrada
- Paleta ⌘K: abre por clique ou Cmd/Ctrl+K, fecha com Esc/backdrop, navega
  com setas, filtra por texto, `role="dialog"` + `aria-modal`

## CTA voice
- Primária: preenchida em cobalt, radius 6px, texto que nomeia o destino
  ("Ver cases →", nunca "Saiba mais")
- Secundária: link tipográfico com sublinhado, sem caixa

## Nav e footer
- **Nav — N13 (⌘K pill inline)**: barra com borda inferior única (hairline),
  sem blur pesado. Wordmark esquerda, 3 links (Cases/Sobre/Contato) +
  pill `⌘K` visível + toggle de tema à direita. O `⌘K` abre uma paleta de
  comando real — funciona de verdade, não é decoração.
- **Footer — Ft2 (linha única)**: uma linha com avatar+nome/cargo, canais
  sociais, copyright — hairline acima, sem colunas.

## Per-page allowances
- Home: UMA faixa grafite no CTA final.
- Cases (index e detalhe): a seção "Resultado"/métrica de cada case vira a
  faixa grafite — é o momento de destaque natural, já existe como bloco
  de acento.
- Sobre: a lista de experiência ganha tratamento tipo changelog (tags mono,
  hairlines entre entradas) — sem faixa grafite própria (evita repetir o
  beat na mesma página que já tem outras seções).
- Contato: sem faixa grafite — página curta, não precisa do beat.

## What pages MUST share
- Wordmark, paleta Cobalt completa, par Space Grotesk + Inter + JetBrains Mono
- Voz do CTA primário (preenchido, radius 6px, cobalt)
- Nav N13 + footer Ft2 idênticos em toda página
- Radii técnicos: 6px em botões/inputs, 10px em cards/imagens
- Hairlines (`1px solid var(--color-rule)`) como única fonte de profundidade
  — sem sombra além do whisper (`0 1px 2px`) no card de código/imagem

## What pages MAY differ on
- Macrostructure dentro da família (ex.: a home pode variar o corte do
  Marquee Hero sem sair da família)
- Presença/ausência da faixa grafite (ver "Per-page allowances")
- Arquétipo de enrichment do hero — só Tier A (CSS) ou nenhum

## Exports

### tokens.css
Ver `src/styles/tokens.css` — é o arquivo real do projeto, mantido em
sincronia com este documento. Não duplicado aqui pra evitar duas fontes de
verdade.
