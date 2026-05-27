import styles from "./CBCTASection.module.css";

export default function CBCTASection() {
  return (
    <section className={styles.section}>
      {/* Background CB7 watermark */}
      <span className={styles.bgText} aria-hidden="true">CB7</span>

      {/* Decorative circles */}
      <div className={styles.circle1} aria-hidden="true" />
      <div className={styles.circle2} aria-hidden="true" />

      <div className={styles.container}>

        {/* Left: text card */}
        <div className={styles.card}>
          <h2 className={styles.heading}>
            Take the full advantage of
            <br />
            going paper-less now.
          </h2>
          <p className={styles.subtitle}>
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right: buttons */}
        <div className={styles.actions}>
          <a href="#contact" className="btn-secondary">Contact Us</a>
          <a href="#demo" className="btn-primary">Request Demo</a>
        </div>

      </div>
    </section>
  );
}
