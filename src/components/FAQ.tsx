import { Plus } from "lucide-react";
import { Container, SectionHeading } from "./ui";

const faqs = [
  {
    q: "Quanto custa desenvolver um sistema ou aplicativo?",
    a: "Depende do escopo, das integrações e do nível de inteligência envolvido. Depois do diagnóstico você recebe uma proposta fechada, com escopo, prazo e investimento detalhados. Também trabalhamos com MVPs para validar a ideia com menor investimento inicial.",
  },
  {
    q: "Em quanto tempo meu projeto fica pronto?",
    a: "Um MVP costuma ficar pronto entre 6 e 12 semanas. Projetos maiores são divididos em fases, com entregas a cada sprint, para você ver o produto evoluindo desde o início.",
  },
  {
    q: "O código e o produto ficam no meu nome?",
    a: "Sim. Toda a propriedade intelectual, o código-fonte, as contas nas lojas e a infraestrutura ficam no nome da sua empresa. Isso está garantido em contrato.",
  },
  {
    q: "Como a inteligência artificial pode ajudar a minha empresa?",
    a: "Automatizando atendimento (inclusive no WhatsApp), qualificando leads, gerando relatórios, resumindo documentos, prevendo demanda e eliminando tarefas repetitivas. No diagnóstico mapeamos onde a I.A. gera retorno real no seu caso.",
  },
  {
    q: "Vocês dão suporte depois do lançamento?",
    a: "Sim. Oferecemos planos de sustentação e evolução com SLA definido, monitoramento, correções e novas funcionalidades, além de gestão contínua de marketing quando contratada.",
  },
  {
    q: "Preciso contratar tecnologia e marketing juntos?",
    a: "Não. Você pode contratar cada frente separadamente. A vantagem de unir as duas é que o produto já nasce pensado para converter, e as campanhas são medidas de ponta a ponta.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Tudo o que você precisa saber <span className="text-gradient">antes de começar.</span>
            </>
          }
          description="Não encontrou sua pergunta? Chame a gente no WhatsApp, respondemos rápido."
        />
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-base font-medium sm:text-lg">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-green transition group-open:rotate-45 group-open:bg-green group-open:text-black">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 pr-12 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
