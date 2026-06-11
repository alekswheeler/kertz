import { Container } from "../../components/Layout/Container";
import { MainLayout } from "../../layouts/MainLayout";

//O container tem as propriedades

// src/pages/Home/index.tsx
export function Home() {
  return (
    <MainLayout>
      <Container id="teste" bgColor="red" padding="10">
        <h1>Isso é um titulo</h1>
        <p>Conteúdo principal do site</p>
      </Container>
    </MainLayout>
  );
}
