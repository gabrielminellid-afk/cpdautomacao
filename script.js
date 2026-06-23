const WHATSAPP_CPD = "5519991422109";
const EMAIL_CPD = "cpdautomacao@outlook.com.br";
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function encodePath(path){ return path.split('/').map(encodeURIComponent).join('/'); }
function imgBase(base, alt="") { return `<img data-src-base="${base}" alt="${alt}">`; }
function resolveImage(img){
  const base = img.dataset.srcBase;
  if(!base || img.dataset.resolved) return;
  img.dataset.resolved = "1";
  let index = 0;
  const tryNext = () => {
    if(index >= EXTENSIONS.length){
      const parent = img.parentElement;
      img.remove();
      if(parent && !parent.querySelector('.missing-box')){
        const div = document.createElement('div');
        div.className = 'missing-box';
        div.textContent = `Imagem aguardando arquivo: ${base}`;
        parent.appendChild(div);
      }
      return;
    }
    img.src = encodePath(base + EXTENSIONS[index]);
    index++;
  };
  img.onerror = tryNext;
  tryNext();
}
function resolveAll(scope=document){ scope.querySelectorAll('img[data-src-base]').forEach(resolveImage); }
function setImageBase(img, base, alt=""){
  if(!img || !base) return;
  img.dataset.srcBase = base;
  img.dataset.resolved = "";
  if(alt) img.alt = alt;
  img.onerror = null;
  img.removeAttribute('src');
  const missing = img.parentElement?.querySelector('.missing-box');
  if(missing) missing.remove();
  resolveImage(img);
}

const destaques = [
  {
    titulo: "Relatórios e monitoramento online",
    categoria: "Destaque 01",
    pasta: "relatorio-monitoramento-online",
    desc: "Supervisão remota com gráficos, históricos, indicadores e relatórios técnicos para acompanhamento das aplicações industriais em tempo real.",
    imagens: ["automacao-minas", "relatorio1", "relatorio2", "vsia"]
  },
  {
    titulo: "IHM personalizada sob medida",
    categoria: "Destaque 02",
    pasta: "ihm-personalizada",
    desc: "Desenvolvimento de telas interativas, modernas e intuitivas, criadas conforme a necessidade do processo e do operador.",
    imagens: ["ihm1", "ihm2", "ihm3", "ihm4", "ihm5"]
  },
  {
    titulo: "Pré-montagem e pré-visualização técnica",
    categoria: "Destaque 03",
    pasta: "pre-montagem",
    desc: "Planejamento visual do quadro antes da execução, permitindo validação técnica, organização dos componentes e montagem mais precisa.",
    imagens: ["desenho"]
  }
];

const projetos = [
  {nome:"Painel de acionamento do alimentador", categoria:"Painéis", pasta:"alimentador", imagens:["alimentador","alimentador1","alimentador4","alimentador6"], desc:"Painel de acionamento e controle do alimentador, com montagem elétrica organizada, proteção, comando e estrutura preparada para operação industrial."},
  {nome:"Painéis industriais e acionamentos", categoria:"Painéis", pasta:"alusa", imagens:["alusa1","alusa2","alusa3","alusa9","alusa13"], desc:"Painéis industriais para comando e controle de equipamentos, com foco em segurança, padronização elétrica e confiabilidade operacional."},
  {nome:"Automação com supervisão remota", categoria:"Automação", pasta:"automacao-minas", imagens:["automacao-minas","automacao-minas1","automacao-minas2"], desc:"Sistema de automação com supervisão remota, visualização de dados e apoio à manutenção em tempo real."},
  {nome:"Automação e painéis para britagem", categoria:"Automação", pasta:"chapeco", imagens:["chapeco3","chapeco5","chapeco6","chapeco7"], desc:"Automação e painéis aplicados em sistema de britagem, com comando elétrico, acionamentos e acompanhamento técnico em campo."},
  {nome:"Correção de fator de potência", categoria:"Painéis", pasta:"correcao-fator-potencia", imagens:["capacitor","capacitor1"], desc:"Painel para correção de fator de potência, melhoria da eficiência energética, redução de perdas e adequação da instalação elétrica."},
  {nome:"Painéis e sistemas de acionamento", categoria:"Painéis", pasta:"getel", imagens:["getel1","getel9","getel12"], desc:"Painéis e sistemas de acionamento industrial desenvolvidos para operação segura, organizada e confiável em ambiente produtivo."},
  {nome:"Reforma de unidades de lubrificacao", categoria:"Hidráulica", pasta:"lubrificacao", imagens:["lubrificacao1","lubrificacao2","lubrificacao3","lubrificacao11","lubrificacaop1"], desc:"Reforma, montagem e manutenção de unidades de lubrificacao industrial, com foco em confiabilidade e continuidade operacional."},
  {nome:"Montagem de quadro e manutenção do equipamento", categoria:"Hidráulica", pasta:"montagem-quadro-manutencao-equipamento", imagens:["hidraulicaelubrificacao","hidraulicaelubrificacao1"], desc:"Montagem de quadro de comando e manutenção integrada do equipamento, unindo elétrica, hidráulica e automação para funcionamento seguro em campo."},
  {nome:"Partida e controle dos moinhos", categoria:"Automação", pasta:"partida-moinhos", imagens:["para","para1","para2","para3","para4","para8","para9","para10"], desc:"Sistema de partida, acionamento e controle dos moinhos, com painéis industriais, supervisão e operação estruturada para o processo produtivo."},
  {nome:"Reforma e retrofit de CCM", categoria:"Retrofit", pasta:"reforma-ccm", imagens:["reforma1","reforma3","reforma4","reforma5","reforma6","reforma7","reforma8","reforma9","reforma10"], desc:"Reforma e retrofit de CCMs e painéis industriais, com reorganização elétrica, substituição de componentes e modernização do sistema."},
  {nome:"Unidades hidráulicas de travamento", categoria:"Hidráulica", pasta:"unidade-travamento", imagens:["travamento1","travamento2","travamento3"], desc:"Reforma, manutenção e suporte em unidades hidráulicas de travamento, com diagnóstico técnico, melhorias no sistema e atendimento em campo."}
];

function pathOf(item, name){ return `${item.pasta}/${name}`; }

function renderHighlights(){
  const grid = document.getElementById('highlightGrid');
  if(!grid) return;
  grid.innerHTML = destaques.map((item, idx) => {
    const cover = pathOf(item, item.imagens[0]);
    const minis = item.imagens.map(img => `<button type="button" data-open="${pathOf(item,img)}" aria-label="Abrir ${item.titulo}">${imgBase(pathOf(item,img), item.titulo)}</button>`).join('');
    return `<article class="highlight-card reveal">
      <button class="highlight-media" type="button" data-open="${cover}">${imgBase(cover, item.titulo)}</button>
      <div class="highlight-body"><small>${item.categoria}</small><h3>${item.titulo}</h3><p>${item.desc}</p><div class="mini-gallery">${minis}</div></div>
    </article>`;
  }).join('');
  resolveAll(grid);
}

function renderFilters(){
  const area = document.getElementById('filters');
  if(!area) return;
  const cats = ['Todos', ...new Set(projetos.map(p=>p.categoria))];
  area.innerHTML = cats.map((cat,i)=>`<button class="filter-btn ${i===0?'active':''}" data-filter="${cat}" type="button">${cat}</button>`).join('');
}

function setupHeroRotator(){
  const card = document.querySelector('.hero-card-rotator');
  if(!card) return;

  const img = card.querySelector('img[data-src-base]');
  const labelTitle = card.querySelector('span');
  const labelText = card.querySelector('strong');

  const slides = [
    {
      titulo: 'IHM sob medida',
      subtitulo: 'Telas interativas, intuitivas e personalizadas para o processo',
      base: 'ihm-personalizada/ihm1',
      alt: 'IHM personalizada CPD'
    },
    {
      titulo: 'Monitoramento remoto',
      subtitulo: 'Dados, relatórios e histórico online da aplicação',
      base: 'relatorio-monitoramento-online/relatorio2',
      alt: 'Monitoramento remoto CPD'
    },
    {
      titulo: 'Pré-montagem técnica',
      subtitulo: 'Pré-visualização técnica do quadro antes da montagem',
      base: 'pre-montagem/desenho',
      alt: 'Pré-montagem técnica CPD'
    }
  ];

  let index = 0;
  const update = () => {
    const item = slides[index];
    setImageBase(img, item.base, item.alt);
    card.dataset.open = item.base;
    if(labelTitle) labelTitle.textContent = item.titulo;
    if(labelText) labelText.textContent = item.subtitulo;
  };

  update();
  setInterval(() => {
    card.classList.add('is-switching');
    setTimeout(() => {
      index = (index + 1) % slides.length;
      update();
      card.classList.remove('is-switching');
    }, 260);
  }, 3600);
}

function renderProjects(){
  const grid = document.getElementById('projectGrid');
  if(!grid) return;
  grid.innerHTML = projetos.map((p, idx)=>{
    const cover = pathOf(p,p.imagens[0]);
    const thumbs = p.imagens.map(img=>`<button type="button" data-open="${pathOf(p,img)}">${imgBase(pathOf(p,img),p.nome)}</button>`).join('');
    return `<article class="project-card reveal" data-category="${p.categoria}">
      <button class="project-media" type="button" data-open="${cover}">${imgBase(cover,p.nome)}<span class="project-category">${p.categoria}</span></button>
      <div class="project-body"><h3>${p.nome}</h3><p>${p.desc}</p><div class="project-actions"><span>${p.imagens.length} foto${p.imagens.length>1?'s':''}</span><button type="button" class="toggle-gallery">Ver fotos</button></div></div>
      <div class="gallery-inline">${thumbs}</div>
    </article>`;
  }).join('');
  resolveAll(grid);
}

function setupFilters(){
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card=>card.classList.toggle('hidden', f !== 'Todos' && card.dataset.category !== f));
    });
  });
}

function setupMenu(){
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menuSite');
  if(toggle && menu){ toggle.addEventListener('click',()=>menu.classList.toggle('active')); menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('active'))); }
  const header = document.querySelector('.site-header');
  const update = () => header && header.classList.toggle('scrolled', window.scrollY > 20);
  update(); window.addEventListener('scroll', update, {passive:true});
}

function setupReveal(){
  const els = document.querySelectorAll('.reveal');
  if(!els.length) return;
  const io = new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('visible'); io.unobserve(e.target);} }),{threshold:.12});
  els.forEach(el=>io.observe(el));
}

function setupGallery(){
  document.addEventListener('click', e=>{
    const toggle = e.target.closest('.toggle-gallery');
    if(toggle){ const card = toggle.closest('.project-card'); card.classList.toggle('open'); toggle.textContent = card.classList.contains('open') ? 'Ocultar fotos' : 'Ver fotos'; return; }
    const open = e.target.closest('[data-open]');
    if(open){ openLightbox(open.dataset.open); }
  });
  document.getElementById('closeLightbox')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox')?.addEventListener('click', e=>{ if(e.target.id==='lightbox') closeLightbox(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeLightbox(); });
}
function openLightbox(base){
  const box = document.getElementById('lightbox'); const img = document.getElementById('lightboxImg');
  if(!box || !img) return;
  img.dataset.srcBase = base; img.dataset.resolved = ''; img.onerror = null; resolveImage(img);
  box.classList.add('active'); box.setAttribute('aria-hidden','false');
}
function closeLightbox(){ const box=document.getElementById('lightbox'); const img=document.getElementById('lightboxImg'); if(box&&img){box.classList.remove('active'); box.setAttribute('aria-hidden','true'); img.removeAttribute('src');}}

function formDataText(){
  const form = document.getElementById('contactForm'); const fd = new FormData(form);
  const nome = fd.get('nome')||''; const email=fd.get('email')||''; const tel=fd.get('telefone')||''; const assunto=fd.get('assunto')||''; const msg=fd.get('mensagem')||'';
  return {nome,email,tel,assunto,msg, body:`Olá, sou ${nome}. Vim pelo site da CPD Automação Industrial.\n\nE-mail: ${email}\nTelefone: ${tel || 'não informado'}\nAssunto: ${assunto}\n\nMensagem:\n${msg}`};
}
function validateForm(){ const form=document.getElementById('contactForm'); if(!form.checkValidity()){form.reportValidity(); return false;} return true; }
function setupContact(){
  document.getElementById('sendWhatsapp')?.addEventListener('click',()=>{ if(!validateForm()) return; const d=formDataText(); window.open(`https://wa.me/${WHATSAPP_CPD}?text=${encodeURIComponent(d.body)}`,'_blank','noopener'); });
  document.getElementById('sendEmail')?.addEventListener('click',()=>{ if(!validateForm()) return; const d=formDataText(); const subject = `Contato pelo site CPD - ${d.assunto}`; window.location.href = `mailto:${EMAIL_CPD}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(d.body)}`; });
}

renderHighlights(); renderFilters(); renderProjects(); resolveAll(); setupHeroRotator(); setupFilters(); setupMenu(); setupReveal(); setupGallery(); setupContact();
