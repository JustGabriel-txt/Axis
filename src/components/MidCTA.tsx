import { Reveal } from "./Reveal";
import { Container, PrimaryButton } from "./ui";

// Ponto de conversão intermediário: leva o visitante ao diagnóstico
export function MidCTA({ title, text, cta }: { title: string; text: string; cta: string }) {
  return (
    <Container>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-7 py-10 sm:px-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green/15 blur-[80px]" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl font-semibold sm:text-2xl">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </div>
            <PrimaryButton href="#diagnostico" className="shrink-0">
              {cta}
            </PrimaryButton>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
