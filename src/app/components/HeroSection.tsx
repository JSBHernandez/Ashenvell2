"use client";

import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

type HeroSectionProps = {
  locale?: Locale;
};

const HeroSection: React.FC<HeroSectionProps> = ({ locale = "es" }) => {
  const heroImagePath = "/abstract31g.png";
  const isEnglish = locale === "en";

  const content = isEnglish
    ? {
        titleLead: "Where",
        titleAccent: "boldness",
        titleLineTwo: "Finds its digital",
        titleLineThree: "form",
        description:
          "We don't build websites. We forge experiences that challenge the conventional and redefine what's possible in the digital world.",
        cta: "Explore Projects",
        imageAlt: "Ashenvell Visualization",
        servicesAria: "Go to services",
      }
    : {
        titleLead: "Soluciones que",
        titleAccent: "Evolucionan",
        titleLineTwo: "con nuestra Ayuda",
        titleLineThree: "",
        description:
          "Simplemente tu pagina? O mas bien deseas una solucion a la medida? De todas las maneras posibles tienes ventaja con Ashenvell.",
        cta: "Explorar Proyectos",
        imageAlt: "Visualizacion de Ashenvell",
        servicesAria: "Ir a servicios",
      };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      <div className="absolute inset-0 bg-hero-glow-background z-0"></div>

      {/* Contenedor principal del layout */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Columna de Texto (Izquierda) */}
          <div className="text-center md:text-left animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block">
                <span className="text-brand-light-text">{content.titleLead} </span>
                <span className="italic bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(96,165,250,0.6)]">{content.titleAccent}</span>
              </span>
              <span className="block text-brand-light-text">{content.titleLineTwo}</span>
              {content.titleLineThree && <span className="block text-brand-accent">{content.titleLineThree}</span>}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-muted-text max-w-xl mx-auto md:mx-0 mb-10">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#portfolio" className="btn-primary text-lg px-10 py-4">
                {content.cta}
              </Link>
            </div>
          </div>

          {/* Columna Visual (Derecha) - Imagen */}
          <div className="relative h-72 md:h-[450px] lg:h-[500px] flex items-center justify-center animate-slide-in-right">
            <div className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              <Image
                src={heroImagePath}
                alt={content.imageAlt}
                width={600}
                height={500}
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 600px"
                className="object-contain w-full h-full rounded-lg shadow-xl"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flecha para scroll down */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <Link href="#services" aria-label={content.servicesAria}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-blue-light hover:text-brand-accent transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;