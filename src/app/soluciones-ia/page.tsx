import type { Metadata } from "next";
import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/seo";

export const metadata: Metadata = createLocalizedMetadata({
  title: "Soluciones con IA | Ashenvell",
  description:
    "Integracion de inteligencia artificial para optimizar procesos y crear productos innovadores.",
  keywords:
    "inteligencia artificial, IA, machine learning, automatizacion, chatbots, analisis de datos",
  locale: "es",
  pathEs: "/soluciones-ia",
  pathEn: "/en/ai-solutions",
});

export default function SolucionesIAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#00E5FF] mb-6">
                Soluciones con Inteligencia Artificial
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                Integración de inteligencia artificial para optimizar procesos y crear productos innovadores
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
              El poder de la IA en tu negocio
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Automatización Inteligente</h3>
                <p className="text-gray-400">
                  Automatiza tareas repetitivas y libera tiempo para lo que realmente importa.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Análisis Predictivo</h3>
                <p className="text-gray-400">
                  Toma decisiones basadas en datos y predicciones precisas de tendencias futuras.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Experiencia Personalizada</h3>
                <p className="text-gray-400">
                  Ofrece experiencias únicas a cada usuario mediante recomendaciones inteligentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de IA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Nuestros Servicios de IA
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Chatbots y Asistentes Virtuales</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Atención al cliente 24/7 automatizada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Procesamiento de lenguaje natural (NLP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Integración con plataformas de mensajería</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Respuestas contextuales y aprendizaje continuo</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Análisis de Datos e Insights</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Análisis predictivo y forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Detección de patrones y anomalías</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Visualización de datos inteligente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Reportes automáticos personalizados</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Sistemas de Recomendación</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Recomendaciones personalizadas de productos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Filtrado colaborativo y content-based</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Aumento de conversión y engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Machine learning para mejorar sugerencias</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Visión por Computadora</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Reconocimiento de imágenes y objetos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Procesamiento de documentos automático</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Control de calidad visual automatizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Detección facial y reconocimiento biométrico</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Tecnologías y Frameworks
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "TensorFlow", desc: "Machine Learning" },
                { name: "PyTorch", desc: "Deep Learning" },
                { name: "OpenAI API", desc: "GPT & DALL-E" },
                { name: "Hugging Face", desc: "NLP Models" },
                { name: "scikit-learn", desc: "ML Algorithms" },
                { name: "Langchain", desc: "LLM Apps" },
                { name: "OpenCV", desc: "Computer Vision" },
                { name: "Python", desc: "Core Language" },
              ].map((tech) => (
                <div key={tech.name} className="bg-[#0D1117] p-6 rounded-xl text-center border border-gray-800">
                  <h3 className="text-lg font-semibold text-[#60A5FA] mb-1">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Casos de Uso Reales
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🛒", title: "E-commerce", desc: "Recomendaciones de productos y chatbots de ventas" },
                { icon: "🏥", title: "Salud", desc: "Diagnóstico asistido y análisis de imágenes médicas" },
                { icon: "💰", title: "Finanzas", desc: "Detección de fraude y trading algorítmico" },
                { icon: "📱", title: "Marketing", desc: "Segmentación de audiencias y personalización" },
                { icon: "🏭", title: "Manufactura", desc: "Control de calidad y mantenimiento predictivo" },
                { icon: "📚", title: "Educación", desc: "Tutores virtuales y sistemas adaptativos" },
              ].map((useCase) => (
                <div key={useCase.title} className="bg-[#161B22] p-6 rounded-xl border border-gray-800">
                  <div className="text-4xl mb-3">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold text-[#60A5FA] mb-2">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Nuestro Proceso de Implementación
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Análisis", desc: "Identificamos oportunidades de IA" },
                { num: "02", title: "Diseño", desc: "Arquitectura y selección de modelos" },
                { num: "03", title: "Entrenamiento", desc: "Preparación de datos y training" },
                { num: "04", title: "Deploy", desc: "Implementación y monitoreo" },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="text-5xl font-bold text-[#3B82F6] mb-4">{step.num}</div>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00E5FF] mb-6">
              ¿Listo para revolucionar tu negocio con IA?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Implementemos soluciones de inteligencia artificial que impulsen tu crecimiento
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
