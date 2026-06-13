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

### Separar o css e os dados do component

1.  Separar o CSS

Um detalhe é que apesar disso, os components devem conhecer as cores do projeto. Evita que o desenvolvedor (ou a IA)
fique criando cores do nada.

Vai ser usado css modules. Regra padrão: NUNCA USE CORES FORA DAS VARS

3. Os Layouts e responsividade do component pai tem a responsabilidade do espaço e responsividade

O componente pai dita o tamanho, as margens externas, o grid e a responsividade. O componente filho dita apenas o preenchimento interno (padding), bordas, tipografia e cores internas.

Colocar a responsabilidade de quebras aqui também.

2. Separar os dados

Os dados devem ficar fora do component, via CMS ou via importação de arquivos JSON, por motivos óbvios.
