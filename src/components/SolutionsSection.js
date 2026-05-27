import styles from "./SolutionsSection.module.css";
import { ArrowIcon } from "./icons";

const SOLUTIONS = [
  {
    id: "core-banking",
    Icon: CoreBankingIcon,
    tag: null,
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    id: "digital-banking",
    Icon: DigitalBankingIcon,
    tag: null,
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    id: "open-banking",
    Icon: OpenBankingIcon,
    tag: null,
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    id: "loan-origination",
    Icon: LoanOriginationIcon,
    tag: "NBFC",
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    id: "loan-management",
    Icon: LoanManagementIcon,
    tag: "NBFC",
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className={styles.section} aria-label="Solutions">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>

        {/* ── Left: sticky heading ─────────────── */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>
            All of our solutions are
            <br />
            tailor-made to your needs
          </h2>
          <a href="#demo" className="btn-secondary">Request Demo</a>
        </div>

        {/* ── Right: card grid ─────────────────── */}
        <div className={styles.cardsGrid}>
          {SOLUTIONS.map(({ id, Icon, tag, title, description }) => (
            <div key={id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.iconWrap}>
                  <Icon />
                </span>
                {tag && <span className={styles.tag}>{tag}</span>}
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
              <a href={`#${id}`} className="learn-more">
                <span>Learn</span>
                {" More "}
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── SVG Icons ──────────────────────────────── */

function CoreBankingIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <path d="M19 19c-1-3-1.5-7 1-10s7-3.5 8-1-2 6.5-5.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 19c3.5 1 7 .5 9.5 2.5s3 6 1 7.5-6.5.5-9-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 19c-2.5 2.5-4 6-7.5 7.5s-7.5.5-8-2 2-5.5 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DigitalBankingIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="27" cy="11" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="11" cy="27" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="27" cy="27" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="14.5" y1="11" x2="23.5" y2="11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="14.5" y1="27" x2="23.5" y2="27" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="11" y1="14.5" x2="11" y2="23.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="27" y1="14.5" x2="27" y2="23.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function OpenBankingIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <circle cx="14.5" cy="19" r="9" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="23.5" cy="19" r="9" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

function LoanOriginationIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <line x1="19" y1="5"  x2="19" y2="33" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="5"  y1="19" x2="33" y2="19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="8.5" y1="8.5" x2="29.5" y2="29.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="29.5" y1="8.5" x2="8.5" y2="29.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function LoanManagementIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <path d="M19 4L34 19L19 34L4 19L19 4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="19" y1="4"  x2="19" y2="34" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="4"  y1="19" x2="34" y2="19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
