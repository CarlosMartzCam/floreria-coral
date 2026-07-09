import Nav from "@/components/Nav";
import InfoFooter from "@/components/InfoFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { whatsappLink } from "@/lib/whatsapp";

const ADDRESS = "C. Río Lerma 113, Cuauhtémoc, 06500 Ciudad de México, CDMX";
const PHONE = "55 4538 2287";
const FACEBOOK_URL = "https://www.facebook.com/CoralArteFloral/?locale=es_LA";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="font-display text-3xl font-semibold mb-4">Contacto</h1>
        <p className="text-tinta/70 max-w-md mx-auto mb-8">
          ¿Tienes dudas o quieres hacer un pedido especial? Escríbenos directo, te
          respondemos lo antes posible.
        </p>
        <a
          href={whatsappLink("Hola, quisiera más información sobre Coral arte floral.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-coral hover:bg-coral-dark text-papel font-medium
                     text-sm rounded-md px-7 py-3.5 transition-colors"
        >
          Escribir por WhatsApp
        </a>

        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-tinta/70">
          <p>{ADDRESS}</p>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-coral">
            {PHONE}
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral"
          >
            Facebook: /CoralArteFloral
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-lg overflow-hidden border border-tinta/10 h-80">
          <iframe
            title="Ubicación de Coral arte floral"
            src={MAPS_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>

      <InfoFooter />
      <WhatsAppFloat />
    </>
  );
}
