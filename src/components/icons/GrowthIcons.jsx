import React from 'react';

/**
 * Bespoke, multi-layered illustrative icons for The Growth System
 * Designed with dual-tone depth, precision geometry, and the new creative personal branding palette:
 * Creative Coral (#C9A55C), Forest Green (#F2EDE4), and Natural Sand Ochre (#A8853F).
 */

// 01. Topic & Positioning Strategy Icon (Reticle, radar, target focal point)
export function StrategyBlueprintIcon({ size = 46, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="stratGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A55C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C9A55C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="stratGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E2C98F" />
          <stop offset="100%" stopColor="#C9A55C" />
        </linearGradient>
      </defs>

      {/* Ambient Radial Aura */}
      <circle cx="24" cy="24" r="22" fill="url(#stratGlow)" />

      {/* Outer Targeting Ring */}
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke="url(#stratGrad)"
        strokeWidth="2.2"
        strokeDasharray="4 3"
        strokeOpacity="0.85"
      />

      {/* Inner Precision Ring */}
      <circle
        cx="24"
        cy="24"
        r="11"
        stroke="#E2C98F"
        strokeWidth="1.8"
        strokeOpacity="0.9"
      />

      {/* Crosshair Axes */}
      <line x1="24" y1="2" x2="24" y2="9" stroke="url(#stratGrad)" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="24" y1="39" x2="24" y2="46" stroke="url(#stratGrad)" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="2" y1="24" x2="9" y2="24" stroke="url(#stratGrad)" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="39" y1="24" x2="46" y2="24" stroke="url(#stratGrad)" strokeWidth="2.4" strokeLinecap="round" />

      {/* Diagonal Calibration Ticks */}
      <circle cx="11.2" cy="11.2" r="1.5" fill="#E2C98F" fillOpacity="0.7" />
      <circle cx="36.8" cy="11.2" r="1.5" fill="#E2C98F" fillOpacity="0.7" />
      <circle cx="11.2" cy="36.8" r="1.5" fill="#E2C98F" fillOpacity="0.7" />
      <circle cx="36.8" cy="36.8" r="1.5" fill="#E2C98F" fillOpacity="0.7" />

      {/* Center Target Core */}
      <circle cx="24" cy="24" r="5" fill="#C9A55C" />
      <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
    </svg>
  );
}

// 02. 60-Min Batch Filming Icon (Cinema Studio Camera with optical glass lens)
export function StudioCameraIcon({ size = 46, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="camGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F2EDE4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F2EDE4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="camGrad" x1="4" y1="10" x2="44" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B9B3A8" />
          <stop offset="100%" stopColor="#F2EDE4" />
        </linearGradient>
      </defs>

      {/* Ambient Aura */}
      <circle cx="24" cy="24" r="22" fill="url(#camGlow)" />

      {/* Top Handle / Mic Mount */}
      <path
        d="M10 13H24M14 13V9C14 7.9 14.9 7 16 7H22C23.1 7 24 7.9 24 9V13"
        stroke="url(#camGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Camera Main Body */}
      <rect
        x="6"
        y="14"
        width="23"
        height="22"
        rx="5"
        stroke="url(#camGrad)"
        strokeWidth="2.4"
        fill="rgba(242, 237, 228, 0.1)"
      />

      {/* Creative Coral Tally Recording Dot */}
      <circle cx="11" cy="19" r="2" fill="#C9A55C" />

      {/* Center Optical Glass Circle */}
      <circle
        cx="17.5"
        cy="25"
        r="5"
        stroke="#B9B3A8"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="25" r="2" fill="#F2EDE4" />

      {/* Anamorphic Lens / Conical Projector */}
      <path
        d="M29 20.5L39.8 14.5C40.8 13.9 42 14.7 42 15.9V32.1C42 33.3 40.8 34.1 39.8 33.5L29 27.5"
        stroke="url(#camGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(242, 237, 228, 0.14)"
      />

      {/* Soundwave indicators */}
      <path
        d="M44 21C45.2 22.8 45.2 25.2 44 27"
        stroke="#B9B3A8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 03. High-Retention Video Editing Icon (Precision timeline cuts & spark flares)
export function TimelineEditingIcon({ size = 46, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="editGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A8853F" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A8853F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="editGrad" x1="6" y1="8" x2="42" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D9BE84" />
          <stop offset="100%" stopColor="#A8853F" />
        </linearGradient>
      </defs>

      {/* Ambient Aura */}
      <circle cx="24" cy="24" r="22" fill="url(#editGlow)" />

      {/* Timeline Monitor Window */}
      <rect
        x="6"
        y="8"
        width="36"
        height="22"
        rx="4"
        stroke="url(#editGrad)"
        strokeWidth="2.2"
        fill="rgba(201, 165, 92, 0.1)"
      />

      {/* Video Track Splices */}
      <rect x="10" y="12" width="11" height="6" rx="2" fill="url(#editGrad)" fillOpacity="0.35" />
      <rect x="23" y="12" width="15" height="6" rx="2" fill="url(#editGrad)" fillOpacity="0.5" />

      {/* Audio Waveform Bars */}
      <rect x="10" y="21" width="2" height="5" rx="1" fill="#A8853F" />
      <rect x="14" y="20" width="2" height="7" rx="1" fill="#D9BE84" />
      <rect x="18" y="22" width="2" height="4" rx="1" fill="#A8853F" />
      <rect x="23" y="19" width="2" height="9" rx="1" fill="#D9BE84" />
      <rect x="27" y="21" width="2" height="6" rx="1" fill="#A8853F" />
      <rect x="31" y="20" width="2" height="8" rx="1" fill="#D9BE84" />
      <rect x="35" y="22" width="2" height="4" rx="1" fill="#A8853F" />

      {/* Precision Playhead Needle */}
      <line x1="22" y1="6" x2="22" y2="33" stroke="#F2EDE4" strokeWidth="2" strokeLinecap="round" />
      <polygon points="19,6 25,6 22,9.5" fill="#F2EDE4" />

      {/* Precision Scissors / Cut Blades below */}
      <g transform="translate(10, 31)">
        <circle cx="5" cy="10" r="3.2" stroke="url(#editGrad)" strokeWidth="1.8" />
        <circle cx="23" cy="10" r="3.2" stroke="url(#editGrad)" strokeWidth="1.8" />
        <path d="M7.5 8L20.5 2" stroke="url(#editGrad)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M20.5 8L7.5 2" stroke="url(#editGrad)" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="14" cy="5" r="1.5" fill="#F2EDE4" />
      </g>

      {/* Sparkle Flares */}
      <path
        d="M39 4L40 7L43 8L40 9L39 12L38 9L35 8L38 7L39 4Z"
        fill="#D9BE84"
      />
    </svg>
  );
}

// 04. Inbound Client Conversion Icon (Rocket trajectory + exponential growth pulse)
export function ConversionGrowthIcon({ size = 46, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="growGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A55C" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C9A55C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="growGrad" x1="6" y1="42" x2="42" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F2EDE4" />
          <stop offset="100%" stopColor="#C9A55C" />
        </linearGradient>
      </defs>

      {/* Ambient Aura */}
      <circle cx="24" cy="24" r="22" fill="url(#growGlow)" />

      {/* Upward Growth Grid Bars */}
      <rect x="8" y="30" width="5" height="10" rx="2" fill="url(#growGrad)" fillOpacity="0.35" />
      <rect x="16" y="24" width="5" height="16" rx="2" fill="url(#growGrad)" fillOpacity="0.5" />
      <rect x="24" y="17" width="5" height="23" rx="2" fill="url(#growGrad)" fillOpacity="0.7" />
      <rect x="32" y="10" width="5" height="30" rx="2" fill="url(#growGrad)" fillOpacity="0.9" />

      {/* Exponential Growth Curve Line */}
      <path
        d="M6 35C14 34 20 28 36 11"
        stroke="#C9A55C"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Dynamic Arrowhead */}
      <path
        d="M26 10H38V22"
        stroke="#C9A55C"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Radiating Success / Inbound Signal Rings */}
      <circle cx="38" cy="10" r="4" stroke="#E2C98F" strokeWidth="1.6" strokeDasharray="2 2" />
      <circle cx="38" cy="10" r="7.5" stroke="#C9A55C" strokeWidth="1.4" strokeOpacity="0.6" strokeDasharray="3 3" />

      {/* Diamond Stars */}
      <path
        d="M12 12L13.5 15.5L17 17L13.5 18.5L12 22L10.5 18.5L7 17L10.5 15.5L12 12Z"
        fill="#C9A55C"
      />
    </svg>
  );
}
