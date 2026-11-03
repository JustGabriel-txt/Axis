// Usado só no servidor (metadata, sitemap, robots, JSON-LD).
// Defina NEXT_PUBLIC_SITE_URL com o domínio oficial (ex.: https://axis.com.br).
// Sem ela, na Vercel usa o domínio de produção do projeto automaticamente.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const seo = {
  title: "AXIS | Desenvolvimento de Sistemas, Apps, Inteligência Artificial e Marketing Digital",
  shortTitle: "AXIS | Tecnologia que move empresas",
  description:
    "Agência de soluções digitais para empresas: desenvolvimento de sistemas e aplicativos sob medida, integração de inteligência artificial e marketing digital orientado a dados. Faça um diagnóstico gratuito.",
  keywords: [
    "desenvolvimento de sistemas",
    "desenvolvimento de aplicativos",
    "criação de apps",
    "software sob medida",
    "inteligência artificial para empresas",
    "chatbot com IA",
    "automação de WhatsApp",
    "agentes de IA",
    "marketing digital",
    "tráfego pago",
    "agência de tecnologia",
    "AXIS",
  ],
  // Atualize ao publicar mudanças relevantes de conteúdo
  lastModified: "2026-11-03",
};
