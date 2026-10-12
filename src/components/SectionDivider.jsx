import React from 'react';

/**
 * Organic Wave & Angle Section Dividers
 * Creates smooth organic transitions between contrasting sections (Dark Forest, Natural Sand, Mist Sage)
 */
export function WaveDivider({ fill = "var(--bg-sand)", flip = false, className = "" }) {
  return (
    <div className={`section-wave-divider ${flip ? 'wave-flip' : ''} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="section-wave-svg"
      >
        <path
          d="M0,32 C280,78 540,12 820,54 C1100,96 1320,38 1440,48 L1440,96 L0,96 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function OrganicPebbleDivider({ fill = "#141F1A", className = "" }) {
  return (
    <div className={`section-wave-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="section-wave-svg"
      >
        <path
          d="M0,0 C340,70 700,80 1080,30 C1260,8 1380,24 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
