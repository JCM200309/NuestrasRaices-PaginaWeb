const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gold-dark shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const services = [
  {
    title: "Atención Profesional",
    desc: "Contamos con un equipo interdisciplinario altamente capacitado que acompaña a cada residente de manera personalizada.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    features: ["Enfermería profesional 24/7", "Médico Clínico Presencial", "Suministro de Medicación"],
  },
  {
    title: "Un verdadero hogar",
    desc: "Ofrecemos un ambiente seguro y familiar, con instalaciones preparadas para brindar un entorno confortable durante toda la estadía.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
      </svg>
    ),
    features: ["Estadía Permanente", "Habitaciones Compartidas", "Comida casera"],
  },
  {
    title: "Atención Personalizada",
    desc: "Cada persona es única, por eso diseñamos un cuidado adaptado a sus necesidades, promoviendo su autonomía y bienestar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    features: ["Residentes Independientes", "Residentes Semi-dependientes"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl font-bold text-green-dark section-title-underline inline-block">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-brown-light max-w-[600px] mx-auto mt-6">
            Brindamos una cobertura integral diseñada para atender las necesidades clínicas, habitacionales y emocionales de nuestros mayores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="group bg-white p-10 rounded-3xl shadow-sm border border-brown-light/8 flex flex-col items-start cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-gold/20"
              tabIndex={0}
            >
              <div className="w-[60px] h-[60px] rounded-xl bg-green-primary/8 flex items-center justify-center text-green-primary mb-6 transition-all duration-300 group-hover:bg-green-primary group-hover:text-white">
                {svc.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-green-dark mb-4 transition-colors group-hover:text-green-primary">
                {svc.title}
              </h3>
              <p className="text-brown-light text-[0.95rem] mb-6">{svc.desc}</p>
              <ul className="w-full mt-auto border-t border-brown-light/8 pt-5 space-y-2">
                {svc.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-brown-dark">
                    <CheckIcon />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
