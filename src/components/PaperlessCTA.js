import styles from "./PaperlessCTA.module.css";

export default function PaperlessCTA() {
  return (
    <section className={styles.section} aria-label="Paperless banking CTA">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.copy}>
            <h2 className={styles.heading}>
              Take the full advantage of
              <br />
              going paper-less now.
            </h2>
            <p className={styles.subtitle}>
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className={styles.actions}>
            <a href="#contact" className="btn-secondary">Contact Us</a>
            <a href="#demo" className="btn-primary">Request Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
