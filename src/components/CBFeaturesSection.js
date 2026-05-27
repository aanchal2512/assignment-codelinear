import styles from "./CBFeaturesSection.module.css";
import { CheckIcon } from "./icons";
import kycImg from "@/assets/ckyc-dashboard.png";

const LEFT_FEATURES = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const RIGHT_FEATURES = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

export default function CBFeaturesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Left: laptop mockup ──────────────────── */}
        <div className={styles.laptopWrap}>
          <div className={styles.laptopScreen}>
            <img
              src={kycImg.src}
              alt="KYC Dashboard"
              className={styles.laptopImg}
            />
          </div>
          <div className={styles.laptopBase} />
        </div>

        {/* ── Right: feature content ───────────────── */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>
          <p className={styles.subLabel}>What you will get:</p>
          <div className={styles.bulletGrid}>
            <div className={styles.bulletCol}>
              {LEFT_FEATURES.map((f) => (
                <div key={f} className={styles.bulletItem}>
                  <CheckIcon className={styles.checkIcon} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className={styles.bulletCol}>
              {RIGHT_FEATURES.map((f) => (
                <div key={f} className={styles.bulletItem}>
                  <CheckIcon className={styles.checkIcon} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

