import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Activities from "./components/Activities";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="absolute -top-24 left-1/2 -translate-x-1/2 bg-gold text-white px-5 py-2.5 rounded-b-md z-[9999] font-semibold focus:top-0 transition-[top] duration-200"
      >
        Saltar al contenido principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Activities />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}
