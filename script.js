const projetos = [
  {
    nome: "Automação total da planta (CLP + IHM)",
    desc: "Sistema completo de automação da planta, com controle por CLPs e IHMs, garantindo operação integrada, supervisão e maior eficiência operacional.",
    imagens: ["dolamia2.jpg","dolamia5.jpg","dolamia6.jpg","dolamia7.jpg","dolamia8.jpg"]
  },
  {
    nome: "Automação de planta de calcário",
    desc: "Sistema de automação para planta completa com 6 moinhos e 12 motores, integrando controle, operação e supervisão do processo.",
    imagens: ["para.jpg","para1.jpg","para2.jpg","para3.jpg","para4.jpg","para8.jpg","para9.jpg","para10.jpg"]
  },
  {
    nome: "Automação com supervisório remoto",
    desc: "Painel de automação com IHM e supervisão remota, permitindo acompanhamento e controle do processo diretamente pelo celular.",
    imagens: ["automaçãominas.jpg","automaçãominas1.jpg","automaçãominas2.jpg"]
  },
  {
    nome: "Automação para acionamento do VSI",
    desc: "Sistema automatizado para controle do VSI, com integração e monitoramento do equipamento.",
    imagens: ["vsi.jpg","vsia.jpg"]
  },
  {
    nome: "Painel de acionamento do primário",
    desc: "Painel de comando e acionamento do sistema primário da britagem, com organização e padronização elétrica.",
    imagens: ["alimentado.jpg","alimentador1.jpg","alimentador2.jpg","alimentador3.jpg","alimentador4.jpg","alimentador5.jpg","alimentador6.jpg"]
  },
  {
    nome: "Painel de britagem",
    desc: "Painel completo para operação do sistema de britagem, com estrutura elétrica robusta e confiável.",
    imagens: ["alusa.jpg","alusa1.jpg","alusa2.jpg","alusa3.jpg","alusa4.jpg","alusa5.jpg","alusa6.jpg","alusa7.jpg","alusa8.jpg","alusa9.jpg","alusa10.jpg","alusa11.jpg","alusa12.jpg","alusa13.jpg","alusa14.jpg","alusa15.jpg","alusa16.jpg","alusa17.jpg"]
  },
  {
    nome: "Correção de fator de potência",
    desc: "Painel de banco de capacitores para melhoria da eficiência energética e correção do fator de potência.",
    imagens: ["capacitor.jpg","capacitor1.jpg"]
  },
  {
    nome: "Painel de britagem - Chapecó",
    desc: "Sistema de acionamento para britagem com organização elétrica e confiabilidade operacional.",
    imagens: ["chapeco.jpg","chapeco1.jpg","chapeco3.jpg","chapeco5.jpg","chapeco6.jpg","chapeco7.jpg","chapeco8.jpg","chapeco9.jpg"]
  },
  {
    nome: "Painel para dobradeira",
    desc: "Painel de comando para máquina dobradeira de escapamento, com controle e acionamento dedicado.",
    imagens: ["dobradeira.jpg","dobradeira1.jpg"]
  },
  {
    nome: "Painel de acionamento do primário",
    desc: "Painel industrial para acionamento de sistema primário, com foco em segurança e desempenho.",
    imagens: ["getel1.jpg","getel3.jpg","getel6.jpg","getel8.jpg","getel9.jpg","getel10.jpg","getel11.jpg","getel12.jpg","getel13.jpg"]
  },
  {
    nome: "Unidade hidráulica (retrofit e travamento)",
    desc: "Reforma e retrofit de unidade hidráulica com melhorias no sistema de travamento e operação.",
    imagens: ["hidraulica.jpg","hidraulica1.jpg","hidraulica2.jpg","hidraulica3.jpg","hidraulica4.jpg","hidraulica5.jpg","hidraulica6.jpg","hidraulica7.jpg","hidraulica8.jpg","hidraulica9.jpg"]
  },
  {
    nome: "Lubrificação industrial",
    desc: "Sistema de lubrificação com reforma e melhorias para garantir eficiência e durabilidade dos equipamentos.",
    imagens: ["lubrificacao.jpg","lubrificacao1.jpg","lubrificacao2.jpg","lubrificacao3.jpg"]
  },
  {
    nome: "Reforma de cabine de controle",
    desc: "Reforma completa da cabine de controle da britagem, incluindo atualização elétrica e organização do sistema.",
    imagens: ["reforma.jpg","reforma1.jpg","reforma2.jpg","reforma3.jpg","reforma4.jpg","reforma5.jpg","reforma6.jpg","reforma7.jpg","reforma8.jpg","reforma9.jpg","reforma10.jpg"]
  },
  {
    nome: "Painel de alarme do britador",
    desc: "Sistema de alarme e acionamento para monitoramento e segurança do britador.",
    imagens: ["alarme.jpg","alarme1.jpg","alarme2.jpg"]
  },
  {
    nome: "Controle de unidade hidráulica",
    desc: "Painel de controle para unidade hidráulica com comando dedicado e operação segura.",
    imagens: ["lubrificação2.jpg","lubrificaçãop1.jpg"]
  },
  {
    nome: "Partida direta de bomba",
    desc: "Painel de partida direta para bomba de água com controle automático e manual.",
    imagens: ["paridadiretabombade3cv.jpg","partidadiretabombade3cv1.jpg"]
  }
];


const container = document.getElementById("lista-projetos");

projetos.forEach((projeto, index) => {
  const capa = projeto.imagens[0];
  const fotos = projeto.imagens.map(img => `
    <div class="foto-card">
      <img src="imagens/${img}" alt="${projeto.nome}">
    </div>
  `).join("");

  container.innerHTML += `
    <article class="card projeto-bloco">
      <div class="projeto-capa">
        <img src="imagens/${capa}" alt="${projeto.nome}">
      </div>

      <div class="projeto-conteudo">
        <div class="projeto-topo">
          <h3>${projeto.nome}</h3>
          <p>${projeto.desc}</p>
        </div>

        <div class="projeto-acoes">
          <span>${projeto.imagens.length} foto${projeto.imagens.length > 1 ? "s" : ""}</span>
          <button class="ver-fotos" type="button" data-projeto="${index}">Ver fotos</button>
        </div>

        <div class="fotos-projeto">
          ${fotos}
        </div>
      </div>
    </article>
  `;
});

/* MENU MOBILE */
const menuMobile = document.getElementById("menuMobile");
const menuSite = document.getElementById("menuSite");

if (menuMobile && menuSite) {
  menuMobile.addEventListener("click", () => {
    menuSite.classList.toggle("ativo");
  });

  menuSite.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => menuSite.classList.remove("ativo"));
  });
}

/* ABRIR/FECHAR FOTOS DO PROJETO */
document.addEventListener("click", function(event) {
  const botao = event.target.closest(".ver-fotos");

  if (botao) {
    const projeto = botao.closest(".projeto-bloco");
    projeto.classList.toggle("aberto");
    botao.textContent = projeto.classList.contains("aberto") ? "Ocultar fotos" : "Ver fotos";
  }
});

/* ABRIR IMAGEM EM TELA CHEIA */
document.addEventListener("click", function(event) {
  const imagem = event.target.closest(".foto-card img, .projeto-capa img");

  if (imagem) {
    const lightbox = document.getElementById("lightbox");
    const imagemLightbox = document.getElementById("imagemLightbox");

    imagemLightbox.src = imagem.src;
    lightbox.classList.add("ativo");
    lightbox.setAttribute("aria-hidden", "false");
  }
});

/* FECHAR LIGHTBOX */
function fecharLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("ativo");
  lightbox.setAttribute("aria-hidden", "true");
}

document.getElementById("fecharLightbox").addEventListener("click", fecharLightbox);

document.getElementById("lightbox").addEventListener("click", function(event) {
  if (event.target.id === "lightbox") fecharLightbox();
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") fecharLightbox();
});

/* WHATSAPP FLUTUANTE */
const abrirWhatsapp = document.getElementById("abrirWhatsapp");
const whatsappMenu = document.getElementById("whatsappMenu");

if (abrirWhatsapp && whatsappMenu) {
  abrirWhatsapp.addEventListener("click", () => {
    whatsappMenu.classList.toggle("ativo");
  });
}

/* ESCONDER CABEÇALHO INTEIRO AO ROLAR PARA BAIXO */
const topoSite = document.querySelector(".topo");
let ultimaPosicaoScroll = window.pageYOffset || document.documentElement.scrollTop;

function ajustarCabecalho() {
  if (!topoSite) return;

  const posicaoAtual = window.pageYOffset || document.documentElement.scrollTop;

  if (posicaoAtual <= 20) {
    topoSite.classList.remove("header-escondido");
    topoSite.classList.add("header-visivel");
    ultimaPosicaoScroll = posicaoAtual;
    return;
  }

  if (posicaoAtual > ultimaPosicaoScroll && posicaoAtual > 120) {
    topoSite.classList.add("header-escondido");
    topoSite.classList.remove("header-visivel");
  } else if (posicaoAtual < ultimaPosicaoScroll) {
    topoSite.classList.remove("header-escondido");
    topoSite.classList.add("header-visivel");
  }

  ultimaPosicaoScroll = Math.max(posicaoAtual, 0);
}

window.addEventListener("scroll", ajustarCabecalho, { passive: true });
ajustarCabecalho();
