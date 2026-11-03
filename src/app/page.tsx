import { DiagnosticFunnel } from "@/components/DiagnosticFunnel";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MidCTA } from "@/components/MidCTA";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { TechMarquee } from "@/components/TechMarquee";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Stats />
        <Services />
        <MidCTA
          title="Não sabe por onde começar?"
          text="Em 3 perguntas indicamos a solução ideal para o momento da sua empresa."
          cta="Fazer diagnóstico"
        />
        <Portfolio />
        <MidCTA
          title="Quer um resultado como esses?"
          text="Converse com quem construiu esses produtos e descubra o potencial do seu."
          cta="Quero meu projeto"
        />
        <Process />
        <Why />
        <Testimonials />
        <DiagnosticFunnel />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
