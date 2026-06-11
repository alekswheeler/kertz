# kertz

landing page

### Estrutura recomendada

```
src/
├── assets/          # Imagens, ícones, fontes e mídias globais
├── components/      # Componentes globais e reutilizáveis (Button, Input, Modal)
├── config/          # Configurações do projeto (Firebase, Axios client, etc.)
├── contexts/        # Contextos globais para gerenciamento de estado (Auth, Theme)
├── hooks/           # Custom Hooks reutilizáveis em todo o app (useAuth, useFetch)
├── layouts/         # Templates de página (AuthLayout, DashboardLayout)
├── pages/           # Telas/Rotas da aplicação (Home, Login, Profile)
│   ├── Home/
│   │   ├── index.tsx
│   │   └── components/  # Componentes exclusivos desta página
│   └── Login/
├── routes/          # Definição e configuração das rotas (react-router-dom)
├── services/        # Integrações com APIs externas e requisições http
├── styles/          # Estilos globais ou temas (Tailwind config, global.css)
├── utils/           # Funções utilitárias puras (formatadores de data, validações)
├── App.tsx          # Componente raiz
└── main.tsx         # Ponto de entrada do React (renderizador)
```
