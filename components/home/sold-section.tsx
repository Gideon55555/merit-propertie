"use client";

import { useEffect, useRef, useState } from "react";
import s from "./home.module.css";

const TARGET = 800;
const DURATION = 3200;
const TOWERS: [number, number][] = [
  [5, 9],
  [6, 16],
  [8, 26],
  [4, 20],
  [9, 24],
  [6, 12],
  [6, 14],
];
const SHOP_FLOORS = 2;
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

type Unit = {
  t: number;
  c: number;
  r: number;
  shop: boolean;
  litAt: number;
  phase: number;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3.2);

function buildUnits() {
  const units: Unit[] = [];
  TOWERS.forEach(([cols, rows], t) => {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        units.push({ t, c, r, shop: r < SHOP_FLOORS, litAt: Infinity, phase: Math.random() * 1000 });
      }
    }
  });
  const order = units.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = order[i];
    const swap = order[j];
    if (current === undefined || swap === undefined) continue;
    order[i] = swap;
    order[j] = current;
  }
  return { units, order };
}

type SoldSectionProps = {
  reduceMotion: boolean;
};

export function SoldSection({ reduceMotion }: SoldSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const unitsLabelRef = useRef<HTMLSpanElement>(null);
  const stripRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [inView, setInView] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const label = unitsLabelRef.current;
    if (!section || !canvas || !label) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { units, order } = buildUnits();
    let w = 0;
    let h = 0;
    let cell = 0;
    let towerX: number[] = [];
    let baseY = 0;
    let startAt = 0;
    let running = false;
    let finished = false;
    let frame = 0;

    const setReels = (value: number) => {
      const places = [value / 100, (value / 10) % 10, value % 10];
      stripRefs.current.forEach((strip, i) => {
        const place = places[i] ?? 0;
        if (strip) strip.style.transform = `translateY(${(-place / 11) * 100}%)`;
      });
    };

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const gapCells = 1.4;
      const totalCols = TOWERS.reduce((sum, [cols]) => sum + cols, 0) + gapCells * (TOWERS.length - 1);
      const maxRows = Math.max(...TOWERS.map(([, rows]) => rows)) + 3;
      cell = Math.min((w * 0.86) / totalCols, (h * 0.74) / maxRows);
      baseY = h * 0.9;
      let x = (w - totalCols * cell) / 2;
      towerX = TOWERS.map(([cols]) => {
        const x0 = x;
        x += (cols + gapCells) * cell;
        return x0;
      });
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      const pad = Math.max(1, cell * 0.16);

      ctx.strokeStyle = "rgba(191, 177, 131, 0.6)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w * 0.05, baseY + 0.5);
      ctx.lineTo(w * 0.95, baseY + 0.5);
      ctx.stroke();

      TOWERS.forEach(([cols, rows], t) => {
        const x = towerX[t] ?? 0;
        const top = baseY - rows * cell;
        ctx.strokeStyle = "rgba(191, 177, 131, 0.35)";
        ctx.strokeRect(x - pad + 0.5, top - pad + 0.5, cols * cell + pad * 2 - 1, rows * cell + pad - 1);
        ctx.fillStyle = "rgba(191, 177, 131, 0.6)";
        ctx.fillRect(x - pad, top - pad - 2, cols * cell + pad * 2, 2);
      });

      for (const unit of units) {
        const x = (towerX[unit.t] ?? 0) + unit.c * cell + pad / 2;
        const y = baseY - (unit.r + 1) * cell + pad / 2;
        const size = cell - pad;
        const age = now - unit.litAt;

        if (age < 0) {
          ctx.fillStyle = "rgba(191, 177, 131, 0.15)";
          ctx.fillRect(x, y, size, size);
          continue;
        }

        if (age < 450) {
          const k = age / 450;
          ctx.fillStyle = "#fff";
          ctx.globalAlpha = 1 - k * 0.15;
          const grow = (1 - k) * cell * 0.5;
          ctx.fillRect(x - grow / 2, y - grow / 2, size + grow, size + grow);
          ctx.globalAlpha = 1;
          ctx.fillStyle = `rgba(191, 177, 131, ${k})`;
          ctx.fillRect(x, y, size, size);
        } else {
          const twinkle = finished && Math.sin(now * 0.0017 + unit.phase) > 0.994;
          ctx.fillStyle = twinkle ? "#fff" : unit.shop ? "#bfb183" : "rgba(191, 177, 131, 0.88)";
          ctx.fillRect(x, y, size, size);
        }
      }
    };

    const tick = (now: number) => {
      const t = Math.min(1, (now - startAt) / DURATION);
      const eased = easeOut(t);
      const value = TARGET * eased;
      const lit = Math.floor(units.length * eased);

      for (let i = 0; i < lit; i++) {
        const unit = units[order[i] ?? 0];
        if (unit && unit.litAt === Infinity) unit.litAt = now;
      }

      setReels(t < 1 ? value : TARGET);
      label.textContent = Math.floor(value).toString();
      draw(now);

      if (t >= 1 && !finished) {
        finished = true;
        label.textContent = `${units.length}`;
        setDone(true);
      }
      if (running) frame = requestAnimationFrame(tick);
    };

    const finishInstantly = () => {
      units.forEach((unit) => {
        unit.litAt = -1000;
      });
      finished = true;
      setReels(TARGET);
      label.textContent = `${units.length}`;
      setInView(true);
      setDone(true);
      draw(performance.now());
    };

    layout();
    setReels(0);
    draw(performance.now());

    const onResize = () => {
      layout();
      if (!running) draw(performance.now());
    };
    window.addEventListener("resize", onResize);

    const startObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        startObserver.disconnect();
        if (reduceMotion) {
          finishInstantly();
          return;
        }
        setInView(true);
        window.setTimeout(() => {
          startAt = performance.now();
          running = true;
          frame = requestAnimationFrame(tick);
        }, 700);
      },
      { threshold: 0.4 },
    );
    startObserver.observe(section);

    const pauseObserver = new IntersectionObserver(([entry]) => {
      if (!startAt) return;
      const on = entry?.isIntersecting ?? false;
      if (on && !running) {
        running = true;
        frame = requestAnimationFrame(tick);
      } else if (!on) {
        running = false;
      }
    });
    pauseObserver.observe(section);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      startObserver.disconnect();
      pauseObserver.disconnect();
    };
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className={[s.sold, inView ? s["in-view"] : "", done ? s["is-done"] : ""].filter(Boolean).join(" ")}
      id="sold"
      aria-labelledby="soldTitle"
    >
      <div className={s["sold__inner"]}>
        <div className={s["sold__copy"]}>
          <p className={[s["welcome__eyebrow"], s["in-reveal"]].join(" ")}>
            <span />
            A Year of Trust
          </p>

          <div className={[s["sold__count"], s["in-reveal"]].join(" ")} style={{ ["--d" as string]: ".12s" }} role="img" aria-label="800 plus">
            {Array.from({ length: 3 }, (_, reel) => (
              <span key={reel} className={s.reel} aria-hidden="true">
                <span
                  className={s["reel__strip"]}
                  ref={(node) => {
                    stripRefs.current[reel] = node;
                  }}
                >
                  {DIGITS.map((digit, index) => (
                    <b key={`${reel}-${index}`}>{digit}</b>
                  ))}
                </span>
              </span>
            ))}
            <span className={s["sold__plus"]} aria-hidden="true">
              +
            </span>
          </div>

          <h2 className={[s["sold__title"], s["in-reveal"]].join(" ")} style={{ ["--d" as string]: ".24s" }} id="soldTitle">
            Shops &amp; Apartments <em>Sold</em>
          </h2>
          <p className={[s["sold__sub"], s["in-reveal"]].join(" ")} style={{ ["--d" as string]: ".36s" }}>
            Every light in this skyline is a family or a business that chose Merit.
          </p>
        </div>

        <div className={[s["sold__visual"], s["in-reveal"]].join(" ")} style={{ ["--d" as string]: ".3s" }}>
          <canvas ref={canvasRef} className={s["sold__canvas"]} aria-hidden="true" />

          <div className={s.stamp} aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="stampRing" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <circle cx="100" cy="100" r="94" className={s["stamp__outer"]} />
              <circle cx="100" cy="100" r="62" className={s["stamp__inner"]} />
              <text className={s["stamp__ring"]}>
                <textPath href="#stampRing" textLength="480" lengthAdjust="spacing">
                  MERIT PROPERTIES · 800+ UNITS · ONE YEAR ·
                </textPath>
              </text>
              <text className={s["stamp__word"]} x="100" y="112" textAnchor="middle">
                Sold
              </text>
            </svg>
          </div>

          <p className={s["sold__meter"]}>
            <span className={s["sold__meter-dot"]} />
            <span ref={unitsLabelRef} id="soldUnits">
              0
            </span>
            &nbsp;units sold
          </p>
        </div>
      </div>
    </section>
  );
}
