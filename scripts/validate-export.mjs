import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";

const expectedFiles = [
  "out/index.html",
  "out/sistemas-e-automacoes/index.html",
  "out/landing-pages/index.html",
  "out/trafego-pago/index.html",
  "out/sobre/index.html",
  "out/contato/index.html",
  "out/politica-de-privacidade/index.html",
  "out/termos-de-uso/index.html",
  "out/404.html",
  "out/robots.txt",
  "out/sitemap.xml",
  "out/favicon.svg",
];

for (const file of expectedFiles) {
  await access(file, constants.R_OK);
}

const home = await readFile("out/index.html", "utf8");
const contact = await readFile("out/contato/index.html", "utf8");

const requiredContent = [
  [home, "Nexus – Soluções"],
  [home, "Soluções que conectam"],
  [contact, "slbr.nexus@gmail.com"],
  [contact, "5521972599900"],
];

for (const [contents, text] of requiredContent) {
  if (!contents.includes(text)) throw new Error(`Conteúdo obrigatório ausente: ${text}`);
}

console.log("Exportação estática validada: rotas, contatos e arquivos essenciais estão presentes.");
