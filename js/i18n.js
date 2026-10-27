// CIELY — traduções do site (Português / English / Español)
//
// COMO FUNCIONA
// - Cada texto traduzível no HTML tem um atributo data-i18n="chave"
//   (ou data-i18n-html="chave" quando o texto tem HTML dentro, como <em>;
//    ou data-i18n-attr="atributo:chave" para atributos como aria-label e content).
// - Os textos de cada chave ficam no dicionário TRANSLATIONS logo abaixo.
// - O texto em português continua escrito no próprio HTML (é o "plano B"
//   caso o JavaScript esteja desligado).
// - O idioma escolhido fica salvo no navegador (localStorage) e vale
//   para todas as páginas. Também dá para forçar com ?lang=en ou ?lang=es.
//
// PARA EDITAR UM TEXTO: procure a chave abaixo e altere pt / en / es.
// PARA ADICIONAR UM TEXTO NOVO: crie a chave aqui e use data-i18n="chave" no HTML.
//
// Este arquivo deve ser carregado no FIM do <body>, antes do script.js.

(function () {
  "use strict";

  var DEFAULT_LANG = "pt";
  var LANGS = ["pt", "en", "es"];
  var HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };
  var STORAGE_KEY = "lang";

  var TRANSLATIONS = {
    "nav.home": { pt: "Início", en: "Home", es: "Inicio" },
    "nav.services": { pt: "Serviços", en: "Services", es: "Servicios" },
    "nav.process": { pt: "Como funciona", en: "How it works", es: "Cómo funciona" },
    "nav.cases": { pt: "Projetos", en: "Projects", es: "Proyectos" },
    "nav.contact": { pt: "Contato", en: "Contact", es: "Contacto" },
    "aria.theme": { pt: "Alternar tema claro/escuro", en: "Toggle light/dark theme", es: "Alternar tema claro/oscuro" },
    "aria.menu": { pt: "Abrir menu", en: "Open menu", es: "Abrir menú" },
    "aria.lang": { pt: "Idioma", en: "Language", es: "Idioma" },
    "footer.title": { pt: "Vamos encontrar o seu norte.", en: "Let's find your true north.", es: "Encontremos tu norte." },
    "footer.sub.index": { pt: "Me conte um pouco sobre a sua marca e o que você já tentou. Eu respondo com os próximos passos.", en: "Tell me a bit about your brand and what you've already tried. I'll reply with the next steps.", es: "Cuéntame un poco sobre tu marca y lo que ya has intentado. Te responderé con los próximos pasos." },
    "footer.sub.pages": { pt: "Se a marca precisa de mais clareza, consistência e presença, posso ajudar a transformar isso em uma direção sólida.", en: "If your brand needs more clarity, consistency and presence, I can help turn that into a solid direction.", es: "Si la marca necesita más claridad, consistencia y presencia, puedo ayudar a convertirlo en una dirección sólida." },
    "btn.email": { pt: "Enviar e-mail", en: "Send an email", es: "Enviar correo" },
    "btn.whatsapp": { pt: "Chamar no WhatsApp", en: "Message me on WhatsApp", es: "Escribir por WhatsApp" },
    "footer.rights": { pt: "CIELY. Todos os direitos reservados.", en: "CIELY. All rights reserved.", es: "CIELY. Todos los derechos reservados." },
    "skill.positioning": { pt: "Posicionamento de marca", en: "Brand positioning", es: "Posicionamiento de marca" },
    "skill.content": { pt: "Estratégia de conteúdo", en: "Content strategy", es: "Estrategia de contenido" },
    "skill.social": { pt: "Gestão de redes sociais", en: "Social media management", es: "Gestión de redes sociales" },
    "skill.creative": { pt: "Direção criativa", en: "Creative direction", es: "Dirección creativa" },
    "index.title": { pt: "CIELY — Posicionamento Estratégico para Redes Sociais", en: "CIELY — Strategic Positioning for Social Media", es: "CIELY — Posicionamiento Estratégico para Redes Sociales" },
    "index.desc": { pt: "Portfólio de social media especializado em posicionamento estratégico de marcas.", en: "Social media portfolio specializing in strategic brand positioning.", es: "Portafolio de social media especializado en posicionamiento estratégico de marcas." },
    "index.eyebrow": { pt: "Posicionamento estratégico", en: "Strategic positioning", es: "Posicionamiento estratégico" },
    "index.hero.title": { pt: "Seu lugar no mercado <em>não</em> é um acaso.", en: "Your place in the market is <em>not</em> an accident.", es: "Tu lugar en el mercado <em>no</em> es casualidad." },
    "index.hero.sub": { pt: "Sou Ciely Silva, publicitária e estrategista de posicionamento e conteúdo. Ajudo marcas a encontrar uma direção própria, traduzir seu valor em comunicação e construir uma presença que faça sentido para quem são e para onde querem chegar.", en: "I'm Ciely Silva, an advertising professional and brand positioning and content strategist. I help brands find their own direction, translate their value into communication, and build a presence that reflects who they are and where they want to go.", es: "Soy Ciely Silva, publicista y estratega de posicionamiento y contenido. Ayudo a las marcas a encontrar su propio rumbo, traducir su valor en comunicación y construir una presencia coherente con lo que son y con lo que quieren llegar a ser" },
    "index.hero.btn": { pt: "Vamos conversar", en: "Let's talk", es: "Hablemos" },
    "index.matrix.caption": { pt: "// Mapa de posicionamento", en: "// Positioning map", es: "// Mapa de posicionamiento" },
    "index.matrix.aria": { pt: "Gráfico ilustrativo de posicionamento estratégico: eixo horizontal de parecido a diferente, eixo vertical de ruído a clareza, com um ponto se movendo até o quadrante de diferente e claro.", en: "Illustrative chart of strategic positioning: horizontal axis from similar to different, vertical axis from noise to clarity, with a dot moving to the different and clear quadrant.", es: "Gráfico ilustrativo de posicionamiento estratégico: eje horizontal de parecido a diferente, eje vertical de ruido a claridad, con un punto que se mueve hasta el cuadrante de diferente y claro." },
    "svg.similar": { pt: "parecido", en: "similar", es: "parecido" },
    "svg.different": { pt: "diferente", en: "different", es: "diferente" },
    "svg.noise": { pt: "ruído", en: "noise", es: "ruido" },
    "svg.clarity": { pt: "clareza (topo)", en: "clarity (top)", es: "claridad (arriba)" },
    "svg.yourplace": { pt: "seu lugar", en: "your place", es: "tu lugar" },
    "index.about.eyebrow": { pt: "Quem sou", en: "About me", es: "Quién soy" },
    "index.about.title": { pt: "Comunicação começa com percepção", en: "Communication begins with perception.", es: "La comunicación comienza con la percepción." },
    "index.about.p1": { pt: "Sou Ciely Silva, publicitária e estrategista de posicionamento e conteúdo. Gosto de observar o que acontece ao nosso redor, compreender comportamentos e encontrar significado nos detalhes. Foi nesse encontro entre observação, criatividade e comunicação que encontrei a minha forma de trabalhar.", en: "I'm Ciely Silva, an advertising professional and brand positioning and content strategist. I enjoy observing the world around us, understanding human behavior, and finding meaning in the details. It was at the intersection of observation, creativity, and communication that I found my own way of working.", es: "Soy Ciely Silva, publicista y estratega de posicionamiento y contenido. Me gusta observar lo que sucede a nuestro alrededor, comprender comportamientos y encontrar significado en los detalles. Fue en ese encuentro entre observación, creatividad y comunicación donde encontré mi forma de trabajar." },
    "index.about.p2": { pt: "Hoje, transformo esse olhar em estratégia para ajudar marcas a reconhecer o que as torna únicas e expressar isso de maneira clara, coerente e reconhecível. Porque a forma como uma marca se comunica também constrói a forma como ela é lembrada.", en: "Today, I turn this perspective into strategy, helping brands recognize what makes them unique and express it in a clear, consistent, and distinctive way. Because the way a brand communicates also shapes how it is remembered.", es: "Hoy, transformo esa mirada en estrategia para ayudar a las marcas a reconocer aquello que las hace únicas y expresarlo de manera clara, coherente y reconocible. Porque la forma en que una marca se comunica también construye la manera en que es recordada." },
    "services.title": { pt: "Serviços — CIELY", en: "Services — CIELY", es: "Servicios — CIELY" },
    "services.desc": { pt: "Serviços de posicionamento estratégico e gestão de redes sociais.", en: "Strategic positioning and social media management services.", es: "Servicios de posicionamiento estratégico y gestión de redes sociales." },
    "services.hero.title": { pt: "Cada serviço parte de uma direção clara", en: "Every service starts from a clear direction", es: "Cada servicio parte de una dirección clara" },
    "services.hero.sub": { pt: "A ideia é transformar posicionamento em decisões práticas de conteúdo, presença e comunicação.", en: "The idea is to turn positioning into practical decisions about content, presence and communication.", es: "La idea es convertir el posicionamiento en decisiones prácticas de contenido, presencia y comunicación." },
    "services.hero.btn": { pt: "Quero conversar", en: "I'd like to talk", es: "Quiero conversar" },
    "services.caption": { pt: "// Escopo", en: "// Scope", es: "// Alcance" },
    "services.card": { pt: "Posso atuar desde o diagnóstico estratégico até a execução do dia a dia nas redes sociais.", en: "I can work from the strategic diagnosis all the way to day-to-day execution on social media.", es: "Puedo trabajar desde el diagnóstico estratégico hasta la ejecución del día a día en las redes sociales." },
    "services.eyebrow": { pt: "O que faço", en: "What I do", es: "Lo que hago" },
    "services.h2": { pt: "O que fica mais claro depois de trabalharmos juntos", en: "What becomes clearer after we work together", es: "Lo que queda más claro después de trabajar juntos" },
    "services.intro": { pt: "Todo projeto é conduzido com o mesmo princípio: definir onde a marca quer estar antes de decidir o que postar.", en: "Every project follows the same principle: define where the brand wants to be before deciding what to post.", es: "Todo proyecto se conduce con el mismo principio: definir dónde quiere estar la marca antes de decidir qué publicar." },
    "services.1.p": { pt: "Mapeio como a marca é vista hoje e defino o território que ela deve ocupar — o que dizer, o que evitar e por quê.", en: "I map how the brand is seen today and define the territory it should own — what to say, what to avoid and why.", es: "Mapeo cómo se ve hoy la marca y defino el territorio que debe ocupar — qué decir, qué evitar y por qué." },
    "services.2.p": { pt: "Transformo o posicionamento em um plano editorial com pilares, tom de voz e linha visual.", en: "I turn the positioning into an editorial plan with content pillars, tone of voice and visual style.", es: "Transformo el posicionamiento en un plan editorial con pilares, tono de voz y línea visual." },
    "services.3.p": { pt: "Execução do dia a dia com criação, publicação e acompanhamento de métricas, sempre com estratégia no centro.", en: "Day-to-day execution with content creation, publishing and metrics tracking, always with strategy at the center.", es: "Ejecución del día a día con creación, publicación y seguimiento de métricas, siempre con la estrategia en el centro." },
    "services.4.h3": { pt: "Consultoria pontual", en: "One-off consulting", es: "Consultoría puntual" },
    "services.4.p": { pt: "Diagnóstico e plano de ação para marcas que precisam de direção antes de continuar sozinhas.", en: "Diagnosis and action plan for brands that need direction before moving forward on their own.", es: "Diagnóstico y plan de acción para marcas que necesitan dirección antes de seguir solas." },
    "process.title": { pt: "Como funciona — CIELY", en: "How it works — CIELY", es: "Cómo funciona — CIELY" },
    "process.desc": { pt: "Entenda o processo de trabalho de CIELY, do diagnóstico à execução.", en: "Understand CIELY's work process, from diagnosis to execution.", es: "Conoce el proceso de trabajo de CIELY, del diagnóstico a la ejecución." },
    "process.hero.title": { pt: "Três etapas, nessa ordem", en: "Three steps, in this order", es: "Tres etapas, en este orden" },
    "process.hero.sub": { pt: "Direção antes de execução. A ordem importa porque a clareza estratégica muda tudo o que vem depois.", en: "Direction before execution. The order matters because strategic clarity changes everything that comes after.", es: "Dirección antes que ejecución. El orden importa porque la claridad estratégica cambia todo lo que viene después." },
    "process.hero.btn": { pt: "Ver exemplos", en: "See examples", es: "Ver ejemplos" },
    "process.caption": { pt: "// Processo", en: "// Process", es: "// Proceso" },
    "process.card": { pt: "O processo é simples: entendo, defino e coloco em prática com acompanhamento contínuo.", en: "The process is simple: I understand, I define, and I put it into practice with ongoing follow-up.", es: "El proceso es simple: entiendo, defino y pongo en práctica con acompañamiento continuo." },
    "process.eyebrow": { pt: "Etapas", en: "Steps", es: "Etapas" },
    "process.h2": { pt: "Uma abordagem que prioriza clareza e evolução", en: "An approach that prioritizes clarity and progress", es: "Un enfoque que prioriza la claridad y la evolución" },
    "process.intro": { pt: "A cada etapa, a marca ganha mais direção, consistência e segurança para agir nas redes.", en: "With each step, the brand gains more direction, consistency and confidence to act on social media.", es: "En cada etapa, la marca gana más dirección, consistencia y seguridad para actuar en las redes." },
    "process.1.h3": { pt: "Diagnóstico", en: "Diagnosis", es: "Diagnóstico" },
    "process.1.p": { pt: "Entendo o cenário atual da marca, o mercado em que ela está e como ela é percebida hoje pelo público.", en: "I understand the brand's current situation, the market it operates in and how it is perceived by the audience today.", es: "Entiendo el escenario actual de la marca, el mercado en el que está y cómo la percibe hoy el público." },
    "process.2.h3": { pt: "Direção", en: "Direction", es: "Dirección" },
    "process.2.p": { pt: "Defino o posicionamento estratégico e o território de conteúdo — o espaço único que a marca vai ocupar.", en: "I define the strategic positioning and the content territory — the unique space the brand will occupy.", es: "Defino el posicionamiento estratégico y el territorio de contenido — el espacio único que la marca va a ocupar." },
    "process.3.h3": { pt: "Execução", en: "Execution", es: "Ejecución" },
    "process.3.p": { pt: "Coloco a estratégia em prática nas redes, com acompanhamento e ajustes contínuos.", en: "I put the strategy into practice on social media, with ongoing monitoring and adjustments.", es: "Pongo la estrategia en práctica en las redes, con seguimiento y ajustes continuos." },
    "cases.title": { pt: "Perfis Trabalhados", en: "Refined Profiles", es: "Perfiles Trabajados" },
    "cases.desc": { pt: "Cases de posicionamento estratégico e gestão de redes sociais.", en: "Case studies in strategic positioning and social media management.", es: "Casos de posicionamiento estratégico y gestión de redes sociales." },
    "cases.hero.title": { pt: "Alguns lugares que ajudei a encontrar", en: "A few places I've helped brands find", es: "Algunos lugares que ayudé a encontrar" },
    "cases.hero.sub": { pt: "Cada projeto começa com um diagnóstico e termina com uma presença mais forte, mais clara e mais distinta.", en: "Every project starts with a diagnosis and ends with a stronger, clearer and more distinctive presence.", es: "Cada proyecto comienza con un diagnóstico y termina con una presencia más fuerte, más clara y más distinta." },
    "cases.hero.btn": { pt: "Solicitar uma conversa", en: "Request a conversation", es: "Solicitar una conversación" },
    "cases.caption": { pt: "// Resultados", en: "// Results", es: "// Resultados" },
    "cases.card": { pt: "Os trabalhos priorizam clareza de marca, consistência editorial e crescimento com estratégia.", en: "The work prioritizes brand clarity, editorial consistency and strategic growth.", es: "Los trabajos priorizan la claridad de marca, la consistencia editorial y el crecimiento con estrategia." },
    "cases.eyebrow": { pt: "Projetos", en: "Projects", es: "Proyectos" },
    "cases.h2": { pt: "Exemplos que mostram o caminho", en: "Examples that show the way", es: "Ejemplos que muestran el camino" },
    "cases.intro": { pt: "Substitua os blocos abaixo por prints reais, fotos ou capturas de tela dos projetos quando estiver pronto.", en: "Replace the blocks below with real screenshots, photos or captures of the projects when ready.", es: "Reemplaza los bloques de abajo por capturas, fotos o imágenes reales de los proyectos cuando estés listo." },
    "cases.thumb": { pt: "[ imagem do case ]", en: "[ case image ]", es: "[ imagen del caso ]" },
    "cases.n1": { pt: "Case 01", en: "Case 01", es: "Caso 01" },
    "cases.n2": { pt: "Case 02", en: "Case 02", es: "Caso 02" },
    "cases.n3": { pt: "Case 03", en: "Case 03", es: "Caso 03" },
    "cases.client": { pt: "[Nome do cliente]", en: "[Client name]", es: "[Nombre del cliente]" },
    "cases.metric1": { pt: "[+120% de alcance]", en: "[+120% reach]", es: "[+120% de alcance]" },
    "cases.metric2": { pt: "[+3.400 seguidores]", en: "[+3,400 followers]", es: "[+3.400 seguidores]" },
    "cases.metric3": { pt: "[+58% de engajamento]", en: "[+58% engagement]", es: "[+58% de engagement]" },
    "cases.desc.item": { pt: "[Breve descrição do que foi feito e o resultado alcançado.]", en: "[Brief description of what was done and the result achieved.]", es: "[Breve descripción de lo que se hizo y del resultado alcanzado.]" },
    "contact.title": { pt: "Contato — CIELY", en: "Contact — CIELY", es: "Contacto — CIELY" },
    "contact.desc": { pt: "Entre em contato para discutir posicionamento estratégico e redes sociais.", en: "Get in touch to discuss strategic positioning and social media.", es: "Ponte en contacto para hablar de posicionamiento estratégico y redes sociales." },
    "contact.hero.title": { pt: "Vamos criar um posicionamento que faça sentido", en: "Let's create a positioning that makes sense", es: "Creemos un posicionamiento que tenga sentido" },
    "contact.hero.sub": { pt: "Se você quer clareza de marca, estratégia de conteúdo ou uma presença mais firme nas redes, eu posso ajudar a transformar ideia em direção.", en: "If you want brand clarity, a content strategy or a stronger presence on social media, I can help turn an idea into direction.", es: "Si quieres claridad de marca, estrategia de contenido o una presencia más firme en las redes, puedo ayudarte a convertir una idea en dirección." },
    "contact.caption": { pt: "// Resposta", en: "// Reply", es: "// Respuesta" },
    "contact.card": { pt: "Me conte um pouco sobre a marca, o que já tentou e o que quer melhorar — e eu respondo com os próximos passos.", en: "Tell me a bit about the brand, what you've already tried and what you want to improve — and I'll reply with the next steps.", es: "Cuéntame un poco sobre la marca, qué has intentado y qué quieres mejorar — y te responderé con los próximos pasos." }
  };

  function isSupported(code) {
    return LANGS.indexOf(code) !== -1;
  }

  // Ordem de prioridade: ?lang= na URL → escolha salva → idioma do navegador → português
  function detectLanguage() {
    try {
      var fromUrl = new URLSearchParams(window.location.search).get("lang");
      if (fromUrl && isSupported(fromUrl.toLowerCase())) return fromUrl.toLowerCase();
    } catch (e) { /* ignora */ }

    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && isSupported(saved)) return saved;
    } catch (e) { /* localStorage indisponível */ }

    var prefs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || DEFAULT_LANG];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (isSupported(code)) return code;
    }
    return DEFAULT_LANG;
  }

  function translate(key, lang) {
    var entry = TRANSLATIONS[key];
    if (!entry) {
      if (window.console) console.warn("[i18n] chave sem tradução:", key);
      return null;
    }
    return entry[lang] != null ? entry[lang] : entry[DEFAULT_LANG];
  }

  function applyLanguage(lang) {
    if (!isSupported(lang)) lang = DEFAULT_LANG;

    document.documentElement.setAttribute("lang", HTML_LANG[lang]);

    // textos simples
    var textEls = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textEls.length; i++) {
      var value = translate(textEls[i].getAttribute("data-i18n"), lang);
      if (value !== null) textEls[i].textContent = value;
    }

    // textos com HTML (ex.: <em>)
    var htmlEls = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlEls.length; j++) {
      var html = translate(htmlEls[j].getAttribute("data-i18n-html"), lang);
      if (html !== null) htmlEls[j].innerHTML = html;
    }

    // atributos: data-i18n-attr="aria-label:chave;content:outraChave"
    var attrEls = document.querySelectorAll("[data-i18n-attr]");
    for (var k = 0; k < attrEls.length; k++) {
      var pairs = attrEls[k].getAttribute("data-i18n-attr").split(";");
      for (var p = 0; p < pairs.length; p++) {
        var idx = pairs[p].indexOf(":");
        if (idx < 1) continue;
        var attr = pairs[p].slice(0, idx).trim();
        var attrValue = translate(pairs[p].slice(idx + 1).trim(), lang);
        if (attrValue !== null) attrEls[k].setAttribute(attr, attrValue);
      }
    }

    // estado visual do seletor de idioma
    var buttons = document.querySelectorAll(".lang-switch [data-lang]");
    for (var b = 0; b < buttons.length; b++) {
      var active = buttons[b].getAttribute("data-lang") === lang;
      buttons[b].setAttribute("aria-pressed", active ? "true" : "false");
      buttons[b].classList.toggle("is-active", active);
    }

    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignora */ }
  }

  // clique nos botões PT / EN / ES
  document.addEventListener("click", function (event) {
    var target = event.target;
    var btn = target && target.closest ? target.closest(".lang-switch [data-lang]") : null;
    if (!btn) return;
    applyLanguage(btn.getAttribute("data-lang"));
  });

  // aplica o idioma já na carga da página
  applyLanguage(detectLanguage());

  // permite chamar manualmente: CIELY_I18N.setLanguage("es")
  window.CIELY_I18N = {
    setLanguage: applyLanguage,
    getLanguage: function () {
      return document.documentElement.getAttribute("lang").slice(0, 2);
    },
    translations: TRANSLATIONS
  };
})();
