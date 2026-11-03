import { FileCheck2, Gauge, Headphones, Layers, LineChart, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

const reasons = [
  {
    icon: Layers,
    title: "Time completo em um só lugar",
    text: "Devs, designers, especialistas em I.A. e growth trabalhando no mesmo projeto, sem ruído entre fornecedores.",
  },
  {
    icon: FileCheck2,
    title: "O código é seu",
    text: "Propriedade intelectual e código-fonte 100% do cliente, com documentação e repositório entregues.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e LGPD",
    text: "Boas práticas de segurança, criptografia e conformidade com a LGPD desde a arquitetura.",
  },
  {
    icon: Gauge,
    title: "Performance de verdade",
    text: "Aplicações rápidas, estáveis e prontas para crescer de 100 para 100 mil usuários.",
  },
  {
    icon: LineChart,
    title: "Foco em resultado",
    text: "Cada entrega é ligada a uma métrica de negócio: receita, conversão, economia ou retenção.",
  },
  {
    icon: Headphones,
    title: "Suporte que responde",
    text: "Canal direto com o time, SLA definido e acompanhamento contínuo depois do lançamento.",
  },
];

export function Why() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Por que a AXIS"
            title={
              <>
                Parceiro de tecnologia, <span className="text-gradient">não só fornecedor.</span>
              </>
            }
            description="Assumimos o compromisso com o seu resultado. É assim que construímos relações de longo prazo com cada cliente."
          />
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 0.08} className="bg-bg p-8 transition hover:bg-surface">
              <r.icon className="h-6 w-6 text-green" />
              <h3 className="mt-5 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
