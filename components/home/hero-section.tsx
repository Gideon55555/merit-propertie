import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { AnniversaryEmblem } from "./anniversary-emblem";
import { GoldLink } from "./gold-link";
import s from "./home.module.css";

export function HeroSection() {
  return (
    <section className={s.hero} id="hero">
      <div className={s["hero__inner"]}>
        <div className={s["hero__content"]}>
          <p className={[s.pill, s.reveal].join(" ")} style={{ "--d": ".15s" } as CSSProperties}>
            <span className={s["pill__dot"]} />
            Anniversary Week &nbsp;·&nbsp; Celebrating One Year
          </p>

          <h1 className={s["hero__title"]}>
            <span className={s.line}>
              <span className={s["reveal-up"]} style={{ "--d": ".3s" } as CSSProperties}>
                One Year,
              </span>
            </span>
            <span className={s.line}>
              <span className={s["reveal-up"]} style={{ "--d": ".48s" } as CSSProperties}>
                <em className={s.shimmer}>One Vision</em>
              </span>
            </span>
          </h1>

          <div className={[s["hero__ornament"], s.reveal].join(" ")} style={{ "--d": ".8s" } as CSSProperties} aria-hidden="true">
            <span />
            <b />
            <span />
          </div>

          <div className={[s["hero__ctas"], s.reveal].join(" ")} style={{ "--d": ".95s" } as CSSProperties}>
            <GoldLink href="/properties">
              Explore Properties
              <ArrowRight strokeWidth={1.8} aria-hidden="true" />
            </GoldLink>
          </div>
        </div>

        <AnniversaryEmblem />
      </div>

      <a href="#sold" className={[s.mouse, s.reveal].join(" ")} style={{ "--d": "1.3s" } as CSSProperties} aria-label="Scroll to next section">
        <span className={s["mouse__body"]}>
          <span className={s["mouse__wheel"]} />
        </span>
        <span className={s["mouse__chevrons"]}>
          <i />
          <i />
        </span>
        <span className={s["mouse__text"]}>Scroll</span>
      </a>
    </section>
  );
}
