import { useState } from "react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Paleta de cores oficial
  const cores = {
    fundoPrincipal: "#F7F5F0",
    pretoObsidiana: "#0C0D10",
    ouroMineral: "#C5A880",
    cinzaLinha: "#E2E8F0",
    azulNoturno: "#1A2332",
  };

  const estilos = {
    header: {
      backgroundColor: "rgba(247, 245, 240, 0.85)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: `1px solid ${cores.cinzaLinha}`,
      padding: "15px 5%",
      //   position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    logo: {
      fontFamily: "'Cinzel', serif",
      fontSize: "26px",
      fontWeight: "700",
      color: cores.pretoObsidiana,
      textDecoration: "none",
      letterSpacing: "2px",
    },
    navDesktop: {
      display: "flex",
      gap: "30px",
      alignItems: "center",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
    link: {
      color: cores.pretoObsidiana,
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "15px",
      paddingBottom: "4px",
      transition: "color 0.3s ease",
    },
    btnPrimario: {
      backgroundColor: cores.pretoObsidiana,
      color: cores.fundoPrincipal,
      border: "none",
      padding: "10px 22px",
      borderRadius: "4px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    btnSecundario: {
      backgroundColor: "transparent",
      color: cores.pretoObsidiana,
      border: `1px solid ${cores.cinzaLinha}`,
      padding: "10px 22px",
      borderRadius: "4px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    menuHamburguer: {
      background: "none",
      border: "none",
      fontSize: "24px",
      color: cores.pretoObsidiana,
      cursor: "pointer",
    },
  };

  return (
    <header style={estilos.header}>
      <div style={estilos.container}>
        {/* Logotipo */}
        <a href="#home" style={estilos.logo}>
          KERTZ
        </a>

        {/* Menu Desktop */}
        <nav className="kertz-nav-desktop" style={estilos.navDesktop}>
          <a href="#home" style={estilos.link} className="kertz-nav-link ativo">
            Início
          </a>
          <a href="#sobre" style={estilos.link} className="kertz-nav-link">
            Sobre
          </a>
          <a href="#projetos" style={estilos.link} className="kertz-nav-link">
            Projetos
          </a>
          <button style={estilos.btnPrimario} className="btn-primario-hover">
            Contato
          </button>
        </nav>

        {/* Botão Hambúrguer (Apenas Mobile via CSS) */}
        <button
          style={estilos.menuHamburguer}
          className="kertz-btn-mobile"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
        >
          {menuAberto ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Retrátil Mobile */}
      {menuAberto && (
        <nav
          className="kertz-nav-mobile"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <a
            href="#home"
            style={estilos.link}
            className="kertz-nav-link"
            onClick={() => setMenuAberto(false)}
          >
            Início
          </a>
          <a
            href="#sobre"
            style={estilos.link}
            className="kertz-nav-link"
            onClick={() => setMenuAberto(false)}
          >
            Sobre
          </a>
          <a
            href="#projetos"
            style={estilos.link}
            className="kertz-nav-link"
            onClick={() => setMenuAberto(false)}
          >
            Projetos
          </a>
          <div className="botoes-wrapper">
            <button
              style={estilos.btnSecundario}
              className="btn-secundario-hover"
              onClick={() => setMenuAberto(false)}
            >
              Saiba Mais
            </button>
            <button
              style={estilos.btnPrimario}
              className="btn-primario-hover"
              onClick={() => setMenuAberto(false)}
            >
              Começar
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
