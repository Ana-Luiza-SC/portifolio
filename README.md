# Portfólio — Ana Luiza

Portfólio estático de Engenharia de Software, Design de Serviço e projetos multidisciplinares.

O site não depende de banco de dados, servidor, painel administrativo ou instalação de pacotes. Os projetos ficam em `data/projects.js` e as imagens em `assets/projects/`.

## Visualizar no notebook

Você pode abrir `index.html` diretamente no navegador. Para uma visualização mais próxima da publicação, use a extensão **Live Server** do VS Code ou execute:

```powershell
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Personalizar seus dados

Abra `data/projects.js` e altere:

- `email`;
- `linkedin`;
- `github`.

No `index.html`, procure por `ANA LUIZA` para alterar nome, título ou textos gerais.

## Adicionar um projeto

1. Copie a imagem para `assets/projects/`.
2. Abra `data/projects.js`.
3. Duplique um dos objetos dentro de `PORTFOLIO_PROJECTS`.
4. Altere as informações e mantenha um `id` único.

Exemplo:

```js
{
  id: "marketplace",
  title: {
    pt: "Marketplace",
    en: "Marketplace",
  },
  summary: {
    pt: "Descrição resumida em português.",
    en: "Short description in English.",
  },
  category: "Software",
  year: "2026",
  role: "Desenvolvimento frontend",
  technologies: ["React", "TypeScript"],
  cover: "./assets/projects/marketplace.webp",
  coverAlt: "Tela inicial do Marketplace",
  githubUrl: "https://github.com/Ana-Luiza-SC/repositorio",
  projectUrl: null,
},
```

Categorias aceitas pelos filtros:

- `Design de Serviço`
- `Software`
- `Pesquisa`
- `Outros`

Use `null` em `githubUrl`, `projectUrl` ou `cover` quando a informação não existir.

## Publicação

Leia o arquivo `INSTRUCOES-GITHUB-PAGES.md` para fazer o primeiro envio e ativar o endereço `https://ana-luiza-sc.github.io`.

## Estrutura

```text
.
├── .github/workflows/pages.yml  # publicação automática
├── assets/projects/             # imagens dos projetos
├── data/projects.js             # conteúdo editável
├── js/app.js                    # filtros e tradução
├── index.html                   # estrutura do site
└── styles.css                   # aparência e responsividade
```
