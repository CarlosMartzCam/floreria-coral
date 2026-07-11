import Link from "next/link";
import { occasions } from "@/data/occasions";

export default function OccasionShortcuts() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="font-display text-2xl font-semibold mb-6">Regala por ocasión</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {occasions.map((occ) => (
          <Link
            key={occ.slug}
            href={`/eventos/${occ.slug}`}
            className="bg-white border border-tinta/10 rounded-lg py-6 text-center
                       hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            <div className="text-3xl mb-2">{occ.emoji}</div>
            <p className="font-display text-sm font-semibold">{occ.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
