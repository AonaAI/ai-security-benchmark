"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/findings", label: "Key Findings" },
  { href: "/industries", label: "Industries" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      {/* Top gradient line */}
      <div
        className="h-[1px] w-full"
        style={{ background: "linear-gradient(90deg, transparent, #22d3ee, #06b6d4, transparent)" }}
      />
      <div
        className="border-b border-white/[0.06] backdrop-blur-xl"
        style={{ background: "rgba(13,17,23,0.8)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-white group">
            <img src="/logo.png?v=2" alt="AI Security Benchmark" className="h-9 w-auto transition-transform group-hover:scale-105" />
            <span className="hidden sm:inline text-[15px] tracking-tight">AI Security Benchmark</span>
          </Link>
          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-sm text-gray-400 hover:text-white transition-colors px-3 py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="ml-3 inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
            >
              Download Report
            </Link>
          </nav>
          {/* Mobile */}
          <button
            className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="md:hidden px-4 pb-4 space-y-1 animate-slide-down border-t border-white/[0.06]">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2.5 transition-all"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="block text-sm text-white font-semibold text-center px-3 py-2.5 rounded-lg mt-2 transition-all"
              style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
              onClick={() => setOpen(false)}
            >
              Download Report
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
