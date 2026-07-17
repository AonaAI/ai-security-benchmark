interface DonutChartProps {
  value: number;
  label: string;
  size?: number;
  color?: string;
}

export default function DonutChart({ value, label, size = 130, color = "#22d3ee" }: DonutChartProps) {
  const r = 15.9155;
  const circumference = 100;
  const offset = circumference - value;

  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="relative">
        {/* Glow behind chart */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{ background: color, transform: "scale(0.6)" }}
        />
        <svg width={size} height={size} viewBox="0 0 36 36" className="animate-donut relative">
          <circle
            cx="18" cy="18" r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2.5"
          />
          <circle
            cx="18" cy="18" r={r}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeDasharray={`${value} ${offset}`}
            strokeDashoffset="25"
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 1.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
          <text x="18" y="17.5" textAnchor="middle" dy="0.35em" className="fill-white text-[0.5rem] font-bold">
            {value}%
          </text>
        </svg>
      </div>
      <span className="text-xs text-gray-400 text-center font-medium">{label}</span>
    </div>
  );
}
