import { useState, useCallback } from "react";
import { galleryItems, categoryNames } from "../data/siteData";
import Lightbox from "./Lightbox";

const filters = [
  { key: "all", label: "Todos" },
  { key: "habitaciones", label: "Habitaciones" },
  { key: "patio", label: "Patios & Verde" },
  { key: "actividades", label: "Actividades" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  }, []);

  return (
    <section id="galeria" className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl font-bold text-green-dark section-title-underline inline-block">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-brown-light max-w-[600px] mx-auto mt-6">
            Recorré las fotos reales de nuestra residencia: habitaciones luminosas, baños seguros, áreas comunes y el amplio patio verde.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap" role="tablist" aria-label="Filtrar galería">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={activeFilter === f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 border cursor-pointer shadow-sm ${activeFilter === f.key
                  ? "bg-green-primary text-white border-green-primary shadow-[0_4px_10px_rgba(46,90,68,0.15)]"
                  : "bg-white text-brown-light border-brown-light/15 hover:border-green-primary hover:text-green-primary"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6" aria-live="polite">
          {filteredItems.map((item, idx) => (
            <button
              key={item.src}
              onClick={() => openLightbox(idx)}
              className="group relative h-[240px] rounded-xl overflow-hidden shadow-sm cursor-pointer bg-cream-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-green-primary/80 to-green-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                <h4 className="font-heading text-xl font-semibold text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h4>
                <span className="text-[0.75rem] uppercase tracking-wider text-gold-light font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {categoryNames[item.category]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          items={filteredItems}
          startIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
