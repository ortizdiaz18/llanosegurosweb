import Link from "next/link";
import { ShieldCheck, Layers, HelpCircle, Newspaper, ArrowRight } from "lucide-react";
import { readStore } from "@/server/content-store";

export const dynamic = "force-dynamic";

export default function AdminDashboard() {
  const store = readStore();
  const insurers = store.insurers;
  const insurance = Object.values(store.insurance);
  const faqCats = store.faq;
  const faqCount = faqCats.reduce((n, c) => n + c.faqs.length, 0);
  const articles = store.blog;

  const cards = [
    { label: "Aseguradoras", value: insurers.length, href: "/admin/aseguradoras", icon: ShieldCheck },
    { label: "Tipos de seguro", value: insurance.length, href: "/admin/seguros", icon: Layers },
    { label: "Preguntas frecuentes", value: faqCount, href: "/admin/faq", icon: HelpCircle },
    { label: "Artículos del blog", value: articles.length, href: "/admin/blog", icon: Newspaper },
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="font-manrope text-2xl font-extrabold text-[#1F2937]">Panel de administración</h1>
        <p className="mt-1 font-inter text-sm text-gray-500">
          Gestiona el contenido del sitio de Llano Seguros.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {cards.map(({ label, value, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="group rounded-2xl border border-[#E6E9ED] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#0057B8]/30 hover:shadow-md"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <Icon className="h-5 w-5 text-[#0057B8]" />
            </div>
            <div className="font-manrope text-3xl font-extrabold text-[#1F2937]">{value}</div>
            <div className="mt-0.5 font-inter text-sm text-gray-500">{label}</div>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-[#E6E9ED] bg-white p-6">
        <h2 className="font-manrope text-lg font-bold text-[#1F2937]">Accesos rápidos</h2>
        <p className="mt-1 font-inter text-sm text-gray-500">Edita las secciones más comunes.</p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { label: "Ajustes del sitio (contacto, WhatsApp, redes)", href: "/admin/ajustes" },
            { label: "Aseguradoras aliadas y sus logos", href: "/admin/aseguradoras" },
            { label: "Contenido de los tipos de seguro", href: "/admin/seguros" },
            { label: "Preguntas frecuentes", href: "/admin/faq" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-between rounded-xl border border-[#E6E9ED] px-4 py-3 font-inter text-sm text-gray-700 transition-colors hover:border-[#0057B8]/30 hover:bg-blue-50/40"
            >
              {label}
              <ArrowRight className="h-4 w-4 text-[#0057B8]" />
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 font-inter text-xs text-blue-800">
        El panel trabaja con datos locales persistidos en .data/content.json. La siguiente fase
        natural es mover este mismo modelo a Cloudflare D1 con Drizzle.
      </p>
    </div>
  );
}
