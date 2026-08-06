// Dados extraídos da sua página "Legendas" (PT-BR).

// ====== CONFIG SUPABASE ======
// Troque pelos dados do SEU projeto Supabase (Project Settings > API).
const SUPABASE_URL = "https://fxcqyfcsmzuanculnkgl.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_1C328zUC3M0IEH9-Xu6lYg_U6tt7qy2";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const TABLE = "legendas";
// ==============================

// Busca todas as legendas adicionadas, salvas na nuvem (tabela "legendas")
async function loadCustomItems(){
  try{
    const { data, error } = await supabaseClient
      .from(TABLE)
      .select("title,brand,type,caption")
      .order("created_at", { ascending: true });
    if(error) throw error;
    return Array.isArray(data) ? data : [];
  }catch(e){
    console.error("Erro ao carregar legendas do Supabase:", e);
    showToast("Não foi possível carregar as legendas salvas na nuvem.");
    return [];
  }
}

// Insere uma legenda nova na nuvem
async function insertCustomItem(item){
  const { error } = await supabaseClient.from(TABLE).insert([{
    title: item.title,
    brand: item.brand,
    type: item.type,
    caption: item.caption
  }]);
  if(error) throw error;
}

// Insere várias legendas de uma vez (usado na importação de JSON)
async function bulkInsertCustomItems(items){
  const rows = items.map(it => ({
    title: it.title, brand: it.brand, type: it.type, caption: it.caption
  }));
  const { error } = await supabaseClient.from(TABLE).insert(rows);
  if(error) throw error;
}

const BASE_ITEMS = [
  {
    title: "Porsche 911 (997) GT3",
    brand: "Porsche",
    type: "GT3",
    caption:
`Lançada em 2006, a Porsche 911 997 GT3 chegou para resgatar a alma pura dos 911 de competição. Não era apenas rápida, era honesta com uma tração traseira, câmbio manual e uma conexão direta com o asfalto que poucos carros conseguem oferecer. Até hoje, a 997 GT3 é considerada por muitos entusiastas como uma das melhores gerações da história do 911.
FICHA TÉCNICA
🔧Motor: 3.6 6 Cilindros boxer (Flat-6)
📈Potência: 415 cv
🔩Torque: 405 Nm
🏁Vel. Máxima: 310 km/h
🚦0-100Km/h: 4.3s
📅Fabricação: 2006 - 2009
🌐 Produção: Alemanha`
  },
  {
    title: "Porsche 911 (992) Carrera",
    brand: "Porsche",
    type: "Carrera",
    caption:
`Apresentada no final de 2018 no Porsche Experience Center em Los Angeles, a oitava geração do 911 (992) marcou uma evolução importante na história do modelo. A versão Carrera base chegou em 2019 como a porta de entrada para a linha, trazendo o motor 3.0 biturbo mais refinado, maior potência e um design mais moderno e largo em toda a gama.
FICHA TÉCNICA
🔧Motor: 3.0 6 Cilindros boxer (Flat-6) biturbo
📈Potência: 385 cv
🔩Torque: 450 Nm
🏁Vel. Máxima: 293 km/h
🚦0-100Km/h: 4.2s
📅Fabricação: 2019 - 20XX
🌐 Produção: Alemanha`
  },
  {
    title: "Porsche 911 (992) GT3 RS",
    brand: "Porsche",
    type: "GT3 RS",
    caption:
`Apresentada em 2022, a 992 GT3 RS elevou o conceito RS a outro patamar. Enquanto a 992 GT3 já era extrema, a versão RS foi desenvolvida com foco total em pista, usando mais de 250 horas no túnel de vento. O resultado é um monstro aerodinâmico com downforce recorde, sistema DRS inspirado na Fórmula 1 e o lendário motor 4.0 aspirado de alto giro.
FICHA TÉCNICA
🔧Motor: 4.0 6 Cilindros boxer (Flat-6)
📈Potência: 525 cv
🔩Torque: 465 Nm
🏁Vel. Máxima: 296 km/h
🚦0-100Km/h: 3.2s
📅Fabricação: 2022 - 20XX
🌐 Produção: Alemanha`
  },
  {
    title: "BMW M3 (F80)",
    brand: "BMW",
    type: "M3",
    caption:
`Lançada em 2014, a BMW M3 F80 marcou uma grande mudança na história do modelo: foi a primeira M3 a usar motor biturbo de 6 cilindros em linha, abandonando o V8 aspirado da geração anterior (E90/E92). Produzida apenas na carroceria sedã (o cupê passou a se chamar M4 F82), ela trouxe mais potência, torque farto em baixas rotações e excelente dirigibilidade.
FICHA TÉCNICA
🔧Motor: 3.0 6 Cilindros em linha (Inline-6)
📈Potência: 431 cv
🔩Torque: 550 Nm
🏁Vel. Máxima: 250 km/h (LIMITADA)
🚦0-100Km/h: 4.0s
📅Fabricação: 2014 - 2018
🌐 Produção: Alemanha`
  },
  {
    title: "BMW M3 (G80)",
    brand: "BMW",
    type: "M3",
    caption:
`Lançada em 2020 e chegada ao mercado em 2021, a G80 representa a sétima geração da M3. Foi a primeira a oferecer tração integral M xDrive (com modo 100% traseiro), interior totalmente digitalizado e um design polêmico pela enorme grade frontal. Equipada com o evoluído motor S58 biturbo, ela trouxe mais potência, torque farto em baixas rotações e tecnologia avançada, tornando-se mais rápida e versátil que a F80.
FICHA TÉCNICA
🔧Motor: 3.0 6 Cilindros em linha (Inline-6) biturbo
📈Potência: 510 cv
🔩Torque: 650 Nm
🏁Vel. Máxima: 290 km/h
🚦0-100Km/h: 3.5s
📅Fabricação: 2021 - 20XX
🌐 Produção: Alemanha`
  },
  {
    title: "BMW M3 (E46)",
    brand: "BMW",
    type: "M3",
    caption:
`Lançada em 2000, a BMW M3 E46 é considerada por muitos entusiastas como uma das melhores M3 de todos os tempos. Ela marcou o retorno ao conceito leve e de alto giro, com o lendário motor S54 3.2 aspirado que vai até 8.000 rpm e entrega um som viciante.
FICHA TÉCNICA
🔧Motor: 3.2 6 Cilindros em linha (Inline-6)
📈Potência: 343 cv
🔩Torque: 365 Nm
🏁Vel. Máxima: 250 km/h (LIMITADA)
🚦0-100Km/h: 5.2s
📅Fabricação: 2000 - 2006
🌐 Produção: Alemanha`
  },
  {
    title: "Toyota Supra (MK5)",
    brand: "Toyota",
    type: "Supra",
    caption:
`Após 17 anos de ausência desde o fim da icônica A80 (MK4), a Toyota GR Supra MK5 (A90) voltou em 2019 como um projeto em parceria com a BMW. Desenvolvida pela Toyota Gazoo Racing, ela compartilha a plataforma com o BMW Z4, mas recebeu ajustes específicos da Toyota para entregar uma dirigibilidade mais esportiva e divertida.
FICHA TÉCNICA
🔧Motor: 3.0 6 Cilindros em linha (Inline-6) turbo
📈Potência: 382 cv
🔩Torque: 550 Nm
🏁Vel. Máxima: 260 km/h (LIMITADA)
🚦0-100Km/h: 4.3s
📅Fabricação: 2019 - 2026
🌐 Produção: Japão`
  },
  {
    title: "Audi R8 V10",
    brand: "Audi",
    type: "R8",
    caption:
`O som do V10 aspirado de alto giro é considerado um dos melhores da história dos supercarros. Produzida até 2024, a R8 V10 Performance foi a última versão com motor a combustão da linha, encerrando uma era gloriosa de supercarros analógicos com motor central e tração quattro. Ela se tornou um ícone moderno, admirada pela combinação de desempenho brutal, usabilidade diária e emoção ao volante.
FICHA TÉCNICA
🔧Motor: 5.2 V10 Aspirado (FSI)
📈Potência: 620 cv
🔩Torque: 580 Nm
🏁Vel. Máxima: 331 km/h
🚦0-100Km/h: 3.1s
📅Fabricação: 2019 - 2024
🌐 Produção: Alemanha`
  },
  {
    title: "BMW M3 (E92)",
    brand: "BMW",
    type: "M3",
    caption:
`Lançada em 2007, a BMW M3 E92 é considerada por muitos como uma das M3 mais bonitas e divertidas de guiar. Ela marcou o auge da era aspirada da linha M3. A versão M3 GTS (2010) se tornou um ícone de pista, com redução de peso, mais potência e visual ainda mais agressivo. Até hoje a E92 é uma das gerações mais valorizadas pelos entusiastas por sua pureza mecânica e personalidade forte.
FICHA TÉCNICA
🔧Motor: 4.0 V8 Aspirado (S65)
📈Potência: 420 cv
🔩Torque: 400 Nm
🏁Vel. Máxima: 250 km/h (LIMITADA)
🚦0-100Km/h: 4.6s
📅Fabricação: 2007 - 2013
🌐 Produção: Alemanha`
  },
  {
    title: "McLaren P1",
    brand: "McLaren",
    type: "P1",
    caption:
`Desenvolvida com tecnologia de Fórmula 1 (aerodinâmica ativa, IPAS, chassis de carbono), a P1 foi feita para ser “o melhor carro de pista homologado para rua do mundo”. Até hoje é considerada uma das hypercars mais puras e emocionantes da década de 2010, com um som incrível do V8 e dirigibilidade excepcional.
FICHA TÉCNICA
🔧Motor: 3.8 litros V8 biturbo + motor elétrico
📈Potência: 903 cv
🔩Torque: 900 Nm
🏁Vel. Máxima: 350 km/h (Limitada)
🚦0-100Km/h: 2.8s
📅Fabricação: 2013 - 2015
🌐 Produção: Reino Unido`
  },
  {
    title: "Lamborghini Huracán (LP610)",
    brand: "Lamborghini",
    type: "Huracán",
    caption:
`Ao longo de 10 anos de produção, ganhou várias versões extremas (Performante, EVO, STO), cada vez mais focadas em pista, com enorme downforce e tecnologia derivada da Super Trofeo. Em 2024, a Huracán foi descontinuada, marcando o fim da era dos motores V10 naturalmente aspirados na Lamborghini, sendo substituída pelos modelos híbridos.
FICHA TÉCNICA
🔧Motor: 5.2 V10 naturalmente aspirado (L539)
📈Potência: 610 cv
🔩Torque: 550 Nm
🏁Vel. Máxima: 325 km/h
🚦0-100Km/h: 3.2s
📅Fabricação: 2014 - 2024
🌐 Produção: Itália`
  },
  {
    title: "BMW M4 (F82)",
    brand: "BMW",
    type: "M4",
    caption:
`Muito elogiada pela dirigibilidade, som do motor e equilíbrio, a M4 F82 (especialmente as versões Competition e GTS) se tornou uma das M cars mais apreciadas da era moderna. A GTS, com redução de peso, mais potência e visual de pista, é considerada uma das melhores M4 já feitas.
FICHA TÉCNICA
🔧Motor: 3.0 6 Cilindros em linha (Inline-6)
📈Potência: 431 cv
🔩Torque: 550 Nm
🏁Vel. Máxima: 250 km/h (LIMITADA)
🚦0-100Km/h: 4.1s
📅Fabricação: 2014 - 2020
🌐 Produção: Alemanha`
  },
  {
    title: "Nissan Skyline GT-T (ER34)",
    brand: "Nissan",
    type: "Skyline",
    caption:
`O Nissan Skyline ER34 é a versão sedã de quatro portas da geração R34 do Skyline, produzida entre 1998 e 2002 pela Nissan. Embora o GT-R coupê seja o modelo mais famoso da linhagem, o ER34 ganhou enorme reputação entre entusiastas de JDM, drift e tuning por combinar o motor RB25DET turbo, tração traseira e maior praticidade.
FICHA TÉCNICA
🔧Motor: 2.5 6 cilindros em linha (RB25DET)
📈Potência: 280 cv
🔩Torque: 343 Nm
🏁Vel. Máxima: 250 km/h (LIMITADA)
🚦0-100Km/h: 5.5s
📅Fabricação: 1998 - 2002
🌐 Produção: Japão`
  },
  {
    title: "Chevrolet Astra",
    brand: "Chevrolet",
    type: "Astra",
    caption:
`Lançada em 1994 como importada da Bélgica (conhecida como “Astra Belga”), a Chevrolet Astra ganhou popularidade real em 1998, quando começou a ser produzida no Brasil (geração G). Ele se tornou um dos hatches médios mais vendidos do país graças ao bom espaço, dirigibilidade agradável, motores confiáveis e opções de acabamento. As versões GSi e SS trouxeram um toque esportivo que conquistou os entusiastas.
FICHA TÉCNICA
🔧Motor: 2.0 4 cilindros em linha (Família II)
📈Potência: 140 cv
🔩Torque: 185 Nm
🏁Vel. Máxima: 195 km/h
🚦0-100Km/h: 9.5s
📅Fabricação: 1998 - 2011
🌐 Produção: Alemanha`
  },
  {
    title: "Porsche 911 (992) GT3",
    brand: "Porsche",
    type: "GT3",
    caption:
`Apresentada em 2021, a 992.1 GT3 representa o ápice da filosofia “purista” da linha GT3. Com o lendário motor 4.0 aspirado de alto giro (o mesmo da 991.2 GT3 RS), ela trouxe tecnologia de corrida para a rua, como a suspensão dianteira double wishbone e aerodinâmica avançada.
Mesmo sendo a “versão de rua” da família, ela é extremamente capaz na pista (voltas abaixo de 7 minutos no Nürburgring), mantendo ao mesmo tempo conforto suficiente para uso diário.
🔧Motor: 4.0 6 cilindros boxer (Flat-6)
📈Potência: 510 cv
🔩Torque: 470 Nm
🏁Vel. Máxima: 320 km/h
🚦0-100Km/h: 3.9s
📅Fabricação: 2021 - 2024
🌐 Produção: Alemanha`
  },
  {
    title: "Porsche 911 (992) GT3 Touring",
    brand: "Porsche",
    type: "GT3 Touring",
    caption:
`A 992 GT3 Touring surgiu em 2021 junto com a GT3 “asa-de-ganso” como uma opção mais discreta e elegante para quem queria o desempenho extremo sem o visual agressivo de pista.
A versão 992.2 (facelift) manteve o motor 4.0 aspirado icônico de 9.000 rpm, com ajustes para atender normas de emissões mais rígidas (leve perda de torque compensada por relações de marcha mais curtas).
FICHA TÉCNICA
🔧Motor: 4.0 6 cilindros boxer (Flat-6)
📈Potência: 510 cv
🔩Torque: 450 Nm
🏁Vel. Máxima: 311 km/h
🚦0-100Km/h: 3.4s
📅Fabricação: 2024 - 2026
🌐 Produção: Alemanha`
  },
  {
    title: "Porsche 911 (992) Turbo 50",
    brand: "Porsche",
    type: "Turbo",
    caption:
`Lançada para celebrar 50 anos do 911 Turbo (1974–2024), a Turbo 50 Years é uma edição especial baseada na Turbo S da geração 992.1. Com visual retrô-moderno (detalhes em ouro, emblemas especiais, opcionais como o Heritage Package com pintura Aventurine Green e detalhes clássicos), ela combina o desempenho brutal da Turbo S com um toque de nostalgia.
FICHA TÉCNICA
🔧Motor: 3.7 6 cilindros boxer (Flat-6) biturbo
📈Potência: 650 cv
🔩Torque: 800 Nm
🏁Vel. Máxima: 330 km/h
🚦0-100Km/h: 2.7s
📅Fabricação: 2024 - 2025
🌐 Produção: Alemanha`
  },
];

// Itens totais = base + itens adicionados (carregados da nuvem em init())
let ITEMS = [...BASE_ITEMS];

const $ = (id) => document.getElementById(id);

const norm = (s) => (s || "").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();

function uniqueSorted(arr){
  return [...new Set(arr)].sort((a,b)=>a.localeCompare(b,'pt-BR'));
}

function buildSelect(selectEl, label, values){
  selectEl.innerHTML = "";
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = label;
  selectEl.appendChild(opt0);
  values.forEach(v=>{
    const o = document.createElement("option");
    o.value = v;
    o.textContent = v;
    selectEl.appendChild(o);
  });
}

function parseDescription(caption){
  const lines = caption.split("\n").map(l=>l.trim()).filter(Boolean);
  // pega a 1ª linha que começa com "-" como descrição curta
  const desc = lines.find(l=>l.startsWith("- ")) || "";
  return desc.replace(/^- /,"");
}

function showToast(msg){
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(()=>t.classList.remove("show"), 1700);
}

function card(item){
  const el = document.createElement("div");
  el.className = "card";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = item.title;

  const meta = document.createElement("div");
  meta.className = "meta";
  meta.innerHTML = `
      <span class="pill"><b>Marca</b>: ${item.brand}</span>
      <span class="pill"><b>Tipo</b>: ${item.type}</span>
    `;

  const desc = document.createElement("div");
  desc.className = "desc";
  desc.textContent = parseDescription(item.caption);

  const det = document.createElement("details");
  det.innerHTML = `
      <summary>Ver legenda completa</summary>
      <pre></pre>
    `;
  det.querySelector("pre").textContent = item.caption;

  const actions = document.createElement("div");
  actions.className = "actions";

  const copy = document.createElement("button");
  copy.textContent = "Copiar legenda";
  copy.onclick = async () => {
    try{
      await navigator.clipboard.writeText(item.caption);
      showToast("Copiado para a área de transferência ✓");
    }catch(e){
      // fallback
      const ta = document.createElement("textarea");
      ta.value = item.caption;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      showToast("Copiado (modo compatibilidade) ✓");
    }
  };

  const copyTitle = document.createElement("button");
  copyTitle.className = "ghost";
  copyTitle.textContent = "Copiar só o título";
  copyTitle.onclick = async () => {
    await navigator.clipboard.writeText(item.title);
    showToast("Título copiado ✓");
  };

  actions.appendChild(copy);
  actions.appendChild(copyTitle);

  el.appendChild(title);
  el.appendChild(meta);
  el.appendChild(desc);
  el.appendChild(det);
  el.appendChild(actions);
  return el;
}

function apply(){
  const q = norm($("q").value);
  const brand = $("brand").value;
  const type = $("type").value;

  const filtered = ITEMS.filter(it=>{
    if (brand && it.brand !== brand) return false;
    if (type && it.type !== type) return false;
    if (!q) return true;
    const hay = norm([it.title,it.brand,it.type,it.caption].join(" "));
    return hay.includes(q);
  });

  $("grid").innerHTML = "";
  filtered.forEach(it => $("grid").appendChild(card(it)));
  $("count").textContent = filtered.length;
}

function openModal(){
  $("modal").style.display = "block";
}
function closeModal(){
  $("modal").style.display = "none";
  $("fTitle").value="";
  $("fBrand").value="";
  $("fType").value="";
  $("fNotes").value="";
  $("fCaption").value="";
  $("jsonBox").style.display = "none";
  $("jsonBox").value = "";
}

function refreshFilters(){
  buildSelect($("brand"), "Marca (todas)", uniqueSorted(ITEMS.map(i=>i.brand)));
  buildSelect($("type"), "Tipo (todos)", uniqueSorted(ITEMS.map(i=>i.type)));
}

function setupHeaderScroll(){
  const header = document.querySelector('header');
  let lastScroll = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScroll && currentScroll > 80) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }, { passive: true });
}

async function init(){
  showToast("Carregando legendas da nuvem...");
  const custom = await loadCustomItems();
  ITEMS = [...BASE_ITEMS, ...custom];

  refreshFilters();

  $("q").addEventListener("input", apply);
  $("brand").addEventListener("change", apply);
  $("type").addEventListener("change", apply);

  $("add").addEventListener("click", openModal);
  $("closeModal").addEventListener("click", closeModal);
  $("modal").addEventListener("click", (e)=>{ if(e.target === $("modal")) closeModal(); });

  $("save").addEventListener("click", async ()=>{
    const title = $("fTitle").value.trim();
    const brand = $("fBrand").value.trim();
    const type = $("fType").value.trim();
    const notes = $("fNotes").value.trim();
    const caption = $("fCaption").value.trim();

    if(!title || !brand || !type || !caption){
      showToast("Preencha Título, Marca, Tipo e Legenda.");
      return;
    }

    const item = { title, brand, type, caption: caption + (notes ? `\n\n${notes}` : "") };

    const saveBtn = $("save");
    saveBtn.disabled = true;
    try{
      await insertCustomItem(item);
      ITEMS.push(item);
      refreshFilters();
      apply();
      closeModal();
      showToast("Legenda adicionada e salva na nuvem ✓");
    }catch(e){
      console.error(e);
      showToast("Erro ao salvar na nuvem. Verifique a conexão e tente de novo.");
    }finally{
      saveBtn.disabled = false;
    }
  });

  $("exportJson").addEventListener("click", async ()=>{
    try{
      const custom = await loadCustomItems();
      $("jsonBox").style.display = "block";
      $("jsonBox").value = JSON.stringify(custom, null, 2);
      $("jsonBox").focus();
      $("jsonBox").select();
      showToast("JSON pronto para copiar");
    }catch(e){
      showToast("Erro ao exportar.");
    }
  });

  $("importJson").addEventListener("click", async ()=>{
    $("jsonBox").style.display = "block";
    const raw = $("jsonBox").value.trim();
    if(!raw){
      showToast("Cole o JSON no campo e clique em Importar de novo.");
      return;
    }
    try{
      const parsed = JSON.parse(raw);
      if(!Array.isArray(parsed)) throw new Error("Formato inválido");

      // adiciona os itens do JSON à nuvem (não apaga o que já existe)
      await bulkInsertCustomItems(parsed);

      const custom = await loadCustomItems();
      ITEMS = [...BASE_ITEMS, ...custom];

      refreshFilters();
      apply();
      showToast("Importado para a nuvem ✓");
    }catch(e){
      console.error(e);
      showToast("JSON inválido ou erro ao importar.");
    }
  });

  $("reset").addEventListener("click", ()=>{
    $("q").value="";
    $("brand").value="";
    $("type").value="";
    apply();
  });

  apply();
  setupHeaderScroll();
}

init();