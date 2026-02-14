import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4" style={{ background: "#0a0114" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm text-gray-400">
        <div>
          <p className="font-semibold text-white mb-2">AI Security Benchmark</p>
          <p>The definitive report on enterprise AI security posture. Research by Aona AI.</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Pages</p>
          <div className="space-y-1">
            <Link href="/findings" className="block hover:text-white transition-colors">Key Findings</Link>
            <Link href="/industries" className="block hover:text-white transition-colors">Industry Breakdown</Link>
            <Link href="/methodology" className="block hover:text-white transition-colors">Methodology</Link>
            <Link href="/download" className="block hover:text-white transition-colors">Download Report</Link>
            <Link href="/about" className="block hover:text-white transition-colors">About</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Aona AI</p>
          <p>Helping enterprises secure their AI ecosystem.</p>
          <a href="https://aona.ai" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-white mt-2 inline-block transition-colors">
            Visit aona.ai →
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        © 2026 Aona AI. All rights reserved. Data is illustrative and based on industry research trends.
      </div>
    </footer>
  );
}
