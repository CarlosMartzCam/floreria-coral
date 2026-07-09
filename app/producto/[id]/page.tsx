"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import InfoFooter from "@/components/InfoFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { products, categories } from "@/data/products";
import { whatsappLink } from "@/lib/whatsapp";

export default function ProductoPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [dedicatoria, setDedicatoria] = useState("");

  if (!product) return notFound();

  const category = categories.find((c) => c.slug === product.category);

  const message = dedicatoria.trim()
    ? `Hola, me interesa el/la "${product.name}" que vi en su sitio web. Dedicatoria: "${dedicatoria.trim()}"`
    : `Hola, me interesa el/la "${product.name}" que vi en su sitio web.`;

  return (
    <>
      <Nav />
      <section className="max-w-4xl mx-auto px-6 py-12">
        <Link href={`/catalogo/${product.category}`} className="text-sm text-tinta/50 hover:text-coral">
          ← Volver a {category?.label ?? "catálogo"}
        </Link>

        <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
          <div className="relative h-96 rounded-lg overflow-hidden border border-tinta/10">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-girasol font-medium mb-2">
              {category?.label}
            </p>
            <h1 className="font-display text-3xl font-semibold mb-4">{product.name}</h1>
            <p className="text-tinta/70 text-sm mb-6">
              Consulta disponibilidad y precio directo por WhatsApp. Si quieres, agrega una
              dedicatoria para incluirla en tu pedido.
            </p>

            <input
              type="text"
              value={dedicatoria}
              onChange={(e) => setDedicatoria(e.target.value)}
              placeholder="Dedicatoria (opcional)"
              className="w-full text-sm border border-tinta/15 rounded-md px-3 py-2.5 mb-4
                         placeholder:text-tinta/40 focus:outline-none focus:border-coral"
            />

            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-coral hover:bg-coral-dark text-papel
                         rounded-md py-3 text-sm font-medium transition-colors"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <InfoFooter />
      <WhatsAppFloat />
    </>
  );
}
