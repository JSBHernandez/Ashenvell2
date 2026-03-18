import type { Metadata } from "next";
import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/seo";

export const metadata: Metadata = createLocalizedMetadata({
  title: "Futuristic UI/UX Design | Ashenvell",
  description:
    "Attractive interfaces with a focus on user experience, trends beyond the ordinary and 100% customized.",
  keywords:
    "UI design, UX design, interfaces, user experience, custom design, futuristic design",
  locale: "en",
  pathEs: "/diseno-ui-ux",
  pathEn: "/en/ui-ux-design",
});

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#00E5FF] mb-6">
                Futuristic UI/UX Design
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                Attractive interfaces with a focus on user experience, trends beyond the ordinary and 100% customized
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
              Why is UI/UX design crucial?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">First Impression</h3>
                <p className="text-gray-400">
                  An attractive design generates trust and professionalism from the first moment.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Optimized Conversion</h3>
                <p className="text-gray-400">
                  Intuitive interfaces that guide users toward your business goals.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Differentiation</h3>
                <p className="text-gray-400">
                  Stand out from the competition with a unique and memorable design that reflects your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Our Design Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">User Research</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Target audience and behavior analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Creation of personas and user journey maps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Testing and validation with real users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Iteration based on feedback and data</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Visual Design</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Current trends and futuristic design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Consistent and professional color palettes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Custom typography and iconography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Micro-interactions and fluid animations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tools */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Tools We Use
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎨", title: "Figma", desc: "Collaborative design" },
                { icon: "✏️", title: "Adobe XD", desc: "Interactive prototypes" },
                { icon: "🖼️", title: "Illustrator", desc: "Vector graphics" },
                { icon: "📐", title: "Sketch", desc: "Professional interfaces" },
              ].map((tool) => (
                <div key={tool.title} className="bg-[#0D1117] p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="text-lg font-semibold text-[#60A5FA] mb-2">{tool.title}</h3>
                  <p className="text-gray-400 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Our Design Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Research", desc: "Understand users and goals" },
                { num: "02", title: "Wireframes", desc: "Create initial structures" },
                { num: "03", title: "Prototypes", desc: "Interactive and testable designs" },
                { num: "04", title: "Delivery", desc: "Final assets and style guide" },
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

        {/* Final Call to Action */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00E5FF] mb-6">
              Ready to transform your digital experience?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let´s create a design that captivates your users and drives your business results
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
