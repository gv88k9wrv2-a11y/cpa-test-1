import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Restore only explicit form-anchor visits after contact-page media settles. */
export function ContactFormAnchor() {
  const hash = useRouterState({ select: state => state.location.hash });
  useEffect(() => {
    if (hash !== "contact-form") return;
    let active = true;
    const images = Array.from(document.querySelectorAll<HTMLImageElement>("main img"));
    for (const image of images) image.loading = "eager";
    void Promise.all(images.map(image => image.decode().catch(() => undefined))).then(() => {
      requestAnimationFrame(() => {
        if (active) document.getElementById("contact-form")?.scrollIntoView({ behavior: "instant", block: "start" });
      });
    });
    return () => { active = false; };
  }, [hash]);
  return null;
}