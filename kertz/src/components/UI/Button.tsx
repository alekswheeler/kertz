import colors from "../../styles/Styles";

const styles: Record<string, React.CSSProperties> = {
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
};

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

export default Button;
