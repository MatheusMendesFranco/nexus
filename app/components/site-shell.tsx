"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contact, navigation } from "../config";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`brand ${compact ? "brand--compact" : ""}`} aria-label="Nexus – Soluções, início">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span><strong>NEXUS</strong><small>SOLUÇÕES</small></span>
    </Link>
  );
}

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleDesktop);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="menu-principal" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => open ? closeMenu() : setOpen(true)}>
          <span /><span /><span />
        </button>
        {open && <button className="menu-backdrop" type="button" tabIndex={-1} aria-label="Fechar menu e voltar ao site" onClick={closeMenu} />}
        <nav id="menu-principal" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">
          <p className="mobile-nav-title">Menu principal</p>
          <div className="nav-links">
            {navigation.map((item) => {
              const active = item.href === "/" ? path === "/" : path.startsWith(item.href);
              return <Link key={item.href} href={item.href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>{item.label}</Link>;
            })}
          </div>
          <a className="button button--header" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Solicitar uma solução <Arrow /></a>
          <p className="nav-dismiss-hint">Toque fora do painel ou pressione Esc para fechar.</p>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid page-width">
        <div className="footer-brand"><Brand /><p>Tecnologia, estratégia e processos conectados ao crescimento do seu negócio.</p></div>
        <div><h2>Soluções</h2><Link href="/sistemas-e-automacoes">Sistemas e Automações</Link><Link href="/landing-pages">Landing Pages</Link><Link href="/trafego-pago">Tráfego Pago</Link></div>
        <div><h2>Nexus</h2><Link href="/sobre">Sobre a Nexus</Link><Link href="/contato">Contato</Link><Link href="/politica-de-privacidade">Política de Privacidade</Link><Link href="/termos-de-uso">Termos de Uso</Link></div>
        <div><h2>Conecte-se</h2><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">{contact.whatsappNumber}</a><a href={contact.instagram} target="_blank" rel="noopener noreferrer">{contact.instagramLabel}</a><a href={contact.emailHref} target="_blank" rel="noopener noreferrer">{contact.email}</a></div>
      </div>
      <div className="footer-bottom page-width"><span>© {new Date().getFullYear()} Nexus – Soluções</span><span>Estratégia que conecta. Tecnologia que move.</span></div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Nexus pelo WhatsApp"><span aria-hidden="true">↗</span><b>WhatsApp</b></a>;
}

export function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
