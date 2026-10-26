
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}) {
  const alignmentClasses = {
    center: "mx-auto text-center",
    left: "text-left",
  };

  const alignment = alignmentClasses[align] || alignmentClasses.center;

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${
            light ? "text-red-300" : "text-brand-red"
          }`}
        >
          <span className="h-0.5 w-6 rounded-full bg-current" />
          {eyebrow}
          <span className="h-0.5 w-6 rounded-full bg-current" />
        </p>
      )}

      <h2
        className={`text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm leading-7 sm:text-base ${
            light ? "text-blue-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
