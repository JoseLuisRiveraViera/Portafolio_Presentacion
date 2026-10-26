import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Focus, Github, Lightbulb, Linkedin, TrendingUp, UsersRound } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ProjectEntry } from "@/components/project-entry";
import { socialLinks } from "@/lib/portfolio";
import { getProjects } from "@/lib/portfolio-content";
import { getLocale } from "@/lib/server-locale";
import { messages } from "@/lib/messages";

const technologies = ["TypeScript", "JavaScript", "React", "Next.js", "Flutter", "Dart", "Node.js", "Express", "PHP", "Laravel", "PostgreSQL", "MySQL", "Git"];
const approachIcons = [Lightbulb, TrendingUp, UsersRound, Focus];

export default async function PortfolioPage() {
  const locale = await getLocale();
  const t = messages[locale];
  const projects = getProjects(locale);

  return (
    <>
      <section className="page-width hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">José Luis{" "}<span>Rivera Viera.</span></h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <Link href="#projects" className="primary-link">{t.hero.projects} <ArrowDownRight size={19} aria-hidden="true" /></Link>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-link neutral-link">{t.hero.connect} <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <p className="availability"><span aria-hidden="true" />{t.hero.availability}</p>
        </div>
        <figure className="hero-person">
          <div className="hero-portrait">
            <Image src="/imagenes/yo.jpg" alt="José Luis Rivera Viera" fill unoptimized priority sizes="(max-width: 760px) 240px, 340px" className="object-cover" />
          </div>
          <figcaption className="hero-location">
            <span>{t.hero.portraitCaption}</span>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label={t.hero.github}><Github size={18} aria-hidden="true" /></a>
          </figcaption>
        </figure>
      </section>

      <section id="projects" className="page-width projects-section" aria-labelledby="projects-title">
        <div className="section-heading" data-reveal="copy">
          <h2 id="projects-title">{t.projects.heading}<span>.</span></h2>
          <p>{t.projects.intro} <br />{t.projects.selection}</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => <ProjectEntry key={project.title} project={project} locale={locale} />)}
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
        <div className="page-width about-content">
          <div className="about-layout">
            <div className="about-copy" data-reveal="copy">
              <h2 id="about-title">{t.about.heading}<span>.</span></h2>
              {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="about-socials">
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-link neutral-link"><Linkedin size={18} aria-hidden="true" /> LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-link neutral-link"><Github size={18} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="about-practice" data-reveal="copy">
              <ul className="approach-list" aria-label={t.about.strengthsLabel}>
                {t.about.strengths.map((strength, index) => {
                  const Icon = approachIcons[index];
                  return <li key={strength.title}><Icon size={20} aria-hidden="true" /><div><h3>{strength.title}</h3><p>{strength.description}</p></div></li>;
                })}
              </ul>
              <h3 className="technology-heading">{t.about.technologies}</h3>
              <ul className="technology-list">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </div>
          </div>

          <section className="experience-education" aria-labelledby="background-title">
            <h3 id="background-title">{t.about.background}<span>.</span></h3>
            <div className="background-columns">
              <div className="experience-list">
                <h4 className="background-column-title">{t.about.experience}</h4>
                {t.about.jobs.map((job) => (
                  <article className="experience-item" key={job.title}>
                    <p className="experience-date">{job.date}</p>
                    <h5>{job.title}</h5>
                    <p className="experience-role">{job.role}</p>
                    <ul className="experience-points">{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </article>
                ))}
              </div>
              <div className="education-list">
                <h4 className="background-column-title">{t.about.education}</h4>
                {t.about.studies.map((study) => (
                  <article className="education-item" key={study.title}>
                    <p className="experience-date">{study.date}</p>
                    <h5>{study.title}</h5>
                    <p className="education-school">{study.school}</p>
                    <p className="education-description">{study.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="page-width contact-layout">
          <div className="contact-copy">
            <h2 id="contact-title">{t.contact.question}<br /><span>{t.contact.heading}</span></h2>
            <p>{t.contact.intro}<br />{t.contact.description}</p>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social">{t.contact.linkedin} <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
