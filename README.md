TESTE DE CRIAÇÃO, ENVIO E FUNCIONAMENTO DE PROJETO REACT POR PROMPT DE COMANDO E TERMINAL VSC:
================================================================================================
C:\Users\David> -> c:\Users\David\nome_do_projeto (Verificar se o gerenciador está no projeto | Projeto já criado )
:
1-C:\Users\David>cd nome_do_projeto
2-C:\Users\David\nome_do_projeto
=================================================================================================
CRIAR PROJETO NO GITHUB
:
npx create-react-app meu-projeto
cd meu-projeto
npm start

se criar o projeto por VITE deve ser: 'npm run dev' para startar!(mas eu não testei esse modo)
=====================================================================================================
PUSH DE PROJETO PRO GITHUB(conectando terminal com o repositório do GH)
:
git status
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
====================================================================================================
INICIAR UM PROJETO JÁ EXISTENTE
:
git remote add origin https://github.com/welysonf5/repo-testeRaect.git
git remote -v
git push --set-upstream origin main
=================================================================================
COMO SAIR DA CONEXÃO REPOSITORIO LOCAL-REMOTO(GIT-HUB)
git remote remove origin

==================================================================================
CONFIGURANDO O REPOSITÓRIO PARA APRESENTAR O LINK
:
1-PARA O PROJETO FUNCIONAR DEVE #COMENTAR NO .GITGNORE O /NODE_MODULES
2-FAZER BUILD DO PROJETO PARA O GITHUB
3-FAZER O PUSH PARA O REPOSITORIO
4-RETIRAR O INDEX DA PASTA BUILD PARA A RAIZ BRANCH (MAIN)
5-CORRIGIR OS ENDEREÇOS NO INDEX.HTML
====================================================================================================

ATUALIZAR LINK DO GITHUB
:
git remote set-url origin https://github.com/welysonf5/repo-testeRaect.git


====================================================================================================
RENOMEAR PASTA GITHUB (BUILD -> DOCS)
:
mv build docs
git add .
git commit -m "Renomeando a pasta build para docs"
git push origin main

=====================================================================================================
MOVENDO ARQUIVOS DA PASTA DOCS PARA A RAIZ REPOSITORIO
:
mv docs/* .
rm -r docs
---
git add .
git commit -m "Movendo arquivos da pasta docs para a raiz"
git push origin main
=====================================================================================================
RECOLOCAR ARQUIVO NA OUTRA PASTA 
:
mkdir docs
mv static docs/
mv asset-manifest.json docs/
mv favicon.ico docs/
mv logo192.png docs/
mv logo512.png docs/
mv manifest.json docs/
mv robots.txt docs/
=====================================================================================================


DEPLOY
:
npm install gh-pages --save-dev
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
"homepage": "https://SEU_USUARIO.github.io/SEU_REPOSITORIO"
npm run deploy
git push origin main


