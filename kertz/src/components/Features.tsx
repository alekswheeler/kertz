import colors from "../styles/Styles";

const styles: Record<string, React.CSSProperties> = {
  // Features
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
  },
  featureCard: {
    padding: "32px",
    border: `1px solid ${colors.grayLine}`,
    borderRadius: "8px",
    textAlign: "center",
  },
  featureIcon: {
    fontSize: "32px",
    color: colors.gold,
    marginBottom: "16px",
  },
  featureTitle: {
    fontSize: "20px",
    marginBottom: "12px",
    color: colors.obsidian,
  },
  featureText: {
    fontSize: "15px",
    color: colors.obsidian,
    opacity: 0.8,
  },
};

const FEATURES_DATA = [
  {
    icon: "⚡",
    title: "Implementação em 24h",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem burocracia, integrações complexas ou esperas prolongadas que travam sua operação.",
  },
  {
    icon: "🛡️",
    title: "Sem Contratos de Longo Prazo",
    text: "Lorem ipsum dolor sit amet. Cancele a qualquer momento sem multas abusivas, taxas ocultas ou letras miúdas em juridiquês.",
  },
  {
    icon: "🤝",
    title: "Suporte Humano Dedicado",
    text: "Lorem ipsum dolor sit amet. Fale diretamente com especialistas reais que conhecem seu negócio, não com bots genéricos ou filas infinitas.",
  },
];

const Features: React.FC = () => (
  <section className="section" id="features">
    <div style={styles.container}>
      <div style={styles.featuresGrid} className="features-grid-mobile">
        {FEATURES_DATA.map((feature, idx) => (
          <div key={idx} style={styles.featureCard}>
            <div style={styles.featureIcon}>{feature.icon}</div>
            <h3 style={{ ...styles.headingLato, ...styles.featureTitle }}>
              {feature.title}
            </h3>
            <p style={{ ...styles.textLato, ...styles.featureText }}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
