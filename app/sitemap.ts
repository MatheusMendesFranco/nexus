import type { MetadataRoute } from "next";
import { siteUrl } from "./site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sistemas-e-automacoes", "/landing-pages", "/trafego-pago", "/sobre", "/contato", "/politica-de-privacidade", "/termos-de-uso"];
  return routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: route ? "monthly" : "weekly", priority: route === "" ? 1 : route === "/contato" ? .8 : .7 }));
}
