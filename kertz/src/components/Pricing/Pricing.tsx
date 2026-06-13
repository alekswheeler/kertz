// src/components/Pricing/Pricing.tsx
import Button from "../UI/Button/Button";
import styles from "./Pricing.module.css";

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

const Pricing: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.pricingGrid}>
        {PRICING_DATA.map((plan, idx) => (
          <div
            key={idx}
            className={`${styles.pricingCard} ${
              plan.featured ? styles.pricingCardFeatured : ""
            }`}
          >
            {plan.featured && (
              <div className={styles.pricingBadge}>Mais Popular</div>
            )}
            <h3 className={styles.pricingTitle}>{plan.name}</h3>
            <div className={styles.pricingPrice}>{plan.price}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
              {plan.features.map((feat, fIdx) => (
                <li
                  key={fIdx}
                  className={`${styles.pricingFeature} ${
                    !feat.included ? styles.pricingFeatureMissing : ""
                  }`}
                >
                  <span>{feat.included ? "✓" : "✕"}</span>
                  <span>{feat.text}</span>
                </li>
              ))}
            </ul>
            <div className={styles.buttonWrapper}>
              <Button
                variant={plan.featured ? "gold" : "primary"}
                className="w-full"
              >
                Escolher Plano
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
