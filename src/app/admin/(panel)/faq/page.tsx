import { Plus, Pencil, Trash2 } from "lucide-react";
import { readStore } from "@/server/content-store";
import { deleteFaqItem, saveFaqItem } from "@/server/content-actions";

export const dynamic = "force-dynamic";

export default async function AdminFaq({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const categories = readStore().faq;
  const { saved, error } = await searchParams;

  return (
    <div>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-manrope text-2xl font-extrabold text-[#1F2937]">Preguntas frecuentes</h1>
          <p className="mt-1 font-inter text-sm text-gray-500">{categories.length} categorías.</p>
        </div>
      </header>

      {saved && <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 font-inter text-sm text-green-700">Cambios guardados correctamente.</div>}
      {error && <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 font-inter text-sm text-red-700">Completa pregunta y respuesta.</div>}

      <details className="mb-6 rounded-2xl border border-[#E6E9ED] bg-white p-4">
        <summary className="inline-flex cursor-pointer items-center gap-2 font-inter text-sm font-semibold text-[#0057B8]">
          <Plus className="h-4 w-4" /> Nueva pregunta
        </summary>
        <form action={saveFaqItem} className="mt-4 grid grid-cols-1 gap-3">
          <input name="category" placeholder="Categoría" className="h-10 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm focus:border-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/20" />
          <input name="q" placeholder="Pregunta" className="h-10 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm focus:border-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/20" />
          <textarea name="a" placeholder="Respuesta" className="min-h-24 rounded-lg border border-[#E6E9ED] px-3 py-2 font-inter text-sm focus:border-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/20" />
          <button className="h-10 rounded-xl bg-[#0057B8] px-4 font-inter text-sm font-semibold text-white transition-colors hover:bg-[#004a9e]">Guardar pregunta</button>
        </form>
      </details>

      <div className="space-y-5">
        {categories.map((cat, categoryIndex) => (
          <div key={cat.label} className="overflow-hidden rounded-2xl border border-[#E6E9ED] bg-white">
            <div className="flex items-center justify-between border-b border-[#E6E9ED] bg-[#F8FAFC] px-5 py-3">
              <span className="font-manrope text-sm font-bold text-[#1F2937]">{cat.label}</span>
              <span className="font-inter text-xs text-gray-400">{cat.faqs.length} preguntas</span>
            </div>
            <ul>
              {cat.faqs.map((f, itemIndex) => (
                <li key={f.q} className="flex items-start justify-between gap-4 border-b border-[#E6E9ED] px-5 py-3 last:border-0">
                  <div>
                    <div className="font-inter text-sm font-medium text-[#1F2937]">{f.q}</div>
                    <div className="mt-0.5 line-clamp-1 font-inter text-xs text-gray-400">{f.a}</div>
                    <details className="mt-2">
                      <summary className="inline-flex cursor-pointer items-center gap-1 font-inter text-xs text-[#0057B8]">
                        <Pencil className="h-3 w-3" /> Editar
                      </summary>
                      <form action={saveFaqItem} className="mt-3 grid grid-cols-1 gap-2">
                        <input type="hidden" name="categoryIndex" value={categoryIndex} />
                        <input type="hidden" name="itemIndex" value={itemIndex} />
                        <input name="category" defaultValue={cat.label} className="h-9 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm" />
                        <input name="q" defaultValue={f.q} className="h-9 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm" />
                        <textarea name="a" defaultValue={f.a} className="min-h-20 rounded-lg border border-[#E6E9ED] px-3 py-2 font-inter text-sm" />
                        <button className="h-9 rounded-xl bg-[#0057B8] px-4 font-inter text-xs font-semibold text-white">Guardar cambios</button>
                      </form>
                    </details>
                  </div>
                  <form action={deleteFaqItem}>
                    <input type="hidden" name="categoryIndex" value={categoryIndex} />
                    <input type="hidden" name="itemIndex" value={itemIndex} />
                    <button className="mt-0.5 shrink-0 rounded-lg border border-[#E6E9ED] p-2 text-gray-500 transition-colors hover:border-red-300 hover:text-red-500" aria-label="Eliminar">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
