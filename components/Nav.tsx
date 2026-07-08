"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-musgo py-4 relative">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-semibold text-papel" onClick={() => setOpen(false)}>
          Florería <span className="text-coral">Coral</span>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex gap-7 text-sm text-papel/85">
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden text-papel text-2xl leading-none"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú desplegable mobile */}
      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pt-3 pb-1 text-sm text-papel/90 bg-musgo">
          <Link href="/catalogo" className="py-2 border-t border-papel/10" onClick={() => setOpen(false)}>
            Catálogo
          </Link>
          <Link href="/nosotros" className="py-2 border-t border-papel/10" onClick={() => setOpen(false)}>
            Nosotros
          </Link>
          <Link href="/contacto" className="py-2 border-t border-b border-papel/10" onClick={() => setOpen(false)}>
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
