interface BarItem {
  label: string;
  value: number;
  color?: string;
}

interface VerticalBarProps {
  data: BarItem[];
  maxValue?: number;
  unit?: string;
  height?: number;
}

export default function VerticalBar({ data, maxValue, unit = "%", height = 220 }: VerticalBarProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value));
  return (
    <div className="flex items-end justify-between gap-3" style={{ height }}>
      {data.map((item, i) => (
        <div key={item.label} className="flex flex-col items-center flex-1 h-full justify-end group">
          <span className="text-xs text-white font-bold mb-1.5 tabular-nums opacity-80 group-hover:opacity-100 transition-opacity">
            {item.value}{unit}
          </span>
          <div
            className="w-full max-w-[52px] rounded-t-lg animate-bar-grow-v transition-all group-hover:shadow-glow group-hover:scale-x-110"
            style={{
              height: `${(item.value / max) * 100}%`,
              background: item.color || `linear-gradient(to top, #06b6d4, #22d3ee, #67e8f9)`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
          <span className="text-[10px] text-gray-500 mt-2.5 text-center leading-tight font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
