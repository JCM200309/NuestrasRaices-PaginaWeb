import { useState } from "react";
import { faqs } from "../data/siteData";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section id="preguntas-frecuentes" className="py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl font-bold text-green-dark section-title-underline inline-block">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-brown-light mt-6">
            Resolvemos las dudas más comunes para que tengas toda la información necesaria.
          </p>
        </div>

        <div className="bg-cream-card p-8 md:p-10 rounded-3xl shadow-sm border border-brown-light/8 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`border-b border-brown-light/8 pb-5 last:border-0 last:pb-0`}>
              <button
                onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                className="flex justify-between items-center w-full font-heading font-bold text-[1.2rem] text-green-dark text-left cursor-pointer bg-transparent"
              >
                {faq.q}
                <span className={`text-2xl text-gold transition-transform duration-300 shrink-0 ml-4 ${activeIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 text-brown-light text-base leading-relaxed ${activeIndex === i ? "max-h-[500px] mt-4" : "max-h-0"}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
