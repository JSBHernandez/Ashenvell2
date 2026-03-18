import type { Metadata } from "next";
import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/seo";

export const metadata: Metadata = createLocalizedMetadata({
  title: "Aplicaciones Moviles | Ashenvell",
  description:
    "Experiencias moviles fluidas y de alto rendimiento para Android y WebView. Desarrollo de apps nativas e hibridas.",
  keywords:
    "aplicaciones moviles, desarrollo movil, Android, WebView, apps nativas, apps hibridas",
  locale: "es",
  pathEs: "/aplicaciones-moviles",
  pathEn: "/en/mobile-apps",
});

export default function AplicacionesMovilesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#00E5FF] mb-6">
                Aplicaciones Móviles de Alto Rendimiento
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                Experiencias móviles fluidas y de alto rendimiento para Android y WebView
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
              Ventajas de nuestras aplicaciones móviles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Nativas y Eficientes</h3>
                <p className="text-gray-400">
                  Desarrollamos apps que aprovechan al máximo las capacidades del dispositivo para un rendimiento óptimo.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Cross-Platform</h3>
                <p className="text-gray-400">
                  Soluciones híbridas que funcionan en múltiples plataformas reduciendo costos y tiempo de desarrollo.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Integración Total</h3>
                <p className="text-gray-400">
                  APIs nativas, notificaciones push, geolocalización, cámara y más funcionalidades integradas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Aplicaciones */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Tipos de Aplicaciones que Desarrollamos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Aplicaciones Nativas</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Android</strong> - Apps optimizadas para el ecosistema Android</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Kotlin/Java</strong> - Lenguajes nativos para máximo rendimiento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Material Design</strong> - Interfaces siguiendo las guías de Google</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Aplicaciones Híbridas</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>WebView</strong> - Apps basadas en tecnologías web</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>React Native</strong> - Framework para desarrollo cross-platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Progressive Web Apps</strong> - Lo mejor de web y móvil</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Características Clave
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🔔", title: "Push Notifications", desc: "Mantén a tus usuarios informados" },
                { icon: "📍", title: "Geolocalización", desc: "Servicios basados en ubicación" },
                { icon: "💳", title: "Pagos In-App", desc: "Integración con sistemas de pago" },
                { icon: "☁️", title: "Sincronización Cloud", desc: "Datos en la nube siempre disponibles" },
                { icon: "🔐", title: "Autenticación", desc: "Login seguro y biométrico" },
                { icon: "📊", title: "Analytics", desc: "Métricas y comportamiento de usuarios" },
              ].map((feature) => (
                <div key={feature.title} className="bg-[#0D1117] p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-[#60A5FA] mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00E5FF] mb-6">
              ¿Tienes una idea para una app móvil?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Convirtámosla en realidad. Desarrollamos la aplicación móvil que tus usuarios van a amar
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
