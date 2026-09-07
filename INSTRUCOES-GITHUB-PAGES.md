# Instruções para publicar no GitHub Pages

## 1. Extrair o projeto

Extraia o arquivo ZIP em uma pasta, por exemplo:

```text
C:\ana_arquivos\portfolio\Ana-Luiza-SC.github.io
```

Abra essa pasta no VS Code.

## 2. Personalizar antes de publicar

No arquivo `data/projects.js`:

1. Troque o e-mail e o endereço do LinkedIn.
2. Substitua os três projetos-modelo pelos seus projetos reais.
3. Coloque as imagens em `assets/projects/`.

Abra `index.html` no navegador para conferir o conteúdo.

## 3. Criar o repositório

No GitHub, crie um repositório **público** com este nome exato:

```text
Ana-Luiza-SC.github.io
```

Deixe o repositório vazio. Não marque as opções de README, `.gitignore` ou licença.

## 4. Fazer o primeiro envio

Abra o PowerShell dentro da pasta extraída e execute, um comando por vez:

```powershell
git init
git add .
git commit -m "Cria portfólio pessoal"
git branch -M main
git remote add origin git@github.com:Ana-Luiza-SC/Ana-Luiza-SC.github.io.git
git push -u origin main
```

Como sua chave SSH já está configurada, o Git poderá pedir apenas a passphrase da chave.

## 5. Ativar o GitHub Pages

1. Abra o repositório no GitHub.
2. Entre em **Settings**.
3. No menu lateral, abra **Pages**.
4. Em **Build and deployment**, escolha **GitHub Actions**.
5. Abra a aba **Actions** e aguarde `Publicar no GitHub Pages` ficar verde.

O endereço será:

```text
https://ana-luiza-sc.github.io
```

A primeira publicação pode levar alguns minutos.

## Atualizações futuras

Depois de alterar textos, projetos ou imagens, execute:

```powershell
git add .
git commit -m "Atualiza portfólio"
git push
```

O GitHub Actions publicará a nova versão automaticamente.

## Se aparecer `non-fast-forward`

Isso normalmente significa que o repositório no GitHub foi criado com um README ou já possui outro commit. Se você acabou de criar o repositório e ele não contém nada importante, apague-o e crie novamente vazio. Não use `git push --force` sem conferir o conteúdo remoto.

Se o repositório já tiver conteúdo que deseja preservar, use:

```powershell
git pull origin main --rebase
git push
```

Resolva eventuais conflitos antes de continuar o rebase.
