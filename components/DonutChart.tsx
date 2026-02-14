interface DonutChartProps {
  value: number;
  label: string;
  size?: number;
  color?: string;
}

export default function DonutChart({ value, label, size = 120, color = "#6412A6" }: DonutChartProps) {
  const r = 15.9155;
  const circumference = 100;
  const offset = circumference - value;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 36 36" className="animate-donut">
        <circle
          cx="18" cy="18" r={r}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="3"
        />
        <circle
          cx="18" cy="18" r={r}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={`${value} ${offset}`}
          strokeDashoffset="25"
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1.5s ease-out" }}
        />
        <text x="18" y="18" textAnchor="middle" dy="0.35em" className="fill-white text-[0.45rem] font-bold">
          {value}%
        </text>
      </svg>
      <span className="text-xs text-gray-300 text-center">{label}</span>
    </div>
  );
}
