import React from 'react';
import type { Locale } from '@/lib/i18n';

type WhyUsSectionProps = {
  locale?: Locale;
};

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ locale = 'es' }) => {
  const isEnglish = locale === 'en';

  const stats = [
    {
      tag: isEnglish ? '// No 2-hour meetings' : '// Solo con una llamada',
      value: '20K+',
      desc: isEnglish ? 'Users in production' : 'Usuarios en producción',
    },
    {
      tag: isEnglish ? '// no expensive middlemen' : '// Somos los únicos intermediarios',
      value: '24hrs',
      desc: isEnglish ? 'Deploys with no complaints' : 'Deploy cada hora del día',
    },
    {
      tag: isEnglish ? '// 100% real code' : '// 100% código con Next y React',
      value: '0',
      desc: isEnglish ? 'PDFs delivered' : 'PDFs entregados',
    },
    {
      tag: isEnglish ? '// pure execution' : '// A la medida exclusivamente',
      value: '100%',
      desc: isEnglish ? 'Real code, no fluff' : 'Código real, sin wordpress o plantillas',
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#000412] relative overflow-hidden flex flex-col justify-center border-t border-b border-[#1e293b]/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Tag */}
        <div className="flex justify-start mb-8 lg:mb-12">
           <span className="text-blue-500 font-mono text-xs sm:text-sm">
             {isEnglish ? '// why we exist' : 'De verdad no vas a elegirnos? Impresionante...'}
           </span>
        </div>

        {/* Decorative Circle (matches screenshot placement roughly) */}
        <div className="hidden md:block absolute top-[5%] right-[45%] w-10 h-10 rounded-full border border-blue-900/30"></div>

        {/* Main Title Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-28 lg:mb-40">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-500 leading-tight">
            {isEnglish ? 'Serious agencies charge you for a PowerPoint.' : 'Las agencias serias se quedaron en el pasado.'}
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            {isEnglish ? 'We charge you for the ' : 'Nosotros cumplimos sin ninguna '}
            <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
              {isEnglish ? 'software.' : 'cosa innecesaria.'}
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-blue-500/70 font-mono text-xs mb-8 lg:mb-12">
                {stat.tag}
              </span>
              <span className="text-5xl lg:text-6xl font-bold text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] mb-4 block">
                {stat.value}
              </span>
              <span className="text-gray-400 text-sm lg:text-base">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Tag */}
        <div className="flex justify-center mt-28 lg:mt-32">
           <span className="text-blue-500 font-mono text-xs sm:text-sm cursor-pointer hover:text-blue-400 transition-colors">
             {isEnglish ? '// how it works' : '// cómo funciona'}
           </span>
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;
