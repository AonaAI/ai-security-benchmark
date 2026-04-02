"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function Download() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          tag="Download"
          title="Get the Full Report"
          subtitle="Access the complete 2026 State of Enterprise AI Security Benchmark with detailed analysis, charts, and actionable recommendations."
        />

        {submitted ? (
          <div className="glass-card rounded-2xl p-12 text-center animate-fade-in-up">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-7"
              style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
            >
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Your report is ready!</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Click below to download the full 2026 State of Enterprise AI Security Benchmark (PDF).
            </p>
            <a
              href="/ai-security-benchmark-2026.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold text-base transition-all hover:scale-[1.03] hover:shadow-glow-lg active:scale-[0.98] mb-8"
              style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Report
            </a>
            <div
              className="rounded-xl p-6 border border-brand-accent/20 text-left"
              style={{ background: "rgba(34,211,238,0.05)" }}
            >
              <h4 className="text-white font-semibold mb-2">Want to address these findings?</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Aona AI helps enterprises discover, monitor, and govern AI tool usage across
                their organization. Get visibility into shadow AI and enforce AI security policies.
              </p>
              <a
                href="https://aona.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:scale-[1.02] hover:shadow-glow active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
              >
                Talk to Aona AI →
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-white mb-2">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent/50 focus:bg-white/[0.06] transition-all"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Work Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent/50 focus:bg-white/[0.06] transition-all"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Company</label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent/50 focus:bg-white/[0.06] transition-all"
                placeholder="Acme Corp"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.01] hover:shadow-glow active:scale-[0.99]"
              style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
            >
              Download the Full Report
            </button>
            <p className="text-xs text-gray-600 text-center">
              By downloading, you agree to receive occasional research updates from Aona AI.
              Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
