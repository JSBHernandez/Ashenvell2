import React from 'react';
import type { Locale } from '@/lib/i18n';

type WhyUsSectionProps = {
  locale?: Locale;
};

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ locale = 'es' }) => {
  const isEnglish = locale === 'en';

  const stats = [
    {
      tag: isEnglish ? '// no 2-hour meetings' : '// sin reuniones de 2 horas',
      value: '40K+',
      desc: isEnglish ? 'users in production' : 'usuarios en producción',
    },
    {
      tag: isEnglish ? '// no expensive middlemen' : '// sin intermediarios caros',
      value: '2am',
      desc: isEnglish ? 'deploys with no complaints' : 'deployamos sin quejarnos',
    },
    {
      tag: isEnglish ? '// with real code' : '// con código real',
      value: '0',
      desc: isEnglish ? 'PowerPoints delivered' : 'PowerPoints entregados',
    },
    {
      tag: isEnglish ? '// pure execution' : '// pura ejecución',
      value: '100%',
      desc: isEnglish ? 'real code, no fluff' : 'código real, sin relleno',
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#000412] relative overflow-hidden flex flex-col justify-center border-t border-b border-[#1e293b]/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Tag */}
        <div className="flex justify-start mb-8 lg:mb-12">
           <span className="text-blue-500 font-mono text-xs sm:text-sm">
             {isEnglish ? '// why we exist' : '// por qué existimos'}
           </span>
        </div>

        {/* Decorative Circle (matches screenshot placement roughly) */}
        <div className="hidden md:block absolute top-[5%] right-[45%] w-10 h-10 rounded-full border border-blue-900/30"></div>

        {/* Main Title Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-28 lg:mb-40">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-500 leading-tight">
            {isEnglish ? 'Serious agencies charge you for the PowerPoint.' : 'Las agencias serias te cobran el PowerPoint.'}
          </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            {isEnglish ? 'We charge you for the ' : 'Nosotros te cobramos el '}
            <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
              {isEnglish ? 'software.' : 'software.'}
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
