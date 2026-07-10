import { Pencil } from "lucide-react";
import { readStore } from "@/server/content-store";
import { saveInsuranceBasics } from "@/server/content-actions";

export const dynamic = "force-dynamic";

export default async function AdminInsurance({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const types = Object.values(readStore().insurance);
  const { saved, error } = await searchParams;

  return (
    <div>
      <header className="mb-6">
        <h1 className="font-manrope text-2xl font-extrabold text-[#1F2937]">Tipos de seguro</h1>
        <p className="mt-1 font-inter text-sm text-gray-500">
          Contenido de cada seguro: beneficios, coberturas, estadísticas y preguntas frecuentes.
        </p>
      </header>

      {saved && <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 font-inter text-sm text-green-700">Cambios guardados correctamente.</div>}
      {error && <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 font-inter text-sm text-red-700">No se pudo encontrar el seguro solicitado.</div>}

      <div className="overflow-hidden rounded-2xl border border-[#E6E9ED] bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#E6E9ED] bg-[#F8FAFC] font-inter text-xs uppercase tracking-wide text-gray-400">
              <th className="px-5 py-3 font-medium">Seguro</th>
              <th className="px-5 py-3 font-medium">Ruta</th>
              <th className="px-5 py-3 text-center font-medium">Beneficios</th>
              <th className="px-5 py-3 text-center font-medium">Coberturas</th>
              <th className="px-5 py-3 text-center font-medium">FAQ</th>
              <th className="px-5 py-3 text-right font-medium">Editar</th>
            </tr>
          </thead>
          <tbody>
            {types.map((t) => (
              <tr key={t.slug} className="border-b border-[#E6E9ED] last:border-0">
                <td className="px-5 py-3">
                  <div className="font-inter text-sm font-medium text-[#1F2937]">Seguro de {t.label}</div>
                  <div className="font-inter text-xs text-gray-400">{t.subtitle}</div>
                  <details className="mt-2">
                    <summary className="inline-flex cursor-pointer items-center gap-1 font-inter text-xs text-[#0057B8]">
                      <Pencil className="h-3 w-3" /> Editar textos principales
                    </summary>
                    <form action={saveInsuranceBasics} className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
                      <input type="hidden" name="slug" value={t.slug} />
                      <input name="label" defaultValue={t.label} className="h-9 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm" />
                      <input name="subtitle" defaultValue={t.subtitle} className="h-9 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm" />
                      <input name="tagline" defaultValue={t.tagline} className="h-9 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm md:col-span-2" />
                      <input name="heroBadge" defaultValue={t.heroBadge} className="h-9 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm md:col-span-2" />
                      <input name="img_url" defaultValue={t.img_url} className="h-9 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm md:col-span-2" />
                      <input name="heroImg_url" defaultValue={t.heroImg_url} className="h-9 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm md:col-span-2" />
                      <textarea name="heroDesc" defaultValue={t.heroDesc} className="min-h-20 rounded-lg border border-[#E6E9ED] px-3 py-2 font-inter text-sm md:col-span-2" />
                      <button className="h-9 rounded-xl bg-[#0057B8] px-4 font-inter text-xs font-semibold text-white md:col-span-2">Guardar cambios</button>
                    </form>
                  </details>
                </td>
                <td className="px-5 py-3 font-mono text-xs text-gray-400">/seguros/{t.slug}</td>
                <td className="px-5 py-3 text-center font-inter text-sm text-gray-600">{t.benefits.length}</td>
                <td className="px-5 py-3 text-center font-inter text-sm text-gray-600">{t.coverages.length}</td>
                <td className="px-5 py-3 text-center font-inter text-sm text-gray-600">{t.faqs.length}</td>
                <td className="px-5 py-3">
                  <div className="flex justify-end">
                    <a href={`/seguros/${t.slug}`} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#E6E9ED] p-2 text-gray-500 transition-colors hover:border-[#0057B8]/30 hover:text-[#0057B8]" aria-label="Ver">
                      <Pencil className="h-4 w-4" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
