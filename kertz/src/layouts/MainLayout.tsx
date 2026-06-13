import type { ReactNode } from "react";
import Header from "../components/Header/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <header className="fixed top-0 w-full z-50">
        <Header />
      </header>

      {/* Conteúdo dinâmico (as seções do site) */}
      <main>{children}</main>

      {/* Rodapé Global */}
      <footer>
        {/* <FinalCTA /> */}
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
