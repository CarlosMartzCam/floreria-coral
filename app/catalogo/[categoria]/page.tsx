import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import CategoryTags from "@/components/CategoryTags";
import ProductCard from "@/components/ProductCard";
import InfoFooter from "@/components/InfoFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { products, categories } from "@/data/products";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const category = categories.find((c) => c.slug === params.categoria);
  if (!category) return notFound();

  const items = products.filter((p) => p.category === category.slug);

  return (
    <>
      <Nav />
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-6">
        <h1 className="font-display text-3xl font-semibold mb-6">{category.label}</h1>
        <CategoryTags active={category.slug} />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        {category.hasPhotos ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} categoryLabel={category.label} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-tinta/10 rounded-lg py-16 text-center">
            <p className="font-display text-xl font-semibold mb-2">
              Consulta disponibilidad y precios por WhatsApp
            </p>
            <p className="text-tinta/60 text-sm mb-6 max-w-sm mx-auto">
              Muy pronto tendremos fotos de {category.label.toLowerCase()} en el sitio.
              Mientras tanto, escríbenos directamente.
            </p>
            <a
              href={whatsappLink(`Hola, quisiera información sobre ${category.label.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-coral hover:bg-coral-dark text-papel font-medium
                         text-sm rounded-md px-6 py-3 transition-colors"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        )}
      </section>

      <InfoFooter />
      <WhatsAppFloat />
    </>
  );
}
