# 👨‍💻 Projeto de Automação - SauceDemo (Cypress + Page Objects + Allure)

![CI](https://github.com/FranciscoGeorgeR/projeto-saucedemo-cypress/actions/workflows/cypress-allure.yml/badge.svg)

Este projeto tem como objetivo demonstrar uma automação de testes Web utilizando o site **https://www.saucedemo.com** de forma organizada e escalável, aplicando boas práticas de QA e automação.

---

## 🚀 Tecnologias Utilizadas

| Ferramenta | Finalidade |
|----------|------------|
| **Cypress** | Automação de testes Web end-to-end |
| **Page Objects + Elements + Constants** | Organização e reutilização de código |
| **Allure Report** | Geração de relatórios ricos e detalhados |
| **GitHub Actions** | Execução automática dos testes (CI/CD) |
| **GitHub Pages** | Publicação do relatório automático |

---

## 📂 Estrutura do Projeto

cypress/
e2e/ # Cenários de teste (describe/it)
pages/ # Ações e interações com a interface
elements/ # Mapeamento de seletores
constants/ # Dados fixos, URLs, mensagens, etc
support/ # Commands, sessão, configs globais
.github/
workflows/ # Pipeline de execução (CI/CD)

yaml
---

## 🧪 Execução dos Testes

### Modo interativo
```bash
npm run cy:open
Modo headless (utilizado no CI/CD)
bash
npm run cy:run
📊 Relatório Allure (Gerado automaticamente)
O relatório é atualizado a cada push na branch main:

🔗 Acessar relatório:
https://franciscogeorger.github.io/projeto-saucedemo-cypress/

Gerar localmente:
bash
npm run allure:report
🤖 Execução Automática (GitHub Actions)
Pipeline roda automaticamente em push e pull request

Relatório Allure é publicado automaticamente via GitHub Pages

Branch gh-pages contém a última versão do relatório

Arquivo da pipeline:

bash
.github/workflows/cypress-allure.yml

👤 Autor
Francisco George
Analista de Qualidade / QA Automation