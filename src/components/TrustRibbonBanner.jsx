'use client';

import React from 'react';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon } from './icons/CustomIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function TrustRibbonBanner() {
  const principles = [
    {
      num: "01",
      title: "Clarity",
      desc: "People should understand who you help and why your approach works in under 60 seconds."
    },
    {
      num: "02",
      title: "Consistency",
      desc: "A recognizable visual rhythm, clean audio, and steady weekly publishing cadence."
    },
    {
      num: "03",
      title: "Credibility",
      desc: "Demonstrate real clinical or business depth instead of chasing hollow viral trends."
    }
  ];

  return (
    <div className="trust-ribbon-wrapper" aria-labelledby="philosophy-ribbon-title">
      {/* Top Wave Cap: Seamless organic transition rising from the ivory About section into the charcoal ribbon (#161618) */}
      <div className="trust-wave-cap trust-wave-cap-top" aria-hidden="true">
        <svg
          viewBox="0 0 1440 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="trust-wave-cap-svg"
        >
          <path
            d="M0,24 C320,54 680,6 1040,38 C1240,56 1360,18 1440,24 L1440,54 L0,54 Z"
            fill="#161618"
          />
        </svg>
      </div>

      {/* Main Flowing Charcoal Section with Seamless Animated Background Waves */}
      <section className="trust-ribbon-section">
        <div className="trust-ribbon-bg" aria-hidden="true">
          <svg
            className="trust-ribbon-flow-svg"
            viewBox="0 0 2880 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Wave 1: Deep Terracotta Flow */}
            <path
              className="trust-flow-track track-1"
              d="M0,160 C360,80 720,240 1080,140 C1260,90 1380,180 1440,160 C1800,80 2160,240 2520,140 C2700,90 2820,180 2880,160 L2880,440 L0,440 Z"
              fill="url(#flowGrad1)"
              opacity="0.75"
            />

            {/* Wave 2: Warm Amber & Rust Swell */}
            <path
              className="trust-flow-track track-2"
              d="M0,220 C320,140 680,300 1040,190 C1220,130 1360,240 1440,220 C1760,140 2120,300 2480,190 C2660,130 2800,240 2880,220 L2880,440 L0,440 Z"
              fill="url(#flowGrad2)"
              opacity="0.85"
            />

            {/* Wave 3: Foreground Soft Terracotta Shimmer */}
            <path
              className="trust-flow-track track-3"
              d="M0,280 C400,200 760,360 1120,260 C1280,210 1380,300 1440,280 C1840,200 2200,360 2560,260 C2720,210 2820,300 2880,280 L2880,440 L0,440 Z"
              fill="url(#flowGrad3)"
              opacity="0.95"
            />

            {/* Fine gold line riding the middle wave */}
            <path
              className="trust-flow-track track-2"
              d="M0,220 C320,140 680,300 1040,190 C1220,130 1360,240 1440,220 C1760,140 2120,300 2480,190 C2660,130 2800,240 2880,220"
              fill="none"
              stroke="url(#flowGoldLine)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />

            <defs>
              <linearGradient id="flowGoldLine" x1="0" y1="0" x2="2880" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C9A55C" stopOpacity="0" />
                <stop offset="25%" stopColor="#C9A55C" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#E2C98F" stopOpacity="0.2" />
                <stop offset="75%" stopColor="#C9A55C" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#C9A55C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flowGrad1" x1="0" y1="0" x2="2880" y2="440" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1E1E21" />
                <stop offset="50%" stopColor="#2A2A2E" />
                <stop offset="100%" stopColor="#1A1A1D" />
              </linearGradient>
              <linearGradient id="flowGrad2" x1="0" y1="0" x2="2880" y2="440" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#18181B" />
                <stop offset="50%" stopColor="#232327" />
                <stop offset="100%" stopColor="#141416" />
              </linearGradient>
              <linearGradient id="flowGrad3" x1="0" y1="0" x2="2880" y2="440" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#121214" />
                <stop offset="50%" stopColor="#1C1C1F" />
                <stop offset="100%" stopColor="#0F0F11" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container trust-ribbon-content">
          <div className="trust-ribbon-center">
            <h2 id="philosophy-ribbon-title" className="trust-ribbon-title">
              Posting More Isn’t The Goal.
            </h2>

            <p className="trust-ribbon-subtext">
              Being known for the right thing is.
            </p>

            {/* 3 Core Principles in Compact, Sleek Ribbon Cards */}
            <div className="trust-ribbon-triplet" role="list">
              {principles.map((item) => (
                <div key={item.title} className="trust-principle-card" role="listitem">
                  <div className="trust-principle-header">
                    <span className="trust-principle-num">{item.num}</span>
                    <h3 className="trust-principle-title">{item.title}</h3>
                  </div>
                  <p className="trust-principle-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="trust-ribbon-action">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary trust-ribbon-btn"
              >
                <WhatsAppIcon size={18} />
                <span>Let's Build Your Brand</span>
                <ArrowUpRightIcon size={15} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Wave Cap: Seamless organic transition flowing from the charcoal ribbon (#161618) into the ivory FAQ section */}
      <div className="trust-wave-cap trust-wave-cap-bottom" aria-hidden="true">
        <svg
          viewBox="0 0 1440 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="trust-wave-cap-svg"
        >
          <path
            d="M0,0 C320,40 680,4 1040,34 C1240,50 1360,14 1440,20 L1440,0 L0,0 Z"
            fill="#161618"
          />
        </svg>
      </div>
    </div>
  );
}
