import Link from "next/link";
import StatCard from "@/components/StatCard";
import HorizontalBar from "@/components/HorizontalBar";
import DonutChart from "@/components/DonutChart";
import {
  UserIcon,
  PolicyIcon,
  IncidentIcon,
  VisibilityIcon,
  DiscoverIcon,
  GuidelinesIcon,
  TrainingIcon,
  MonitorIcon,
  ComplianceIcon,
  AlignIcon,
  ChevronAccent,
} from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-36 md:py-52 lg:py-64 px-4 overflow-hidden">
        {/* Full-bleed hero background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Cinematic dark gradient overlay — readable text + bottom fade to page bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,17,23,0.45) 0%, rgba(13,17,23,0.6) 55%, #0d1117 100%)",
          }}
        />
        {/* Cyan radial vignette at top-center for brand feel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -10%, rgba(34,211,238,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-5 py-2 rounded-full mb-8 animate-fade-in-up"
            style={{ background: "rgba(34,211,238,0.08)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.25)" }}
          >
            2026 Benchmark Report
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-[1.02] tracking-tight mb-7 animate-fade-in-up stagger-1">
            State of Enterprise
            <br />
            <span className="gradient-text">AI Security</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2">
            The definitive benchmark report analyzing AI security practices,
            shadow AI prevalence, and governance readiness across 500+
            enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <Link
              href="/download"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold text-base transition-all hover:scale-[1.03] hover:shadow-glow-lg active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
              }}
            >
              Download the Full Report
            </Link>
            <Link
              href="/findings"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-gray-200 font-semibold text-base border border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all backdrop-blur-sm"
            >
              Explore the Data →
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <StatCard value="73%" label="of employees use AI tools without IT approval" icon={<UserIcon className="w-7 h-7" />} delay={0.1} />
            <StatCard value="45%" label="of organizations have no AI acceptable use policy" icon={<PolicyIcon className="w-7 h-7" />} delay={0.2} />
            <StatCard value="3.2×" label="increase in AI-related data incidents since 2024" icon={<IncidentIcon className="w-7 h-7" />} delay={0.3} />
            <StatCard value="12%" label="of enterprises have full visibility into AI tool usage" icon={<VisibilityIcon className="w-7 h-7" />} delay={0.4} />
          </div>
        </div>
      </section>

      {/* Gradient depth transition */}
      <div
        className="h-px max-w-6xl mx-auto"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.25), transparent)" }}
      />

      {/* Executive Summary */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(34,211,238,0.08)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}
            >
              Executive Summary
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-7 tracking-tight leading-[1.1]">
              AI adoption is outpacing security at every level
            </h2>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                Enterprise AI adoption has reached an inflection point. Our research across 500+
                organizations reveals a stark reality: while 89% of enterprises now use AI tools in
                daily operations, security and governance frameworks have failed to keep pace.
              </p>
              <p>
                Shadow AI — the use of unsanctioned AI tools by employees — has emerged as the
                single largest unmanaged risk in enterprise security. With 73% of employees using
                AI tools their IT teams don&apos;t know about, sensitive data is being shared with
                third-party models at an unprecedented scale.
              </p>
              <p>
                This report provides the data CISOs, CIOs, and security leaders need to understand
                the scope of the problem and build a path toward responsible AI governance.
              </p>
            </div>
          </div>
          {/* Shield + Governance Maturity Card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(34,211,238,0.12)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(34,211,238,0.04)",
            }}
          >
            {/* Shield network illustration */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="/images/shield-network.jpg"
                alt="AI Security Shield Network"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, rgba(13,17,23,0.15) 0%, rgba(22,27,34,0.97) 100%)",
                }}
              />
              {/* Cyan glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(34,211,238,0.08) 0%, transparent 70%)",
                }}
              />
            </div>
            <div
              className="p-8"
              style={{ background: "linear-gradient(135deg, rgba(22,27,34,0.95), rgba(26,35,50,0.9))" }}
            >
              <h3 className="text-lg font-semibold text-white mb-7">AI Governance Maturity</h3>
              <div className="flex justify-around flex-wrap gap-6">
                <DonutChart value={12} label="Full visibility" color="#22c55e" />
                <DonutChart value={31} label="Partial controls" color="#eab308" />
                <DonutChart value={57} label="No governance" color="#ef4444" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <blockquote
            className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(6,182,212,0.02))",
              border: "1px solid rgba(34,211,238,0.12)",
            }}
          >
            {/* Decorative large quote mark */}
            <div
              className="absolute top-6 left-10 text-8xl font-serif leading-none pointer-events-none select-none"
              style={{ color: "rgba(34,211,238,0.08)" }}
            >
              &ldquo;
            </div>
            {/* Left accent line */}
            <div
              className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full"
              style={{ background: "linear-gradient(180deg, #22d3ee, #06b6d4)" }}
            />
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium italic leading-relaxed mb-6">
              &ldquo;The gap between AI adoption and AI governance isn&apos;t closing — it&apos;s accelerating.
              Every week we discover new AI tools our employees have been using for months.&rdquo;
            </p>
            <cite className="text-gray-500 text-sm not-italic font-medium">
              — CISO, Fortune 500 Financial Services Firm (Survey Respondent)
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Gradient depth transition */}
      <div className="h-20" style={{ background: "linear-gradient(180deg, transparent, rgba(13,17,23,0.3), transparent)" }} />

      {/* Year-over-Year Trend */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(34,211,238,0.08)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}
            >
              Trend
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              The Problem Is Getting Worse
            </h2>
            <div className="w-16 h-[2px] mx-auto mb-5" style={{ background: "linear-gradient(90deg, #22d3ee, #06b6d4)" }} />
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
              Year-over-year comparison shows shadow AI prevalence growing faster than governance adoption.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { year: "2024", shadowAI: "52%", governance: "8%", incidents: "Baseline" },
              { year: "2025", shadowAI: "64%", governance: "10%", incidents: "2.1×" },
              { year: "2026", shadowAI: "73%", governance: "12%", incidents: "3.2×" },
            ].map((d, i) => (
              <div
                key={d.year}
                className={`glass-card rounded-2xl p-8 text-center animate-fade-in-up ${i === 2 ? "!border-cyan-500/20" : ""}`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  ...(i === 2 ? { background: "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(6,182,212,0.03))" } : {}),
                }}
              >
                <div className="text-3xl font-extrabold text-white mb-5 tracking-tight">{d.year}</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold tabular-nums" style={{ color: "#ef4444" }}>{d.shadowAI}</div>
                    <div className="text-xs text-gray-500 mt-1">Shadow AI Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold tabular-nums" style={{ color: "#22c55e" }}>{d.governance}</div>
                    <div className="text-xs text-gray-500 mt-1">Full Governance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold tabular-nums" style={{ color: "#eab308" }}>{d.incidents}</div>
                    <div className="text-xs text-gray-500 mt-1">Data Incidents</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview: Top Findings — with section-data-bg.jpg */}
      <section className="relative py-28 px-4 overflow-hidden">
        {/* Data visualization background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/section-data-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Heavy dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.88) 50%, rgba(13,17,23,0.95) 100%)" }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(34,211,238,0.08)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}
            >
              Preview
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              Top Findings at a Glance
            </h2>
            <div className="w-16 h-[2px] mx-auto" style={{ background: "linear-gradient(90deg, #22d3ee, #06b6d4)" }} />
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-lg font-semibold text-white mb-7">
              Shadow AI Prevalence by Industry
            </h3>
            <HorizontalBar
              data={[
                { label: "Technology", value: 82 },
                { label: "Financial Services", value: 76 },
                { label: "Healthcare", value: 71 },
                { label: "Education", value: 68 },
                { label: "Manufacturing", value: 59 },
                { label: "Government", value: 47 },
              ]}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/findings"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold text-base transition-all hover:scale-[1.03] hover:shadow-glow-lg active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
              }}
            >
              View All 10 Findings →
            </Link>
          </div>
        </div>
      </section>

      {/* Gradient depth transition */}
      <div
        className="h-px max-w-6xl mx-auto mt-0"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.2), transparent)" }}
      />

      {/* Key Recommendations */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(34,211,238,0.08)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}
            >
              Recommendations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              What Security Leaders Should Do Now
            </h2>
            <div className="w-16 h-[2px] mx-auto mb-5" style={{ background: "linear-gradient(90deg, #22d3ee, #06b6d4)" }} />
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
              Based on our findings, here are the top priorities for CISOs and security teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {([
              {
                num: "01",
                title: "Discover Your Shadow AI",
                desc: "You can't secure what you can't see. Deploy AI discovery tools to map every AI service employees are using — sanctioned or not.",
                icon: <DiscoverIcon className="w-6 h-6" />,
              },
              {
                num: "02",
                title: "Implement AI Acceptable Use Policies",
                desc: "45% of organizations have no AI policy. Start with clear guidelines on what data can and cannot be shared with AI tools.",
                icon: <GuidelinesIcon className="w-6 h-6" />,
              },
              {
                num: "03",
                title: "Train Your Workforce",
                desc: "Only 21% provide formal AI security training. Employees need to understand the risks of sharing sensitive data with AI.",
                icon: <TrainingIcon className="w-6 h-6" />,
              },
              {
                num: "04",
                title: "Monitor Data Flows to AI",
                desc: "Traditional DLP wasn't built for AI. Deploy purpose-built monitoring to track what data leaves your org via AI interfaces.",
                icon: <MonitorIcon className="w-6 h-6" />,
              },
              {
                num: "05",
                title: "Prepare for AI Regulation",
                desc: "The EU AI Act is here. NIST AI RMF is maturing. Start compliance readiness now — only 8% of enterprises are prepared.",
                icon: <ComplianceIcon className="w-6 h-6" />,
              },
              {
                num: "06",
                title: "Align AI Security with Business",
                desc: "Blocking AI isn't the answer. Enable productive AI use while maintaining security guardrails and data protection.",
                icon: <AlignIcon className="w-6 h-6" />,
              },
            ] as const).map((rec, i) => (
              <div
                key={rec.num}
                className="rec-card glass-card rounded-2xl p-8 animate-fade-in-up group"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white shrink-0 transition-shadow duration-300 group-hover:shadow-glow"
                    style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
                  >
                    <span className="rec-icon transition-transform duration-300 group-hover:scale-110">
                      {rec.icon}
                    </span>
                  </span>
                  <span className="text-[11px] font-bold text-cyan-400/60 tracking-wider">{rec.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{rec.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{rec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="relative py-28 px-4">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent, rgba(26,35,50,0.3), transparent)" }}
        />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(34,211,238,0.08)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}
            >
              Report Contents
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              What&apos;s Inside the Full Report
            </h2>
            <div className="w-16 h-[2px] mx-auto" style={{ background: "linear-gradient(90deg, #22d3ee, #06b6d4)" }} />
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="space-y-0">
              {[
                { chapter: "Chapter 1", title: "Executive Summary & Key Statistics", pages: "8 pages" },
                { chapter: "Chapter 2", title: "10 Critical Findings with Data Visualizations", pages: "24 pages" },
                { chapter: "Chapter 3", title: "Industry Breakdown: 6 Sectors Analyzed", pages: "18 pages" },
                { chapter: "Chapter 4", title: "AI Governance Maturity Framework", pages: "12 pages" },
                { chapter: "Chapter 5", title: "Actionable Recommendations for CISOs", pages: "10 pages" },
                { chapter: "Chapter 6", title: "Methodology & Data Sources", pages: "6 pages" },
                { chapter: "Appendix", title: "Full Survey Data & Methodology Details", pages: "14 pages" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0 group hover:bg-white/[0.02] -mx-3 px-3 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <ChevronAccent className="w-4 h-4 text-cyan-500/40 shrink-0 transition-all duration-200 group-hover:text-cyan-400 group-hover:translate-x-0.5" />
                    <span className="text-[11px] font-semibold text-gray-600 w-20 shrink-0">{item.chapter}</span>
                    <span className="text-white font-medium group-hover:text-brand-accent transition-colors">{item.title}</span>
                  </div>
                  <span className="text-[11px] text-gray-600 shrink-0 ml-4">{item.pages}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid rgba(34,211,238,0.06)" }}>
              <span className="text-sm text-gray-500">92 pages of in-depth analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — with cta-bg.jpg */}
      <section className="py-28 px-4">
        <div
          className="max-w-4xl mx-auto rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
          style={{
            border: "1px solid rgba(34,211,238,0.15)",
          }}
        >
          {/* CTA background image */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              backgroundImage: "url(/images/cta-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Strong dark overlay */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.82) 100%)",
            }}
          />
          {/* Subtle cyan radial glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)" }}
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Ready to secure your AI ecosystem?
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed text-lg">
              Download the full report for detailed analysis, recommendations, and actionable frameworks for AI governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold transition-all hover:scale-[1.03] hover:shadow-glow-lg active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
                }}
              >
                Download Report
              </Link>
              <a
                href="https://aona.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-gray-200 font-semibold border border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all"
              >
                Talk to Aona AI
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
