const STARS = "★★★★★";

export default function TrustBadges() {
  return (
    <section className="bg-white py-10 border-b border-tinta/10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <p className="font-display text-2xl font-semibold text-coral">60 años</p>
          <p className="text-sm text-tinta/70 mt-1">de experiencia cultivando flores en la ciudad</p>
        </div>
        <div>
          <p className="text-girasol text-lg tracking-widest">{STARS}</p>
          <p className="text-sm text-tinta/70 mt-1">
            <span className="font-semibold text-tinta">4.1</span> en Google · 11 opiniones
          </p>
        </div>
        <div>
          <p className="font-display text-2xl font-semibold text-coral">Mismo día</p>
          <p className="text-sm text-tinta/70 mt-1">envío gratis en la Col. Cuauhtémoc, costo accesible al resto de la CDMX</p>
        </div>
      </div>
    </section>
  );
}
