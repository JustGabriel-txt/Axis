import { Plus } from "lucide-react";
import { faqs } from "@/data/faq";
import { Container, SectionHeading } from "./ui";

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
