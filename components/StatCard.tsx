interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <div
      className="rounded-2xl p-6 text-center animate-fade-in-up border border-white/10"
      style={{
        background: "linear-gradient(135deg, #1a0533, #2d1054)",
        animationDelay: `${delay}s`,
      }}
    >
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{value}</div>
      <div className="text-sm text-gray-300 leading-snug">{label}</div>
    </div>
  );
}
