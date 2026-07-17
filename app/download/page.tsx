import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Full Report — AI Security Benchmark 2026",
  description:
    "The PDF edition of the AI Security Benchmark ships with the telemetry-based 2026 Shadow AI Index. Explore all findings online now, no email required.",
};

export default function Download() {
  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Subtle CTA background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/cta-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          opacity: 0.04,
        }}
      />
      <div className="max-w-2xl mx-auto relative">
        <SectionHeading
          tag="Full Report"
          title="The PDF Edition Is in Production"
          subtitle="The downloadable report ships together with the 2026 Shadow AI Index, built on anonymized Aona platform telemetry instead of estimates."
        />

        <div
          className="rounded-2xl p-8 border border-white/10 space-y-6"
          style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
        >
          <p className="text-gray-300">
            Until it ships, every finding in this benchmark is freely available online with
            sources cited inline. No email required, no gate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/findings"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-transform hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6412A6, #8B3FD4)" }}
            >
              Explore the Findings →
            </Link>
            <a
              href="mailto:research@aona.ai?subject=Notify%20me%20about%20the%202026%20Shadow%20AI%20Index"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-white font-semibold text-sm border border-white/20 hover:bg-white/5 transition-colors"
            >
              Get notified when it ships
            </a>
          </div>

          <div
            className="rounded-xl p-6 border border-white/10"
            style={{ background: "rgba(100,18,166,0.15)" }}
          >
            <h4 className="text-white font-semibold mb-2">
              Want visibility into your own shadow AI?
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Aona AI helps enterprises discover, monitor, and govern AI tool usage across their
              organization, without blocking productivity.
            </p>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-transform hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6412A6, #8B3FD4)" }}
            >
              Talk to Aona AI →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
