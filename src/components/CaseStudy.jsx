import React from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './icons/CustomIcons';

// Client names supplied in the MS ELITE brief. Logos, screenshots and results need client permission first.
const CLIENTS = ['Santhosh Prem', 'Finance with Harish', 'Physiora', 'Kavya Suha', 'Fit.edu'];

// The reel cards below are layout placeholders, not real client work.
// Replace their images and text with approved client samples before setting this to true.
const SHOW_REEL_SAMPLES = false;

export default function CaseStudy() {
  return (
    <section id="work" className="section-padding" aria-labelledby="work-title">
      <div className="container">
        <div className="section-header">
          <span className="mono-eyebrow">SELECTED WORK</span>
          <h2 id="work-title" className="section-title">
            Content That <br />
            Does The Talking.
          </h2>
          <p className="section-subtext">
            Personal brands and businesses we've created content for.
          </p>
        </div>

        {/* Featured Project */}
        <div className="work-featured-grid">
          <div className="work-featured-img-wrap">
            <Image
              src="/images/vijay-editing-bts.jpg"
              alt="Video editing workspace"
              className="work-featured-img"
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 640px"
            />
          </div>

          <div className="work-featured-info">
            <span className="work-meta-tag">OUR CLIENTS</span>
            <h3 className="work-title">
              Brands We've Worked With.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
              Personal branding, video editing and content for creators, professionals and growing businesses.
            </p>
            <div style={{ borderTop: '1px solid var(--border-medium)', paddingTop: '12px' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '10px' }}>
                CLIENTS
              </span>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CLIENTS.map((name) => (
                  <li
                    key={name}
                    style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '999px', padding: '6px 14px' }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '12px' }}>
                Work samples and case studies coming soon.
              </p>
            </div>
          </div>
        </div>

        {/* Triplet of Vertical Reel Examples (hidden until approved samples are added) */}
        {SHOW_REEL_SAMPLES && (
        <div className="work-grid-triplet">
          <div className="work-card-vertical">
            <div className="work-reel-thumb-wrap">
              <Image
                src="/images/reel-doctor.jpg"
                alt="Healthcare reel sample"
                className="work-reel-thumb"
                width={360}
                height={640}
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="work-card-body">
              <span className="work-meta-tag">HEALTHCARE & DOCTOR</span>
              <h4 className="work-card-title">Root-Cause Medical Education Reel</h4>
              <p className="work-card-desc">
                Paced clinical explanation into a 45-second high-clarity reel with patient-friendly lower thirds and calm color grading.
              </p>
            </div>
          </div>

          <div className="work-card-vertical">
            <div className="work-reel-thumb-wrap">
              <Image
                src="/images/reel-coach.jpg"
                alt="Coaching reel sample"
                className="work-reel-thumb"
                width={360}
                height={640}
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="work-card-body">
              <span className="work-meta-tag">COACHING & ADVISORY</span>
              <h4 className="work-card-title">Founder Leadership Breakdown</h4>
              <p className="work-card-desc">
                Synthesized a complex hiring thesis into a punchy talking-head reel with precise text animations and audio mastering.
              </p>
            </div>
          </div>

          <div className="work-card-vertical">
            <div className="work-reel-thumb-wrap">
              <Image
                src="/images/case-study-kairos.jpg"
                alt="Founder branding sample"
                className="work-reel-thumb"
                width={360}
                height={640}
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="work-card-body">
              <span className="work-meta-tag">FOUNDER BRANDING</span>
              <h4 className="work-card-title">Brand Identity & Digital Voice</h4>
              <p className="work-card-desc">
                Combined visual brand standards, cohesive cover carousels, and video editing guidelines across LinkedIn and Instagram.
              </p>
            </div>
          </div>
        </div>

        )}

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href={getWhatsAppUrl("Hi MS ELITE, I'd like to see some of your recent work.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <WhatsAppIcon size={17} />
            <span>Ask to See Our Recent Work on WhatsApp</span>
            <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
