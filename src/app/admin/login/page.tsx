import { Lock } from "lucide-react";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";

async function login(formData: FormData) {
  "use server";
  try {
    await signIn("credentials", {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      redirect("/admin/login?error=1");
    }
    throw error; // re-lanza el redirect de éxito
  }
}

export default async function AdminLogin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border border-[#E6E9ED] bg-white p-8 shadow-sm">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
            <Lock className="h-6 w-6 text-[#0057B8]" />
          </div>
          <h1 className="font-manrope text-xl font-extrabold text-[#1F2937]">Panel de administración</h1>
          <p className="mt-1 font-inter text-sm text-gray-500">Llano Seguros</p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-center font-inter text-sm text-red-600">
            Correo o contraseña incorrectos.
          </div>
        )}

        <form action={login} className="space-y-4">
          <label className="block">
            <span className="mb-1.5 block font-inter text-sm font-medium text-gray-700">Correo</span>
            <input
              name="email"
              type="email"
              required
              placeholder="admin@llanoseguros.com"
              className="h-11 w-full rounded-xl border border-[#E6E9ED] px-3 font-inter text-sm focus:border-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/20"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-inter text-sm font-medium text-gray-700">Contraseña</span>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="h-11 w-full rounded-xl border border-[#E6E9ED] px-3 font-inter text-sm focus:border-[#0057B8] focus:outline-none focus:ring-2 focus:ring-[#0057B8]/20"
            />
          </label>
          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center rounded-xl bg-[#0057B8] font-inter text-sm font-semibold text-white transition-colors hover:bg-[#004a9e]"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
