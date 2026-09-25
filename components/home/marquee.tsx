import s from "./home.module.css";

const ITEMS = [
  { text: "One Year, One Vision" },
  { text: "አንድ ዓመት አንድ ራዕይ", amharic: true },
  { text: "Small Footprint, Grand Living" },
];

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className={s.marquee} aria-label="One year, one vision">
      <div className={s["marquee__track"]}>
        {loop.map((item, index) => (
          <span key={`${item.text}-${index}`} className="contents">
            <span className={item.amharic ? s.am : undefined}>{item.text}</span>
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}
