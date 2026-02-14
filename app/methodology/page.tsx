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
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          tag="Methodology"
          title="How We Built This Benchmark"
          subtitle="Transparency in our research approach, data collection, and analysis."
        />

        <div className="space-y-8">
          {/* Overview */}
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Research Overview</h3>
            <p className="text-gray-300 mb-4">
              The 2026 State of Enterprise AI Security Benchmark is based on a comprehensive survey
              of 512 enterprises across six major industries. The research was conducted between
              September 2025 and January 2026, combining quantitative survey data with qualitative
              interviews of security leaders.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">512</div>
                <div className="text-sm text-gray-400">Enterprises surveyed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">6</div>
                <div className="text-sm text-gray-400">Industry sectors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">14</div>
                <div className="text-sm text-gray-400">Countries represented</div>
              </div>
            </div>
          </div>

          {/* Data Collection */}
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Data Collection</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Quantitative survey:</strong> 45-question online survey
                distributed to IT security leaders, CISOs, CIOs, and IT directors. Average completion
                time: 22 minutes.
              </p>
              <p>
                <strong className="text-white">Qualitative interviews:</strong> 48 in-depth interviews
                (30–60 minutes) with CISOs and security architects to provide context and validate
                quantitative findings.
              </p>
              <p>
                <strong className="text-white">Telemetry data:</strong> Anonymized, aggregated data
                from enterprise security tools (with consent) to validate self-reported AI usage
                against actual network-level AI tool traffic.
              </p>
            </div>
          </div>

          {/* Sample Demographics */}
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Sample Demographics</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">By Industry</h4>
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
                <h4 className="text-sm font-semibold text-white mb-4">By Company Size</h4>
                <div className="flex justify-around flex-wrap gap-4">
                  <DonutChart value={32} label="10K+ employees" color="#8B3FD4" size={90} />
                  <DonutChart value={41} label="1K–10K" color="#6412A6" size={90} />
                  <DonutChart value={27} label="500–1K" color="#3d1670" size={90} />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-4">Respondent Roles</h4>
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
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Confidence Levels & Limitations</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Confidence interval:</strong> ±3.8% at the 95% confidence
                level for the overall sample. Industry-specific breakdowns have wider margins (±5.2%–7.1%)
                due to smaller sub-samples.
              </p>
              <p>
                <strong className="text-white">Self-reporting bias:</strong> Shadow AI usage is likely
                underreported in survey responses. Telemetry data consistently showed 15–20% higher AI
                tool usage than respondents self-reported, suggesting our headline figures may be conservative.
              </p>
              <p>
                <strong className="text-white">Geographic scope:</strong> The survey primarily represents
                enterprises in North America (58%), Europe (28%), and Asia-Pacific (14%). Results may not
                fully generalize to other regions.
              </p>
              <p>
                <strong className="text-white">Temporal note:</strong> AI adoption is evolving rapidly.
                These findings represent a snapshot from Q4 2025 / Q1 2026. We recommend treating specific
                percentages as directional indicators rather than precise measurements.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-sm text-gray-500 mt-8 px-4">
            <p>
              Note: This report presents illustrative data based on publicly available industry research trends
              and is intended to demonstrate the scope and format of an enterprise AI security benchmark.
              Research by{" "}
              <a href="https://aona.ai" className="text-brand-light hover:text-white transition-colors">
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
