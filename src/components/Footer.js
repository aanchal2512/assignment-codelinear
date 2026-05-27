import styles from "./Footer.module.css";

const ADDRESSES = [
  {
    city: "London",
    text: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    text: "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    city: "Pune",
    text: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
];

const NAV_COLS = [
  {
    title: "Solutions",
    links: [
      { label: "Core Banking CB7",       href: "#core-banking" },
      { label: "Digital Banking N7",     href: "#digital-banking" },
      { label: "Open Banking",           href: "#open-banking" },
      { label: "Loan Origination System",href: "#loan-origination" },
      { label: "Loan Management System", href: "#loan-management" },
      { label: "Digital Transformation", href: "#digital-transformation" },
    ],
  },
  {
    title: "N7 Banking",
    links: [
      { label: "About Us",     href: "#about" },
      { label: "Solutions",    href: "#solutions" },
      { label: "Contact",      href: "#contact" },
      { label: "Company",      href: "#company" },
      { label: "Careers",      href: "#careers" },
      { label: "Insights",     href: "#insights" },
      { label: "Core Team",    href: "#core-team" },
      { label: "Brand Center", href: "#brand-center" },
    ],
  },
  {
    title: "Our Socials",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "X",        href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.upper}>

        {/* ── Brand N7 ────────────────────── */}
        <div className={styles.brand} aria-label="N7">N7</div>

        {/* ── Right content ───────────────── */}
        <div className={styles.content}>

          {/* Addresses */}
          <div className={styles.addresses}>
            {ADDRESSES.map(({ city, text }) => (
              <div key={city} className={styles.addressBlock}>
                <h4 className={styles.addressCity}>{city}</h4>
                <p className={styles.addressText}>{text}</p>
              </div>
            ))}
          </div>

          {/* Nav columns */}
          <div className={styles.navGrid}>
            {NAV_COLS.map(({ title, links }) => (
              <div key={title} className={styles.navCol}>
                <h4 className={styles.navColTitle}>{title}</h4>
                <ul className={styles.navList}>
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className={styles.navItem}>
                        <span>{label}</span>
                        <ArrowIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom copyright ────────────────── */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
