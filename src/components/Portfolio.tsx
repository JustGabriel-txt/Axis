import { projects } from "@/data/projects";
import { DashboardMockup, PhoneMockup } from "./Mockups";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

export function Portfolio() {
  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-teal/[0.06] blur-[120px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Projetos"
          title={
            <>
              Produtos reais, <span className="text-gradient">resultados medidos.</span>
            </>
          }
          description="Alguns dos sistemas, aplicativos e operações de growth que construímos para nossos clientes."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.1}>
              <article className="card-glow group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-500 hover:-translate-y-1">
                <div className="relative flex h-[300px] items-center justify-center overflow-hidden border-b border-line bg-[radial-gradient(ellipse_at_center,rgba(30,242,94,0.10),transparent_70%)] px-6">
                  <div className="grid-bg absolute inset-0 opacity-60" />
                  <div
                    className={`relative transition duration-700 group-hover:scale-[1.04] ${
                      p.mockup === "phone" ? "translate-y-12 group-hover:translate-y-8" : "w-full"
                    }`}
                  >
                    {p.mockup === "phone" ? (
                      <PhoneMockup screen={p.screen} accent={p.accent} />
                    ) : (
                      <div className="flex justify-center">
                        <DashboardMockup screen={p.screen} accent={p.accent} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold text-gradient">
                      {p.result.value}
                    </span>
                    <span className="text-sm text-white/70">{p.result.label}</span>
                  </div>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
