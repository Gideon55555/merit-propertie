import s from "./home.module.css";

const ITEMS = [
  { text: "One Year, One Vision" },
  { text: "አንድ ዓመት አንድ ራዕይ", amharic: true },
  { text: "Small Footprint, Grand Living" },
];

const COPIES = 4;

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  const items = Array.from({ length: COPIES }, () => ITEMS).flat();

  return (
    <div className={s["marquee__group"]} aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <span key={`${item.text}-${index}`} className={item.amharic ? s.am : undefined}>
          {item.text}
          <i />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className={s.marquee} aria-label="One year, one vision">
      <div className={s["marquee__track"]}>
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}
