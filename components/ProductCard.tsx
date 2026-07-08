import Image from "next/image";
import { Product } from "@/data/products";
import { productWhatsappLink } from "@/lib/whatsapp";

export default function ProductCard({ product, categoryLabel }: { product: Product; categoryLabel: string }) {
  return (
    <div className="bg-white border border-tinta/10 rounded-lg overflow-hidden">
      <div className="h-48 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 pb-5">
        <h3 className="font-display text-lg font-semibold">{product.name}</h3>
        <p className="text-xs uppercase tracking-wide text-girasol font-medium my-1 mb-3">
          {categoryLabel}
        </p>
        <a
          href={productWhatsappLink(product.name)}
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
