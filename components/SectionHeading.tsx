interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ tag, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-14">
      {tag && (
        <span
          className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5"
          style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}
        >
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
      {/* Decorative gradient line */}
      <div className="w-16 h-[2px] mx-auto mb-5" style={{ background: "linear-gradient(90deg, #22d3ee, #06b6d4)" }} />
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">{subtitle}</p>}
    </div>
  );
}
