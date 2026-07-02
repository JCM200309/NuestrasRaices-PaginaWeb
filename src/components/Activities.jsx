import { useState } from "react";

const tabs = [
  {
    id: "cognitiva",
    label: "Estimulación & Mente",
    title: "Estimulación Cognitiva y Taller de Memoria",
    desc: "Diseñamos dinámicas divertidas orientadas a mantener la plasticidad neuronal, retardar el deterioro cognitivo y ejercitar la memoria activa, todo en un contexto lúdico y grupal.",
    items: ["Taller de Memoria", "Estimulación Cognitiva", "Juegos de Mesa y Asociación", "Lecturas Compartidas"],
    img: "/estimulacionYMente5.jpeg",
    imgAlt: "Ejercicios de memoria y estimulación cognitiva",
  },
  {
    id: "fisica",
    label: "Cuerpo & Movimiento",
    title: "Yoga y Gimnasia Adaptada",
    desc: "El movimiento es salud. Llevamos a cabo clases de kinesiología grupal y gimnasia suave adaptadas a las posibilidades físicas de cada persona, enfocándonos en postura, flexibilidad, equilibrio y fuerza.",
    items: ["Yoga Adaptado", "Gimnasia Grupal", "Ejercicios de Equilibrio", "Caminatas guiadas en el Patio"],
    img: "/Fotos/Actividades3.jpeg",
    imgAlt: "Clase de yoga y estiramiento grupal",
  },
  {
    id: "artes",
    label: "Arte & Música",
    title: "Expresión Artística, Musicoterapia y Tango",
    desc: "El arte y la música tocan el alma y activan recuerdos profundos. Ofrecemos talleres de plástica y pintura, sesiones de musicoterapia y clases de tango adaptadas.",
    items: ["Taller de Arte (Pintura y Dibujo)", "Musicoterapia", "Taller de Tango", "Talleres Musicales e Instrumentos"],
    img: "/Fotos/Actividades6.jpeg",
    imgAlt: "Sesión de tango y musicoterapia",
  },
];

export default function Activities() {
  const [activeTab, setActiveTab] = useState("cognitiva");
  const currentTab = tabs.find((t) => t.id === activeTab);

  return (
    <section id="actividades" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl font-bold text-green-dark section-title-underline inline-block">
            Talleres y Actividades
          </h2>
          <p className="text-lg text-brown-light max-w-[600px] mx-auto mt-6">
            Creemos firmemente en el envejecimiento activo. Nuestros talleres diarios estimulan tanto el aspecto cognitivo como el físico y recreativo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full font-semibold text-[0.95rem] transition-all duration-300 cursor-pointer border ${activeTab === tab.id
                ? "bg-green-primary text-white shadow-[0_4px_10px_rgba(46,90,68,0.15)] border-green-primary"
                : "bg-cream-card text-brown-dark border-transparent hover:bg-green-primary/8 hover:text-green-primary"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {currentTab && (
          <div key={currentTab.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-green-dark mb-4">{currentTab.title}</h3>
              <p className="text-brown-light text-lg mb-8">{currentTab.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentTab.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-gold rounded-full shrink-0" />
                    <span className="font-semibold text-[0.95rem] text-brown-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[320px] lg:h-[380px] rounded-3xl overflow-hidden shadow-lg group">
              {currentTab.video ? (
                <video
                  src={currentTab.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={currentTab.img}
                  alt={currentTab.imgAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-green-dark/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
