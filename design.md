# Design — Giovany Jr Portfolio

Sistema de design travado pro portfolio inteiro. Toda página lê este arquivo
antes de ir pro ar. Não recria o sistema por página — estende ou emenda este
arquivo quando o sistema precisar crescer.

**Rebrand em 2026-08-13** — substitui o sistema Cobalt (modern-minimal/
técnico) anterior por uma identidade própria, extraída de `capa-linkedin.jpeg`
e `logo.webm` (pasta "id visual"), com cores amostradas por pixel real
(Pillow) e contraste calculado via WCAG 2.1 — não estimado.

## Genre
Identidade própria, quente — não é um dos temas do catálogo Hallmark.

## Tema
Base creme quente (light) e derivado escuro equivalente (dark) — mantém a
família de matiz marrom/creme no dark em vez de virar cinza-azulado
genérico. Accent rosé/coral é **sempre decorativo** (sparkle, destaque
pontual) — nunca texto, link ou ícone com significado; isso usa `--action`
(azul, herdado do `#0066FF` original da marca).

## Macrostructure families
Três famílias, uma por tipo de página (não mudou no rebrand):

- **Narrativa** (`index.astro`, `sobre.astro`, `contato.astro`): **Marquee
  Hero** — afirmação/identidade preenche a dobra.
- **Índice** (`cases/index.astro`): **Portfolio Grid** — cards de projeto
  num grid responsivo.
- **Detalhe** (`cases/[slug].astro` via `CaseLayout.astro`): **Workbench** —
  screenshot em destaque como conteúdo primário. A moldura (nav, header,
  meta grid, divisórias, footer, tipografia de apoio) segue a identidade
  nova; as entregas do produto dentro do case (telas, mockups, screenshots)
  ficam fiéis ao design do produto original — nunca recoloridas.

## Theme

```css
--bg:              #FFF3EB;  --bg (dark):         #1C1310;
--surface:         #FFFFFF;  --surface (dark):    #2A1E18;
--border:          #EFDDD1;  --border (dark):     #4A362C;
--text:            #5E2116;  --text (dark):       #F6E8DD;
--text-muted:      #836A60;  --text-muted (dark): #C7AEA2;
--action:          #31749E;  --action (dark):     #6FC2EE;
--accent:          #DC9790;  --accent (dark):     #E9A79C;  /* decorativo, nunca texto/link */
```

Contraste confirmado: text 11.3:1 (AAA), text-muted 4.6:1 (AA), action 4.7:1
(AA) no light; todos ≥8.7:1 no dark. `--border-strong` é computado via
`color-mix(in oklab, var(--border), var(--text) 30%)`, não um valor fixo.

### Glows de canto
Dois radial-gradients extraídos direto do Figma (nós 2015:608 e 2015:609,
arquivo Resolvvi) — valores exatos, não estimados:
- `--glow-top`: `radial-gradient(circle, rgba(61,187,255,.4) 0%, rgba(61,187,255,0) 100%)` (azul)
- `--glow-bottom`: `radial-gradient(circle, rgba(224,158,150,.4) 0%, rgba(224,158,150,.26) 45%, rgba(224,158,150,0) 100%)` (coral)

Aplicados via `<GridLines glow />`, opt-in, reservado pro hero da home.

## Typography
- Display: **Poppins**, peso 600/700 — bate com o formato do "a" e do "g"
  do banner da marca
- Body: **Inter**, peso 400/500 (mantido do sistema anterior)
- Mono: **JetBrains Mono** — retirado da moldura genérica (nav, eyebrow,
  breadcrumb, labels agora usam `--font-sans` maiúsculo com tracking), mas
  **mantido como acento pontual em momentos técnicos**: a paleta de comando
  ⌘K inteira (input, meta, empty state) e blockquotes de case — preserva o
  sinal "isso foi feito por alguém que vive em código" sem generalizar o
  mono pra tudo.
- Escala: base 1rem, razão 1.25, `--text-display: clamp(2.5rem, 5vw + 1rem, 5.25rem)`

## Spacing
Escala 4pt em `tokens.css` (`--space-3xs` a `--space-3xl`). Não muda no
rebrand — é estrutura, não identidade.

## Motion
- Easings/durations: não mudam — `--ease-out/in/in-out`, `--dur-micro/short/long`
- Reveal: um fade+rise por carregamento de página, sem stagger em lista/grid
- Logo animada: vídeo (`webm` + `mp4` fallback), poster instantâneo,
  `prefers-reduced-motion` mostra só o poster estático
- Reduced-motion: colapsa pra opacity-only em tudo, vídeo da logo pausa e
  esconde, mostrando só o poster

## CTA voice
- Primária: preenchida em `--action`, radius 10px (`--radius-sm`), texto que
  nomeia o destino
- Secundária: link tipográfico com sublinhado, sem caixa

## Nav e footer
- **Nav**: barra com borda inferior única (hairline), blur leve. Logo
  animada (squircle + vídeo + G em SVG por cima) + 3 links (Cases/Sobre/
  Contato) + pill `⌘K` (paleta de comando real) + toggle de tema.
- **Footer**: logo animada + avatar + nome/cargo, canais sociais,
  copyright — linha única, hairline acima.

## Logo
Squircle com vídeo de fundo (gradiente granulado azul/rosé/sálvia,
`public/brand/logo.webm` + `.mp4` + poster `.webp`, ~30-80KB cada) e o "G"
renderizado como SVG estático por cima (nitidez garantida independente de
compressão do vídeo). Favicon é uma versão estática (SVG com gradiente
linear + G, mais `apple-touch-icon.png` do frame real). Funciona nos dois
temas — o mark carrega seu próprio fundo escuro (`#1C1310`), não depende do
tema da página.

## Per-page allowances
- Cases (index e detalhe): a seção "Resultado"/métrica de cada case usa
  `.result-card` — surface + borda esquerda `--action` (substitui a antiga
  faixa grafite, que não combinava com a identidade quente).
- Sobre: lista de experiência em tratamento tipo changelog (tags `vN.0`,
  hairlines entre entradas).

## What pages MUST share
- Logo, paleta completa (light/dark), par Poppins + Inter + JetBrains Mono
  (só em momentos técnicos)
- Voz do CTA primário (preenchido, radius 10px, `--action`)
- Nav + footer idênticos em toda página
- Radii arredondados: 10px em botões/inputs, 18px em cards/imagens
- Hairlines como fonte principal de profundidade

## What pages MAY differ on
- Macrostructure dentro da família
- Presença dos glows de canto (só home, por enquanto)
- Arquétipo de enrichment do hero — Tier A (CSS) ou nenhum; vídeo só na
  logo, nunca solto como fundo decorativo

## Exports

### tokens.css
Ver `src/styles/tokens.css` — arquivo real do projeto, mantido em sincronia
com este documento.
