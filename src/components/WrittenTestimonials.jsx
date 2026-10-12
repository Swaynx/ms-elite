import React from 'react';

export default function WrittenTestimonials() {
  return (
    <section className="section-padding" aria-labelledby="written-test-title">
      <div className="container">
        <div className="section-header">
          <span className="mono-eyebrow">WRITTEN TESTIMONIALS</span>
          <h2 id="written-test-title" className="section-title">
            Words From Clients.
          </h2>
        </div>

        <div className="written-test-layout">
          {/* One Large Featured Quote */}
          <div className="featured-quote-box">
            <blockquote className="featured-quote-text">
              “Vijay has a rare gift for listening to a rambling 10-minute explanation of my work and distilling it into a 45-second script that hits the exact pain point of my ideal clients. Working with him removed all my content anxiety.”
            </blockquote>
            <div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Siddharth Menon
              </div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '2px', fontWeight: 600 }}>
                FOUNDER & ADVISOR · FINTECH SERVICES · CHENNAI
              </div>
            </div>
          </div>

          {/* 2 Supporting Quotes */}
          <div className="supporting-quotes-col">
            <div className="supporting-quote-item">
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                “Before Vijay, our reels had low engagement because we were copying influencer hooks that felt cheap for a doctor. He gave our videos a clean, trustworthy aesthetic that our patients constantly compliment.”
              </p>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Dr. A. Karthikeyan
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                MEDICAL DIRECTOR · COIMBATORE
              </div>
            </div>

            <div className="supporting-quote-item">
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                “The editing quality is superb. Quick turnaround, clean motion graphics, and zero fluff. If you want reels that actually lead to business conversations, Vijay is the person to hire.”
              </p>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Divya Natarajan
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                CAREER COACH & AUTHOR · CHENNAI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
