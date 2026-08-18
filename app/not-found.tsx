import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo" className="legal-page">
      <section className="legal-hero">
        <div className="page-width">
          <p className="eyebrow"><span /> Erro 404</p>
          <h1>Página não encontrada</h1>
          <p>O endereço pode ter mudado ou não existe.</p>
          <Link className="button button--light" href="/">Voltar ao início</Link>
        </div>
      </section>
    </main>
  );
}
