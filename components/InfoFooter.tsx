export default function InfoFooter() {
  return (
    <>
      <section className="bg-musgo text-papel py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-display font-semibold text-sm text-girasol uppercase tracking-wide mb-2">
              Horario
            </h4>
            <p className="text-sm text-papel/80 leading-relaxed">
              Lunes a viernes: <span className="text-coral font-medium">8:00 – 20:00</span><br />
              Sábados y domingos: <span className="text-coral font-medium">8:00 – 19:00</span><br />
              13 y 14 de febrero: <span className="text-coral font-medium">abierto 24 horas</span><br />
              9 y 10 de mayo: <span className="text-coral font-medium">abierto 24 horas</span>
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-girasol uppercase tracking-wide mb-2">
              Formas de pago
            </h4>
            <p className="text-sm text-papel/80 leading-relaxed">
              Aceptamos <span className="text-coral font-medium">tarjeta</span> y{" "}
              <span className="text-coral font-medium">efectivo</span>.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-girasol uppercase tracking-wide mb-2">
              Entregas a domicilio
            </h4>
            <p className="text-sm text-papel/80 leading-relaxed">
              Dentro de la colonia: <span className="text-coral font-medium">sin costo</span>.<br />
              Fuera de la colonia: costo según la zona.<br />
              Entregas el <span className="text-coral font-medium">mismo día</span>.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-musgo-2 text-papel/80 text-center text-xs py-4">
        <p>
          Florería Coral · <span className="font-hand text-lg text-girasol">60 años</span> llevando flores a tu puerta
        </p>
        <a
          href="https://www.facebook.com/CoralArteFloral/?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-1 hover:text-coral"
        >
          Síguenos en Facebook
        </a>
      </footer>
    </>
  );
}
