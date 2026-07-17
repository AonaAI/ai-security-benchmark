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

export default function VerticalBar({ data, maxValue, unit = "%", height = 200 }: VerticalBarProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value));
  return (
    <div className="flex items-end justify-between gap-2" style={{ height }}>
      {data.map((item, i) => (
        <div key={item.label} className="flex flex-col items-center flex-1 h-full justify-end">
          <span className="text-xs text-white font-semibold mb-1">
            {item.value}{unit}
          </span>
          <div
            className="w-full max-w-[48px] rounded-t-lg animate-bar-grow-v"
            style={{
              height: `${(item.value / max) * 100}%`,
              background: item.color || `linear-gradient(to top, #6412A6, #8B3FD4)`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
          <span className="text-[10px] text-gray-400 mt-2 text-center leading-tight">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
