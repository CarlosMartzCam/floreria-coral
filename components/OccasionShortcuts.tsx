import { whatsappLink } from "@/lib/whatsapp";

const occasions = [
  { emoji: "🎂", label: "Cumpleaños", message: "Hola, quisiera un arreglo para un cumpleaños." },
  { emoji: "💐", label: "Aniversario", message: "Hola, quisiera un arreglo para un aniversario." },
  { emoji: "🕊️", label: "Condolencias", message: "Hola, quisiera un arreglo de condolencias." },
  { emoji: "👶", label: "Nuevo bebé", message: "Hola, quisiera un arreglo para un nuevo bebé." },
];

export default function OccasionShortcuts() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="font-display text-2xl font-semibold mb-6">Regala por ocasión</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {occasions.map((occ) => (
          <a
            key={occ.label}
            href={whatsappLink(occ.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-tinta/10 rounded-lg py-6 text-center
                       hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            <div className="text-3xl mb-2">{occ.emoji}</div>
            <p className="font-display text-sm font-semibold">{occ.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
