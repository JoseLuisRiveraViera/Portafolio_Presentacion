"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Images, Play } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useSiteLocale } from "@/components/site-preferences";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  timestamp?: string;
  note?: string;
  format?: "portrait" | "landscape";
  category?: string;
}

interface ProjectModalProps {
  title: string;
  description: string;
  images: (string | ProjectImage)[];
  videoId?: string;
  triggerLabel?: string;
  triggerClassName?: string;
  children?: ReactNode;
  sourceNote?: string;
  theme?: string;
}

export function ProjectModal({ title, description, images, videoId, triggerLabel, triggerClassName = "text-link", children, sourceNote, theme }: ProjectModalProps) {
  const { t } = useSiteLocale();
  const label = triggerLabel ?? t.gallery.open;
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState<string | null>(null);
  const [view, setView] = useState<"images" | "video">("images");
  const activeThumbnail = useRef<HTMLButtonElement>(null);
  const captionId = useId();
  const gallery: ProjectImage[] = images.map((image, index) => typeof image === "string" ? { src: image, alt: `${title}, ${t.common.image} ${index + 1}` } : image);
  const categories = [...new Set(gallery.map((image) => image.category).filter((value): value is string => Boolean(value)))];
  const filteredGallery = category ? gallery.filter((image) => image.category === category) : gallery;
  const currentIndex = Math.min(activeIndex, Math.max(filteredGallery.length - 1, 0));
  const activeImage = filteredGallery[currentIndex];
  const galleryTheme = (theme ?? title).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const sourceText = sourceNote ?? (videoId ? t.gallery.historical : undefined);

  useEffect(() => {
    if (open && view === "images") {
      activeThumbnail.current?.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" });
    }
  }, [currentIndex, category, open, view]);

  function moveImage(direction: number) {
    if (filteredGallery.length === 0) return;
    setActiveIndex((currentIndex + direction + filteredGallery.length) % filteredGallery.length);
  }

  function selectCategory(nextCategory: string | null) {
    setCategory(nextCategory);
    setActiveIndex(0);
  }

  function changeOpen(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      setView("images");
      setCategory(null);
      setActiveIndex(0);
    }
  }

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>
        <button type="button" className={triggerClassName} aria-label={children != null ? label : undefined}>
          {children ?? <>{label} <ArrowUpRight size={18} aria-hidden="true" /></>}
        </button>
      </DialogTrigger>
      <DialogContent className="project-dialog" closeLabel={t.common.close}>
        <DialogHeader className="gallery-header">
          <DialogTitle className="gallery-title">{title}</DialogTitle>
          <DialogDescription className="sr-only">{description}</DialogDescription>
          <details className="gallery-details">
            <summary>{t.gallery.about}</summary>
            <p className="gallery-description">{description}</p>
          </details>
        </DialogHeader>

        {videoId && (
          <div className="gallery-tabs" aria-label={t.gallery.content}>
            <button type="button" aria-pressed={view === "images"} onClick={() => setView("images")}>
              <Images size={16} aria-hidden="true" /> {t.gallery.images}
            </button>
            <button type="button" aria-pressed={view === "video"} onClick={() => setView("video")}>
              <Play size={16} aria-hidden="true" /> {t.common.video}
            </button>
          </div>
        )}

        {view === "images" && categories.length > 0 && (
          <div className="gallery-filters" role="group" aria-label={t.gallery.filters}>
            <button type="button" aria-pressed={category === null} onClick={() => selectCategory(null)}>{t.gallery.all}</button>
            {categories.map((item) => (
              <button type="button" key={item} aria-pressed={category === item} onClick={() => selectCategory(item)}>{item}</button>
            ))}
          </div>
        )}

        {view === "images" ? (
          activeImage ? (
            <div className="gallery-body" tabIndex={0} role="region" aria-label={`${t.gallery.region} ${title}. ${t.gallery.keyboard}`} onKeyDown={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                moveImage(event.key === "ArrowLeft" ? -1 : 1);
              }
            }}>
              <figure className="gallery-poster" data-theme={galleryTheme} data-format={activeImage.format ?? "landscape"} aria-labelledby={captionId}>
                <figcaption id={captionId} className="gallery-poster-caption" aria-live="polite" aria-atomic="true">
                  {activeImage.caption ?? `${title}, ${t.common.image} ${currentIndex + 1}`}
                </figcaption>
                <div className="gallery-stage">
                  <div className="gallery-device" data-format={activeImage.format ?? "landscape"}>
                    {activeImage.format !== "portrait" && (
                      <div className="gallery-browser-bar" aria-hidden="true">
                        <span /><span /><span /><span className="gallery-browser-name">{title}</span>
                      </div>
                    )}
                    <div className="gallery-image">
                      <Image key={activeImage.src} src={activeImage.src} alt={activeImage.alt} fill unoptimized loading="eager" sizes={activeImage.format === "portrait" ? "300px" : "(max-width: 800px) 88vw, 880px"} className="object-contain gallery-frame" />
                    </div>
                  </div>
                </div>
              </figure>
              <div className="gallery-caption">
                <p className="gallery-image-note">
                  {activeImage.category && <span>{activeImage.category}</span>}
                  {activeImage.timestamp && <span>{t.common.video} {activeImage.timestamp}</span>}
                  {activeImage.note && <span>{activeImage.note}</span>}
                </p>
                <span className="gallery-count" aria-live="polite">{currentIndex + 1} / {filteredGallery.length}</span>
                <a className="gallery-original" href={activeImage.src} target="_blank" rel="noopener noreferrer" aria-label={`${t.gallery.zoomImage}: ${activeImage.caption ?? title} (${t.common.newTab})`}>
                  {t.gallery.zoom} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
              {filteredGallery.length > 1 && (
                <div className="gallery-navigation">
                  <button type="button" className="gallery-arrow" aria-label={t.gallery.previous} onClick={() => moveImage(-1)}>
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <div className="gallery-thumbnails" aria-label={t.gallery.select}>
                    {filteredGallery.map((image, index) => (
                      <button type="button" key={`${image.src}-${index}`} ref={index === currentIndex ? activeThumbnail : undefined} className="gallery-thumbnail" aria-label={`${t.gallery.view} ${image.caption ?? `${t.common.image} ${index + 1}`}`} aria-pressed={index === currentIndex} onClick={() => setActiveIndex(index)}>
                        <Image src={image.src} alt="" fill unoptimized sizes="80px" className="object-contain" />
                      </button>
                    ))}
                  </div>
                  <button type="button" className="gallery-arrow" aria-label={t.gallery.next} onClick={() => moveImage(1)}>
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p className="gallery-empty">{t.gallery.empty}</p>
          )
        ) : (
          <div className="gallery-video">
            <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} title={`${t.gallery.videoTitle} ${title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        )}

        {(sourceText || videoId) && (
          <div className="gallery-source">
            {sourceText && <p>{sourceText}</p>}
            {videoId && (
              <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
                {t.gallery.youtube} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
