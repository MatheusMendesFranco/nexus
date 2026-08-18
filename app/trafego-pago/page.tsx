import type { Metadata } from "next";
import { TrafficPage } from "../components/pages";

export const metadata: Metadata = { title: "Tráfego Pago", description: "Planejamento, gestão e otimização de campanhas no Meta Ads e Google Ads com foco em oportunidades e decisões mais claras.", openGraph: { title: "Tráfego Pago | Nexus – Soluções", description: "Transforme alcance em oportunidades com mais estratégia.", type: "website" } };
export default function Page(){return <TrafficPage/>}
