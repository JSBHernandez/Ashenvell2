"use client";

import Link from 'next/link';
import Image from 'next/image';

const FloatingWhatsAppButton: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=573239007932&text=%C2%A1%20Quiero%20mi%20P%C3%A1gina%20Web%20ya%20mismo%20!%F0%9F%92%BB";
  const iconPath = "/whats.png"; 

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50
                 bg-green-500 hover:bg-green-600
                 p-3 md:p-3.5
                 rounded-full
                 flex items-center justify-center
                 shadow-xl hover:shadow-2xl
                 transition-all duration-300 ease-in-out
                 transform hover:scale-110
                 animate-subtle-pulse"
    >
      <div className="relative w-7 h-7 md:w-8 md:h-8">
        <Image
          src={iconPath}
          alt="WhatsApp Icon"
          fill
          sizes="32px"
          className="object-contain"
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default FloatingWhatsAppButton;