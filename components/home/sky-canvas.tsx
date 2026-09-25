"use client";

import { useEffect, useRef, type RefObject } from "react";
import s from "./home.module.css";

type Bird = {
  x: number;
  y: number;
  size: number;
  speed: number;
  dir: number;
  flap: number;
  flapSpeed: number;
  glideFor: number;
  bob: number;
  alpha: number;
};

type SkyCanvasProps = {
  watch: RefObject<HTMLDivElement | null>;
  enabled: boolean;
};

const rand = (a: number, b: number) => a + Math.random() * (b - a);

export function SkyCanvas({ watch, enabled }: SkyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = watch.current;
    if (!canvas || !stage || !enabled) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let birds: Bird[] = [];
    let nextFlockAt = 0;
    let running = true;
    let last = performance.now();
    let clock = 0;
    let frame = 0;

    const spawnFlock = (startX?: number) => {
      const depth = rand(0.45, 1);
      const count = Math.round(rand(3, 8));
      const leaderY = rand(h * 0.07, h * 0.36);
      const size = rand(9, 15) * depth * Math.min(1.25, Math.max(0.7, w / 1400));
      const speed = rand(55, 95) * depth;
      const gap = size * rand(2.6, 3.6);
      const dir = Math.random() < 0.7 ? 1 : -1;
      const x0 = startX ?? (dir === 1 ? -60 : w + 60);

      for (let i = 0; i < count; i++) {
        const rank = Math.ceil(i / 2);
        const side = i % 2 === 0 ? 1 : -1;
        birds.push({
          x: x0 - dir * rank * gap + rand(-gap * 0.3, gap * 0.3),
          y: leaderY + side * rank * gap * 0.55 + rand(-gap * 0.25, gap * 0.25),
          size: size * rand(0.85, 1.1),
          speed: speed * rand(0.95, 1.05),
          dir,
          flap: rand(0, Math.PI * 2),
          flapSpeed: rand(7, 10),
          glideFor: 0,
          bob: rand(0, Math.PI * 2),
          alpha: 0.45 + depth * 0.5,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBird = (b: Bird) => {
      const size = b.size;
      const lift = Math.sin(b.flap) * (b.glideFor > 0 ? 0.15 : 1);
      ctx.globalAlpha = b.alpha;
      ctx.lineWidth = Math.max(1, size * 0.16);
      ctx.beginPath();
      ctx.moveTo(b.x - size, b.y - lift * size * 0.6);
      ctx.quadraticCurveTo(b.x - size * 0.45, b.y - size * 0.12 - lift * size * 0.25, b.x, b.y);
      ctx.quadraticCurveTo(b.x + size * 0.45, b.y - size * 0.12 - lift * size * 0.25, b.x + size, b.y - lift * size * 0.6);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(b.x, b.y + size * 0.04, size * 0.16, size * 0.09, 0, 0, Math.PI * 2);
      ctx.fill();
    };

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      clock += dt;
      ctx.clearRect(0, 0, w, h);

      if (clock > nextFlockAt) {
        spawnFlock();
        nextFlockAt = clock + rand(7, 14);
      }

      ctx.strokeStyle = "rgb(21, 72, 67)";
      ctx.fillStyle = "rgb(21, 72, 67)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      birds = birds.filter((b) => b.x > -120 && b.x < w + 120);
      for (const b of birds) {
        b.x += b.dir * b.speed * dt;
        b.bob += dt * 0.9;
        b.y += Math.sin(b.bob) * 6 * dt;
        if (b.glideFor > 0) {
          b.glideFor -= dt;
          b.flap += dt * 1.5;
        } else {
          b.flap += dt * b.flapSpeed;
          if (Math.random() < dt * 0.25) b.glideFor = rand(0.6, 1.6);
        }
        drawBird(b);
      }
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(tick);
    };

    const setRunning = (on: boolean) => {
      if (on === running) return;
      running = on;
      if (on) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    resize();
    spawnFlock(w * 0.62);
    nextFlockAt = rand(4, 7);
    window.addEventListener("resize", resize);
    const observer = new IntersectionObserver(([entry]) => setRunning(entry?.isIntersecting ?? false));
    observer.observe(stage);
    const onVisibility = () => setRunning(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, [enabled, watch]);

  return <canvas ref={canvasRef} className={s["stage__sky"]} aria-hidden="true" />;
}
