# ⚡ TaskFlow Interface

> Uma aplicação web dinâmica para gerenciamento de tarefas, focada no consumo de APIs RESTful e manipulação do DOM.

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## 💻 Sobre o Projeto

O **TaskFlow** não é apenas uma lista de tarefas. É um projeto desenvolvido para consolidar o entendimento sobre o ciclo de vida de dados na web.

O objetivo principal foi criar uma ponte entre uma interface **Front-end** e um **Back-end simulado**, garantindo que as requisições (Requests) e respostas (Responses) fossem tratadas corretamente via JavaScript.

### 🎯 O que este projeto resolve?
- **Persistência de Dados:** Simulação de um banco de dados real utilizando JSON.
- **Interatividade:** Atualização da interface sem necessidade de recarregar a página (SPA concept).
- **Consumo de API:** Uso prático do método `fetch` para leitura de dados assíncronos.

---

## 🛠 Tech Stack (Tecnologias)

O projeto foi construído utilizando a tríade clássica da web, somada a ferramentas de simulação de servidor:

- **HTML5 Semântico**: Estruturação de conteúdo.
- **CSS3 Moderno**: Estilização e layout.
- **JavaScript (ES6+)**: Lógica de programação, manipulação de Array e Promises.
- **JSON-Server**: Criação de uma API REST Fake para endpoints locais.
- **Git & GitHub**: Versionamento e controle de código.

---

## 📂 Arquitetura de Pastas

A estrutura foi pensada para manter a organização e escalabilidade do código:

```bash
mini-projeto-js/
├── 📁 node_modules/      # Dependências do projeto (Ignorado pelo Git)
├── 📄 db.json            # Banco de dados simulado (nossa API)
├── 📄 index.html         # A "cara" da aplicação
├── 🎨 index.css          # O "estilo" da aplicação
├── ⚙️ index.js           # O "cérebro" da aplicação
├── 📄 .gitignore         # Arquivo de segurança (evita arquivos pesados)
├── 📄 package.json       # Gerenciador de dependências
└── 📄 README.md          # Documentação