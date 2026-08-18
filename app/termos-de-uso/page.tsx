import type { Metadata } from "next";
import { LegalPage } from "../components/pages";

export const metadata: Metadata = { title: "Termos de Uso", description: "Termos de Uso do site da Nexus – Soluções." };
export default function Page(){return <LegalPage type="terms"/>}
