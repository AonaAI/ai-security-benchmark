interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ tag, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      {tag && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
          style={{ background: "rgba(100,18,166,0.3)", color: "#8B3FD4" }}
        >
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
