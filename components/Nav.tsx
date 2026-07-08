import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-musgo py-4">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-semibold text-papel">
          Florería <span className="text-coral">Coral</span>
        </Link>
        <div className="flex gap-7 text-sm text-papel/85">
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
