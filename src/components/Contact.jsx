import { useState } from "react";

export default function Contact() {
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements["contact-name"].value.trim();
    const email = form.elements["contact-email"].value.trim();
    const message = form.elements["contact-message"].value.trim();

    setFeedback({ type: "", message: "" });

    if (!name || !email || !message) {
      setFeedback({ type: "error", message: "Por favor complete todos los campos obligatorios (*)." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFeedback({ type: "error", message: "Por favor ingrese una dirección de correo electrónico válida." });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFeedback({ type: "success", message: "¡Mensaje enviado con éxito! Nos contactaremos a la brevedad." });
      form.reset();
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl font-bold text-green-dark section-title-underline inline-block">
            Contacto
          </h2>
          <p className="text-lg text-brown-light max-w-[600px] mx-auto mt-6">
            Estamos para responder todas tus consultas y brindarte el asesoramiento que necesitás.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info & FAQ Column */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brown-light/8">
              <h3 className="font-heading text-xl font-bold text-green-dark mb-5 border-b border-brown-light/8 pb-3">
                Nuestra Residencia
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "📍", title: "Dirección", lines: ["Tinogasta 5373, Villa Real, CABA", "Ciudad Autónoma de Buenos Aires"] },
                  { icon: "📞", title: "Teléfono", lines: [<a key="tel" href="tel:+541133333333" className="hover:text-green-primary transition-colors">+54 11 3333-3333</a>] },
                  { icon: "✉", title: "Correo", lines: [<a key="mail" href="mailto:info@nuestrasraices.com" className="hover:text-green-primary transition-colors">info@nuestrasraices.com</a>] },
                  { icon: "⏰", title: "Horario de Visitas", lines: ["Todos los días: 10:00 hs a 19:00 hs", "(Recomendamos aviso previo)"] },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[0.95rem] font-bold text-green-dark mb-0.5">{item.title}</h4>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-sm text-brown-light">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-brown-light/8">
            <h3 className="font-heading text-2xl font-bold text-green-dark mb-2">Envíanos tu Consulta</h3>
            <p className="text-brown-light text-[0.95rem] mb-8">Completá el formulario y nos contactaremos con vos a la brevedad.</p>

            {feedback.message && (
              <div
                className={`p-3 rounded-md text-sm font-semibold mb-5 ${
                  feedback.type === "success"
                    ? "bg-green-primary/10 text-green-dark border border-green-primary/20"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
                role="alert"
              >
                {feedback.message}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-brown-dark mb-2">Nombre y Apellido *</label>
                <input type="text" id="contact-name" name="contact-name" placeholder="Tu nombre" required
                  className="w-full px-4 py-3 rounded-md bg-cream border border-brown-light/20 text-brown-dark transition-all focus:border-green-primary focus:bg-white focus:ring-3 focus:ring-green-primary/10"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-brown-dark mb-2">Correo Electrónico *</label>
                  <input type="email" id="contact-email" name="contact-email" placeholder="correo@ejemplo.com" required
                    className="w-full px-4 py-3 rounded-md bg-cream border border-brown-light/20 text-brown-dark transition-all focus:border-green-primary focus:bg-white focus:ring-3 focus:ring-green-primary/10"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-brown-dark mb-2">Teléfono / WhatsApp</label>
                  <input type="tel" id="contact-phone" name="contact-phone" placeholder="Ej: 11 3456-7890"
                    className="w-full px-4 py-3 rounded-md bg-cream border border-brown-light/20 text-brown-dark transition-all focus:border-green-primary focus:bg-white focus:ring-3 focus:ring-green-primary/10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-brown-dark mb-2">Mensaje o Consulta *</label>
                <textarea id="contact-message" name="contact-message" rows={5} placeholder="¿En qué podemos ayudarte?" required
                  className="w-full px-4 py-3 rounded-md bg-cream border border-brown-light/20 text-brown-dark transition-all focus:border-green-primary focus:bg-white focus:ring-3 focus:ring-green-primary/10 resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-green-primary text-white py-3.5 rounded-md font-semibold hover:bg-green-light transition-all duration-300 shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
