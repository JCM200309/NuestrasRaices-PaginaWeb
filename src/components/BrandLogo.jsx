export default function BrandLogo({ scrolled, inverted = false, className = "" }) {
  const iconBgClass = inverted ? "bg-white/20 text-white" : "bg-gold/10 text-gold-dark";
  const titleClass = inverted ? "text-white" : "text-green-dark";
  const subtitleClass = inverted ? "text-gold-light" : "text-gold-dark";

  return (
    <div className={`flex items-center gap-2.5 transition-all duration-300 ${className}`}>
      <div className={`flex items-center justify-center rounded-lg ${iconBgClass} ${scrolled ? "w-10 h-10" : "w-12 h-12"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width={scrolled ? "24" : "28"} height={scrolled ? "24" : "28"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22v-8"/>
          <path d="M12 14c-2.5-1.5-6-1.5-8 0"/>
          <path d="M12 14c2.5-1.5 6-1.5 8 0"/>
          <path d="M12 14v-4"/>
          <path d="M12 10c-3-2-8-2-10 0"/>
          <path d="M12 10c3-2 8-2 10 0"/>
          <path d="M12 6c-3-2-8-2-10 0"/>
          <path d="M12 6c3-2 8-2 10 0"/>
          <path d="M12 6V2"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-heading font-bold leading-tight transition-all duration-300 ${titleClass} ${scrolled ? "text-[1.3rem]" : "text-[1.5rem]"}`}>
          Nuestras Raíces
        </span>
        <span className={`font-medium uppercase tracking-wider -mt-1 transition-all duration-300 ${subtitleClass} ${scrolled ? "text-[0.65rem]" : "text-[0.75rem]"}`}>
          Residencia de Mayores
        </span>
      </div>
    </div>
  );
}
