import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import HorizontalBar from "@/components/HorizontalBar";
import VerticalBar from "@/components/VerticalBar";
import DonutChart from "@/components/DonutChart";

export const metadata: Metadata = {
  title: "Key Findings — AI Security Benchmark 2026",
  description:
    "10 critical findings on enterprise AI security: shadow AI, data leakage, governance gaps, and more.",
};

function FindingCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-8 border border-white/10 animate-fade-in-up"
      style={{
        background: "linear-gradient(135deg, #1a0533, #11021d)",
        animationDelay: `${number * 0.05}s`,
      }}
    >
      <div className="flex items-start gap-4 mb-6">
        <span
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg, #6412A6, #8B3FD4)" }}
        >
          {number}
        </span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function Findings() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          tag="Key Findings"
          title="10 Critical Insights from the 2026 Benchmark"
          subtitle="Each finding is backed by survey data from 500+ enterprises across six industries."
        />

        <div className="space-y-8">
          {/* Finding 1 */}
          <FindingCard number={1} title="Shadow AI Prevalence by Industry">
            <p className="text-gray-300 mb-6">
              Shadow AI — unsanctioned use of AI tools — is pervasive across every sector. Technology leads at 82%,
              but even government agencies report 47% unauthorized AI usage. The gap between IT awareness and
              actual employee behavior is the single largest blind spot in enterprise security today.
            </p>
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
          </FindingCard>

          {/* Finding 2 */}
          <FindingCard number={2} title="Most Common Unmanaged AI Tools">
            <p className="text-gray-300 mb-6">
              ChatGPT remains the most widely used unsanctioned AI tool at 84% of enterprises,
              followed by Copilot (67%), Gemini (52%), and Claude (41%). Image generators and
              specialized coding assistants round out the top tier.
            </p>
            <HorizontalBar
              data={[
                { label: "ChatGPT", value: 84 },
                { label: "Microsoft Copilot", value: 67 },
                { label: "Google Gemini", value: 52 },
                { label: "Claude", value: 41 },
                { label: "Midjourney / DALL-E", value: 38 },
                { label: "GitHub Copilot (personal)", value: 34 },
              ]}
            />
          </FindingCard>

          {/* Finding 3 */}
          <FindingCard number={3} title="Data Leakage Incidents Involving AI">
            <p className="text-gray-300 mb-6">
              AI-related data leakage incidents have surged 3.2× since 2024. Source code (34%) and customer
              data (28%) are the most commonly exposed data types. Most incidents stem from employees
              pasting sensitive information into general-purpose AI chat interfaces.
            </p>
            <VerticalBar
              data={[
                { label: "Source Code", value: 34 },
                { label: "Customer Data", value: 28 },
                { label: "Internal Docs", value: 22 },
                { label: "Financial Data", value: 18 },
                { label: "HR / PII", value: 14 },
                { label: "Trade Secrets", value: 11 },
              ]}
              height={180}
            />
          </FindingCard>

          {/* Finding 4 */}
          <FindingCard number={4} title="AI Policy Adoption Rates">
            <p className="text-gray-300 mb-6">
              Only 55% of enterprises have any form of AI acceptable use policy, and just 23%
              have policies that are regularly updated and enforced. The remaining 45% operate with
              no formal AI governance guidelines whatsoever.
            </p>
            <div className="flex justify-around flex-wrap gap-6">
              <DonutChart value={23} label="Enforced policy" color="#22c55e" />
              <DonutChart value={32} label="Policy exists (unenforced)" color="#eab308" />
              <DonutChart value={45} label="No policy" color="#ef4444" />
            </div>
          </FindingCard>

          {/* Finding 5 */}
          <FindingCard number={5} title="AI Governance Tool Deployment">
            <p className="text-gray-300 mb-6">
              Despite growing awareness, only 18% of enterprises have deployed dedicated AI governance
              or monitoring tools. Most rely on existing DLP solutions (34%) that were not designed for
              AI-specific risks, while 48% have no tooling at all.
            </p>
            <HorizontalBar
              data={[
                { label: "No AI-specific tooling", value: 48, color: "#ef4444" },
                { label: "Repurposed DLP tools", value: 34, color: "#eab308" },
                { label: "Dedicated AI governance", value: 18, color: "#22c55e" },
              ]}
              maxValue={60}
            />
          </FindingCard>

          {/* Finding 6 */}
          <FindingCard number={6} title="Employee AI Training Status">
            <p className="text-gray-300 mb-6">
              Only 21% of enterprises provide formal AI security training to employees. Meanwhile,
              67% of employees report learning to use AI tools through self-study or peer sharing —
              with zero security guidance.
            </p>
            <div className="flex justify-around flex-wrap gap-6">
              <DonutChart value={21} label="Formal training" color="#22c55e" />
              <DonutChart value={67} label="Self-taught" color="#eab308" />
              <DonutChart value={12} label="No AI use" color="#6b7280" />
            </div>
          </FindingCard>

          {/* Finding 7 */}
          <FindingCard number={7} title="Compliance Readiness by Framework">
            <p className="text-gray-300 mb-6">
              As regulatory frameworks like the EU AI Act, NIST AI RMF, and ISO 42001 take shape,
              most enterprises are unprepared. Only 8% report full readiness for any major AI compliance framework.
            </p>
            <HorizontalBar
              data={[
                { label: "EU AI Act", value: 11 },
                { label: "NIST AI RMF", value: 16 },
                { label: "ISO 42001", value: 8 },
                { label: "SOC 2 + AI controls", value: 22 },
                { label: "Internal AI policy", value: 31 },
              ]}
            />
          </FindingCard>

          {/* Finding 8 */}
          <FindingCard number={8} title="AI Spend: Sanctioned vs. Unsanctioned">
            <p className="text-gray-300 mb-6">
              For every $1 spent on sanctioned AI tools, enterprises unknowingly spend an estimated
              $0.40 on unsanctioned AI subscriptions and usage. This &quot;shadow AI tax&quot; represents
              a massive blind spot in both budgets and security postures.
            </p>
            <div className="flex items-end justify-center gap-12 h-[180px]">
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-lg mb-2">$1.00</span>
                <div
                  className="w-20 rounded-t-lg animate-bar-grow-v"
                  style={{ height: "140px", background: "linear-gradient(to top, #6412A6, #8B3FD4)" }}
                />
                <span className="text-xs text-gray-400 mt-2">Sanctioned</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-lg mb-2">$0.40</span>
                <div
                  className="w-20 rounded-t-lg animate-bar-grow-v"
                  style={{ height: "56px", background: "linear-gradient(to top, #ef4444, #f87171)", animationDelay: "0.2s" }}
                />
                <span className="text-xs text-gray-400 mt-2">Unsanctioned</span>
              </div>
            </div>
          </FindingCard>

          {/* Finding 9 */}
          <FindingCard number={9} title="Top AI Security Concerns for CISOs">
            <p className="text-gray-300 mb-6">
              Data exfiltration via AI tops the list of CISO concerns (78%), followed by compliance
              risk (65%), IP leakage (61%), and model poisoning / supply chain attacks (44%).
            </p>
            <HorizontalBar
              data={[
                { label: "Data exfiltration via AI", value: 78 },
                { label: "Compliance & regulatory risk", value: 65 },
                { label: "IP / trade secret leakage", value: 61 },
                { label: "Model poisoning / supply chain", value: 44 },
                { label: "Prompt injection attacks", value: 39 },
                { label: "Reputation damage", value: 33 },
              ]}
            />
          </FindingCard>

          {/* Finding 10 */}
          <FindingCard number={10} title="Projected AI Governance Market Growth">
            <p className="text-gray-300 mb-6">
              The AI governance and security tooling market is projected to grow from $1.2B in 2024 to
              $8.7B by 2028 — a 7.3× increase. Enterprises are beginning to recognize that AI-specific
              security is no longer optional.
            </p>
            <VerticalBar
              data={[
                { label: "2024", value: 12, color: "linear-gradient(to top, #6412A6, #8B3FD4)" },
                { label: "2025", value: 24 },
                { label: "2026", value: 42 },
                { label: "2027", value: 65 },
                { label: "2028", value: 87 },
              ]}
              unit=""
              height={180}
            />
            <div className="text-center text-xs text-gray-500 mt-2">Market size ($100M units)</div>
          </FindingCard>
        </div>
      </div>
    </div>
  );
}
