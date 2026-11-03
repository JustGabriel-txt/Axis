import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          center
          eyebrow="Clientes"
          title={
            <>
              Quem constrói com a AXIS <span className="text-gradient">recomenda.</span>
            </>
          }
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.1}>
              <figure className="card-glow relative h-full rounded-3xl border border-line bg-surface p-8 sm:p-10">
                <Quote className="absolute right-8 top-8 h-10 w-10 text-white/[0.06]" />
                <div className="flex gap-1 text-green" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 text-lg leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-semibold text-black">
                    {t.name
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
