"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { HeroSection } from "./hero-section";
import { Marquee } from "./marquee";
import { SoldSection } from "./sold-section";
import { StageBackground } from "./stage-background";
import { WelcomeSection } from "./welcome-section";
import s from "./home.module.css";

export function AnniversaryHome() {
  const stageRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    let active = true;
    const start = () => {
      if (active) setLoaded(true);
    };
    // Kick off the morning flare as soon as the hero mounts.
    const raf = window.requestAnimationFrame(start);
    const image = new Image();
    image.src = "/images/anniversary-hero.webp";
    return () => {
      active = false;
      window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
      stageRef.current?.style.setProperty("--p", progress.toFixed(4));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const media = mediaRef.current;
    if (!media) return;
    const onMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      media.style.setProperty("--mx", `${(-x * 3).toFixed(2)}%`);
      media.style.setProperty("--my", `${(-y * 3).toFixed(2)}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion]);

  return (
    <div className={[s.root, loaded ? s["is-loaded"] : ""].filter(Boolean).join(" ")}>
      <div ref={stageRef} className={s.stage}>
        <StageBackground mediaRef={mediaRef} stageRef={stageRef} motionEnabled={!reduceMotion} />
        <HeroSection />
        <SoldSection reduceMotion={reduceMotion} />
        <WelcomeSection />
      </div>
      <Marquee />
    </div>
  );
}
