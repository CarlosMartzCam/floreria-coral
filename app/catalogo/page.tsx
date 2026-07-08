import Nav from "@/components/Nav";
import CategoryTags from "@/components/CategoryTags";
import ProductCard from "@/components/ProductCard";
import InfoFooter from "@/components/InfoFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { products, categories } from "@/data/products";

export default function CatalogoPage() {
  return (
    <>
      <Nav />
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-6">
        <h1 className="font-display text-3xl font-semibold mb-6">Catálogo</h1>
        <CategoryTags />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => {
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
