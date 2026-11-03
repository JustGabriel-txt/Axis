import { navLinks, site, whatsappLink } from "@/data/site";
import { Logo } from "./AxisMark";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <Container className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Sistemas, aplicativos, inteligência artificial e marketing digital para empresas que
            querem crescer com tecnologia.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Navegação</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contato</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink("Olá, AXIS! Vim pelo site e quero falar com um especialista.")}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            {[
              { label: "Instagram", href: site.instagram },
              { label: "LinkedIn", href: site.linkedin },
            ]
              .filter((s) => s.href)
              .map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            <li>{site.city}</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-8 text-xs text-white/40 sm:flex-row">
        <p>© 2026 AXIS. Todos os direitos reservados.</p>
        <p>Feito com tecnologia AXIS.</p>
      </Container>
    </footer>
  );
}
