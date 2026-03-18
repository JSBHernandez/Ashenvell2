import React from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
  tags: string[];
  gradient: string;
};

type PortfolioSectionProps = {
  locale?: Locale;
};

const portfolioBase: Array<Omit<PortfolioItem, 'title' | 'description' | 'alt'>> = [
  {
    image: '/greencapture.png',
    href: 'https://greenconsultingingenieria.com/',
    tags: ['HTML', 'CSS', 'JS'],
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    image: '/intracapture.png',
    href: 'https://api.whatsapp.com/send?phone=573239007932&text=I%20want%20my%20website%20right%20now!%F0%9F%92%BB',
    tags: ['Next.js', 'Intranet', 'Custom Modules', 'Scraping'],
    gradient: 'from-orange-500 to-orange-400',
  },
  {
    image: '/beautycapture.png',
    href: 'https://skybmanga.com/',
    tags: ['Wordpress', 'Woocommerce', 'Bold'],
    gradient: 'from-blue-700 to-blue-600',
  },
  {
    image: '/skycapture.png',
    href: 'https://importadorasky.com/',
    tags: ['Wordpress', 'Custom Themes', 'Additional CSS'],
    gradient: 'from-blue-700 to-blue-600',
  },
  {
    image: '/leycapture.png',
    href: 'https://ley-explico.vercel.app/',
    tags: ['Next.js', 'Tailwind.css', 'Education'],
    gradient: 'from-purple-700 to-purple-600',
  },
];

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ locale = 'es' }) => {
  const isEnglish = locale === 'en';

  const items: PortfolioItem[] = isEnglish
    ? [
        {
          ...portfolioBase[0],
          title: 'Green Consulting Engineering',
          description: 'Corporate website for sustainable and environmental engineering consulting.',
          alt: 'Green Consulting Engineering',
        },
        {
          ...portfolioBase[1],
          title: 'Modular Project v.01',
          description: 'Web application with a payment model that integrates multiple corporate functionalities.',
          alt: 'Modular Project v.01',
        },
        {
          ...portfolioBase[2],
          title: 'Sky Beauty Line',
          description: 'Digital beauty products shop and beauty line machinery.',
          alt: 'Sky Beauty Line',
        },
        {
          ...portfolioBase[3],
          title: 'Importadora Sky',
          description: 'Website for import services from the United States.',
          alt: 'Importadora Sky',
        },
        {
          ...portfolioBase[4],
          title: 'Ley Explico',
          description: 'Educational platform to explain laws in a simple and accessible way.',
          alt: 'Ley Explico',
        },
      ]
    : [
        {
          ...portfolioBase[0],
          title: 'Green Consulting Ingenieria',
          description: 'Sitio web corporativo para consultoria de ingenieria sostenible y ambiental.',
          alt: 'Green Consulting Ingenieria',
        },
        {
          ...portfolioBase[1],
          title: 'Modular Project v.01',
          description: 'Aplicacion web de modelo pago que integra multiples funcionalidades corporativas.',
          alt: 'Modular Project v.01',
        },
        {
          ...portfolioBase[2],
          title: 'Sky Beauty Line',
          description: 'Tienda digital de productos y maquinaria de estetica.',
          alt: 'Sky Beauty Line',
        },
        {
          ...portfolioBase[3],
          title: 'Importadora Sky',
          description: 'Sitio web destinado a servicios de importacion desde Estados Unidos.',
          alt: 'Importadora Sky',
        },
        {
          ...portfolioBase[4],
          title: 'Ley Explico',
          description: 'Plataforma educativa para explicar leyes de manera sencilla y accesible.',
          alt: 'Ley Explico',
        },
      ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#000412]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-xl text-left">
            <span className="text-blue-500 font-mono text-sm mb-4 block">
              {isEnglish ? '// selected projects' : '// Sigues bajando y no nos escribes? Contáctanos'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white whitespace-nowrap">
              {isEnglish ? 'Our Work.' : 'Nuestro Trabajo.'}
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-md mt-6 md:mt-0 text-left md:text-right">
            {isEnglish
              ? 'Some projects we worked on. Yours NEEDS to be here.'
              : 'Algunos proyectos en los que hemos trabajado. Al tuyo le urge estar acá.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item) => (
            <a
              key={item.title + item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0f1423] p-5 lg:p-8 rounded-[32px] shadow-[0_0_15px_rgba(30,58,138,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-500 transform border border-[#1e293b] hover:border-blue-900 cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-64 sm:h-80 rounded-[20px] overflow-hidden mb-8 border border-[#1e293b] group-hover:border-blue-900/50 transition-colors duration-500">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
              <div className="px-2 mt-auto flex flex-col flex-1">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 lg:text-lg flex-1">{item.description}</p>
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span key={`${item.title}-${tag}`} className="text-xs font-mono px-4 py-1.5 bg-blue-900/30 border border-blue-800/60 rounded-full text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;