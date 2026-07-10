"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ENABLE_LOGIN, ENABLE_QUOTER } from "@/lib/flags";
import { waUrl } from "@/lib/whatsapp";

const insuranceCategories = [
  { label: "Auto", href: "/seguros/auto" },
  { label: "Moto", href: "/seguros/moto" },
  { label: "Salud", href: "/seguros/salud" },
  { label: "Vida", href: "/seguros/vida" },
  { label: "Hogar", href: "/seguros/hogar" },
  { label: "Empresarial", href: "/seguros/empresarial" },
  { label: "Cumplimiento", href: "/seguros/cumplimiento" },
];

const navLinks = [
  { label: "¿Cómo funciona?", href: "/como-funciona" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset scroll state on route change
  useEffect(() => {
    setScrolled(window.scrollY > 30);
  }, [pathname]);

  const isTransparent = !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md border-b border-[#E6E9ED] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Llano Seguros - Inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isTransparent ? "/logo-llano-blanco.png" : "/logo-llano.png"}
              alt="Llano Seguros"
              className="h-16 md:h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isTransparent
                      ? "text-white/90 hover:text-white hover:bg-white/15"
                      : "text-gray-700 hover:text-[#0057B8] hover:bg-blue-50"
                  }`}
                >
                  Seguros <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 rounded-xl shadow-lg border-[#E6E9ED]">
                {insuranceCategories.map((cat) => (
                  <DropdownMenuItem key={cat.href} asChild>
                    <Link href={cat.href} className="cursor-pointer font-inter text-sm text-gray-700 hover:text-[#0057B8]">
                      {cat.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? isTransparent
                      ? "text-white bg-white/20"
                      : "text-[#0057B8] bg-blue-50"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/15"
                    : "text-gray-700 hover:text-[#0057B8] hover:bg-blue-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {ENABLE_LOGIN && (
              <Link href="/login">
                <Button
                  variant="outline"
                  className={`rounded-xl font-inter text-sm font-semibold transition-all duration-200 ${
                    isTransparent
                      ? "border-white/60 text-white bg-transparent hover:bg-white/20 hover:border-white"
                      : "border-[#0057B8] text-[#0057B8] hover:bg-[#0057B8] hover:text-white"
                  }`}
                >
                  Acceder
                </Button>
              </Link>
            )}
            {ENABLE_QUOTER ? (
              <Link href="/cotizar">
                <Button
                  className={`rounded-xl font-inter text-sm px-5 transition-all duration-200 ${
                    isTransparent
                      ? "bg-white text-[#0057B8] hover:bg-blue-50"
                      : "bg-[#0057B8] hover:bg-[#004a9e] text-white"
                  }`}
                >
                  Cotizar ahora
                </Button>
              </Link>
            ) : (
              <a href={waUrl()} target="_blank" rel="noopener noreferrer">
                <Button
                  className={`rounded-xl font-inter text-sm px-5 transition-all duration-200 ${
                    isTransparent
                      ? "bg-white text-[#0057B8] hover:bg-blue-50"
                      : "bg-[#0057B8] hover:bg-[#004a9e] text-white"
                  }`}
                >
                  Cotizar ahora
                </Button>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? "text-white hover:bg-white/20" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E6E9ED] px-4 py-4 space-y-1">
          <div className="font-medium text-xs text-gray-400 uppercase tracking-wider px-3 py-1 mb-2">Seguros</div>
          {insuranceCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0057B8] hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {cat.label}
            </Link>
          ))}
          <div className="border-t border-[#E6E9ED] my-3" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0057B8] hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-[#E6E9ED] my-3" />
          <div className="flex flex-col gap-2">
            {ENABLE_LOGIN && (
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full border-[#0057B8] text-[#0057B8] rounded-xl font-semibold">Acceder</Button>
              </Link>
            )}
            {ENABLE_QUOTER ? (
              <Link href="/cotizar" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-[#0057B8] hover:bg-[#004a9e] text-white rounded-xl">Cotizar ahora</Button>
              </Link>
            ) : (
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-[#0057B8] hover:bg-[#004a9e] text-white rounded-xl">Cotizar ahora</Button>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
