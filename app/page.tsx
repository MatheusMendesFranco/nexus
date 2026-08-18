import type { Metadata } from "next";
import { HomePage } from "./components/pages";

export const metadata: Metadata = {
  title: "Tecnologia, estratégia e crescimento",
  description:
    "Sistemas, automações, landing pages e tráfego pago para tornar operações mais eficientes e resultados mais previsíveis.",
  openGraph: {
    title: "Nexus – Soluções",
    description: "Tecnologia, estratégia e processos conectados ao crescimento do seu negócio.",
    type: "website",
  },
};

export default function Home() {
  return <HomePage />;
}
