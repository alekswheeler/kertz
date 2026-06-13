// src/components/Header/Header.tsx
import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logotipo */}
        <a href="#home" className={styles.logo}>
          KERTZ
        </a>

        {/* Menu Desktop */}
        <nav className={styles.navDesktop}>
          <a href="#home" className={`${styles.link} ${styles.ativo}`}>
            Início
          </a>
          <a href="#sobre" className={styles.link}>
            Sobre
          </a>
          <a href="#projetos" className={styles.link}>
            Projetos
          </a>
          <button className={styles.btnPrimario}>Contato</button>
        </nav>

        {/* Botão Hambúrguer */}
        <button
          className={styles.menuHamburguer}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
        >
          {menuAberto ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Retrátil Mobile */}
      {menuAberto && (
        <nav className={styles.navMobile}>
          <a
            href="#home"
            className={styles.link}
            onClick={() => setMenuAberto(false)}
          >
            Início
          </a>
          <a
            href="#sobre"
            className={styles.link}
            onClick={() => setMenuAberto(false)}
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className={styles.link}
            onClick={() => setMenuAberto(false)}
          >
            Projetos
          </a>
          <div className={styles.botoesWrapper}>
            <button
              className={styles.btnSecundario}
              onClick={() => setMenuAberto(false)}
            >
              Saiba Mais
            </button>
            <button
              className={styles.btnPrimario}
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
