"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { whatsappLink } from "@/lib/whatsapp";

export default function ProductCard({ product, categoryLabel }: { product: Product; categoryLabel: string }) {
  const [dedicatoria, setDedicatoria] = useState("");

  const message = dedicatoria.trim()
    ? `Hola, me interesa el/la "${product.name}" que vi en su sitio web. Dedicatoria: "${dedicatoria.trim()}"`
    : `Hola, me interesa el/la "${product.name}" que vi en su sitio web.`;

  return (
    <div className="bg-white border border-tinta/10 rounded-lg overflow-hidden group">
      <Link href={`/producto/${product.id}`} className="block h-48 relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="p-4 pb-5">
        <Link href={`/producto/${product.id}`}>
          <h3 className="font-display text-lg font-semibold hover:text-coral">{product.name}</h3>
        </Link>
        <p className="text-xs uppercase tracking-wide text-girasol font-medium my-1 mb-3">
          {categoryLabel}
        </p>

        <input
          type="text"
          value={dedicatoria}
          onChange={(e) => setDedicatoria(e.target.value)}
          placeholder="Dedicatoria (opcional)"
          className="w-full text-sm border border-tinta/15 rounded-md px-3 py-2 mb-3
                     placeholder:text-tinta/40 focus:outline-none focus:border-coral"
        />

        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-musgo hover:bg-musgo-2 text-papel
                     rounded-md py-2.5 text-sm font-medium transition-colors"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
