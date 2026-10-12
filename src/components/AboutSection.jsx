import React from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/CustomIcons';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding about-section" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap">
            <Image
              src="/images/vijay-creator-hero.jpg"
              alt="MS ELITE content studio"
              className="about-img"
              width={640}
              height={520}
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

          <div className="about-content">
            <span className="mono-eyebrow">ABOUT MS ELITE</span>
            <h2 id="about-title" className="about-title">
              Beyond Marketing.
            </h2>

            <p className="about-lead">
              MS ELITE is a creative agency focused on personal branding, professional content production, video editing, and social media marketing.
            </p>

            <p className="about-text">
              We help professionals, coaches, healthcare experts, and business owners build a stronger digital presence through consistent, high-quality content.
            </p>

            <p className="about-text">
              Our founder started as a freelance video editor and developed that experience into a creative agency. With a hands-on background in video editing, content creation, and working with influencer clients, the founder focuses on building content systems that support personal brands and businesses.
            </p>

            <div className="about-meta-row">
              <div className="about-meta-item">
                <span className="about-meta-label">AGENCY</span>
                <span className="about-meta-val">MS ELITE</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">LOCATION</span>
                <span className="about-meta-val">Chennai, Tamil Nadu, India</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">FOCUS</span>
                <span className="about-meta-val">Personal Branding & Content</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">CLIENTS</span>
                <span className="about-meta-val">Doctors, Coaches, Founders & Brands</span>
              </div>
            </div>

            <div style={{ marginTop: '8px' }}>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.project)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.875rem' }}
              >
                <WhatsAppIcon size={16} />
                <span>Discuss Your Project</span>
                <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
