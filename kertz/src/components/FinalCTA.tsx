import colors from "../styles/Styles";
import Button from "./UI/Button/Button";

const styles: Record<string, React.CSSProperties> = {
  finalCta: {
    backgroundColor: colors.obsidian,
    color: colors.offWhite,
    textAlign: "center",
    padding: "100px 24px",
  },
  finalCtaTitle: {
    fontSize: "clamp(28px, 4vw, 42px)",
    marginBottom: "16px",
    color: colors.offWhite,
  },
  finalCtaText: {
    fontSize: "18px",
    marginBottom: "32px",
    opacity: 0.8,
    maxWidth: "600px",
    margin: "0 auto 32px",
  },
};

const FinalCTA: React.FC = () => (
  <section style={styles.finalCta}>
    <div style={styles.container}>
      <h2 style={{ ...styles.headingCinzel, ...styles.finalCtaTitle }}>
        NÃO DEIXE SEU CRESCIMENTO PARA DEPOIS
      </h2>
      <p style={{ ...styles.textLato, ...styles.finalCtaText }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Junte-se a
        centenas de empresas que já escalaram seus resultados com segurança e
        velocidade.
      </p>
      <Button variant="gold">Garantir Minha Vaga Agora</Button>
    </div>
  </section>
);

export default FinalCTA;
