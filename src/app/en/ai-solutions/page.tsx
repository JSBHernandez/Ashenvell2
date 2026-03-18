import type { Metadata } from "next";
import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/seo";

export const metadata: Metadata = createLocalizedMetadata({
  title: "AI Solutions | Ashenvell",
  description:
    "Integration of artificial intelligence to optimize processes and create innovative products.",
  keywords:
    "artificial intelligence, AI, machine learning, automation, chatbots, data analysis",
  locale: "en",
  pathEs: "/soluciones-ia",
  pathEn: "/en/ai-solutions",
});

export default function AISolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#00E5FF] mb-6">
                Artificial Intelligence Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                Integration of artificial intelligence to optimize processes and create innovative products
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
              The power of AI in your business
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Intelligent Automation</h3>
                <p className="text-gray-400">
                  Automate repetitive tasks and free up time for what really matters.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Predictive Analysis</h3>
                <p className="text-gray-400">
                  Make decisions based on data and accurate predictions of future trends.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Personalized Experience</h3>
                <p className="text-gray-400">
                  Offer unique experiences to each user through intelligent recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Our AI Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Chatbots & Virtual Assistants</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>24/7 automated customer service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Natural language processing (NLP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Integration with messaging platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Contextual responses and continuous learning</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Data Analysis & Insights</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Predictive analysis and forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Pattern detection and trend identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Data visualization and intelligent reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Machine learning models for decision making</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Process Automation</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Robotic Process Automation (RPA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Document analysis and classification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Intelligent task scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Integration with existing systems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Recommendation Systems</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Personalized product recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Customized content for each user</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Real-time preference analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span>Improvement in conversion and retention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              AI Technologies We Work With
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🧠", title: "OpenAI GPT", desc: "Advanced language models" },
                { icon: "🔮", title: "TensorFlow", desc: "Machine learning framework" },
                { icon: "🐍", title: "Python AI", desc: "Scikit-learn, Pandas" },
                { icon: "☁️", title: "Cloud AI", desc: "AWS, Google Cloud AI" },
                { icon: "💡", title: "Custom Models", desc: "Tailored solutions" },
                { icon: "🔗", title: "API Integration", desc: "AI service integration" },
              ].map((tech) => (
                <div key={tech.title} className="bg-[#0D1117] p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-[#60A5FA] mb-2">{tech.title}</h3>
                  <p className="text-gray-400 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              AI Implementation Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Analysis", desc: "Identify opportunities for AI" },
                { num: "02", title: "Strategy", desc: "Design the AI solution" },
                { num: "03", title: "Development", desc: "Train and optimize models" },
                { num: "04", title: "Integration", desc: "Deploy and continuous monitoring" },
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
              Ready to leverage AI in your business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Discover how artificial intelligence can transform your processes and open new possibilities
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
