import { Fragment } from "react";

type WordHighlightProps = {
  /** Texto con partes a resaltar entre dobles asteriscos, ej: "Hagamos **que suceda**". */
  text: string;
  className?: string;
  /** Clase aplicada a las palabras resaltadas. */
  highlightClassName?: string;
};

/**
 * Renderiza un texto resaltando en azul las porciones entre **dobles asteriscos**,
 * al estilo de los titulares de Veritran. Componente puro (sirve en Server Components).
 */
export function WordHighlight({
  text,
  className,
  highlightClassName = "text-[#0057B8]",
}: WordHighlightProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} className={highlightClassName}>
              {part.slice(2, -2)}
            </span>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </span>
  );
}

export default WordHighlight;
