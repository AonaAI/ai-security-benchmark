import { type ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  delay?: number;
}

export default function StatCard({ value, label, icon, delay = 0 }: StatCardProps) {
  return (
    <div
      className="relative rounded-2xl p-[1px] animate-fade-in-up group cursor-default"
      style={{
        animationDelay: `${delay}s`,
        background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(34,211,238,0.03), rgba(6,182,212,0.1))",
      }}
    >
      <div className="rounded-2xl p-7 md:p-8 text-center h-full" style={{ background: "linear-gradient(135deg, rgba(22,27,34,0.95), rgba(26,35,50,0.85))" }}>
        {icon && (
          <div className="flex justify-center mb-4">
            <span className="text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-300">
              {icon}
            </span>
          </div>
        )}
        <div className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2 gradient-text">
          {value}
        </div>
        <div className="text-sm text-gray-400 leading-relaxed">{label}</div>
      </div>
    </div>
  );
}
