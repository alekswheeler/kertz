import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  id?: string;
  variant?: "flex" | "grid" | "block";
  padding?: string | number; // Aceita "20px", "2rem" ou número puro como 40
  bgColor?: string; // Aceita "red", "#ff0000", "var(--cor)"
  className?: string;
}

export function Container({
  children,
  id,
  variant = "block",
  padding,
  bgColor,
  className = "",
}: ContainerProps) {
  const variantClass = `container-inner-${variant}`;

  // Monta o estilo inline bruto padrão do HTML/Navegador
  const customStyles: React.CSSProperties = {
    ...(padding !== undefined && { padding }), // O React converte número puro para 'px' automaticamente aqui
    ...(bgColor && { backgroundColor: bgColor }),
  };

  return (
    <section
      id={id}
      className={`custom-container-section ${className}`}
      style={customStyles} // Injeta direto: style="padding: 10px; background-color: red;"
    >
      <div className={`container-inner-box ${variantClass}`}>{children}</div>
    </section>
  );
}
