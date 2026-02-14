import Link from "next/link";
import StatCard from "@/components/StatCard";
import HorizontalBar from "@/components/HorizontalBar";
import DonutChart from "@/components/DonutChart";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 md:py-32 px-4 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #2d1054 0%, #11021d 70%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(100,18,166,0.3)", color: "#8B3FD4" }}
          >
            2026 Benchmark Report
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            State of Enterprise
            <br />
            <span style={{ color: "#8B3FD4" }}>AI Security</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            The definitive benchmark report analyzing AI security practices,
            shadow AI prevalence, and governance readiness across 500+
            enterprises. Understand the risks. Take control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-white font-semibold text-base transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6412A6, #8B3FD4)",
              }}
            >
              Download the Full Report
            </Link>
            <Link
              href="/findings"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-white font-semibold text-base border border-white/20 hover:bg-white/5 transition-colors"
            >
              Explore the Data →
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="73%" label="of employees use AI tools without IT approval" delay={0.1} />
            <StatCard value="45%" label="of organizations have no AI acceptable use policy" delay={0.2} />
            <StatCard value="3.2×" label="increase in AI-related data incidents since 2024" delay={0.3} />
            <StatCard value="12%" label="of enterprises have full visibility into AI tool usage" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(100,18,166,0.3)", color: "#8B3FD4" }}
            >
              Executive Summary
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI adoption is outpacing security at every level
            </h2>
            <p className="text-gray-300 mb-4">
              Enterprise AI adoption has reached an inflection point. Our research across 500+
              organizations reveals a stark reality: while 89% of enterprises now use AI tools in
              daily operations, security and governance frameworks have failed to keep pace.
            </p>
            <p className="text-gray-300 mb-4">
              Shadow AI — the use of unsanctioned AI tools by employees — has emerged as the
              single largest unmanaged risk in enterprise security. With 73% of employees using
              AI tools their IT teams don&apos;t know about, sensitive data is being shared with
              third-party models at an unprecedented scale.
            </p>
            <p className="text-gray-300">
              This report provides the data CISOs, CIOs, and security leaders need to understand
              the scope of the problem and build a path toward responsible AI governance.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #2d1054)" }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">AI Governance Maturity</h3>
            <div className="flex justify-around flex-wrap gap-6">
              <DonutChart value={12} label="Full visibility" color="#22c55e" />
              <DonutChart value={31} label="Partial controls" color="#eab308" />
              <DonutChart value={57} label="No governance" color="#ef4444" />
            </div>
          </div>
        </div>
      </section>

      {/* Preview: Top Findings */}
      <section className="py-20 px-4" style={{ background: "rgba(26,5,51,0.5)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(100,18,166,0.3)", color: "#8B3FD4" }}
            >
              Preview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Top Findings at a Glance
            </h2>
          </div>
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              Shadow AI Prevalence by Industry
            </h3>
            <HorizontalBar
              data={[
                { label: "Technology", value: 82 },
                { label: "Financial Services", value: 76 },
                { label: "Healthcare", value: 71 },
                { label: "Education", value: 68 },
                { label: "Manufacturing", value: 59 },
                { label: "Government", value: 47 },
              ]}
            />
          </div>
          <div className="text-center mt-10">
            <Link
              href="/findings"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-white font-semibold text-base transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6412A6, #8B3FD4)",
              }}
            >
              View All 10 Findings →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div
          className="max-w-4xl mx-auto rounded-2xl p-12 text-center border border-white/10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, #2d1054, #11021d)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to secure your AI ecosystem?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Download the full report for detailed analysis, recommendations, and actionable frameworks for AI governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6412A6, #8B3FD4)",
              }}
            >
              Download Report
            </Link>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-white font-semibold border border-white/20 hover:bg-white/5 transition-colors"
            >
              Talk to Aona AI
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
