"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Locale } from "@/lib/i18n";

type HeroSectionProps = {
  locale?: Locale;
};

const HeroSection: React.FC<HeroSectionProps> = ({ locale = "es" }) => {
  const isEnglish = locale === "en";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const maxParticles = 60;

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      ctx.fillStyle = "rgba(96, 165, 250, 0.8)";
      ctx.shadowBlur = 12;
      ctx.shadowColor = "rgba(59, 130, 246, 0.8)";

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0; 
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        ctx.shadowBlur = 12; 
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = isEnglish
    ? {
        titleLead: "Where boldness",
        titleAccent: "Finds its",
        titleLineTwo: "digital form",
        description:
          "We don't build websites. We forge experiences that challenge the conventional and redefine what's possible in the digital world.",
        cta: "Explore Projects",
        ctaSecondary: "View Services",
        servicesAria: "Go to services",
      }
    : {
        titleLead: "Soluciones que",
        titleAccent: "Evolucionan",
        titleLineTwo: "con nuestra Ayuda",
        titleLineThree: "",
        description:
          "A todos les gusta que les solucionen, por eso nosotros solucionamos de una vez",
        cta: "Hablemos",
        ctaSecondary: "Ver servicios",
        servicesAria: "Ir a servicios",
      };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000412]"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.2)_0%,transparent_60%)] z-0"></div>

      <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="text-white block">{content.titleLead} </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] my-2">
              {content.titleAccent}
            </span>
            <span className="text-white block">{content.titleLineTwo}</span>
            {content.titleLineThree && <span className="block text-blue-400 mt-2">{content.titleLineThree}</span>}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-mono text-sm tracking-wide">
            {`// ${content.description.toLowerCase()}`}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pb-24">
            <Link 
              href="#portfolio" 
              className="group relative overflow-hidden px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]"
            >
              <span className="relative z-10">{content.cta}</span>
              <span className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
            <Link 
              href="#services" 
              className="group relative overflow-hidden px-10 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10">{content.ctaSecondary}</span>
              <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <Link href="#services" aria-label={content.servicesAria}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500 hover:text-blue-300 transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
