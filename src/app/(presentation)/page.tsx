import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ProjectModal } from "@/components/project-modal"; 

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PortfolioPage() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto py-24 px-4 md:py-32 flex flex-col items-center text-center space-y-4">
          <div className="rounded-full bg-muted p-2 mb-4">
            <span className="text-xs font-medium px-2 text-muted-foreground">Disponible para proyectos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
            José Luis <span className="text-primary">Rivera Viera</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Desarrollador de Software Multiplataforma. Especialista en transformar ideas en soluciones web robustas y escalables.
          </p>
          <div className="flex gap-4 mt-6">
            <Button asChild size="lg">
              <Link href="#projects">Ver Proyectos</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="https://github.com/JoseLuisRiveraViera" target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>
      </section>

      {/* --- SOBRE MÍ --- */}
      <section id="about" className="container mx-auto py-16 px-4 md:py-24 bg-muted/50 rounded-3xl my-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre Mí</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estudiante de Ingeniería en Desarrollo y Gestión de Software con formación como TSU en Desarrollo de Software Multiplataforma. 
                Enfocado en desarrollo web full-stack, con experiencia en proyectos reales utilizando Next.js, React y MySQL. 
                Apasionado por crear soluciones eficientes y escalables en entornos empresariales.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["PHP", "JavaScript", "Next.js", "React", "Laravel", "MySQL", "PostgreSQL", "Tailwind CSS"].map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/80">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" asChild>
                  <Link href="https://www.linkedin.com/in/jose-luis-rivera-viera/" target="_blank">
                    <Linkedin className="mr-2 h-4 w-4 text-blue-600" /> LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/JoseLuisRiveraViera" target="_blank">
                    <Github className="mr-2 h-4 w-4 text-black-600" /> Github
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-background shadow-xl">
               <Image 
                src="/imagenes/yo.jpg" 
                alt="José Luis Rivera Viera" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
      </section>

      {/* --- PROYECTOS --- */}
      <section id="projects" className="container mx-auto py-16 px-4 md:py-24">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Proyectos Destacados</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* PROYECTO 1: BlueSense */}
            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 bg-muted">
                 <Image 
                  src="/imagenes/BlueSense.png" 
                  alt="BlueSense" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>BlueSense</CardTitle>
                <CardDescription>Mención Honorífica en Hackbox Hackathon</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Sistema IoT y web diseñado para monitorear la calidad del agua en ríos, ayudando a comunidades afectadas por la contaminación.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="https://bluesense.atwebpages.com/" target="_blank">Ver Proyecto</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* PROYECTO 2: Ramírez Plaza */}
            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 bg-muted">
                 <Image 
                  src="/imagenes/RamirezPlaza.png" 
                  alt="Ramírez Plaza" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Ramírez Plaza</CardTitle>
                <CardDescription>Desarrollo Web Comercial</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Plataforma digital para la promoción y localización de negocios dentro de la plaza comercial Ramírez Plaza.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="https://joseluisriveraviera.github.io/Ram-rez-Plaza/" target="_blank">Ver Proyecto</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* PROYECTO 3: Konansa */}
            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 bg-muted">
                 <Image 
                  src="/imagenes/konansa.png" 
                  alt="Konansa" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Konansa</CardTitle>
                <CardDescription>Control Financiero</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">
               Sistema integral de finanzas personales: Proyecto de estadía profesional en {' '}
                <a 
                  href="https://www.wallavi.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                >
                  Wallavi
                </a>.
              </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="https://konansa.mx/" target="_blank">Ver Proyecto</Link>
                </Button>
              </CardFooter>
            </Card>

                 {/* PROYECTO 4: Nova-Sense */}
            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 bg-muted">
                 <Image 
                  src="/imagenes/novasense-presentation.png" 
                  alt="NovaSense" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Nova-Sense</CardTitle>
                <CardDescription>Panel de Monitoreo sobre calidad del agua</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Sistema integral de Monitoreo con datos sobre calidad del agua en gráficos en tiempo real.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="https://nova-sense.vercel.app/presentation" target="_blank">Ver Proyecto</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* PROYECTO 5: Echo */}
            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 bg-muted">
                 <Image 
                  src="/imagenes/echo-presentationn.png" 
                  alt="echo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Echo</CardTitle>
                <CardDescription>Automatización de Trabajo</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Elimine el trabajo en la sombra con la automatización inteligente.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="https://echo-omega-lovat.vercel.app/" target="_blank">Ver Proyecto</Link>
                </Button>
              </CardFooter>
            </Card>

      {/* Para imagenes
            {/* --- NUEVO PROYECTO 4 (CON MODAL) --- 
            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 bg-muted">
                 {/* Reemplaza con la imagen principal del proyecto *
                 <Image 
                  src="/imagenes/novasense-presentation.png" 
                  alt="Dashboard Admin" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Nova-Sense</CardTitle>
                <CardDescription>Panel de Monitoreo sobre calidad del agua</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Sistema integral de Monitoreo con datos sobre calidad del agua en gráficos en tiempo real. Haz click para ver la galería.
                </p>
              </CardContent>
              <CardFooter>
                {/* Aquí usamos el componente ProjectModal *
                <ProjectModal 
                  title="Dashboard Administrativo"
                  description="Vista detallada de los módulos de ventas, usuarios y reportes."
                  images={[
                    "/imagenes/novasense-presentation-2.png",
                    "/imagenes/novasense-dashboard.png",
                    "/imagenes/novasense-map.png",
                    "/imagenes/novasense-alerts.png",
                    "/imagenes/novasense-statistics.png",
                    "/imagenes/novasense-chat.png"
                  ]}
                />
              </CardFooter>
            </Card>

            {/* --- NUEVO PROYECTO 5 (CON MODAL) --- *
            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 bg-muted">
                 {/* Reemplaza con la imagen principal del proyecto *
                 <Image 
                  src="/imagenes/echo-presentationn.png" 
                  alt="App Móvil" 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Delivery App</CardTitle>
                <CardDescription>Aplicación Móvil</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Prototipo de aplicación de delivery con seguimiento en tiempo real y pasarela de pagos.
                </p>
              </CardContent>
              <CardFooter>
                {/* Aquí usamos el componente ProjectModal *
                <ProjectModal 
                  title="Delivery App UI"
                  description="Recorrido por las pantallas principales: Login, Menú y Tracking."
                  images={[
                    "/imagenes/proyecto5-1.png",
                    "/imagenes/proyecto5-2.png",
                    "/imagenes/proyecto5-3.png"
                  ]}
                />
              </CardFooter>
            </Card> */}

          </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contact" className="container mx-auto py-16 px-4 md:py-24 max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ponte en Contacto</CardTitle>
              <CardDescription>
                ¿Tienes un proyecto en mente? Envíame un mensaje y hablemos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
      </section>
    </>
  );
}