// Cases de exemplo: substitua pelos projetos reais da AXIS
export type Project = {
  name: string;
  category: string;
  description: string;
  result: { value: string; label: string };
  tags: string[];
  mockup: "phone" | "dashboard";
  screen: "finance" | "health" | "logistics" | "crm" | "fitness" | "shop";
  accent: string;
};

export const projects: Project[] = [
  {
    name: "FinFlow",
    category: "App financeiro · iOS e Android",
    description:
      "Gestão financeira para PMEs com conciliação bancária automática e previsões de caixa geradas por I.A.",
    result: { value: "+40%", label: "retenção em 90 dias" },
    tags: ["React Native", "Node.js", "Open Finance", "OpenAI"],
    mockup: "phone",
    screen: "finance",
    accent: "#12f0b0",
  },
  {
    name: "Nexo CRM",
    category: "Sistema web · SaaS B2B",
    description:
      "CRM com assistente de I.A. que qualifica leads, resume conversas e sugere o próximo passo de cada venda.",
    result: { value: "3,2x", label: "mais leads qualificados" },
    tags: ["Next.js", "PostgreSQL", "LLM Agents", "WhatsApp API"],
    mockup: "dashboard",
    screen: "crm",
    accent: "#1ef25e",
  },
  {
    name: "MedAgenda",
    category: "App de saúde · Clínicas",
    description:
      "Agendamento inteligente com confirmação automática via WhatsApp e triagem por chatbot.",
    result: { value: "-62%", label: "faltas em consultas" },
    tags: ["Flutter", "Firebase", "Chatbot I.A."],
    mockup: "phone",
    screen: "health",
    accent: "#6cf53a",
  },
  {
    name: "Rota+",
    category: "Plataforma logística",
    description:
      "Painel de frota com roteirização otimizada, rastreio em tempo real e app para motoristas.",
    result: { value: "-28%", label: "custo por entrega" },
    tags: ["React", "Go", "Mapbox", "Machine Learning"],
    mockup: "dashboard",
    screen: "logistics",
    accent: "#12f0b0",
  },
  {
    name: "Vitta Fit",
    category: "App fitness · Assinatura",
    description:
      "Treinos personalizados por I.A., comunidade e pagamentos recorrentes integrados.",
    result: { value: "50 mil", label: "downloads no 1º semestre" },
    tags: ["React Native", "Stripe", "IA Generativa"],
    mockup: "phone",
    screen: "fitness",
    accent: "#1ef25e",
  },
  {
    name: "Lumi Store",
    category: "E-commerce + Growth",
    description:
      "Loja headless com recomendação de produtos e funil de tráfego pago estruturado de ponta a ponta.",
    result: { value: "+187%", label: "faturamento online" },
    tags: ["Shopify Headless", "Meta Ads", "Google Ads", "CRO"],
    mockup: "dashboard",
    screen: "shop",
    accent: "#6cf53a",
  },
];
