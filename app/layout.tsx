import type { Metadata } from "next";
import { Footer, Header, WhatsAppFloat } from "./components/site-shell";
import { siteUrl } from "./site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Nexus – Soluções", template: "%s | Nexus – Soluções" },
  description: "Tecnologia, estratégia e processos conectados ao crescimento do seu negócio.",
  robots: { index: true, follow: true },
  openGraph: { siteName: "Nexus – Soluções", locale: "pt_BR", type: "website" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
