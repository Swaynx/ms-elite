'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { WhatsAppIcon } from './icons/CustomIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function KineticMarqueeSection() {
  const marqueeText = "LET'S BUILD YOUR BRAND · MS ELITE · BEYOND MARKETING · ";

  return (
    <section className="kinetic-marquee-section" aria-label="Let's Talk Statement">
      {/* Giant Kinetic Outlined Typography Running Continuously in Background */}
      <div className="kinetic-marquee-track-wrap" aria-hidden="true">
        <div className="kinetic-marquee-track">
          <span className="kinetic-marquee-text">{marqueeText}</span>
          <span className="kinetic-marquee-text">{marqueeText}</span>
          <span className="kinetic-marquee-text">{marqueeText}</span>
          <span className="kinetic-marquee-text">{marqueeText}</span>
        </div>
      </div>

      <div className="container kinetic-content-container">
        <div className="kinetic-grid">
          {/* Left Column: Offset Statement Box */}
          <div className="kinetic-statement-wrap">
            <div className="kinetic-offset-frame">
              <h2 className="kinetic-title">
                Your Expertise Deserves <br />
                A Recognizable Voice.
              </h2>

              <p className="kinetic-body">
                From personal branding and professional shoots to video editing, social media
                design and Meta Ads, MS ELITE builds content systems that support personal brands
                and businesses.
              </p>

              <div className="kinetic-action-row">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary kinetic-cta-btn"
                >
                  <WhatsAppIcon size={18} />
                  <span>Let's Build Your Brand</span>
                  <ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Overlapping Floating Studio Portrait */}
          <div className="kinetic-media-wrap">
            <div className="kinetic-media-card">
              <Image
                src="/images/kinetic-filming-session.jpg"
                alt="Professional video shoot in a studio"
                width={560}
                height={640}
                className="kinetic-media-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
