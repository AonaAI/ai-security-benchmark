import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — AI Security Benchmark 2026",
  description:
    "About the 2026 AI Security Benchmark research and Aona AI, the research sponsor.",
};

export default function About() {
  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Subtle shield network background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/shield-network.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          opacity: 0.03,
        }}
      />
      <div className="max-w-4xl mx-auto relative">
        <SectionHeading
          tag="About"
          title="About This Research"
          subtitle="Understanding the mission behind the 2026 AI Security Benchmark."
        />

        <div className="space-y-6">
          {/* About the Research */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-5 tracking-tight">Why This Report Exists</h3>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                Enterprise AI adoption has reached an inflection point. Hundreds of millions of
                knowledge workers now use AI tools daily — yet the security implications of this
                transformation remain poorly understood and largely unaddressed.
              </p>
              <p>
                The 2026 State of Enterprise AI Security Benchmark was created to fill this gap.
                By surveying 500+ enterprises across six industries, we&apos;ve built the most
                comprehensive picture of how organizations are (and aren&apos;t) managing AI security
                risks.
              </p>
              <p>
                Our goal is simple: provide the data that security leaders, board members, and
                policymakers need to make informed decisions about AI governance. The stakes are too
                high for guesswork.
              </p>
            </div>
          </div>

          {/* Key Objectives */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-7 tracking-tight">Research Objectives</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Quantify Shadow AI",
                  desc: "Measure the true scope of unsanctioned AI tool usage across industries.",
                },
                {
                  title: "Assess Governance Maturity",
                  desc: "Benchmark where enterprises stand on AI policy, tooling, and training.",
                },
                {
                  title: "Identify Data Risks",
                  desc: "Document what sensitive data is being shared with AI tools and how.",
                },
                {
                  title: "Guide Security Investment",
                  desc: "Help CISOs prioritize AI security spending with data-backed insights.",
                },
              ].map((obj) => (
                <div key={obj.title} className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-accent/20 transition-colors">
                  <h4 className="text-white font-semibold mb-2">{obj.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About Aona AI */}
          <div
            className="glass-card rounded-2xl p-8 md:p-10"
            style={{ background: "linear-gradient(135deg, rgba(22,27,34,0.8), rgba(26,35,50,0.7))" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white shadow-glow"
                style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
              >
                A
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">Research by Aona AI</h3>
            </div>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                Aona AI is building the enterprise platform for AI security and governance.
                We help organizations discover every AI tool in use, monitor data flowing to AI
                services, and enforce AI acceptable use policies — all without blocking productivity.
              </p>
              <p>
                We commissioned this research because we believe transparency drives better security
                outcomes. When enterprises understand the true scope of AI risk, they make better
                decisions — whether they use Aona or not.
              </p>
              <p>
                This report is freely available to the security community. If the findings resonate
                and you want help addressing them, we&apos;re here.
              </p>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <a
                href="https://aona.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.02] hover:shadow-glow active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
              >
                Visit aona.ai →
              </a>
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-gray-300 font-semibold text-sm border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all"
              >
                Download the Report
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center text-sm text-gray-600 mt-10">
            <p>
              For press inquiries, data licensing, or to discuss the findings, contact{" "}
              <a href="mailto:research@aona.ai" className="text-brand-accent hover:text-white transition-colors">
                research@aona.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
