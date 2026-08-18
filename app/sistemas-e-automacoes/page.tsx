import type { Metadata } from "next";
import { SystemsPage } from "../components/pages";

export const metadata: Metadata = { title: "Sistemas e Automações", description: "Sistemas, painéis e automações personalizados para organizar informações, integrar ferramentas e reduzir tarefas manuais.", openGraph: { title: "Sistemas e Automações | Nexus – Soluções", description: "Mais controle. Menos trabalho manual.", type: "website" } };
export default function Page(){return <SystemsPage/>}
