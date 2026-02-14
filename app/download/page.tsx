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
    // In production, this would POST to an API
    setSubmitted(true);
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          tag="Download"
          title="Get the Full Report"
          subtitle="Access the complete 2026 State of Enterprise AI Security Benchmark with detailed analysis, charts, and actionable recommendations."
        />

        {submitted ? (
          <div
            className="rounded-2xl p-12 border border-white/10 text-center animate-fade-in-up"
            style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
            >
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Report is on its way!</h3>
            <p className="text-gray-300 mb-8">
              Check your inbox for the download link. The full PDF includes all 10 findings,
              industry breakdowns, methodology details, and our recommendations framework.
            </p>
            <div
              className="rounded-xl p-6 border border-white/10 text-left"
              style={{ background: "rgba(100,18,166,0.15)" }}
            >
              <h4 className="text-white font-semibold mb-2">Want to address these findings?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Aona AI helps enterprises discover, monitor, and govern AI tool usage across
                their organization. Get visibility into shadow AI and enforce AI security policies.
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
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 border border-white/10 space-y-5"
            style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
          >
            <div>
              <label className="block text-sm font-medium text-white mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent transition-colors"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1.5">Work Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent transition-colors"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1.5">Company</label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent transition-colors"
                placeholder="Acme Corp"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold transition-transform hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #6412A6, #8B3FD4)" }}
            >
              Download the Full Report
            </button>
            <p className="text-xs text-gray-500 text-center">
              By downloading, you agree to receive occasional research updates from Aona AI.
              Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
