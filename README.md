# Brewing Coffee Track

Uma aplicação desenvolvida em Next.js com App Router, utilizando componentes Shadcn/ui. O objetivo é registrar preparos de cafés com os mais diferentes métodos disponíveis hoje, conectando coffee lovers e compartilhando suas receitas.

## Funcionalidades

- **Registro de Cafés**: Adicione cafés ao seu estoque, incluindo detalhes como variedade, fazenda, produtor, região, torrefação, notas sensoriais, etc.
- **Métodos de Preparo**: Consulte uma base compartilhada de métodos de preparo ou registre seu próprio método caso ainda não exista.
- **Listagem de Métodos por Perfil**: Cada usuário pode listar suas receitas e preparos, promovendo a colaboração e compartilhamento de experiências.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **App Router**: Utilizado para estruturação e navegação da aplicação.
- **Shadcn/ui**: Biblioteca de componentes para construção da interface do usuário.

## Estrutura do Projeto

```plaintext
.
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── ...
├── components
│   ├── ThemedView.tsx
│   ├── ThemedText.tsx
│   └── ...
├── data
│   └── steps.ts
├── types
│   └── steps.ts
├── public
│   └── ...
├── styles
│   └── ...
├── README.md
└── ...
```

## Como Executar

1. Clone o repositório:
```shell
git clone https://github.com/seu-usuario/coffee-lovers-app.git
cd coffee-lovers-app
```
2. Instale as dependências:
```shell
npm install
```

3. Execute a aplicação:
```shell
npm run dev
```

Abra o navegador e acesse:
```
http://localhost:3000
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Desenvolvido com ❤️ por Coffee Lovers.