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
    <div className="space-y-3">
      {data.map((item, i) => (
        <div key={item.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300">{item.label}</span>
            <span className="text-white font-semibold">
              {item.value}{unit}
            </span>
          </div>
          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full animate-bar-grow"
              style={{
                width: `${(item.value / max) * 100}%`,
                background: item.color || `linear-gradient(90deg, #6412A6, #8B3FD4)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
