import type React from "react";
import colors from "../styles/Styles";
import Button from "./UI/Button";

const styles: Record<string, React.CSSProperties> = {
  // Highlight
  highlightContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    borderRadius: "12px",
    overflow: "hidden",
    border: `1px solid ${colors.grayLine}`,
  },
  highlightLeft: {
    backgroundColor: colors.nightBlue,
    color: colors.offWhite,
    padding: "60px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  highlightRight: {
    backgroundColor: colors.offWhite,
    padding: "60px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  progressBarContainer: {
    marginBottom: "24px",
  },
  progressLabel: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: 700,
  },
  progressTrack: {
    height: "8px",
    backgroundColor: colors.grayLine,
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.gold,
    borderRadius: "4px",
    transition: "width 1s ease-out",
  },
};

const PROGRESS_DATA = [
  { label: "Eficiência Operacional", value: 95, className: "w-95" },
  { label: "Redução de Custos", value: 40, className: "w-40" },
  { label: "Satisfação da Equipe", value: 88, className: "w-88" },
];

const Highlight: React.FC = () => (
  <section style={styles.section} className="section-padding">
    <div style={styles.container}>
      <div
        style={styles.highlightContainer}
        className="highlight-container-mobile"
      >
        <div style={styles.highlightLeft}>
          <h2
            style={{
              ...styles.headingCinzel,
              fontSize: "32px",
              marginBottom: "24px",
            }}
          >
            POR QUE ESCOLHER NOSSA SOLUÇÃO?
          </h2>
          <p style={{ ...styles.textLato, marginBottom: "32px", opacity: 0.9 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Dados
            reais que comprovam nossa entrega.
          </p>
          <Button variant="gold" className="self-start-mobile">
            Falar com Especialista
          </Button>
        </div>
        <div style={styles.highlightRight}>
          {PROGRESS_DATA.map((item, idx) => (
            <div key={idx} style={styles.progressBarContainer}>
              <div style={styles.progressLabel}>
                <span>{item.label}</span>
                <span style={{ color: colors.gold }}>{item.value}%</span>
              </div>
              <div style={styles.progressTrack}>
                <div
                  style={styles.progressFill}
                  className={`progress-fill ${item.className}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Highlight;
