import { readStore } from "@/server/content-store";
import { saveSettings } from "@/server/content-actions";

export const dynamic = "force-dynamic";

function Field({ label, name, value, hint }: { label: string; name: string; value: string; hint?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-inter text-sm font-medium text-gray-700">{label}</span>
      <input
        name={name}
        defaultValue={value}
        className="h-11 w-full rounded-xl border border-[#E6E9ED] px-3 font-inter text-sm text-[#1F2937] focus:border-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/20"
      />
      {hint && <span className="mt-1 block font-inter text-xs text-gray-400">{hint}</span>}
    </label>
  );
}

export default async function AdminSettings({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const s = readStore().site;
  const { saved } = await searchParams;

  return (
    <div>
      <header className="mb-6">
        <h1 className="font-manrope text-2xl font-extrabold text-[#1F2937]">Ajustes del sitio</h1>
        <p className="mt-1 font-inter text-sm text-gray-500">Marca, contacto y redes sociales.</p>
      </header>

      {saved && (
        <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 font-inter text-sm text-green-700">
          Cambios guardados correctamente.
        </div>
      )}

      <form action={saveSettings} className="space-y-6 rounded-2xl border border-[#E6E9ED] bg-white p-6 md:p-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Nombre de la marca" name="brandName" value={s.brandName} />
          <Field label="Eslogan" name="tagline" value={s.tagline} />
          <Field label="WhatsApp (para los CTA)" name="whatsappNumber" value={s.whatsappNumber} hint="Formato internacional sin +" />
          <Field label="WhatsApp (visible)" name="whatsappDisplay" value={s.whatsappDisplay} />
          <Field label="Correo" name="email" value={s.email} />
          <Field label="Línea nacional" name="nationalLine" value={s.nationalLine} />
          <Field label="Dirección" name="address" value={s.address} />
          <Field label="Ciudad" name="city" value={s.city} />
          <Field label="Horario" name="hours" value={s.hours} />
        </div>

        <div className="border-t border-[#E6E9ED] pt-6">
          <h2 className="mb-4 font-manrope text-sm font-bold text-[#1F2937]">Redes sociales</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Facebook" name="facebook" value={s.socials.facebook ?? ""} />
            <Field label="Instagram" name="instagram" value={s.socials.instagram ?? ""} />
            <Field label="LinkedIn" name="linkedin" value={s.socials.linkedin ?? ""} />
            <Field label="YouTube" name="youtube" value={s.socials.youtube ?? ""} />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-[#E6E9ED] pt-6">
          <button
            type="submit"
            className="rounded-xl bg-[#0057B8] px-6 py-2.5 font-inter text-sm font-semibold text-white transition-colors hover:bg-[#004a9e]"
          >
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
}
