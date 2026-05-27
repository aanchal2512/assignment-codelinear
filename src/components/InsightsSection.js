import styles from "./InsightsSection.module.css";
import { ArrowIcon } from "./icons";
import quadImg from "@/assets/logo-quad.png";

const INSIGHTS = [
  {
    id: 1,
    category: "Getting Started",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    imageSrc: quadImg.src,
    panelBg: "#0B1D30",
    featured: true,
  },
  {
    id: 2,
    category: "Getting Started",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    id: 3,
    category: "Getting Started",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

export default function InsightsSection() {
  const [featured, ...rest] = INSIGHTS;

  return (
    <section className={styles.section} id="insights">
      <div className={styles.inner}>

        {/* ── Left column ─────────────────── */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <a href="#insights" className="btn-secondary">Insights</a>
        </div>

        {/* ── Right column ────────────────── */}
        <div className={styles.rightCol}>

          {/* Featured card — image left, content right */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage} style={{ background: featured.panelBg }}>
              {featured.imageSrc && (
                <img src={featured.imageSrc} alt={featured.title} className={styles.featuredImg} />
              )}
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.category}>{featured.category}</span>
              <h3 className={styles.cardTitle}>{featured.title}</h3>
              <p className={styles.meta}>
                <span className={styles.author}>{featured.author}</span>
                <span className={styles.date}>{featured.date}</span>
              </p>
              <a href={`#insight-${featured.id}`} className="btn-secondary" style={{ width: "100%" }}>
                Read More
              </a>
            </div>
          </div>

          {/* Two smaller cards */}
          <div className={styles.cardsRow}>
            {rest.map((item) => (
              <div key={item.id} className={styles.card}>
                {item.imageSrc && (
                  <img src={item.imageSrc} alt={item.title} className={styles.cardImg} />
                )}
                <div className={styles.cardBody}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.meta}>
                    <span className={styles.author}>{item.author}</span>
                    <span className={styles.date}>{item.date}</span>
                  </p>
                  <a href={`#insight-${item.id}`} className="btn-secondary" style={{ width: "100%" }}>
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Read all link */}
          <div className={styles.readAllRow}>
            <a href="#insights" className="learn-more">
              <span>Read</span>{" All Insights "}
              <ArrowIcon />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
