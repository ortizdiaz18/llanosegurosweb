import { ENABLE_QUOTER } from "@/lib/flags";

/**
 * Muestra su contenido solo si el cotizador online está habilitado
 * (feature flag NEXT_PUBLIC_ENABLE_QUOTER). Úsalo para ocultar accesos a /cotizar.
 */
export function QuoterGate({ children }: { children: React.ReactNode }) {
  if (!ENABLE_QUOTER) return null;
  return <>{children}</>;
}

export default QuoterGate;
