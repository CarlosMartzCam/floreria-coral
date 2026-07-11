import { notFound } from "next/navigation";
import Image from "next/image";
import Nav from "@/components/Nav";
import InfoFooter from "@/components/InfoFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { occasions, occasionPhotos } from "@/data/occasions";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return occasions.map((o) => ({ ocasion: o.slug }));
}

export default function OcasionPage({ params }: { params: { ocasion: string } }) {
  const occasion = occasions.find((o) => o.slug === params.ocasion);
  if (!occasion) return notFound();

  const photos = occasionPhotos(occasion);

  return (
    <>
      <Nav />
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <h1 className="font-display text-3xl font-semibold mb-2">
          {occasion.emoji} {occasion.label}
        </h1>
        <p className="text-tinta/60 text-sm">
          Ideas de arreglos para {occasion.label.toLowerCase()}. Escríbenos por WhatsApp para
          apartar el tuyo.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <div key={src} className="bg-white border border-tinta/10 rounded-lg overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={src}
                  alt={`${occasion.label} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <a
                  href={whatsappLink(
                    `Hola, me interesa este arreglo de ${occasion.label.toLowerCase()} que vi en su sitio web.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-musgo hover:bg-musgo-2 text-papel
                             rounded-md py-2.5 text-sm font-medium transition-colors"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <InfoFooter />
      <WhatsAppFloat />
    </>
  );
}
