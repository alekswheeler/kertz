import React from "react";

// ============================================================================
// 1. CONSTANTES DE DADOS (Fora dos componentes)
// ============================================================================

const METRICS_DATA = [
  { value: "98%", label: "Satisfação dos Clientes" },
  { value: "2.5x", label: "ROI Médio no 1º Ano" },
  { value: "24/7", label: "Suporte Humano Dedicado" },
  { value: "500+", label: "Empresas Transformadas" },
];

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

const PROGRESS_DATA = [
  { label: "Eficiência Operacional", value: 95, className: "w-95" },
  { label: "Redução de Custos", value: 40, className: "w-40" },
  { label: "Satisfação da Equipe", value: 88, className: "w-88" },
];

const PRICING_DATA = [
  {
    name: "Essencial",
    price: "R$ 99/mês",
    featured: false,
    features: [
      { text: "Até 5 usuários", included: true },
      { text: "Suporte por e-mail", included: true },
      { text: "Relatórios básicos", included: true },
      { text: "API dedicada", included: false },
      { text: "Gerente de conta", included: false },
    ],
  },
  {
    name: "Profissional",
    price: "R$ 249/mês",
    featured: true,
    features: [
      { text: "Até 20 usuários", included: true },
      { text: "Suporte prioritário 24/7", included: true },
      { text: "Relatórios avançados", included: true },
      { text: "API dedicada", included: true },
      { text: "Gerente de conta", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    featured: false,
    features: [
      { text: "Usuários ilimitados", included: true },
      { text: "Suporte prioritário 24/7", included: true },
      { text: "Relatórios personalizados", included: true },
      { text: "API dedicada", included: true },
      { text: "Gerente de conta exclusivo", included: true },
    ],
  },
];

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

// ============================================================================
// 2. OBJETO DE ESTILOS (Record<string, React.CSSProperties>)
// ============================================================================

const colors = {
  offWhite: "#F7F5F0",
  obsidian: "#0C0D10",
  nightBlue: "#1A2332",
  gold: "#C5A880",
  grayLine: "#E2E8F0",
};

const styles: Record<string, React.CSSProperties> = {
  main: {
    backgroundColor: colors.offWhite,
    color: colors.obsidian,
    fontFamily: "'Lato', sans-serif",
    minHeight: "100vh",
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  section: {
    padding: "80px 0",
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
  // Hero
  hero: {
    paddingTop: "120px",
    paddingBottom: "80px",
    textAlign: "center",
  },
  socialProof: {
    color: colors.gold,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontSize: "14px",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "clamp(32px, 5vw, 56px)",
    color: colors.obsidian,
    marginBottom: "24px",
  },
  heroSubtitle: {
    fontSize: "18px",
    color: colors.obsidian,
    opacity: 0.8,
    maxWidth: "600px",
    margin: "0 auto 40px",
  },
  heroButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    marginBottom: "60px",
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  metricCard: {
    padding: "24px",
    border: `1px solid ${colors.grayLine}`,
    borderRadius: "8px",
    backgroundColor: colors.offWhite,
  },
  metricValue: {
    fontSize: "36px",
    fontWeight: 700,
    color: colors.gold,
    fontFamily: "'Cinzel', serif",
  },
  metricLabel: {
    fontSize: "14px",
    color: colors.obsidian,
    opacity: 0.7,
    marginTop: "8px",
  },
  // Buttons
  btnPrimary: {
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: 700,
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    backgroundColor: colors.obsidian,
    color: colors.offWhite,
  },
  btnSecondary: {
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: 700,
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: `1px solid ${colors.grayLine}`,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    backgroundColor: "transparent",
    color: colors.obsidian,
  },
  btnGold: {
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: 700,
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    backgroundColor: colors.gold,
    color: colors.obsidian,
  },
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
  // Pricing
  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    alignItems: "center",
  },
  pricingCard: {
    padding: "40px 32px",
    borderRadius: "12px",
    border: `1px solid ${colors.grayLine}`,
    backgroundColor: colors.offWhite,
    position: "relative",
  },
  pricingCardFeatured: {
    backgroundColor: colors.nightBlue,
    color: colors.offWhite,
    borderColor: colors.nightBlue,
    transform: "scale(1.05)",
    zIndex: 1,
  },
  pricingBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: colors.gold,
    color: colors.obsidian,
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  pricingTitle: {
    fontSize: "24px",
    marginBottom: "8px",
  },
  pricingPrice: {
    fontSize: "48px",
    fontWeight: 700,
    fontFamily: "'Cinzel', serif",
    marginBottom: "24px",
  },
  pricingFeature: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
    fontSize: "15px",
  },
  pricingFeatureMissing: {
    opacity: 0.5,
    textDecoration: "line-through",
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
  // Final CTA
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

// ============================================================================
// 3. COMPONENTES
// ============================================================================

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold";
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const style =
    variant === "primary"
      ? styles.btnPrimary
      : variant === "secondary"
        ? styles.btnSecondary
        : styles.btnGold;

  const hoverClass = `btn-hover-${variant}`;

  return (
    <button
      style={style}
      className={`${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Hero: React.FC = () => (
  <section style={styles.hero} className="section-padding">
    <div style={styles.container}>
      <p style={styles.socialProof}>
        +500 EMPRESAS JÁ TRANSFORMARAM SEUS RESULTADOS
      </p>
      <h1 style={{ ...styles.headingCinzel, ...styles.heroTitle }}>
        Transforme Sua Operação em Resultados Extraordinários
      </h1>
      <p style={{ ...styles.textLato, ...styles.heroSubtitle }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div style={styles.heroButtons} className="hero-buttons-mobile">
        <Button variant="primary">Começar Agora</Button>
        <Button variant="secondary">Ver Demonstração</Button>
      </div>
      <div style={styles.metricsGrid} className="metrics-grid-mobile">
        {METRICS_DATA.map((metric, idx) => (
          <div key={idx} style={styles.metricCard}>
            <div style={styles.metricValue}>{metric.value}</div>
            <div style={styles.metricLabel}>{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section style={styles.section} className="section-padding">
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

const Pricing: React.FC = () => (
  <section style={styles.section} className="section-padding">
    <div style={styles.container}>
      <div style={styles.pricingGrid} className="pricing-grid-mobile">
        {PRICING_DATA.map((plan, idx) => (
          <div
            key={idx}
            style={{
              ...styles.pricingCard,
              ...(plan.featured ? styles.pricingCardFeatured : {}),
            }}
            className={plan.featured ? "pricing-featured" : ""}
          >
            {plan.featured && (
              <div style={styles.pricingBadge}>Mais Popular</div>
            )}
            <h3 style={{ ...styles.headingLato, ...styles.pricingTitle }}>
              {plan.name}
            </h3>
            <div
              style={{
                ...styles.pricingPrice,
                color: plan.featured ? colors.gold : colors.obsidian,
              }}
            >
              {plan.price}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
              {plan.features.map((feat, fIdx) => (
                <li
                  key={fIdx}
                  style={{
                    ...styles.pricingFeature,
                    ...(feat.included ? {} : styles.pricingFeatureMissing),
                  }}
                >
                  <span>{feat.included ? "✓" : "✕"}</span>
                  <span>{feat.text}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.featured ? "gold" : "primary"}
              className="w-full"
            >
              Escolher Plano
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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

// ============================================================================
// 4. EXPORT DEFAULT
// ============================================================================

export { Hero, Features, Highlight, Pricing, Testimonials, FinalCTA };
