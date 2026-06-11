import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <header className="fixed top-0 w-full z-50">
        {/* <Header /> */}

        <h1>ISSO AQUI É UM HEADER</h1>
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
