import Link from "next/link";
import { Shield, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { getSiteSettings } from "@/content";

const quickLinks = [
  { label: "Seguros", href: "/seguros/auto" },
  { label: "Aseguradoras", href: "/aseguradoras" },
  { label: "¿Cómo funciona?", href: "/como-funciona" },
  { label: "Blog", href: "/blog" },
  { label: "Preguntas frecuentes", href: "/faq" },
];

const aboutLinks = [
  { label: "Quiénes somos", href: "/nosotros" },
  { label: "Trabaja con nosotros", href: "/nosotros" },
  { label: "Términos y condiciones", href: "/terminos" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Aviso legal", href: "/terminos" },
];

export default function Footer() {
  const settings = getSiteSettings();
  const socialLinks = [
    { icon: Facebook, href: settings.socials.facebook ?? "#", label: "Facebook" },
    { icon: Instagram, href: settings.socials.instagram ?? "#", label: "Instagram" },
    { icon: Linkedin, href: settings.socials.linkedin ?? "#", label: "LinkedIn" },
    { icon: Youtube, href: settings.socials.youtube ?? "#", label: "YouTube" },
  ];
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="container-wide py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4" aria-label="Llano Seguros - Inicio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-llano-blanco.png" alt="Llano Seguros" className="h-20 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-inter mb-5 max-w-xs">
              Protegemos lo que construyes. Tu tranquilidad es nuestra prioridad.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0057B8] transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-manrope font-bold text-white text-sm mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm font-inter hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-manrope font-bold text-white text-sm mb-4">Nosotros</h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm font-inter hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-manrope font-bold text-white text-sm mb-4">Contacto</h4>
            <ul className="space-y-2.5">
              <li className="text-gray-400 text-sm font-inter">Línea nacional: {settings.nationalLine}</li>
              <li className="text-gray-400 text-sm font-inter">WhatsApp: {settings.whatsappDisplay}</li>
              <li>
                <a href={`mailto:${settings.email}`} className="text-gray-400 text-sm font-inter hover:text-white transition-colors">
                  {settings.email}
                </a>
              </li>
              <li className="text-gray-400 text-sm font-inter">{settings.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-inter text-center sm:text-left">
            © 2026 Llano Seguros. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center">
              <Shield className="w-3 h-3 text-gray-400" />
            </div>
            <span className="text-gray-400 text-xs font-inter font-semibold">
              Vigilado por Superintendencia Financiera de Colombia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
