const tech = [
  "React",
  "Next.js",
  "React Native",
  "Flutter",
  "Node.js",
  "Python",
  "OpenAI",
  "Claude",
  "PostgreSQL",
  "AWS",
  "Firebase",
  "Meta Ads",
  "Google Ads",
  "WhatsApp API",
  "n8n",
  "Stripe",
];

export function TechMarquee() {
  const row = [...tech, ...tech];
  return (
    <section aria-label="Tecnologias que dominamos" className="border-y border-line bg-surface/60 py-6">
      <p className="sr-only">Tecnologias: {tech.join(", ")}</p>
      <div
        aria-hidden
        className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div className="animate-marquee flex w-max gap-12">
          {row.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-12 whitespace-nowrap font-display text-sm font-medium uppercase tracking-[0.2em] text-white/40"
            >
              {t}
              <span className="h-1.5 w-1.5 rotate-45 bg-green/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
