import type { ReactNode, CSSProperties } from "react";
import React from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  id?: string;
  variant?: "flex" | "grid" | "block";
  padding?: string | number;
  bgColor?: string;
  className?: string;
  columns?: number;
}

export function Container({
  children,
  id,
  variant = "block",
  padding,
  bgColor,
  className = "",
  columns,
}: ContainerProps) {
  // Se o usuário passar 'columns', mudamos automaticamente para a variante 'grid'
  const activeVariant = columns ? "grid" : variant;
  const variantClass = styles[`container-inner-${activeVariant}`];

  // Verifica se devemos aplicar a classe de colunas dinâmicas
  const dynamicClass = columns ? styles["has-dynamic-columns"] : "";

  // Injeta estilos tradicionais e variáveis CSS personalizadas
  const customStyles: CSSProperties = {
    ...(padding !== undefined && { padding }),
    ...(bgColor && { backgroundColor: bgColor }),
    // Injeta a variável CSS que o @media query vai ler
    ...(columns !== undefined &&
      ({ "--dynamic-columns": columns } as React.CSSProperties)),
  };

  // Concatena as classes do container interno
  const innerClasses = [
    styles["container-inner-box"],
    variantClass,
    dynamicClass, // Adiciona a classe de colunas dinâmicas se existir
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={`${styles["custom-container-section"]} ${className}`}
      style={customStyles}
    >
      {/* O grid é aplicado aqui dentro, respeitando o max-width */}
      <div className={innerClasses}>{children}</div>
    </section>
  );
}
