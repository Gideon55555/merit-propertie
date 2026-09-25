import type { CSSProperties } from "react";
import s from "./home.module.css";

export function AnniversaryEmblem() {
  return (
    <aside className={[ s["emblem"], s["reveal-scale"] ].join(" ")} style={{ "--d": ".6s" } as CSSProperties} aria-label="Merit first anniversary">
                <div className={s["emblem__halo"]}></div>
                <svg className={s["emblem__svg"]} viewBox="0 0 400 400" aria-hidden="true">
                  <defs>
                    <path id="textRing" d="M200,200 m-168,0 a168,168 0 1,1 336,0 a168,168 0 1,1 -336,0" />
                  </defs>

                  <g className={s["emblem__spin"]}>
                    <text className={s["emblem__ringtext"]}>
                      <textPath href="#textRing" textLength="1040" lengthAdjust="spacing">MERIT PROPERTIES · FIRST ANNIVERSARY · ONE YEAR · ONE VISION ·</textPath>
                    </text>
                  </g>

                  <circle cx="200" cy="200" r="148" fill="none" stroke="#bfb183" strokeWidth="1" opacity=".55" />
                  <g className={s["emblem__spin-rev"]}>
                    <circle cx="200" cy="200" r="140" fill="none" stroke="#bfb183" strokeWidth="6" strokeDasharray="1 7.8" opacity=".5" />
                  </g>
                  <circle cx="200" cy="200" r="128" fill="none" stroke="#bfb183" strokeWidth="1.4" />

                  <g className={s["emblem__orbit"]}>
                    <circle cx="200" cy="52" r="3.2" fill="#bfb183" />
                  </g>
                </svg>

                <span className={s["emblem__shock"]}></span>
                <span className={[ s["emblem__shock"], s["emblem__shock--late"] ].join(" ")}></span>

                <div className={s["emblem__core"]}>
                  <span className={s["emblem__flash"]}></span>
                  <span className={s["emblem__beam"]}></span>
                  <svg className={s["emblem__build"]} viewBox="0 0 200 200" aria-hidden="true">
                    <g className={s["b-structure"]}>
                      <path className={s["b-ground"]} d="M30 150H170" pathLength="1" />
                      <path className={s["b-line"]} style={{ "--i": 0 } as CSSProperties} d="M52 150V94" pathLength="1" />
                      <path className={s["b-line"]} style={{ "--i": 1 } as CSSProperties} d="M66 150V94" pathLength="1" />
                      <path className={s["b-line"]} style={{ "--i": 2 } as CSSProperties} d="M80 150V50" pathLength="1" />
                      <path className={s["b-line"]} style={{ "--i": 3 } as CSSProperties} d="M90 150V50" pathLength="1" />
                      <path className={s["b-line"]} style={{ "--i": 4 } as CSSProperties} d="M100 150V50" pathLength="1" />
                      <path className={s["b-line"]} style={{ "--i": 0 } as CSSProperties} d="M110 150V50" pathLength="1" />
                      <path className={s["b-line"]} style={{ "--i": 1 } as CSSProperties} d="M120 150V50" pathLength="1" />
                      <path className={s["b-line"]} style={{ "--i": 2 } as CSSProperties} d="M133 150V76" pathLength="1" />
                      <path className={s["b-line"]} style={{ "--i": 3 } as CSSProperties} d="M146 150V76" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 0 } as CSSProperties} d="M52 139H80" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 1 } as CSSProperties} d="M52 128H80" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 2 } as CSSProperties} d="M52 117H80" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 3 } as CSSProperties} d="M52 106H80" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 4 } as CSSProperties} d="M52 95H80" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 5 } as CSSProperties} d="M52 94H80" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 0 } as CSSProperties} d="M80 139H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 1 } as CSSProperties} d="M80 128H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 2 } as CSSProperties} d="M80 117H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 3 } as CSSProperties} d="M80 106H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 4 } as CSSProperties} d="M80 95H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 5 } as CSSProperties} d="M80 84H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 6 } as CSSProperties} d="M80 73H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 7 } as CSSProperties} d="M80 62H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 8 } as CSSProperties} d="M80 51H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 9 } as CSSProperties} d="M80 50H120" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 0 } as CSSProperties} d="M120 139H146" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 1 } as CSSProperties} d="M120 128H146" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 2 } as CSSProperties} d="M120 117H146" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 3 } as CSSProperties} d="M120 106H146" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 4 } as CSSProperties} d="M120 95H146" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 5 } as CSSProperties} d="M120 84H146" pathLength="1" />
                      <path className={s["b-slab"]} style={{ "--i": 6 } as CSSProperties} d="M120 76H146" pathLength="1" />
                    </g>
                    <g className={s["b-crane"]}>
                      <path d="M162 150V30" pathLength="1" />
                      <path d="M104 38H178" pathLength="1" />
                      <path d="M162 30L112 38" pathLength="1" />
                      <path d="M162 30L176 38" pathLength="1" />
                      <path d="M124 38V60" pathLength="1" />
                      <rect className={s["b-crane__load"]} x="119" y="60" width="10" height="5" />
                    </g>
                    <g className={s["b-faces"]}>
                      <rect style={{ "--i": 0 } as CSSProperties} x="52" y="94" width="28" height="56" />
                      <rect style={{ "--i": 1 } as CSSProperties} x="80" y="50" width="40" height="100" />
                      <rect style={{ "--i": 2 } as CSSProperties} x="120" y="76" width="26" height="74" />
                    </g>
                    <g className={s["b-wins"]}>
                      <rect style={{ "--i": 3 } as CSSProperties} x="56" y="99" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="63" y="99" width="4" height="5" />
                      <rect style={{ "--i": 8 } as CSSProperties} x="70" y="99" width="4" height="5" />
                      <rect style={{ "--i": 2 } as CSSProperties} x="56" y="110" width="4" height="5" />
                      <rect style={{ "--i": 5 } as CSSProperties} x="63" y="110" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="70" y="110" width="4" height="5" />
                      <rect style={{ "--i": 7 } as CSSProperties} x="56" y="121" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="63" y="121" width="4" height="5" />
                      <rect style={{ "--i": 1 } as CSSProperties} x="70" y="121" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="56" y="132" width="4" height="5" />
                      <rect style={{ "--i": 0 } as CSSProperties} x="63" y="132" width="4" height="5" />
                      <rect style={{ "--i": 7 } as CSSProperties} x="70" y="132" width="4" height="5" />
                      <rect style={{ "--i": 4 } as CSSProperties} x="84" y="55" width="4" height="5" />
                      <rect style={{ "--i": 8 } as CSSProperties} x="92" y="55" width="4" height="5" />
                      <rect style={{ "--i": 3 } as CSSProperties} x="100" y="55" width="4" height="5" />
                      <rect style={{ "--i": 3 } as CSSProperties} x="108" y="55" width="4" height="5" />
                      <rect style={{ "--i": 7 } as CSSProperties} x="84" y="66" width="4" height="5" />
                      <rect style={{ "--i": 8 } as CSSProperties} x="92" y="66" width="4" height="5" />
                      <rect style={{ "--i": 8 } as CSSProperties} x="100" y="66" width="4" height="5" />
                      <rect style={{ "--i": 7 } as CSSProperties} x="108" y="66" width="4" height="5" />
                      <rect style={{ "--i": 6 } as CSSProperties} x="84" y="77" width="4" height="5" />
                      <rect style={{ "--i": 2 } as CSSProperties} x="92" y="77" width="4" height="5" />
                      <rect style={{ "--i": 3 } as CSSProperties} x="100" y="77" width="4" height="5" />
                      <rect style={{ "--i": 2 } as CSSProperties} x="108" y="77" width="4" height="5" />
                      <rect style={{ "--i": 8 } as CSSProperties} x="84" y="88" width="4" height="5" />
                      <rect style={{ "--i": 6 } as CSSProperties} x="92" y="88" width="4" height="5" />
                      <rect style={{ "--i": 0 } as CSSProperties} x="100" y="88" width="4" height="5" />
                      <rect style={{ "--i": 1 } as CSSProperties} x="108" y="88" width="4" height="5" />
                      <rect style={{ "--i": 2 } as CSSProperties} x="84" y="99" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="92" y="99" width="4" height="5" />
                      <rect style={{ "--i": 0 } as CSSProperties} x="100" y="99" width="4" height="5" />
                      <rect style={{ "--i": 4 } as CSSProperties} x="108" y="99" width="4" height="5" />
                      <rect style={{ "--i": 0 } as CSSProperties} x="84" y="110" width="4" height="5" />
                      <rect style={{ "--i": 4 } as CSSProperties} x="92" y="110" width="4" height="5" />
                      <rect style={{ "--i": 7 } as CSSProperties} x="100" y="110" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="108" y="110" width="4" height="5" />
                      <rect style={{ "--i": 6 } as CSSProperties} x="84" y="121" width="4" height="5" />
                      <rect style={{ "--i": 6 } as CSSProperties} x="92" y="121" width="4" height="5" />
                      <rect style={{ "--i": 6 } as CSSProperties} x="100" y="121" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="108" y="121" width="4" height="5" />
                      <rect style={{ "--i": 7 } as CSSProperties} x="84" y="132" width="4" height="5" />
                      <rect style={{ "--i": 2 } as CSSProperties} x="92" y="132" width="4" height="5" />
                      <rect style={{ "--i": 5 } as CSSProperties} x="100" y="132" width="4" height="5" />
                      <rect style={{ "--i": 1 } as CSSProperties} x="108" y="132" width="4" height="5" />
                      <rect style={{ "--i": 0 } as CSSProperties} x="124" y="81" width="4" height="5" />
                      <rect style={{ "--i": 2 } as CSSProperties} x="131" y="81" width="4" height="5" />
                      <rect style={{ "--i": 7 } as CSSProperties} x="138" y="81" width="4" height="5" />
                      <rect style={{ "--i": 3 } as CSSProperties} x="124" y="92" width="4" height="5" />
                      <rect style={{ "--i": 4 } as CSSProperties} x="131" y="92" width="4" height="5" />
                      <rect style={{ "--i": 6 } as CSSProperties} x="138" y="92" width="4" height="5" />
                      <rect style={{ "--i": 4 } as CSSProperties} x="124" y="103" width="4" height="5" />
                      <rect style={{ "--i": 6 } as CSSProperties} x="131" y="103" width="4" height="5" />
                      <rect style={{ "--i": 8 } as CSSProperties} x="138" y="103" width="4" height="5" />
                      <rect style={{ "--i": 6 } as CSSProperties} x="124" y="114" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="131" y="114" width="4" height="5" />
                      <rect style={{ "--i": 5 } as CSSProperties} x="138" y="114" width="4" height="5" />
                      <rect style={{ "--i": 8 } as CSSProperties} x="124" y="125" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="131" y="125" width="4" height="5" />
                      <rect style={{ "--i": 6 } as CSSProperties} x="138" y="125" width="4" height="5" />
                      <rect style={{ "--i": 9 } as CSSProperties} x="124" y="136" width="4" height="5" />
                      <rect style={{ "--i": 3 } as CSSProperties} x="131" y="136" width="4" height="5" />
                      <rect style={{ "--i": 5 } as CSSProperties} x="138" y="136" width="4" height="5" />
                    </g>
                    <g className={s["b-crown"]}>
                      <rect x="77" y="46" width="46" height="4" />
                      <path d="M100 46V32" />
                    </g>
                  </svg>
                  <span className={s["emblem__kicker"]}>Celebrating</span>
                  <span className={s["emblem__num"]}>
                    <svg className={s["num"]} viewBox="0 0 100 120" aria-hidden="true">
                      <text className={s["num__stroke"]} x="50" y="115" textAnchor="middle">1</text>
                      <text className={s["num__fill"]} x="50" y="115" textAnchor="middle">1</text>
                    </svg>
                  </span>
                  <span className={s["emblem__year"]}>Year</span>
                  <span className={s["emblem__rule"]}></span>
                  <span className={s["emblem__label"]}>Anniversary</span>
                </div>
              </aside>
  );
}
