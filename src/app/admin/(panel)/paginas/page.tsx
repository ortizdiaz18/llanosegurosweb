import { Pencil, ExternalLink } from "lucide-react";
import Link from "next/link";

const pages = [
  { label: "Inicio", desc: "Héroe, categorías, proceso, impacto, beneficios, testimonios y CTAs.", url: "/" },
  { label: "Nosotros", desc: "Historia, fundación, misión y visión, valores e hitos.", url: "/nosotros" },
  { label: "¿Cómo funciona?", desc: "Pasos del proceso, financiación, ventajas y testimonio.", url: "/como-funciona" },
  { label: "Aseguradoras", desc: "Héroe, beneficios y textos de la página de aseguradoras.", url: "/aseguradoras" },
  { label: "Términos y condiciones", desc: "Título, fecha de actualización y secciones del documento legal.", url: "/terminos" },
  { label: "Política de privacidad", desc: "Título, fecha de actualización y secciones del documento legal.", url: "/privacidad" },
];

export default function AdminPages() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="font-manrope text-2xl font-extrabold text-[#1F2937]">Páginas</h1>
        <p className="mt-1 font-inter text-sm text-gray-500">
          Textos editables de las páginas del sitio (títulos, descripciones, listas y CTAs).
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pages.map((p) => (
          <div key={p.label} className="rounded-2xl border border-[#E6E9ED] bg-white p-5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <div className="font-manrope text-lg font-bold text-[#1F2937]">{p.label}</div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-0.5 inline-flex items-center gap-1 font-inter text-xs text-[#0057B8] hover:underline">
                  {p.url} <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <Link href="/admin/paginas" className="shrink-0 rounded-lg border border-[#E6E9ED] p-2 text-gray-500 transition-colors hover:border-[#0057B8]/30 hover:text-[#0057B8]" aria-label="Editar">
                <Pencil className="h-4 w-4" />
              </Link>
            </div>
            <p className="font-inter text-sm leading-relaxed text-gray-500">{p.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-inter text-xs text-amber-800">
        Todos estos textos ya están centralizados y listos para editarse. Los formularios de edición
        y el guardado se activan al conectar la base de datos (Cloudflare D1) en la siguiente fase.
      </p>
    </div>
  );
}
