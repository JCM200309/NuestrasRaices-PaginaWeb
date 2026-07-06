export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/5491157818120?text=Hola,%20quisiera%20solicitar%20información%20sobre%20la%20residencia."
      className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-[#25D366] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center text-white z-[999] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] animate-pulse-ring"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear con nosotros por WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.777 1.224h.005c5.505 0 9.99-4.478 9.99-9.985A9.998 9.998 0 0 0 12.012 2zm5.78 13.916c-.253.712-1.464 1.307-2.01 1.392-.475.074-.961.124-3.14-.775-2.784-1.147-4.577-3.987-4.715-4.172-.14-.184-1.13-1.503-1.13-2.868 0-1.365.714-2.034.968-2.316.254-.282.553-.353.738-.353.184 0 .369.002.53.01.17.007.399-.064.62.463.226.541.777 1.895.845 2.03.069.136.115.295.023.479-.092.184-.139.299-.276.459-.138.16-.291.357-.416.479-.138.136-.282.285-.121.56.161.278.718 1.186 1.537 1.916.82.73 1.512.955 1.789 1.093.277.139.437.115.599-.07.161-.184.693-.807.877-1.083.184-.277.369-.23.623-.136.254.093 1.614.761 1.89 1.002.277.241.462.358.531.474.07.117.07.674-.183 1.386z" />
      </svg>
    </a>
  );
}
