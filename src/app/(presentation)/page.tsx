import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Award, Github, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ProjectModal } from "@/components/project-modal";
import { konansaImages, konansaVideoId, projects, socialLinks } from "@/lib/portfolio";

const technologies = ["PHP", "JavaScript", "Next.js", "React", "Laravel", "MySQL", "PostgreSQL", "Tailwind CSS"];

export default function PortfolioPage() {
  return (
    <>
      <section className="page-width hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">José Luis{" "}<span>Rivera Viera.</span></h1>
          <p className="hero-role">Desarrollador de software multiplataforma.</p>
          <p className="hero-description">Transformo ideas en soluciones web robustas y escalables, con atención a lo que realmente importa.</p>
          <div className="hero-actions">
            <Link href="#projects" className="primary-link">Ver proyectos <ArrowDownRight size={19} aria-hidden="true" /></Link>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-link neutral-link"><Github size={18} aria-hidden="true" /> GitHub</a>
          </div>
          <p className="availability"><span aria-hidden="true" />Disponible para proyectos</p>
        </div>
        <figure className="hero-showcase">
          <div className="hero-preview">
            <Image src="/imagenes/konansa/producto-v2.webp" alt="Presentación visual de Konansa con su interfaz móvil en modo claro y oscuro y su asistente financiero" fill priority sizes="(max-width: 760px) 90vw, 560px" className="object-contain" />
          </div>
          <figcaption className="showcase-footer">
            <div className="showcase-heading"><h2>Konansa</h2><span>Finanzas personales</span></div>
            <ProjectModal title="Konansa" description="Un recorrido visual por el sistema de finanzas personales desarrollado durante mi estadía profesional en Wallavi." images={konansaImages} videoId={konansaVideoId} triggerLabel="Explorar Konansa" triggerClassName="showcase-link" />
          </figcaption>
        </figure>
      </section>

      <section id="projects" className="page-width projects-section" aria-labelledby="projects-title">
        <div className="section-heading" data-reveal="copy">
          <h2 id="projects-title">Proyectos seleccionados<span>.</span></h2>
          <p>Soluciones web, datos y automatización.<br />Una mirada a lo que he construido.</p>
        </div>

        <article className="featured-project">
          <div className="featured-image" data-reveal="media">
            <Image src="/imagenes/konansa/panel-v2.webp" alt="Composición visual del panel financiero de Konansa en laptop, tablet y teléfono" fill sizes="(max-width: 760px) 90vw, 650px" className="object-contain" />
          </div>
          <div className="featured-copy">
            <h3>Konansa</h3>
            <p className="project-category">Estadía profesional · Control financiero</p>
            <p className="project-description">Sistema integral de finanzas personales, desarrollado como proyecto de estadía profesional en <a href="https://www.wallavi.com/" target="_blank" rel="noopener noreferrer">Wallavi</a>.</p>
            <p className="archive-note">La web ya no está disponible. Explora el proyecto a través de sus presentaciones visuales y del video original.</p>
            <ProjectModal title="Konansa" description="Un recorrido visual por el sistema de finanzas personales desarrollado durante mi estadía profesional en Wallavi." images={konansaImages} videoId={konansaVideoId} triggerLabel="Ver galería y video" />
          </div>
        </article>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-image" aria-label={`Ver ${project.title} (abre en una nueva pestaña)`}>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 90vw, 560px" className="object-contain" />
                <span className="project-image-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
              </a>
              <div className="project-title-row"><h3>{project.title}</h3><span className="project-category">{project.category}</span></div>
              <p className="project-description">{project.description}</p>
              {project.recognition && <p className="project-recognition"><Award size={16} aria-hidden="true" />{project.recognition}</p>}
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Ver proyecto ${project.title} (abre en una nueva pestaña)`}>Ver proyecto <ArrowUpRight size={17} aria-hidden="true" /></a>
            </article>
          ))}
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

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="page-width about-layout">
          <figure className="portrait">
            <div className="portrait-image" data-reveal="media"><Image src="/imagenes/yo.jpg" alt="José Luis Rivera Viera" fill sizes="(max-width: 760px) 280px, 320px" className="object-cover" /></div>
            <figcaption>José Luis Rivera Viera<span>Desarrollador de software</span></figcaption>
          </figure>
          <div className="about-copy" data-reveal="copy">
            <h2 id="about-title">Un poco sobre mí<span>.</span></h2>
            <p>Estudiante de Ingeniería en Desarrollo y Gestión de Software, con formación como TSU en Desarrollo de Software Multiplataforma.</p>
            <p>Me enfoco en desarrollo web full-stack, con experiencia en proyectos reales utilizando Next.js, React y MySQL. Me apasiona crear soluciones eficientes y escalables en entornos empresariales.</p>
            <h3 className="technology-heading">Tecnologías con las que trabajo</h3>
            <ul className="technology-list">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            <div className="about-socials">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-link neutral-link"><Linkedin size={18} aria-hidden="true" /> LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-link neutral-link"><Github size={18} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="page-width contact-layout">
          <div className="contact-copy">
            <h2 id="contact-title">¿Tienes una idea?<br /><span>Hablemos.</span></h2>
            <p>Cuéntame sobre tu proyecto.<br />Me gustaría conocerlo y darle forma contigo.</p>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social">También me encuentras en LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
