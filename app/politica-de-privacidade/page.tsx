import type { Metadata } from "next";
import { LegalPage } from "../components/pages";

export const metadata: Metadata = { title: "Política de Privacidade", description: "Política de Privacidade da Nexus – Soluções." };
export default function Page(){return <LegalPage type="privacy"/>}
