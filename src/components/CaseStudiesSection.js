"use client";

import { useState } from "react";
import styles from "./CaseStudiesSection.module.css";
import { ArrowIcon } from "./icons";
import quadImg from "@/assets/logo-quad.png";

const STUDIES = [
  {
    id: 1,
    category: "Getting Started",
    title: "How we help brand reach out to more people",
    brand: "Zoomerr",
    imageSrc: quadImg.src,
    panelBg: "#0B1D30",
  },
  {
    id: 2,
    category: "Case Study",
    title: "Streamlining open banking for enterprise scale",
    brand: "SmartFinder",
    imageSrc: quadImg.src,
    panelBg: "#0B1D30",
  },
  {
    id: 3,
    category: "Success Story",
    title: "Digital transformation in core banking services",
    brand: "ArtVenue",
    imageSrc: quadImg.src,
    panelBg: "#0B1D30",
  },
  {
    id: 4,
    category: "Partnership",
    title: "Next-generation loan management at scale",
    brand: "Shells",
    imageSrc: quadImg.src,
    panelBg: "#0B1D30",
  },
];

// Active card: narrowed by SIDE_PEEK on each side (so under card peeks left+right)
// Under card:  full width, behind, slides up from below on transition
const SIDE_PEEK = "44px";

function relStyle(rel) {
  if (rel === 0) return {
    transform: "translateY(0)",
    opacity: 1,
    zIndex: 3,
    pointerEvents: "auto",
    left: SIDE_PEEK,
    right: SIDE_PEEK,
    top: "0px",
    bottom: "0px",
  };
  if (rel === 1) return {
    transform: "translateY(0)",
    opacity: 0.5,
    zIndex: 2,
    pointerEvents: "none",
    left: "0",
    right: "0",
    top: "40px",     // equal top + bottom → vertically centered, shorter strip on sides
    bottom: "40px",
  };
  if (rel < 0) return {
    transform: "translateY(-115%)",
    opacity: 0,
    zIndex: 1,
    pointerEvents: "none",
    left: SIDE_PEEK,
    right: SIDE_PEEK,
    top: "0px",
    bottom: "0px",
  };
  return {
    transform: "translateY(115%)",
    opacity: 0,
    zIndex: 0,
    pointerEvents: "none",
    left: "0",
    right: "0",
    top: "40px",
    bottom: "40px",
  };
}

export default function CaseStudiesSection() {
  const [idx, setIdx] = useState(0);
  const total = STUDIES.length;

  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(total - 1, i + 1));

  return (
    <section className={styles.section} id="case-studies">
      <div className={styles.container}>

        <h2 className={styles.sectionTitle}>Our Case Studies</h2>

        {/* ── Stacked stage ─────────────────── */}
        <div className={styles.stage}>
          {STUDIES.map((study, i) => (
            <div
              key={study.id}
              className={styles.cardWrap}
              style={relStyle(i - idx)}
            >
              <div className={styles.card}>

                {/* Left image panel */}
                <div className={styles.cardLeft} style={{ background: study.panelBg }}>
                  {study.imageSrc
                    ? <img src={study.imageSrc} alt={study.brand} className={styles.cardImg} />
                    : <div className={styles.cardImgPlaceholder} />
                  }
                </div>

                {/* Right content panel */}
                <div className={styles.cardRight}>
                  <span className={styles.category}>{study.category}</span>
                  <h3 className={styles.cardTitle}>{study.title}</h3>
                  <div className={styles.brandRow}>
                    <span className={styles.brandIcon}><BoltIcon /></span>
                    <span className={styles.brandName}>{study.brand}</span>
                  </div>
                  <a href={`#case-${study.id}`} className="btn-secondary" style={{ width: "100%" }}>
                    Read More
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Controls ──────────────────────── */}
        <div className={styles.controls}>
          <div className={styles.navGroup}>
            <button onClick={prev} className={styles.arrowBtn} aria-label="Previous" disabled={idx === 0}>
              <ChevronLeft />
            </button>
            <div className={styles.dots} role="tablist">
              {STUDIES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`${styles.dot} ${i === idx ? styles.dotActive : ""}`}
                />
              ))}
            </div>
            <button onClick={next} className={styles.arrowBtn} aria-label="Next" disabled={idx === total - 1}>
              <ChevronRight />
            </button>
          </div>
          <a href="#case-studies" className={`learn-more ${styles.viewAll}`}>
            <span>View</span>{" All "}
            <ArrowIcon />
          </a>
        </div>

      </div>
    </section>
  );
}

function BoltIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M7 1L3 7H6.5L5 11L9 5H5.5L7 1Z"/>
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M11 4.5L6.5 9L11 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
