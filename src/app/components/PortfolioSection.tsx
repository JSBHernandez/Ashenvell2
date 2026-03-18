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
    <section id="portfolio" className="py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{isEnglish ? 'Our Work' : 'Nuestro Trabajo'}</h2>
        <p className="section-subtitle">
          {isEnglish
            ? 'Projects that demonstrate our passion for technology and cutting-edge design. Want to be here? Contact us.'
            : 'Proyectos que demuestran nuestra pasion por la tecnologia y el diseno de vanguardia. Quieres estar aqui? Contactanos.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <a
              key={item.title + item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={`${item.title}-${tag}`} className={`text-xs bg-gradient-to-r ${item.gradient} text-white px-3 py-1 rounded-full font-semibold`}>
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