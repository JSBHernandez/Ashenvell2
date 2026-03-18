"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

// --- Custom Hooks ---
const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    let timer: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;
    
    const startTyping = () => {
      setDisplayedText(""); 
      setIsComplete(false);
      i = 0;

      timer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setIsComplete(true);
          
          restartTimeout = setTimeout(() => {
            startTyping();
          }, 3500);
        }
      }, speed);
    };

    const initialTimeout = setTimeout(startTyping, 500);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(timer);
      clearTimeout(restartTimeout);
    };
  }, [text, speed]);

  return { displayedText, isComplete };
};

const MacControls = () => (
  <div className="flex gap-1.5 mb-3">
    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
  </div>
);

const WebAnimation = () => {
  const code = `<div class="hero">\n  <h1>Ashenvell,</h1>\n  <h2>te amo.</h2>\n  <button>Corazon &rarr;</button>\n</div>`;
  const { displayedText, isComplete } = useTypingEffect(code, 60);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-48 lg:h-56 mt-4">
      <div className="flex-1 bg-[#090b14] rounded-xl p-4 border border-[#1e293b] font-mono text-xs overflow-hidden relative shadow-inner">
        <MacControls />
        <pre className="text-gray-300">
          <code className="text-blue-400">
            {displayedText.split('\n').map((line, i) => (
              <span key={i} className="block"><span className="text-gray-600 mr-2 select-none">{i + 1}</span>{line}</span>
            ))}
            {!isComplete && <span className="inline-block w-2.5 h-4 bg-blue-500 animate-pulse align-middle ml-1"></span>}
          </code>
        </pre>
      </div>
      <div className="flex-1 bg-[#090b14] rounded-xl p-4 border border-[#1e293b] flex items-center justify-center relative overflow-hidden transition-all duration-700">
        <div className="flex flex-col items-center text-center transition-opacity duration-500">
          <h1 className="text-white font-bold text-xl mb-1">Ashenvell,</h1>
          <h2 className="text-blue-400 font-semibold mb-4 text-sm">te amo.</h2>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-semibold shadow-[0_0_15px_rgba(37,99,235,0.6)]">Corazon &rarr;</button>
        </div>
      </div>
    </div>
  );
};

const MobileAnimation = () => {
  const code = `import { App } from 'react-native';\n\nconst View = () => (\n  <SafeArea>\n    <Widget />\n    <TabNav />\n  </SafeArea>\n);`;
  const { displayedText, isComplete } = useTypingEffect(code, 50);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-48 lg:h-56 mt-4">
      <div className="flex-1 bg-[#090b14] rounded-xl p-4 border border-[#1e293b] font-mono text-xs overflow-hidden relative shadow-inner">
        <MacControls />
        <pre className="text-gray-300">
          <code className="text-purple-400">
            {displayedText.split('\n').map((line, i) => (
               <span key={i} className="block"><span className="text-gray-600 mr-2 select-none">{i + 1}</span>{line}</span>
            ))}
            {!isComplete && <span className="inline-block w-2.5 h-4 bg-purple-500 animate-pulse align-middle ml-1"></span>}
          </code>
        </pre>
      </div>
      <div className="flex-1 bg-[#090b14] rounded-xl p-4 border border-[#1e293b] flex items-center justify-center relative">
        <div className="w-[70px] h-[140px] rounded-xl border-[4px] border-gray-700 p-1 flex flex-col gap-2 transition-all duration-700">
          <div className="w-full h-2 rounded bg-gray-700 mx-auto"></div>
          <div className="w-full flex-1 rounded bg-blue-900/30 overflow-hidden relative">
             <div className="absolute top-2 w-full flex justify-center"><div className="w-8 h-8 rounded-full border-2 border-blue-500/50 animate-ping"></div></div>
          </div>
          <div className="w-full h-2 rounded bg-gray-700 mt-auto"></div>
        </div>
      </div>
    </div>
  );
};

const UXAnimation = () => {
  const code = `.grid-layout {\n  display: grid;\n  gap: 1rem;\n}\n\n.card:hover {\n  scale: 1.05;\n  glow: blue;\n}`;
  const { displayedText, isComplete } = useTypingEffect(code, 40);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-48 lg:h-56 mt-4">
      <div className="flex-1 bg-[#090b14] rounded-xl p-4 border border-[#1e293b] font-mono text-xs overflow-hidden relative shadow-inner">
        <MacControls />
        <pre className="text-gray-300">
          <code className="text-cyan-400">
            {displayedText.split('\n').map((line, i) => (
              <span key={i} className="block"><span className="text-gray-600 mr-2 select-none">{i + 1}</span>{line}</span>
            ))}
            {!isComplete && <span className="inline-block w-2.5 h-4 bg-cyan-500 animate-pulse align-middle ml-1"></span>}
          </code>
        </pre>
      </div>
      <div className="flex-1 bg-[#090b14] rounded-xl p-4 border border-[#1e293b] flex items-center justify-center relative">
        <div className="grid grid-cols-2 gap-2 w-full max-w-[150px] transition-all duration-700">
           <div className="h-10 bg-gray-800 rounded opacity-60"></div>
           <div className="h-10 bg-gray-800 rounded opacity-60"></div>
           <div className="h-10 bg-cyan-900 border border-cyan-500 rounded scale-105 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
           <div className="h-10 bg-gray-800 rounded opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

const AIAnimation = () => {
  const code = `import { Agent } from 'ai-core';\n\nconst agent = new Agent();\nawait agent.train(data);\nconsole.log('Done');`;
  const { displayedText, isComplete } = useTypingEffect(code, 40);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-48 lg:h-56 mt-4">
      <div className="flex-1 bg-[#090b14] rounded-xl p-4 border border-[#1e293b] font-mono text-xs overflow-hidden relative shadow-inner">
        <MacControls />
        <pre className="text-gray-300">
          <code className="text-green-400">
             {displayedText.split('\n').map((line, i) => (
              <span key={i} className="block"><span className="text-gray-600 mr-2 select-none">{i + 1}</span>{line}</span>
            ))}
            {!isComplete && <span className="inline-block w-2.5 h-4 bg-green-500 animate-pulse align-middle ml-1"></span>}
          </code>
        </pre>
      </div>
      <div className="flex-1 bg-[#090b14] rounded-xl p-4 border border-[#1e293b] flex items-center justify-center relative">
        <div className="w-full text-xs font-mono text-gray-500 text-left px-2">
           <p className="mb-1">{'>'} Processing prompt...</p>
           <p className="text-green-400 mb-1 transition-opacity duration-1000">{'>'} Optimization complete ⚡</p>
           <div className="bg-gray-800/50 p-2 rounded mt-2 border border-green-900 transition-all duration-1000 delay-300">
             <span className="text-gray-300 block">def optimized():</span>
             <span className="text-blue-300 block pl-4">return True</span>
           </div>
        </div>
      </div>
    </div>
  );
};


// --- Configuración de Datos ---
type ServiceCodeType = 'web' | 'mobile' | 'uiux' | 'ai';

type ServiceCustomItem = {
  id: ServiceCodeType;
  titleEsp: string;
  titleEng: string;
  descEsp: string;
  descEng: string;
  labelEsp: string;
  labelEng: string;
};

const servicesData: ServiceCustomItem[] = [
  {
    id: 'web',
    titleEsp: 'Aplicaciones & Páginas Web',
    titleEng: 'Landings & Web',
    descEsp: 'Aplicaciones y páginas web modernas, rápidas y escalables con los últimos frameworks.',
    descEng: 'Modern Apps and Web Pages, fast and scalable with the latest frameworks.',
    labelEsp: 'Desde 250K COP',
    labelEng: 'Sites from 100 USD',
  },
  {
    id: 'ai',
    titleEsp: 'Agentes IA & Automatización',
    titleEng: 'AI agents & Automation',
    descEsp: '¿Que una IA automatize tus procesos? No es un milagro, es Ashenvell en acción.',
    descEng: 'Detach from the usual and speed up business processes by deploying artificial intelligence flows and Agents.',
    labelEsp: 'MANEJAMOS IA, SI',
    labelEng: 'WE HANDLE AI, YES',
  },
  {
    id: 'uiux',
    titleEsp: 'Diseño UI/UX',
    titleEng: 'UI/UX Design',
    descEsp: 'Deja de usar esas plantillas genéricas de Wordpress, aquí te diseñamos pura calidad.',
    descEng: 'Stop using boring Wordpress templates and get 100% customized interfaces.',
    labelEsp: 'Buenos Diseños Here',
    labelEng: 'Good Designs here',
  },
  {
    id: 'mobile',
    titleEsp: 'Apps Móviles',
    titleEng: 'Mobile Apps',
    descEsp: 'iOS y Android. Apps nativas e híbridas de alto rendimiento que escalan conectando con tus clientes.',
    descEng: 'iOS and Android. High-performance native & hybrid apps that scale mapping your user needs.',
    labelEsp: 'Desde 2M COP',
    labelEng: 'Apps from 1000 USD',
  }
];

const ServiceCard: React.FC<{
  item: ServiceCustomItem;
  index: number;
  isVisible: boolean;
  isEnglish: boolean;
}> = ({ item, index, isEnglish }) => {
  const renderAnimation = () => {
    switch (item.id) {
      case 'web': return <WebAnimation />;
      case 'mobile': return <MobileAnimation />;
      case 'uiux': return <UXAnimation />;
      case 'ai': return <AIAnimation />;
      default: return null;
    }
  };

  const numberFormat = (index + 1).toString().padStart(2, '0');
  const title = isEnglish ? item.titleEng : item.titleEsp;
  const desc = isEnglish ? item.descEng : item.descEsp;
  const label = isEnglish ? item.labelEng : item.labelEsp;
  const cta = isEnglish ? 'Get an estimate →' : 'Cotizar este servicio →';
  const href = "#contact";

  return (
    <div
      className="bg-[#0f1423] p-6 lg:p-8 rounded-[32px] shadow-[0_0_15px_rgba(30,58,138,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-500 transform border border-[#1e293b] hover:border-blue-900 h-full flex flex-col"
    >
      {/* Header (Labels y Títulos) */}
      <div className="flex justify-between items-start mb-6 gap-4">
        <div>
           <span className="text-blue-500 font-mono text-sm block mb-1">{numberFormat}</span>
           <h3 className="text-3xl font-bold text-white leading-tight">{title}</h3>
        </div>
        <div className="hidden sm:flex px-4 py-1.5 bg-blue-900/30 border border-blue-800 rounded-full shrink-0 text-center items-center">
           <span className="text-blue-400 font-mono text-xs">{label}</span>
        </div>
      </div>

      {/* Contenido animado (Centro dual-panel) */}
      {renderAnimation()}

      {/* Footer (Desc y CTA) */}
      <div className="mt-auto pt-8">
        <p className="text-gray-400 leading-relaxed mb-6 lg:text-lg">{desc}</p>
        <Link href={href} className="text-blue-500 hover:text-blue-400 transition-colors font-semibold py-2">
          {cta}
        </Link>
      </div>
    </div>
  );
};

type ServicesSectionProps = {
  locale?: Locale;
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ locale = 'es' }) => {
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isEnglish = locale === 'en';

  useEffect(() => {
    const currentRefs = cardRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#000412]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-xl">
            <span className="text-blue-500 font-mono text-sm mb-4 block">Las maravillas que hacemos, no es ego, es la realidad</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white whitespace-nowrap">
              {isEnglish ? 'Our Services.' : 'Nuestros Servicios.'}
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-md mt-6 md:mt-0 text-left">
            {isEnglish
              ? 'We give solutions to your problems, and if you don\'t have any, we create one and solve it.'
              : 'Le damos solución a tus problemas, y si no tienes problemas te creamos uno y lo solucionamos.'}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div key={service.id} id={`service-${index}`} className="h-full" ref={el => { cardRefs.current[index] = el; }}>
              <ServiceCard
                item={service}
                index={index}
                isEnglish={isEnglish}
                isVisible={!!visibleCards[`service-${index}`]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
