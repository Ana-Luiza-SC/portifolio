/*
 * EDITE ESTE ARQUIVO PARA ADICIONAR OU ALTERAR DADOS DO PORTFÓLIO.
 *
 * - Use aspas ao redor dos textos.
 * - Para não exibir um link, use null.
 * - Coloque imagens em assets/projects/ e informe o caminho em cover.
 * - O id precisa ser único e não deve conter espaços.
 * - category aceita: "Design de Serviço", "Software", "Pesquisa" ou "Outros".
 * - Em textos com tradução, preencha pt e en.
 */

window.PORTFOLIO_CONFIG = {
  email: "ssoares.analuiza@gmail.com",
  linkedin: "https://www.linkedin.com/in/ana-luiza-sc/",
  github: "https://github.com/Ana-Luiza-SC",
};

window.PORTFOLIO_JOURNEY = [
  {
    period: {
      pt: "ATUAL",
      en: "CURRENT",
    },
    title: {
      pt: "Engenharia de Software",
      en: "Software Engineering",
    },
    description: {
      pt: "Graduação na Universidade de Brasília, com foco em projetos acadêmicos, pesquisa, extensão, arquitetura de software e desenvolvimento de produtos digitais.",
      en: "Undergraduate degree at the University of Brasília, focused on academic projects, research, extension programs, software architecture, and digital product development.",
    },
    tag: {
      pt: "FORMAÇÃO ACADÊMICA",
      en: "ACADEMIC EDUCATION",
    },
  },
  {
    period: {
      pt: "EM DESENVOLVIMENTO",
      en: "IN PROGRESS",
    },
    title: {
      pt: "Projetos, pesquisa e prática profissional",
      en: "Projects, research, and professional practice",
    },
    description: {
      pt: "Espaço para registrar estágios, eventos, certificações, publicações e experiências verificáveis ao longo da formação.",
      en: "A place to document internships, events, certifications, publications, and verifiable experiences throughout my education.",
    },
    tag: {
      pt: "HISTÓRICO EM CONSTRUÇÃO",
      en: "HISTORY IN PROGRESS",
    },
  },
];

window.PORTFOLIO_SKILLS = [
  {
    pt: "JavaScript / TypeScript",
    en: "JavaScript / TypeScript",
  },
  {
    pt: "Arquitetura de software",
    en: "Software architecture",
  },
  {
    pt: "Pesquisa com usuários",
    en: "User research",
  },
  {
    pt: "Service blueprint",
    en: "Service blueprint",
  },
  {
    pt: "Prototipação",
    en: "Prototyping",
  },
  {
    pt: "Dados & APIs",
    en: "Data & APIs",
  },
];

window.PORTFOLIO_PROJECTS = [
  {
    id: "estudaunb",
    title: {
      pt: "EstudaUnB — planejamento acadêmico com IA",
      en: "EstudaUnB — AI-powered academic planning",
    },
    summary: {
      pt: "Aplicação web que centraliza disciplinas, avaliações, frequência e calendário para gerar planos de estudo auditáveis. Integra dados públicos do SIGAA, extração de PDFs, guardrails e fallback determinístico para o agente de IA.",
      en: "A web application that centralizes courses, assessments, attendance, and calendars to generate auditable study plans. It combines public SIGAA data, PDF extraction, guardrails, and a deterministic fallback for its AI agent.",
    },
    category: "Software",
    year: "2026",
    role: {
      pt: "Projeto individual — produto, arquitetura e implementação",
      en: "Individual project — product, architecture, and implementation",
    },
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Gemini", "Docker"],
    cover: null,
    coverAlt: "",
    githubUrl: "https://github.com/Ana-Luiza-SC/projeto-final-ML-2026-1/tree/main/4_Ana_Luiza_Soares",
    projectUrl: "https://name-estudaunb-frontend.onrender.com/",
  },
  {
    id: "lui-micromouse",
    title: {
      pt: "Robô Micromouse autônomo",
      en: "Autonomous Micromouse robot",
    },
    summary: {
      pt: "Projeto multidisciplinar de um robô capaz de mapear e resolver labirintos, reunindo firmware embarcado, navegação, telemetria e uma dashboard para acompanhar o comportamento do sistema.",
      en: "A multidisciplinary robot designed to map and solve mazes, combining embedded firmware, navigation, telemetry, and a dashboard for monitoring system behavior.",
    },
    category: "Software",
    year: "2026",
    role: {
      pt: "Desenvolvimento em equipe — firmware e software de apoio",
      en: "Team development — firmware and supporting software",
    },
    technologies: ["C++", "ESP-IDF", "React", "TypeScript", "Node.js", "UDP"],
    cover: null,
    coverAlt: "",
    githubUrl: "https://github.com/fcte-pi1/2026.1_PI1_Grupo1_Lui",
    projectUrl: "https://fcte-pi1.github.io/2026.1_PI1_Grupo1_Lui/",
  },
  {
    id: "monitoramento-gastos-publicos",
    title: {
      pt: "Monitoramento de Gastos Públicos",
      en: "Public Spending Monitoring",
    },
    summary: {
      pt: "Plataforma para consultar despesas e fornecedores de Maceió a partir de diários oficiais, com filtros, atualização automatizada de dados e visualizações voltadas à transparência pública.",
      en: "A platform for exploring expenses and suppliers in Maceió through official gazettes, with filters, automated data updates, and visualizations designed to support public transparency.",
    },
    category: "Software",
    year: "2024–2025",
    role: {
      pt: "Desenvolvimento em equipe — backend, automação, testes e CI/CD",
      en: "Team development — backend, automation, testing, and CI/CD",
    },
    technologies: ["Django REST", "Python", "React", "TypeScript", "Docker", "GitHub Actions"],
    cover: null,
    coverAlt: "",
    githubUrl: "https://github.com/unb-mds/2024-2-Squad06",
    projectUrl: "https://gastospublicos.vercel.app/",
  },
  {
    id: "dk-fashion-marketplace",
    title: {
      pt: "DK Fashion — marketplace full stack",
      en: "DK Fashion — full-stack marketplace",
    },
    summary: {
      pt: "Marketplace de moda com catálogo, autenticação, perfis de acesso e fluxo de compra. O produto integra frontend e API REST, banco relacional, serviços de frete e pagamento e testes automatizados.",
      en: "A fashion marketplace with a product catalog, authentication, access roles, and a complete purchase flow. The product integrates a frontend, REST API, relational database, shipping and payment services, and automated tests.",
    },
    category: "Software",
    year: "2026",
    role: {
      pt: "Desenvolvimento em equipe — frontend, integração e testes E2E",
      en: "Team development — frontend, integration, and E2E testing",
    },
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Selenium", "Docker"],
    cover: null,
    coverAlt: "",
    githubUrl: "https://github.com/TPPE-2026-1-Marketplace/MarketPlace-Frontend",
    projectUrl: "https://tppe-2026-1-marketplace.github.io/documentacao/",
  },
  {
    id: "revele-seu-hobbie",
    title: {
      pt: "Revele Seu Hobbie — arquitetura de software",
      en: "Revele Seu Hobbie — software architecture",
    },
    summary: {
      pt: "Modelagem arquitetural de uma plataforma para descobrir e compartilhar hobbies. O trabalho conecta requisitos, protótipos, decisões de arquitetura e documentação colaborativa.",
      en: "Architectural modeling for a platform where people can discover and share hobbies. The project connects requirements, prototypes, architectural decisions, and collaborative documentation.",
    },
    category: "Software",
    year: "2025",
    role: {
      pt: "Modelagem e documentação em equipe",
      en: "Team-based modeling and documentation",
    },
    technologies: ["Software Architecture", "UML", "Design Patterns", "MkDocs"],
    cover: null,
    coverAlt: "",
    githubUrl: "https://github.com/UnBArqDsw2025-2-Turma01/2025.2-T01-G3_ReveleSeuHobbie_Entrega_03",
    projectUrl: "https://unbarqdsw2025-2-turma01.github.io/2025.2-T01-G3_ReveleSeuHobbie_Entrega_03/#/",
  },
  {
    id: "qualidade-no-fluxo-unb",
    title: {
      pt: "Avaliação de qualidade — No Fluxo UnB",
      en: "Quality evaluation — No Fluxo UnB",
    },
    summary: {
      pt: "Avaliação estruturada de qualidade de um produto digital, com definição de objetivos, questões e métricas pelo método GQM, além de critérios, massa de dados e procedimentos de análise.",
      en: "A structured quality evaluation of a digital product, defining goals, questions, and metrics with the GQM method, along with evaluation criteria, datasets, and analysis procedures.",
    },
    category: "Pesquisa",
    year: "2026",
    role: {
      pt: "Análise e documentação em equipe",
      en: "Team-based analysis and documentation",
    },
    technologies: ["GQM", "Software Quality", "MkDocs", "GitHub Pages"],
    cover: null,
    coverAlt: "",
    githubUrl: "https://github.com/FCTE-Qualidade-de-Software-1/2026-1_T01_BETTY_SNYDER",
    projectUrl: "https://fcte-qualidade-de-software-1.github.io/2026-1_T01_BETTY_SNYDER/",
  },
];
