import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

// El panel no se puede proteger con middleware/proxy: Next 16 lo corre en Node.js
// y el adaptador de Cloudflare aún no lo soporta. Por eso la protección vive aquí,
// del lado servidor: cada carga del layout del panel verifica la sesión.
export const dynamic = "force-dynamic";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-5xl px-6 py-8 md:px-10">{children}</div>
      </main>
    </div>
  );
}
