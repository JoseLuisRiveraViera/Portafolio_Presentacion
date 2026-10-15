import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { socialLinks } from "@/lib/portfolio";

export default function PresentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio">
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <header className="site-header">
        <div className="page-width header-inner">
          <Link href="/" className="wordmark" aria-label="JLRV.dev, inicio">JLRV<span>.dev</span></Link>
          <nav className="main-nav" aria-label="Navegación principal">
            <Link href="#projects">Proyectos</Link>
            <Link href="#about">Sobre mí</Link>
            <Link href="#contact" className="nav-contact">Hablemos <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="page-width footer-inner">
          <p>© {new Date().getFullYear()} José Luis Rivera Viera</p>
          <span className="footer-note">Desarrollo de software, con propósito.</span>
          <div className="social-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de José Luis (abre en una nueva pestaña)"><Github size={19} aria-hidden="true" /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de José Luis (abre en una nueva pestaña)"><Linkedin size={19} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
