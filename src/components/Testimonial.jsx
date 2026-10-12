'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X } from '@phosphor-icons/react';

export default function Testimonial() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header">
          <span className="mono-tag section-eyebrow">Client Perspectives</span>
          <h2 id="testimonials-title" className="section-title">
            Reputations Built on Substance.
          </h2>
        </div>

        {/* Hero Testimonial: Large statement with portrait */}
        <div className="testimonial-hero-split">
          <div className="testimonial-portrait-frame">
            <Image
              src="/images/testimonial-ananya.jpg"
              alt="Dr. Ananya Sundaram — Enterprise Health Founder & Client"
              className="testimonial-portrait"
              width={480}
              height={640}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <div>
            <blockquote className="testimonial-hero-quote">
              “Working with Vijay was the first time someone didn't try to turn me into an influencer.
              He respected the intellectual gravity of our sector and built a positioning framework
              that commands immediate respect among institutional stakeholders.”
            </blockquote>

            <div className="testimonial-hero-author">
              <span className="testimonial-author-name">Dr. Ananya Sundaram</span>
              <span className="testimonial-author-role">
                FOUNDER & CEO · SUNDARAM HEALTH TECHNOLOGIES (CHENNAI)
              </span>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn-secondary"
                style={{ display: 'inline-flex', gap: '10px', fontSize: '0.875rem', padding: '10px 18px' }}
                aria-haspopup="dialog"
              >
                <Play size={16} weight="fill" color="var(--accent)" />
                <span>Watch Client Video Reflection (2 Min)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Supporting Testimonials */}
        <div className="testimonials-sub-grid">
          <div className="testimonial-card-editorial">
            <p className="testimonial-card-quote">
              “Before Vijay stepped in, our partners were exhausted by generic marketing agencies who wanted us to do dance trends and clickbait hooks. Vijay engineered an editorial cadence that attracted three sovereign fund introductions within six months.”
            </p>
            <div className="testimonial-hero-author" style={{ paddingTop: '12px' }}>
              <span className="testimonial-author-name">Karthik Narayanan</span>
              <span className="testimonial-author-role">MANAGING PARTNER · COROMANDEL CAPITAL ADVISORS</span>
            </div>
          </div>

          <div className="testimonial-card-editorial">
            <p className="testimonial-card-quote">
              “The voice capture process is extraordinary. In less than an hour every two weeks, he extracts my core operational thesis and translates it into writing that feels unmistakably mine. It has fundamentally transformed my client acquisition.”
            </p>
            <div className="testimonial-hero-author" style={{ paddingTop: '12px' }}>
              <span className="testimonial-author-name">R. Meenakshi</span>
              <span className="testimonial-author-role">INDEPENDENT CLOUD ARCHITECTURE ADVISOR · BANGALORE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(24, 24, 23, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-md)',
              maxWidth: '680px',
              width: '100%',
              padding: '32px',
              border: '1px solid var(--border-medium)',
              position: 'relative',
              boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                padding: '6px',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <span className="mono-tag" style={{ marginBottom: '12px' }}>Client Reflection</span>
            <h3 id="video-modal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '16px' }}>
              Dr. Ananya on Reputational Elevation
            </h3>

            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-sm)',
                padding: '28px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Play size={24} weight="fill" />
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '42ch' }}>
                “Vijay gave our organization a recognizable intellectual presence without ever compromising our institutional dignity.”
              </p>
              <span className="mono-tag" style={{ fontSize: '0.6875rem' }}>Full Interview Audio & Transcript Available on Request</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
