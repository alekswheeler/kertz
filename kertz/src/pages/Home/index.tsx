import { Container } from "../../components/layout/Container";
import { MainLayout } from "../../layouts/MainLayout";

// ATENÇÃO
// Menu de navegação, NÃO fica na página, fica no Layout
// Footer, NÃO fica na página, fica no Layout

//Exemplo
// <Container id="example" bgColor="red" padding="10">
//   <h1>Isso é um titulo</h1>
//   <p>Conteúdo principal do site</p>
// </Container>

// src/pages/Home/index.tsx
export function Home() {
  return (
    <MainLayout>
      {/* <Container>
        <Hero />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <Pricing />
      </Container>
      <Container>
        <FinalCTA />
      </Container> */}
      <Container bgColor="red" columns={2}>
        <div>AAA</div>
        <div>BBB</div>
      </Container>
    </MainLayout>
  );
}
