import Image from "next/image";
import { ArrowUpRight, Award, Images } from "lucide-react";
import { ProjectModal } from "@/components/project-modal";
import type { PortfolioProject } from "@/lib/portfolio";
import type { Locale } from "@/lib/locale";
import { messages } from "@/lib/messages";

function ProjectCover({ project }: { project: PortfolioProject }) {
  return (
    <>
      {project.screens?.length ? (
        <span className={`device-composition device-composition--${project.tone}`} data-screens={project.screens.length} aria-hidden="true">
          {project.screens.map((screen) => (
            <span className="device-frame" key={screen}>
              <span className="device-screen">
                <Image src={screen} alt="" fill unoptimized loading="eager" sizes="(max-width: 760px) 150px, 200px" />
              </span>
            </span>
          ))}
        </span>
      ) : (
        <Image src={project.image} alt={project.alt} fill unoptimized loading="eager" sizes="(max-width: 760px) 90vw, 600px" className="object-contain" />
      )}
      <span className="project-image-arrow" aria-hidden="true">
        {project.images?.length ? <Images size={19} /> : <ArrowUpRight size={20} />}
      </span>
    </>
  );
}

export function ProjectEntry({ project, locale }: { project: PortfolioProject; locale: Locale }) {
  const t = messages[locale];
  const gallery = project.images?.length ? {
    title: project.title,
    description: project.description,
    images: project.images,
    videoId: project.videoId,
    sourceNote: project.sourceNote,
    theme: project.title.toLowerCase(),
  } : null;

  return (
    <article className="project">
      <div className="project-media" data-reveal="media">
        {gallery ? (
          <ProjectModal {...gallery} triggerLabel={`${t.projects.explore} ${project.title}`} triggerClassName="project-image">
            <ProjectCover project={project} />
          </ProjectModal>
        ) : (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-image" aria-label={`${t.projects.view} ${project.title} (${t.common.newTab})`}>
            <ProjectCover project={project} />
          </a>
        )}
      </div>
      <div className="project-title-row"><h3>{project.title}</h3><span className="project-category">{project.category}</span></div>
      <p className="project-description">{project.description}</p>
      {project.recognition && <p className="project-recognition"><Award size={16} aria-hidden="true" />{project.recognition}</p>}
      {project.stack && <p className="project-stack">{project.stack.join(" · ")}</p>}
      <div className="project-actions">
        {gallery && <ProjectModal {...gallery} triggerLabel={project.videoId ? t.projects.galleryVideo : t.projects.gallery} />}
        {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className={`text-link ${gallery ? "neutral-link" : ""}`} aria-label={`${t.projects.site} ${project.title} (${t.common.newTab})`}>{t.projects.visit} <ArrowUpRight size={17} aria-hidden="true" /></a>}
      </div>
    </article>
  );
}
