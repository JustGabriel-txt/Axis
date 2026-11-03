import { Compass, Map, Rocket, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

const steps = [
  {
    icon: Compass,
    title: "Diagnóstico",
    time: "Semana 1",
    text: "Imersão no seu negócio, metas e gargalos. Saímos com um mapa claro de onde a tecnologia gera mais retorno.",
  },
  {
    icon: Map,
    title: "Estratégia",
    time: "Semana 2",
    text: "Escopo, arquitetura, cronograma e investimento definidos por escrito. Sem surpresas no meio do caminho.",
  },
  {
    icon: Wrench,
    title: "Desenvolvimento",
    time: "Sprints quinzenais",
    text: "Entregas visíveis a cada ciclo, acesso ao ambiente de testes e reuniões de acompanhamento com o time.",
  },
  {
    icon: Rocket,
    title: "Lançamento & Escala",
    time: "Contínuo",
    text: "Publicação, monitoramento, marketing e evolução constante, guiados por dados reais de uso.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          center
          eyebrow="Como trabalhamos"
          title={
            <>
              Um método claro, do <span className="text-gradient">primeiro café</span> ao
              produto no ar.
            </>
          }
          description="Previsibilidade é o que separa um projeto de sucesso de uma dor de cabeça. Por isso cada etapa tem entregável, prazo e responsável."
        />

        <div className="relative mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-green/40 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="relative">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-green/30 bg-bg text-green shadow-[0_0_30px_-8px_#1ef25e]">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-green">
                {String(i + 1).padStart(2, "0")} · {s.time}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
