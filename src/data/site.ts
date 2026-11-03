export const site = {
  name: "AXIS",
  whatsapp: "5516997621736", // DDI + DDD + número, só dígitos
  whatsappDisplay: "(16) 99762-1736",
  email: "axisdev2026@gmail.com",
  // Preencha com os perfis oficiais; links vazios não aparecem no rodapé
  instagram: "",
  linkedin: "",
  city: "Brasil · atendimento remoto",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#depoimentos", label: "Clientes" },
  { href: "#faq", label: "FAQ" },
];
