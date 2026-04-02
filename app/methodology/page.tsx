import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import DonutChart from "@/components/DonutChart";
import HorizontalBar from "@/components/HorizontalBar";

export const metadata: Metadata = {
  title: "Methodology — AI Security Benchmark 2026",
  description:
    "How the 2026 AI Security Benchmark data was gathered: survey methodology, sample demographics, and confidence levels.",
};

export default function Methodology() {
  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Subtle data background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/section-data-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          opacity: 0.04,
        }}
      />
      <div className="max-w-4xl mx-auto relative">
        <SectionHeading
          tag="Methodology"
          title="How We Built This Benchmark"
          subtitle="Transparency in our research approach, data collection, and analysis."
        />

        <div className="space-y-6">
          {/* Overview */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-5 tracking-tight">Research Overview</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The 2026 State of Enterprise AI Security Benchmark is based on a comprehensive survey
              of 512 enterprises across six major industries. The research was conducted between
              September 2025 and January 2026, combining quantitative survey data with qualitative
              interviews of security leaders.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { value: "512", label: "Enterprises surveyed" },
                { value: "6", label: "Industry sectors" },
                { value: "14", label: "Countries represented" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-3xl font-extrabold gradient-text tracking-tight">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Collection */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-5 tracking-tight">Data Collection</h3>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Quantitative survey:</strong> 45-question online survey
                distributed to IT security leaders, CISOs, CIOs, and IT directors. Average completion
                time: 22 minutes.
              </p>
              <p>
                <strong className="text-white font-semibold">Qualitative interviews:</strong> 48 in-depth interviews
                (30–60 minutes) with CISOs and security architects to provide context and validate
                quantitative findings.
              </p>
              <p>
                <strong className="text-white font-semibold">Telemetry data:</strong> Anonymized, aggregated data
                from enterprise security tools (with consent) to validate self-reported AI usage
                against actual network-level AI tool traffic.
              </p>
            </div>
          </div>

          {/* Sample Demographics */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Sample Demographics</h3>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-sm font-semibold text-white mb-5">By Industry</h4>
                <HorizontalBar
                  data={[
                    { label: "Technology", value: 24 },
                    { label: "Financial Services", value: 21 },
                    { label: "Healthcare", value: 18 },
                    { label: "Manufacturing", value: 16 },
                    { label: "Government", value: 12 },
                    { label: "Education", value: 9 },
                  ]}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-5">By Company Size</h4>
                <div className="flex justify-around flex-wrap gap-4">
                  <DonutChart value={32} label="10K+ employees" color="#06b6d4" size={90} />
                  <DonutChart value={41} label="1K–10K" color="#22d3ee" size={90} />
                  <DonutChart value={27} label="500–1K" color="#0e7490" size={90} />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-sm font-semibold text-white mb-5">Respondent Roles</h4>
              <HorizontalBar
                data={[
                  { label: "CISO / CSO", value: 31 },
                  { label: "VP / Director of IT Security", value: 27 },
                  { label: "CIO / CTO", value: 19 },
                  { label: "IT Director / Manager", value: 15 },
                  { label: "Security Architect", value: 8 },
                ]}
              />
            </div>
          </div>

          {/* Confidence & Limitations */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-5 tracking-tight">Confidence Levels & Limitations</h3>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Confidence interval:</strong> ±3.8% at the 95% confidence
                level for the overall sample. Industry-specific breakdowns have wider margins (±5.2%–7.1%)
                due to smaller sub-samples.
              </p>
              <p>
                <strong className="text-white font-semibold">Self-reporting bias:</strong> Shadow AI usage is likely
                underreported in survey responses. Telemetry data consistently showed 15–20% higher AI
                tool usage than respondents self-reported, suggesting our headline figures may be conservative.
              </p>
              <p>
                <strong className="text-white font-semibold">Geographic scope:</strong> The survey primarily represents
                enterprises in North America (58%), Europe (28%), and Asia-Pacific (14%). Results may not
                fully generalize to other regions.
              </p>
              <p>
                <strong className="text-white font-semibold">Temporal note:</strong> AI adoption is evolving rapidly.
                These findings represent a snapshot from Q4 2025 / Q1 2026. We recommend treating specific
                percentages as directional indicators rather than precise measurements.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-sm text-gray-600 mt-10 px-4">
            <p>
              Note: This report presents illustrative data based on publicly available industry research trends
              and is intended to demonstrate the scope and format of an enterprise AI security benchmark.
              Research by{" "}
              <a href="https://aona.ai" className="text-brand-accent hover:text-white transition-colors">
                Aona AI
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
