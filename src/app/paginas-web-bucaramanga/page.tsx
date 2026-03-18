import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Páginas web en Bucaramanga • Desarrollo web profesional — Ashenvell',
  description: 'Creamos páginas web en Bucaramanga que venden: diseño responsive, SEO local y mantenimiento. Cotiza hoy — respuesta en 24h.',
  keywords: 'páginas web Bucaramanga, desarrollo web Bucaramanga, diseño web Bucaramanga, SEO local Bucaramanga',
  alternates: {
    canonical: 'https://ashenvell.com/paginas-web-bucaramanga',
    languages: {
      'es': 'https://ashenvell.com/paginas-web-bucaramanga',
      'en': 'https://ashenvell.com/en/web-development',
    },
  },
  openGraph: {
    title: 'Páginas web en Bucaramanga • Ashenvell',
    description: 'Diseño web, e-commerce y SEO local para empresas en Bucaramanga. Cotiza hoy.',
    url: 'https://ashenvell.com/paginas-web-bucaramanga',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: 'https://ashenvell.com/alogo.png',
        width: 1200,
        height: 630,
        alt: 'Ashenvell - Páginas web en Bucaramanga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Páginas web en Bucaramanga • Ashenvell',
    description: 'Diseño web, e-commerce y SEO local para empresas en Bucaramanga.',
    images: ['https://ashenvell.com/alogo.png'],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ashenvell",
  "url": "https://ashenvell.com",
  "logo": "https://ashenvell.com/alogo.png",
  "telephone": "+57-320-900-7932",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bucaramanga",
    "addressRegion": "Santander",
    "addressCountry": "CO"
  },
  "areaServed": "Bucaramanga",
  "description": "Desarrollo de páginas web profesionales en Bucaramanga con diseño responsive, SEO local y mantenimiento.",
  "priceRange": "$$"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una página web en Bucaramanga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los precios varían según el alcance del proyecto. Una landing page básica parte desde $800.000 COP, mientras que sitios más complejos o e-commerce tienen costos personalizados. Cotiza aquí y te daremos una propuesta detallada en 24h."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen mantenimiento después del lanzamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups automáticos, soporte técnico prioritario y ajustes de contenido. El mantenimiento garantiza que tu sitio web siempre esté actualizado y funcionando óptimamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen SEO local para empresas de Bucaramanga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, especializamos en SEO local para Bucaramanga. Optimizamos tu sitio para aparecer en búsquedas locales como 'páginas web Bucaramanga', gestionamos tu ficha de Google Business Profile, y configuramos estrategias para atraer clientes de la región."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda el desarrollo de una página web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del alcance del proyecto. Una landing page básica puede estar lista en 2-3 semanas, mientras que proyectos más complejos como e-commerce o sitios corporativos pueden tomar de 6 a 12 semanas. Te daremos un cronograma detallado en la cotización."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://ashenvell.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Páginas web en Bucaramanga",
      "item": "https://ashenvell.com/paginas-web-bucaramanga"
    }
  ]
};

export default function PaginasWebBucaramangaPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm text-brand-muted-text">
          <li>
            <Link href="/" className="hover:text-brand-accent transition-colors">
              Inicio
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-brand-light-text" aria-current="page">
            Páginas web en Bucaramanga
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-brand-dark to-[#161B22] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block text-brand-light-text">Páginas web en Bucaramanga</span>
            <span className="block text-brand-accent mt-2">Diseño, desarrollo y SEO local</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted-text max-w-3xl mx-auto mb-8">
            Ayudamos a empresas en Bucaramanga a vender más con páginas web rápidas, responsivas y optimizadas para SEO local.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+573209007932"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2"
              aria-label="Llamar a Ashenvell"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llámanos: +57 320 900 7932
            </a>
            <a href="#cotizacion" className="bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all px-10 py-4 rounded-lg font-semibold text-lg">
              Cotizar Proyecto
            </a>
          </div>
        </div>
      </header>

      <main className="bg-brand-dark">
        {/* Servicios Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#161B22] to-brand-dark">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Servicios que ofrecemos en Bucaramanga</h2>
            <p className="section-subtitle">
              Soluciones web completas para tu negocio
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-brand-card-bg border border-brand-border rounded-xl p-6 hover:border-brand-accent transition-all">
                <div className="text-brand-accent text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-brand-light-text mb-3">Diseño Web Responsive</h3>
                <p className="text-brand-muted-text">
                  Sitios web que se adaptan perfectamente a móviles, tablets y computadores. Diseño moderno y profesional.
                </p>
              </div>

              <div className="bg-brand-card-bg border border-brand-border rounded-xl p-6 hover:border-brand-accent transition-all">
                <div className="text-brand-accent text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-brand-light-text mb-3">Tienda Online / E-commerce</h3>
                <p className="text-brand-muted-text">
                  Plataformas de venta online con pasarelas de pago, gestión de inventario y envíos.
                </p>
              </div>

              <div className="bg-brand-card-bg border border-brand-border rounded-xl p-6 hover:border-brand-accent transition-all">
                <div className="text-brand-accent text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-brand-light-text mb-3">SEO Local Bucaramanga</h3>
                <p className="text-brand-muted-text">
                  Posicionamiento en Google para búsquedas locales. Aparecer primero cuando clientes te buscan.
                </p>
              </div>

              <div className="bg-brand-card-bg border border-brand-border rounded-xl p-6 hover:border-brand-accent transition-all">
                <div className="text-brand-accent text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-brand-light-text mb-3">Mantenimiento y Hosting</h3>
                <p className="text-brand-muted-text">
                  Soporte técnico continuo, actualizaciones de seguridad y hosting rápido y confiable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Por qué elegir Ashenvell en Bucaramanga</h2>
            <p className="section-subtitle">
              Experiencia local, resultados comprobados
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/20 text-brand-accent text-2xl mb-4">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold text-brand-light-text mb-2">Respuesta en 24h</h3>
                <p className="text-brand-muted-text">
                  Cotizamos tu proyecto en máximo un día hábil. Sin largas esperas.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/20 text-brand-accent text-2xl mb-4">
                  🏆
                </div>
                <h3 className="text-xl font-semibold text-brand-light-text mb-2">Casos de Éxito</h3>
                <p className="text-brand-muted-text">
                  Hemos ayudado a decenas de empresas en Bucaramanga a crecer online.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/20 text-brand-accent text-2xl mb-4">
                  💬
                </div>
                <h3 className="text-xl font-semibold text-brand-light-text mb-2">Soporte Cercano</h3>
                <p className="text-brand-muted-text">
                  Atención personalizada y asesoría continua para tu proyecto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de éxito */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-brand-dark to-[#161B22]">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Casos de éxito en Bucaramanga</h2>
            <p className="section-subtitle">
              Empresas que confiaron en nosotros
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="bg-brand-card-bg border border-brand-border rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-brand-accent mb-3">Green Consulting</h3>
                  <p className="text-brand-muted-text mb-4">
                    Sitio web corporativo para consultoría de ingeniería sostenible. Diseño profesional con formularios de contacto y portafolio de proyectos.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-400 text-white px-3 py-1 rounded-full font-semibold">Sitio Corporativo</span>
                    <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-400 text-white px-3 py-1 rounded-full font-semibold">SEO</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-card-bg border border-brand-border rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-brand-accent mb-3">Importadora Sky</h3>
                  <p className="text-brand-muted-text mb-4">
                    Sitio web de servicios de importación con catálogo de productos, calculadora de costos y sistema de cotización online.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-gradient-to-r from-blue-500 to-blue-400 text-white px-3 py-1 rounded-full font-semibold">E-commerce</span>
                    <span className="text-xs bg-gradient-to-r from-blue-500 to-blue-400 text-white px-3 py-1 rounded-full font-semibold">WordPress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de Cotización */}
        <section id="cotizacion" className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="section-title">Solicita una cotización</h2>
            <p className="section-subtitle">
              Cuéntanos sobre tu proyecto y te respondemos en 24h
            </p>

            <form method="POST" action="/api/contact" className="mt-12 bg-brand-card-bg border border-brand-border rounded-2xl p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-brand-light-text font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-lg text-brand-light-text focus:border-brand-accent focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-brand-light-text font-semibold mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-lg text-brand-light-text focus:border-brand-accent focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-brand-light-text font-semibold mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-lg text-brand-light-text focus:border-brand-accent focus:outline-none transition-colors"
                  placeholder="+57 XXX XXX XXXX"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-brand-light-text font-semibold mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-lg text-brand-light-text focus:border-brand-accent focus:outline-none transition-colors resize-none"
                  placeholder="Describe tu proyecto: tipo de sitio web, funcionalidades que necesitas, plazos, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Enviar solicitud
              </button>

              <p className="text-sm text-brand-muted-text text-center mt-4">
                * Responderemos tu cotización en máximo 24 horas hábiles
              </p>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-brand-dark to-[#161B22]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="section-title">Preguntas frecuentes</h2>
            <p className="section-subtitle">
              Resolvemos tus dudas sobre desarrollo web en Bucaramanga
            </p>

            <div className="mt-12 space-y-6">
              <details className="bg-brand-card-bg border border-brand-border rounded-xl p-6 group">
                <summary className="font-semibold text-lg text-brand-light-text cursor-pointer list-none flex justify-between items-center">
                  ¿Cuánto cuesta una página web en Bucaramanga?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-brand-muted-text mt-4">
                  Los precios varían según el alcance del proyecto. Una landing page básica parte desde $800.000 COP, mientras que sitios más complejos o e-commerce tienen costos personalizados. Cotiza aquí y te daremos una propuesta detallada en 24h.
                </p>
              </details>

              <details className="bg-brand-card-bg border border-brand-border rounded-xl p-6 group">
                <summary className="font-semibold text-lg text-brand-light-text cursor-pointer list-none flex justify-between items-center">
                  ¿Ofrecen mantenimiento después del lanzamiento?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-brand-muted-text mt-4">
                  Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups automáticos, soporte técnico prioritario y ajustes de contenido. El mantenimiento garantiza que tu sitio web siempre esté actualizado y funcionando óptimamente.
                </p>
              </details>

              <details className="bg-brand-card-bg border border-brand-border rounded-xl p-6 group">
                <summary className="font-semibold text-lg text-brand-light-text cursor-pointer list-none flex justify-between items-center">
                  ¿Hacen SEO local para empresas de Bucaramanga?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-brand-muted-text mt-4">
                  Sí, especializamos en SEO local para Bucaramanga. Optimizamos tu sitio para aparecer en búsquedas locales como &apos;páginas web Bucaramanga&apos;, gestionamos tu ficha de Google Business Profile, y configuramos estrategias para atraer clientes de la región.
                </p>
              </details>

              <details className="bg-brand-card-bg border border-brand-border rounded-xl p-6 group">
                <summary className="font-semibold text-lg text-brand-light-text cursor-pointer list-none flex justify-between items-center">
                  ¿Cuánto tiempo tarda el desarrollo de una página web?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-brand-muted-text mt-4">
                  Depende del alcance del proyecto. Una landing page básica puede estar lista en 2-3 semanas, mientras que proyectos más complejos como e-commerce o sitios corporativos pueden tomar de 6 a 12 semanas. Te daremos un cronograma detallado en la cotización.
                </p>
              </details>

              <details className="bg-brand-card-bg border border-brand-border rounded-xl p-6 group">
                <summary className="font-semibold text-lg text-brand-light-text cursor-pointer list-none flex justify-between items-center">
                  ¿Trabajan con empresas fuera de Bucaramanga?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-brand-muted-text mt-4">
                  Sí, aunque nos especializamos en Bucaramanga, trabajamos con clientes de toda Colombia y Latinoamérica. Todas nuestras comunicaciones y reuniones pueden ser virtuales.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-brand-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para impulsar tu negocio online?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Obtén una cotización personalizada sin compromiso. Te respondemos en 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#cotizacion"
                className="bg-white text-brand-blue hover:bg-gray-100 transition-all px-10 py-4 rounded-lg font-bold text-lg inline-block"
              >
                Cotizar mi proyecto
              </a>
              <a
                href="tel:+573209007932"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue transition-all px-10 py-4 rounded-lg font-bold text-lg inline-block"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
