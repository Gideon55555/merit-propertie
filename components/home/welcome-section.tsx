"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GoldLink } from "./gold-link";
import s from "./home.module.css";

export function WelcomeSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={[s.welcome, inView ? s["in-view"] : ""].filter(Boolean).join(" ")} id="welcome">
      <div className={s["welcome__inner"]}>
        <p className={[s["welcome__eyebrow"], s["in-reveal"]].join(" ")}>
          <span />
          Welcome to Merit Real Estate Industry
          <span />
        </p>
        <h2 className={[s["welcome__title"], s["in-reveal"]].join(" ")} style={{ ["--d" as string]: ".12s" }}>
          Small Footprint,
          <br />
          <em>Grand Living.</em>
        </h2>
        <p className={[s["welcome__sub"], s["in-reveal"]].join(" ")} style={{ ["--d" as string]: ".28s" }}>
          Modern Sophistication
        </p>
        <div className={[s["welcome__cta"], s["in-reveal"]].join(" ")} style={{ ["--d" as string]: ".42s" }}>
          <GoldLink href="/properties">
            Discover Our Properties
            <ArrowRight strokeWidth={1.8} aria-hidden="true" />
          </GoldLink>
        </div>
      </div>
    </section>
  );
}
