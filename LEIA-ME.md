# Site da Ótica Pinheiro

**Site no ar:** https://willpine1992.github.io/SITE-OTICA-PINHEIRO/

**Código:** https://github.com/willpine1992/SITE-OTICA-PINHEIRO

Página única, estática, sem dependências nem etapa de build: `index.html`, `styles.css`, `script.js` e a pasta `img/`.
Publicada pelo GitHub Pages a partir da branch `main` (pasta raiz).

---

## 1. Estrutura

```
SITE/
├── index.html        conteúdo e seções da página
├── styles.css        visual (cores, tipografia, layout, celular)
├── script.js         dados das lentes e todas as partes interativas
├── LEIA-ME.md        este documento
└── img/
    ├── logo.png, favicon.png, apple-touch-icon.png
    ├── fachada.jpg, interior*.jpg, atendimento.jpg, armacoes-*.jpg, vitrine-solar.jpg   fotos da loja
    └── lentes/       imagens do Portfólio Inoovax 2026 (retratos, lentes, tratamentos)
```

## 2. Seções da página (na ordem)

| Âncora | Seção | O que tem |
|---|---|---|
| `#inicio` | Abertura | Lente de vidro que segue o mouse sobre a foto das prateleiras (no celular passeia sozinha) e os 4 números de destaque |
| — | Faixa animada | Multifocais, freeform, antirreflexo, filtro azul, Transitions, exame aos sábados, Crediário Bemol |
| `#qual-lente` | Quiz | 4 perguntas que indicam uma linha Inoovax e um tratamento; botão manda o resultado no WhatsApp |
| `#lentes` | Catálogo | 11 linhas com filtro por tipo; ao clicar abre a janela de detalhes (notas, adição, materiais) |
| `#comparar` | Comparador | Duas lentes lado a lado nas 5 notas oficiais |
| `#tecnologia` | Freeform + espessura | Controle que mostra a lente afinando de 1.50 a 1.74 |
| `#tratamentos` | Tratamentos | Antes/depois de arrastar no antirreflexo Diamond, nas 4 camadas (oleofóbica, hidrofóbica, antiestática, antirrisco, em lentes redondas) e no filtro azul; simulador de cores Transitions Gen S |
| `#como-funciona` | Passo a passo | Receita/exame → armação → lente → entrega |
| `#loja` | A loja | Galeria de fotos e formas de pagamento |
| `#visite` | Visite | Endereço, horário com "aberto agora" (fuso de Manaus), mapa e botões |
| `#duvidas` | Perguntas frequentes | 6 perguntas |

## 3. Como editar

Edite os arquivos direto no GitHub (botão ✏️ no arquivo) ou no computador e envie com `git push`.
O site atualiza sozinho em 1 a 2 minutos depois de cada alteração na branch `main`.

| Quero mudar… | Onde |
|---|---|
| Textos, notas ou cores de uma lente | lista `LENTES` no início do `script.js` |
| Perguntas e respostas do quiz | `PERGUNTAS` e a função `recomendar()` no `script.js` |
| Horário de funcionamento | tabela "Horário" no `index.html` **e** o objeto `HORARIOS` no `script.js` |
| Preço de entrada (R$ 579,99) | procure `579,99` no `index.html` (aparece 2 vezes) |
| Número do WhatsApp | constante `WHATSAPP` no topo do `script.js` |
| Cores Transitions | lista `CORES` no `script.js` |
| Materiais do controle de espessura | lista `MATERIAIS` no `script.js` |
| Fotos da loja | troque os arquivos em `img/` mantendo o mesmo nome |
| Cores do site | variáveis no topo do `styles.css` (`--green`, `--teal`, `--night`…) |

A faixa "Inauguração em 7 de novembro" e o aviso no horário somem sozinhos depois de 07/11/2026.

### Atualizar pelo computador
```bash
cd "ÓTICA PINHEIRO/SITE"
git add .
git commit -m "descreva a alteração"
git push
```

### Ver localmente antes de publicar
Dê dois cliques em `index.html`. O mapa precisa de internet.

## 4. Depois de publicar

- ✅ O link já está no campo "Website" do Perfil da Empresa no Google (desde 01/11/2026).
- Coloque o link na bio do Instagram @oticapinheiro_am.
- Domínio próprio (ex.: oticapinheiro.com.br): registre no Registro.br e configure em GitHub → Settings → Pages → Custom domain.

## 5. Regras de conteúdo

- Nada de promessa de saúde ("cura", "controla a miopia", "protege 100%"). Por isso o site não usa essas frases do catálogo Inoovax.
- Preço só com "a partir de" e "condições na loja". Nunca publicar custo ou margem.
- Imagens das lentes vêm do material da Inoovar Lentes. Confirme com o laboratório a autorização de uso. O crédito está no rodapé.

## 6. Dados da loja usados no site

- Endereço: R. Guapé, 72 – Jorge Teixeira, Manaus – AM, 69088-128 (oficialmente R. Jatobá do Serrado, 33)
- WhatsApp: (92) 99309-5763 · Instagram: @oticapinheiro_am
- Horário: seg a sex 8h–12h e 13h–18h; sáb 8h–12h (exame de vista); dom fechado
- Pagamento: Pix, débito, crédito, dinheiro, Crediário Bemol
- CNPJ 69.707.515/0001-22
