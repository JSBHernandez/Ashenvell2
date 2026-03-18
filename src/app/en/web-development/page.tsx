import type { Metadata } from "next";
import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/seo";

export const metadata: Metadata = createLocalizedMetadata({
  title: "Advanced Web Development | Ashenvell",
  description:
    "Modern, fast and scalable web applications with technologies like Next.js, React, Node.js, HTML, CSS, JavaScript and WordPress.",
  keywords:
    "web development, Next.js, React, Node.js, WordPress, HTML, CSS, JavaScript, web applications",
  locale: "en",
  pathEs: "/desarrollo-web",
  pathEn: "/en/web-development",
});

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#00E5FF] mb-6">
                Advanced Web Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                Modern, fast and scalable web applications with the latest technologies and frameworks
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
              Why choose our web development?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Superior Performance</h3>
                <p className="text-gray-400">
                  Websites optimized to load in milliseconds, improving user experience and SEO.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Responsive Design</h3>
                <p className="text-gray-400">
                  Interfaces that adapt perfectly to any device: mobile, tablet or desktop.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Advanced Security</h3>
                <p className="text-gray-400">
                  Implementation of best security practices to protect your site and your users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Technologies We Master
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Modern Frameworks</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Next.js</strong> - React framework for production with SSR and SSG</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>React</strong> - JavaScript library for user interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Node.js</strong> - Runtime environment for server-side JavaScript</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Core Technologies</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>HTML5</strong> - Semantic and accessible structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>CSS3 / Tailwind</strong> - Modern and responsive styles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>JavaScript / TypeScript</strong> - Robust logic and safe typing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>WordPress</strong> - CMS for content management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Work Process */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Our Development Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Analysis", desc: "We understand your needs and goals" },
                { num: "02", title: "Design", desc: "We create interactive prototypes and mockups" },
                { num: "03", title: "Development", desc: "We code with best practices" },
                { num: "04", title: "Delivery", desc: "We launch and offer continuous support" },
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00E5FF] mb-6">
              Ready to take your web project to the next level?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us today and discover how we can help you create your dream web application
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
