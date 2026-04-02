interface BarItem {
  label: string;
  value: number;
  color?: string;
}

interface HorizontalBarProps {
  data: BarItem[];
  maxValue?: number;
  unit?: string;
}

export default function HorizontalBar({ data, maxValue, unit = "%" }: HorizontalBarProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value));
  return (
    <div className="space-y-4">
      {data.map((item, i) => (
        <div key={item.label} className="group">
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-gray-300 font-medium">{item.label}</span>
            <span className="text-white font-bold tabular-nums">
              {item.value}{unit}
            </span>
          </div>
          <div className="h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full animate-bar-grow transition-shadow group-hover:shadow-glow"
              style={{
                width: `${(item.value / max) * 100}%`,
                background: item.color || `linear-gradient(90deg, #06b6d4, #22d3ee, #67e8f9)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
