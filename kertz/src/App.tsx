// src/App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import Hero from "./components/Hero";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas/Institucionais */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Hero />} />
        {/* Rota de um painel interno, por exemplo */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
