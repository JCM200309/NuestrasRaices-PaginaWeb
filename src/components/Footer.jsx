export default function Footer() {
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Sobre Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#actividades", label: "Actividades" },
    { href: "#galeria", label: "Galería" },
    { href: "#reseñas", label: "Reseñas" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <footer className="bg-green-dark text-white pt-16 pb-8 border-t-[3px] border-gold">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png?v=2" alt="Logo" className="h-[90px] rounded-md invert mix-blend-screen" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-white">Nuestras Raíces</span>
                <span className="text-[0.85rem] text-gold-light uppercase tracking-wider">Residencia de Mayores</span>
              </div>
            </div>
            <p className="text-white/70 text-[0.95rem] max-w-[320px] mt-4">
              Un ambiente familiar y seguro concebido con amor y operado con la mayor seriedad médica para el bienestar de los adultos mayores.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-gold-light mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 text-[0.95rem] hover:text-gold-light hover:pl-1 transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-gold-light mb-6">Ubicación y Contacto</h3>
            <ul className="space-y-4 text-white/70 text-[0.95rem]">
              <li className="flex gap-3"><span aria-hidden="true">📍</span> Tinogasta 5373, Villa Real, CABA</li>
              <li className="flex gap-3"><span aria-hidden="true">📞</span> +54 11 3333-3333</li>
              <li className="flex gap-3"><span aria-hidden="true">✉</span> info@nuestrasraices.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-wrap justify-between gap-4 text-white/50 text-sm">
          <p>&copy; 2026 Residencial Nuestras Raíces. Todos los derechos reservados.</p>
          <p>Diseñado con calidez y profesionalismo.</p>
        </div>
      </div>
    </footer>
  );
}
