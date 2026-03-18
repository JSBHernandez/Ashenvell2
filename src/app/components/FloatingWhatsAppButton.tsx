"use client";

import Link from 'next/link';

const FloatingWhatsAppButton: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=573239007932&text=%C2%A1%20Quiero%20mi%20P%C3%A1gina%20Web%20ya%20mismo%20!%F0%9F%92%BB";

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50
                 bg-blue-600 hover:bg-blue-500
                 p-3.5 md:p-4
                 rounded-full
                 flex items-center justify-center
                 shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
                 transition-all duration-300 ease-in-out
                 transform hover:scale-110
                 animate-subtle-pulse"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-white w-7 h-7 md:w-8 md:h-8"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    </Link>
  );
};

export default FloatingWhatsAppButton;