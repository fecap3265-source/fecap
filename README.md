# FCP - Frente de Capacitação Pública

Este é o repositório do site institucional da FCP (Frente de Capacitação Pública), uma plataforma dedicada a oferecer cursos e palestras de alto nível para a capacitação de servidores e gestores públicos.

## Índice

  - [Visão Geral](https://www.google.com/search?q=%23vis%C3%A3o-geral)
  - [Tecnologias Utilizadas](https://www.google.com/search?q=%23tecnologias-utilizadas)
  - [Estrutura do Projeto](https://www.google.com/search?q=%23estrutura-do-projeto)
  - [Como Executar o Projeto](https://www.google.com/search?q=%23como-executar-o-projeto)
      - [Pré-requisitos](https://www.google.com/search?q=%23pr%C3%A9-requisitos)
      - [Instalação](https://www.google.com/search?q=%23instala%C3%A7%C3%A3o)
      - [Rodando em Modo de Desenvolvimento](https://www.google.com/search?q=%23rodando-em-modo-de-desenvolvimento)
      - [Build de Produção](https://www.google.com/search?q=%23build-de-produ%C3%A7%C3%A3o)
  - [Scripts Disponíveis](https://www.google.com/search?q=%23scripts-dispon%C3%ADveis)

## Visão Geral

O projeto foi desenvolvido com o objetivo de criar uma presença online moderna e informativa para a FCP. O site apresenta a missão da organização, seus sócios, palestrantes convidados e informações de contato, servindo como ponto central para futuros alunos e parceiros.

## Tecnologias Utilizadas

A aplicação foi construída utilizando um conjunto de tecnologias modernas para garantir performance, escalabilidade e uma ótima experiência de desenvolvimento.

  - **[Next.js](https://nextjs.org/)**: Framework React para renderização no lado do servidor (SSR) e geração de sites estáticos.
  - **[React](https://react.dev/)**: Biblioteca para construir interfaces de usuário.
  - **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
  - **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first para estilização rápida e customizável.
  - **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones SVG.
  - **[ESLint](https://eslint.org/)**: Ferramenta de linting para identificar e corrigir problemas no código.

## Estrutura do Projeto

A estrutura de pastas principal segue o padrão do Next.js App Router:

```
FCP/
├── public/              # Arquivos estáticos (imagens, fontes, etc.)
├── src/
│   ├── app/             # Rotas da aplicação (pages, layouts)
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── features/    # Componentes específicos de cada seção da página
│   │   ├── layout/      # Componentes de layout (Header, Footer)
│   │   └── ui/          # Componentes de UI genéricos (Button, Card, etc.)
│   └── lib/             # Funções utilitárias e dados mockados
├── package.json         # Dependências e scripts do projeto
└── tailwind.config.ts   # Configurações do Tailwind CSS
```

## Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

### Pré-requisitos

  - [Node.js](https://nodejs.org/en/) (versão 18.18.0 ou superior)
  - [npm](https://www.npmjs.com/) (geralmente vem instalado com o Node.js)

### Instalação

  - Clone o repositório para a sua máquina local:
```bash
git clone github.com/fecap3265-source/fecap && cd fecap && npm install
```

### Rodando em Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento e visualizar o projeto em tempo real:

```bash
npm run dev
```

Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para ver o resultado. A página será atualizada automaticamente a cada alteração nos arquivos.

### Build de Produção

Para criar uma versão otimizada do projeto para produção:

```bash
npm run build
```

Este comando irá gerar os arquivos estáticos na pasta `.next/`.

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

  - `npm run dev`: Inicia o servidor de desenvolvimento.
  - `npm run build`: Gera a build de produção do projeto.
  - `npm run start`: Inicia um servidor de produção (requer uma build prévia).
  - `npm run lint`: Executa o ESLint para analisar o código em busca de erros e problemas de estilo.