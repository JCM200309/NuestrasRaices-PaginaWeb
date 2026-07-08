import { useState, useEffect, useCallback } from "react";
import { reviews as defaultReviews } from "../data/siteData";

const STORAGE_KEY = "nuestras_raices_reviews";

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 text-xl text-gold mb-5 justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-gold" : "text-brown-light/20"}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultReviews;
    } catch {
      return defaultReviews;
    }
  });
  const [current, setCurrent] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const go = useCallback(
    (dir) => setCurrent((prev) => (prev + dir + reviews.length) % reviews.length),
    [reviews.length]
  );

  return (
    <section id="reseñas" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl font-bold text-green-dark section-title-underline inline-block">
            Opiniones de nuestra Residencia
          </h2>
          <p className="text-lg text-brown-light max-w-[600px] mx-auto mt-6">
            La mayor recompensa a nuestro trabajo es la tranquilidad de quienes nos confían el cuidado de sus seres queridos.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-[800px] mx-auto overflow-hidden py-5">
          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white text-green-primary rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-green-primary hover:text-white border border-gold/20"
            aria-label="Reseña anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white text-green-primary rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-green-primary hover:text-white border border-gold/20"
            aria-label="Siguiente reseña"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="min-w-full px-10" aria-live="polite">
                <div className="bg-cream-card p-12 rounded-3xl shadow-sm relative text-center border border-brown-light/8">
                  <span className="absolute top-2.5 left-7 text-6xl text-gold/20 font-serif leading-none select-none" aria-hidden="true">"</span>
                  <StarRating count={review.stars} />
                  <p className="text-lg text-brown-dark leading-relaxed italic mb-6">{review.text}</p>
                  <h4 className="font-heading text-xl font-bold text-green-dark">{review.name}</h4>
                  <span className="text-[0.8rem] text-brown-light uppercase tracking-wider font-semibold mt-1 block">{review.relation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a reseña ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-6 bg-green-primary" : "w-2.5 bg-brown-light/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
