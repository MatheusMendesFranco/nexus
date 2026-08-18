import type { Metadata } from "next";
import { AboutPage } from "../components/pages";

export const metadata: Metadata = { title: "Sobre a Nexus", description: "Conheça o propósito, a visão e os princípios da Nexus – Soluções.", openGraph: { title: "Sobre a Nexus – Soluções", description: "Conectamos desafios a soluções.", type: "website" } };
export default function Page(){return <AboutPage/>}
