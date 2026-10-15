"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Images, Play } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  timestamp?: string;
}

interface ProjectModalProps {
  title: string;
  description: string;
  images: (string | ProjectImage)[];
  videoId?: string;
  triggerLabel?: string;
  triggerClassName?: string;
}

export function ProjectModal({ title, description, images, videoId, triggerLabel = "Ver galería", triggerClassName = "text-link" }: ProjectModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [view, setView] = useState<"images" | "video">("images");
  const gallery: ProjectImage[] = images.map((image, index) => typeof image === "string" ? { src: image, alt: `${title}, imagen ${index + 1}` } : image);
  const activeImage = gallery[activeIndex];

  function moveImage(direction: number) {
    if (gallery.length === 0) return;
    setActiveIndex((index) => (index + direction + gallery.length) % gallery.length);
  }

  return (
    <Dialog onOpenChange={(open) => { if (!open) { setView("images"); setActiveIndex(0); } }}>
      <DialogTrigger asChild>
        <button type="button" className={triggerClassName}>
          {triggerLabel} <ArrowUpRight size={18} aria-hidden="true" />
        </button>
      </DialogTrigger>
      <DialogContent className="project-dialog">
        <DialogHeader className="gallery-header">
          <DialogTitle className="gallery-title">{title}</DialogTitle>
          <DialogDescription className="gallery-description">{description}</DialogDescription>
        </DialogHeader>

        {videoId && (
          <div className="gallery-tabs" aria-label="Contenido del proyecto">
            <button type="button" aria-pressed={view === "images"} onClick={() => setView("images")}>
              <Images size={16} aria-hidden="true" /> Capturas
            </button>
            <button type="button" aria-pressed={view === "video"} onClick={() => setView("video")}>
              <Play size={16} aria-hidden="true" /> Video
            </button>
          </div>
        )}

        {view === "images" ? (
          activeImage ? (
            <div className="gallery-body" tabIndex={0} role="region" aria-label={`Capturas de ${title}. Usa las flechas izquierda y derecha para navegar.`} onKeyDown={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                moveImage(event.key === "ArrowLeft" ? -1 : 1);
              }
            }}>
              <figure>
                <div className="gallery-image">
                  <Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 800px) 94vw, 1000px" className="object-contain" />
                </div>
                <figcaption className="gallery-caption" aria-live="polite" aria-atomic="true">
                  <span>
                    {activeImage.caption ?? `${title}, imagen ${activeIndex + 1}`}
                    {activeImage.timestamp && <span className="capture-time"> · Video {activeImage.timestamp}</span>}
                  </span>
                  <span className="gallery-count">{activeIndex + 1} / {gallery.length}</span>
                </figcaption>
              </figure>
              {gallery.length > 1 && (
                <div className="gallery-navigation">
                  <button type="button" className="gallery-arrow" aria-label="Imagen anterior" onClick={() => moveImage(-1)}>
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <div className="gallery-thumbnails" aria-label="Seleccionar captura">
                    {gallery.map((image, index) => (
                      <button type="button" key={image.src} className="gallery-thumbnail" aria-label={`Ver ${image.caption ?? `imagen ${index + 1}`}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)}>
                        <Image src={image.src} alt="" fill sizes="90px" className="object-cover" />
                      </button>
                    ))}
                  </div>
                  <button type="button" className="gallery-arrow" aria-label="Imagen siguiente" onClick={() => moveImage(1)}>
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p className="gallery-empty">Todavía no hay imágenes para este proyecto.</p>
          )
        ) : (
          <div className="gallery-video">
            <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} title={`Video de presentación de ${title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        )}

        {videoId && (
          <div className="gallery-source">
            <p>Capturas del video original y de la página conservada.</p>
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
              Ver en YouTube <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
