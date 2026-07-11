import Link from "next/link";

export default function InfoFooter() {
  return (
    <>
      <section className="bg-white text-tinta py-12 border-t border-tinta/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-display font-semibold text-sm text-musgo uppercase tracking-wide mb-2">
              Horario
            </h4>
            <p className="text-sm text-tinta/70 leading-relaxed">
              Lunes a viernes: <span className="text-coral font-medium">8:00 – 20:00</span><br />
              Sábados y domingos: <span className="text-coral font-medium">8:00 – 19:00</span><br />
              13 y 14 de febrero: <span className="text-coral font-medium">abierto 24 horas</span><br />
              9 y 10 de mayo: <span className="text-coral font-medium">abierto 24 horas</span>
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-musgo uppercase tracking-wide mb-2">
              Formas de pago
            </h4>
            <p className="text-sm text-tinta/70 leading-relaxed">
              Aceptamos <span className="text-coral font-medium">tarjeta</span> y{" "}
              <span className="text-coral font-medium">efectivo</span>.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-musgo uppercase tracking-wide mb-2">
              Entregas a domicilio
            </h4>
            <p className="text-sm text-tinta/70 leading-relaxed">
              Envío gratis en la <span className="text-coral font-medium">Col. Cuauhtémoc</span>.<br />
              Fuera de la colonia: costo accesible según la zona.<br />
              Entregas el <span className="text-coral font-medium">mismo día</span>.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white text-tinta/75 pt-12 pb-6 border-t border-tinta/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-display text-lg font-semibold text-tinta mb-3">
              Coral <span className="text-coral">arte floral</span>
            </p>
            <p className="text-sm leading-relaxed">
              60 años llevando flores frescas a domicilio en la Ciudad de México.
            </p>
          </div>

          <div>
            <h5 className="font-display text-sm font-semibold text-musgo uppercase tracking-wide mb-3">
              Catálogo
            </h5>
            <ul className="text-sm space-y-2">
              <li><Link href="/catalogo/arreglos" className="hover:text-coral">Arreglos</Link></li>
              <li><Link href="/catalogo/ramos" className="hover:text-coral">Ramos</Link></li>
              <li><Link href="/catalogo/eventos" className="hover:text-coral">Eventos</Link></li>
              <li><Link href="/catalogo/orquideas" className="hover:text-coral">Orquídeas</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-display text-sm font-semibold text-musgo uppercase tracking-wide mb-3">
              Ayuda
            </h5>
            <ul className="text-sm space-y-2">
              <li><Link href="/nosotros" className="hover:text-coral">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-coral">Contacto</Link></li>
              <li>
                <a
                  href="https://www.facebook.com/CoralArteFloral/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-coral"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-display text-sm font-semibold text-musgo uppercase tracking-wide mb-3">
              Contacto
            </h5>
            <ul className="text-sm space-y-2">
              <li>C. Río Lerma 113, Cuauhtémoc, CDMX</li>
              <li>
                <a href="tel:5545382287" className="hover:text-coral">55 4538 2287</a>
              </li>
              <li>Lun-vie 8:00-20:00 · Sáb-dom 8:00-19:00</li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-10 pt-6 border-t border-tinta/10 text-xs text-tinta/40 text-center">
          © {new Date().getFullYear()} Coral arte floral. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}
