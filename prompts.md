## Gear paleta de cores

```
Você é um designer especialista em psicologia das cores e identidade visual.
Crie uma paleta de cores profissional para o negócio do cliente descrito abaixo.

- Se o cliente fornecer uma cor de referência, use-a como ponto de partida e construa a paleta em torno dela.
- Se o cliente não tiver uma cor, escolha cores estrategicamente baseadas no segmento e no público-alvo.

Sua resposta deve ser EXCLUSIVAMENTE no formato CSS abaixo, com comentários claros sobre onde cada cor será usada:

/* src/styles/palette.css */
:root {
  /* Cores Principais */
  --brand-primary: #______;
  --brand-secondary: #______;

  /* Neutros (Fundo e Textos) */
  --neutral-dark: #______;
  --neutral-light: #______;
  --neutral-gray: #______;

  /* Feedbacks */
  --feedback-success: #______;
  --feedback-error: #______;
}

Agora, aqui estão os dados do cliente:
- Negócio: [descreva o negócio aqui]
- Cor de referência (se houver): [insira a cor ou "nenhuma"]
- Público-alvo (opcional): [descreva]

```

## ✅ Prompt de component

````
Você é um Engenheiro React especialista em UX.
Crie um componente funcional em TypeScript + CSS Modules conforme a especificação abaixo.

Regras:
- O componente será usado dentro de um `<Container>` existente no projeto (props: children, id, variant, padding, bgColor, className, columns).
- Você só precisa sugerir quantas colunas usar no container (ex: columns={3}) e mostrar um exemplo de uso.
- Não escreva media queries. A responsividade já é gerenciada pelo container.
- Inclua boas práticas de UX (hover, acessibilidade, feedback visual).

Entrada do usuário:
- Tipo de componente: [ex: pricing card, galeria, depoimentos]
- Dados esperados (props): [ex: { title, price, highlighted }]
- UX desejado: [ex: destaque para plano recomendado]
- Breakpoints de referência (não use no CSS): mobile até 768px, tablet 1024px, desktop acima

Saída obrigatória:
1. Código do componente .tsx
2. Código do CSS module .module.css
3. Exemplo de como usar com o Container (mostrando columns sugerida)

Exemplo de "como usar":

```tsx
// Uso recomendado:
<Container columns={4} padding="20" id="card-section">
  <Card name="Ana" />
  <Card name="Bruno" />
</Container>
````

### 📝 Como usar

Copie o prompt acima e adicione suas necessidades. Exemplo:

```

Tipo de componente: Card de serviço
Dados esperados: { image, title, description, ctaLink }
UX desejado: Sombra suave, escala 1.02 no hover, botão com foco visível
Breakpoints: mobile 768px, tablet 1024px


```
