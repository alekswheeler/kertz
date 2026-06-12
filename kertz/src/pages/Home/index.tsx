import Features from "../../components/Features";
import FinalCTA from "../../components/FinalCTA";
import Hero from "../../components/Hero";
import { Container } from "../../components/Layout/Container";
import Pricing from "../../components/Pricing";
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
      <Container>
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
      </Container>
    </MainLayout>
  );
}
