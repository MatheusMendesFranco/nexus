export const contact = {
  whatsapp: "https://api.whatsapp.com/send/?phone=5521972599900&text&type=phone_number&app_absent=0",
  whatsappNumber: "(21) 97259-9900",
  instagram: "https://www.instagram.com/slbr.nexus/",
  instagramLabel: "@slbr.nexus",
  email: "slbr.nexus@gmail.com",
  emailHref: "mailto:slbr.nexus@gmail.com",
} as const;

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/sistemas-e-automacoes", label: "Sistemas e Automações" },
  { href: "/landing-pages", label: "Landing Pages" },
  { href: "/trafego-pago", label: "Tráfego Pago" },
  { href: "/sobre", label: "Sobre a Nexus" },
  { href: "/contato", label: "Contato" },
] as const;
