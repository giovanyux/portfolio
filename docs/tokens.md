# Tokens do portfólio (v1 → base para v2)

Extração e documentação dos tokens visuais que já existem no portfólio atual
(`main`), para reaproveitar na v2.0 sem redescobrir decisões por tentativa e
erro. Este arquivo é referência — não altera o comportamento do site.

Fontes originais: [`src/styles/tokens.css`](../src/styles/tokens.css) e
[`src/styles/global.css`](../src/styles/global.css). Fora cor e família de
fonte, **nada mais é tokenizado hoje** — tamanhos e espaçamentos são valores
`rem` soltos, repetidos inline em cada componente `.astro`. Isso é uma
inconsistência conhecida, não uma escala intencional (ver seção final).

---

## Cor

Dois temas via classe `.dark` na tag `<html>`, alternados por
`ThemeToggle.astro` e persistidos em `localStorage`.

| Papel | Light | Dark |
| :--- | :--- | :--- |
| `--background` | `#FFFFFF` | `#000000` |
| `--foreground` | `#000000` | `#FFFFFF` |
| `--muted` | `#F5F5F5` | `#0A0A0A` |
| `--muted-foreground` | `#525252` | `#A3A3A3` |
| `--border` | `#E5E5E5` | `#1A1A1A` |
| `--accent` | `#0066FF` | `#4D8FFF` |
| `--accent-foreground` | `#FFFFFF` | `#FFFFFF` |
| `--grid-line` | `rgba(0,0,0,.06)` | `rgba(255,255,255,.06)` |

Paleta enxuta e puramente semântica (nada de escala numérica tipo
`blue-500`). `--accent` é a única cor de destaque — usada para links ativos,
métrica-chave, citações e o grid decorativo do hero. Mapeada 1:1 para
utilitários Tailwind v4 via `@theme inline` em `global.css:11-21`.

---

## Tipografia

```
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
--font-sans: 'Inter', system-ui, sans-serif;
```

- **Mono** é a fonte-padrão do site inteiro (`html { font-family: var(--font-mono) }`)
  — títulos, navegação, metadados, UI. É o que dá a identidade "técnica/editorial".
- **Sans** (Inter) é usada só dentro de `.prose` (corpo de texto dos cases) e
  no `Pullquote`. Reserva de leiturabilidade para blocos longos.
- Pesos carregados via Fontsource: mono em 400/500/700, sans em 400/500.

⚠ **Não existe escala de tamanho.** Cada componente define seu próprio
`font-size` em rem, incluindo duplicatas informais como `0.65rem`/`0.6rem`/
`0.7rem` usadas para o mesmo papel (label uppercase mono) em arquivos
diferentes. Valores observados no código, agrupados por função aproximada:

| Função aproximada | Valores em uso |
| :--- | :--- |
| Label/eyebrow (mono, uppercase, tracked) | `0.55rem` `0.6rem` `0.65rem` `0.7rem` `0.75rem` |
| Corpo pequeno / metadado | `0.8rem` `0.85rem` `0.875rem` `0.9rem` `0.95rem` |
| Corpo padrão | `1rem` `1.0625rem` |
| Destaque / citação | `1.125rem` `1.25rem` `1.625rem` `2rem` |
| Títulos de seção | `clamp(1.75rem, 4vw, 2.5rem)` |
| Títulos hero/case (H1) | `clamp(2.5rem, 7vw, 5.5rem)` até `clamp(4rem, 10vw, 9rem)` |

**Recomendação para a v2:** promover essa tabela a tokens reais (`--text-eyebrow`,
`--text-body-sm`, `--text-body`, `--text-display`, etc.) na primeira página que
tocarmos, em vez de herdar os valores soltos por cópia-e-cola.

---

## Espaçamento

⚠ Mesma situação da tipografia: **não há escala declarada.** `padding`,
`margin` e `gap` são valores `rem` diretos, escolhidos visualmente por bloco.
Os valores mais recorrentes no código atual (candidatos naturais a virar
escala formal):

```
0.25 · 0.375 · 0.5 · 0.75 · 1 · 1.25 · 1.5 · 2 · 2.5 · 3 · 4 · 6 · 8   (rem)
```

Contêineres de página usam consistentemente `max-width: 900px` (conteúdo de
case) ou `1200px` (home/listagens), com `padding: 0 2rem` nas laterais — esse
padrão *é* consistente e vale preservar como token de layout
(`--container-content: 900px`, `--container-wide: 1200px`).

---

## Raio de borda

Não há escala de raio — o sistema é **deliberadamente reto** (0 em quase
tudo: cards, imagens, botões, grids). As únicas exceções:

| Elemento | Raio | Motivo |
| :--- | :--- | :--- |
| Cursor customizado (`#cursor-dot`) | `50%` | círculo |
| Avatar no rodapé (`Footer.astro`) | `50%` | foto de perfil |
| `SystemDisplay` (telas simuladas dentro do case) | `4px` | única concessão a "tela de dispositivo" |
| `TechNote` (nota lateral) | `0 3px 3px 0` | leve, só para não parecer erro de render |

Isso é estilo, não descuido — cantos retos reforçam o tom "editorial/técnico"
do site. Vale manter como regra explícita na v2 (`--radius: 0` por padrão,
exceção pontual documentada) em vez de deixar implícito.

---

## Breakpoints

Não há tokens de breakpoint centralizados; os media queries observados usam
os cortes `639px`, `1023px` diretamente (mobile / tablet-desktop). Poucos o
suficiente para não ser um problema prático hoje, mas vale nomear
(`--bp-sm: 640px`, `--bp-md: 1024px`) se a v2 introduzir mais componentes
responsivos (galeria do slot `[SISTEMA]`, por exemplo).

---

## Resumo — o que muda na v2.0

| Categoria | Hoje | v2.0 |
| :--- | :--- | :--- |
| Cor | Tokenizada (`tokens.css`) | Mantém como está |
| Fontes (família) | Tokenizada | Mantém como está |
| Tamanho de fonte | Ad-hoc, repetido | Extrai escala nomeada (tabela acima) |
| Espaçamento | Ad-hoc, repetido | Extrai escala nomeada (tabela acima) |
| Raio | Implícito (reto) | Explicita `--radius: 0` + exceções |
| Containers | Consistente mas não nomeado | Nomeia `--container-content`/`--container-wide` |
