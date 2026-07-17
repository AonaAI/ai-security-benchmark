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
            The 2026 benchmark of enterprise AI security practices, shadow AI
            prevalence, and governance readiness, compiled from published
            industry research. Understand the risks. Take control.
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
            <StatCard value="48%" label="of employees have entered non-public company information into AI tools (Cisco, 2024)" delay={0.1} />
            <StatCard value="63%" label="of organizations lack AI governance policies to prevent shadow AI proliferation (IBM, 2025)" delay={0.2} />
            <StatCard value="83%" label="year-over-year surge in enterprise AI activity (Zscaler 2026)" delay={0.3} />
            <StatCard value="16 min" label="average time to compromise an enterprise AI system (Zscaler ThreatLabz 2026)" delay={0.4} />
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
              Enterprise AI adoption has reached an inflection point. Published research paints a
              stark picture: enterprise AI activity surged 83% year over year (Zscaler ThreatLabz,
              2026), while security and governance frameworks have failed to keep pace.
            </p>
            <p className="text-gray-300 mb-4">
              Shadow AI (the use of unsanctioned AI tools by employees) has emerged as the single
              largest unmanaged risk in enterprise security. With 78% of AI users bringing their
              own AI tools to work (Microsoft &amp; LinkedIn Work Trend Index, 2024), sensitive
              data is being shared with third-party models at an unprecedented scale.
            </p>
            <p className="text-gray-300">
              This benchmark curates that data for CISOs, CIOs, and security leaders. Figures with
              a named source come from published research; the remaining figures are illustrative
              estimates, clearly marked as such.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #2d1054)" }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">AI Governance Maturity (IBM, 2025)</h3>
            <div className="flex justify-around flex-wrap gap-6">
              <DonutChart value={10} label="Enforced policy" color="#22c55e" />
              <DonutChart value={27} label="Policy exists (unenforced)" color="#eab308" />
              <DonutChart value={63} label="No AI governance" color="#ef4444" />
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
              Shadow AI in Published Research
            </h3>
            <HorizontalBar
              data={[
                { label: "AI users who bring their own AI tools to work (Microsoft & LinkedIn, 2024)", value: 78 },
                { label: "Organizations lacking an AI governance policy (IBM, 2025)", value: 63 },
                { label: "Gen AI adopters using unapproved tools at work (Salesforce, 2024)", value: 55 },
                { label: "Employees who entered non-public company data into AI tools (Cisco, 2024)", value: 48 },
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
