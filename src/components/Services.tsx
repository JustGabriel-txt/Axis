import { BrainCircuit, Check, Megaphone, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

const services = [
  {
    icon: Smartphone,
    tag: "01",
    title: "Sistemas & Aplicativos",
    text: "Software sob medida que resolve o gargalo real da sua operação, com arquitetura pronta para escalar.",
    items: [
      "Apps iOS e Android",
      "Sistemas web e SaaS",
      "ERPs, CRMs e portais",
      "Integrações e APIs",
    ],
  },
  {
    icon: BrainCircuit,
    tag: "02",
    title: "Inteligência Artificial",
    text: "Colocamos I.A. para trabalhar dentro do seu processo: menos tarefa manual, mais decisão inteligente.",
    items: [
      "Agentes e chatbots com LLM",
      "Atendimento automático no WhatsApp",
      "Automação de processos",
      "Análise preditiva de dados",
    ],
  },
  {
    icon: Megaphone,
    tag: "03",
    title: "Marketing Digital",
    text: "Estratégia, mídia e conversão trabalhando juntas para transformar atenção em faturamento previsível.",
    items: [
      "Tráfego pago (Meta e Google)",
      "Funis e landing pages",
      "SEO e conteúdo",
      "CRO e analytics",
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="O que fazemos"
          title={
            <>
              Três frentes. <span className="text-gradient">Um único eixo</span> de
              crescimento.
            </>
          }
          description="Tecnologia, inteligência e marketing desenhados juntos, para que cada entrega reforce a outra e gere resultado mensurável."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="card-glow group h-full rounded-3xl border border-line bg-surface p-8 transition duration-500 hover:-translate-y-1 hover:bg-surface-2">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-black shadow-[0_0_30px_-6px_#1ef25e]">
                    <s.icon className="h-7 w-7" />
                  </span>
                  <span className="font-display text-sm text-white/25">{s.tag}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                <ul className="mt-8 space-y-3 border-t border-line pt-6">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm text-white/85">
                      <Check className="h-4 w-4 shrink-0 text-green" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
