import colors from "../styles/Styles";
import Button from "./UI/Button";

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

const styles: Record<string, React.CSSProperties> = {
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
};

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

export default Pricing;
