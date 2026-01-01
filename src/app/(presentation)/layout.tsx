import Link from "next/link";
import { Code2, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner"; // <--- CAMBIO AQUÍ: Importamos desde "sonner"

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ... Navbar igual ... */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Code2 className="h-6 w-6" />
            <span>JLRV.dev</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-primary">Sobre mí</Link>
            <Link href="#projects" className="transition-colors hover:text-primary">Proyectos</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contacto</Link>
          </nav>
          <Button asChild variant="outline" size="sm">
            <Link href="#contact">Contáctame</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* ... Footer igual ... */}
      <footer className="border-t py-6 md:py-0 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; 2025 José Luis Rivera Viera. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/JoseLuisRiveraViera" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/jose-luis-rivera-viera/" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>

      <Toaster /> {/* <--- Este componente ahora usa Sonner internamente */}
    </div>
  );
}