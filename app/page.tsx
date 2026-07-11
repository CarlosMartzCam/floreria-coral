import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import CategoryTags from "@/components/CategoryTags";
import ProductCard from "@/components/ProductCard";
import InfoFooter from "@/components/InfoFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import OccasionShortcuts from "@/components/OccasionShortcuts";
import { products, categories } from "@/data/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <Nav />

      <section className="bg-white text-tinta py-16 md:py-20 border-b border-tinta/10">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-md">
              Flores recién cortadas, listas para <span className="text-coral">regalar</span>
            </h1>
            <p className="mt-4 text-tinta/70 max-w-sm">
              Ramos, arreglos y más, hechos a mano en CDMX. Elige tu favorito y pídelo
              directo por WhatsApp.
            </p>
            <p className="font-hand text-xl text-girasol mt-2">
              — sin filas, sin complicaciones
            </p>
            <Link
              href="/catalogo"
              className="inline-block mt-7 bg-coral hover:bg-coral-dark text-papel
                         font-medium text-sm rounded-md px-7 py-3.5 transition-colors"
            >
              Ver catálogo
            </Link>
            <p className="mt-5 text-xs text-tinta/50">
              60 años cultivando flores en la ciudad
            </p>
          </div>
          <div className="relative h-72 hidden md:block">
            <div className="absolute w-56 h-64 top-0 left-8 rotate-[-4deg] shadow-xl rounded overflow-hidden z-20">
              <Image src="/fotos/arreglo/arreglo-02.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="absolute w-48 h-56 top-14 right-0 rotate-[6deg] shadow-xl rounded overflow-hidden z-10">
              <Image src="/fotos/ramo/ramo-01.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <Testimonials />

      <section className="max-w-5xl mx-auto px-6 pt-12 pb-4">
        <h2 className="font-display text-2xl font-semibold mb-6">Explora por categoría</h2>
        <CategoryTags />
      </section>

      <OccasionShortcuts />

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="font-display text-2xl font-semibold mb-6">Destacados</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p) => {
            const cat = categories.find((c) => c.slug === p.category);
            return <ProductCard key={p.id} product={p} categoryLabel={cat?.label ?? ""} />;
          })}
        </div>
      </section>

      <InfoFooter />
      <WhatsAppFloat />
    </>
  );
}
