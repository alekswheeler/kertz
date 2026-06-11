import colors from "../styles/Styles";

const TESTIMONIALS_DATA = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A solução transformou completamente nosso fluxo de trabalho e eliminou gargalos críticos.",
    name: "Ana Silva",
    role: "CEO, TechStart",
    avatar: "AS",
  },
  {
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A redução de custos foi imediatamente perceptível já no primeiro trimestre.",
    name: "Carlos Mendes",
    role: "Diretor de Operações, LogiCorp",
    avatar: "CM",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco. O suporte é excepcional e a implementação foi incrivelmente fluida para nossa equipe de TI.",
    name: "Mariana Costa",
    role: "Gerente de TI, InnovateFin",
    avatar: "MC",
  },
];

const styles: Record<string, React.CSSProperties> = {
  main: {
    backgroundColor: colors.offWhite,
    color: colors.obsidian,
    fontFamily: "'Lato', sans-serif",
    minHeight: "100vh",
    width: "100%",
  },
  container: {
    margin: "0 auto",
    padding: "0 24px",
  },
  section: {
    padding: "80px 0",
    backgroundColor: colors.offWhite,
  },
  headingCinzel: {
    fontFamily: "'Cinzel', serif",
    fontWeight: 700,
    textTransform: "uppercase",
    lineHeight: 1.2,
  },
  headingLato: {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 700,
  },
  textLato: {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    lineHeight: 1.6,
  },
  // Testimonials
  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
  },
  testimonialCard: {
    padding: "32px",
    backgroundColor: colors.offWhite,
    border: `1px solid ${colors.grayLine}`,
    borderRadius: "8px",
  },
  testimonialQuote: {
    fontSize: "18px",
    fontStyle: "italic",
    marginBottom: "24px",
    color: colors.obsidian,
    opacity: 0.9,
  },
  testimonialAuthor: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  testimonialAvatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: colors.gold,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.obsidian,
    fontWeight: 700,
    fontSize: "18px",
  },
  testimonialName: {
    fontWeight: 700,
    fontSize: "16px",
  },
  testimonialRole: {
    fontSize: "14px",
    opacity: 0.7,
  },
};

const Testimonials: React.FC = () => (
  <section style={styles.section} className="section-padding">
    <div style={styles.container}>
      <div style={styles.testimonialsGrid} className="testimonials-grid-mobile">
        {TESTIMONIALS_DATA.map((t, idx) => (
          <div key={idx} style={styles.testimonialCard}>
            <p style={{ ...styles.textLato, ...styles.testimonialQuote }}>
              "{t.quote}"
            </p>
            <div style={styles.testimonialAuthor}>
              <div style={styles.testimonialAvatar}>{t.avatar}</div>
              <div>
                <div style={styles.testimonialName}>{t.name}</div>
                <div style={{ ...styles.textLato, ...styles.testimonialRole }}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
