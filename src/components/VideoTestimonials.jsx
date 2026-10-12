'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X, Star } from 'lucide-react';

export default function VideoTestimonials() {
  const [activeModal, setActiveModal] = useState(null);

  const testimonials = [
    {
      id: "priya",
      name: "Dr. Priya Ramaswamy",
      role: "Consultant Physician & Clinic Founder",
      location: "Chennai, Tamil Nadu",
      thumb: "/images/reel-doctor.jpg",
      badge: "Healthcare & Clinic",
      duration: "0:48 Reel",
      quote: "Vijay helped me overcome the hesitation of speaking on camera. He handled all editing and made sure my medical advice was delivered with warmth and authority.",
      videoTitle: "Dr. Priya on Building Trust Through Medical Reels"
    },
    {
      id: "arun",
      name: "Arun Joseph",
      role: "Executive Leadership Coach",
      location: "Bangalore",
      badge: "Leadership Advisory",
      duration: "0:52 Reel",
      thumb: "/images/reel-coach.jpg",
      quote: "My reels look crisp, modern, and genuinely reflect my voice. We saw a noticeable jump in direct inquiries within 60 days of consistent posting.",
      videoTitle: "Arun Joseph on Consistency & Inbound Client Flow"
    },
    {
      id: "radhika",
      name: "Radhika Seth",
      role: "Founder, Holistic Living",
      location: "Coimbatore",
      badge: "Wellness Founder",
      duration: "0:42 Reel",
      thumb: "/images/testimonial-ananya.jpg",
      badge: "Wellness Founder",
      quote: "The best part is I only spend 90 minutes recording once a week. Vijay takes care of pacing, editing, and polish completely.",
      videoTitle: "Radhika on Sustainable Content Workflow"
    }
  ];

  return (
    <section id="video-reviews" className="section-padding video-testimonials-section" aria-labelledby="video-test-title">
      <div className="container">
        <div className="section-header">
          <span className="mono-eyebrow">VIDEO TESTIMONIALS</span>
          <h2 id="video-test-title" className="section-title">
            Watch Real Client Reactions.
          </h2>
          <p className="section-subtext">
            Short reel breakdowns from clients sharing how Vijay simplified their filming and elevated their digital presence.
          </p>
        </div>

        {/* 3 Perfectly Balanced Vertical 9:16 Cards */}
        <div className="video-test-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="video-test-card">
              {/* Vertical Video Thumbnail Frame */}
              <div
                className="video-thumb-container"
                onClick={() => setActiveModal(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveModal(item); }}
                aria-label={`Watch testimonial by ${item.name}`}
              >
                <Image
                  src={item.thumb}
                  alt={`Video testimonial from ${item.name}`}
                  className="video-thumb-img"
                  width={360}
                  height={560}
                  sizes="(max-width: 768px) 100vw, 360px"
                />

                {/* Duration / Category Badge */}
                <div className="video-badge-overlay">
                  <span className="video-badge-category">{item.badge}</span>
                  <span className="video-badge-duration">{item.duration}</span>
                </div>

                {/* Subtle vignette gradient */}
                <div className="video-thumb-gradient" />

                {/* Play Button */}
                <div className="video-play-btn" aria-hidden="true">
                  <Play size={18} fill="currentColor" stroke="none" />
                </div>
              </div>

              {/* Card Meta Content — Uniform Padding & Hierarchy */}
              <div className="video-card-meta">
                <div className="video-card-top-info">
                  <div className="proof-stars-group" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={13} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>
                  <h3 className="video-client-name">{item.name}</h3>
                  <p className="video-client-role">{item.role} · {item.location}</p>
                </div>

                <p className="video-client-quote">“{item.quote}”</p>

                <div className="video-card-action">
                  <button
                    type="button"
                    onClick={() => setActiveModal(item)}
                    className="video-watch-btn"
                  >
                    <span>Watch Testimonial Reel</span>
                    <span className="video-watch-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="video-modal-backdrop"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="video-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="video-modal-close-btn"
              aria-label="Close video player"
            >
              <X size={20} strokeWidth={2.2} />
            </button>

            <span className="mono-eyebrow" style={{ marginBottom: '6px' }}>CLIENT FEEDBACK</span>
            <h3 id="video-modal-title" className="video-modal-heading">
              {activeModal.videoTitle}
            </h3>

            <div className="video-modal-screen">
              <Image
                src={activeModal.thumb}
                alt={activeModal.name}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="video-modal-screen-overlay">
                <div className="video-modal-play-icon">
                  <Play size={24} fill="#FFFFFF" stroke="none" />
                </div>
                <p className="video-modal-quote">
                  “{activeModal.quote}”
                </p>
                <span className="video-modal-author">
                  {activeModal.name} · {activeModal.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
