import moduleStyles from "./Features.module.css";

//TÁ SEM RESPONSIVIDADE

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
    <div className={`${moduleStyles.featuresGrid} features-grid-mobile`}>
      {FEATURES_DATA.map((feature, idx) => (
        <div key={idx} className={moduleStyles.featureCard}>
          <div className={moduleStyles.featureIcon}>{feature.icon}</div>
          <h3 className={moduleStyles.featureTitle}>{feature.title}</h3>
          <p className={moduleStyles.featureText}>{feature.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
