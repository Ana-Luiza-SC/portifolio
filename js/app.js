(() => {
  "use strict";

  const translations = {
    pt: {
      navProjects: "Projetos", navApproach: "Abordagem", navJourney: "Trajetória", navContact: "Contato",
      eyebrow: "PORTFÓLIO — 2026", heroA: "Eu desenho", heroB: "serviços, sistemas", heroC: "e software.",
      intro: "Estudante de Engenharia de Software com interesse em entender problemas por inteiro — das pessoas e processos até a arquitetura e o código.",
      explore: "Explorar projetos", people: "PESSOAS", services: "SERVIÇOS", systems: "SISTEMAS", how: "COMO", parts: "AS PARTES<br />SE CONECTAM?",
      status: "Aberta a estágios, colaborações e bons problemas", projectsLabel: "PROJETOS", selectedProjects: "Projetos selecionados",
      projectIntro: "Um espaço para Design de Serviço, produtos digitais, pesquisa, código e experimentos. Cada projeto conta o que foi feito — e por quê.",
      approachLabel: "ABORDAGEM", approachTitle: "Como eu conecto as pontas", approachIntro: "Não separo a experiência do sistema que a sustenta. Investigo o contexto, modelo as relações e construo a solução em ciclos curtos.",
      understand: "ENTENDER", understandText: "Contexto, pessoas e restrições antes de escolher uma solução.", model: "MODELAR", modelText: "Jornadas, fluxos, dados e arquitetura tornam o sistema visível.",
      build: "CONSTRUIR", buildText: "Protótipos e código transformam hipóteses em algo testável.", learn: "APRENDER", learnText: "Evidências orientam a próxima decisão — e o próximo ciclo.",
      journeyLabel: "TRAJETÓRIA", journeyTitle: "Trajetória de estudos", journeyIntro: "Uma visão acadêmica e profissional honesta, pensada para crescer junto com a minha formação.",
      now: "Atualmente", degree: "Engenharia de Software", degreeText: "Graduação em Engenharia de Software na Universidade de Brasília, com foco em desenvolvimento de sistemas, arquitetura de software, projetos acadêmicos e pesquisa aplicada.", education: "03/2023 - 12/2027 (previsão)",
      next: "Atualmente", experience: "Estudante Pesquisados do ITRAC", experienceText: "Desenvolvimento de produção científica e estratégias de design de serviços, com foco em experiência de usuário (UX), no apoio à definição de uma abordagem colaborativa de transformação digital para a Secretaria Patrimônio da União (SPU).", history: "09/2025 - agora",
      contactLabel: "CONTATO", contactTitle: "Vamos conversar sobre o próximo desafio?", contactIntro: "Se você trabalha com tecnologia, serviços ou inovação e vê espaço para alguém que transita entre pesquisa e implementação, quero ouvir.",
      email: "Escrever um e-mail", top: "Voltar ao topo ↑", all: "Todos", github: "GitHub ↗", project: "Ver projeto ↗", soon: "Estudo de caso em breve", empty: "Nenhum projeto encontrado nesta categoria.", modelProject: "Projeto-modelo",
    },
    en: {
      navProjects: "Projects", navApproach: "Approach", navJourney: "Journey", navContact: "Contact",
      eyebrow: "PORTFOLIO — 2026", heroA: "I design", heroB: "services, systems", heroC: "and software.",
      intro: "Software Engineering student interested in understanding problems end to end — from people and processes to architecture and code.",
      explore: "Explore projects", people: "PEOPLE", services: "SERVICES", systems: "SYSTEMS", how: "HOW", parts: "DO THE PARTS<br />CONNECT?",
      status: "Open to internships, collaborations and meaningful problems", projectsLabel: "PROJECTS", selectedProjects: "Selected projects",
      projectIntro: "A home for Service Design, digital products, research, code and experiments. Each project explains what was made — and why.",
      approachLabel: "APPROACH", approachTitle: "How I connect the dots", approachIntro: "I don't separate the experience from the system supporting it. I investigate context, model relationships and build solutions in short cycles.",
      understand: "UNDERSTAND", understandText: "Context, people and constraints before choosing a solution.", model: "MODEL", modelText: "Journeys, flows, data and architecture make the system visible.",
      build: "BUILD", buildText: "Prototypes and code turn hypotheses into something testable.", learn: "LEARN", learnText: "Evidence guides the next decision — and the next cycle.",
      journeyLabel: "JOURNEY", journeyTitle: "Academic journey", journeyIntro: "An honest academic and professional profile designed to grow alongside my education.",
      now: "Current", degree: "Software Engineering", degreeText: "Bachelor's degree in Software Engineering at the University of Brasília, focused on systems development, software architecture, academic projects, and applied research.", education: "03/2023 - 12/2027 (expected)",
      next: "Current", experience: "ITRAC Research Student", experienceText: "Development of scientific production and service design strategies, focused on user experience (UX), supporting the definition of a collaborative digital transformation approach for the Brazilian Federal Heritage Secretariat (SPU).", history: "09/2025 - present",
      contactLabel: "CONTACT", contactTitle: "Shall we talk about the next challenge?", contactIntro: "If you work with technology, services or innovation and need someone who moves between research and implementation, I'd like to hear from you.",
      email: "Send an email", top: "Back to top ↑", all: "All", github: "GitHub ↗", project: "View project ↗", soon: "Case study coming soon", empty: "No projects found in this category.", modelProject: "Sample project",
    },
  };

  const categoryNames = {
    pt: { "Design de Serviço": "Design de Serviço", Software: "Software", Pesquisa: "Pesquisa", Outros: "Outros" },
    en: { "Design de Serviço": "Service Design", Software: "Software", Pesquisa: "Research", Outros: "Other" },
  };
  const categories = ["Todos", "Design de Serviço", "Software", "Pesquisa", "Outros"];
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const journeyItems = Array.isArray(window.PORTFOLIO_JOURNEY) ? window.PORTFOLIO_JOURNEY : [];
  const journeySkills = Array.isArray(window.PORTFOLIO_SKILLS) ? window.PORTFOLIO_SKILLS : [];
  let language = "pt";
  let activeCategory = "Todos";

  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
  const safeUrl = (value) => {
    if (!value) return null;
    try {
      const url = new URL(value, window.location.href);
      return ["http:", "https:"].includes(url.protocol) ? value : null;
    } catch { return null; }
  };
  const localized = (value) => typeof value === "object" && value !== null ? (value[language] || value.pt || value.en || "") : (value || "");

  function renderFilters() {
    const container = document.querySelector("#project-filters");
    container.innerHTML = categories.map((category) => {
      const label = category === "Todos" ? translations[language].all : categoryNames[language][category];
      return `<button type="button" data-category="${escapeHtml(category)}" class="${activeCategory === category ? "active" : ""}" aria-pressed="${activeCategory === category}">${escapeHtml(label)}</button>`;
    }).join("");
  }

  function renderProjects() {
    const filtered = projects.filter((project) => activeCategory === "Todos" || project.category === activeCategory);
    const grid = document.querySelector("#project-grid");
    const empty = document.querySelector("#empty-state");
    empty.hidden = filtered.length > 0;
    grid.innerHTML = filtered.map((project, index) => {
      const githubUrl = safeUrl(project.githubUrl);
      const projectUrl = safeUrl(project.projectUrl);
      const cover = project.cover ? `<img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.coverAlt || localized(project.title))}" loading="lazy" />` : `<div class="mini" aria-hidden="true"><i></i><i></i><i></i><span></span></div>`;
      const links = [
        githubUrl ? `<a href="${escapeHtml(githubUrl)}" target="_blank" rel="noreferrer">${translations[language].github}</a>` : "",
        projectUrl ? `<a href="${escapeHtml(projectUrl)}" target="_blank" rel="noreferrer">${translations[language].project}</a>` : "",
      ].filter(Boolean).join("") || `<span>${translations[language].soon}</span>`;
      const year = project.year === "Projeto-modelo" ? translations[language].modelProject : project.year;
      const detail = [localized(project.role), ...(Array.isArray(project.technologies) ? project.technologies : [])].filter(Boolean).map(escapeHtml).join(" · ");
      return `<article class="card c${index % 3}">
        <div class="visual ${project.cover ? "has-cover" : ""}"><b>${String(index + 1).padStart(2, "0")}</b>${cover}</div>
        <div class="card-copy"><p class="meta"><span>${escapeHtml(categoryNames[language][project.category] || project.category)}</span><span>${escapeHtml(year)}</span></p>
        <h3>${escapeHtml(localized(project.title))}</h3><p>${escapeHtml(localized(project.summary))}</p>
        ${detail ? `<p class="project-detail">${detail}</p>` : ""}<div class="links">${links}</div></div>
      </article>`;
    }).join("");
  }

  function renderJourney() {
    const timeline = document.querySelector("#journey-timeline");
    const skills = document.querySelector("#journey-skills");
    if (timeline) {
      timeline.innerHTML = journeyItems.map((item) => `<article>
        <time>${escapeHtml(localized(item.period))}</time>
        <div><h3>${escapeHtml(localized(item.title))}</h3><p>${escapeHtml(localized(item.description))}</p><small>${escapeHtml(localized(item.tag))}</small></div>
      </article>`).join("");
    }
    if (skills) {
      skills.innerHTML = journeySkills.map((skill) => `<span>${escapeHtml(localized(skill))}</span>`).join("");
    }
  }

  function updateLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = translations[language][element.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = translations[language][element.dataset.i18nHtml]; });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      const selected = button.dataset.lang === language;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    renderFilters(); renderProjects(); renderJourney();
  }

  document.addEventListener("click", (event) => {
    const languageButton = event.target.closest("[data-lang]");
    if (languageButton) updateLanguage(languageButton.dataset.lang);
    const filterButton = event.target.closest("[data-category]");
    if (filterButton) { activeCategory = filterButton.dataset.category; renderFilters(); renderProjects(); }
  });

  const config = window.PORTFOLIO_CONFIG || {};
  const email = config.email || "ssoares.analuiza@gmail.com";
  document.querySelector("#email-link").href = `mailto:${email}`;
  document.querySelector("#linkedin-link").href = safeUrl(config.linkedin) || "#";
  document.querySelector("#github-link").href = safeUrl(config.github) || "https://github.com/Ana-Luiza-SC";
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  updateLanguage("pt");
})();
