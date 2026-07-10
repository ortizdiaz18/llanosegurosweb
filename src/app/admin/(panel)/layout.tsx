import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-5xl px-6 py-8 md:px-10">{children}</div>
      </main>
    </div>
  );
}
