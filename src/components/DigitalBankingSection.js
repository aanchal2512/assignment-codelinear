import styles from "./DigitalBankingSection.module.css";
import { ArrowIcon, CheckIcon } from "./icons";
import phone1 from "@/assets/one.png";
import phone2 from "@/assets/two.png";
import phone3 from "@/assets/three.png";

const FEATURES = [
  {
    id: "compliance",
    title: "Fully compliant with regulatory requirement",
    description:
      "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    bullets: [
      "Pre-integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
    phoneSrc: phone1.src,
  },
  {
    id: "legacy",
    title: "No legacy IT systems",
    description:
      "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    bullets: [
      "Adaptive & Intelligent API monetization",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
    phoneSrc: phone2.src,
  },
  {
    id: "branches",
    title: "No traditional branches",
    description:
      "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
    bullets: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimized, Adoptable and Scalable",
    ],
    phoneSrc: phone3.src,
  },
];

export default function DigitalBankingSection() {
  return (
    <section className={styles.section} id="digital-banking-features">
      <div className={styles.container}>

        {/* ── Row 1: Intro | Phone | Feature ─────── */}
        <div className={styles.row1}>

          <div className={styles.intro}>
            <h2 className={styles.mainHeading}>
              Digital banking
              <br />
              out-of-the-box
            </h2>
            <p className={styles.mainSubtitle}>
              N7 helps your financial institution improve the client
              experience, automate and optimize procedures
            </p>
            <div className={styles.introCta}>
              <a href="#demo" className="btn-primary">Request Demo</a>
              <a href="#learn" className="learn-more" style={{ color: "#1A6FFF" }}>
                <span style={{ textDecorationColor: "#1A6FFF" }}>Learn</span>
                {" More "}
                <ArrowIcon />
              </a>
            </div>
          </div>

          <Phone src={FEATURES[0].phoneSrc} />

          <Feature item={FEATURES[0]} />
        </div>

        {/* ── Row 2: (spacer) | Feature | Phone ─────── */}
        <div className={styles.row2}>
          <div aria-hidden="true" />
          <Feature item={FEATURES[1]} />
          <Phone src={FEATURES[1].phoneSrc} />
        </div>

        {/* ── Row 3: (spacer) | Phone | Feature ─────── */}
        <div className={styles.row3}>
          <div aria-hidden="true" />
          <Phone src={FEATURES[2].phoneSrc} />
          <Feature item={FEATURES[2]} />
        </div>

      </div>
    </section>
  );
}

/* ── Sub-components ──────────────────────────── */

function Phone({ src }) {
  return (
    <div className={styles.phoneWrap}>
      <div className={styles.phoneFrame}>
        <div className={styles.phoneScreen}>
          {src
            ? <img src={src} alt="App screenshot" className={styles.phoneImg} />
            : <div className={styles.phonePlaceholder} />
          }
        </div>
      </div>
    </div>
  );
}

function Feature({ item }) {
  return (
    <div className={styles.feature}>
      <h3 className={styles.featureTitle}>{item.title}</h3>
      <p className={styles.featureDesc}>{item.description}</p>
      <ul className={styles.bullets}>
        {item.bullets.map((b) => (
          <li key={b} className={styles.bulletItem}>
            <CheckIcon className={styles.checkIcon} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

