"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Settings, FileText, ShieldCheck, Layers, HelpCircle, Newspaper, LogOut,
} from "lucide-react";
import { logout } from "@/server/auth-actions";

const nav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/paginas", label: "Páginas", icon: FileText },
  { href: "/admin/ajustes", label: "Ajustes del sitio", icon: Settings },
  { href: "/admin/aseguradoras", label: "Aseguradoras", icon: ShieldCheck },
  { href: "/admin/seguros", label: "Seguros", icon: Layers },
  { href: "/admin/faq", label: "Preguntas frecuentes", icon: HelpCircle },
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-[#E6E9ED] bg-white">
      <div className="flex h-16 items-center gap-2.5 border-b border-[#E6E9ED] px-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/llano-mark.svg" alt="" className="h-7 w-auto" onError={(e) => (e.currentTarget.style.display = "none")} />
        <div className="leading-none">
          <div className="font-manrope text-sm font-extrabold text-[#1F2937]">Llano Seguros</div>
          <div className="font-inter text-[10px] uppercase tracking-widest text-[#0057B8]">Panel admin</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {nav.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 font-inter text-sm transition-colors ${
                active
                  ? "bg-blue-50 font-semibold text-[#0057B8]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#1F2937]"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#E6E9ED] p-3">
        <form action={logout}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 font-inter text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#1F2937]"
          >
            <LogOut className="h-4 w-4" /> Cerrar sesión
          </button>
        </form>
      </div>
    </aside>
  );
}

export default AdminSidebar;
