type DotGridProps = {
  className?: string;
  /** Color de los puntos (por defecto blanco tenue para fondos oscuros). */
  color?: string;
  /** Separación entre puntos en px. */
  gap?: number;
  /** Opacidad global. */
  opacity?: number;
};

/**
 * Patrón de puntos sutil como fondo decorativo, al estilo de las secciones
 * oscuras de Veritran. Puramente CSS (sirve en Server Components).
 */
export function DotGrid({
  className = "",
  color = "rgba(255,255,255,0.10)",
  gap = 26,
  opacity = 1,
}: DotGridProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        opacity,
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: `${gap}px ${gap}px`,
      }}
    />
  );
}

export default DotGrid;
