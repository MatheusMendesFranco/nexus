import type { Metadata } from "next";
import { LandingPage } from "../components/pages";

export const metadata: Metadata = { title: "Landing Pages", description: "Landing pages profissionais, rápidas e responsivas, desenvolvidas com estratégia, copy, design e foco em conversão.", openGraph: { title: "Landing Pages | Nexus – Soluções", description: "Páginas feitas para transformar atenção em ação.", type: "website" } };
export default function Page(){return <LandingPage/>}
