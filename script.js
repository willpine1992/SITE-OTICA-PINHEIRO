// Ótica Pinheiro — site interativo
const WHATSAPP = "5592993095763";
const waLink = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

/* =========================================================
   Dados das lentes (portfólio Inoovax 2026)
   notas = [longe, intermediária, perto, conforto, adaptação]
   ========================================================= */
const MATERIAIS_TODOS = "CR-39, 1.56, Policarbonato, 1.60, 1.67 e 1.74";
const LENTES = [
  {
    id: "advanced-pro", nome: "Advanced Pro", cat: "multifocal", cor: "#8ea4bd",
    tag: "O topo da linha multifocal",
    desc: "Mais uma evolução para quem deseja um design exclusivo. Lente personalizada para cada usuário, com conforto em todos os ângulos e até 90% menos efeito de flutuação, segundo o fabricante.",
    para: "Quem quer o máximo desempenho e conforto no dia a dia.",
    notas: [5, 5, 5, 5, 5], adicao: "0,75 a 3,50", altura: "14 mm", materiais: MATERIAIS_TODOS, animal: "Arara-azul",
  },
  {
    id: "advanced", nome: "Advanced", cat: "multifocal", cor: "#f28c28",
    tag: "Conforto em todas as distâncias",
    desc: "Design progressivo com as tecnologias mais avançadas de otimização, bordas mais finas e até 50% menos efeito de flutuação, segundo o fabricante.",
    para: "Quem busca conforto em todas as distâncias e uma adaptação fácil.",
    notas: [5, 4, 4, 5, 4], adicao: "0,75 a 3,50", altura: "14 mm", materiais: MATERIAIS_TODOS, animal: "Onça-pintada",
  },
  {
    id: "plus", nome: "Plus", cat: "multifocal", cor: "#9aa3ab",
    tag: "Mais área para perto e meia distância",
    desc: "Desenvolvida para quem precisa de uma zona maior de visão intermediária e de perto, sem comprometer a visão de longe. Nitidez em quase toda a área útil da lente.",
    para: "Quem quer uma multifocal acessível sem abrir mão de qualidade e tecnologia.",
    notas: [4, 3, 4, 4, 4], adicao: "0,75 a 3,50", altura: "14 mm", materiais: MATERIAIS_TODOS, animal: "Bicho-preguiça",
  },
  {
    id: "light", nome: "Light", cat: "multifocal", cor: "#3fa9f5",
    tag: "Equilíbrio entre qualidade e preço",
    desc: "Transições suaves entre longe, intermediário e perto, com adaptação facilitada e visão estável. Boa nitidez para leitura, telas e visão geral.",
    para: "Quem busca praticidade e confiança na multifocal.",
    notas: [3, 3, 3, 4, 4], adicao: "0,75 a 3,50", altura: "14 mm", materiais: MATERIAIS_TODOS, animal: "Galo-da-serra",
  },
  {
    id: "basic", nome: "Basic", cat: "multifocal", cor: "#d6338a",
    tag: "Para quem está começando",
    desc: "A progressiva de entrada da família Inoovax, com design funcional e transições suaves entre longe, intermediário e perto.",
    para: "Quem está iniciando no uso de multifocais e quer uma solução simples.",
    notas: [3, 3, 3, 3, 3], adicao: "1,00 a 3,50", altura: "14 mm", materiais: "1.56 e Policarbonato", animal: "Sagui",
  },
  {
    id: "easy", nome: "Easy", cat: "multifocal", cor: "#2f5d8c",
    tag: "Progressiva simples e acessível",
    desc: "Progressiva de entrada, funcional e confortável para o dia a dia, com boa adaptação e uma experiência visual simples.",
    para: "Quem busca uma multifocal acessível para o dia a dia.",
    notas: [2.5, 2.5, 2.5, 2.5, 2.5], adicao: "1,00 a 3,50", altura: "14 mm", materiais: MATERIAIS_TODOS, animal: "Tucunaré",
  },
  {
    id: "office", nome: "Office", cat: "ocupacional", cor: "#8a5a36",
    tag: "Para o escritório e o computador",
    desc: "Progressiva ocupacional para ambientes fechados, com visão ampla e nítida de perto e na meia distância. Alcance de 2 ou 4 metros.",
    para: "Quem usa computador e trabalha o dia todo em escritório.",
    notas: [1, 5, 5, 5, 5], adicao: "0,75 a 3,50", altura: "14 mm", materiais: MATERIAIS_TODOS, extra: ["Alcance", "2 ou 4 metros"],
  },
  {
    id: "driver", nome: "Driver", cat: "ocupacional", cor: "#6b2fa0",
    tag: "Feita para quem dirige",
    desc: "Desenvolvida para motoristas que passam horas ao volante. Transição suave entre as distâncias, com visão nítida do painel, dos retrovisores e da estrada.",
    para: "Quem fica de 4 a 8 horas por dia ao volante.",
    notas: [5, 4, 4, 5, 4], adicao: "0,75 a 3,50", altura: "14 mm", materiais: MATERIAIS_TODOS,
  },
  {
    id: "relax", nome: "Relax", cat: "ocupacional", cor: "#b5c400",
    tag: "Para longas horas de tela",
    desc: "Lente de visão simples com uma área de apoio para perto, pensada para quem passa muitas horas em telas, celular, livros e outras atividades de perto.",
    para: "Adultos de 30 a 42 anos com rotina intensa de telas e leitura.",
    notas: [5, 5, 5, 5, 5], adicao: null, altura: "—", materiais: MATERIAIS_TODOS, extra: ["Apoio para perto", "0,50 · 0,75 · 1,00 conforme a idade"],
  },
  {
    id: "single-vision", nome: "Single Vision", cat: "simples", cor: "#1e3a8a",
    tag: "Visão simples freeform",
    desc: "Lente de visão simples freeform com a tecnologia All Vision do laboratório Inoovar, que deixa toda a lente nítida até as bordas.",
    para: "Qualquer atividade, para quem usa óculos só para longe ou só para perto.",
    notas: [5, 5, 5, 5, 5], adicao: null, altura: "—", materiais: MATERIAIS_TODOS,
  },
  {
    id: "kids", nome: "Kids", cat: "simples", cor: "#22a06b",
    tag: "Para crianças e adolescentes",
    desc: "Desenvolvida especialmente para crianças e adolescentes que precisam de correção visual, com o conforto que os pequenos precisam no dia a dia.",
    para: "Crianças e adolescentes de 0 a 17 anos.",
    notas: [5, 5, 5, 5, 5], adicao: null, altura: "—", materiais: MATERIAIS_TODOS, semLente: true,
  },
];
const CATEGORIAS = { multifocal: "Multifocal", ocupacional: "Ocupacional", simples: "Visão simples" };
const CRITERIOS = ["Visão de longe", "Visão intermediária", "Visão de perto", "Conforto", "Adaptação"];
const porId = (id) => LENTES.find((l) => l.id === id);
const imgRetrato = (l) => `img/lentes/retrato-${l.id}.jpg`;
const imgLente = (l) => (l.semLente ? imgRetrato(l) : `img/lentes/lente-${l.id}.jpg`);

function estrelas(media) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    const cls = media >= i ? "on" : media >= i - 0.5 ? "half" : "";
    html += `<i class="${cls}">★</i>`;
  }
  return `<span class="stars" aria-label="Nota ${media.toFixed(1).replace(".", ",")} de 5">${html}</span>`;
}
const media = (n) => n.reduce((a, b) => a + b, 0) / n.length;

/* ===================== Links do WhatsApp ===================== */
function ligarWhatsApp(raiz = document) {
  raiz.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
  });
}

/* ===================== Cabeçalho e menu ===================== */
const header = document.getElementById("header");
const ribbon = document.getElementById("ribbon");
if (ribbon && new Date() < new Date("2026-11-08T00:00:00-04:00")) {
  ribbon.hidden = false;
  document.body.classList.add("has-ribbon");
}
const atualizarHeader = () => header.classList.toggle("is-solid", window.scrollY > 40);
window.addEventListener("scroll", atualizarHeader, { passive: true });
atualizarHeader();

const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const aberto = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!aberto));
  menu.classList.toggle("is-open", !aberto);
  header.classList.add("is-solid");
});
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  toggle.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
}));

/* ===================== Hero: lente que segue o cursor ===================== */
(function lenteDoHero() {
  const hero = document.querySelector(".hero");
  const stage = document.getElementById("lensStage");
  if (!hero || !stage) return;
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let alvo = { x: 0.7, y: 0.45 }, atual = { ...alvo };
  let ultimoToque = 0;

  const mover = (clientX, clientY) => {
    const r = hero.getBoundingClientRect();
    alvo = { x: (clientX - r.left) / r.width, y: (clientY - r.top) / r.height };
    ultimoToque = performance.now();
  };
  hero.addEventListener("pointermove", (e) => mover(e.clientX, e.clientY));
  hero.addEventListener("touchmove", (e) => mover(e.touches[0].clientX, e.touches[0].clientY), { passive: true });

  function quadro(t) {
    if (performance.now() - ultimoToque > 2500 && !reduzir) {
      // passeio automático quando ninguém está mexendo
      const s = t / 1000;
      if (window.innerWidth > 860) {
        alvo = { x: 0.72 + Math.cos(s * 0.5) * 0.13, y: 0.42 + Math.sin(s * 0.8) * 0.14 };
      } else {
        // no celular a lente passeia na faixa acima do texto (≈ 110–330 px)
        const altura = hero.getBoundingClientRect().height;
        alvo = { x: 0.5 + Math.cos(s * 0.6) * 0.22, y: (220 + Math.sin(s * 0.9) * 30) / altura };
      }
    }
    atual.x += (alvo.x - atual.x) * 0.09;
    atual.y += (alvo.y - atual.y) * 0.09;
    stage.style.setProperty("--x", `${(atual.x * 100).toFixed(2)}%`);
    stage.style.setProperty("--y", `${(atual.y * 100).toFixed(2)}%`);
    requestAnimationFrame(quadro);
  }
  requestAnimationFrame(quadro);
})();

/* ===================== Catálogo ===================== */
const catalog = document.getElementById("catalog");
catalog.innerHTML = LENTES.map((l) => `
  <button class="lens-card" data-id="${l.id}" data-cat="${l.cat}" style="--accent:${l.cor}" aria-label="Ver detalhes da lente Inoovax ${l.nome}">
    <img class="lens-card__img lens-card__img--main" src="${imgRetrato(l)}" alt="" loading="lazy">
    <img class="lens-card__img lens-card__img--alt" src="${imgLente(l)}" alt="" loading="lazy">
    <span class="lens-card__shade"></span>
    <span class="lens-card__bar"></span>
    <span class="lens-card__body">
      <span class="lens-card__cat">${CATEGORIAS[l.cat]}</span>
      <span class="lens-card__name"><small>INOOVAX</small>${l.nome}</span>
      <span class="lens-card__tag">${l.tag}</span>
      ${estrelas(media(l.notas))}
      <span class="lens-card__more">Ver detalhes →</span>
    </span>
  </button>`).join("");

document.querySelectorAll(".filter").forEach((btn) => btn.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
  btn.classList.add("is-active");
  btn.setAttribute("aria-selected", "true");
  const f = btn.dataset.filter;
  catalog.querySelectorAll(".lens-card").forEach((c) => c.classList.toggle("is-hidden", f !== "todas" && c.dataset.cat !== f));
}));

/* ===================== Janela de detalhes ===================== */
const modal = document.getElementById("lensModal");
const modalBody = document.getElementById("modalBody");

function abrirLente(id) {
  const l = porId(id);
  const specs = [
    ["Diâmetro", "75 mm"],
    ["Altura de montagem", l.altura],
    ...(l.adicao ? [["Adição", l.adicao]] : []),
    ...(l.extra ? [l.extra] : []),
    ["Materiais", l.materiais],
  ];
  modalBody.innerHTML = `
    <div class="modal__grid" style="--accent:${l.cor}">
      <div class="modal__visual">
        <img class="portrait" src="${imgRetrato(l)}" alt="Pessoa usando óculos com lente Inoovax ${l.nome}">
        ${l.semLente ? "" : `<img class="lensimg" src="${imgLente(l)}" alt="Imagem ilustrativa da lente ${l.nome}${l.animal ? " com " + l.animal.toLowerCase() : ""}">`}
      </div>
      <div class="modal__info">
        <span class="modal__accent"></span>
        <p class="eyebrow">${CATEGORIAS[l.cat]} · Inoovax</p>
        <h2 id="modalTitle">${l.nome}</h2>
        <p class="lead">${l.desc}</p>
        <p class="modal__for"><strong>Indicada para:</strong> ${l.para}</p>
        <div class="meters">
          ${CRITERIOS.map((c, i) => `
            <div class="meter"><span>${c}</span><span class="meter__track"><span class="meter__fill" data-w="${l.notas[i] * 20}"></span></span><b>${String(l.notas[i]).replace(".", ",")}</b></div>`).join("")}
        </div>
        <dl class="specs">${specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
        <p class="muted">Disponível com antirreflexo Diamond, filtro azul, fotossensível e Transitions Gen S.</p>
        <div class="quiz__actions">
          <a class="btn btn--wa" data-wa="Olá! Quero saber mais sobre a lente Inoovax ${l.nome}." href="#">Quero esta lente</a>
          <button class="btn btn--outline" data-compare="${l.id}">Comparar</button>
        </div>
      </div>
    </div>`;
  ligarWhatsApp(modalBody);
  modalBody.querySelector("[data-compare]").addEventListener("click", () => {
    modal.close();
    cmpA.value = l.id;
    if (cmpB.value === l.id) cmpB.value = l.id === "light" ? "advanced-pro" : "light";
    desenharComparacao();
    document.getElementById("comparar").scrollIntoView({ behavior: "smooth" });
  });
  modal.showModal();
  requestAnimationFrame(() => requestAnimationFrame(() =>
    modalBody.querySelectorAll(".meter__fill").forEach((f) => (f.style.width = f.dataset.w + "%"))));
}

catalog.addEventListener("click", (e) => {
  const card = e.target.closest(".lens-card");
  if (card) abrirLente(card.dataset.id);
});
modal.querySelector(".modal__close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

/* ===================== Comparador ===================== */
const cmpA = document.getElementById("cmpA");
const cmpB = document.getElementById("cmpB");
const cmpBars = document.getElementById("cmpBars");
const opcoes = LENTES.map((l) => `<option value="${l.id}">Inoovax ${l.nome}</option>`).join("");
cmpA.innerHTML = opcoes;
cmpB.innerHTML = opcoes;
cmpA.value = "advanced-pro";
cmpB.value = "light";
const COR_A = "#2e6b37", COR_B = "#f39a2b";

function desenharComparacao() {
  const a = porId(cmpA.value), b = porId(cmpB.value);
  cmpBars.innerHTML = `
    <div class="cmp-legend">
      <span><i style="background:${COR_A}"></i>${a.nome}</span>
      <span><i style="background:${COR_B}"></i>${b.nome}</span>
    </div>
    ${CRITERIOS.map((c, i) => `
      <div class="cmp-row">
        <span class="cmp-row__label">${c}</span>
        <div class="cmp-row__bars">
          <div class="cmp-bar"><span class="cmp-bar__track"><span class="cmp-bar__fill" style="width:0;background:${COR_A}" data-w="${a.notas[i] * 20}"></span></span><b>${String(a.notas[i]).replace(".", ",")}</b></div>
          <div class="cmp-bar"><span class="cmp-bar__track"><span class="cmp-bar__fill" style="width:0;background:${COR_B}" data-w="${b.notas[i] * 20}"></span></span><b>${String(b.notas[i]).replace(".", ",")}</b></div>
        </div>
      </div>`).join("")}`;
  requestAnimationFrame(() => requestAnimationFrame(() =>
    cmpBars.querySelectorAll(".cmp-bar__fill").forEach((f) => (f.style.width = f.dataset.w + "%"))));
}
cmpA.addEventListener("change", desenharComparacao);
cmpB.addEventListener("change", desenharComparacao);
desenharComparacao();

/* ===================== Quiz ===================== */
const quiz = document.getElementById("quiz");
const progresso = document.querySelectorAll("#quizProgress li");
const PERGUNTAS = [
  {
    chave: "quem", q: "Para quem são os óculos?",
    opts: [["adulto", "Para mim (adulto)", "A partir de 18 anos"], ["crianca", "Para uma criança", "Ou adolescente até 17 anos"]],
  },
  {
    chave: "perto", q: "Você tem dificuldade para ler de perto?",
    opts: [["sim", "Sim", "Afasto o celular para ler, ou já uso multifocal"], ["nao", "Não", "Enxergo bem de perto"]],
  },
  {
    chave: "rotina", q: "Como é a sua rotina?",
    opts: [["geral", "Um pouco de tudo", "Rua, casa, trabalho"], ["computador", "Computador o dia todo", "Escritório e ambientes fechados"], ["dirigir", "Dirijo muitas horas", "Trabalho ao volante ou estrada"], ["telas", "Muito celular e leitura", "Horas de tela por dia"]],
  },
  {
    chave: "prioridade", q: "O que é mais importante para você?",
    opts: [["maximo", "Máximo conforto", "O melhor da tecnologia"], ["equilibrio", "Equilíbrio", "Ótima lente com bom preço"], ["preco", "Melhor preço", "Uma boa lente que caiba no bolso"]],
  },
];
let respostas = {};
let passo = 0;

function proximoPasso() {
  // pula perguntas que não fazem sentido
  if (respostas.quem === "crianca") return null;
  if (passo === 3 && (respostas.perto === "nao" || respostas.rotina !== "geral" && respostas.rotina !== "telas")) return null;
  return PERGUNTAS[passo];
}

function recomendar() {
  const r = respostas;
  let id, extra = "";
  if (r.quem === "crianca") { id = "kids"; extra = "Para crianças, o policarbonato é o material mais resistente a impactos."; }
  else if (r.perto === "nao") id = r.rotina === "telas" || r.rotina === "computador" ? "relax" : "single-vision";
  else if (r.rotina === "computador") id = "office";
  else if (r.rotina === "dirigir") id = "driver";
  else id = { maximo: "advanced-pro", equilibrio: "advanced", preco: "light" }[r.prioridade] || "advanced";
  if (!extra) {
    if (r.rotina === "dirigir") extra = "Sugestão: antirreflexo Diamond, com menos reflexo dos faróis à noite.";
    else if (r.rotina === "telas" || r.rotina === "computador") extra = "Sugestão: adicione o filtro azul para mais conforto nas telas.";
    else extra = "Sugestão: Transitions Gen S para clarear dentro de casa e escurecer no sol.";
  }
  return { lente: porId(id), extra };
}

function desenharQuiz() {
  progresso.forEach((li, i) => li.classList.toggle("is-active", i <= passo));
  const p = proximoPasso();
  if (!p) return desenharResultado();
  quiz.innerHTML = `
    <div class="quiz__step">
      <p class="eyebrow">Pergunta ${passo + 1}</p>
      <p class="quiz__q">${p.q}</p>
      <div class="quiz__opts">
        ${p.opts.map(([v, t, s]) => `<button class="quiz__opt" data-v="${v}"><strong>${t}</strong><span>${s}</span></button>`).join("")}
      </div>
      ${passo > 0 ? `<button class="quiz__back">← Voltar</button>` : ""}
    </div>`;
  quiz.querySelectorAll(".quiz__opt").forEach((b) => b.addEventListener("click", () => {
    respostas[p.chave] = b.dataset.v;
    passo++;
    desenharQuiz();
  }));
  const voltar = quiz.querySelector(".quiz__back");
  if (voltar) voltar.addEventListener("click", () => {
    passo--;
    delete respostas[PERGUNTAS[passo].chave];
    desenharQuiz();
  });
}

function desenharResultado() {
  progresso.forEach((li) => li.classList.add("is-active"));
  const { lente, extra } = recomendar();
  quiz.innerHTML = `
    <div class="quiz__result" style="--accent:${lente.cor}">
      <img src="${imgLente(lente)}" alt="">
      <div>
        <span class="tag">Indicação para você</span>
        <h3>Inoovax ${lente.nome}</h3>
        ${estrelas(media(lente.notas))}
        <p class="quiz__extra">${lente.tag}. ${extra}</p>
        <div class="quiz__actions">
          <a class="btn btn--wa" data-wa="Olá! Fiz o teste no site e a indicação foi a lente Inoovax ${lente.nome}. Quero um orçamento." href="#">Pedir orçamento</a>
          <button class="btn btn--outline" data-ver="${lente.id}">Ver detalhes</button>
        </div>
        <button class="quiz__back" data-refazer>↺ Refazer o teste</button>
      </div>
    </div>`;
  ligarWhatsApp(quiz);
  quiz.querySelector("[data-ver]").addEventListener("click", () => abrirLente(lente.id));
  quiz.querySelector("[data-refazer]").addEventListener("click", () => { respostas = {}; passo = 0; desenharQuiz(); });
}
desenharQuiz();

/* ===================== Espessura da lente ===================== */
const MATERIAIS = [
  { nome: "CR-39 (1.50)", borda: 1.0, desc: "Material clássico, leve e com ótima qualidade óptica." },
  { nome: "Resina 1.56", borda: 0.88, desc: "Um pouco mais fina que o CR-39, com ótimo custo-benefício." },
  { nome: "Policarbonato (1.59)", borda: 0.8, desc: "Mais resistente a impactos. Boa escolha para crianças e esportes." },
  { nome: "Alto índice 1.60", borda: 0.76, desc: "Mais fina e leve. Não é indicada para armações com parafuso." },
  { nome: "Alto índice 1.67", borda: 0.64, desc: "Bem mais fina, ótima para graus altos." },
  { nome: "Alto índice 1.74", borda: 0.55, desc: "A mais fina da linha, para os graus mais altos." },
];
const thickPath = document.getElementById("thickPath");
const thickRange = document.getElementById("thickRange");
let bordaAtual = 1;

function perfil(borda) {
  // perfil de uma lente negativa: fina no centro, grossa nas bordas
  const cx = 160, meia = 140, centro = 8, maxBorda = 92 * borda;
  const topo = [], base = [];
  for (let x = cx - meia; x <= cx + meia; x += 7) {
    const t = (x - cx) / meia;
    const h = centro + (maxBorda - centro) * t * t;
    topo.push(`${x},${(100 - h / 2).toFixed(1)}`);
    base.unshift(`${x},${(100 + h / 2).toFixed(1)}`);
  }
  return `M${topo.join(" L")} L${base.join(" L")} Z`;
}

function animarEspessura(destino) {
  const inicio = bordaAtual, t0 = performance.now();
  const passo = (agora) => {
    const k = Math.min(1, (agora - t0) / 450);
    const e = 1 - Math.pow(1 - k, 3);
    bordaAtual = inicio + (destino - inicio) * e;
    thickPath.setAttribute("d", perfil(bordaAtual));
    if (k < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}
thickRange.addEventListener("input", () => {
  const m = MATERIAIS[thickRange.value];
  document.getElementById("thickName").textContent = m.nome;
  document.getElementById("thickDesc").textContent = m.desc;
  animarEspessura(m.borda);
});
thickPath.setAttribute("d", perfil(1));

/* ===================== Antes e depois ===================== */
document.querySelectorAll(".ba").forEach((ba) => {
  const r = ba.querySelector("input");
  r.addEventListener("input", () => ba.style.setProperty("--pos", r.value + "%"));
});

/* ===================== Transitions ===================== */
const CORES = [
  ["Cinza", "#4f5458"], ["Marrom", "#6e4526"], ["Verde-grafite", "#3d5243"], ["Âmbar", "#a8651f"],
  ["Ametista", "#5e3f8c"], ["Safira", "#244f96"], ["Rubi", "#8f1a2e"], ["Esmeralda", "#17694d"],
];
const swatches = document.getElementById("swatches");
const tint = document.getElementById("tint");
const tintLabel = document.getElementById("tintLabel");
let corAtual = 0, sol = false;

swatches.innerHTML = CORES.map(([n, c], i) =>
  `<button class="swatch" role="radio" aria-checked="${i === 0}" aria-label="${n}" title="${n}" style="background:${c}" data-i="${i}"></button>`).join("");

function aplicarTint() {
  const [n, c] = CORES[corAtual];
  tint.style.setProperty("--tint", c);
  tint.style.setProperty("--tint-op", sol ? 0.72 : 0.06);
  tintLabel.textContent = `${n} · ${sol ? "no sol" : "ambiente interno"}`;
}
swatches.addEventListener("click", (e) => {
  const b = e.target.closest(".swatch");
  if (!b) return;
  corAtual = Number(b.dataset.i);
  swatches.querySelectorAll(".swatch").forEach((s) => s.setAttribute("aria-checked", String(s === b)));
  if (!sol) { sol = true; marcarSol(); }
  aplicarTint();
});
function marcarSol() {
  document.querySelectorAll(".sun-toggle button").forEach((b) => b.classList.toggle("is-active", (b.dataset.sun === "1") === sol));
}
document.querySelectorAll(".sun-toggle button").forEach((b) => b.addEventListener("click", () => {
  sol = b.dataset.sun === "1";
  marcarSol();
  aplicarTint();
}));
aplicarTint();

/* ===================== Horário (fuso de Manaus) ===================== */
const HORARIOS = { 0: [], 1: [[8, 12], [13, 18]], 2: [[8, 12], [13, 18]], 3: [[8, 12], [13, 18]], 4: [[8, 12], [13, 18]], 5: [[8, 12], [13, 18]], 6: [[8, 12]] };
const INAUGURACAO = new Date("2026-11-07T08:00:00-04:00");

function agoraEmManaus() {
  const partes = new Intl.DateTimeFormat("en-US", { timeZone: "America/Manaus", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(new Date());
  const v = (t) => partes.find((p) => p.type === t).value;
  return { dia: { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[v("weekday")], hora: Number(v("hour")) + Number(v("minute")) / 60 };
}
function situacao() {
  if (new Date() < INAUGURACAO) return { aberto: false, texto: "Inauguração em 7 de novembro" };
  const { dia, hora } = agoraEmManaus();
  const faixa = HORARIOS[dia].find(([a, b]) => hora >= a && hora < b);
  if (faixa) return { aberto: true, texto: `Aberto agora · fecha às ${faixa[1]}h` };
  const hoje = HORARIOS[dia].find(([a]) => hora < a);
  if (hoje) return { aberto: false, texto: `Fechado · abre às ${hoje[0]}h` };
  const nomes = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  for (let i = 1; i <= 7; i++) {
    const d = (dia + i) % 7;
    if (HORARIOS[d].length) return { aberto: false, texto: `Fechado · abre ${i === 1 ? "amanhã" : nomes[d]} às ${HORARIOS[d][0][0]}h` };
  }
  return { aberto: false, texto: "Fechado" };
}
function atualizarStatus() {
  const { aberto, texto } = situacao();
  document.querySelectorAll("[data-status]").forEach((el) => {
    el.textContent = texto;
    el.classList.toggle("is-open", aberto);
    el.classList.toggle("is-closed", !aberto);
  });
  const dia = agoraEmManaus().dia;
  document.querySelectorAll(".hours tr").forEach((tr) => tr.classList.toggle("is-today", Number(tr.dataset.day) === dia));
}
atualizarStatus();
setInterval(atualizarStatus, 60000);

/* ===================== Animação ao rolar ===================== */
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((itens) => itens.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".section__head, .lens-card, .steps li, .treat, .compare, .thick, .tech__text, .gallery img, details, .pay").forEach((el) => {
    el.classList.add("reveal");
    obs.observe(el);
  });
}

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
ligarWhatsApp();
