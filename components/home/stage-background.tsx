"use client";

import type { RefObject } from "react";
import Image from "next/image";
import s from "./home.module.css";
import { SkyCanvas } from "./sky-canvas";

type StageBackgroundProps = {
  mediaRef: RefObject<HTMLDivElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  motionEnabled: boolean;
};

export function StageBackground({ mediaRef, stageRef, motionEnabled }: StageBackgroundProps) {
  return (
    <div className={s["stage__bg"]} aria-hidden="true">
      <div className={s["stage__zoom"]}>
        <div className={s["stage__media"]} ref={mediaRef}>
          <Image
            src="/images/anniversary-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={80}
            className={s["stage__image"]}
          />
        </div>
      </div>
      <div className={s["stage__light"]} />
      <div className={s["stage__shade"]} />
      <SkyCanvas watch={stageRef} enabled={motionEnabled} />
      <div className={s["stage__veil"]} />
      <div className={s["stage__grain"]} />
      <div className={s.flare} aria-hidden="true">
        <span className={s["flare__wash"]} />
        <span className={s["flare__sun"]} />
        <span className={s["flare__streak"]} />
        <span className={[s["flare__streak"], s["flare__streak--soft"]].join(" ")} />
        <span className={s["flare__ghost"]} style={{ ["--x" as string]: "70%", ["--y" as string]: "29%", ["--s" as string]: "70px" }} />
        <span className={s["flare__ghost"]} style={{ ["--x" as string]: "60%", ["--y" as string]: "40%", ["--s" as string]: "150px" }} />
        <span
          className={[s["flare__ghost"], s["flare__ghost--ring"]].join(" ")}
          style={{ ["--x" as string]: "45%", ["--y" as string]: "56%", ["--s" as string]: "46px" }}
        />
        <span className={s["flare__ghost"]} style={{ ["--x" as string]: "32%", ["--y" as string]: "70%", ["--s" as string]: "220px" }} />
      </div>
    </div>
  );
}
