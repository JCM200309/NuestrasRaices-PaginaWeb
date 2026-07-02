import CountUp from "./CountUp";

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <div className="relative grid grid-cols-12 grid-rows-12 h-[400px] lg:h-[500px] max-w-[600px] mx-auto lg:mx-0">
            <div className="col-[1/9] row-[1/9] z-10 rounded-xl shadow-lg border-4 border-white overflow-hidden">
              <img src="/Fotos/CartelExterior.jpeg" alt="Cartel exterior de la residencia" className="w-full h-full object-cover" />
            </div>
            <div className="col-[5/13] row-[5/12] z-0 rounded-xl shadow-lg border-4 border-white overflow-hidden">
              <img src="/Fotos/Patio1.jpeg" alt="Patio verde parquizado" className="w-full h-full object-cover" />
            </div>
            <div className="col-[2/6] row-[8/11] z-20 bg-green-primary text-white p-5 rounded-xl shadow-lg flex flex-col justify-center items-center text-center border border-white/10">
              <span className="text-3xl font-heading font-extrabold text-gold-light leading-none">100%</span>
              <span className="text-[0.75rem] uppercase tracking-wider mt-1">Compromiso Familiar</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-4xl font-bold text-green-dark mb-4 section-title-underline inline-block">
              Nuestra Filosofía
            </h2>
            <div className="mt-8">
              <p className="text-lg text-brown-light mb-6">
                En <strong className="text-brown-dark">Nuestras Raíces</strong> brindamos un espacio seguro, cálido y confortable <strong>desde el 25 de marzo de 1998 </strong>donde cada residente recibe una atención personalizada. Trabajamos para que cada día esté acompañado de bienestar, respeto y calidad humana.
              </p>
              <p className="text-lg text-brown-light mb-6">
                Más que una residencia, somos un lugar donde las personas encuentran contención, compañía y un ambiente familiar. Nos enorgullece contar con la <strong className="text-brown-dark">presencia constante y diaria de los dueños</strong>, generando tranquilidad y acompañamiento permanente para cada familia.
              </p>
              <blockquote className="border-l-4 border-gold pl-5 italic text-lg text-green-dark my-8">
                "Nuestra misión es brindar un cuidado integral basado en el respeto, la empatía y la dignidad de cada persona mayor."
              </blockquote>

              <div className="flex flex-wrap gap-8 mt-10">
                {[
                  { countTo: 24, suffix: "/7", label: "Cuidado Médico" },
                  { countTo: 8, suffix: "+", label: "Talleres Activos" },
                  { value: "Familia", label: "Presencia de dueños" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-heading text-3xl font-bold text-gold-dark flex items-center">
                      {stat.countTo ? (
                        <>
                          <CountUp from={0} to={stat.countTo} duration={1.5} />
                          {stat.suffix}
                        </>
                      ) : (
                        stat.value
                      )}
                    </span>
                    <span className="text-sm text-brown-light font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
