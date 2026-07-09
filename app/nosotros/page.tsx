import Image from "next/image";
import Nav from "@/components/Nav";
import InfoFooter from "@/components/InfoFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Fotos del local: local-01.jpg ... local-14.jpg en /public/fotos/local
const localPhotos = Array.from({ length: 14 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/fotos/local/local-${n}.jpg`;
});

export default function NosotrosPage() {
  return (
    <>
      <Nav />
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <h1 className="font-display text-3xl font-semibold mb-3">Nosotros</h1>
        <p className="text-tinta/70 max-w-xl">
          Coral arte floral tiene <span className="text-coral font-medium">60 años</span> llevando
          flores frescas a la ciudad. Generación tras generación, seguimos haciendo ramos y
          arreglos a mano, con el mismo cariño de siempre.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {localPhotos.map((src) => (
            <div key={src} className="relative h-40 rounded-lg overflow-hidden">
              <Image src={src} alt="Coral arte floral" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <InfoFooter />
      <WhatsAppFloat />
    </>
  );
}
