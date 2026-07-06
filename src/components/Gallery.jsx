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
  const [lightboxData, setLightboxData] = useState({ open: false, items: [], index: 0 });

  const photos = galleryItems.filter(item => item.type !== "video");
  const videos = galleryItems.filter(item => item.type === "video");

  const filteredPhotos =
    activeFilter === "all"
      ? photos
      : photos.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((items, idx) => {
    setLightboxData({ open: true, items, index: idx });
  }, []);

  return (
    <section id="galeria" className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl font-bold text-green-dark section-title-underline inline-block">
            Galería de Fotos
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

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6" aria-live="polite">
          {filteredPhotos.map((item, idx) => (
            <button
              key={item.src}
              onClick={() => openLightbox(filteredPhotos, idx)}
              className="group relative h-[240px] rounded-xl overflow-hidden shadow-sm cursor-pointer bg-cream-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
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

        {/* Videos Section */}
        {videos.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-10">
              <h3 className="font-heading text-3xl font-bold text-green-dark inline-block border-b-2 border-gold-light pb-2">
                Galería de Videos
              </h3>
              <p className="text-lg text-brown-light max-w-[600px] mx-auto mt-4">
                Momentos especiales y actividades de nuestros residentes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-live="polite">
              {videos.map((item, idx) => (
                <button
                  key={item.src}
                  onClick={() => openLightbox(videos, idx)}
                  className="group relative h-[240px] rounded-xl overflow-hidden shadow-sm cursor-pointer bg-cream-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                >
                  <video
                    src={item.src}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-primary/80 to-green-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                    <h4 className="font-heading text-xl font-semibold text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h4>
                    <span className="text-[0.75rem] uppercase tracking-wider text-gold-light font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {categoryNames[item.category]}
                    </span>
                  </div>
                  {/* Play icon overlay for videos */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxData.open && (
        <Lightbox
          items={lightboxData.items}
          startIndex={lightboxData.index}
          onClose={() => setLightboxData({ ...lightboxData, open: false })}
        />
      )}
    </section>
  );
}
