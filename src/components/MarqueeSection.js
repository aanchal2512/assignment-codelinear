import styles from "./MarqueeSection.module.css";

const ITEMS = [
  { type: "star" },
  { type: "brand", text: "N7" },
  { type: "star" },
  { type: "text", text: "Say" },
  { type: "emoji", text: "👋" },
  { type: "text", text: "to the new way of banking" },
  { type: "star" },
  { type: "brand", text: "CB7" },
  { type: "star" },
  { type: "text", text: "Say" },
  { type: "emoji", text: "👋" },
  { type: "text", text: "to the new way of banking" },
];

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.star}>
      <line x1="12" y1="1" x2="12" y2="23" stroke="#C4CDD8" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="1" y1="12" x2="23" y2="12" stroke="#C4CDD8" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="3.5" y1="3.5" x2="20.5" y2="20.5" stroke="#C4CDD8" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="20.5" y1="3.5" x2="3.5" y2="20.5" stroke="#C4CDD8" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function Item({ item }) {
  if (item.type === "star") return <StarIcon />;
  if (item.type === "brand") return <span className={styles.brand}>{item.text}</span>;
  if (item.type === "emoji") return <span className={styles.emoji}>{item.text}</span>;
  return <span className={styles.text}>{item.text}</span>;
}

export default function MarqueeSection() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.section} aria-hidden="true">
      <div className={styles.track}>
        {track.map((item, i) => (
          <div key={i} className={styles.item}>
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
