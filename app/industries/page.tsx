import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import HorizontalBar from "@/components/HorizontalBar";
import DonutChart from "@/components/DonutChart";

export const metadata: Metadata = {
  title: "Industry Breakdown — AI Security Benchmark 2026",
  description:
    "AI security posture across Financial Services, Healthcare, Technology, Government, Manufacturing, and Education.",
};

const industries = [
  {
    name: "Financial Services",
    adoption: 91,
    shadowAI: 76,
    riskLevel: "Critical",
    riskColor: "#ef4444",
    policyRate: 62,
    tools: ["ChatGPT", "Copilot", "Custom LLMs", "Bloomberg GPT"],
    challenges: [
      "Strict regulatory requirements (SOX, PCI-DSS, GDPR) conflict with uncontrolled AI adoption",
      "High-value data (PII, financial records) frequently shared with AI tools",
      "Trading desks and analysts heavily dependent on AI-generated insights",
    ],
    summary:
      "Financial services faces the highest stakes: massive AI adoption coupled with stringent regulatory oversight. The 76% shadow AI rate puts sensitive financial data and customer PII at severe risk.",
  },
  {
    name: "Healthcare",
    adoption: 84,
    shadowAI: 71,
    riskLevel: "Critical",
    riskColor: "#ef4444",
    policyRate: 48,
    tools: ["ChatGPT", "Medical LLMs", "Copilot", "Diagnostic AI"],
    challenges: [
      "HIPAA violations from sharing patient data with unsanctioned AI",
      "Clinical staff using AI for diagnosis without IT oversight",
      "Complex consent requirements for AI-processed health data",
    ],
    summary:
      "Healthcare's AI adoption is rapidly outpacing governance. Patient data being shared with general-purpose AI models creates severe HIPAA liability and patient privacy risks.",
  },
  {
    name: "Technology",
    adoption: 96,
    shadowAI: 82,
    riskLevel: "High",
    riskColor: "#f97316",
    policyRate: 71,
    tools: ["GitHub Copilot", "ChatGPT", "Claude", "Cursor", "Custom models"],
    challenges: [
      "Source code and IP routinely shared with AI coding assistants",
      "Developers bypass corporate tools for personal AI subscriptions",
      "Rapid AI tool proliferation makes tracking nearly impossible",
    ],
    summary:
      "Tech companies lead in both AI adoption and shadow AI. While they have the highest policy adoption rate (71%), the sheer velocity of new AI tool usage means governance always lags.",
  },
  {
    name: "Government",
    adoption: 62,
    shadowAI: 47,
    riskLevel: "High",
    riskColor: "#f97316",
    policyRate: 38,
    tools: ["ChatGPT", "Copilot", "Translation AI", "Document AI"],
    challenges: [
      "Classified and sensitive government data at risk of exposure",
      "Procurement processes too slow for AI governance tools",
      "Inconsistent policies across agencies and departments",
    ],
    summary:
      "Government agencies have lower adoption but face unique risks around classified data and national security. The 38% policy rate is concerning given the sensitivity of government data.",
  },
  {
    name: "Manufacturing",
    adoption: 73,
    shadowAI: 59,
    riskLevel: "Medium",
    riskColor: "#eab308",
    policyRate: 42,
    tools: ["ChatGPT", "Copilot", "Process optimization AI", "Predictive maintenance"],
    challenges: [
      "Trade secrets and proprietary processes shared with AI tools",
      "OT/IT convergence creates new AI attack surfaces",
      "Supply chain data exposed through AI-assisted procurement",
    ],
    summary:
      "Manufacturing's moderate AI adoption masks growing risks around trade secrets and operational technology. AI is increasingly embedded in supply chain and production optimization.",
  },
  {
    name: "Education",
    adoption: 87,
    shadowAI: 68,
    riskLevel: "Medium",
    riskColor: "#eab308",
    policyRate: 29,
    tools: ["ChatGPT", "Gemini", "Grammarly AI", "Research assistants"],
    challenges: [
      "Student data (FERPA) shared with AI tools by faculty and staff",
      "Massive adoption by students with zero institutional oversight",
      "Research data and unpublished findings exposed to AI models",
    ],
    summary:
      "Education has the lowest AI policy adoption (29%) despite extremely high usage. Both students and faculty use AI extensively, creating a massive governance gap around student data and research IP.",
  },
];

export default function Industries() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="Industry Breakdown"
          title="AI Security Posture by Industry"
          subtitle="How six major sectors compare in AI adoption, shadow AI prevalence, and governance readiness."
        />

        {/* Comparison overview */}
        <div
          className="rounded-2xl p-8 border border-white/10 mb-12"
          style={{ background: "linear-gradient(135deg, #1a0533, #11021d)" }}
        >
          <h3 className="text-lg font-semibold text-white mb-6">AI Adoption Rate by Industry</h3>
          <HorizontalBar
            data={industries.map((ind) => ({
              label: ind.name,
              value: ind.adoption,
            }))}
          />
        </div>

        {/* Individual cards */}
        <div className="space-y-8">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="rounded-2xl p-8 border border-white/10 animate-fade-in-up"
              style={{
                background: "linear-gradient(135deg, #1a0533, #11021d)",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">{ind.name}</h3>
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: `${ind.riskColor}20`,
                        color: ind.riskColor,
                      }}
                    >
                      {ind.riskLevel} Risk
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{ind.summary}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Common AI Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {ind.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Compliance Challenges</h4>
                    <ul className="space-y-1">
                      {ind.challenges.map((c, j) => (
                        <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-brand-light mt-0.5">•</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col items-center gap-6 lg:gap-4">
                  <DonutChart value={ind.adoption} label="AI Adoption" color="#8B3FD4" size={100} />
                  <DonutChart value={ind.shadowAI} label="Shadow AI" color={ind.riskColor} size={100} />
                  <DonutChart value={ind.policyRate} label="Policy Rate" color="#22c55e" size={100} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
