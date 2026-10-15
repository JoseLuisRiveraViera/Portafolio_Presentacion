import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "José Luis Rivera Viera | Portafolio",
  description: "José Luis Rivera Viera. Desarrollo de software multiplataforma, proyectos web full-stack y soluciones con propósito. Explora mi trabajo y hablemos de tu proyecto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${manrope.variable} ${manrope.className} antialiased`}>
        <div hidden dangerouslySetInnerHTML={{ __html: "<!-- THESIS: Un portafolio de proyectos reales con composición abierta y granate, sin un catálogo de cajas. OWN-WORLD: Blanco neutro, tinta y #800000; Manrope, imágenes completas y líneas de estructura. STORY: Conocer al autor, explorar su trabajo y contactarlo. FIRST VIEWPORT: Nombre amplio a la izquierda, muestra de Konansa a la derecha y acceso directo a la galería. FORM: Documentación de ingeniería, candidato 3, semilla e43148d4; minimalismo y granate fijados por el usuario; ejecución desde código delegada. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->" }} />
        {children}
      </body>
    </html>
  );
}
