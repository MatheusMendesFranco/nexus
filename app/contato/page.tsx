import type { Metadata } from "next";
import { ContactPage } from "../components/pages";

export const metadata: Metadata = { title: "Contato", description: "Fale com a Nexus pelo WhatsApp, Instagram ou e-mail e encontre a solução certa para o seu negócio.", openGraph: { title: "Contato | Nexus – Soluções", description: "Vamos encontrar a solução certa para o seu negócio?", type: "website" } };
export default function Page(){return <ContactPage/>}
