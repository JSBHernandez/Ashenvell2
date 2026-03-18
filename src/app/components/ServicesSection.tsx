"use client"; // Para animaciones en scroll con Intersection Observer

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { ServiceItem } from '@/types';
import type { Locale } from '@/lib/i18n';

// Iconos específicos para cada servicio
const WebDevIcon = () => (
  <svg className="w-12 h-12 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-12 h-12 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-12 h-12 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const AIIcon = () => (
  <svg className="w-12 h-12 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);


const serviceLinksEs: Record<string, string> = {
  web: '/desarrollo-web',
  mobile: '/aplicaciones-moviles',
  uiux: '/diseno-ui-ux',
  ai: '/soluciones-ia',
};

const serviceLinksEn: Record<string, string> = {
  web: '/en/web-development',
  mobile: '/en/mobile-apps',
  uiux: '/en/ui-ux-design',
  ai: '/en/ai-solutions',
};

const ServiceCard: React.FC<{
  item: ServiceItem;
  isVisible: boolean;
  href: string;
  ctaLabel: string;
}> = ({ item, isVisible, href, ctaLabel }) => {
  const IconComponent = item.id === 'web' ? WebDevIcon : item.id === 'mobile' ? MobileIcon : item.id === 'uiux' ? DesignIcon : AIIcon;
  
  return (
    <Link href={href} className="block">
      <div
        className={`bg-brand-dark-secondary p-8 rounded-xl shadow-xl hover:shadow-glow-blue transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="flex justify-center md:justify-start">
          <IconComponent />
        </div>
        <h3 className="text-2xl font-semibold text-brand-blue-light mb-3 mt-2">{item.title}</h3>
        <p className="text-brand-muted-text leading-relaxed">{item.description}</p>
        <div className="mt-4 text-brand-blue hover:text-brand-blue-light transition-colors font-semibold">
          {ctaLabel} →
        </div>
      </div>
    </Link>
  );
};


type ServicesSectionProps = {
  locale?: Locale;
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ locale = 'es' }) => {
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isEnglish = locale === 'en';

  const servicesData: ServiceItem[] = isEnglish
    ? [
        {
          id: 'ai',
          icon: 'ai',
          title: 'AI Solutions',
          description: 'AI Workflows and Agents to optimize processes and automate tasks.',
        },
        {
          id: 'web',
          icon: 'code',
          title: 'Advanced Web Development',
          description: 'Modern, fast and scalable web applications with the latest technologies and frameworks (Next.js, React, Node.js).',
        },
        {
          id: 'mobile',
          icon: 'mobile',
          title: 'Native & Hybrid Mobile Apps',
          description: 'Smooth and high-performance mobile experiences for Android, iOS and WebView.',
        },
        {
          id: 'uiux',
          icon: 'design',
          title: 'Non-conventional UI/UX Design',
          description: 'Attractive interfaces with a focus on user experience, beyond common trends and 100% customized.',
        }
      ]
    : [
        {
          id: 'ai',
          icon: 'ai',
          title: 'Soluciones con IA',
          description: 'Integracion de Flujos y Agentes IA para optimizar procesos y automatizar cualquier tarea.',
        },
        {
          id: 'web',
          icon: 'code',
          title: 'Desarrollo Web Avanzado',
          description: 'Aplicaciones Web modernas, rapidas y escalables con las ultimas tecnologias y frameworks (Next.js, React, Node.js).',
        },
        {
          id: 'mobile',
          icon: 'mobile',
          title: 'Aplicaciones Moviles Nativas e Hibridas',
          description: 'Experiencias moviles fluidas y de alto rendimiento Android, iOS y WebView.',
        },
        {
          id: 'uiux',
          icon: 'design',
          title: 'Diseno UI/UX no convencional',
          description: 'Interfaces atractivas con un enfoque en la experiencia del usuario, tendencias mas alla de lo comun y 100% personalizadas.',
        }
      ];

  const serviceLinks = isEnglish ? serviceLinksEn : serviceLinksEs;

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
    <section id="services" className="py-20 md:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{isEnglish ? 'Our Services' : 'Nuestros Servicios'}</h2>
        <p className="section-subtitle">
          {isEnglish
            ? 'We transform ideas into digital reality with your own personalized approach and brand identity.'
            : 'Transformamos ideas en realidad digital con tu propio enfoque personalizado e identidad de marca.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {servicesData.map((service, index) => (
            <div key={service.id} id={`service-${service.id}`} ref={el => { cardRefs.current[index] = el; }}>
              <ServiceCard
                item={service}
                href={serviceLinks[service.id]}
                ctaLabel={isEnglish ? 'Learn more' : 'Conocer mas'}
                isVisible={!!visibleCards[`service-${service.id}`]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;