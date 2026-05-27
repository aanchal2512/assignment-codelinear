import styles from "./HeroSection.module.css";
import heroPhoto        from "@/assets/hero-photo.png";
import heroBalanceCard  from "@/assets/hero-balance-card.png";
import heroActivityCard from "@/assets/hero-activity-card.png";
import logoShells       from "@/assets/logo-shells.png";
import logoSmartFinder  from "@/assets/logo-smartfinder.png";
import logoZoomerr      from "@/assets/logo-zoomerr.png";
import logoArtVenue     from "@/assets/logo-artvenue.png";
import logoKontrastr    from "@/assets/logo-kontrastr.png";
import logoWaves        from "@/assets/logo-wavesmarathon.png";

const BRANDS = [
  { name: "SHELLS",        src: logoShells.src },
  { name: "SmartFinder",   src: logoSmartFinder.src },
  { name: "Zoomerr",       src: logoZoomerr.src },
  { name: "ArtVenue",      src: logoArtVenue.src },
  { name: "kontrastr",     src: logoKontrastr.src },
  { name: "WAVESMARATHON", src: logoWaves.src },
];

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left: copy ───────────────────── */}
          <div className={styles.copy}>
            <h1 className={styles.heading}>
              The new foundation
              <br />
              of modern banking
            </h1>
            <p className={styles.subtitle}>
              We drive innovation and growth, provide seamless customer
              experience and operational excellence
            </p>
            <div className={styles.cta}>
              <a href="#demo"    className="btn-primary">Request Demo</a>
              <a href="#contact" className="btn-secondary">Contact Us</a>
            </div>
          </div>

          {/* ── Right: composite mockup ───────── */}
          <div className={styles.visual}>
            <div className={styles.visualGlow} aria-hidden="true" />
            <div className={styles.mockup}>

              {/* Background photo */}
              <div className={styles.photoFrame}>
                <img
                  src={heroPhoto.src}
                  alt="Person using banking app"
                  className={styles.photo}
                />
              </div>

              {/* Balance card — top right */}
              <div className={styles.balanceCard}>
                <img
                  src={heroBalanceCard.src}
                  alt="Account balance card"
                  className={styles.cardImgRight}
                />
              </div>

              {/* Activity card — bottom left */}
              <div className={styles.activityCard}>
                <img
                  src={heroActivityCard.src}
                  alt="Recent activity card"
                  className={styles.cardImgLeft}
                />
              </div>

            </div>
          </div>

        </div>

        {/* ── Trusted By ───────────────────────── */}
        <div className={styles.trustedBy}>
          <span className={styles.trustedLabel}>Trusted By:</span>
          <ul className={styles.brandList} aria-label="Trusted brands">
            {BRANDS.map(({ name, src }) => (
              <li key={name} className={styles.brandItem}>
                <img src={src} alt={name} className={styles.brandLogo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

