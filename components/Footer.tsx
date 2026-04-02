"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Top gradient border */}
      <div className="section-divider" />
      <div className="py-16 px-4" style={{ background: "linear-gradient(180deg, #0a0d12, #080b10)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm text-gray-400">
          <div className="md:col-span-1">
            <p className="font-bold text-white mb-3 text-base tracking-tight">AI Security Benchmark</p>
            <p className="leading-relaxed text-gray-500">
              The definitive report on enterprise AI security posture. Research by Aona AI.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Report</p>
            <div className="space-y-2.5">
              <Link href="/findings" className="block text-gray-500 hover:text-white transition-colors">Key Findings</Link>
              <Link href="/industries" className="block text-gray-500 hover:text-white transition-colors">Industry Breakdown</Link>
              <Link href="/methodology" className="block text-gray-500 hover:text-white transition-colors">Methodology</Link>
              <Link href="/download" className="block text-gray-500 hover:text-white transition-colors">Download Report</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Research</p>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-gray-500 hover:text-white transition-colors">About This Research</Link>
              <a href="https://aona.ai" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-white transition-colors">Aona AI Platform</a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Stay Updated</p>
            <p className="leading-relaxed text-gray-500 mb-4">
              Get notified when we release new research and benchmark updates.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-white text-xs font-semibold transition-all hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
            >
              Download Report →
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <span>© 2026 Aona AI. All rights reserved.</span>
          <span>Data is illustrative and based on industry research trends.</span>
        </div>
      </div>
    </footer>
  );
}
