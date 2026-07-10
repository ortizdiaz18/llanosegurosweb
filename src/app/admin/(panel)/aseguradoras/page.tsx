import { Plus, Trash2 } from "lucide-react";
import { readStore } from "@/server/content-store";
import { deleteInsurer, saveInsurer } from "@/server/content-actions";

export const dynamic = "force-dynamic";

function Field({ name, value, placeholder, form }: { name: string; value?: string; placeholder: string; form?: string }) {
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

export default async function AdminInsurers({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const insurers = readStore().insurers;
  const { saved, error } = await searchParams;

  return (
    <div>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-manrope text-2xl font-extrabold text-[#1F2937]">Aseguradoras</h1>
          <p className="mt-1 font-inter text-sm text-gray-500">{insurers.length} aseguradoras aliadas.</p>
        </div>
      </header>

      {saved && <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 font-inter text-sm text-green-700">Cambios guardados correctamente.</div>}
      {error && <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 font-inter text-sm text-red-700">Completa nombre y logo.</div>}

      <form action={saveInsurer} className="mb-6 grid grid-cols-1 gap-3 rounded-2xl border border-[#E6E9ED] bg-white p-4 md:grid-cols-[1fr_2fr_auto]">
        <Field name="name" placeholder="Nombre de aseguradora" />
        <Field name="logo" placeholder="/aseguradoras/logo.png o URL" />
        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#0057B8] px-4 font-inter text-sm font-semibold text-white transition-colors hover:bg-[#004a9e]">
          <Plus className="h-4 w-4" /> Agregar
        </button>
      </form>

      <div className="overflow-hidden rounded-2xl border border-[#E6E9ED] bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#E6E9ED] bg-[#F8FAFC] font-inter text-xs uppercase tracking-wide text-gray-400">
              <th className="px-5 py-3 font-medium">Logo</th>
              <th className="px-5 py-3 font-medium">Nombre</th>
              <th className="px-5 py-3 font-medium">Archivo</th>
              <th className="px-5 py-3 text-right font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {insurers.map((ins, index) => (
              <tr key={ins.name} className="border-b border-[#E6E9ED] last:border-0">
                <td className="px-5 py-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ins.logo} alt={ins.name} className="h-7 w-auto max-w-[90px] object-contain" />
                </td>
                <td className="px-5 py-3">
                  <form id={`insurer-${index}`} action={saveInsurer}>
                    <input type="hidden" name="index" value={index} />
                  </form>
                  <Field form={`insurer-${index}`} name="name" value={ins.name} placeholder="Nombre" />
                </td>
                <td className="px-5 py-3">
                  <Field form={`insurer-${index}`} name="logo" value={ins.logo} placeholder="Logo" />
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button form={`insurer-${index}`} className="rounded-lg border border-[#E6E9ED] px-3 py-2 font-inter text-xs font-semibold text-gray-600 transition-colors hover:border-[#0057B8]/30 hover:text-[#0057B8]">
                      Guardar
                    </button>
                    <form action={deleteInsurer}>
                      <input type="hidden" name="index" value={index} />
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

      <p className="mt-5 font-inter text-xs text-gray-400">
        Los logos se guardan en /public/aseguradoras/. Con Cloudflare (Fase 2) se subirán a R2 desde aquí.
      </p>
    </div>
  );
}
