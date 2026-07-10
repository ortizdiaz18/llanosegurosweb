import type { LucideIcon } from "lucide-react";

type EyebrowProps = {
  label: string;
  icon?: LucideIcon;
  /** Esquema para fondo claro u oscuro. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Etiqueta superior (eyebrow) al estilo Veritran: texto en mayúsculas con
 * amplio tracking y un pequeño badge de icono opcional. Componente puro.
 */
export function Eyebrow({ label, icon: Icon, tone = "light", className = "" }: EyebrowProps) {
  const isDark = tone === "dark";
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {Icon && (
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full border ${
            isDark ? "border-white/15 bg-white/5" : "border-[#0057B8]/15 bg-blue-50"
          }`}
        >
          <Icon className={`h-4 w-4 ${isDark ? "text-[#4DA3FF]" : "text-[#0057B8]"}`} />
        </span>
      )}
      <span
        className={`font-inter text-xs font-semibold uppercase tracking-[0.25em] ${
          isDark ? "text-[#4DA3FF]" : "text-[#0057B8]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default Eyebrow;
