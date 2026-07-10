import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { readStore } from "@/server/content-store";
import { deleteBlogArticle, saveBlogArticle } from "@/server/content-actions";

export const dynamic = "force-dynamic";

function Input({ name, value, placeholder, form }: { name: string; value?: string; placeholder: string; form?: string }) {
  return (
    <input
      form={form}
      name={name}
      defaultValue={value}
      placeholder={placeholder}
      className="h-10 w-full rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm focus:border-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/20"
    />
  );
}

export default async function AdminBlog({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const articles = readStore().blog;
  const { saved, error } = await searchParams;

  return (
    <div>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-manrope text-2xl font-extrabold text-[#1F2937]">Blog</h1>
          <p className="mt-1 font-inter text-sm text-gray-500">{articles.length} artículos.</p>
        </div>
      </header>

      {saved && <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 font-inter text-sm text-green-700">Cambios guardados correctamente.</div>}
      {error && <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 font-inter text-sm text-red-700">Completa título, resumen e imagen.</div>}

      <details className="mb-6 rounded-2xl border border-[#E6E9ED] bg-white p-4">
        <summary className="inline-flex cursor-pointer items-center gap-2 font-inter text-sm font-semibold text-[#0057B8]">
          <Plus className="h-4 w-4" /> Nuevo artículo
        </summary>
        <form action={saveBlogArticle} className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <Input name="title" placeholder="Título" />
          <Input name="category" placeholder="Categoría" />
          <Input name="date" placeholder="Fecha visible" />
          <Input name="readTime" placeholder="Tiempo de lectura" />
          <Input name="img_url" placeholder="URL de imagen" />
          <label className="flex h-10 items-center gap-2 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm text-gray-600">
            <input name="featured" type="checkbox" className="accent-[#0057B8]" /> Destacado
          </label>
          <textarea
            name="excerpt"
            placeholder="Resumen"
            className="min-h-24 rounded-lg border border-[#E6E9ED] px-3 py-2 font-inter text-sm focus:border-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/20 md:col-span-2"
          />
          <button className="h-10 rounded-xl bg-[#0057B8] px-4 font-inter text-sm font-semibold text-white transition-colors hover:bg-[#004a9e] md:col-span-2">
            Guardar artículo
          </button>
        </form>
      </details>

      <div className="overflow-hidden rounded-2xl border border-[#E6E9ED] bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#E6E9ED] bg-[#F8FAFC] font-inter text-xs uppercase tracking-wide text-gray-400">
              <th className="px-5 py-3 font-medium">Título</th>
              <th className="px-5 py-3 font-medium">Categoría</th>
              <th className="px-5 py-3 font-medium">Fecha</th>
              <th className="px-5 py-3 text-right font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr key={a.id} className="border-b border-[#E6E9ED] last:border-0">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    {a.featured && <Star className="h-3.5 w-3.5 shrink-0 fill-[#F59E0B] text-[#F59E0B]" />}
                    <span className="font-inter text-sm font-medium text-[#1F2937]">{a.title}</span>
                  </div>
                  <details className="mt-2">
                    <summary className="inline-flex cursor-pointer items-center gap-1 font-inter text-xs text-[#0057B8]">
                      <Pencil className="h-3 w-3" /> Editar
                    </summary>
                    <form id={`blog-${a.id}`} action={saveBlogArticle} className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
                      <input type="hidden" name="id" value={a.id} />
                      <Input name="title" value={a.title} placeholder="Título" />
                      <Input name="category" value={a.category} placeholder="Categoría" />
                      <Input name="date" value={a.date} placeholder="Fecha" />
                      <Input name="readTime" value={a.readTime} placeholder="Tiempo" />
                      <Input name="img_url" value={a.img_url} placeholder="Imagen" />
                      <label className="flex h-10 items-center gap-2 rounded-lg border border-[#E6E9ED] px-3 font-inter text-sm text-gray-600">
                        <input name="featured" type="checkbox" defaultChecked={a.featured} className="accent-[#0057B8]" /> Destacado
                      </label>
                      <textarea
                        name="excerpt"
                        defaultValue={a.excerpt}
                        className="min-h-20 rounded-lg border border-[#E6E9ED] px-3 py-2 font-inter text-sm focus:border-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/20 md:col-span-2"
                      />
                      <button className="h-9 rounded-xl bg-[#0057B8] px-4 font-inter text-xs font-semibold text-white md:col-span-2">Guardar cambios</button>
                    </form>
                  </details>
                </td>
                <td className="px-5 py-3">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 font-inter text-xs font-medium text-[#0057B8]">{a.category}</span>
                </td>
                <td className="px-5 py-3 font-inter text-sm text-gray-500">{a.date}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <form action={deleteBlogArticle}>
                      <input type="hidden" name="id" value={a.id} />
                      <button className="rounded-lg border border-[#E6E9ED] p-2 text-gray-500 transition-colors hover:border-red-300 hover:text-red-500" aria-label="Eliminar">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </form>
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
