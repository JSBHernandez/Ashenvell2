import type { Metadata } from "next";
import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/seo";

export const metadata: Metadata = createLocalizedMetadata({
  title: "Diseno UI/UX Futurista | Ashenvell",
  description:
    "Interfaces atractivas con enfoque en experiencia de usuario, tendencias fuera de lo comun y 100% personalizadas.",
  keywords:
    "diseno UI, diseno UX, interfaces, experiencia de usuario, diseno personalizado, diseno futurista",
  locale: "es",
  pathEs: "/diseno-ui-ux",
  pathEn: "/en/ui-ux-design",
});

export default function DisenoUIUXPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#00E5FF] mb-6">
                Diseño UI/UX Futurista
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                Interfaces atractivas con un enfoque en la experiencia del usuario, tendencias más allá de lo común y 100% personalizadas
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#60A5FA] transition-colors shadow-lg"
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </section>

        {/* Descripción Detallada */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-8 text-center">
              ¿Por qué el diseño UI/UX es crucial?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Primera Impresión</h3>
                <p className="text-gray-400">
                  Un diseño atractivo genera confianza y profesionalismo desde el primer momento.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Conversión Optimizada</h3>
                <p className="text-gray-400">
                  Interfaces intuitivas que guían al usuario hacia tus objetivos de negocio.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Diferenciación</h3>
                <p className="text-gray-400">
                  Destaca de la competencia con un diseño único y memorable que refleja tu marca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Enfoque */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Nuestro Enfoque de Diseño
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Investigación de Usuario</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Análisis de público objetivo y comportamiento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Creación de personas y mapas de viaje del usuario</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Testing y validación con usuarios reales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Iteración basada en feedback y datos</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Diseño Visual</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Tendencias actuales y diseño futurista</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Sistemas de diseño escalables y consistentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Animaciones y microinteracciones cuidadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Accesibilidad y diseño inclusivo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Herramientas */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Herramientas Profesionales
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Figma", desc: "Diseño colaborativo" },
                { name: "Adobe XD", desc: "Prototipado" },
                { name: "Photoshop", desc: "Edición visual" },
                { name: "Illustrator", desc: "Gráficos vectoriales" },
                { name: "After Effects", desc: "Animaciones" },
                { name: "Sketch", desc: "Diseño de interfaces" },
                { name: "InVision", desc: "Prototipado interactivo" },
                { name: "Principle", desc: "Microinteracciones" },
              ].map((tool) => (
                <div key={tool.name} className="bg-[#0D1117] p-6 rounded-xl text-center border border-gray-800">
                  <h3 className="text-lg font-semibold text-[#60A5FA] mb-1">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de Diseño */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Proceso de Diseño
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { num: "01", title: "Descubrimiento", desc: "Entendemos tu visión" },
                { num: "02", title: "Wireframes", desc: "Estructura y flujo" },
                { num: "03", title: "Diseño UI", desc: "Interfaz visual" },
                { num: "04", title: "Prototipo", desc: "Interacciones reales" },
                { num: "05", title: "Testing", desc: "Validación final" },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="text-4xl font-bold text-[#3B82F6] mb-3">{step.num}</div>
                  <h3 className="text-lg font-semibold text-[#60A5FA] mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principios de Diseño */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Principios que Seguimos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "👁️", title: "Claridad Visual", desc: "Jerarquía y legibilidad impecables" },
                { icon: "🎨", title: "Consistencia", desc: "Patrones coherentes en toda la interfaz" },
                { icon: "⚡", title: "Velocidad", desc: "Interacciones rápidas y fluidas" },
                { icon: "🧩", title: "Simplicidad", desc: "Menos es más, diseño minimalista" },
                { icon: "♿", title: "Accesibilidad", desc: "Usable para todos los usuarios" },
                { icon: "📐", title: "Espaciado", desc: "Respiración y balance visual" },
              ].map((principle) => (
                <div key={principle.title} className="bg-[#0D1117] p-6 rounded-xl">
                  <div className="text-4xl mb-3">{principle.icon}</div>
                  <h3 className="text-lg font-semibold text-[#60A5FA] mb-2">{principle.title}</h3>
                  <p className="text-gray-400 text-sm">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00E5FF] mb-6">
              ¿Listo para transformar tu producto digital?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Creemos juntos una experiencia de usuario excepcional que tus clientes amarán
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#60A5FA] transition-colors shadow-lg"
              >
                Iniciar Proyecto
              </Link>
              <Link
                href="/#portfolio"
                className="bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-lg font-semibold hover:bg-[#3B82F6] hover:text-white transition-colors"
              >
                Ver Portafolio
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
