import styles from "./CoreBankingSection.module.css";
import { ArrowIcon } from "./icons";
import dashboardImg from "@/assets/aml-dashboard.png";

export default function CoreBankingSection() {
  return (
    <section className={styles.section} id="core-banking">
      {/* Large background "CB7" outline text */}
      <span className={styles.bgText} aria-hidden="true">CB7</span>


      <div className={styles.container}>

        {/* ── Left copy ───────────────────── */}
        <div className={styles.copy}>
          <h2 className={styles.heading}>
            A complete cloud-based
            <br />
            core banking.
          </h2>
          <p className={styles.subtitle}>
            Faster time to market with our cloud-based
            <br />
            core banking services
          </p>
          <div className={styles.cta}>
            <a href="#demo" className="btn-primary">Request Demo</a>
            <a href="#core-banking-learn" className="learn-more">
              <span>Learn</span>
              {" More "}
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* ── Right: dashboard mockup ──────── */}
        <div className={styles.visual}>
          <div className={styles.laptopScreen}>
            <img
              src={dashboardImg.src}
              alt="AML Dashboard"
              className={styles.dashboardImg}
            />
          </div>
          <div className={styles.laptopBase} />
        </div>

      </div>
    </section>
  );
}
