import { faqs } from "@/data/faq";
import { seo, siteUrl } from "@/data/seo";
import { site } from "@/data/site";

// Dados estruturados (schema.org). Sem avaliações/notas: os depoimentos são exemplos
// e o Google pune review markup que não seja verificável.
export function JsonLd() {
  const orgId = `${siteUrl}/#organizacao`;
  const sameAs = [site.instagram, site.linkedin].filter(Boolean);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": orgId,
        name: "AXIS",
        url: siteUrl,
        logo: `${siteUrl}/axis-logo.png`,
        image: `${siteUrl}/axis-logo.png`,
        description: seo.description,
        email: site.email,
        telephone: "+55-16-99762-1736",
        areaServed: { "@type": "Country", name: "Brasil" },
        knowsLanguage: "pt-BR",
        ...(sameAs.length ? { sameAs } : {}),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+55-16-99762-1736",
          email: site.email,
          availableLanguage: "Portuguese",
          areaServed: "BR",
        },
        knowsAbout: [
          "Desenvolvimento de software",
          "Desenvolvimento de aplicativos",
          "Inteligência artificial",
          "Automação de processos",
          "Marketing digital",
          "Tráfego pago",
          "SEO",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços AXIS",
          itemListElement: [
            ["Desenvolvimento de sistemas e aplicativos", "Apps iOS e Android, sistemas web, SaaS, ERPs, CRMs, integrações e APIs."],
            ["Inteligência artificial para empresas", "Agentes e chatbots com LLM, atendimento automático no WhatsApp, automação e análise preditiva."],
            ["Marketing digital", "Tráfego pago, funis, landing pages, SEO, conteúdo, CRO e analytics."],
          ].map(([name, description]) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name, description, provider: { "@id": orgId } },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "AXIS",
        inLanguage: "pt-BR",
        publisher: { "@id": orgId },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
