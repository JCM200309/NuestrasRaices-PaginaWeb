import TextType from './TextType';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 flex items-center overflow-hidden bg-gradient-to-br from-cream to-cream-card">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[10%] -right-[10%] w-1/2 h-[70%] rounded-full bg-[radial-gradient(circle,rgba(46,90,68,0.05)_0%,transparent_70%)]" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-[620px]">
          <div className="hidden md:inline-flex items-center gap-2 bg-green-primary/8 text-green-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-primary/15">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Un verdadero hogar para nuestros seres queridos
          </div>

          <h1 className="font-heading text-[2rem] md:text-5xl lg:text-[3.5rem] font-bold text-green-dark leading-[1.15] mb-6 md:min-h-0">
            Donde el{' '}
            <span className="text-gold-dark md:hidden">cuidado profesional</span>
            <br />
            <TextType text={["cuidado profesional", "trato humano", "afecto familiar"]} className="text-gold-dark hidden md:inline" as="span" typingSpeed={75} pauseDuration={1500} />
            <br />
            {' '}se une con el calor del hogar
          </h1>

          <p className="text-lg text-brown-light mb-10">
            En nuestra residencia brindamos un espacio seguro, cálido y confortable donde cada residente recibe una atención personalizada. Trabajamos para que cada día esté acompañado de bienestar, respeto y calidad humana.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contacto" className="inline-flex items-center justify-center bg-green-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-green-light hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_10px_rgba(46,90,68,0.2)] cursor-pointer">
              Contáctanos hoy
            </a>
            <a
              href="https://wa.me/5491133333333?text=Hola,%20quisiera%20solicitar%20información%20sobre%20la%20residencia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-green-primary text-green-primary px-7 py-3.5 rounded-full font-semibold hover:bg-green-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.896 0c3.181.001 6.171 1.242 8.423 3.495 2.251 2.253 3.49 5.244 3.49 8.425 0 6.571-5.325 11.895-11.895 11.895-2.006-.002-3.97-.507-5.729-1.464L0 24z" />
              </svg>
              WhatsApp Directo
            </a>
          </div>

          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-brown-light/15 pt-8">
            {["Asistencia Medica 24/7", "Médico Presencial", "Suministro Controlado", "Gran Variedad de Talleres"].map((feat) => (
              <div key={feat} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm text-gold border border-gold/20 font-bold text-sm shrink-0">
                  ✓
                </div>
                <span className="text-[0.95rem] font-semibold text-brown-dark">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] lg:h-[480px] max-w-[500px] lg:max-w-none mx-auto lg:mx-0">
          <img
            src="/Fotos/CartelExterior.jpeg"
            alt="Cartel exterior de la Residencia Geriátrica Nuestras Raíces"
            className="w-full h-full object-cover border-6 border-white shadow-lg animate-blob-morph lg:hidden"
          />
          <img
            src="/Fotos/Exterior.jpeg"
            alt="Fachada exterior de la Residencia Geriátrica Nuestras Raíces"
            className="hidden lg:block w-full h-full object-cover border-6 border-white shadow-lg animate-blob-morph"
          />
          <div className="hidden lg:flex absolute bottom-6 -left-4 sm:left-[-24px] bg-white p-4 rounded-xl shadow-lg items-center gap-3.5 max-w-[240px] border-l-4 border-gold animate-float">
            <div className="w-11 h-11 bg-gold/10 rounded-full flex items-center justify-center text-gold-dark text-xl shrink-0">
              ♥
            </div>
            <div>
              <h3 className="text-[0.85rem] font-bold text-green-dark">Dueños Presentes</h3>
              <p className="text-[0.75rem] text-brown-light">Supervisión diaria y ambiente 100% familiar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
