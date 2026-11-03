import { AxisMark } from "./AxisMark";
import { Reveal } from "./Reveal";
import { Container, GhostButton, PrimaryButton } from "./ui";
import { whatsappLink } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-green/20 bg-surface px-6 py-16 text-center sm:px-16 sm:py-24">
            <div className="grid-bg absolute inset-0" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-green/20 blur-[120px]" />
            <AxisMark className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-auto opacity-[0.07]" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">
                Seu próximo nível começa com <span className="text-gradient">uma conversa.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
                Conte o desafio da sua empresa. Em até 1 hora útil um especialista da AXIS
                responde com os próximos passos.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <PrimaryButton href="#diagnostico">Fazer diagnóstico gratuito</PrimaryButton>
                <GhostButton
                  href={whatsappLink("Olá, AXIS! Vim pelo site e quero falar com um especialista.")}
                >
                  Chamar no WhatsApp
                </GhostButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
