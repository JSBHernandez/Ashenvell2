import type { Metadata } from "next";
import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/seo";

export const metadata: Metadata = createLocalizedMetadata({
  title: "Mobile Applications | Ashenvell",
  description:
    "Smooth and high-performance mobile experiences for Android and WebView. Development of native and hybrid apps.",
  keywords:
    "mobile applications, mobile development, Android, WebView, native apps, hybrid apps",
  locale: "en",
  pathEs: "/aplicaciones-moviles",
  pathEn: "/en/mobile-apps",
});

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#00E5FF] mb-6">
                High-Performance Mobile Applications
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                Smooth and high-performance mobile experiences for Android and WebView
              </p>
              <Link
                href="/en#contact"
                className="inline-block bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#60A5FA] transition-colors shadow-lg"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-8 text-center">
              Advantages of our mobile applications
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Native and Efficient</h3>
                <p className="text-gray-400">
                  We develop apps that maximize device capabilities for optimal performance.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Cross-Platform</h3>
                <p className="text-gray-400">
                  Hybrid solutions that work on multiple platforms reducing costs and development time.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Full Integration</h3>
                <p className="text-gray-400">
                  Native APIs, push notifications, geolocation, camera and more integrated features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Applications */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Types of Applications We Develop
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Native Applications</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Android</strong> - Apps optimized for the Android ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Kotlin/Java</strong> - Native languages for maximum performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Material Design</strong> - Interfaces following Google´s guidelines</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Hybrid Applications</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>WebView</strong> - Apps based on web technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>React Native</strong> - Framework for cross-platform development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Progressive Web Apps</strong> - The best of web and mobile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🔔", title: "Push Notifications", desc: "Keep your users informed" },
                { icon: "📍", title: "Geolocation", desc: "Location-based services" },
                { icon: "💳", title: "In-App Payments", desc: "Integration with payment systems" },
                { icon: "☁️", title: "Cloud Sync", desc: "Data in the cloud always available" },
                { icon: "🔐", title: "Authentication", desc: "Secure and biometric login" },
                { icon: "📊", title: "Analytics", desc: "User metrics and behavior" },
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

        {/* Final Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00E5FF] mb-6">
              Have an idea for a mobile app?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let´s make it reality. We develop the mobile application your users will love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en#contact"
                className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#60A5FA] transition-colors shadow-lg"
              >
                Start Project
              </Link>
              <Link
                href="/en#portfolio"
                className="bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-lg font-semibold hover:bg-[#3B82F6] hover:text-white transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
