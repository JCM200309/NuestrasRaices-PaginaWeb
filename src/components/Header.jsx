import { useState, useEffect } from "react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Sobre Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#actividades", label: "Actividades" },
  { href: "#galeria", label: "Galería" },
  { href: "#reseñas", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "#inicio";
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = `#${section.id}`;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gold/20 ${scrolled
        ? "h-[90px] bg-cream/95 shadow-md"
        : "h-[110px] bg-cream/85 backdrop-blur-lg"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3" aria-label="Volver al inicio">
          <div
            className={`transition-all duration-300 rounded-full border-2 border-green-dark bg-white shadow-sm shrink-0 bg-no-repeat bg-center ${scrolled ? "h-[80px] w-[80px]" : "h-[100px] w-[100px]"}`}
            style={{
              backgroundImage: "url('/logo.png')",
              backgroundSize: "115%"
            }}
            role="img"
            aria-label="Logotipo Nuestras Raíces"
          />
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-2 font-medium text-[0.95rem] transition-colors duration-150 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:text-green-primary hover:after:w-full ${activeSection === link.href
                    ? "text-green-primary font-semibold after:w-full"
                    : "text-brown-dark after:w-0"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="bg-gold text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5 shadow-md cursor-pointer"
              >
                Consultar
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className="flex flex-col justify-between w-[30px] h-[21px] lg:hidden bg-transparent cursor-pointer z-[1010]"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-full h-[3px] bg-green-primary rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
          <span className={`w-full h-[3px] bg-green-primary rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-[3px] bg-green-primary rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </button>

        {/* Mobile Menu */}
        <nav
          className={`fixed top-24 ${menuOpen ? "left-0" : "-left-full"} w-full h-[calc(100vh-96px)] bg-cream flex flex-col items-center pt-16 gap-10 transition-all duration-300 shadow-lg lg:hidden`}
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors ${activeSection === link.href ? "text-green-primary font-semibold" : "text-brown-dark"
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-light transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Consultar
          </a>
        </nav>
      </div>
    </header>
  );
}
