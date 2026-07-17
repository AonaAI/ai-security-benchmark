import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Methodology — AI Security Benchmark 2026",
  description:
    "How the 2026 AI Security Benchmark is compiled: published sources, what is measured versus illustrative, and the upcoming telemetry-based Shadow AI Index.",
};

const SOURCES = [
  {
    name: "IBM Cost of a Data Breach Report 2025",
    url: "https://www.ibm.com/reports/data-breach",
    used: "AI governance policy gaps, AI access control failures, added breach costs from shadow AI.",
  },
  {
    name: "Zscaler ThreatLabz AI Security Report 2026",
    url: "https://www.zscaler.com/threatlabz",
    used: "Enterprise AI activity growth and AI/ML data transfer volumes.",
  },
  {
    name: "Microsoft & LinkedIn Work Trend Index 2024",
    url: "https://www.microsoft.com/en-us/worklab/work-trend-index",
    used: "Bring-your-own-AI (BYOAI) prevalence among AI users at work.",
  },
  {
    name: "Cisco Data Privacy Benchmark Study 2024",
    url: "https://www.cisco.com/c/en/us/about/trust-center/data-privacy-benchmark-study.html",
    used: "Employees entering non-public company information into generative AI tools.",
  },
  {
    name: "Salesforce generative AI research 2024",
    url: "https://www.salesforce.com/news/",
    used: "Share of generative AI adopters using unapproved tools at work.",
  },
];

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
          title="How This Benchmark Is Compiled"
          subtitle="Transparency about what is measured, what is estimated, and where every number comes from."
        />

        <div className="space-y-8">
          {/* What this is */}
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
          >
            <h3 className="text-xl font-bold text-white mb-4">What This Benchmark Is</h3>
            <p className="text-gray-300 mb-4">
              The 2026 State of Enterprise AI Security Benchmark is a curated synthesis of
              published industry research on shadow AI, AI governance, and AI data security.
              It is not a primary survey. Aona AI compiles and presents the strongest available
              public data so security leaders can see the state of the field in one place.
            </p>
            <p className="text-gray-300">
              Every figure that names a source comes directly from that published report. Figures
              without a named source are illustrative estimates modeled on the trends those
              reports describe; they exist to show the shape of the problem and should not be
              cited as research findings.
            </p>
          </div>

          {/* Sources */}
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Primary Sources</h3>
            <div className="space-y-4">
              {SOURCES.map((s) => (
                <div key={s.name} className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-brand-light transition-colors"
                  >
                    {s.name} →
                  </a>
                  <p className="text-sm text-gray-400 mt-1">{s.used}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's next */}
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "linear-gradient(135deg, #1a0533, #2d1054)" }}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              What Comes Next: The 2026 Shadow AI Index
            </h3>
            <p className="text-gray-300 mb-4">
              The next edition of this benchmark replaces estimates with measured data:
              anonymized, aggregated telemetry from the Aona platform, which continuously
              profiles 5,600+ AI tools, together with real customer outcomes.
            </p>
            <p className="text-gray-300">
              The result will be a recurring, citable index with a transparent method, published
              on this site. Until then, treat unattributed figures on this site as directional
              illustrations, not measurements.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center text-sm text-gray-500 mt-8 px-4">
            <p>
              Questions about sources or methodology? Contact{" "}
              <a
                href="mailto:research@aona.ai"
                className="text-brand-light hover:text-white transition-colors"
              >
                research@aona.ai
              </a>
              . Research curation by{" "}
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
