"use client";

import { useEffect } from "react";

const interactiveSelector = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "summary",
  '[role="button"]',
  '[role="link"]',
  '[contenteditable]:not([contenteditable="false"])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function PortfolioMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const preference =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ).filter((element) => !element.closest(interactiveSelector));
    const revealed = new Set<Element>();
    const animations = new Map<Element, Animation>();
    let observer: IntersectionObserver | null = null;
    let frame: number | null = null;
    let disposed = false;

    const canAnimate = () =>
      !disposed &&
      !preference?.matches &&
      document.visibilityState !== "hidden";

    const cancelAnimations = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };

    const updateProgress = () => {
      frame = null;
      if (disposed || document.visibilityState === "hidden") return;

      const distance = root.scrollHeight - window.innerHeight;
      const progress =
        distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      root.style.setProperty("--reading-progress", String(progress));
    };

    const requestProgress = () => {
      if (frame === null && !disposed && document.visibilityState !== "hidden") {
        frame = window.requestAnimationFrame(updateProgress);
      }
    };

    const observeTargets = () => {
      observer?.disconnect();
      observer = null;

      if (
        !canAnimate() ||
        typeof window.IntersectionObserver !== "function" ||
        typeof Element.prototype.animate !== "function"
      ) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          if (!canAnimate()) return;

          entries.forEach((entry) => {
            const activeAnimation = animations.get(entry.target);
            if (!entry.isIntersecting) {
              activeAnimation?.pause();
              return;
            }

            if (revealed.has(entry.target)) {
              if (activeAnimation?.playState === "paused") activeAnimation.play();
              return;
            }

            const element = entry.target as HTMLElement;
            revealed.add(element);

            const requestedDelay = Number(element.dataset.revealDelay ?? 0);
            const delay = Number.isFinite(requestedDelay)
              ? Math.min(140, Math.max(0, requestedDelay))
              : 0;
            const kind = element.dataset.reveal;
            const keyframes: Keyframe[] =
              kind === "media"
                ? [
                    {
                      opacity: 0.8,
                      transform: "translateY(4px)",
                      clipPath: "inset(0 0 10% 0)",
                    },
                    {
                      opacity: 1,
                      transform: "translateY(0)",
                      clipPath: "inset(0 0 0% 0)",
                    },
                  ]
                : [
                    {
                      opacity: kind === "copy" ? 0.76 : 0.82,
                      transform:
                        kind === "copy" ? "translateY(6px)" : "translateY(8px)",
                    },
                    { opacity: 1, transform: "translateY(0)" },
                  ];
            const duration = kind === "media" ? 620 : kind === "copy" ? 460 : 500;

            // Base CSS stays visible; only this temporary effect changes it.
            try {
              const animation = element.animate(
                keyframes,
                {
                  duration,
                  delay,
                  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                  fill: "backwards",
                },
              );

              animations.set(element, animation);
              const releaseAnimation = () => {
                animations.delete(element);
                observer?.unobserve(element);
              };
              animation.onfinish = releaseAnimation;
              animation.oncancel = releaseAnimation;
            } catch {
              // Partial Web Animations support must leave the content readable.
              observer?.unobserve(element);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
      );

      targets.forEach((element) => {
        if (!revealed.has(element)) observer?.observe(element);
      });
    };

    const handleMotionChange = () => {
      if (!canAnimate()) cancelAnimations();
      observeTargets();
    };

    const handleVisibilityChange = () => {
      handleMotionChange();
      if (document.visibilityState === "hidden") {
        if (frame !== null) window.cancelAnimationFrame(frame);
        frame = null;
      } else {
        requestProgress();
      }
    };

    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (typeof preference?.addEventListener === "function") {
      preference.addEventListener("change", handleMotionChange);
    } else {
      preference?.addListener(handleMotionChange);
    }

    requestProgress();
    observeTargets();

    return () => {
      disposed = true;
      observer?.disconnect();
      cancelAnimations();
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (typeof preference?.removeEventListener === "function") {
        preference.removeEventListener("change", handleMotionChange);
      } else {
        preference?.removeListener(handleMotionChange);
      }

      root.style.removeProperty("--reading-progress");
    };
  }, []);

  return null;
}
