"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-tinta/10 py-4 relative">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl font-semibold text-tinta"
          onClick={() => setOpen(false)}
        >
          <Image src="/logo/logo-header.png" alt="Coral arte floral" width={44} height={20} className="h-8 w-auto" />
          Coral <span className="text-coral">arte floral</span>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex gap-7 text-sm text-tinta/70">
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden text-tinta text-2xl leading-none"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú desplegable mobile */}
      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pt-3 pb-1 text-sm text-tinta/80 bg-white">
          <Link href="/catalogo" className="py-2 border-t border-tinta/10" onClick={() => setOpen(false)}>
            Catálogo
          </Link>
          <Link href="/nosotros" className="py-2 border-t border-tinta/10" onClick={() => setOpen(false)}>
            Nosotros
          </Link>
          <Link href="/contacto" className="py-2 border-t border-b border-tinta/10" onClick={() => setOpen(false)}>
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
