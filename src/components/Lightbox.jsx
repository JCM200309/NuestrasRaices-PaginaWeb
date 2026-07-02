import { useState, useEffect, useCallback } from "react";

export default function Lightbox({ items, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [fading, setFading] = useState(false);

  const navigate = useCallback(
    (dir) => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + dir + items.length) % items.length);
        setFading(false);
      }, 150);
    },
    [items.length]
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [navigate, onClose]);

  const current = items[index];

  return (
    <div
      className="fixed inset-0 bg-brown-dark/95 z-[2000] flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de fotos a pantalla completa"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl cursor-pointer hover:text-gold-light transition-colors bg-transparent"
        aria-label="Cerrar"
      >
        &times;
      </button>

      {/* Prev */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer hover:text-gold-light transition-colors bg-transparent z-10"
        aria-label="Foto anterior"
      >
        &#10094;
      </button>

      {/* Next */}
      <button
        onClick={() => navigate(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer hover:text-gold-light transition-colors bg-transparent z-10"
        aria-label="Foto siguiente"
      >
        &#10095;
      </button>

      {/* Image */}
      <div className="flex flex-col items-center max-w-[90vw] max-h-[80vh]">
        {current.type === "video" ? (
          <video
            src={current.src}
            controls
            autoPlay
            className={`max-w-full max-h-[75vh] rounded-md shadow-lg border-4 border-white transition-opacity duration-150 ${fading ? "opacity-30" : "opacity-100"}`}
          />
        ) : (
          <img
            src={current.src}
            alt={current.title}
            className={`max-w-full max-h-[75vh] rounded-md shadow-lg border-4 border-white transition-opacity duration-150 ${fading ? "opacity-30" : "opacity-100"}`}
          />
        )}
        <div className="text-white mt-4 text-lg font-heading text-center">
          {current.title} — {current.desc}
        </div>
      </div>
    </div>
  );
}
